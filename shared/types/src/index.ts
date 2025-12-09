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

// Re-export parser types
export type {
  ParseResult,
  ComponentMetadata,
  FunctionMetadata,
  ClassMetadata,
  InterfaceMetadata,
  TypeMetadata,
} from '@cognidocs/parser';

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
