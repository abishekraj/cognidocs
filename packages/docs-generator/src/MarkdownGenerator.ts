import { join } from 'path';
import fs from 'fs-extra';
const { ensureDir, writeFile } = fs;
import type {
  ParseResult,
  ComponentMetadata,
  FunctionMetadata,
  ClassMetadata,
  InterfaceMetadata,
  TypeMetadata,
  JSDocMetadata,
} from '@cognidocs/types';

export class MarkdownGenerator {
  constructor(private outputDir: string) {}

  /**
   * Escapes pipe characters in type strings to prevent breaking markdown tables
   */
  private escapeMarkdownPipes(text: string): string {
    if (!text) return text;
    return text.replace(/\|/g, '\\|');
  }

  /**
   * Render common JSDoc sections (Examples, See Also, Tutorials, Deprecated)
   */
  private renderJSDocCommon(jsdoc?: JSDocMetadata): string[] {
    const lines: string[] = [];
    if (!jsdoc) return lines;

    // Deprecated
    if (jsdoc.deprecated) {
      lines.push(`\n:::danger Deprecated\n${jsdoc.deprecated}\n:::\n`);
    }

    // Examples
    if (jsdoc.examples && jsdoc.examples.length > 0) {
      lines.push('## Examples');
      jsdoc.examples.forEach((example) => {
        if (example.description && example.description !== example.code) {
          lines.push(`\n${example.description}\n`);
        }
        const code = example.code.trim();
        // Check if already fenced
        if (code.startsWith('```')) {
          lines.push(`\n${code}\n`);
        } else {
          lines.push(`\n\`\`\`ts\n${code}\n\`\`\`\n`);
        }
      });
    }

    // See Also
    if (jsdoc.see && jsdoc.see.length > 0) {
      lines.push('## See Also');
      const links = jsdoc.see.map((s) => {
        if (s.url) return `- [${s.text}](${s.url})`;
        return `- ${s.text}`;
      });
      lines.push(links.join('\n'));
      lines.push('');
    }

    // Tutorials
    if (jsdoc.tutorials && jsdoc.tutorials.length > 0) {
      lines.push('## Tutorials');
      const links = jsdoc.tutorials.map((t) => {
        return `- ${t.text}`;
      });
      lines.push(links.join('\n'));
      lines.push('');
    }

    return lines;
  }

  async generate(results: ParseResult[]): Promise<void> {
    await ensureDir(this.outputDir);

    // Clean up old documentation folders to prevent stale files
    const foldersToClean = [
      'components',
      'functions',
      'classes',
      'interfaces',
      'types',
      'api-routes',
    ];
    for (const folder of foldersToClean) {
      const folderPath = join(this.outputDir, folder);
      // Remove and recreate to ensure clean state
      if (await fs.pathExists(folderPath)) {
        await fs.remove(folderPath);
      }
      await ensureDir(folderPath);
    }

    const summary: string[] = ['# Documentation Index\n'];

    // Track documented items to prevent duplicates
    const documentedItems = {
      components: new Set<string>(),
      functions: new Set<string>(),
      classes: new Set<string>(),
      interfaces: new Set<string>(),
      types: new Set<string>(),
      apiRoutes: new Set<string>(),
    };

    for (const result of results) {
      if (result.components) {
        for (const component of result.components) {
          if (component.isApiRoute) {
            // Document API Route
            // Use same naming logic as generateApiRouteDoc to ensure consistency in summary link
            const method = component.name === 'default' ? 'Handler' : component.name;
            const safeRoute = (component.routePath || 'route')
              .replace(/\//g, '-')
              .replace(/^-/, '')
              .replace(/-$/, '');
            const filename = `${safeRoute}-${method}`.toLowerCase();

            // Check uniqueness based on filename
            if (!documentedItems.apiRoutes.has(filename)) {
              await this.generateApiRouteDoc(component);
              summary.push(
                `- [${method} ${component.routePath}](./api-routes/${filename}.md) (API Route)`
              );
              documentedItems.apiRoutes.add(filename);
            }
          } else if (!documentedItems.components.has(component.name)) {
            await this.generateComponentDoc(component);
            summary.push(`- [${component.name}](./components/${component.name}.md) (Component)`);
            documentedItems.components.add(component.name);
          } else {
            console.warn(`⚠️  Skipping duplicate component documentation: ${component.name}`);
          }
        }
      }

      for (const func of result.functions) {
        // Only document exported functions and prevent duplicates
        if (func.isExported && !documentedItems.functions.has(func.name)) {
          await this.generateFunctionDoc(func);
          summary.push(`- [${func.name}](./functions/${func.name}.md) (Function)`);
          documentedItems.functions.add(func.name);
        } else if (func.isExported && documentedItems.functions.has(func.name)) {
          console.warn(`⚠️  Skipping duplicate function documentation: ${func.name}`);
        }
      }

      for (const cls of result.classes) {
        if (cls.isExported && !documentedItems.classes.has(cls.name)) {
          await this.generateClassDoc(cls);
          summary.push(`- [${cls.name}](./classes/${cls.name}.md) (Class)`);
          documentedItems.classes.add(cls.name);
        } else if (cls.isExported && documentedItems.classes.has(cls.name)) {
          console.warn(`⚠️  Skipping duplicate class documentation: ${cls.name}`);
        }
      }

      for (const iface of result.interfaces) {
        if (iface.isExported && !documentedItems.interfaces.has(iface.name)) {
          await this.generateInterfaceDoc(iface);
          summary.push(`- [${iface.name}](./interfaces/${iface.name}.md) (Interface)`);
          documentedItems.interfaces.add(iface.name);
        } else if (iface.isExported && documentedItems.interfaces.has(iface.name)) {
          console.warn(`⚠️  Skipping duplicate interface documentation: ${iface.name}`);
        }
      }

      for (const type of result.types) {
        if (type.isExported && !documentedItems.types.has(type.name)) {
          await this.generateTypeDoc(type);
          summary.push(`- [${type.name}](./types/${type.name}.md) (Type)`);
          documentedItems.types.add(type.name);
        } else if (type.isExported && documentedItems.types.has(type.name)) {
          console.warn(`⚠️  Skipping duplicate type documentation: ${type.name}`);
        }
      }
    }

    await writeFile(join(this.outputDir, 'README.md'), summary.join('\n'));
  }

  private async generateApiRouteDoc(component: ComponentMetadata): Promise<void> {
    const method = component.name === 'default' ? 'Handler' : component.name;
    const title = `${component.routePath || ''} ${method}`;
    const lines: string[] = [`# ${title}`];

    // Add Method Badge/Callout
    lines.push(
      `\n:::info\n**Method:** \`${method.toUpperCase()}\`  \n**Route:** \`${component.routePath}\`\n:::\n`
    );

    if (component.description) {
      lines.push(`\n${component.description}\n`);
    }

    lines.push(
      `\n**Source:** \`${component.filePath}${component.line ? `:${component.line}` : ''}\`\n`
    );

    if (component.jsdoc?.params && Object.keys(component.jsdoc.params).length > 0) {
      lines.push('## Parameters');
      lines.push('| Name | Description |');
      lines.push('| :--- | :---------- |');
      for (const [name, desc] of Object.entries(component.jsdoc.params)) {
        lines.push(`| \`${name}\` | ${desc} |`);
      }
    }

    // Add common JSDoc sections
    lines.push(...this.renderJSDocCommon(component.jsdoc));

    if (component.jsdoc?.responses && component.jsdoc.responses.length > 0) {
      lines.push('## Responses');
      lines.push('| Status | Description | Type |');
      lines.push('| :--- | :---------- | :--- |');
      for (const response of component.jsdoc.responses) {
        const typeStr = response.type ? `\`${this.escapeMarkdownPipes(response.type)}\`` : '-';
        lines.push(
          `| **${response.status}** | ${this.escapeMarkdownPipes(response.description)} | ${typeStr} |`
        );
      }
      lines.push('');
    }

    // Generate unique filename to facilitate multiple methods per route
    const safeRoute = (component.routePath || 'route')
      .replace(/\//g, '-')
      .replace(/^-/, '')
      .replace(/-$/, '');
    const filename = `${safeRoute}-${method}`.toLowerCase(); // e.g., api-users-get.md

    await writeFile(join(this.outputDir, 'api-routes', `${filename}.md`), lines.join('\n'));
  }

  private async generateComponentDoc(component: ComponentMetadata): Promise<void> {
    const lines: string[] = [`# ${component.name}`];

    if (component.isPage) {
      lines.push(`\n> [!NOTE]
> This is a Next.js Page component.\n`);
      if (component.routePath) {
        lines.push(`**Route:** \`${component.routePath}\`\n`);
      }
    }
    if (component.isLayout) {
      lines.push(`\n> [!NOTE]
> This is a Next.js Layout component.\n`);
    }

    if (component.description) {
      lines.push(`\n${component.description}\n`);
    }

    lines.push(`\n**Type:** ${component.type} Component (${component.framework})`);
    lines.push(
      `**Source:** \`${component.filePath}${component.line ? `:${component.line}` : ''}\`\n`
    );

    // Add common JSDoc sections
    lines.push(...this.renderJSDocCommon(component.jsdoc));

    if (component.props && component.props.length > 0) {
      lines.push('## Props');
      lines.push('| Name | Type | Optional | Description |');
      lines.push('| :--- | :--- | :------- | :---------- |');

      for (const prop of component.props) {
        const escapedType = this.escapeMarkdownPipes(prop.type || 'any');
        lines.push(
          `| \`${prop.name}\` | \`${escapedType}\` | ${prop.optional ? 'Yes' : 'No'} | ${prop.description || '-'} |`
        );
      }
    }

    await writeFile(join(this.outputDir, 'components', `${component.name}.md`), lines.join('\n'));
  }

  private async generateFunctionDoc(func: FunctionMetadata): Promise<void> {
    const lines: string[] = [`# ${func.name}`];

    if (func.description) {
      lines.push(`\n${func.description}\n`);
    }

    lines.push(`\n**Return Type:** \`${func.returnType || 'void'}\`\n`);

    // Add common JSDoc sections
    lines.push(...this.renderJSDocCommon(func.jsdoc));

    if (func.parameters && func.parameters.length > 0) {
      lines.push('## Parameters');
      lines.push('| Name | Type | Optional | Description |');
      lines.push('| :--- | :--- | :------- | :---------- |');

      for (const param of func.parameters) {
        const escapedType = this.escapeMarkdownPipes(param.type || 'any');
        lines.push(
          `| \`${param.name}\` | \`${escapedType}\` | ${param.optional ? 'Yes' : 'No'} | ${param.description || '-'} |`
        );
      }
    }

    await writeFile(join(this.outputDir, 'functions', `${func.name}.md`), lines.join('\n'));
  }

  private async generateClassDoc(cls: ClassMetadata): Promise<void> {
    const lines: string[] = [`# ${cls.name}`];

    if (cls.description) {
      lines.push(`\n${cls.description}\n`);
    }

    if (cls.extendsClass) {
      lines.push(`**Extends:** \`${cls.extendsClass}\`\n`);
    }

    // Add common JSDoc sections
    lines.push(...this.renderJSDocCommon(cls.jsdoc));

    if (cls.properties && cls.properties.length > 0) {
      lines.push('## Properties');
      lines.push('| Name | Type | Description |');
      lines.push('| :--- | :--- | :---------- |');
      for (const prop of cls.properties) {
        const escapedType = this.escapeMarkdownPipes(prop.type || 'any');
        lines.push(`| \`${prop.name}\` | \`${escapedType}\` | ${prop.description || '-'} |`);
      }
      lines.push('');
    }

    if (cls.methods && cls.methods.length > 0) {
      lines.push('## Methods');
      for (const method of cls.methods) {
        lines.push(`### ${method.name}`);
        if (method.description) lines.push(`\n${method.description}\n`);
        lines.push(`**Return:** \`${method.returnType || 'void'}\``);
        // Could add params table here too
        lines.push('');
      }
    }

    await writeFile(join(this.outputDir, 'classes', `${cls.name}.md`), lines.join('\n'));
  }

  private async generateInterfaceDoc(iface: InterfaceMetadata): Promise<void> {
    const lines: string[] = [`# ${iface.name}`];
    if (iface.description) lines.push(`\n${iface.description}\n`);

    // Add common JSDoc sections
    lines.push(...this.renderJSDocCommon(iface.jsdoc));

    if (iface.properties && iface.properties.length > 0) {
      lines.push('## Properties');
      lines.push('| Name | Type | Optional | Description |');
      lines.push('| :--- | :--- | :------- | :---------- |');
      for (const prop of iface.properties) {
        const escapedType = this.escapeMarkdownPipes(prop.type || 'any');
        lines.push(
          `| \`${prop.name}\` | \`${escapedType}\` | ${prop.optional ? 'Yes' : 'No'} | ${prop.description || '-'} |`
        );
      }
    }

    await writeFile(join(this.outputDir, 'interfaces', `${iface.name}.md`), lines.join('\n'));
  }

  private async generateTypeDoc(type: TypeMetadata): Promise<void> {
    const lines: string[] = [`# ${type.name}`];
    if (type.description) lines.push(`\n${type.description}\n`);

    // Add common JSDoc sections
    lines.push(...this.renderJSDocCommon(type.jsdoc));

    lines.push('## Definition');
    lines.push('```typescript');
    lines.push(type.type); // This might be the raw type string
    lines.push('```');

    await writeFile(join(this.outputDir, 'types', `${type.name}.md`), lines.join('\n'));
  }
}
