import { App } from 'vue';

import '@/assets/styles/tailwind.css';
import pkg from '../package.json';

// Prefix constant (no need for dynamic setPrefix)
const PREFIX = 'spr-';

// Dynamically import all components from the components directory
const components = import.meta.glob('../src/components/**/*.vue', { eager: true });

// List of component files to exclude from global registration
const excludedComponents: string[] = [
  'sidenav-menu-links.vue',
  'step.vue',
  'table-actions.vue',
  'table-chips-title.vue',
  'table-lozenge-title.vue',
];

const install = (app: App) => {
  Object.entries(components)
    .filter(([path]) => {
      const fileName = path.split('/').pop();
      return fileName && !excludedComponents.includes(fileName);
    })
    .forEach(([path, component]) => {
      // Extract component name from the file path and apply prefix
      const componentName = path.split('/').pop()?.replace('.vue', '');

      if (componentName) {
        app.component(`${PREFIX}${componentName}`, (component as any).default);
      }
    });

  console.info(
    `%c🌱 Design System Next Installed v${pkg.version} 🌱`,
    'font-weight: bold; font-size: 14px; color: green; padding: 16px 8px; border: 1px dashed green; border-radius: 4px; margin: 10px auto;',
  );
};

export default { install };

// Export components for individual import
// export { default as ButtonBase } from '../src/components/Buttons/ButtonBase.vue';  // Does not support prefix
