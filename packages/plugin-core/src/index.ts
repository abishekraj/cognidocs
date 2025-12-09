/**
 * Core interface for a CogniDocs plugin.
 */
export interface Plugin {
  /** Unique name of the plugin (e.g. 'cognidocs-plugin-jsdoc') */
  name: string;

  /**
   * Hook called during configuration loading.
   * Allows plugins to modify or validate the configuration.
   */
  configure?: (config: any) => Promise<any> | any;

  /**
   * Hook called after analysis is complete.
   * Allows plugins to inspect or modify the dependency graph.
   */
  analyze?: (context: AnalysisContext) => Promise<void> | void;

  /**
   * Hook called before documentation generation.
   * Allows plugins to transform the documentation data.
   */
  transform?: (context: TransformContext) => Promise<void> | void;
}

export interface AnalysisContext {
  graph: any; // DependencyGraph
  files: string[];
}

export interface TransformContext {
  docs: any[]; // Generated documentation nodes
  manifest: any;
}

/**
 * Type definition for a plugin factory function.
 * Plugins should export a function matching this signature as default.
 */
export type PluginFactory = (options?: any) => Plugin;
