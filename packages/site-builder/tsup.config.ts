import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  external: ['vite', 'fs-extra', 'path'],
  onSuccess: async () => {
    const fs = await import('fs-extra');
    const path = await import('path');
    const templateSrc = path.resolve(__dirname, 'src/template');
    const templateDist = path.resolve(__dirname, 'dist/template');
    console.log(`Copying template from ${templateSrc} to ${templateDist}`);
    await fs.copy(templateSrc, templateDist, {
      filter: (src: string) => {
        // Exclude only node_modules, .cognidocs, and cache directories
        const relativePath = src.replace(templateSrc, '');
        return !relativePath.includes('node_modules') &&
               !relativePath.includes('.cognidocs') &&
               !relativePath.includes('/.turbo') &&
               !relativePath.includes('/.cache');
      }
    });
  },
});
