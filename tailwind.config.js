/** @type {import('tailwindcss').Config} */

import colorScheme from './src/assets/scripts/colors';
import spacing from './src/assets/scripts/spacing';
import maxWidth from './src/assets/scripts/max-width';
import borderRadius from './src/assets/scripts/border-radius';
import utilities from './src/assets/scripts/utilities';

const plugin = require('tailwindcss/plugin');

export default {
  prefix: 'spr-',
  content: ['./index.html', './src/**/*.{vue,js,ts}', './docs/**/*.{md,ts,js}', './docs/locales/**/*.{md,ts,js}'],
  theme: {
    extend: {
      colors: colorScheme,
      fontFamily: {
        main: ['Rubik', 'sans-serif'],
        inbound: ['Roboto', 'sans-serif'],
        code: ['Roboto Mono', 'sans-serif'],
      },
      fontSize: {
        100: '12px',
        200: '14px',
        300: '16px',
        400: '20px',
        500: '24px',
        600: '28px',
        700: '32px',
        800: '40px',
        900: '48px',
        1000: '56px',
      },
      lineHeight: {
        100: '12px',
        200: '14px',
        300: '16px',
        400: '20px',
        500: '24px',
        600: '32px',
        700: '36px',
        800: '40px',
        900: '48px',
        1000: '60px',
      },
      letterSpacing: {
        'spacing-none': '0',
        'spacing-densest': '-1.3px',
        'spacing-denser': '-1px',
        'spacing-dense': '-0.7px',
        'spacing-normal': '0px',
        'spacing-wide': '0.7px',
        'spacing-wider': '1px',
        'spacing-widest': '1.3px',
      },
      boxShadow: {
        'drop-sm': '0px 2px 4px -1px #262B2B1F',
        drop: '0px 2px 8px -2px #262B2B33',
        'drop-md': '0px 4px 12px 0px #262B2B29',
        'drop-top-sm': '0px -2px 4px -1px #262B2B1F',
        'drop-top': '0px -2px 8px -2px #262B2B33',
        'drop-top-md': '0px -4px 12px 0px #262B2B29',
        button: '0px 2px 1px 0px rgba(0, 0, 0, 0.15) inset',
        'button-hover': '0px -2px 1px 0px rgba(0, 0, 0, 0.10) inset',
        'button-active': '0px 0px 0px 2px #394141',
      },
      spacing: spacing,
      maxWidth: maxWidth,
      borderRadius: borderRadius,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '32px',
        md: '40px',
        lg: '48px',
        xl: '96px',
        xxl: '104px',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {};
      for (const [key, value] of Object.entries(utilities)) {
        newUtilities[`.${key}`] = value;
      }
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
  corePlugins: {
    preflight: false,
  },
};
