import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Sprout Design System',
  description: 'Toge - The Sprout Design System',
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
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: 'Guide', link: '/guide/changelog' },
      {
        text: 'Components',
        link: '/documentation/components/button',
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Basics',
          items: [
            {
              text: 'Installation',
              link: '/guide/basics/installation',
            },
            {
              text: 'Quick Start',
              link: '/guide/basics/quick-start',
            },
          ],
        },
        {
          text: 'Advanced',
          items: [{ text: 'Changelog', link: '/guide/changelog' }],
        },
      ],
      '/documentation/': [
        {
          text: 'Components',
          items: [
            {
              text: 'Button',
              link: '/documentation/components/button',
            },
            {
              text: 'Sidenav',
              link: '/documentation/components/sidenav',
            },
            {
              text: 'Lozenge',
              link: '/documentation/components/lozenge',
            },
            {
              text: 'Switch',
              link: '/documentation/components/switch',
            },
            {
              text: 'Radio',
              link: '/documentation/components/radio',
            },
          ],
        },
        {
          text: 'Utilities',
          items: [
            {
              text: 'Colors',
              link: '/documentation/utilities/colors',
            },
            {
              text: 'Typography',
              link: '/documentation/utilities/typography',
            },
            {
              text: 'Spacing',
              link: '/documentation/utilities/spacing',
            },
            {
              text: 'Max Width',
              link: '/documentation/utilities/maxWidth',
            },
            {
              text: 'Border Radius',
              link: '/documentation/utilities/borderRadius',
            },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: {
          svg: '<svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="url(#azure-devops-color-16__paint0_linear_707_116)" d="M15 3.622v8.512L11.5 15l-5.425-1.975v1.958L3.004 10.97l8.951.7V4.005L15 3.622zm-2.984.428L6.994 1v2.001L2.382 4.356 1 6.13v4.029l1.978.873V5.869l9.038-1.818z"/><defs><linearGradient id="azure-devops-color-16__paint0_linear_707_116" x1="8" x2="8" y1="14.956" y2="1.026" gradientUnits="userSpaceOnUse"><stop stop-color="#0078D4"/><stop offset=".16" stop-color="#1380DA"/><stop offset=".53" stop-color="#3C91E5"/><stop offset=".82" stop-color="#559CEC"/><stop offset="1" stop-color="#5EA0EF"/></linearGradient></defs></svg>',
        },
        link: 'https://dev.azure.com/sproutphil/Sprout%20HR/_git/hr-spa?path=/HR.SPA/ClientApp',
        ariaLabel: 'Link To Azure DevOps',
      },
    ],

    search: {
      provider: 'local',
    },

    footer: {
      copyright: 'Copyright © 2024 Sprout Frontend Engineers',
    },
  },
});
