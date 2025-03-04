import DefaultTheme from 'vitepress/theme';

import pkg from '../../../package.json';

import '@/assets/styles/tailwind.css';
import './custom.css';

const setPackageVersion = () => {
  if (typeof window !== 'undefined') {
    setInterval(() => {
      const navbarTitle = document.querySelector('.VPNav .title span');
      const mainText = document.querySelector('.main .text');
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

export default DefaultTheme;
