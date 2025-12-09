/**
 * Configuration Management
 * Phase 1: Foundation
 */

export interface CogniDocsConfig {
  entry: string;
  output: string;
  theme: string;
  darkMode: boolean;
  coverage?: {
    enabled: boolean;
    thresholds: {
      docs: number;
      types: number;
    };
  };
  ai?: {
    enabled: boolean;
    provider: 'openai' | 'anthropic' | 'local';
    model: string;
    features: string[];
  };
  frameworks: string[];
  exclude: string[];
  plugins?: string[];
}

export const defaultConfig: CogniDocsConfig = {
  entry: './src',
  output: './docs',
  theme: 'gitbook',
  darkMode: true,
  frameworks: ['react'],
  exclude: ['**/*.test.ts', '**/node_modules/**'],
};

export async function loadConfig(_configPath?: string): Promise<CogniDocsConfig> {
  // TODO: Phase 1 - Implement config loading with cosmiconfig
  return defaultConfig;
}

export async function createConfig(_config: Partial<CogniDocsConfig>): Promise<void> {
  // TODO: Phase 1 - Implement config file creation
  console.log('Creating config file...');
}
