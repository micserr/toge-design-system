import { defineConfig } from 'vitepress';

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
    nav: [
      { text: 'Guide', link: '/guide/basics/installation' },
      {
        text: 'Components',
        link: '/documentation/components/accordion',
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
              text: 'Component Testing',
              link: '/guide/contributing/component-testing',
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
              text: 'Accordion',
              link: '/documentation/components/accordion',
            },
            {
              text: 'Attribute Filter',
              link: '/documentation/components/attribute-filter',
            },
            {
              text: 'Audit Trail',
              link: '/documentation/components/audit-trail',
            },
            {
              text: 'Avatar',
              link: '/documentation/components/avatar',
            },
            {
              text: 'Badge',
              link: '/documentation/components/badge',
            },
            {
              text: 'Banner',
              link: '/documentation/components/banner',
            },
            {
              text: 'Button',
              link: '/documentation/components/button/button',
              items: [
                {
                  text: 'Button Dropdown',
                  link: '/documentation/components/button/button-dropdown',
                },
              ],
            },
            {
              text: 'Calendar',
              link: '/documentation/components/calendar',
              items: [
                {
                  text: 'Calendar Cell',
                  link: '/documentation/components/calendar-cell',
                },
              ],
            },

            {
              text: 'Card',
              link: '/documentation/components/card',
            },
            {
              text: 'Chips',
              link: '/documentation/components/chips',
            },
            {
              text: 'Collapsible',
              link: '/documentation/components/collapsible',
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
              text: 'Filter',
              link: '/documentation/components/filter',
            },
            {
              text: 'Floating Action',
              link: '/documentation/components/floating-action',
            },
            {
              text: 'Icon',
              link: '/documentation/components/icon',
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
              text: 'Progress Bar',
              link: '/documentation/components/progress-bar',
            },
            {
              text: 'Sidenav',
              link: '/documentation/components/sidenav',
            },
            {
              text: 'Sidepanel',
              link: '/documentation/components/sidepanel/sidepanel',
              items: [
                {
                  text: 'Stacking Sidepanel',
                  link: '/documentation/components/sidepanel/stacking-sidepanel',
                },
              ],
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
              text: 'Stepper',
              link: '/documentation/components/stepper',
            },
            {
              text: 'Popper',
              link: '/documentation/components/popper',
            },
            {
              text: 'Table',
              link: '/documentation/components/table/table',
              items: [
                {
                  text: 'Table Pagination',
                  link: '/documentation/components/table/table-pagination',
                },
              ],
            },
            {
              text: 'Tabs',
              link: '/documentation/components/tabs',
            },
            {
              text: 'Tooltip',
              link: '/documentation/components/tooltip',
            },
          ],
        },
        {
          text: 'Forms',
          items: [
            {
              text: 'Checkbox',
              link: '/documentation/components/checkbox',
            },
            {
              text: 'Date Picker',
              link: '/documentation/components/date-picker/date-picker',
              items: [
                {
                  text: 'Date Range Picker',
                  link: '/documentation/components/date-picker/date-range-picker',
                },
                {
                  text: 'Reusable Calendar',
                  link: '/documentation/components/date-picker/reusable-calendar',
                },
              ],
            },
            {
              text: 'File Upload',
              link: '/documentation/components/file-upload',
            },
            {
              text: 'Input',
              link: '/documentation/components/input/input',
              items: [
                { text: 'Search Input', link: '/documentation/components/input/input-search' },
                { text: 'Username Input', link: '/documentation/components/input/input-username' },
                { text: 'Email Input', link: '/documentation/components/input/input-email' },
                { text: 'Password Input', link: '/documentation/components/input/input-password' },
                { text: 'URL Input', link: '/documentation/components/input/input-url' },
                { text: 'Contact Number Input', link: '/documentation/components/input/input-contact-number' },
                { text: 'Dropdown Input', link: '/documentation/components/input/input-dropdown' },
                { text: 'Currency Input', link: '/documentation/components/input/input-currency' },
              ],
            },
            {
              text: 'Radio',
              link: '/documentation/components/radio',
            },
            {
              text: 'Select',
              link: '/documentation/components/select/select',
              items: [
                {
                  text: 'Multi Select',
                  link: '/documentation/components/select/select-multiple',
                },
                {
                  text: 'Ladderized Select',
                  link: '/documentation/components/select/select-ladderized',
                },
              ],
            },
            {
              text: 'Slider',
              link: '/documentation/components/slider',
            },
            {
              text: 'Switch',
              link: '/documentation/components/switch',
            },
            {
              text: 'Textarea',
              link: '/documentation/components/textarea',
            },
            {
              text: 'Time Picker',
              link: '/documentation/components/time-picker',
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
              text: 'Border Color',
              link: '/documentation/utilities/border-colors',
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
            {
              text: 'Skeletal Loader',
              link: '/documentation/utilities/skeletal-loader',
            },
          ],
        },
        {
          text: 'Resources',
          items: [
            {
              text: 'Product Logo',
              link: '/documentation/components/logo',
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
        link: 'https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next',
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
