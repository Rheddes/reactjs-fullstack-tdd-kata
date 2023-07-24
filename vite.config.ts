/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ jsxRuntime: 'classic' })],
  server: {
    host: true,
    port: 4001,
    hmr: {
      host: 'localhost',
      protocol: 'ws',
      clientPort: 4001,
    },
  },
  preview: {
    host: true,
    port: 4001,
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'reactjs-fullstack-tdd-kata',
    },
    rollupOptions: {
      cache: false,
      output: {
        exports: 'named',
      },
    },
    outDir: './dist',
    sourcemap: false,
  },
  test: {
    // @TODO fix coverage
    // coverage: {
    //   provider: 'istanbul',
    //   reporter: ['cobertura', 'html'],
    // },
    globals: true,
    environment: 'jsdom',
    outputFile: process.env.JUNIT_REPORT_PATH,
    reporters: ['default', 'junit'],
    setupFiles: './test/setup.ts',
    sequence: {
      shuffle: true,
    },
    testTimeout: 10000,
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    global: 'globalThis',
  },
});
