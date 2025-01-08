import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [vue()],
  optimizeDeps: {
    include: ['vue', '@vue/shared'],
    exclude: ['@vue/repl'],
  },
  esbuild: {
    target: 'chrome64',
  },
});
