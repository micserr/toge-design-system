// docs/.vitepress/locales/en.ts
export const enConfig = {
  label: 'English',
  lang: 'en-US',
  title: 'Sprout Design System',
  description: 'Toge - The Sprout Design System',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/en/guide/basics/installation' },
      {
        text: 'Components',
        link: '/en/documentation/components/accordion',
      },
      {
        text: 'Patterns',
        link: '/en/patterns/design-tokens',
      },
      {
        text: 'Playground',
        link: 'https://zealous-flower-090cd4100.4.azurestaticapps.net/',
      },
    ],

    sidebar: {
      '/en/guide/': [
        {
          text: 'Basics',
          items: [
            {
              text: 'Installation',
              link: '/en/guide/basics/installation',
            },
            {
              text: 'Quick Start',
              link: '/en/guide/basics/quick-start',
            },
          ],
        },
        {
          text: 'Contributing',
          items: [
            {
              text: 'Component Creation',
              link: '/en/guide/contributing/component-creation',
            },
            {
              text: 'Component Documentation',
              link: '/en/guide/contributing/component-documentation',
            },
            {
              text: 'Component Testing',
              link: '/en/guide/contributing/component-testing',
            },
            {
              text: 'Contribution',
              link: '/en/guide/contributing/contribution',
            },
          ],
        },
        {
          text: 'Claude Skills',
          link: '/en/guide/claude-skills',
          items: [
            { text: 'Sprout Design System', link: '/en/guide/claude-skills/sprout-design-system' },
            { text: 'Docu Skills', link: '/en/guide/claude-skills/design-system-docu-skills' },
            { text: 'UI Patterns', link: '/en/guide/claude-skills/sprout-ui-patterns' },
          ],
        },
        {
          text: 'Changelog',
          link: '/en/guide/changelog',
        },
      ],
      '/en/documentation/': [
        {
          text: 'Components',
          collapsed: false,
          items: [
            {
              text: 'Accordion',
              link: '/en/documentation/components/accordion',
              items: [
                { text: 'Accordion', link: '/en/documentation/components/accordion' },
              ],
            },
            {
              text: 'Attribute Filter',
              link: '/en/documentation/components/attribute-filter',
            },
            {
              text: 'Audit Trail',
              link: '/en/documentation/components/audit-trail',
            },
            {
              text: 'Avatar',
              link: '/en/documentation/components/avatar',
            },
            {
              text: 'Badge',
              link: '/en/documentation/components/badge',
            },
            {
              text: 'Banner',
              link: '/en/documentation/components/banner',
            },
            {
              text: 'Button',
              link: '/en/documentation/components/button/button',
              items: [
                { text: 'Button', link: '/en/documentation/components/button/button' },
                { text: 'Button Dropdown', link: '/en/documentation/components/button/button-dropdown' },
              ],
            },
            {
              text: 'Calendar',
              link: '/en/documentation/components/calendar',
              items: [
                {
                  text: 'Calendar Cell',
                  link: '/en/documentation/components/calendar-cell',
                },
              ],
            },

            {
              text: 'Card',
              link: '/en/documentation/components/card',
            },
            {
              text: 'Chips',
              link: '/en/documentation/components/chips',
            },
            {
              text: 'Collapsible',
              link: '/en/documentation/components/collapsible',
            },
            {
              text: 'Dropdown',
              link: '/en/documentation/components/dropdown',
            },
            {
              text: 'Empty State',
              link: '/en/documentation/components/empty-state',
            },
            {
              text: 'Filter',
              link: '/en/documentation/components/filter',
            },
            {
              text: 'Floating Action',
              link: '/en/documentation/components/floating-action',
            },
            {
              text: 'Icon',
              link: '/en/documentation/components/icon',
            },
            {
              text: 'List',
              link: '/en/documentation/components/list',
            },
            {
              text: 'Lozenge',
              link: '/en/documentation/components/lozenge',
            },
            {
              text: 'Modal',
              link: '/en/documentation/components/modal',
            },
            {
              text: 'Progress Bar',
              link: '/en/documentation/components/progress-bar',
            },
            {
              text: 'Popper',
              link: '/en/documentation/components/popper',
            },
            {
              text: 'Table',
              link: '/en/documentation/components/table/table',
              items: [
                {
                  text: 'Table Pagination',
                  link: '/en/documentation/components/table/table-pagination',
                },
              ],
            },
            {
              text: 'Sidenav',
              link: '/en/documentation/components/sidenav',
            },
            {
              text: 'Sidepanel',
              link: '/en/documentation/components/sidepanel/sidepanel',
              items: [
                {
                  text: 'Stacking Sidepanel',
                  link: '/en/documentation/components/sidepanel/stacking-sidepanel',
                },
              ],
            },
            {
              text: 'Snackbar',
              link: '/en/documentation/components/snackbar',
            },
            {
              text: 'Status',
              link: '/en/documentation/components/status',
            },
            {
              text: 'Stepper',
              link: '/en/documentation/components/stepper',
            },
            {
              text: 'Tabs',
              link: '/en/documentation/components/tabs',
            },
            {
              text: 'Tooltip',
              link: '/en/documentation/components/tooltip',
            },
          ],
        },
        {
          text: 'Forms',
          collapsed: false,
          items: [
            {
              text: 'Checkbox',
              link: '/en/documentation/components/checkbox',
            },
            {
              text: 'Date Picker',
              link: '/en/documentation/components/date-picker/date-picker',
              items: [
                {
                  text: 'Date Range Picker',
                  link: '/en/documentation/components/date-picker/date-range-picker',
                },
                {
                  text: 'Date Calendar Picker',
                  link: '/en/documentation/components/date-picker/date-calendar-picker',
                },
                {
                  text: 'Month Year Picker',
                  link: '/en/documentation/components/date-picker/month-year-picker',
                },
              ],
            },
            {
              text: 'File Upload',
              link: '/en/documentation/components/file-upload',
            },
            {
              text: 'Input',
              link: '/en/documentation/components/input/input',
              items: [
                { text: 'Search Input', link: '/en/documentation/components/input/input-search' },
                { text: 'Username Input', link: '/en/documentation/components/input/input-username' },
                { text: 'Email Input', link: '/en/documentation/components/input/input-email' },
                { text: 'Password Input', link: '/en/documentation/components/input/input-password' },
                { text: 'URL Input', link: '/en/documentation/components/input/input-url' },
                { text: 'Contact Number Input', link: '/en/documentation/components/input/input-contact-number' },
                { text: 'Dropdown Input', link: '/en/documentation/components/input/input-dropdown' },
                { text: 'Currency Input', link: '/en/documentation/components/input/input-currency' },
              ],
            },
            {
              text: 'Radio',
              link: '/en/documentation/components/radio/radio',
              items: [
                {
                  text: 'Radio Grouped',
                  link: '/en/documentation/components/radio/radio-grouped',
                },
              ],
            },
            {
              text: 'Select',
              link: '/en/documentation/components/select/select',
              items: [
                {
                  text: 'Multi Select',
                  link: '/en/documentation/components/select/select-multiple',
                },
                {
                  text: 'Ladderized Select',
                  link: '/en/documentation/components/select/select-ladderized',
                },
              ],
            },
            {
              text: 'Slider',
              link: '/en/documentation/components/slider',
            },
            {
              text: 'Switch',
              link: '/en/documentation/components/switch',
            },
            {
              text: 'Textarea',
              link: '/en/documentation/components/textarea',
            },
            {
              text: 'Time Picker',
              link: '/en/documentation/components/time-picker',
            },
          ],
        },
        {
          text: 'Utilities',
          collapsed: false,
          items: [
            {
              text: 'Border Radius',
              link: '/en/documentation/utilities/border-radius',
            },
            {
              text: 'Border Color',
              link: '/en/documentation/utilities/border-colors',
            },
            {
              text: 'Color Tokens',
              link: '/en/documentation/utilities/color-tokens',
            },
            {
              text: 'Colors',
              link: '/en/documentation/utilities/colors',
            },
            {
              text: 'Max Width',
              link: '/en/documentation/utilities/max-width',
            },
            {
              text: 'Spacing',
              link: '/en/documentation/utilities/spacing',
            },
            {
              text: 'Typography',
              link: '/en/documentation/utilities/typography',
            },
            {
              text: 'Skeletal Loader',
              link: '/en/documentation/utilities/skeletal-loader',
            },
          ],
        },
        {
          text: 'Resources',
          items: [
            {
              text: 'Product Logo',
              link: '/en/documentation/components/logo',
            },
          ],
        },
      ],
      '/en/patterns/': [
        {
          text: 'Foundations',
          items: [
            {
              text: 'Design Tokens',
              link: '/en/patterns/design-tokens',
            },
            {
              text: 'Layout System',
              link: '/en/patterns/layout-system',
            },
            {
              text: 'Density',
              link: '/en/patterns/density',
            },
            {
              text: 'Motion',
              link: '/en/patterns/motion',
            },
          ],
        },
        {
          text: 'UI Patterns',
          items: [
            {
              text: 'Card Borders',
              link: '/en/patterns/card-borders',
            },
            {
              text: 'Form Sections',
              link: '/en/patterns/form-sections',
            },
            {
              text: 'Data Visualization',
              link: '/en/patterns/data-visualization',
            },
          ],
        },
        {
          text: 'Behavior',
          items: [
            {
              text: 'Interaction Rules',
              link: '/en/patterns/interaction-rules',
            },
            {
              text: 'Navigation',
              link: '/en/patterns/navigation',
            },
          ],
        },
        {
          text: 'Guidelines',
          items: [
            {
              text: 'Accessibility',
              link: '/en/patterns/accessibility',
            },
            {
              text: 'Content Guidelines',
              link: '/en/patterns/content-guidelines',
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

    footer: {
      copyright: 'Copyright © 2025 Sprout Frontend Engineers',
    },
  },
};
