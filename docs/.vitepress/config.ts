import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Design System",
  description: "Design System",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/guide/changelog' },
      { text: 'Component', link: '/component/overview' },
      { text: 'Resource', link: '/resource/resource' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Basics',
          items: [
            { text: 'Design', link: '/' },
            { text: 'Navigation', link: '/' },
            { text: 'Installation', link: '/' },
            { text: 'Quick Start', link: '/' },
          ],
        },
        {
          text: 'Advanced',
          items: [
            { text: 'Changelog', link: '/guide/changelog' },
          ]
        }
      ],
      '/component/': [
        {
          text: 'Overview',
          items: [
            { text: 'Overview', link: '/component/overview' },
          ]
        },
        {
          text: 'Basic',
          items: [
            { text: 'Button', link: '/component/button' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JefMari/design-system-next' }
    ]
  }
})
