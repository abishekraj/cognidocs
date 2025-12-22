/**
 * Code generation utilities for component preview
 * Converts component metadata and props into executable JavaScript code
 * Phase 6.4: Code Generation & Dependency Resolution
 */

import type { PropertyMetadata } from '@cognidocs/types';

/**
 * Convert a prop value to valid JavaScript/JSX code
 */
export function propValueToCode(value: unknown): string {
  // Handle null and undefined
  if (value === null) return 'null';
  if (value === undefined) return 'undefined';

  // Handle primitives
  if (typeof value === 'string') {
    // Escape special characters
    const escaped = value
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/\t/g, '\\t');
    return `"${escaped}"`;
  }

  if (typeof value === 'number') {
    return String(value);
  }

  if (typeof value === 'boolean') {
    return String(value);
  }

  // Handle functions
  if (typeof value === 'function') {
    return value.toString();
  }

  // Handle arrays
  if (Array.isArray(value)) {
    const items = value.map((item) => propValueToCode(item)).join(', ');
    return `[${items}]`;
  }

  // Handle objects
  if (typeof value === 'object') {
    const entries = Object.entries(value)
      .map(([key, val]) => {
        const validKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key);
        const keyStr = validKey ? key : `"${key}"`;
        return `${keyStr}: ${propValueToCode(val)}`;
      })
      .join(', ');
    return `{ ${entries} }`;
  }

  return 'undefined';
}

/**
 * Generate props object code from prop values
 */
export function generatePropsObject(props: Record<string, unknown>): string {
  if (Object.keys(props).length === 0) {
    return '{}';
  }

  const entries = Object.entries(props)
    .map(([key, value]) => {
      const validKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key);
      const keyStr = validKey ? key : `"${key}"`;
      const valueStr = propValueToCode(value);
      return `  ${keyStr}: ${valueStr}`;
    })
    .join(',\n');

  return `{\n${entries}\n}`;
}

/**
 * Generate executable component code with props
 */
export function generateComponentCode(
  componentName: string,
  componentSource: string
): string {
  return `
// Component source code
${componentSource}

// Export component to global scope for sandbox
window['${componentName}'] = ${componentName};

// Log for debugging
console.log('Component loaded:', '${componentName}');
`.trim();
}

/**
 * Generate complete executable code for sandbox
 * This includes component code, dependencies, and rendering logic
 */
export function generateExecutableCode(
  componentName: string,
  componentSource: string,
  dependencies?: string[]
): string {
  // Component code
  let code = generateComponentCode(componentName, componentSource);

  // Add dependency imports if needed
  if (dependencies && dependencies.length > 0) {
    const imports = dependencies
      .map((dep) => `// Dependency: ${dep}`)
      .join('\n');
    code = `${imports}\n\n${code}`;
  }

  return code;
}

/**
 * Validate component source code
 * Checks for common issues that would prevent execution
 */
export function validateComponentSource(source: string, componentName: string): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Check if source is empty
  if (!source || source.trim().length === 0) {
    errors.push('Component source code is empty');
  }

  // Check if component name exists in source
  const hasComponentDeclaration =
    source.includes(`function ${componentName}`) ||
    source.includes(`const ${componentName}`) ||
    source.includes(`let ${componentName}`) ||
    source.includes(`class ${componentName}`);

  if (!hasComponentDeclaration) {
    errors.push(`Component "${componentName}" not found in source code`);
  }

  // Check for export statement
  const hasExport =
    source.includes(`export default ${componentName}`) ||
    source.includes(`export { ${componentName}`) ||
    source.includes(`export const ${componentName}`) ||
    source.includes(`export function ${componentName}`) ||
    source.includes(`export class ${componentName}`);

  if (!hasExport) {
    errors.push(`Component "${componentName}" is not exported`);
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Extract component name from source code
 * Useful when component name is not provided
 */
export function extractComponentName(source: string): string | null {
  // Try to find default export
  const defaultExportMatch = source.match(/export\s+default\s+(\w+)/);
  if (defaultExportMatch) {
    return defaultExportMatch[1];
  }

  // Try to find named export with function
  const namedFunctionMatch = source.match(/export\s+function\s+(\w+)/);
  if (namedFunctionMatch) {
    return namedFunctionMatch[1];
  }

  // Try to find named export with const
  const namedConstMatch = source.match(/export\s+const\s+(\w+)/);
  if (namedConstMatch) {
    return namedConstMatch[1];
  }

  // Try to find named export with class
  const namedClassMatch = source.match(/export\s+class\s+(\w+)/);
  if (namedClassMatch) {
    return namedClassMatch[1];
  }

  return null;
}

/**
 * Strip TypeScript types from source code
 * Converts TypeScript to JavaScript for execution
 */
export function stripTypeScript(source: string): string {
  let code = source;

  // Remove type annotations from function parameters
  code = code.replace(/(\w+)\s*:\s*[\w<>[\]|&\s,{}]+(?=\s*[,)])/g, '$1');

  // Remove return type annotations
  code = code.replace(/\)\s*:\s*[\w<>[\]|&\s,{}]+\s*{/g, ') {');
  code = code.replace(/\)\s*:\s*[\w<>[\]|&\s,{}]+\s*=>/g, ') =>');

  // Remove interface declarations
  code = code.replace(/interface\s+\w+\s*{[^}]*}/g, '');

  // Remove type declarations
  code = code.replace(/type\s+\w+\s*=\s*[^;]+;/g, '');

  // Remove generic type parameters
  code = code.replace(/<[\w<>[\]|&\s,{}]+>/g, '');

  // Remove 'as' type assertions
  code = code.replace(/\s+as\s+[\w<>[\]|&\s,{}]+/g, '');

  // Remove import type statements
  code = code.replace(/import\s+type\s+{[^}]*}\s+from\s+['"][^'"]+['"]/g, '');

  return code;
}

/**
 * Generate mock data for a prop based on its type
 * Useful for generating default props for preview
 */
export function generateMockPropValue(prop: PropertyMetadata): unknown {
  const type = prop.type?.toLowerCase() || 'string';

  if (type.includes('string')) {
    return prop.defaultValue || 'Sample text';
  }

  if (type.includes('number')) {
    return prop.defaultValue !== undefined ? Number(prop.defaultValue) : 42;
  }

  if (type.includes('boolean') || type.includes('bool')) {
    return prop.defaultValue !== undefined ? Boolean(prop.defaultValue) : true;
  }

  if (type.includes('[]') || type.includes('array')) {
    return [];
  }

  if (type.includes('object') || type === 'any') {
    return {};
  }

  if (type.includes('function') || type.includes('=>')) {
    return () => console.log('Mock function called');
  }

  if (type.includes('reactnode') || type.includes('react.reactnode')) {
    return null;
  }

  return undefined;
}

/**
 * Generate all props with default/mock values
 */
export function generateDefaultProps(props: PropertyMetadata[]): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  for (const prop of props) {
    result[prop.name] = generateMockPropValue(prop);
  }

  return result;
}
