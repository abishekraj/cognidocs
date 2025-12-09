/**
 * CogniDocs configuration for sample React app
 */

export default {
  entry: './src',
  output: './docs',
  theme: 'gitbook',
  darkMode: true,
  frameworks: ['react'],
  exclude: [
    '**/*.test.ts',
    '**/*.test.tsx',
    '**/node_modules/**',
  ],
  coverage: {
    enabled: true,
    thresholds: {
      docs: 80,
      types: 90,
    },
  },
};
