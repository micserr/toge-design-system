import DefaultTheme from 'vitepress/theme';

import pkg from '../../../package.json';

import '../../../src/assets/styles/tailwind.css';
import './custom.css';

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
};
