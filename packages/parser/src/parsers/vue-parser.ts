/**
 * Vue Parser
 * Phase 4: Multi-Framework Support
 *
 * Parses Vue 3 Single File Components (.vue files)
 * Supports both Composition API and Options API
 */

import * as ts from 'typescript';
import { parse as parseVueSFC } from '@vue/compiler-sfc';
import { readFileSync } from 'fs';
import type {
  ComponentMetadata,
  PropertyMetadata,
  VueEmitMetadata,
  VueSlotMetadata,
} from '../types';
import { TypeScriptParser } from './typescript-parser';

export class VueParser {
  private tsParser: TypeScriptParser;

  constructor() {
    this.tsParser = new TypeScriptParser();
  }

  /**
   * Parse a Vue Single File Component
   */
  async parseComponent(filePath: string): Promise<ComponentMetadata[]> {
    const fileContent = readFileSync(filePath, 'utf-8');

    try {
      // Parse the .vue file
      const { descriptor, errors } = parseVueSFC(fileContent, {
        filename: filePath,
      });

      if (errors.length > 0) {
        console.warn(`Vue parsing errors in ${filePath}:`, errors);
      }

      if (!descriptor.script && !descriptor.scriptSetup) {
        // No script section, cannot extract component metadata
        return [];
      }

      const components: ComponentMetadata[] = [];
      const isScriptSetup = !!descriptor.scriptSetup;
      const scriptContent = isScriptSetup
        ? descriptor.scriptSetup!.content
        : descriptor.script!.content;

      const scriptLang = isScriptSetup
        ? descriptor.scriptSetup!.lang || 'js'
        : descriptor.script!.lang || 'js';

      // Determine if TypeScript or JavaScript
      const isTypeScript = scriptLang === 'ts' || scriptLang === 'tsx';

      // Create a TypeScript SourceFile for parsing
      const sourceFile = ts.createSourceFile(
        filePath,
        scriptContent,
        ts.ScriptTarget.Latest,
        true,
        isTypeScript ? ts.ScriptKind.TS : ts.ScriptKind.JS
      );

      // Extract component name from file path
      const componentName = this.extractComponentName(filePath);

      // Parse props, emits, and slots
      const props = this.extractProps(sourceFile, isScriptSetup);
      const emits = this.extractEmits(sourceFile, isScriptSetup);
      const slots = this.extractSlotsFromTemplate(descriptor.template?.content || '');

      // Extract JSDoc from the script section
      const jsdoc = this.tsParser.extractJSDoc(sourceFile);

      const component: ComponentMetadata = {
        name: componentName,
        type: 'function',
        framework: 'vue',
        description: jsdoc?.description,
        props,
        filePath,
        isExported: true, // Vue components are always exported
        line: 1,
        jsdoc,
        // Vue-specific metadata
        emits: emits.length > 0 ? emits : undefined,
        slots: slots.length > 0 ? slots : undefined,
        compositionApi: isScriptSetup || this.isCompositionApi(sourceFile),
        scriptSetup: isScriptSetup,
      };

      components.push(component);

      return components;
    } catch (error) {
      console.error(`Failed to parse Vue component ${filePath}:`, error);
      return [];
    }
  }

  /**
   * Extract component name from file path
   */
  private extractComponentName(filePath: string): string {
    const parts = filePath.split('/');
    const fileName = parts[parts.length - 1];
    return fileName.replace('.vue', '');
  }

  /**
   * Extract props from Vue component
   * Supports both <script setup> with defineProps and Options API
   */
  private extractProps(sourceFile: ts.SourceFile, isScriptSetup: boolean): PropertyMetadata[] {
    const props: PropertyMetadata[] = [];

    const visit = (node: ts.Node) => {
      // Script setup: defineProps<{ ... }>() or defineProps({ ... })
      if (isScriptSetup && ts.isCallExpression(node)) {
        const expr = node.expression;
        if (ts.isIdentifier(expr) && expr.text === 'defineProps') {
          // Check for type parameter: defineProps<PropsType>()
          if (node.typeArguments && node.typeArguments.length > 0) {
            const typeArg = node.typeArguments[0];
            props.push(...this.extractPropsFromType(typeArg, sourceFile));
          }
          // Check for runtime props: defineProps({ ... })
          else if (node.arguments.length > 0) {
            const arg = node.arguments[0];
            if (ts.isObjectLiteralExpression(arg)) {
              props.push(...this.extractPropsFromObject(arg));
            }
          }
        }
      }

      // Options API: props: { ... }
      if (!isScriptSetup && ts.isPropertyAssignment(node)) {
        const name = node.name;
        if (ts.isIdentifier(name) && name.text === 'props') {
          if (ts.isObjectLiteralExpression(node.initializer)) {
            props.push(...this.extractPropsFromObject(node.initializer));
          }
        }
      }

      ts.forEachChild(node, visit);
    };

    visit(sourceFile);
    return props;
  }

  /**
   * Extract props from TypeScript type (for defineProps<Type>())
   */
  private extractPropsFromType(
    typeNode: ts.TypeNode,
    sourceFile?: ts.SourceFile
  ): PropertyMetadata[] {
    const props: PropertyMetadata[] = [];

    // Handle inline type literal: defineProps<{ title: string }>()
    if (ts.isTypeLiteralNode(typeNode)) {
      for (const member of typeNode.members) {
        if (ts.isPropertySignature(member)) {
          const name = member.name?.getText() || '';
          const type = member.type?.getText() || 'any';
          const optional = !!member.questionToken;

          // Extract JSDoc comment for the prop
          const description = this.extractPropDescription(member);

          props.push({
            name: name.replace(/['"]/g, ''),
            type,
            optional,
            required: !optional,
            description,
          });
        }
      }
    }
    // Handle type reference: defineProps<Props>()
    else if (ts.isTypeReferenceNode(typeNode) && sourceFile) {
      const typeName = typeNode.typeName.getText();

      // Find the interface or type alias declaration
      const typeDeclaration = this.findTypeDeclaration(sourceFile, typeName);

      if (typeDeclaration) {
        if (ts.isInterfaceDeclaration(typeDeclaration)) {
          // Extract properties from interface
          for (const member of typeDeclaration.members) {
            if (ts.isPropertySignature(member)) {
              const name = member.name?.getText() || '';
              const type = member.type?.getText() || 'any';
              const optional = !!member.questionToken;

              // Extract JSDoc comment for the prop
              const description = this.extractPropDescription(member);

              props.push({
                name: name.replace(/['"]/g, ''),
                type,
                optional,
                required: !optional,
                description,
              });
            }
          }
        } else if (ts.isTypeAliasDeclaration(typeDeclaration) && typeDeclaration.type) {
          // Recursively extract from the type alias
          return this.extractPropsFromType(typeDeclaration.type, sourceFile);
        }
      }
    }

    return props;
  }

  /**
   * Find a type or interface declaration by name in the source file
   */
  private findTypeDeclaration(sourceFile: ts.SourceFile, typeName: string): ts.Node | undefined {
    let result: ts.Node | undefined;

    const visit = (node: ts.Node) => {
      if (result) return; // Already found

      if (ts.isInterfaceDeclaration(node) || ts.isTypeAliasDeclaration(node)) {
        if (node.name.text === typeName) {
          result = node;
          return;
        }
      }

      ts.forEachChild(node, visit);
    };

    visit(sourceFile);
    return result;
  }

  /**
   * Extract props from runtime object (for defineProps({ ... }) or props: { ... })
   */
  private extractPropsFromObject(obj: ts.ObjectLiteralExpression): PropertyMetadata[] {
    const props: PropertyMetadata[] = [];

    for (const property of obj.properties) {
      if (ts.isPropertyAssignment(property) || ts.isShorthandPropertyAssignment(property)) {
        const name = property.name?.getText() || '';

        let type = 'any';
        let required = false;
        let defaultValue: string | undefined;

        // For detailed prop definitions: { type: String, required: true, default: 'hello' }
        if (
          ts.isPropertyAssignment(property) &&
          ts.isObjectLiteralExpression(property.initializer)
        ) {
          const propObj = property.initializer;

          for (const propProp of propObj.properties) {
            if (ts.isPropertyAssignment(propProp)) {
              const propName = propProp.name.getText();

              if (propName === 'type') {
                type = propProp.initializer.getText();
              } else if (propName === 'required') {
                required = propProp.initializer.getText() === 'true';
              } else if (propName === 'default') {
                defaultValue = propProp.initializer.getText();
              }
            }
          }
        }

        props.push({
          name: name.replace(/['"]/g, ''),
          type,
          required,
          optional: !required,
          defaultValue,
        });
      }
    }

    return props;
  }

  /**
   * Extract emits from Vue component
   */
  private extractEmits(sourceFile: ts.SourceFile, isScriptSetup: boolean): VueEmitMetadata[] {
    const emits: VueEmitMetadata[] = [];

    const visit = (node: ts.Node) => {
      // Script setup: defineEmits<{ ... }>() or defineEmits([...])
      if (isScriptSetup && ts.isCallExpression(node)) {
        const expr = node.expression;
        if (ts.isIdentifier(expr) && expr.text === 'defineEmits') {
          // Type-based: defineEmits<{ (e: 'update', value: string): void }>()
          if (node.typeArguments && node.typeArguments.length > 0) {
            const typeArg = node.typeArguments[0];
            emits.push(...this.extractEmitsFromType(typeArg));
          }
          // Array-based: defineEmits(['update', 'change'])
          else if (node.arguments.length > 0) {
            const arg = node.arguments[0];
            if (ts.isArrayLiteralExpression(arg)) {
              for (const element of arg.elements) {
                if (ts.isStringLiteral(element)) {
                  emits.push({
                    name: element.text,
                  });
                }
              }
            }
          }
        }
      }

      // Options API: emits: [...] or emits: { ... }
      if (!isScriptSetup && ts.isPropertyAssignment(node)) {
        const name = node.name;
        if (ts.isIdentifier(name) && name.text === 'emits') {
          if (ts.isArrayLiteralExpression(node.initializer)) {
            for (const element of node.initializer.elements) {
              if (ts.isStringLiteral(element)) {
                emits.push({
                  name: element.text,
                });
              }
            }
          }
        }
      }

      ts.forEachChild(node, visit);
    };

    visit(sourceFile);
    return emits;
  }

  /**
   * Extract emits from TypeScript type
   */
  private extractEmitsFromType(typeNode: ts.TypeNode): VueEmitMetadata[] {
    const emits: VueEmitMetadata[] = [];

    if (ts.isTypeLiteralNode(typeNode)) {
      for (const member of typeNode.members) {
        if (ts.isCallSignatureDeclaration(member)) {
          // Extract event name from first parameter
          if (member.parameters.length > 0) {
            const firstParam = member.parameters[0];
            if (firstParam.type && ts.isLiteralTypeNode(firstParam.type)) {
              const literal = firstParam.type.literal;
              if (ts.isStringLiteral(literal)) {
                const eventName = literal.text;
                const payload = member.parameters[1]?.type?.getText();

                emits.push({
                  name: eventName,
                  payload,
                });
              }
            }
          }
        }
      }
    }

    return emits;
  }

  /**
   * Extract slots from template (basic detection)
   */
  private extractSlotsFromTemplate(template: string): VueSlotMetadata[] {
    const slots: VueSlotMetadata[] = [];

    // Match <slot name="...">
    const slotRegex = /<slot\s+(?:name=["']([^"']+)["'])?/g;
    let match;

    while ((match = slotRegex.exec(template)) !== null) {
      const slotName = match[1] || 'default';
      if (!slots.find((s) => s.name === slotName)) {
        slots.push({
          name: slotName,
        });
      }
    }

    return slots;
  }

  /**
   * Check if component uses Composition API (not script setup)
   */
  private isCompositionApi(sourceFile: ts.SourceFile): boolean {
    let hasSetup = false;

    const visit = (node: ts.Node) => {
      if (ts.isMethodDeclaration(node) || ts.isPropertyAssignment(node)) {
        const name = node.name;
        if (name && ts.isIdentifier(name) && name.text === 'setup') {
          hasSetup = true;
        }
      }
      ts.forEachChild(node, visit);
    };

    visit(sourceFile);
    return hasSetup;
  }

  /**
   * Extract description from JSDoc comment on a property signature
   */
  private extractPropDescription(member: ts.Node): string | undefined {
    const sourceFile = member.getSourceFile();
    const comments = ts.getLeadingCommentRanges(sourceFile.getFullText(), member.getFullStart());

    if (comments && comments.length > 0) {
      const comment = sourceFile.getFullText().substring(comments[0].pos, comments[0].end);
      // Extract text between /** and */ - remove leading/trailing markers
      const cleaned = comment
        .replace(/\/\*\*|\*\//g, '') // Remove /** and */
        .split('\n')
        .map((line) => line.replace(/^\s*\*\s?/, '')) // Remove leading * from each line
        .join(' ')
        .replace(/@\w+.*$/, '') // Remove @ tags
        .trim();

      return cleaned || undefined;
    }

    return undefined;
  }
}
