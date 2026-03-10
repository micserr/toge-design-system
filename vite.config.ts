import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';
import Components from 'unplugin-vue-components/vite';
import dts from 'vite-plugin-dts';
import gzipPlugin from 'rollup-plugin-gzip';

import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

import { resolve } from 'path';

// PostCSS plugin: unwrap @layer blocks from toge v4 CSS before tailwind v3 sees them.
// Tailwind v3 errors on @layer without a matching @tailwind directive. Toge's compiled
// dist CSS (v4) uses native CSS @layer — this strips the wrappers so v3 passes it through.
const unwrapTogeLayers = {
  postcssPlugin: 'unwrap-toge-layers',
  Once(root: any, { result }: any) {
    const file: string = result.opts?.from ?? '';
    if (file.includes('packages/toge')) {
      root.walkAtRules('layer', (rule: any) => {
        if (rule.nodes?.length) {
          rule.replaceWith(rule.nodes);
        } else {
          rule.remove();
        }
      });
    }
  },
};

export default defineConfig({
  css: {
    postcss: {
      plugins: [unwrapTogeLayers, tailwind(), autoprefixer()],
    },
  },
  plugins: [
    vue(),
    tsconfigPaths(),
    Components(),
    dts({
      include: [
        'lib/**/*.ts',
        'src/legacy/**/*.ts',
        'src/legacy/**/*.vue',
        'src/toge/**/*.ts',
        'src/toge/**/*.vue',
      ],
      outDir: 'dist',
      insertTypesEntry: true,
      copyDtsFiles: false,
      staticImport: true,
      rollupTypes: true,
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
      '@': resolve(__dirname, './src'),
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
