import { fileURLToPath, URL } from 'url';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
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
