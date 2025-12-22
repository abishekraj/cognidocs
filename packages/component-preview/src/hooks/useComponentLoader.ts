/**
 * useComponentLoader - Hook for loading and processing component source code
 * Phase 6.4: Code Generation & Dependency Resolution
 */

import { useState, useEffect, useCallback } from 'react';
import type { PreviewMetadata, PreviewError } from '@cognidocs/types';
import {
  validateComponentSource,
  stripTypeScript,
  generateDefaultProps,
  extractComponentName,
} from '../utils/codeGenerator';
import {
  processComponentSource,
  checkDependencies,
  type DependencyInfo,
} from '../utils/dependencyResolver';

export interface ComponentLoaderState {
  /** Processed component source code ready for execution */
  processedSource: string | null;
  /** Component name extracted or provided */
  componentName: string | null;
  /** Default props generated from metadata */
  defaultProps: Record<string, unknown>;
  /** List of dependencies found in source */
  dependencies: DependencyInfo[];
  /** List of missing dependencies */
  missingDependencies: string[];
  /** Whether component is currently loading */
  loading: boolean;
  /** Error that occurred during loading */
  error: PreviewError | null;
  /** Whether component is ready for preview */
  ready: boolean;
}

export interface UseComponentLoaderOptions {
  /** Component metadata */
  metadata: PreviewMetadata;
  /** Custom component source (overrides metadata.filePath) */
  customSource?: string;
  /** Whether to strip TypeScript types */
  stripTypes?: boolean;
  /** Whether to auto-generate default props */
  autoGenerateProps?: boolean;
}

/**
 * Hook for loading and processing component source code
 * Handles dependency resolution, TypeScript stripping, and validation
 */
export function useComponentLoader(
  options: UseComponentLoaderOptions
): ComponentLoaderState & {
  reload: () => void;
  setSource: (source: string) => void;
} {
  const {
    metadata,
    customSource,
    stripTypes = true,
    autoGenerateProps = true,
  } = options;

  const [state, setState] = useState<ComponentLoaderState>({
    processedSource: null,
    componentName: null,
    defaultProps: {},
    dependencies: [],
    missingDependencies: [],
    loading: true,
    error: null,
    ready: false,
  });

  /**
   * Load and process component source
   */
  const loadComponent = useCallback(
    async (source: string) => {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      try {
        // Extract or use provided component name
        let componentName = metadata.componentName;
        if (!componentName) {
          const extracted = extractComponentName(source);
          if (!extracted) {
            throw new Error('Could not determine component name from source code');
          }
          componentName = extracted;
        }

        // Validate component source
        const validation = validateComponentSource(source, componentName);
        if (!validation.valid) {
          throw new Error(`Component validation failed:\n${validation.errors.join('\n')}`);
        }

        // Strip TypeScript if needed
        let processedSource = stripTypes ? stripTypeScript(source) : source;

        // Process dependencies
        const { processedSource: finalSource, dependencies, missing } = processComponentSource(
          processedSource
        );

        // Generate default props if needed
        const defaultProps = autoGenerateProps
          ? generateDefaultProps(metadata.props)
          : {};

        // Update state
        setState({
          processedSource: finalSource,
          componentName,
          defaultProps,
          dependencies,
          missingDependencies: missing,
          loading: false,
          error: null,
          ready: true,
        });
      } catch (err) {
        const error: PreviewError = {
          message: err instanceof Error ? err.message : String(err),
          stack: err instanceof Error ? err.stack : undefined,
        };

        setState({
          processedSource: null,
          componentName: null,
          defaultProps: {},
          dependencies: [],
          missingDependencies: [],
          loading: false,
          error,
          ready: false,
        });
      }
    },
    [metadata, stripTypes, autoGenerateProps]
  );

  /**
   * Load component from file path
   */
  const loadFromFile = useCallback(async (filePath: string) => {
    try {
      // In a real implementation, this would fetch the file
      // For now, we'll throw an error indicating this needs to be implemented
      throw new Error(
        `File loading not implemented. Please provide source code directly via customSource option. File: ${filePath}`
      );
    } catch (err) {
      const error: PreviewError = {
        message: err instanceof Error ? err.message : String(err),
      };

      setState({
        processedSource: null,
        componentName: null,
        defaultProps: {},
        dependencies: [],
        missingDependencies: [],
        loading: false,
        error,
        ready: false,
      });
    }
  }, []);

  /**
   * Reload component
   */
  const reload = useCallback(() => {
    if (customSource) {
      loadComponent(customSource);
    } else if (metadata.filePath) {
      loadFromFile(metadata.filePath);
    } else {
      setState((prev) => ({
        ...prev,
        error: {
          message: 'No source code or file path provided',
        },
        loading: false,
      }));
    }
  }, [customSource, metadata.filePath, loadComponent, loadFromFile]);

  /**
   * Set custom source code
   */
  const setSource = useCallback(
    (source: string) => {
      loadComponent(source);
    },
    [loadComponent]
  );

  /**
   * Initial load
   */
  useEffect(() => {
    reload();
  }, [reload]);

  return {
    ...state,
    reload,
    setSource,
  };
}

/**
 * Simple component loader that just processes source without file loading
 */
export function useSimpleComponentLoader(
  componentName: string,
  source: string,
  options: {
    stripTypes?: boolean;
    onError?: (error: PreviewError) => void;
  } = {}
): {
  processedSource: string | null;
  dependencies: string[];
  missing: string[];
  loading: boolean;
  error: PreviewError | null;
} {
  const { stripTypes = true, onError } = options;
  const [state, setState] = useState<{
    processedSource: string | null;
    dependencies: string[];
    missing: string[];
    loading: boolean;
    error: PreviewError | null;
  }>({
    processedSource: null,
    dependencies: [],
    missing: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    try {
      // Validate
      const validation = validateComponentSource(source, componentName);
      if (!validation.valid) {
        throw new Error(validation.errors.join('\n'));
      }

      // Strip TypeScript
      let processed = stripTypes ? stripTypeScript(source) : source;

      // Process dependencies
      const result = processComponentSource(processed);

      // Extract dependency names
      const deps = result.dependencies.filter((d) => !d.isRelative).map((d) => d.name);

      setState({
        processedSource: result.processedSource,
        dependencies: deps,
        missing: result.missing,
        loading: false,
        error: null,
      });
    } catch (err) {
      const error: PreviewError = {
        message: err instanceof Error ? err.message : String(err),
        stack: err instanceof Error ? err.stack : undefined,
      };

      setState({
        processedSource: null,
        dependencies: [],
        missing: [],
        loading: false,
        error,
      });

      if (onError) {
        onError(error);
      }
    }
  }, [source, componentName, stripTypes, onError]);

  return state;
}

/**
 * Check if dependencies are available
 */
export function useDependencyCheck(dependencies: string[]): {
  available: string[];
  missing: string[];
  allAvailable: boolean;
} {
  const [state, setState] = useState<{
    available: string[];
    missing: string[];
    allAvailable: boolean;
  }>({
    available: [],
    missing: [],
    allAvailable: false,
  });

  useEffect(() => {
    const result = checkDependencies(dependencies);
    setState({
      ...result,
      allAvailable: result.missing.length === 0,
    });
  }, [dependencies]);

  return state;
}
