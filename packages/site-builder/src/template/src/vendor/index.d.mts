import React$1, { Component, ReactNode, ErrorInfo } from 'react';
import { PreviewMetadata, PreviewError, PropertyMetadata, PropEditorConfig, PropEditorType, SandboxMessage } from '@cognidocs/types';
export { PreviewError, PreviewMetadata, PreviewState, PropEditorConfig, PropEditorType, SandboxMessage } from '@cognidocs/types';

interface PreviewRendererProps {
    metadata: PreviewMetadata;
    initialProps?: Record<string, unknown>;
    onPropsChange?: (props: Record<string, unknown>) => void;
    onError?: (error: PreviewError) => void;
    width?: string | number;
    height?: string | number;
}
declare const PreviewRenderer: React$1.FC<PreviewRendererProps>;

interface ErrorBoundaryProps {
    children: ReactNode;
    onError?: (error: PreviewError) => void;
    fallback?: (error: PreviewError) => ReactNode;
}
interface ErrorBoundaryState {
    hasError: boolean;
    error: PreviewError | null;
}
declare class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): ErrorBoundaryState;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): ReactNode;
}

interface PropsEditorProps {
    props: PropertyMetadata[];
    initialValues?: Record<string, unknown>;
    onChange?: (props: Record<string, unknown>) => void;
    onReset?: () => void;
}
declare const PropsEditor: React.FC<PropsEditorProps>;

interface StringEditorProps {
    config: PropEditorConfig;
    value: string;
    onChange: (value: string) => void;
    error?: string;
}
declare const StringEditor: React.FC<StringEditorProps>;

interface NumberEditorProps {
    config: PropEditorConfig;
    value: number | string;
    onChange: (value: number) => void;
    error?: string;
}
declare const NumberEditor: React.FC<NumberEditorProps>;

interface BooleanEditorProps {
    config: PropEditorConfig;
    value: boolean;
    onChange: (value: boolean) => void;
}
declare const BooleanEditor: React.FC<BooleanEditorProps>;

interface EnumEditorProps {
    config: PropEditorConfig;
    value: string;
    onChange: (value: string) => void;
    error?: string;
}
declare const EnumEditor: React.FC<EnumEditorProps>;

interface ObjectEditorProps {
    config: PropEditorConfig;
    value: object | string;
    onChange: (value: object) => void;
    error?: string;
}
declare const ObjectEditor: React.FC<ObjectEditorProps>;

interface ArrayEditorProps {
    config: PropEditorConfig;
    value: unknown[] | string;
    onChange: (value: unknown[]) => void;
    error?: string;
}
declare const ArrayEditor: React.FC<ArrayEditorProps>;

interface PropValue {
    value: unknown;
    error?: string;
}
interface PreviewStateHook {
    propValues: Record<string, PropValue>;
    updateProp: (name: string, value: unknown) => void;
    updateProps: (props: Record<string, unknown>) => void;
    resetProps: () => void;
    getValues: () => Record<string, unknown>;
    hasErrors: () => boolean;
}
declare function usePreviewState(props: PropertyMetadata[], initialValues?: Record<string, unknown>): PreviewStateHook;

declare function parseTypeString(typeString: string | undefined): PropEditorType;
declare function extractEnumValues(typeString: string): string[];
declare function propertyToPropEditorConfig(prop: PropertyMetadata): PropEditorConfig;
declare function parseDefaultValue(defaultValue: string | undefined, editorType: PropEditorType): unknown;
declare function getDefaultForType(editorType: PropEditorType): unknown;
declare function validatePropValue(value: unknown, config: PropEditorConfig): {
    valid: boolean;
    error?: string;
};

interface PreviewSandboxProps {
    componentCode: string;
    componentName: string;
    props: Record<string, unknown>;
    onReady?: () => void;
    onRender?: () => void;
    onError?: (error: PreviewError) => void;
    height?: string;
    allowedOrigins?: string[];
}
declare const PreviewSandbox: React.FC<PreviewSandboxProps>;

declare function generateRuntimeCode(componentCode: string, componentName: string, props: Record<string, unknown>): string;
declare function parsePreviewError(payload: unknown): PreviewError;
declare function isSandboxMessage(data: unknown): data is SandboxMessage;
declare function createExecutionTimeout(timeoutMs: number): Promise<never>;

declare const CSP_POLICY: string;
declare const SANDBOX_ATTRIBUTES: string;
declare const EXECUTION_TIMEOUT = 5000;
declare function generateSandboxHTML(code: string): string;
declare function validateMessageOrigin(origin: string, allowedOrigins: string[]): boolean;
declare function sanitizeErrorMessage(message: string): string;

declare function propValueToCode(value: unknown): string;
declare function generatePropsObject(props: Record<string, unknown>): string;
declare function generateComponentCode(componentName: string, componentSource: string): string;
declare function generateExecutableCode(componentName: string, componentSource: string, dependencies?: string[]): string;
declare function validateComponentSource(source: string, componentName: string): {
    valid: boolean;
    errors: string[];
};
declare function extractComponentName(source: string): string | null;
declare function stripTypeScript(source: string): string;
declare function generateMockPropValue(prop: PropertyMetadata): unknown;
declare function generateDefaultProps(props: PropertyMetadata[]): Record<string, unknown>;

interface DependencyInfo {
    name: string;
    specifiers: string[];
    defaultImport?: string;
    namespaceImport?: string;
    isRelative: boolean;
    raw: string;
}
interface CDNConfig {
    package: string;
    url: string;
    global: string;
}
declare const DEFAULT_CDN_CONFIGS: CDNConfig[];
declare function extractImports(source: string): DependencyInfo[];
declare function resolveToCDN(packageName: string, cdnConfigs?: CDNConfig[]): CDNConfig | null;
declare function generateCDNScriptTags(dependencies: string[]): string;
declare function replaceImportsWithGlobals(source: string, cdnConfigs?: CDNConfig[]): string;
declare function checkDependencies(dependencies: string[]): {
    available: string[];
    missing: string[];
};
declare function generateFallbackCode(missingDeps: string[]): string;
declare function processComponentSource(source: string, cdnConfigs?: CDNConfig[]): {
    processedSource: string;
    dependencies: DependencyInfo[];
    missing: string[];
};
declare function bundleComponents(components: Array<{
    name: string;
    source: string;
}>): string;
declare function resolveRelativeImports(source: string, componentMap: Map<string, string>): Map<string, string>;
declare function getRequiredCDNScripts(source: string): CDNConfig[];

interface ComponentLoaderState {
    processedSource: string | null;
    componentName: string | null;
    defaultProps: Record<string, unknown>;
    dependencies: DependencyInfo[];
    missingDependencies: string[];
    loading: boolean;
    error: PreviewError | null;
    ready: boolean;
}
interface UseComponentLoaderOptions {
    metadata: PreviewMetadata;
    customSource?: string;
    stripTypes?: boolean;
    autoGenerateProps?: boolean;
}
declare function useComponentLoader(options: UseComponentLoaderOptions): ComponentLoaderState & {
    reload: () => void;
    setSource: (source: string) => void;
};
declare function useSimpleComponentLoader(componentName: string, source: string, options?: {
    stripTypes?: boolean;
    onError?: (error: PreviewError) => void;
}): {
    processedSource: string | null;
    dependencies: string[];
    missing: string[];
    loading: boolean;
    error: PreviewError | null;
};
declare function useDependencyCheck(dependencies: string[]): {
    available: string[];
    missing: string[];
    allAvailable: boolean;
};

export { ArrayEditor, BooleanEditor, type CDNConfig, CSP_POLICY, type ComponentLoaderState, DEFAULT_CDN_CONFIGS, type DependencyInfo, EXECUTION_TIMEOUT, EnumEditor, ErrorBoundary, NumberEditor, ObjectEditor, PreviewRenderer, type PreviewRendererProps, PreviewSandbox, type PreviewSandboxProps, type PreviewStateHook, type PropValue, PropsEditor, type PropsEditorProps, SANDBOX_ATTRIBUTES, StringEditor, type UseComponentLoaderOptions, bundleComponents, checkDependencies, createExecutionTimeout, extractComponentName, extractEnumValues, extractImports, generateCDNScriptTags, generateComponentCode, generateDefaultProps, generateExecutableCode, generateFallbackCode, generateMockPropValue, generatePropsObject, generateRuntimeCode, generateSandboxHTML, getDefaultForType, getRequiredCDNScripts, isSandboxMessage, parseDefaultValue, parsePreviewError, parseTypeString, processComponentSource, propValueToCode, propertyToPropEditorConfig, replaceImportsWithGlobals, resolveRelativeImports, resolveToCDN, sanitizeErrorMessage, stripTypeScript, useComponentLoader, useDependencyCheck, usePreviewState, useSimpleComponentLoader, validateComponentSource, validateMessageOrigin, validatePropValue };
