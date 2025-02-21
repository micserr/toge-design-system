import DefaultTheme from 'vitepress/theme';

import pkg from '../../../package.json';

import '@/assets/styles/tailwind.css';
import './custom.css';

const setPackageVersion = () => {
  setInterval(() => {
    const navbarTitle = document.querySelector('.VPNav .title span');
    const mainText = document.querySelector('.main .text');

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

    if (mainText) {
      mainText.textContent = pkg.version;
    }
  }, 500);
};

document.addEventListener('DOMContentLoaded', () => {
  setPackageVersion();
});

export default DefaultTheme;
