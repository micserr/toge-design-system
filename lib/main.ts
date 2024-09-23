import { App } from "vue";

import "../src/tailwind.css";

// Import the components
import SDS_Button from "../src/components/SDS_Button.vue";
import SDS_Input from "../src/components/SDS_Input.vue";

const components = {
  SDS_Button: SDS_Button,
  SDS_Input: SDS_Input,
};

const _default = {
  install(app: App) {
    // Register components
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });

    console.log("%c🚀⭐ Sprout's Design System Installed ⭐🚀", "color: green; font-weight: bold; font-size: 18px;");
  },
};

// Export components for individual import
export { SDS_Button, SDS_Input };

// Export default for plugin install
export default _default;
