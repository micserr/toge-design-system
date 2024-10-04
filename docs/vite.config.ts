import { fileURLToPath, URL } from 'url';
import tailwind from "tailwindcss";

export default {
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  resolve: {
    alias: { '@': fileURLToPath(new URL('../src', import.meta.url)) }
  }
}
