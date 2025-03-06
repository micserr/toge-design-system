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
      { text: 'Guide', link: '/guide/basics/installation' },
      {
        text: 'Components',
        link: '/documentation/components/avatar',
      },
      {
        text: 'Playground',
        link: 'https://zealous-flower-090cd4100.4.azurestaticapps.net/',
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
          text: 'Contributing',
          items: [
            {
              text: 'Component Creation',
              link: '/guide/contributing/component-creation',
            },
            {
              text: 'Component Documentation',
              link: '/guide/contributing/component-documentation',
            },
            {
              text: 'Contribution',
              link: '/guide/contributing/contribution',
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
              text: 'Avatar',
              link: '/documentation/components/avatar',
            },
            {
              text: 'Badge',
              link: '/documentation/components/badge',
            },
            {
              text: 'Button',
              link: '/documentation/components/button',
            },
            {
              text: 'Card',
              link: '/documentation/components/card',
            },
            {
              text: 'Checkbox',
              link: '/documentation/components/checkbox',
            },
            {
              text: 'Chips',
              link: '/documentation/components/chips',
            },
            {
              text: 'Date Picker',
              link: '/documentation/components/date-picker',
            },
            {
              text: 'Dropdown',
              link: '/documentation/components/dropdown',
            },
            {
              text: 'Empty State',
              link: '/documentation/components/empty-state',
            },
            {
              text: 'Input',
              link: '/documentation/components/input',
            },
            {
              text: 'List',
              link: '/documentation/components/list',
            },
            {
              text: 'Lozenge',
              link: '/documentation/components/lozenge',
            },
            {
              text: 'Modal',
              link: '/documentation/components/modal',
            },
            {
              text: 'Radio',
              link: '/documentation/components/radio',
            },
            {
              text: 'Sidenav',
              link: '/documentation/components/sidenav',
            },
            {
              text: 'Sidepanel',
              link: '/documentation/components/sidepanel',
            },
            {
              text: 'Snackbar',
              link: '/documentation/components/snackbar',
            },
            {
              text: 'Status',
              link: '/documentation/components/status',
            },
            {
              text: 'Switch',
              link: '/documentation/components/switch',
            },
            {
              text: 'Table',
              link: '/documentation/components/table',
            },
            {
              text: 'Tabs',
              link: '/documentation/components/tabs',
            },
            {
              text: 'Textarea',
              link: '/documentation/components/textarea',
            },
            {
              text: 'Time Picker',
              link: '/documentation/components/time-picker',
            },
            {
              text: 'Tooltip',
              link: '/documentation/components/tooltip',
            },
          ],
        },
        {
          text: 'Utilities',
          items: [
            {
              text: 'Border Radius',
              link: '/documentation/utilities/border-radius',
            },
            {
              text: 'Colors',
              link: '/documentation/utilities/colors',
            },
            {
              text: 'Max Width',
              link: '/documentation/utilities/max-width',
            },
            {
              text: 'Spacing',
              link: '/documentation/utilities/spacing',
            },
            {
              text: 'Typography',
              link: '/documentation/utilities/typography',
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
      copyright: 'Copyright © 2025 Sprout Frontend Engineers',
    },
  },
});
