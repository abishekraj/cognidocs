/**
 * Parser Type Definitions
 * Phase 1: Foundation
 */

export interface ParseResult {
  filePath: string;
  components: ComponentMetadata[];
  functions: FunctionMetadata[];
  classes: ClassMetadata[];
  interfaces: InterfaceMetadata[];
  types: TypeMetadata[];
  imports: ImportMetadata[];
  exports: ExportMetadata[];
}

export interface ComponentMetadata {
  name: string;
  type: 'function' | 'class';
  props?: PropMetadata[];
  hooks?: string[];
  description?: string;
  examples?: string[];
  filePath: string;
  line: number;
  framework: 'react' | 'vue' | 'svelte' | 'solid';
}

export interface PropMetadata {
  name: string;
  type: string;
  required: boolean;
  defaultValue?: string;
  description?: string;
}

export interface FunctionMetadata {
  name: string;
  parameters: ParameterMetadata[];
  returnType?: string;
  description?: string;
  examples?: string[];
  filePath: string;
  line: number;
  isAsync: boolean;
  isExported: boolean;
}

export interface ParameterMetadata {
  name: string;
  type?: string;
  optional: boolean;
  defaultValue?: string;
}

export interface ClassMetadata {
  name: string;
  extends?: string;
  implements?: string[];
  methods: MethodMetadata[];
  properties: PropertyMetadata[];
  description?: string;
  filePath: string;
  line: number;
}

export interface MethodMetadata {
  name: string;
  parameters: ParameterMetadata[];
  returnType?: string;
  isStatic: boolean;
  isPrivate: boolean;
  description?: string;
}

export interface PropertyMetadata {
  name: string;
  type?: string;
  isStatic: boolean;
  isPrivate: boolean;
  defaultValue?: string;
  description?: string;
}

export interface InterfaceMetadata {
  name: string;
  extends?: string[];
  properties: InterfacePropertyMetadata[];
  description?: string;
  filePath: string;
  line: number;
}

export interface InterfacePropertyMetadata {
  name: string;
  type: string;
  optional: boolean;
  description?: string;
}

export interface TypeMetadata {
  name: string;
  definition: string;
  description?: string;
  filePath: string;
  line: number;
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
