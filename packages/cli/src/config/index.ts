/**
 * Configuration Management
 * Phase 1: Foundation
 */

export interface CogniDocsConfig {
  entry: string;
  output: string;
  theme: string;
  darkMode: boolean;
  filePattern?: string; // Glob pattern for files to parse (default: '**/*.{ts,tsx,js,jsx}')
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
  filePattern: '**/*.{ts,tsx,js,jsx}', // Parse TypeScript and JavaScript files
  frameworks: ['react'],
  exclude: ['**/*.test.ts', '**/*.test.js', '**/node_modules/**'],
};

import { cosmiconfig } from 'cosmiconfig';
import { resolve } from 'path';

export async function loadConfig(configPath?: string): Promise<CogniDocsConfig> {
  const explorer = cosmiconfig('cognidocs');

  try {
    const result = configPath
      ? await explorer.load(resolve(process.cwd(), configPath))
      : await explorer.search();

    if (result) {
      // Merge with defaults
      return {
        ...defaultConfig,
        ...result.config,
      };
    }
  } catch (error) {
    console.warn('Warning: Failed to load config file, using defaults.', error);
  }

  return defaultConfig;
}
