/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 4001,
    hmr: {
      host: 'localhost',
      protocol: 'ws',
      clientPort: 4001,
    },
  },
  build: {
    outDir: './dist',
  },
  test: {
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
