/**
 * Parser Type Definitions
 * Phase 1: Foundation
 * Re-exports from shared types package
 */

export type {
  ParseResult,
  ComponentMetadata,
  FunctionMetadata,
  ClassMetadata,
  InterfaceMetadata,
  TypeMetadata,
  ImportMetadata,
  ExportMetadata,
  ParameterMetadata,
  PropertyMetadata,
  MethodMetadata,
  JSDocMetadata,
  JSDocExample,
  JSDocLink,
  JSDocTag,
} from '@cognidocs/types';

// Alias for compatibility
export type { PropertyMetadata as InterfacePropertyMetadata } from '@cognidocs/types';
