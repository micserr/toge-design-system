import { App } from 'vue';

import '../src/tailwind.css';

//#region - Utility to get and set prefix
let globalPrefix = '';

export const setPrefix = (prefix: string) => {
  globalPrefix = prefix || '';
};

export const getPrefix = (): string => globalPrefix;

const applyPrefix = (componentName: string) => `${getPrefix()}${componentName}`;
//#endregion

//#region - Install components globally

// Dynamically import all components from the components directory
const components = (import.meta as any).glob('../src/components/**/*.vue', {
  eager: true, // Load components immediately
});

const install = (app: App, options: { prefix?: string } = {}) => {
  // Set the global prefix from options
  setPrefix(options.prefix || '');

  Object.entries(components).forEach(([path, component]) => {
    // Extract the component name from the file path
    const componentName = path.split('/').pop()?.replace('.vue', '') as string;

    // Apply the global prefix to the component name
    const prefixedComponentName = applyPrefix(componentName);

    // Register each component globally
    app.component(prefixedComponentName, (component as any).default);
  });

  console.log(
    '%c🚀⭐ Design System Next Installed ⭐🚀',
    'color: green; font-weight: bold; font-size: 14px;',
  );
};

export default { install };
//#endregion

//#region - Export components for individual import
// export { default as ButtonBase } from '../src/components/Buttons/ButtonBase.vue';  // Does not support prefix
//#endregion
