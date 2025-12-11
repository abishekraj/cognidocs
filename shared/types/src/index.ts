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

export interface JSDocMetadata {
  description?: string;
  examples?: JSDocExample[];
  see?: JSDocLink[];
  links?: JSDocLink[];
  params?: Record<string, string>;
  returns?: string;
  deprecated?: string;
  since?: string;
  author?: string[];
  tags?: JSDocTag[];
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
}

export interface TypeMetadata {
  name: string;
  description?: string;
  type: string;
  isExported: boolean;
  filePath: string;
  line?: number;
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
  framework: 'react' | 'vue' | 'svelte' | 'solid';
  description?: string;
  props?: PropertyMetadata[];
  hooks?: string[];
  filePath: string;
  isExported: boolean;
  line?: number;
  examples?: string[];
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
