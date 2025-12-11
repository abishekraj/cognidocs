import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['lucide-react', '@radix-ui/react-collapsible', '@radix-ui/react-select', '@radix-ui/react-scroll-area', '@radix-ui/react-separator'],
          // Heavy dependencies in separate chunks
          'search-vendor': ['lunr'],
          'graph-vendor': ['d3', '@cognidocs/graph-viz'],
          'markdown-vendor': ['react-markdown', 'remark-gfm', 'rehype-raw'],
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 600,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Minify in production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true,
      },
    },
  },
  // Optimize deps
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
});
