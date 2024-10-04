/** @type {import('tailwindcss').Config} */

import colorScheme from './src/assets/scripts/toge-ds-color-v3.0';

export default {
  prefix: 'tw-',
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '16px',
        sm: '32px',
        md: '40px',
        lg: '48px',
        xl: '96px',
        xxl: '104px',
      },
      center: true,
      screens: {
        sm: '575.98px',
        md: '767.98px',
        lg: '991.98px',
        xl: '1199.98px',
        xxl: '1399.98px',
      },
    },
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'sans-serif'],
      },
      colors: colorScheme,
    },
    screens: {
      // `xxl` applies to x-large devices (large desktops, less than 1400px)
      xxl: { max: '1399.98px' },

      // `xl` applies to large devices (desktops, less than 1200px)
      xl: { max: '1199.98px' },

      // `lg` applies to medium devices (tablets, less than 992px)
      lg: { max: '991.98px' },

      // `md` applies to small devices (landscape phones, less than 768px)
      md: { max: '767.98px' },

      // `sm` applies to x-small devices (portrait phones, less than 576px)
      sm: { max: '575.98px' },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
