import { createApp } from 'vue';

import App from '@/App.vue';

import '@/assets/styles/fonts.css';
import '@/assets/styles/tailwind.css';
import 'floating-vue/dist/style.css';

import FloatingVue from 'floating-vue';

const app = createApp(App);

app.use(FloatingVue, {
  themes: {
    'sidenav-olympus-menu': {
      $extend: 'dropdown',
      distance: 30,
      placement: 'right',
      triggers: ['hover'],
      popperTriggers: ['hover', 'focus'],
      autoHide: false,
      delay: { show: 150, hide: 300 },
    },
    'sidenav-olympus-submenu': {
      $extend: 'dropdown',
      distance: 15,
      placement: 'right',
      triggers: ['manual'],
      popperTriggers: ['hover', 'focus'],
      autoHide: false,
      delay: { show: 150, hide: 300 },
    },
  },
});

app.mount('#app');
