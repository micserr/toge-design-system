import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

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
    dts({
      include: [
        'lib/toge.ts',
        'src/toge/**/*.ts',
        'src/toge/**/*.vue',
      ],
      outDir: 'dist',
      insertTypesEntry: true,
      copyDtsFiles: false,
      staticImport: true,
      rollupTypes: false,
      exclude: ['src/**/*.spec.ts', 'tests/**/*'],
      compilerOptions: {
        composite: false,
        declaration: true,
        declarationMap: false,
      },
      beforeWriteFile: (filePath, content) => {
        return { filePath, content };
      },
      logLevel: 'silent',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/toge.ts'),
      name: 'Toge',
      fileName: (format) => `toge.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' },
        exports: 'named',
      },
    },
    emptyOutDir: true,
  },
});
