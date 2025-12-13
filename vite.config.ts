import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: './',
  publicDir: 'public',
  resolve: {
    alias: {},
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    commonjsOptions: {
      include: [/node_modules/, /kotlin/],
      transformMixedEsModules: true,
    },
  },
  server: {
    port: 3000,
    fs: {
      // Allow serving files from mpp-core build directory
      allow: ['..'],
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
  define: {
    // Provide global shims for CommonJS-style code
    'global': 'globalThis',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
});

