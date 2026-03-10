/** @type {import('tailwindcss').Config} */
// Tailwind v4 compatible config — loaded via @config in tailwind-v4.css
// Values inlined to avoid TypeScript import issues when loaded via @config at runtime
// prefix and corePlugins are omitted (handled by CSS-first v4 syntax)
// plugins are omitted — custom utilities are defined via @utility in tailwind-v4.css

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        white: {
          50: '#FFFFFF', 100: '#F1F2F3', 200: '#DBDBDD', 300: '#BABCC0',
          400: '#989898', 500: '#7C7C7C', 600: '#656565', 700: '#525252',
          800: '#464646', 900: '#3D3D3D', 950: '#292929',
        },
        mushroom: {
          50: '#EFF1F1', 100: '#E6EAEA', 200: '#D9DEDE', 300: '#B8C1C0',
          400: '#919F9D', 500: '#738482', 600: '#5D6C6B', 700: '#4C5857',
          800: '#414B4B', 900: '#394141', 950: '#262B2B',
        },
        tomato: {
          50: '#FEF2F3', 100: '#FEE2E3', 200: '#FDCBCE', 300: '#FBA6AA',
          400: '#F6737A', 500: '#EC4750', 600: '#DA2F38', 700: '#B61F27',
          800: '#971D23', 900: '#7D1F24', 950: '#440B0E',
        },
        carrot: {
          50: '#FFFAEC', 100: '#FFF4D3', 200: '#FFE5A5', 300: '#FFD16D',
          400: '#FFB132', 500: '#FF970A', 600: '#FF7F00', 700: '#CC5C02',
          800: '#A1470B', 900: '#823C0C', 950: '#461C04',
        },
        mango: {
          50: '#FFFFEA', 100: '#FFFBC5', 200: '#FFF885', 300: '#FFED46',
          400: '#FFDF1B', 500: '#FFBF00', 600: '#E29300', 700: '#BB6802',
          800: '#985008', 900: '#7C420B', 950: '#482200',
        },
        kangkong: {
          50: '#F0FDF4', 100: '#DCFCE6', 200: '#BBF7CE', 300: '#86EFA8',
          400: '#4ADE7B', 500: '#22C558', 600: '#17AD49', 700: '#158039',
          800: '#166531', 900: '#14532B', 950: '#052E15',
        },
        wintermelon: {
          50: '#ECFEFF', 100: '#CEFBFF', 200: '#A3F3FE', 300: '#64E9FC',
          400: '#1ED5F2', 500: '#02AFCE', 600: '#0592B5', 700: '#0C7492',
          800: '#135E77', 900: '#154E64', 950: '#073345',
        },
        blueberry: {
          50: '#EEF7FF', 100: '#D8EBFF', 200: '#BADCFF', 300: '#8BBDFF',
          400: '#549EFF', 500: '#2D88FF', 600: '#1679FA', 700: '#0F6EEB',
          800: '#1356BA', 900: '#164B92', 950: '#122E59',
        },
        ubas: {
          50: '#F5F3FF', 100: '#EEE9FE', 200: '#DED6FE', 300: '#C6B5FD',
          400: '#AA8BFA', 500: '#8952F6', 600: '#8139EE', 700: '#7227DA',
          800: '#5F21B6', 900: '#501D95', 950: '#311065',
        },
      },
      fontFamily: {
        main: ['Rubik', 'sans-serif'],
        inbound: ['Roboto', 'sans-serif'],
        code: ['Roboto Mono', 'sans-serif'],
      },
      fontSize: {
        100: '12px', 200: '14px', 300: '16px', 400: '20px', 500: '24px',
        600: '28px', 700: '32px', 800: '40px', 900: '48px', 1000: '56px',
      },
      lineHeight: {
        100: '12px', 200: '14px', 300: '16px', 400: '20px', 500: '24px',
        600: '32px', 700: '36px', 800: '40px', 900: '48px', 1000: '60px',
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
        'drop': '0px 2px 8px -2px #262B2B33',
        'drop-md': '0px 4px 12px 0px #262B2B29',
        'drop-top-sm': '0px -2px 4px -1px #262B2B1F',
        'drop-top': '0px -2px 8px -2px #262B2B33',
        'drop-top-md': '0px -4px 12px 0px #262B2B29',
        'button': '0px 2px 1px 0px rgba(0, 0, 0, 0.15) inset',
        'button-hover': '0px -2px 1px 0px rgba(0, 0, 0, 0.10) inset',
        'button-active': '0px 0px 0px 2px #394141',
      },
      spacing: {
        'size-spacing-6xs': 'var(--size-50)',
        'size-spacing-5xs': 'var(--size-100)',
        'size-spacing-4xs': 'var(--size-150)',
        'size-spacing-3xs': 'var(--size-200)',
        'size-spacing-2xs': 'var(--size-250)',
        'size-spacing-xs': 'var(--size-300)',
        'size-spacing-sm': 'var(--size-400)',
        'size-spacing-md': 'var(--size-500)',
        'size-spacing-lg': 'var(--size-600)',
        'size-spacing-xl': 'var(--size-700)',
        'size-spacing-2xl': 'var(--size-800)',
        'size-spacing-3xl': 'var(--size-900)',
        'size-spacing-4xl': 'var(--size-1000)',
        'size-spacing-5xl': 'var(--size-1100)',
        'size-spacing-6xl': 'var(--size-1200)',
      },
      maxWidth: {
        'sm': '640px',
        'md': '1000px',
        'lg': '1320px',
      },
      borderRadius: {
        'border-radius-2xs': 'var(--size-50)',
        'border-radius-xs': 'var(--size-100)',
        'border-radius-sm': 'var(--size-150)',
        'border-radius-md': 'var(--size-200)',
        'border-radius-lg': 'var(--size-250)',
        'border-radius-xl': 'var(--size-300)',
        'border-radius-full': '999px',
      },
    },
  },
};
