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
  ExportMetadata,
  ParameterMetadata,
  MethodMetadata,
  PropertyMetadata,
  InterfacePropertyMetadata,
} from '../types';

export class TypeScriptParser {
  private program: ts.Program | null = null;
  private checker: ts.TypeChecker | null = null;

  constructor(private configPath?: string) {
    this.initializeProgram();
  }

  private initializeProgram(): void {
    if (this.configPath) {
      const configFile = ts.readConfigFile(this.configPath, ts.sys.readFile);
      const parsedConfig = ts.parseJsonConfigFileContent(
        configFile.config,
        ts.sys,
        process.cwd()
      );
      this.program = ts.createProgram(parsedConfig.fileNames, parsedConfig.options);
      this.checker = this.program.getTypeChecker();
    }
  }

  async parseFile(filePath: string): Promise<ParseResult> {
    const fileContent = readFileSync(filePath, 'utf-8');
    const sourceFile = ts.createSourceFile(
      filePath,
      fileContent,
      ts.ScriptTarget.Latest,
      true,
      filePath.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS
    );

    const result: ParseResult = {
      filePath,
      components: [],
      functions: [],
      classes: [],
      interfaces: [],
      types: [],
      imports: [],
      exports: [],
    };

    this.visit(sourceFile, result, sourceFile);

    return result;
  }

  async parseDirectory(dirPath: string, pattern: string = '**/*.{ts,tsx}'): Promise<ParseResult[]> {
    const files = await glob(pattern, {
      cwd: dirPath,
      absolute: true,
      ignore: ['**/node_modules/**', '**/dist/**', '**/*.test.ts', '**/*.test.tsx'],
    });

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

  private visit(node: ts.Node, result: ParseResult, sourceFile: ts.SourceFile): void {
    // Extract imports
    if (ts.isImportDeclaration(node)) {
      result.imports.push(this.extractImport(node));
    }

    // Extract functions
    if (ts.isFunctionDeclaration(node) && node.name) {
      result.functions.push(this.extractFunction(node, sourceFile));
    }

    // Extract classes
    if (ts.isClassDeclaration(node) && node.name) {
      result.classes.push(this.extractClass(node, sourceFile));
    }

    // Extract interfaces
    if (ts.isInterfaceDeclaration(node)) {
      result.interfaces.push(this.extractInterface(node, sourceFile));
    }

    // Extract type aliases
    if (ts.isTypeAliasDeclaration(node)) {
      result.types.push(this.extractTypeAlias(node, sourceFile));
    }

    // Extract exports
    if (ts.isExportDeclaration(node) || this.isExported(node)) {
      const exportInfo = this.extractExport(node);
      if (exportInfo) {
        result.exports.push(exportInfo);
      }
    }

    ts.forEachChild(node, (child) => this.visit(child, result, sourceFile));
  }

  private extractFunction(node: ts.FunctionDeclaration, sourceFile: ts.SourceFile): FunctionMetadata {
    const jsDoc = this.extractJSDoc(node);
    const line = sourceFile.getLineAndCharacterOfPosition(node.getStart()).line + 1;

    return {
      name: node.name!.getText(),
      parameters: node.parameters.map((param) => this.extractParameter(param)),
      returnType: node.type ? node.type.getText() : undefined,
      description: jsDoc.description,
      examples: jsDoc.tags?.example,
      filePath: sourceFile.fileName,
      line,
      isAsync: node.modifiers?.some((m) => m.kind === ts.SyntaxKind.AsyncKeyword) ?? false,
      isExported: this.isExported(node),
    };
  }

  private extractClass(node: ts.ClassDeclaration, sourceFile: ts.SourceFile): ClassMetadata {
    const jsDoc = this.extractJSDoc(node);
    const line = sourceFile.getLineAndCharacterOfPosition(node.getStart()).line + 1;

    const methods: MethodMetadata[] = [];
    const properties: PropertyMetadata[] = [];

    node.members.forEach((member) => {
      if (ts.isMethodDeclaration(member) && member.name) {
        methods.push(this.extractMethod(member));
      } else if (ts.isPropertyDeclaration(member) && member.name) {
        properties.push(this.extractProperty(member));
      }
    });

    return {
      name: node.name!.getText(),
      extends: node.heritageClauses
        ?.find((clause) => clause.token === ts.SyntaxKind.ExtendsKeyword)
        ?.types[0].expression.getText(),
      implements: node.heritageClauses
        ?.find((clause) => clause.token === ts.SyntaxKind.ImplementsKeyword)
        ?.types.map((type) => type.expression.getText()),
      methods,
      properties,
      description: jsDoc.description,
      filePath: sourceFile.fileName,
      line,
    };
  }

  private extractInterface(node: ts.InterfaceDeclaration, sourceFile: ts.SourceFile): InterfaceMetadata {
    const jsDoc = this.extractJSDoc(node);
    const line = sourceFile.getLineAndCharacterOfPosition(node.getStart()).line + 1;

    const properties: InterfacePropertyMetadata[] = [];

    node.members.forEach((member) => {
      if (ts.isPropertySignature(member) && member.name) {
        const propJsDoc = this.extractJSDoc(member);
        properties.push({
          name: member.name.getText(),
          type: member.type ? member.type.getText() : 'any',
          optional: member.questionToken !== undefined,
          description: propJsDoc.description,
        });
      }
    });

    return {
      name: node.name.getText(),
      extends: node.heritageClauses?.[0]?.types.map((type) => type.expression.getText()),
      properties,
      description: jsDoc.description,
      filePath: sourceFile.fileName,
      line,
    };
  }

  private extractTypeAlias(node: ts.TypeAliasDeclaration, sourceFile: ts.SourceFile): TypeMetadata {
    const jsDoc = this.extractJSDoc(node);
    const line = sourceFile.getLineAndCharacterOfPosition(node.getStart()).line + 1;

    return {
      name: node.name.getText(),
      definition: node.type.getText(),
      description: jsDoc.description,
      filePath: sourceFile.fileName,
      line,
    };
  }

  private extractParameter(param: ts.ParameterDeclaration): ParameterMetadata {
    return {
      name: param.name.getText(),
      type: param.type ? param.type.getText() : undefined,
      optional: param.questionToken !== undefined || param.initializer !== undefined,
      defaultValue: param.initializer ? param.initializer.getText() : undefined,
    };
  }

  private extractMethod(node: ts.MethodDeclaration): MethodMetadata {
    const jsDoc = this.extractJSDoc(node);

    return {
      name: node.name.getText(),
      parameters: node.parameters.map((param) => this.extractParameter(param)),
      returnType: node.type ? node.type.getText() : undefined,
      isStatic: node.modifiers?.some((m) => m.kind === ts.SyntaxKind.StaticKeyword) ?? false,
      isPrivate: node.modifiers?.some((m) => m.kind === ts.SyntaxKind.PrivateKeyword) ?? false,
      description: jsDoc.description,
    };
  }

  private extractProperty(node: ts.PropertyDeclaration): PropertyMetadata {
    const jsDoc = this.extractJSDoc(node);

    return {
      name: node.name.getText(),
      type: node.type ? node.type.getText() : undefined,
      isStatic: node.modifiers?.some((m) => m.kind === ts.SyntaxKind.StaticKeyword) ?? false,
      isPrivate: node.modifiers?.some((m) => m.kind === ts.SyntaxKind.PrivateKeyword) ?? false,
      defaultValue: node.initializer ? node.initializer.getText() : undefined,
      description: jsDoc.description,
    };
  }

  private extractImport(node: ts.ImportDeclaration): ImportMetadata {
    const moduleSpecifier = (node.moduleSpecifier as ts.StringLiteral).text;
    const specifiers: string[] = [];
    let isDefault = false;
    let isNamespace = false;

    if (node.importClause) {
      if (node.importClause.name) {
        specifiers.push(node.importClause.name.getText());
        isDefault = true;
      }

      if (node.importClause.namedBindings) {
        if (ts.isNamespaceImport(node.importClause.namedBindings)) {
          specifiers.push(node.importClause.namedBindings.name.getText());
          isNamespace = true;
        } else if (ts.isNamedImports(node.importClause.namedBindings)) {
          node.importClause.namedBindings.elements.forEach((element) => {
            specifiers.push(element.name.getText());
          });
        }
      }
    }

    return {
      source: moduleSpecifier,
      specifiers,
      isDefault,
      isNamespace,
    };
  }

  private extractExport(node: ts.Node): ExportMetadata | null {
    if (ts.isFunctionDeclaration(node) && node.name && this.isExported(node)) {
      return {
        name: node.name.getText(),
        type: 'function',
        isDefault: this.isDefaultExport(node),
      };
    }

    if (ts.isClassDeclaration(node) && node.name && this.isExported(node)) {
      return {
        name: node.name.getText(),
        type: 'class',
        isDefault: this.isDefaultExport(node),
      };
    }

    if (ts.isVariableStatement(node) && this.isExported(node)) {
      const declaration = node.declarationList.declarations[0];
      if (declaration.name && ts.isIdentifier(declaration.name)) {
        return {
          name: declaration.name.getText(),
          type: 'const',
          isDefault: false,
        };
      }
    }

    if (ts.isInterfaceDeclaration(node) && this.isExported(node)) {
      return {
        name: node.name.getText(),
        type: 'interface',
        isDefault: false,
      };
    }

    if (ts.isTypeAliasDeclaration(node) && this.isExported(node)) {
      return {
        name: node.name.getText(),
        type: 'type',
        isDefault: false,
      };
    }

    return null;
  }

  private extractJSDoc(node: ts.Node): { description?: string; tags?: Record<string, string[]> } {
    const jsDocTags = ts.getJSDocTags(node);
    const jsDocComments = ts.getJSDocCommentsAndTags(node);

    let description: string | undefined;
    const tags: Record<string, string[]> = {};

    // Extract main description
    jsDocComments.forEach((comment) => {
      if (ts.isJSDoc(comment) && comment.comment) {
        if (typeof comment.comment === 'string') {
          description = comment.comment;
        }
      }
    });

    // Extract tags
    jsDocTags.forEach((tag) => {
      const tagName = tag.tagName.getText();
      const tagComment = typeof tag.comment === 'string' ? tag.comment : '';

      if (!tags[tagName]) {
        tags[tagName] = [];
      }
      if (tagComment) {
        tags[tagName].push(tagComment);
      }
    });

    return { description, tags: Object.keys(tags).length > 0 ? tags : undefined };
  }

  private isExported(node: ts.Node): boolean {
    return (
      node.modifiers?.some(
        (m) => m.kind === ts.SyntaxKind.ExportKeyword || m.kind === ts.SyntaxKind.DefaultKeyword
      ) ?? false
    );
  }

  private isDefaultExport(node: ts.Node): boolean {
    return node.modifiers?.some((m) => m.kind === ts.SyntaxKind.DefaultKeyword) ?? false;
  }
}
