import DefaultTheme from 'vitepress/theme';
import type { App } from 'vue';
import { createI18n } from 'vue-i18n';

import pkg from '../../../package.json';

import '@/assets/styles/tailwind.css';
import './custom.css';

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      // English translations will be added here
    },
    th: {
      // Thai translations will be added here
    },
  },
});

const setPackageVersion = () => {
  if (typeof window !== 'undefined') {
    setInterval(() => {
      const navbarTitle = document.querySelector(
        '#app > div > header > div > div.wrapper > div > div.title > div > a > span',
      );
      const mainText = document.querySelector('#VPContent > div > div.VPHero.VPHomeHero > div > div > p.text');
      const version = document.querySelector('.main .version');

      if (navbarTitle) {
        const versionText = `
          <p class="title">Sprout Design System</p>
          <p class="version">v${pkg.version}</p>
        `;

        navbarTitle.innerHTML = versionText;

        const version = navbarTitle.querySelector('.version');

        if (version) {
          (version as HTMLElement).style.color = '#158039';
          (version as HTMLElement).style.fontSize = '14px';
        }
      }

      if (mainText && !version) {
        const textContent = `<p class="version">v${pkg.version}</p>`;

        mainText.insertAdjacentHTML('beforeend', textContent);
      }
    }, 500);
  }
};

setPackageVersion();

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(i18n);
  },
};
