/**
 * Shared Constants
 */

export const SUPPORTED_FRAMEWORKS = [
  'react',
  'nextjs',
  'vue',
  'svelte',
  'angular',
  'nest',
  'solid',
] as const;

export const SUPPORTED_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.vue', '.svelte'] as const;

export const DEFAULT_THEMES = [
  'gitbook',
  'readthedocs',
  'material',
  'stripe',
  'laravel',
  'vagrant',
  'postmark',
  'original',
] as const;

export const PHASES = {
  PHASE_1: 'Phase 1: Foundation',
  PHASE_2: 'Phase 2: Analysis & Coverage',
  PHASE_3: 'Phase 3: Core Documentation',
  PHASE_4: 'Phase 4: Graph Visualization',
  PHASE_5: 'Phase 5: Component Previews',
  PHASE_6: 'Phase 6: AI Integration',
  PHASE_7: 'Phase 7: SaaS Platform',
  PHASE_8: 'Phase 8: Enterprise Features',
  PHASE_9: 'Phase 9: Marketplace & Plugins',
  PHASE_10: 'Phase 10: Polish & Launch',
} as const;

export const CONFIG_FILE_NAMES = [
  'cognidocs.config.js',
  'cognidocs.config.ts',
  'cognidocs.config.json',
  '.cognidocsrc',
] as const;
