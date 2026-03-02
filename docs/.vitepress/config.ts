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
  base: '/toge-design-system/',
  srcDir: './locales',
  rewrites: {
    'en/documentation/components/button/button/index.md': 'en/documentation/components/button/button.md',
    'en/documentation/components/button/button-dropdown/index.md': 'en/documentation/components/button/button-dropdown.md',
    'th/documentation/components/button/button/index.md': 'th/documentation/components/button/button.md',
    'th/documentation/components/button/button-dropdown/index.md': 'th/documentation/components/button/button-dropdown.md',
    'en/guide/claude-skills/index.md': 'en/guide/claude-skills.md',
    'th/guide/claude-skills/index.md': 'th/guide/claude-skills.md',
  },
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss(), autoprefixer()],
      },
    },
    resolve: {
      alias: [
        { find: '@', replacement: fileURLToPath(new URL('../../src', import.meta.url)) },
        {
          find: /.*\/VPSidebarItem\.vue$/,
          replacement: fileURLToPath(new URL('./theme/components/VPSidebarItem.vue', import.meta.url)),
        },
        {
          find: /.*\/VPDocAsideOutline\.vue$/,
          replacement: fileURLToPath(new URL('./theme/components/VPDocAsideOutline.vue', import.meta.url)),
        },
      ],
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
    en: enConfig,
    th: thConfig,
  },
});
