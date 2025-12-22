/**
 * Dependency resolution utilities for component preview
 * Handles component imports and external dependencies
 * Phase 6.4: Code Generation & Dependency Resolution
 */

/**
 * Dependency information
 */
export interface DependencyInfo {
  /** Package/module name */
  name: string;
  /** Import specifiers (named imports) */
  specifiers: string[];
  /** Default import name */
  defaultImport?: string;
  /** Namespace import name (import * as X) */
  namespaceImport?: string;
  /** Whether this is a relative import */
  isRelative: boolean;
  /** Original import statement */
  raw: string;
}

/**
 * CDN configuration for external packages
 */
export interface CDNConfig {
  /** Package name */
  package: string;
  /** CDN URL template */
  url: string;
  /** Global variable name */
  global: string;
}

/**
 * Default CDN configurations for common packages
 */
export const DEFAULT_CDN_CONFIGS: CDNConfig[] = [
  {
    package: 'react',
    url: 'https://unpkg.com/react@18/umd/react.development.js',
    global: 'React',
  },
  {
    package: 'react-dom',
    url: 'https://unpkg.com/react-dom@18/umd/react-dom.development.js',
    global: 'ReactDOM',
  },
  {
    package: 'prop-types',
    url: 'https://unpkg.com/prop-types@15/prop-types.js',
    global: 'PropTypes',
  },
];

/**
 * Extract import statements from source code
 */
export function extractImports(source: string): DependencyInfo[] {
  const dependencies: DependencyInfo[] = [];
  const importRegex = /import\s+(?:(?:(\w+)|{([^}]+)}|\*\s+as\s+(\w+))\s+from\s+)?['"]([^'"]+)['"]/g;

  let match;
  while ((match = importRegex.exec(source)) !== null) {
    const [raw, defaultImport, namedImports, namespaceImport, packageName] = match;

    const specifiers = namedImports
      ? namedImports.split(',').map((s) => s.trim().split(/\s+as\s+/)[0])
      : [];

    dependencies.push({
      name: packageName,
      specifiers,
      defaultImport,
      namespaceImport,
      isRelative: packageName.startsWith('.') || packageName.startsWith('/'),
      raw,
    });
  }

  return dependencies;
}

/**
 * Resolve a dependency to a CDN URL
 */
export function resolveToCDN(
  packageName: string,
  cdnConfigs: CDNConfig[] = DEFAULT_CDN_CONFIGS
): CDNConfig | null {
  return cdnConfigs.find((config) => config.package === packageName) || null;
}

/**
 * Generate script tags for CDN dependencies
 */
export function generateCDNScriptTags(dependencies: string[]): string {
  const scripts: string[] = [];

  for (const dep of dependencies) {
    const cdn = resolveToCDN(dep);
    if (cdn) {
      scripts.push(`<script crossorigin src="${cdn.url}"></script>`);
    }
  }

  return scripts.join('\n');
}

/**
 * Replace import statements with global variable assignments
 */
export function replaceImportsWithGlobals(
  source: string,
  cdnConfigs: CDNConfig[] = DEFAULT_CDN_CONFIGS
): string {
  let code = source;
  const imports = extractImports(source);

  for (const imp of imports) {
    // Skip relative imports (handled separately)
    if (imp.isRelative) {
      continue;
    }

    const cdn = resolveToCDN(imp.name, cdnConfigs);
    if (!cdn) {
      // Remove import if no CDN mapping found
      code = code.replace(imp.raw, `// Unresolved dependency: ${imp.name}`);
      continue;
    }

    // Build replacement code
    const replacements: string[] = [];

    if (imp.defaultImport) {
      replacements.push(`const ${imp.defaultImport} = window.${cdn.global};`);
    }

    if (imp.namespaceImport) {
      replacements.push(`const ${imp.namespaceImport} = window.${cdn.global};`);
    }

    if (imp.specifiers.length > 0) {
      const destructure = imp.specifiers.join(', ');
      replacements.push(`const { ${destructure} } = window.${cdn.global};`);
    }

    // Replace import statement
    code = code.replace(imp.raw, replacements.join('\n'));
  }

  return code;
}

/**
 * Check if all dependencies are available
 */
export function checkDependencies(dependencies: string[]): {
  available: string[];
  missing: string[];
} {
  const available: string[] = [];
  const missing: string[] = [];

  for (const dep of dependencies) {
    const cdn = resolveToCDN(dep);
    if (cdn) {
      available.push(dep);
    } else {
      missing.push(dep);
    }
  }

  return { available, missing };
}

/**
 * Generate fallback code for missing dependencies
 */
export function generateFallbackCode(missingDeps: string[]): string {
  return `
// Missing dependencies: ${missingDeps.join(', ')}
console.warn('The following dependencies are not available:', ${JSON.stringify(missingDeps)});

// Create placeholder objects for missing dependencies
${missingDeps
  .map(
    (dep) => `
const ${dep.replace(/[^a-zA-Z0-9]/g, '_')} = {
  __placeholder__: true,
  __name__: '${dep}',
};
`
  )
  .join('\n')}
`.trim();
}

/**
 * Process component source code for sandbox execution
 * Replaces imports with global variables and handles dependencies
 */
export function processComponentSource(
  source: string,
  cdnConfigs?: CDNConfig[]
): {
  processedSource: string;
  dependencies: DependencyInfo[];
  missing: string[];
} {
  // Extract dependencies
  const dependencies = extractImports(source);

  // Get external (non-relative) dependencies
  const externalDeps = dependencies.filter((d) => !d.isRelative).map((d) => d.name);

  // Check which are available
  const { missing } = checkDependencies(externalDeps);

  // Replace imports with global variables
  let processedSource = replaceImportsWithGlobals(source, cdnConfigs);

  // Add fallback code for missing dependencies
  if (missing.length > 0) {
    processedSource = `${generateFallbackCode(missing)}\n\n${processedSource}`;
  }

  return {
    processedSource,
    dependencies,
    missing,
  };
}

/**
 * Bundle multiple component sources together
 * Useful for components that depend on each other
 */
export function bundleComponents(
  components: Array<{ name: string; source: string }>
): string {
  const processed = components.map((comp) => {
    const { processedSource } = processComponentSource(comp.source);
    return `
// Component: ${comp.name}
${processedSource}

// Export to global scope
window['${comp.name}'] = ${comp.name};
    `.trim();
  });

  return processed.join('\n\n');
}

/**
 * Resolve relative imports within a project
 * Returns a map of import paths to component names
 */
export function resolveRelativeImports(
  source: string,
  componentMap: Map<string, string>
): Map<string, string> {
  const imports = extractImports(source);
  const resolved = new Map<string, string>();

  for (const imp of imports) {
    if (imp.isRelative) {
      const componentName = componentMap.get(imp.name);
      if (componentName) {
        resolved.set(imp.name, componentName);
      }
    }
  }

  return resolved;
}

/**
 * Get list of required CDN scripts for a component
 */
export function getRequiredCDNScripts(source: string): CDNConfig[] {
  const imports = extractImports(source);
  const externalDeps = imports.filter((d) => !d.isRelative).map((d) => d.name);

  return externalDeps
    .map((dep) => resolveToCDN(dep))
    .filter((cdn): cdn is CDNConfig => cdn !== null);
}
