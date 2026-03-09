import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';
import Components from 'unplugin-vue-components/vite';
import dts from 'vite-plugin-dts';
import gzipPlugin from 'rollup-plugin-gzip';

import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

import { resolve } from 'path';

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind({ config: resolve(__dirname, './tailwind.config.js') }), autoprefixer()],
    },
  },
  plugins: [
    vue(),
    tsconfigPaths(),
    Components(),
    dts({
      include: [
        'lib/**/*.ts',
        '../../src/legacy/**/*.ts',
        '../../src/legacy/**/*.vue',
      ],
      outDir: 'dist',
      insertTypesEntry: true,
      copyDtsFiles: false,
      staticImport: true,
      rollupTypes: false,
      exclude: ['src/**/*.spec.ts', 'tests/**/*', 'playwright/**/*'],
      compilerOptions: {
        composite: false,
        declaration: true,
        declarationMap: false,
      },
      beforeWriteFile: (filePath, content) => {
        // Skip type checking errors during declaration generation
        return { filePath, content };
      },
      logLevel: 'silent',
    }),
    gzipPlugin(), // Consider conditionally applying this for production
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '../../src/legacy'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'DesignSystemNext',
      fileName: (format) => `design-system-next.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue'], // Add other external libraries if needed
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
      },
    },
    cssCodeSplit: true, // Ensures CSS is split into its own file
  },
});
