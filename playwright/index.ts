import { beforeMount, afterMount } from '@playwright/experimental-ct-vue/hooks';
import '../src/assets/styles/tailwind.css';

beforeMount(async ({ app, hooksConfig }) => {
  // Mount any global plugins or configurations
});

afterMount(async ({ instance }) => {
  // Cleanup after component unmount
});
