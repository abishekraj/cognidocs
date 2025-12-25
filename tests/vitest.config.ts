import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    exclude: ['**/*.spec.ts', '**/node_modules/**', 'packages/**'],
    testTimeout: 360000, // 6 minutes for build tests
    hookTimeout: 360000,
    globals: true,
  },
});
