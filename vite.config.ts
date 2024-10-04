import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';
import Components from 'unplugin-vue-components/vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import gzipPlugin from 'rollup-plugin-gzip';

import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

import { resolve } from 'path';

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [
    vue(),
    tsconfigPaths(),
    Components(),
    dts(),
    libInjectCss(), // Moved to ensure CSS is processed after Tailwind
    gzipPlugin(), // Consider conditionally applying this for production
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'Design System Next',
      fileName: 'design-system-next',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue'], // Add other external libraries if needed
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    cssCodeSplit: true, // Ensures CSS is split into its own file
  },
});
