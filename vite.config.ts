import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';
import Components from 'unplugin-vue-components/vite';
import dts from 'vite-plugin-dts';
import gzipPlugin from 'rollup-plugin-gzip';
import Icons from 'unplugin-icons/vite';

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
    gzipPlugin(), // Consider conditionally applying this for production
    Icons({
      autoInstall: true,
      compiler: 'vue3',
    }),
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
