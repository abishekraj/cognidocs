/**
 * Svelte Component Parser
 * Phase 4: Multi-Framework Support
 */

import * as ts from 'typescript';
import { readFileSync } from 'fs';
import { parse as svelteParse } from 'svelte/compiler';
import type {
  SvelteComponentMetadata,
  SveltePropsMetadata,
  SvelteEventMetadata,
  SvelteStoreMetadata,
  SvelteReactiveStatement,
  JSDocMetadata,
} from '../types';

export class SvelteParser {
  /**
   * Parse a Svelte component file and extract component metadata
   */
  async parseComponent(filePath: string): Promise<SvelteComponentMetadata[]> {
    const fileContent = readFileSync(filePath, 'utf-8');

    try {
      // Preprocess TypeScript if needed
      const preprocessedContent = this.preprocessTypeScript(fileContent);

      // Parse the Svelte file using svelte/compiler
      const ast = svelteParse(preprocessedContent, {
        filename: filePath,
      });

      const component = this.extractComponent(ast, filePath, fileContent);
      return component ? [component] : [];
    } catch (error) {
      console.warn(`Failed to parse Svelte component ${filePath}:`, error);
      return [];
    }
  }

  /**
   * Parse Svelte stores from a TypeScript/JavaScript file
   */
  async parseStores(filePath: string): Promise<SvelteStoreMetadata[]> {
    const fileContent = readFileSync(filePath, 'utf-8');

    const sourceFile = ts.createSourceFile(
      filePath,
      fileContent,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TS
    );

    const stores: SvelteStoreMetadata[] = [];

    const visit = (node: ts.Node) => {
      // Check for store declarations
      if (ts.isVariableStatement(node)) {
        const declarations = node.declarationList.declarations;
        for (const declaration of declarations) {
          if (declaration.initializer && ts.isCallExpression(declaration.initializer)) {
            const store = this.extractStore(declaration, sourceFile);
            if (store) {
              stores.push(store);
            }
          }
        }
      }

      ts.forEachChild(node, visit);
    };

    visit(sourceFile);

    return stores;
  }

  /**
   * Extract component metadata from Svelte AST
   */
  private extractComponent(
    ast: any,
    filePath: string,
    fileContent: string
  ): SvelteComponentMetadata | null {
    const scriptNode = ast.instance || ast.module;
    if (!scriptNode) {
      // Component with no script tag
      return this.createBasicComponent(filePath);
    }

    const isTypeScript = scriptNode.attributes?.some(
      (attr: any) => attr.name === 'lang' && attr.value[0]?.data === 'ts'
    );

    // Extract the script text from the file content using the script node's location
    const scriptStart = scriptNode.content.start;
    const scriptEnd = scriptNode.content.end;
    const scriptContent = fileContent.substring(scriptStart, scriptEnd);

    // Parse the script content using TypeScript compiler
    const sourceFile = ts.createSourceFile(
      filePath,
      scriptContent,
      ts.ScriptTarget.Latest,
      true,
      isTypeScript ? ts.ScriptKind.TS : ts.ScriptKind.JS
    );

    // Extract component name from filename
    const componentName = this.getComponentNameFromPath(filePath);

    // Extract props (export let statements)
    const props = this.extractProps(sourceFile);

    // Extract events (createEventDispatcher calls)
    const events = this.extractEvents(sourceFile);

    // Extract reactive statements ($: statements)
    const reactiveStatements = this.extractReactiveStatements(scriptContent);

    // Extract store references (variables starting with $)
    const stores = this.extractStoreReferences(sourceFile);

    // Extract slots from the template
    const svelteSlots = this.extractSlots(ast.html);

    // Extract JSDoc
    const jsdoc = this.extractJSDoc(sourceFile);

    return {
      name: componentName,
      type: 'function',
      framework: 'svelte',
      description: jsdoc?.description,
      props,
      events,
      reactiveStatements,
      svelteSlots,
      stores,
      filePath,
      isExported: true,
      jsdoc,
    };
  }

  /**
   * Create basic component metadata for components with no script tag
   */
  private createBasicComponent(filePath: string): SvelteComponentMetadata {
    const componentName = this.getComponentNameFromPath(filePath);

    return {
      name: componentName,
      type: 'function',
      framework: 'svelte',
      props: [],
      events: [],
      reactiveStatements: [],
      svelteSlots: [],
      stores: [],
      filePath,
      isExported: true,
    };
  }

  /**
   * Extract component name from file path
   */
  private getComponentNameFromPath(filePath: string): string {
    const parts = filePath.split('/');
    const fileName = parts[parts.length - 1];
    return fileName.replace('.svelte', '');
  }

  /**
   * Extract props from TypeScript AST (export let statements)
   */
  private extractProps(sourceFile: ts.SourceFile): SveltePropsMetadata[] {
    const props: SveltePropsMetadata[] = [];

    const visit = (node: ts.Node) => {
      // Look for: export let propName = defaultValue;
      if (
        ts.isVariableStatement(node) &&
        node.modifiers?.some((mod) => mod.kind === ts.SyntaxKind.ExportKeyword)
      ) {
        const declarations = node.declarationList.declarations;
        for (const declaration of declarations) {
          if (ts.isIdentifier(declaration.name)) {
            const name = declaration.name.getText();
            const type = declaration.type?.getText(sourceFile);
            const defaultValue = declaration.initializer?.getText(sourceFile);
            const required = !declaration.initializer;

            props.push({
              name,
              type,
              defaultValue,
              required,
            });
          }
        }
      }

      ts.forEachChild(node, visit);
    };

    visit(sourceFile);

    return props;
  }

  /**
   * Extract events from TypeScript AST (createEventDispatcher calls)
   */
  private extractEvents(sourceFile: ts.SourceFile): SvelteEventMetadata[] {
    const events: SvelteEventMetadata[] = [];

    const visit = (node: ts.Node) => {
      // Look for: const dispatch = createEventDispatcher();
      // Then find dispatch('eventName', detail) calls
      if (ts.isCallExpression(node)) {
        const expression = node.expression;
        if (ts.isIdentifier(expression) && expression.getText() === 'createEventDispatcher') {
          // Found createEventDispatcher, now look for dispatch calls
          this.findDispatchCalls(sourceFile, events);
        }
      }

      ts.forEachChild(node, visit);
    };

    visit(sourceFile);

    return events;
  }

  /**
   * Find dispatch() calls in the source file
   */
  private findDispatchCalls(sourceFile: ts.SourceFile, events: SvelteEventMetadata[]) {
    const visit = (node: ts.Node) => {
      if (ts.isCallExpression(node)) {
        const expression = node.expression;
        if (ts.isIdentifier(expression) && expression.getText() === 'dispatch') {
          const args = node.arguments;
          if (args.length > 0) {
            const eventName = args[0].getText(sourceFile).replace(/['"]/g, '');
            const detail = args.length > 1 ? args[1].getText(sourceFile) : undefined;

            events.push({
              name: eventName,
              detail,
            });
          }
        }
      }

      ts.forEachChild(node, visit);
    };

    visit(sourceFile);
  }

  /**
   * Extract reactive statements ($: ...)
   */
  private extractReactiveStatements(scriptContent: string): SvelteReactiveStatement[] {
    const statements: SvelteReactiveStatement[] = [];
    const lines = scriptContent.split('\n');

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('$:')) {
        const expression = trimmed.substring(2).trim();
        const dependencies = this.extractDependencies(expression);

        statements.push({
          expression,
          dependencies,
          line: index + 1,
        });
      }
    });

    return statements;
  }

  /**
   * Extract dependencies from reactive statement
   */
  private extractDependencies(expression: string): string[] {
    const dependencies: string[] = [];
    const identifierRegex = /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\b/g;
    let match;

    while ((match = identifierRegex.exec(expression)) !== null) {
      const identifier = match[1];
      // Exclude keywords and common functions
      if (
        !['const', 'let', 'var', 'if', 'else', 'return', 'function', 'console'].includes(
          identifier
        ) &&
        !dependencies.includes(identifier)
      ) {
        dependencies.push(identifier);
      }
    }

    return dependencies;
  }

  /**
   * Extract store references (variables starting with $)
   */
  private extractStoreReferences(sourceFile: ts.SourceFile): string[] {
    const stores: string[] = [];

    const visit = (node: ts.Node) => {
      if (ts.isIdentifier(node)) {
        const text = node.getText();
        if (text.startsWith('$') && text.length > 1) {
          const storeName = text.substring(1);
          if (!stores.includes(storeName)) {
            stores.push(storeName);
          }
        }
      }

      ts.forEachChild(node, visit);
    };

    visit(sourceFile);

    return stores;
  }

  /**
   * Extract slots from HTML AST
   */
  private extractSlots(htmlNode: any): string[] {
    const slots: string[] = [];

    const visit = (node: any) => {
      if (node.type === 'Slot') {
        const nameAttr = node.attributes?.find((attr: any) => attr.name === 'name');
        const slotName = nameAttr ? nameAttr.value[0]?.data : 'default';
        if (!slots.includes(slotName)) {
          slots.push(slotName);
        }
      }

      if (node.children) {
        node.children.forEach(visit);
      }
    };

    if (htmlNode) {
      visit(htmlNode);
    }

    return slots;
  }

  /**
   * Extract JSDoc comments from source file
   */
  private extractJSDoc(sourceFile: ts.SourceFile): JSDocMetadata | undefined {
    const statements = sourceFile.statements;
    if (statements.length === 0) return undefined;

    const firstStatement = statements[0];
    const jsDocComments = ts.getJSDocCommentsAndTags(firstStatement);

    if (jsDocComments.length === 0) return undefined;

    const jsDoc = jsDocComments[0] as ts.JSDoc;
    const description = jsDoc.comment?.toString();

    return {
      description,
    };
  }

  /**
   * Preprocess TypeScript in Svelte component
   * Strips type annotations from script blocks so the Svelte compiler can parse them
   */
  private preprocessTypeScript(fileContent: string): string {
    // Check if the component has TypeScript
    const scriptRegex = /<script([^>]*?)>([\s\S]*?)<\/script>/g;
    let processed = fileContent;

    const scriptMatch = scriptRegex.exec(fileContent);
    if (scriptMatch) {
      const scriptAttributes = scriptMatch[1];
      const scriptContent = scriptMatch[2];

      // Check if it's TypeScript
      if (scriptAttributes.includes('lang="ts"') || scriptAttributes.includes("lang='ts'")) {
        // Transpile TypeScript to JavaScript using TypeScript compiler
        const transpiled = ts.transpileModule(scriptContent, {
          compilerOptions: {
            target: ts.ScriptTarget.ESNext,
            module: ts.ModuleKind.ESNext,
            removeComments: false, // Keep comments for JSDoc extraction
          },
        });

        // Replace the script content with transpiled version
        // Remove the lang="ts" attribute
        const newScriptAttributes = scriptAttributes
          .replace(/lang=["']ts["']/g, '')
          .trim();

        const replacement = `<script${newScriptAttributes ? ' ' + newScriptAttributes : ''}>${transpiled.outputText}</script>`;
        processed = fileContent.replace(scriptMatch[0], replacement);
      }
    }

    return processed;
  }

  /**
   * Extract store metadata from variable declaration
   */
  private extractStore(
    declaration: ts.VariableDeclaration,
    sourceFile: ts.SourceFile
  ): SvelteStoreMetadata | null {
    if (!declaration.initializer || !ts.isCallExpression(declaration.initializer)) {
      return null;
    }

    const callExpression = declaration.initializer;
    const callee = callExpression.expression.getText(sourceFile);

    // Check if it's a store creation function
    const storeTypes: Array<SvelteStoreMetadata['type']> = ['writable', 'readable', 'derived'];
    const matchedType = storeTypes.find((type) => callee.includes(type));

    if (!matchedType) {
      return null;
    }

    const name = declaration.name.getText(sourceFile);
    const valueType = declaration.type?.getText(sourceFile);

    // Check for export
    const parent = declaration.parent?.parent;
    const isExported =
      ts.isVariableStatement(parent) &&
      parent.modifiers?.some((mod) => mod.kind === ts.SyntaxKind.ExportKeyword);

    return {
      name,
      type: matchedType,
      valueType,
      filePath: sourceFile.fileName,
      isExported: !!isExported,
    };
  }
}
