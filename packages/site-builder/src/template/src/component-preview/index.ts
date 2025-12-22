/**
 * @cognidocs/component-preview
 *
 * Live component preview and playground system
 * Phase 6: Component Previews
 */

// Main Components (Phase 6.1)
export { PreviewRenderer } from './PreviewRenderer';
export type { PreviewRendererProps } from './PreviewRenderer';

export { ErrorBoundary } from './ErrorBoundary';

// Props Editor System (Phase 6.2)
export { PropsEditor } from './PropsEditor';
export type { PropsEditorProps } from './PropsEditor';

// Individual Editors
export { StringEditor } from './editors/StringEditor';
export { NumberEditor } from './editors/NumberEditor';
export { BooleanEditor } from './editors/BooleanEditor';
export { EnumEditor } from './editors/EnumEditor';
export { ObjectEditor } from './editors/ObjectEditor';
export { ArrayEditor } from './editors/ArrayEditor';

// Hooks
export { usePreviewState } from './hooks/usePreviewState';
export type { PreviewStateHook, PropValue } from './hooks/usePreviewState';

// Utilities
export {
  parseTypeString,
  extractEnumValues,
  propertyToPropEditorConfig,
  parseDefaultValue,
  getDefaultForType,
  validatePropValue,
} from './utils/propTypeParser';

// Sandbox Environment (Phase 6.3)
export { PreviewSandbox } from './sandbox/PreviewSandbox';
export type { PreviewSandboxProps } from './sandbox/PreviewSandbox';

export {
  generateRuntimeCode,
  parsePreviewError,
  isSandboxMessage,
  createExecutionTimeout,
} from './sandbox/sandboxRuntime';

export {
  generateSandboxHTML,
  validateMessageOrigin,
  sanitizeErrorMessage,
  CSP_POLICY,
  SANDBOX_ATTRIBUTES,
  EXECUTION_TIMEOUT,
} from './sandbox/securityPolicies';

// Code Generation & Dependency Resolution (Phase 6.4)
export {
  propValueToCode,
  generatePropsObject,
  generateComponentCode,
  generateExecutableCode,
  validateComponentSource,
  extractComponentName,
  stripTypeScript,
  generateMockPropValue,
  generateDefaultProps,
} from './utils/codeGenerator';

export {
  extractImports,
  resolveToCDN,
  generateCDNScriptTags,
  replaceImportsWithGlobals,
  checkDependencies,
  generateFallbackCode,
  processComponentSource,
  bundleComponents,
  resolveRelativeImports,
  getRequiredCDNScripts,
  DEFAULT_CDN_CONFIGS,
} from './utils/dependencyResolver';

export type { DependencyInfo, CDNConfig } from './utils/dependencyResolver';

export {
  useComponentLoader,
  useSimpleComponentLoader,
  useDependencyCheck,
} from './hooks/useComponentLoader';

export type { ComponentLoaderState, UseComponentLoaderOptions } from './hooks/useComponentLoader';

// Re-export types from @cognidocs/types for convenience
export type {
  PreviewMetadata,
  PreviewState,
  PreviewError,
  PropEditorType,
  PropEditorConfig,
  SandboxMessage,
} from '@cognidocs/types';
