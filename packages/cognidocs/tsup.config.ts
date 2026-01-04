import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    cli: 'src/cli.ts',
    postinstall: 'src/postinstall.ts',
  },
  format: ['esm'],
  dts: false, // Don't generate .d.ts since we're just re-exporting
  clean: true,
  sourcemap: true,
  target: 'es2022',
  shims: true,
  external: ['@cognidocs/cli'],
});
