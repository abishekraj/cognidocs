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
} from '../types';

export class TypeScriptParser {
  async parseFile(filePath: string): Promise<ParseResult> {
    const fileContent = readFileSync(filePath, 'utf-8');
    const sourceFile = ts.createSourceFile(
      filePath,
      fileContent,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TS
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

    const visit = (node: ts.Node) => {
      // Parse function declarations
      if (ts.isFunctionDeclaration(node) && node.name) {
        result.functions.push(this.parseFunctionDeclaration(node, filePath));
      }

      // Parse class declarations
      if (ts.isClassDeclaration(node) && node.name) {
        result.classes.push(this.parseClassDeclaration(node, filePath));
      }

      // Parse interface declarations
      if (ts.isInterfaceDeclaration(node)) {
        result.interfaces.push(this.parseInterfaceDeclaration(node, filePath));
      }

      // Parse type alias declarations
      if (ts.isTypeAliasDeclaration(node)) {
        result.types.push(this.parseTypeAliasDeclaration(node, filePath));
      }

      // Parse import declarations
      if (ts.isImportDeclaration(node)) {
        const importData = this.parseImportDeclaration(node);
        if (importData) result.imports.push(importData);
      }

      // Parse export declarations
      if (ts.isExportDeclaration(node) || this.isExported(node)) {
        const exportName = this.getExportName(node);
        if (exportName) result.exports.push(exportName);
      }

      ts.forEachChild(node, visit);
    };

    visit(sourceFile);
    return result;
  }

  async parseDirectory(dirPath: string, pattern: string = '**/*.{ts,tsx}'): Promise<ParseResult[]> {
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

  private parseFunctionDeclaration(node: ts.FunctionDeclaration, filePath: string): FunctionMetadata {
    const name = node.name?.getText() || 'anonymous';
    const description = this.extractJSDocComment(node);
    const parameters = node.parameters.map(param => ({
      name: param.name.getText(),
      type: param.type?.getText(),
      optional: !!param.questionToken,
    }));

    return {
      name,
      description,
      parameters,
      returnType: node.type?.getText(),
      isExported: this.isExported(node),
      isAsync: !!node.modifiers?.some(m => m.kind === ts.SyntaxKind.AsyncKeyword),
      filePath,
      line: this.getLineNumber(node),
    };
  }

  private parseClassDeclaration(node: ts.ClassDeclaration, filePath: string): ClassMetadata {
    const name = node.name?.getText() || 'Anonymous';
    const description = this.extractJSDocComment(node);
    
    const properties = node.members
      .filter(ts.isPropertyDeclaration)
      .map(prop => ({
        name: prop.name.getText(),
        type: prop.type?.getText(),
        isPrivate: this.hasModifier(prop, ts.SyntaxKind.PrivateKeyword),
        isStatic: this.hasModifier(prop, ts.SyntaxKind.StaticKeyword),
      }));

    const methods = node.members
      .filter(ts.isMethodDeclaration)
      .map(method => ({
        name: method.name.getText(),
        parameters: method.parameters.map(param => ({
          name: param.name.getText(),
          type: param.type?.getText(),
          optional: !!param.questionToken,
        })),
        returnType: method.type?.getText(),
        isPrivate: this.hasModifier(method, ts.SyntaxKind.PrivateKeyword),
        isStatic: this.hasModifier(method, ts.SyntaxKind.StaticKeyword),
        isAsync: !!method.modifiers?.some(m => m.kind === ts.SyntaxKind.AsyncKeyword),
      }));

    return {
      name,
      description,
      properties,
      methods,
      isExported: this.isExported(node),
      extendsClass: this.getExtendsClause(node),
      implementsInterfaces: this.getImplementsClauses(node),
      filePath,
      line: this.getLineNumber(node),
    };
  }

  private parseInterfaceDeclaration(node: ts.InterfaceDeclaration, filePath: string): InterfaceMetadata {
    const name = node.name.getText();
    const description = this.extractJSDocComment(node);
    
    const properties = node.members
      .filter(ts.isPropertySignature)
      .map(prop => ({
        name: prop.name?.getText() || '',
        type: prop.type?.getText(),
        optional: !!prop.questionToken,
      }));

    return {
      name,
      description,
      properties,
      isExported: this.isExported(node),
      extendsInterfaces: node.heritageClauses
        ?.filter(clause => clause.token === ts.SyntaxKind.ExtendsKeyword)
        .flatMap(clause => clause.types.map(type => type.expression.getText())) || [],
      filePath,
      line: this.getLineNumber(node),
    };
  }

  private parseTypeAliasDeclaration(node: ts.TypeAliasDeclaration, filePath: string): TypeMetadata {
    const name = node.name.getText();
    const description = this.extractJSDocComment(node);

    return {
      name,
      description,
      type: node.type.getText(),
      isExported: this.isExported(node),
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
        importClause.namedBindings.elements.forEach(element => {
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
    const sourceFile = node.getSourceFile();
    const fullText = sourceFile.getFullText();
    const commentRanges = ts.getLeadingCommentRanges(fullText, node.getFullStart());

    if (!commentRanges || commentRanges.length === 0) return undefined;

    const lastComment = commentRanges[commentRanges.length - 1];
    const commentText = fullText.substring(lastComment.pos, lastComment.end);
    
    // Extract the description from JSDoc
    const match = commentText.match(/\/\*\*\s*\n\s*\*\s*(.+?)(?:\n|$)/);
    return match ? match[1].trim() : undefined;
  }

  private isExported(node: ts.Node): boolean {
    return !!ts.canHaveModifiers(node) && !!ts.getModifiers(node)?.some((m: ts.Modifier) => m.kind === ts.SyntaxKind.ExportKeyword);
  }

  private getExportName(node: ts.Node): string | null {
    if (ts.isFunctionDeclaration(node) && node.name) return node.name.getText();
    if (ts.isClassDeclaration(node) && node.name) return node.name.getText();
    if (ts.isInterfaceDeclaration(node)) return node.name.getText();
    if (ts.isTypeAliasDeclaration(node)) return node.name.getText();
    return null;
  }

  private hasModifier(node: ts.Node, kind: ts.SyntaxKind): boolean {
    return !!ts.canHaveModifiers(node) && !!ts.getModifiers(node)?.some(m => m.kind === kind);
  }

  private getExtendsClause(node: ts.ClassDeclaration): string | undefined {
    const extendsClause = node.heritageClauses?.find(
      clause => clause.token === ts.SyntaxKind.ExtendsKeyword
    );
    return extendsClause?.types[0]?.expression.getText();
  }

  private getImplementsClauses(node: ts.ClassDeclaration): string[] {
    const implementsClause = node.heritageClauses?.find(
      clause => clause.token === ts.SyntaxKind.ImplementsKeyword
    );
    return implementsClause?.types.map(type => type.expression.getText()) || [];
  }

  private getLineNumber(node: ts.Node): number {
    const sourceFile = node.getSourceFile();
    return sourceFile.getLineAndCharacterOfPosition(node.getStart()).line + 1;
  }
}
