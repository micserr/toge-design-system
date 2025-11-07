// docs/.vitepress/config.ts
(globalThis as Record<string, unknown>).__VUE_PROD_DEVTOOLS__ = false;

import { defineConfig } from 'vitepress';

import { fileURLToPath, URL } from 'url';

import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

import { enConfig } from './locales/en';
import { thConfig } from './locales/th';

export default defineConfig({
  title: 'Sprout Design System',
  description: 'Toge - The Sprout Design System',
  srcDir: './locales',
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss(), autoprefixer()],
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url)),
      },
    },
  },
  themeConfig: {
    search: {
      provider: 'local',
    },
  },
  head: [
    ['link', { rel: 'icon', type: 'image/ico', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    [
      'meta',
      {
        property: 'og:title',
        content: 'Welcome to TOGE - The Sprout Design System',
      },
    ],
    ['meta', { property: 'og:site_name', content: 'Toge' }],
  ],
  locales: {
    root: enConfig,
    th: thConfig,
  },
});
