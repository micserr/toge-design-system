import { fileURLToPath, URL } from 'url';
import tailwind from 'tailwindcss';

export default {
  css: {
    postcss: {
      plugins: [tailwind()],
    },
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  plugins: [],
  resolve: {
    alias: { '@': fileURLToPath(new URL('../src', import.meta.url)) },
  },
  server: {
    port: 8888,
  },
};
