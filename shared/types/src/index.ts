/**
 * Shared TypeScript Types
 * Used across all CogniDocs packages
 */

// Phase tracking
export type Phase =
  | 'phase1-foundation'
  | 'phase2-analysis'
  | 'phase3-documentation'
  | 'phase4-visualization'
  | 'phase5-preview'
  | 'phase6-ai'
  | 'phase7-saas'
  | 'phase8-enterprise'
  | 'phase9-marketplace'
  | 'phase10-polish';

// JSDoc metadata types
export interface JSDocTag {
  tagName: string;
  text?: string;
}

export interface JSDocExample {
  code: string;
  description?: string;
}

export interface JSDocLink {
  text: string;
  url?: string;
  target?: string;
}

export interface JSDocResponse {
  status: string;
  description: string;
  type?: string;
}

export interface JSDocMetadata {
  description?: string;
  examples?: JSDocExample[];
  see?: JSDocLink[];
  links?: JSDocLink[];
  tutorials?: JSDocLink[];
  params?: Record<string, string>;
  returns?: string;
  deprecated?: string;
  since?: string;
  author?: string[];
  tags?: JSDocTag[];
  responses?: JSDocResponse[];
}

// Parser types (used by @cognidocs/parser package)
export interface ParameterMetadata {
  name: string;
  type?: string;
  optional: boolean;
  defaultValue?: string;
  description?: string;
}

export interface PropertyMetadata {
  name: string;
  type?: string;
  optional?: boolean;
  isPrivate?: boolean;
  isProtected?: boolean;
  isStatic?: boolean;
  defaultValue?: string;
  description?: string;
  required?: boolean;
}

export interface MethodMetadata {
  name: string;
  parameters: ParameterMetadata[];
  returnType?: string;
  description?: string;
  isAsync?: boolean;
  isPrivate?: boolean;
  isProtected?: boolean;
  isStatic?: boolean;
}

export interface FunctionMetadata {
  name: string;
  description?: string;
  parameters: ParameterMetadata[];
  returnType?: string;
  isExported: boolean;
  isAsync: boolean;
  filePath: string;
  line?: number;
  examples?: string[];
  jsdoc?: JSDocMetadata;
}

export interface ClassMetadata {
  name: string;
  description?: string;
  properties: PropertyMetadata[];
  methods: MethodMetadata[];
  isExported: boolean;
  extendsClass?: string;
  implementsInterfaces?: string[];
  filePath: string;
  line?: number;
  jsdoc?: JSDocMetadata;
}

export interface InterfaceMetadata {
  name: string;
  description?: string;
  properties: PropertyMetadata[];
  isExported: boolean;
  extendsInterfaces?: string[];
  filePath: string;
  line?: number;
  jsdoc?: JSDocMetadata;
}

export interface TypeMetadata {
  name: string;
  description?: string;
  type: string;
  isExported: boolean;
  filePath: string;
  line?: number;
  jsdoc?: JSDocMetadata;
}

export interface ImportMetadata {
  source: string;
  specifiers: string[];
  isDefault: boolean;
  isNamespace: boolean;
}

export interface ExportMetadata {
  name: string;
  type: 'function' | 'class' | 'const' | 'type' | 'interface';
  isDefault: boolean;
}

export interface ComponentMetadata {
  name: string;
  type: 'function' | 'class';
  framework: 'react' | 'nextjs' | 'vue' | 'svelte' | 'solid';
  description?: string;
  props?: PropertyMetadata[];
  hooks?: string[];
  filePath: string;
  isExported: boolean;
  line?: number;
  examples?: string[];
  jsdoc?: JSDocMetadata;
  // Next.js-specific
  isPage?: boolean;
  isLayout?: boolean;
  isApiRoute?: boolean;
  routePath?: string;
  routerType?: 'app' | 'page';
  // Vue-specific
  emits?: VueEmitMetadata[];
  slots?: VueSlotMetadata[];
  compositionApi?: boolean;
  scriptSetup?: boolean;
}

// Vue-specific types
export interface VueEmitMetadata {
  name: string;
  description?: string;
  payload?: string;
}

export interface VueSlotMetadata {
  name: string;
  description?: string;
  props?: string;
}

export interface VueComposableMetadata {
  name: string;
  description?: string;
  parameters: ParameterMetadata[];
  returnType?: string;
  isExported: boolean;
  filePath: string;
  line?: number;
  jsdoc?: JSDocMetadata;
}

export interface ParseResult {
  filePath: string;
  components?: ComponentMetadata[];
  functions: FunctionMetadata[];
  classes: ClassMetadata[];
  interfaces: InterfaceMetadata[];
  types: TypeMetadata[];
  imports: ImportMetadata[];
  exports: string[];
}

// Common types
export interface FileInfo {
  path: string;
  relativePath: string;
  extension: string;
  size: number;
}

export interface ProjectInfo {
  name: string;
  version: string;
  framework: Framework;
  entryPoint: string;
  rootDir: string;
}

export type Framework = 'react' | 'nextjs' | 'vue' | 'svelte' | 'angular' | 'nest' | 'solid';

export interface DocumentationMetadata {
  title: string;
  description: string;
  version: string;
  generatedAt: string;
  phase: Phase;
}

// Svelte-specific types (Phase 4)
export interface SveltePropsMetadata {
  name: string;
  type?: string;
  defaultValue?: string;
  description?: string;
  required: boolean;
}

export interface SvelteEventMetadata {
  name: string;
  detail?: string;
  description?: string;
}

export interface SvelteStoreMetadata {
  name: string;
  type: 'writable' | 'readable' | 'derived' | 'custom';
  valueType?: string;
  description?: string;
  filePath: string;
  isExported: boolean;
  line?: number;
}

export interface SvelteReactiveStatement {
  expression: string;
  dependencies: string[];
  line?: number;
}

export interface SvelteComponentMetadata extends Omit<ComponentMetadata, 'slots'> {
  framework: 'svelte';
  props?: SveltePropsMetadata[];
  events?: SvelteEventMetadata[];
  reactiveStatements?: SvelteReactiveStatement[];
  svelteSlots?: string[];
  stores?: string[];
}
