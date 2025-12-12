/**
 * TypeScript Parser using TypeScript Compiler API
 * Phase 1: Foundation
 */

import * as ts from 'typescript';
import { readFileSync } from 'fs';
import { glob } from 'glob';
import type {
  ParseResult,
  FunctionMetadata,
  ClassMetadata,
  InterfaceMetadata,
  TypeMetadata,
  ImportMetadata,
  JSDocMetadata,
} from '../types';

export class TypeScriptParser {
  async parseFile(filePath: string): Promise<ParseResult> {
    const fileContent = readFileSync(filePath, 'utf-8');

    // Determine ScriptKind based on file extension
    let scriptKind = ts.ScriptKind.TS;
    if (filePath.endsWith('.tsx')) {
      scriptKind = ts.ScriptKind.TSX;
    } else if (filePath.endsWith('.jsx')) {
      scriptKind = ts.ScriptKind.JSX;
    } else if (filePath.endsWith('.js')) {
      scriptKind = ts.ScriptKind.JS;
    }

    const sourceFile = ts.createSourceFile(
      filePath,
      fileContent,
      ts.ScriptTarget.Latest,
      true,
      scriptKind
    );

    const result: ParseResult = {
      filePath,
      functions: [],
      classes: [],
      interfaces: [],
      types: [],
      imports: [],
      exports: [],
    };

    const exportedNames = new Set<string>();

    // First pass: collect all exported names
    const collectExports = (node: ts.Node) => {
      // Handle export default statements: export default App
      if (ts.isExportAssignment(node) && !node.isExportEquals) {
        const exportedName = this.getExportAssignmentName(node);
        if (exportedName) exportedNames.add(exportedName);
      }

      // Handle named export lists: export { foo, bar }
      if (ts.isExportDeclaration(node) && node.exportClause && ts.isNamedExports(node.exportClause)) {
        node.exportClause.elements.forEach((element) => {
          exportedNames.add(element.name.getText());
        });
      }

      // Handle inline exports with export keyword: export function foo()
      if (this.isExported(node)) {
        const exportName = this.getExportName(node);
        if (exportName) exportedNames.add(exportName);
      }

      ts.forEachChild(node, collectExports);
    };

    collectExports(sourceFile);

    const visit = (node: ts.Node) => {
      // Parse function declarations
      if (ts.isFunctionDeclaration(node) && node.name) {
        result.functions.push(this.parseFunctionDeclaration(node, filePath, exportedNames));
      }

      // Parse class declarations
      if (ts.isClassDeclaration(node) && node.name) {
        result.classes.push(this.parseClassDeclaration(node, filePath, exportedNames));
      }

      // Parse interface declarations
      if (ts.isInterfaceDeclaration(node)) {
        result.interfaces.push(this.parseInterfaceDeclaration(node, filePath, exportedNames));
      }

      // Parse type alias declarations
      if (ts.isTypeAliasDeclaration(node)) {
        result.types.push(this.parseTypeAliasDeclaration(node, filePath, exportedNames));
      }

      // Parse import declarations
      if (ts.isImportDeclaration(node)) {
        const importData = this.parseImportDeclaration(node);
        if (importData) result.imports.push(importData);
      }

      ts.forEachChild(node, visit);
    };

    visit(sourceFile);

    // Populate exports array from collected names
    result.exports = Array.from(exportedNames);

    return result;
  }

  async parseDirectory(dirPath: string, pattern: string = '**/*.{ts,tsx,js,jsx}'): Promise<ParseResult[]> {
    const files = await glob(pattern, { cwd: dirPath, absolute: true });
    const results: ParseResult[] = [];

    for (const file of files) {
      try {
        const result = await this.parseFile(file);
        results.push(result);
      } catch (error) {
        console.error(`Error parsing file ${file}:`, error);
      }
    }

    return results;
  }

  private parseFunctionDeclaration(
    node: ts.FunctionDeclaration,
    filePath: string,
    exportedNames: Set<string>
  ): FunctionMetadata {
    const name = node.name?.getText() || 'anonymous';
    const jsdoc = this.extractJSDoc(node);
    const description = this.extractJSDocComment(node);
    const parameters = node.parameters.map((param) => ({
      name: param.name.getText(),
      type: param.type?.getText(),
      optional: !!param.questionToken,
      description: jsdoc?.params?.[param.name.getText()],
    }));

    return {
      name,
      description,
      parameters,
      returnType: node.type?.getText(),
      isExported: this.isExported(node) || exportedNames.has(name),
      isAsync: !!node.modifiers?.some((m) => m.kind === ts.SyntaxKind.AsyncKeyword),
      filePath,
      line: this.getLineNumber(node),
      jsdoc,
    };
  }

  private parseClassDeclaration(node: ts.ClassDeclaration, filePath: string, exportedNames: Set<string>): ClassMetadata {
    const name = node.name?.getText() || 'Anonymous';
    const jsdoc = this.extractJSDoc(node);
    const description = this.extractJSDocComment(node);

    const properties = node.members.filter(ts.isPropertyDeclaration).map((prop) => ({
      name: prop.name.getText(),
      type: prop.type?.getText(),
      isPrivate: this.hasModifier(prop, ts.SyntaxKind.PrivateKeyword),
      isStatic: this.hasModifier(prop, ts.SyntaxKind.StaticKeyword),
    }));

    const methods = node.members.filter(ts.isMethodDeclaration).map((method) => {
      const methodJsdoc = this.extractJSDoc(method);
      return {
        name: method.name.getText(),
        parameters: method.parameters.map((param) => ({
          name: param.name.getText(),
          type: param.type?.getText(),
          optional: !!param.questionToken,
          description: methodJsdoc?.params?.[param.name.getText()],
        })),
        returnType: method.type?.getText(),
        isPrivate: this.hasModifier(method, ts.SyntaxKind.PrivateKeyword),
        isStatic: this.hasModifier(method, ts.SyntaxKind.StaticKeyword),
        isAsync: !!method.modifiers?.some((m) => m.kind === ts.SyntaxKind.AsyncKeyword),
        description: methodJsdoc?.description,
      };
    });

    return {
      name,
      description,
      properties,
      methods,
      isExported: this.isExported(node) || exportedNames.has(name),
      extendsClass: this.getExtendsClause(node),
      implementsInterfaces: this.getImplementsClauses(node),
      filePath,
      line: this.getLineNumber(node),
      jsdoc,
    };
  }

  private parseInterfaceDeclaration(
    node: ts.InterfaceDeclaration,
    filePath: string,
    exportedNames: Set<string>
  ): InterfaceMetadata {
    const name = node.name.getText();
    const description = this.extractJSDocComment(node);

    const properties = node.members.filter(ts.isPropertySignature).map((prop) => ({
      name: prop.name?.getText() || '',
      type: prop.type?.getText(),
      optional: !!prop.questionToken,
    }));

    return {
      name,
      description,
      properties,
      isExported: this.isExported(node) || exportedNames.has(name),
      extendsInterfaces:
        node.heritageClauses
          ?.filter((clause) => clause.token === ts.SyntaxKind.ExtendsKeyword)
          .flatMap((clause) => clause.types.map((type) => type.expression.getText())) || [],
      filePath,
      line: this.getLineNumber(node),
    };
  }

  private parseTypeAliasDeclaration(node: ts.TypeAliasDeclaration, filePath: string, exportedNames: Set<string>): TypeMetadata {
    const name = node.name.getText();
    const description = this.extractJSDocComment(node);

    return {
      name,
      description,
      type: node.type.getText(),
      isExported: this.isExported(node) || exportedNames.has(name),
      filePath,
      line: this.getLineNumber(node),
    };
  }

  private parseImportDeclaration(node: ts.ImportDeclaration): ImportMetadata | null {
    const moduleSpecifier = (node.moduleSpecifier as ts.StringLiteral).text;
    const importClause = node.importClause;

    if (!importClause) return null;

    const specifiers: string[] = [];
    let isDefault = false;
    let isNamespace = false;

    if (importClause.name) {
      specifiers.push(importClause.name.getText());
      isDefault = true;
    }

    if (importClause.namedBindings) {
      if (ts.isNamespaceImport(importClause.namedBindings)) {
        specifiers.push(importClause.namedBindings.name.getText());
        isNamespace = true;
      } else if (ts.isNamedImports(importClause.namedBindings)) {
        importClause.namedBindings.elements.forEach((element) => {
          specifiers.push(element.name.getText());
        });
      }
    }

    return {
      source: moduleSpecifier,
      specifiers,
      isDefault,
      isNamespace,
    };
  }

  private extractJSDocComment(node: ts.Node): string | undefined {
    const jsdoc = this.extractJSDoc(node);
    return jsdoc?.description;
  }

  /**
   * Extract comprehensive JSDoc metadata including all tags
   */
  private extractJSDoc(node: ts.Node): JSDocMetadata | undefined {
    const sourceFile = node.getSourceFile();
    const fullText = sourceFile.getFullText();
    const commentRanges = ts.getLeadingCommentRanges(fullText, node.getFullStart());

    if (!commentRanges || commentRanges.length === 0) return undefined;

    const lastComment = commentRanges[commentRanges.length - 1];
    const commentText = fullText.substring(lastComment.pos, lastComment.end);

    // Must be JSDoc comment (/** ... */)
    if (!commentText.startsWith('/**')) return undefined;

    const metadata: JSDocMetadata = {
      examples: [],
      see: [],
      links: [],
      params: {},
      author: [],
      tags: [],
    };

    // Extract description (first line(s) before any tags)
    const descMatch = commentText.match(/\/\*\*\s*\n((?:\s*\*(?!\s*@).*\n)*)/);
    if (descMatch) {
      const desc = descMatch[1]
        .split('\n')
        .map((line) => line.replace(/^\s*\*\s?/, '').trim())
        .filter((line) => line.length > 0)
        .join(' ');
      if (desc) metadata.description = desc;
    }

    // Extract @example tags
    const exampleMatches = commentText.matchAll(/@example\s*\n((?:(?!\s*@).*\n)*)/g);
    for (const match of exampleMatches) {
      const exampleText = match[1]
        .split('\n')
        .map((line) => line.replace(/^\s*\*\s?/, ''))
        .filter((line) => line.trim().length > 0)
        .join('\n');

      if (exampleText.trim()) {
        // Check if there's a description before the code block
        const parts = exampleText.split(/```/);
        if (parts.length >= 3) {
          const description = parts[0].trim() || undefined;
          const code = parts[1].replace(/^[a-z]+\n/, '').trim(); // Remove language specifier
          metadata.examples?.push({ code, description });
        } else {
          // No code block, treat entire content as code
          metadata.examples?.push({ code: exampleText.trim() });
        }
      }
    }

    // Extract @see tags
    const seeMatches = commentText.matchAll(/@see\s+(\{@link\s+([^}]+)\}|(\S+))(?:\s+-\s+(.+))?/g);
    for (const match of seeMatches) {
      if (match[2]) {
        // {@link URL} format
        const [url, ...textParts] = match[2].trim().split(/\s+/);
        metadata.see?.push({
          url,
          text: textParts.join(' ') || url,
        });
      } else if (match[3]) {
        // Plain URL or identifier
        metadata.see?.push({
          text: match[4] || match[3],
          target: match[3],
        });
      }
    }

    // Extract inline @link tags
    const linkMatches = commentText.matchAll(/\{@link\s+([^}\s]+)(?:\s+([^}]+))?\}/g);
    for (const match of linkMatches) {
      metadata.links?.push({
        url: match[1],
        text: match[2] || match[1],
      });
    }

    // Extract @param tags
    const paramMatches = commentText.matchAll(
      /@param\s+(?:\{[^}]+\}\s+)?(\w+)\s+-?\s*(.+?)(?=\n\s*(?:\*\s*@|\*\/))/gs
    );
    for (const match of paramMatches) {
      const paramName = match[1];
      const paramDesc = match[2]
        .split('\n')
        .map((line) => line.replace(/^\s*\*\s?/, '').trim())
        .filter((line) => line.length > 0)
        .join(' ');
      if (metadata.params) {
        metadata.params[paramName] = paramDesc;
      }
    }

    // Extract @returns tag
    const returnsMatch = commentText.match(
      /@returns?\s+(?:\{[^}]+\}\s+)?(.+?)(?=\n\s*(?:\*\s*@|\*\/))/s
    );
    if (returnsMatch) {
      metadata.returns = returnsMatch[1]
        .split('\n')
        .map((line) => line.replace(/^\s*\*\s?/, '').trim())
        .filter((line) => line.length > 0)
        .join(' ');
    }

    // Extract @deprecated tag
    const deprecatedMatch = commentText.match(/@deprecated\s+(.+?)(?=\n\s*(?:\*\s*@|\*\/))/s);
    if (deprecatedMatch) {
      metadata.deprecated = deprecatedMatch[1]
        .split('\n')
        .map((line) => line.replace(/^\s*\*\s?/, '').trim())
        .filter((line) => line.length > 0)
        .join(' ');
    }

    // Extract @since tag
    const sinceMatch = commentText.match(/@since\s+(\S+)/);
    if (sinceMatch) {
      metadata.since = sinceMatch[1];
    }

    // Extract @author tags
    const authorMatches = commentText.matchAll(/@author\s+(.+?)(?=\n|$)/g);
    for (const match of authorMatches) {
      metadata.author?.push(match[1].trim());
    }

    return metadata;
  }

  private isExported(node: ts.Node): boolean {
    return (
      !!ts.canHaveModifiers(node) &&
      !!ts.getModifiers(node)?.some((m: ts.Modifier) => m.kind === ts.SyntaxKind.ExportKeyword)
    );
  }

  private getExportName(node: ts.Node): string | null {
    if (ts.isFunctionDeclaration(node) && node.name) return node.name.getText();
    if (ts.isClassDeclaration(node) && node.name) return node.name.getText();
    if (ts.isInterfaceDeclaration(node)) return node.name.getText();
    if (ts.isTypeAliasDeclaration(node)) return node.name.getText();
    return null;
  }

  private getExportAssignmentName(node: ts.ExportAssignment): string | null {
    // Handle: export default App
    if (ts.isIdentifier(node.expression)) {
      return node.expression.getText();
    }
    // Handle: export default class Foo {}
    if (ts.isClassExpression(node.expression) && node.expression.name) {
      return node.expression.name.getText();
    }
    // Handle: export default function foo() {}
    if (ts.isFunctionExpression(node.expression) && node.expression.name) {
      return node.expression.name.getText();
    }
    return null;
  }

  private hasModifier(node: ts.Node, kind: ts.SyntaxKind): boolean {
    return !!ts.canHaveModifiers(node) && !!ts.getModifiers(node)?.some((m) => m.kind === kind);
  }

  private getExtendsClause(node: ts.ClassDeclaration): string | undefined {
    const extendsClause = node.heritageClauses?.find(
      (clause) => clause.token === ts.SyntaxKind.ExtendsKeyword
    );
    return extendsClause?.types[0]?.expression.getText();
  }

  private getImplementsClauses(node: ts.ClassDeclaration): string[] {
    const implementsClause = node.heritageClauses?.find(
      (clause) => clause.token === ts.SyntaxKind.ImplementsKeyword
    );
    return implementsClause?.types.map((type) => type.expression.getText()) || [];
  }

  private getLineNumber(node: ts.Node): number {
    const sourceFile = node.getSourceFile();
    return sourceFile.getLineAndCharacterOfPosition(node.getStart()).line + 1;
  }
}
