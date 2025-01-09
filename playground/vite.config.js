import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue'],
          monaco: ['@vue/repl/monaco-editor'],
          repl: ['@vue/repl'],
        },
      },
    },
    chunkSizeWarningLimit: 6000,
  },
  plugins: [vue()],
});
