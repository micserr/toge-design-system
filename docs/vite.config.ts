import { fileURLToPath, URL } from 'url';
import tailwind from 'tailwindcss';
import Icons from 'unplugin-icons/vite';

export default {
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  plugins: [
    Icons({
      autoInstall: true,
      compiler: 'vue3',
    }),
  ],
  resolve: {
    alias: { '@': fileURLToPath(new URL('../src', import.meta.url)) },
  },
};
