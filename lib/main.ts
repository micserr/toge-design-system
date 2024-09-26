import { App } from 'vue';

import '../src/tailwind.css';

// Import the components
import DSN_ButtonBase from '../src/components/DSN-Button/DSN_ButtonBase.vue';

const components = {
  DSN_ButtonBase: DSN_ButtonBase,
};

const _default = {
  install(app: App) {
    // Register components
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });

    console.log(
      '%c🚀⭐ Design System Next Installed ⭐🚀',
      'color: green; font-weight: bold; font-size: 18px;',
    );
  },
};

// Export components for individual import
export { DSN_ButtonBase };

// Export default for plugin install
export default _default;
