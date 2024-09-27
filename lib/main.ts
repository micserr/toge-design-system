import { App } from 'vue';

import '../src/tailwind.css';

//#region - Install components globally

// Dynamically import all components from the components directory
const components = import.meta.glob('../src/components/**/*.vue', {
  eager: true, // Load components immediately
});

const install = (app: App) => {
  Object.entries(components).forEach(([path, component]) => {
    // Extract the component name from the file path
    const componentName = path.split('/').pop()?.replace('.vue', '') as string;

    // Register each component globally
    app.component(componentName, (component as any).default);
  });

  console.log(
    '%c🚀⭐ Design System Next Installed ⭐🚀',
    'color: green; font-weight: bold; font-size: 14px;',
  );
};

export default { install };
//#endregion

//#region - Export components for individual import
export { default as DSN_ButtonBase } from '../src/components/DSN_Button/DSN_ButtonBase.vue';
//#endrigion
