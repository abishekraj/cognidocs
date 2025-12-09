/**
 * React Component Parser
 * Phase 1: Foundation
 */

import * as ts from 'typescript';
import { readFileSync } from 'fs';
import type { ComponentMetadata, PropMetadata, ParseResult } from '../types';

export class ReactParser {
  /**
   * Parse a React component file and extract component metadata
   */
  async parseComponent(filePath: string): Promise<ComponentMetadata[]> {
    const fileContent = readFileSync(filePath, 'utf-8');
    const sourceFile = ts.createSourceFile(
      filePath,
      fileContent,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX
    );

    const components: ComponentMetadata[] = [];

    const visit = (node: ts.Node) => {
      // Check for function components
      if (this.isFunctionComponent(node)) {
        const component = this.extractFunctionComponent(node as ts.FunctionDeclaration | ts.VariableStatement, sourceFile);
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
          if (ts.isArrowFunction(declaration.initializer) || ts.isFunctionExpression(declaration.initializer)) {
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
      propsType = functionNode.parameters[0]?.type;
    }

    const jsDoc = this.extractJSDoc(node);
    const line = sourceFile.getLineAndCharacterOfPosition(node.getStart()).line + 1;
    const props = propsType ? this.extractPropsFromType(propsType) : [];
    const hooks = this.extractHooks(functionNode);

    return {
      name,
      type: 'function',
      props,
      hooks,
      description: jsDoc.description,
      examples: jsDoc.tags?.example,
      filePath: sourceFile.fileName,
      line,
      framework: 'react',
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
    const jsDoc = this.extractJSDoc(node);
    const line = sourceFile.getLineAndCharacterOfPosition(node.getStart()).line + 1;

    // Extract props from generic type parameter: class MyComponent extends Component<MyProps>
    const heritage = node.heritageClauses?.find(h => h.token === ts.SyntaxKind.ExtendsKeyword);
    const propsType = heritage?.types[0]?.typeArguments?.[0];
    const props = propsType ? this.extractPropsFromType(propsType) : [];

    return {
      name,
      type: 'class',
      props,
      description: jsDoc.description,
      examples: jsDoc.tags?.example,
      filePath: sourceFile.fileName,
      line,
      framework: 'react',
    };
  }

  /**
   * Extract props from TypeScript type
   */
  private extractPropsFromType(typeNode: ts.TypeNode): PropMetadata[] {
    const props: PropMetadata[] = [];

    // Handle type reference (interface or type alias name)
    if (ts.isTypeReferenceNode(typeNode)) {
      // This would need type checker to resolve the actual interface
      // For now, we'll just note that we found a reference
      return props;
    }

    // Handle inline type literal: { prop1: string; prop2?: number }
    if (ts.isTypeLiteralNode(typeNode)) {
      typeNode.members.forEach(member => {
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
  extractPropsFromInterface(interfaceName: string, sourceFile: ts.SourceFile): PropMetadata[] {
    const props: PropMetadata[] = [];

    const visit = (node: ts.Node) => {
      if (ts.isInterfaceDeclaration(node) && node.name.getText() === interfaceName) {
        node.members.forEach(member => {
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
          node.type.members.forEach(member => {
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
   * Extract JSDoc comments
   */
  private extractJSDoc(node: ts.Node): { description?: string; tags?: Record<string, string[]> } {
    const jsDocTags = ts.getJSDocTags(node);
    const jsDocComments = ts.getJSDocCommentsAndTags(node);

    let description: string | undefined;
    const tags: Record<string, string[]> = {};

    jsDocComments.forEach((comment) => {
      if (ts.isJSDoc(comment) && comment.comment) {
        if (typeof comment.comment === 'string') {
          description = comment.comment;
        }
      }
    });

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
}
