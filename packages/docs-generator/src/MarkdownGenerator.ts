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
   * Normalizes type strings for markdown table display
   * - Removes newlines and extra whitespace
   * - Converts multi-line types to single-line format
   * - Preserves essential spacing
   * - Escapes pipe characters
   */
  private normalizeTypeString(typeText: string | undefined): string {
    if (!typeText) return 'any';

    // Remove all newlines and collapse multiple spaces into single space
    let normalized = typeText
      .replace(/\r?\n/g, ' ') // Replace newlines with space
      .replace(/\s+/g, ' ') // Collapse multiple spaces
      .trim(); // Trim leading/trailing whitespace

    // Escape pipe characters for markdown tables
    normalized = this.escapeMarkdownPipes(normalized);

    return normalized;
  }

  /**
   * Render common JSDoc sections (Examples, See Also, Tutorials, Deprecated)
   */
  private renderJSDocCommon(jsdoc?: JSDocMetadata): string[] {
    const lines: string[] = [];
    if (!jsdoc) return lines;

    // Deprecated
    if (jsdoc.deprecated) {
      lines.push('');
      lines.push(':::danger');
      lines.push('**Deprecated:** ' + jsdoc.deprecated);
      lines.push(':::');
      lines.push('');
    }

    // Examples
    if (jsdoc.examples && jsdoc.examples.length > 0) {
      lines.push('\n## Examples\n');
      jsdoc.examples.forEach((example) => {
        if (example.description && example.description !== example.code) {
          lines.push(`${example.description}\n`);
        }
        const code = example.code.trim();

        // Always wrap code in fenced code block for consistency
        // Detect language from first line if it looks like a language identifier
        const firstLine = code.split('\n')[0];
        const languageMatch = firstLine.match(/^(typescript|javascript|jsx|tsx|vue|svelte|html|css|json|bash|shell)$/i);

        if (code.startsWith('```')) {
          // Code already has backticks - use as is
          lines.push(`${code}\n`);
        } else if (languageMatch) {
          // First line is a language identifier - use it
          const language = languageMatch[1].toLowerCase();
          const codeWithoutLang = code.split('\n').slice(1).join('\n').trim();
          lines.push(`\`\`\`${language}\n${codeWithoutLang}\n\`\`\`\n`);
        } else {
          // No language specified - default to typescript
          lines.push(`\`\`\`typescript\n${code}\n\`\`\`\n`);
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

  async generate(results: ParseResult[]): Promise<{
    components: number;
    functions: number;
    classes: number;
    interfaces: number;
    types: number;
    apiRoutes: number;
  }> {
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
            const uniqueFilename = this.getUniqueFilename(filename, documentedItems.apiRoutes);

            await this.generateApiRouteDoc(component, uniqueFilename);
            summary.push(
              `- [${method} ${component.routePath}](./api-routes/${uniqueFilename}.md) (API Route)`
            );
            documentedItems.apiRoutes.add(uniqueFilename);
          } else if (!documentedItems.components.has(component.name)) {
            const uniqueFilename = this.getUniqueFilename(
              component.name,
              documentedItems.components
            );
            await this.generateComponentDoc(component, uniqueFilename);
            summary.push(`- [${component.name}](./components/${uniqueFilename}.md) (Component)`);
            documentedItems.components.add(uniqueFilename);
          } else {
            console.warn(`⚠️  Skipping duplicate component documentation: ${component.name}`);
          }
        }
      }

      for (const func of result.functions) {
        // Document all functions and prevent duplicates
        const uniqueFilename = this.getUniqueFilename(func.name, documentedItems.functions);
        await this.generateFunctionDoc(func, uniqueFilename);
        summary.push(`- [${func.name}](./functions/${uniqueFilename}.md) (Function)`);
        documentedItems.functions.add(uniqueFilename);
      }

      for (const cls of result.classes) {
        // Document all classes and prevent duplicates
        const uniqueFilename = this.getUniqueFilename(cls.name, documentedItems.classes);
        await this.generateClassDoc(cls, uniqueFilename);
        summary.push(`- [${cls.name}](./classes/${uniqueFilename}.md) (Class)`);
        documentedItems.classes.add(uniqueFilename);
      }

      for (const iface of result.interfaces) {
        // Document all interfaces and prevent duplicates
        const uniqueFilename = this.getUniqueFilename(iface.name, documentedItems.interfaces);
        await this.generateInterfaceDoc(iface, uniqueFilename);
        summary.push(`- [${iface.name}](./interfaces/${uniqueFilename}.md) (Interface)`);
        documentedItems.interfaces.add(uniqueFilename);
      }

      for (const type of result.types) {
        // Document all types and prevent duplicates
        const uniqueFilename = this.getUniqueFilename(type.name, documentedItems.types);
        await this.generateTypeDoc(type, uniqueFilename);
        summary.push(`- [${type.name}](./types/${uniqueFilename}.md) (Type)`);
        documentedItems.types.add(uniqueFilename);
      }
    }

    await writeFile(join(this.outputDir, 'README.md'), summary.join('\n'));

    // Return actual documented counts
    return {
      components: documentedItems.components.size,
      functions: documentedItems.functions.size,
      classes: documentedItems.classes.size,
      interfaces: documentedItems.interfaces.size,
      types: documentedItems.types.size,
      apiRoutes: documentedItems.apiRoutes.size,
    };
  }

  private getUniqueFilename(name: string, documented: Set<string>): string {
    let filename = name;
    let counter = 1;
    while (documented.has(filename)) {
      filename = `${name}_${counter}`;
      counter++;
    }
    return filename;
  }

  private generateFrontmatter(title: string, metadata: Record<string, any> = {}): string {
    const lines = ['---', `title: ${title}`];
    for (const [key, value] of Object.entries(metadata)) {
      if (value !== undefined && value !== null) {
        lines.push(`${key}: ${value}`);
      }
    }
    lines.push('---', '');
    return lines.join('\n');
  }

  private async generateApiRouteDoc(component: ComponentMetadata, filename: string): Promise<void> {
    const method = component.name === 'default' ? 'Handler' : component.name;
    const title = `${component.routePath || ''} ${method}`;
    const lines: string[] = [this.generateFrontmatter(title, { sourcePath: component.filePath })];
    lines.push(`# ${title}`);
    // ... rest same

    // Add Method Badge/Callout
    lines.push('');
    lines.push(':::info');
    lines.push(`**Method:** \`${method.toUpperCase()}\``);
    lines.push(`**Route:** \`${component.routePath}\``);
    lines.push(':::');
    lines.push('');

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
        const typeStr = response.type ? `\`${this.normalizeTypeString(response.type)}\`` : '-';
        lines.push(
          `| **${response.status}** | ${this.escapeMarkdownPipes(response.description)} | ${typeStr} |`
        );
      }
      lines.push('');
    }

    // No need to redeclare filename here, it's passed as an argument
    await writeFile(join(this.outputDir, 'api-routes', `${filename}.md`), lines.join('\n'));
  }

  private async generateComponentDoc(
    component: ComponentMetadata,
    filename: string
  ): Promise<void> {
    const lines: string[] = [
      this.generateFrontmatter(component.name, { sourcePath: component.filePath }),
    ];
    lines.push(`# ${component.name}`);

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
        const normalizedType = this.normalizeTypeString(prop.type);
        lines.push(
          `| \`${prop.name}\` | \`${normalizedType}\` | ${prop.optional ? 'Yes' : 'No'} | ${prop.description || '-'} |`
        );
      }
      lines.push('');
    }

    // Vue-specific sections
    if (component.framework === 'vue') {
      // Vue API Style Badge
      if (component.compositionApi !== undefined) {
        const apiStyle = component.scriptSetup
          ? 'Composition API (script setup)'
          : component.compositionApi
            ? 'Composition API'
            : 'Options API';
        lines.push('');
        lines.push(':::tip');
        lines.push('**Vue API Style:** ' + apiStyle);
        lines.push(':::');
        lines.push('');
      }

      // Vue Emits
      if (component.emits && component.emits.length > 0) {
        lines.push('## Emits');
        lines.push('| Event | Payload | Description |');
        lines.push('| :---- | :------ | :---------- |');
        for (const emit of component.emits) {
          const payload = emit.payload ? `\`${this.normalizeTypeString(emit.payload)}\`` : '-';
          lines.push(`| \`${emit.name}\` | ${payload} | ${emit.description || '-'} |`);
        }
        lines.push('');
      }

      // Vue Slots
      if (component.slots && component.slots.length > 0) {
        lines.push('## Slots');
        lines.push('| Name | Props | Description |');
        lines.push('| :--- | :---- | :---------- |');
        for (const slot of component.slots) {
          const props = slot.props ? `\`${this.normalizeTypeString(slot.props)}\`` : '-';
          lines.push(
            `| \`${slot.name}\` | ${props} | ${slot.description || '-'} |`
          );
        }
        lines.push('');
      }
    }

    // Svelte-specific sections
    if (component.framework === 'svelte') {
      const svelteComp = component as any; // Cast to access Svelte-specific fields

      // Svelte Events
      if (svelteComp.events && svelteComp.events.length > 0) {
        lines.push('## Events');
        lines.push('| Event | Detail | Description |');
        lines.push('| :---- | :----- | :---------- |');
        for (const event of svelteComp.events) {
          const detail = event.detail ? `\`${this.normalizeTypeString(event.detail)}\`` : '-';
          lines.push(`| \`${event.name}\` | ${detail} | ${event.description || '-'} |`);
        }
        lines.push('');
      }

      // Svelte Reactive Statements
      if (svelteComp.reactiveStatements && svelteComp.reactiveStatements.length > 0) {
        lines.push('## Reactive Statements');
        lines.push('');
        for (const stmt of svelteComp.reactiveStatements) {
          lines.push('```javascript');
          lines.push(`$: ${stmt.expression}`);
          lines.push('```');
          if (stmt.dependencies && stmt.dependencies.length > 0) {
            lines.push(`**Dependencies:** ${stmt.dependencies.map((d: string) => `\`${d}\``).join(', ')}`);
          }
          lines.push('');
        }
      }

      // Svelte Stores
      if (svelteComp.stores && svelteComp.stores.length > 0) {
        lines.push('## Store References');
        lines.push('');
        lines.push(
          'This component uses the following Svelte stores:'
        );
        lines.push('');
        for (const store of svelteComp.stores) {
          lines.push(`- \`$${store}\``);
        }
        lines.push('');
      }

      // Svelte Slots
      if (svelteComp.svelteSlots && svelteComp.svelteSlots.length > 0) {
        lines.push('## Slots');
        lines.push('');
        for (const slot of svelteComp.svelteSlots) {
          lines.push(`- \`${slot}\``);
        }
        lines.push('');
      }
    }

    // React-specific sections
    if (component.framework === 'react' && component.hooks && component.hooks.length > 0) {
      lines.push('## React Hooks');
      lines.push('');
      lines.push('This component uses the following React hooks:');
      lines.push('');
      for (const hook of component.hooks) {
        lines.push(`- \`${hook}\``);
      }
      lines.push('');
    }

    await writeFile(join(this.outputDir, 'components', `${filename}.md`), lines.join('\n'));
  }

  private async generateFunctionDoc(func: FunctionMetadata, filename: string): Promise<void> {
    const lines: string[] = [this.generateFrontmatter(func.name, { sourcePath: func.filePath })];
    lines.push(`# ${func.name}`);

    // Add export status badge
    const exportBadge = func.isExported
      ? '![Exported](https://img.shields.io/badge/exported-yes-brightgreen)'
      : '![Not Exported](https://img.shields.io/badge/exported-no-orange)';
    lines.push(`\n${exportBadge}\n`);

    if (func.description) {
      lines.push(`\n${func.description}\n`);
    }

    // Add source path
    lines.push(`**Source:** \`${func.filePath}${func.line ? `:${func.line}` : ''}\`\n`);

    lines.push(`**Return Type:** \`${func.returnType || 'void'}\`\n`);

    // Add common JSDoc sections
    lines.push(...this.renderJSDocCommon(func.jsdoc));

    if (func.parameters && func.parameters.length > 0) {
      lines.push('## Parameters');
      lines.push('| Name | Type | Optional | Description |');
      lines.push('| :--- | :--- | :------- | :---------- |');

      for (const param of func.parameters) {
        const normalizedType = this.normalizeTypeString(param.type);
        lines.push(
          `| \`${param.name}\` | \`${normalizedType}\` | ${param.optional ? 'Yes' : 'No'} | ${param.description || '-'} |`
        );
      }
    }

    await writeFile(join(this.outputDir, 'functions', `${filename}.md`), lines.join('\n'));
  }

  private async generateClassDoc(cls: ClassMetadata, filename: string): Promise<void> {
    const lines: string[] = [this.generateFrontmatter(cls.name, { sourcePath: cls.filePath })];
    lines.push(`# ${cls.name}`);

    // Add export status badge
    const exportBadge = cls.isExported
      ? '![Exported](https://img.shields.io/badge/exported-yes-brightgreen)'
      : '![Not Exported](https://img.shields.io/badge/exported-no-orange)';
    lines.push(`\n${exportBadge}\n`);

    if (cls.description) {
      lines.push(`\n${cls.description}\n`);
    }

    // Add source path
    lines.push(`**Source:** \`${cls.filePath}${cls.line ? `:${cls.line}` : ''}\`\n`);

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
        const normalizedType = this.normalizeTypeString(prop.type);
        lines.push(`| \`${prop.name}\` | \`${normalizedType}\` | ${prop.description || '-'} |`);
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

    await writeFile(join(this.outputDir, 'classes', `${filename}.md`), lines.join('\n'));
  }

  private async generateInterfaceDoc(iface: InterfaceMetadata, filename: string): Promise<void> {
    const lines: string[] = [this.generateFrontmatter(iface.name, { sourcePath: iface.filePath })];
    lines.push(`# ${iface.name}`);

    // Add export status badge
    const exportBadge = iface.isExported
      ? '![Exported](https://img.shields.io/badge/exported-yes-brightgreen)'
      : '![Not Exported](https://img.shields.io/badge/exported-no-orange)';
    lines.push(`\n${exportBadge}\n`);

    if (iface.description) lines.push(`\n${iface.description}\n`);

    // Add source path
    lines.push(`**Source:** \`${iface.filePath}${iface.line ? `:${iface.line}` : ''}\`\n`);

    // Add common JSDoc sections
    lines.push(...this.renderJSDocCommon(iface.jsdoc));

    if (iface.properties && iface.properties.length > 0) {
      lines.push('## Properties');
      lines.push('| Name | Type | Optional | Description |');
      lines.push('| :--- | :--- | :------- | :---------- |');
      for (const prop of iface.properties) {
        const normalizedType = this.normalizeTypeString(prop.type);
        lines.push(
          `| \`${prop.name}\` | \`${normalizedType}\` | ${prop.optional ? 'Yes' : 'No'} | ${prop.description || '-'} |`
        );
      }
    }

    await writeFile(join(this.outputDir, 'interfaces', `${filename}.md`), lines.join('\n'));
  }

  private async generateTypeDoc(type: TypeMetadata, filename: string): Promise<void> {
    const lines: string[] = [this.generateFrontmatter(type.name, { sourcePath: type.filePath })];
    lines.push(`# ${type.name}`);

    // Add export status badge
    const exportBadge = type.isExported
      ? '![Exported](https://img.shields.io/badge/exported-yes-brightgreen)'
      : '![Not Exported](https://img.shields.io/badge/exported-no-orange)';
    lines.push(`\n${exportBadge}\n`);

    if (type.description) lines.push(`\n${type.description}\n`);

    // Add source path
    lines.push(`**Source:** \`${type.filePath}${type.line ? `:${type.line}` : ''}\`\n`);

    // Add common JSDoc sections
    lines.push(...this.renderJSDocCommon(type.jsdoc));

    lines.push('## Definition');
    lines.push('```typescript');
    lines.push(type.type); // This might be the raw type string
    lines.push('```');

    await writeFile(join(this.outputDir, 'types', `${filename}.md`), lines.join('\n'));
  }
}
