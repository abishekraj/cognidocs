import { Plugin, AnalysisContext, TransformContext } from '@cognidocs/plugin-core';

import path from 'path';

export class PluginManager {
  private plugins: Plugin[] = [];

  constructor() {}

  /**
   * Loads plugins from the provided configuration.
   * Plugins can be package names or local paths.
   */
  async loadPlugins(pluginPaths: string[]): Promise<void> {
    for (const pluginPath of pluginPaths) {
      try {
        await this.loadPlugin(pluginPath);
      } catch (error) {
        console.error(`Failed to load plugin: ${pluginPath}`, error);
      }
    }
  }

  /**
   * Loads a single plugin.
   */
  async loadPlugin(pluginPath: string): Promise<void> {
    let pluginModule;

    // Check if it's a local path
    if (pluginPath.startsWith('.') || pluginPath.startsWith('/')) {
      const absolutePath = path.resolve(process.cwd(), pluginPath);
      pluginModule = await import(absolutePath);
    } else {
      // It's a package
      pluginModule = await import(pluginPath);
    }

    // Default export should be the factory or the plugin object
    const factory = pluginModule.default || pluginModule;

    let plugin: Plugin;
    if (typeof factory === 'function') {
      plugin = factory();
    } else {
      plugin = factory;
    }

    if (!plugin.name) {
      throw new Error(`Plugin loaded from ${pluginPath} must have a name.`);
    }

    this.plugins.push(plugin);
    console.log(`Loaded plugin: ${plugin.name}`);
  }

  /**
   * Executes the 'configure' hook for all plugins.
   */
  async executeConfigureHooks(config: any): Promise<any> {
    let currentConfig = config;
    for (const plugin of this.plugins) {
      if (plugin.configure) {
        const result = await plugin.configure(currentConfig);
        if (result) {
          currentConfig = result;
        }
      }
    }
    return currentConfig;
  }

  /**
   * Executes the 'analyze' hook for all plugins.
   */
  async executeAnalyzeHooks(context: AnalysisContext): Promise<void> {
    for (const plugin of this.plugins) {
      if (plugin.analyze) {
        await plugin.analyze(context);
      }
    }
  }

  /**
   * Executes the 'transform' hook for all plugins.
   */
  async executeTransformHooks(context: TransformContext): Promise<void> {
    for (const plugin of this.plugins) {
      if (plugin.transform) {
        await plugin.transform(context);
      }
    }
  }

  getPlugins(): Plugin[] {
    return this.plugins;
  }
}
