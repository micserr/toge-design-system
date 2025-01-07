import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Inspect from 'vite-plugin-inspect';

export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [vue(), Inspect()],
  optimizeDeps: {
    include: ['vue', '@vue/shared'],
    exclude: ['@vue/repl'],
  },
  esbuild: {
    target: 'chrome64',
  },
});
