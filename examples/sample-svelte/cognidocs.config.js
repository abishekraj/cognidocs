export default {
  entry: './src',
  output: './docs',
  theme: 'gitbook',
  darkMode: true,
  frameworks: ['svelte'],
  exclude: [
    '**/*.test.ts',
    '**/*.test.js',
    '**/node_modules/**',
    '**/dist/**',
  ],
};
