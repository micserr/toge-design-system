/** @type {import('tailwindcss').Config} */

// Extend the shared tokens config with toge-package-specific content paths
import tokensConfig from '@toge-design-system/tokens/tailwind';

export default {
  ...tokensConfig,
  content: [
    './src/**/*.{vue,js,ts}',
    './lib/**/*.{ts,js}',
  ],
};
