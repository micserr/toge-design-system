import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';

import pkg from '../../../package.json';

import '../../../src/assets/styles/tailwind.css';
import './custom.css';

import Layout from './Layout.vue';
import ComponentTabBar from './components/ComponentTabBar.vue';
import PropsPlayground from './components/PropsPlayground.vue';

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

const setLocalesOnChange = () => {
  if (typeof window !== 'undefined') {
    setInterval(() => {
      const localesOptionsEl = document.querySelectorAll<HTMLElement>('.VPNavBarTranslations .VPMenu .VPMenuLink');

      if (localesOptionsEl.length > 0) {
        localesOptionsEl.forEach((element) => {
          element.addEventListener('click', () => {
            const linkElement = element.querySelector('.link');

            if (linkElement) {
              const locale = linkElement.getAttribute('href')?.replace(/\//g, '') || '';

              localStorage.setItem('locale', locale);
            }
          });
        });
      }
    }, 500);
  }
};

setPackageVersion();
setLocalesOnChange();

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('ComponentTabBar', ComponentTabBar);
    app.component('PropsPlayground', PropsPlayground);
  },
} satisfies Theme;
