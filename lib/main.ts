import { App } from 'vue';

import pkg from '../package.json';

import '@/assets/styles/tailwind.css';

// Prefix constant (no need for dynamic setPrefix)
const PREFIX = 'spr-';

// Dynamically import all components from the components directory
const components = import.meta.glob('../src/components/**/*.vue', { eager: true });

const install = (app: App) => {
  Object.entries(components).forEach(([path, component]) => {
    // Extract component name from the file path and apply prefix
    const componentName = path.split('/').pop()?.replace('.vue', '');

    if (componentName) {
      app.component(`${PREFIX}${componentName}`, (component as any).default);
    }
  });

  console.log(
    `%c🌱 Design System Next Installed v${pkg.version} 🌱`,
    'color: green; font-weight: bold; font-size: 12px;',
  );
};

export default { install };

// Export components for individual import
// export { default as ButtonBase } from '../src/components/Buttons/ButtonBase.vue';  // Does not support prefix
