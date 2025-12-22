/**
 * React Component Parser
 * Phase 1: Foundation
 */

import * as ts from 'typescript';
import { readFileSync } from 'fs';
import type { ComponentMetadata, PropertyMetadata, JSDocMetadata } from '../types';

export class ReactParser {
  /**
   * Parse a React component file and extract component metadata
   */
  async parseComponent(filePath: string): Promise<ComponentMetadata[]> {
    const fileContent = readFileSync(filePath, 'utf-8');

    // Determine ScriptKind based on file extension
    let scriptKind = ts.ScriptKind.TSX; // Default to TSX
    if (filePath.endsWith('.jsx')) {
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

    const components: ComponentMetadata[] = [];

    const visit = (node: ts.Node) => {
      // Check for function components
      if (this.isFunctionComponent(node)) {
        const component = this.extractFunctionComponent(
          node as ts.FunctionDeclaration | ts.VariableStatement,
          sourceFile
        );
        if (component) {
          components.push(component);
        }
      }

      // Check for class components
      if (this.isClassComponent(node)) {
        const component = this.extractClassComponent(node as ts.ClassDeclaration, sourceFile);
        if (component) {
          components.push(component);
        }
      }

      ts.forEachChild(node, visit);
    };

    visit(sourceFile);

    return components;
  }

  /**
   * Check if a node is a React function component
   */
  private isFunctionComponent(node: ts.Node): boolean {
    // Function declaration: function Component() { return ... }
    if (ts.isFunctionDeclaration(node) && node.name) {
      const name = node.name.getText();
      // Check if name starts with uppercase (React convention)
      if (name[0] === name[0].toUpperCase()) {
        return this.hasJSXReturn(node);
      }
    }

    // Variable declaration: const Component = () => { return ... }
    if (ts.isVariableStatement(node)) {
      const declaration = node.declarationList.declarations[0];
      if (declaration.name && ts.isIdentifier(declaration.name)) {
        const name = declaration.name.getText();
        if (name[0] === name[0].toUpperCase() && declaration.initializer) {
          if (
            ts.isArrowFunction(declaration.initializer) ||
            ts.isFunctionExpression(declaration.initializer)
          ) {
            return this.hasJSXReturn(declaration.initializer);
          }
        }
      }
    }

    return false;
  }

  /**
   * Check if a node is a React class component
   */
  private isClassComponent(node: ts.Node): boolean {
    if (ts.isClassDeclaration(node) && node.heritageClauses) {
      for (const heritage of node.heritageClauses) {
        if (heritage.token === ts.SyntaxKind.ExtendsKeyword) {
          for (const type of heritage.types) {
            const text = type.expression.getText();
            // Check if extends React.Component or Component
            if (text.includes('Component') || text.includes('PureComponent')) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }

  /**
   * Check if a function/arrow function returns JSX
   */
  private hasJSXReturn(node: ts.Node): boolean {
    let hasJSX = false;

    const visit = (child: ts.Node) => {
      if (ts.isJsxElement(child) || ts.isJsxSelfClosingElement(child) || ts.isJsxFragment(child)) {
        hasJSX = true;
        return;
      }
      ts.forEachChild(child, visit);
    };

    visit(node);
    return hasJSX;
  }

  /**
   * Extract function component metadata
   */
  private extractFunctionComponent(
    node: ts.FunctionDeclaration | ts.VariableStatement,
    sourceFile: ts.SourceFile
  ): ComponentMetadata | null {
    let name: string;
    let propsType: ts.TypeNode | undefined;
    let propsTypeName: string | undefined;
    let functionNode: ts.FunctionDeclaration | ts.ArrowFunction | ts.FunctionExpression;

    if (ts.isFunctionDeclaration(node)) {
      if (!node.name) return null;
      name = node.name.getText();
      functionNode = node;
      propsType = node.parameters[0]?.type;
    } else {
      const declaration = node.declarationList.declarations[0];
      if (!declaration.name || !ts.isIdentifier(declaration.name)) return null;
      name = declaration.name.getText();

      if (!declaration.initializer) return null;
      functionNode = declaration.initializer as ts.ArrowFunction | ts.FunctionExpression;

      // Check if it's a typed component like: const Button: React.FC<ButtonProps>
      if (declaration.type && ts.isTypeReferenceNode(declaration.type)) {
        // Extract generic type argument (e.g., ButtonProps from React.FC<ButtonProps>)
        const typeArgs = declaration.type.typeArguments;
        if (typeArgs && typeArgs.length > 0 && ts.isTypeReferenceNode(typeArgs[0])) {
          propsTypeName = typeArgs[0].typeName.getText();
        }
      }

      propsType = functionNode.parameters[0]?.type;
    }

    const jsdoc = this.extractJSDocMetadata(node);
    const line = sourceFile.getLineAndCharacterOfPosition(node.getStart()).line + 1;

    // Try to extract props from type, or from referenced interface
    let props = propsType ? this.extractPropsFromType(propsType, sourceFile) : [];

    // If we found a props type name (like ButtonProps), extract from that interface
    if (props.length === 0 && propsTypeName) {
      props = this.extractPropsFromInterface(propsTypeName, sourceFile);
    }

    const hooks = this.extractHooks(functionNode);

    // Extract source code for preview and transpile it to plain JS (CommonJS)
    const rawSource = node.getText(sourceFile);
    const transpileResult = ts.transpileModule(rawSource, {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
        jsx: ts.JsxEmit.React,
        removeComments: false,
      },
    });
    const source = transpileResult.outputText;

    return {
      name,
      type: 'function',
      props,
      hooks,
      description: jsdoc?.description,
      filePath: sourceFile.fileName,
      line,
      framework: 'react',
      isExported: true,
      jsdoc,
      source,
    };
  }

  /**
   * Extract class component metadata
   */
  private extractClassComponent(
    node: ts.ClassDeclaration,
    sourceFile: ts.SourceFile
  ): ComponentMetadata | null {
    if (!node.name) return null;

    const name = node.name.getText();
    const jsdoc = this.extractJSDocMetadata(node);
    const line = sourceFile.getLineAndCharacterOfPosition(node.getStart()).line + 1;

    // Extract props from generic type parameter: class MyComponent extends Component<MyProps>
    const heritage = node.heritageClauses?.find((h) => h.token === ts.SyntaxKind.ExtendsKeyword);
    const propsType = heritage?.types[0]?.typeArguments?.[0];
    const props = propsType ? this.extractPropsFromType(propsType, sourceFile) : [];

    // Extract source code for preview and transpile it to plain JS (CommonJS)
    const rawSource = node.getText(sourceFile);
    const transpileResult = ts.transpileModule(rawSource, {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
        jsx: ts.JsxEmit.React,
        removeComments: false,
      },
    });
    const source = transpileResult.outputText;

    return {
      name,
      type: 'class',
      props,
      description: jsdoc?.description,
      filePath: sourceFile.fileName,
      line,
      framework: 'react',
      isExported: true,
      jsdoc,
      source,
    };
  }

  /**
   * Extract props from TypeScript type
   */
  private extractPropsFromType(
    typeNode: ts.TypeNode,
    sourceFile: ts.SourceFile
  ): PropertyMetadata[] {
    const props: PropertyMetadata[] = [];

    // Handle type reference (interface or type alias name)
    if (ts.isTypeReferenceNode(typeNode)) {
      const typeName = typeNode.typeName.getText();
      // Try to resolve the interface/type from the source file
      return this.extractPropsFromInterface(typeName, sourceFile);
    }

    // Handle inline type literal: { prop1: string; prop2?: number }
    if (ts.isTypeLiteralNode(typeNode)) {
      typeNode.members.forEach((member) => {
        if (ts.isPropertySignature(member) && member.name) {
          const jsDoc = this.extractJSDoc(member);
          props.push({
            name: member.name.getText().replace(/['"]/g, ''),
            type: member.type ? member.type.getText() : 'any',
            required: !member.questionToken,
            description: jsDoc.description,
            defaultValue: undefined,
          });
        }
      });
    }

    return props;
  }

  /**
   * Extract props from a named interface/type
   */
  extractPropsFromInterface(interfaceName: string, sourceFile: ts.SourceFile): PropertyMetadata[] {
    const props: PropertyMetadata[] = [];

    const visit = (node: ts.Node) => {
      if (ts.isInterfaceDeclaration(node) && node.name.getText() === interfaceName) {
        node.members.forEach((member) => {
          if (ts.isPropertySignature(member) && member.name) {
            const jsDoc = this.extractJSDoc(member);
            props.push({
              name: member.name.getText().replace(/['"]/g, ''),
              type: member.type ? member.type.getText() : 'any',
              required: !member.questionToken,
              description: jsDoc.description,
              defaultValue: undefined,
            });
          }
        });
      }

      if (ts.isTypeAliasDeclaration(node) && node.name.getText() === interfaceName) {
        if (ts.isTypeLiteralNode(node.type)) {
          node.type.members.forEach((member) => {
            if (ts.isPropertySignature(member) && member.name) {
              const jsDoc = this.extractJSDoc(member);
              props.push({
                name: member.name.getText().replace(/['"]/g, ''),
                type: member.type ? member.type.getText() : 'any',
                required: !member.questionToken,
                description: jsDoc.description,
                defaultValue: undefined,
              });
            }
          });
        }
      }

      ts.forEachChild(node, visit);
    };

    visit(sourceFile);
    return props;
  }

  /**
   * Extract React hooks usage from component
   */
  extractHooks(node: ts.Node): string[] {
    const hooks: string[] = [];
    const hookPattern = /^use[A-Z]/; // Matches useState, useEffect, useCustomHook, etc.

    const visit = (child: ts.Node) => {
      if (ts.isCallExpression(child)) {
        const expression = child.expression;
        if (ts.isIdentifier(expression)) {
          const name = expression.getText();
          if (hookPattern.test(name) && !hooks.includes(name)) {
            hooks.push(name);
          }
        }
      }
      ts.forEachChild(child, visit);
    };

    visit(node);
    return hooks;
  }

  /**
   * Extract comprehensive JSDoc metadata including all tags
   */
  private extractJSDocMetadata(node: ts.Node): JSDocMetadata | undefined {
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
      tutorials: [],
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
    // Fix: Updated regex to properly handle multiple examples by checking for * followed by @
    const exampleMatches = commentText.matchAll(/@example\s*\n((?:(?!\s*(?:\*\s*)?@).*\n)*)/g);
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

    // Extract @tutorial tags
    const tutorialMatches = commentText.matchAll(/@tutorial\s+(.+?)(?=\n\s*(?:\*\s*@|\*\/)|$)/g);
    for (const match of tutorialMatches) {
      metadata.tutorials?.push({
        text: match[1].trim(),
      });
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

  /**
   * Simple JSDoc extraction for property descriptions
   */
  private extractJSDoc(node: ts.Node): { description?: string } {
    const metadata = this.extractJSDocMetadata(node);
    return { description: metadata?.description };
  }
}
