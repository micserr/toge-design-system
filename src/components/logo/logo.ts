import type { PropType, ExtractPropTypes } from 'vue';

const LOGO_THEMES = ['white', 'dark', 'gray', 'green'] as const;
const LOGO_NAMES = [
  'benchmark',
  'ecosystem',
  'engage',
  'finances',
  'hr-mobile',
  'hr',
  'inbound',
  'insight',
  'readycash',
  'readywage',
  'payroll',
  'performance-plus',
  'procurement',
  'professional-services',
  'recruit',
  'recruit-plus',
  'sail',
  'sidekick',
  'wellness',
] as const;

export const logoPropTypes = {
  name: {
    type: String as PropType<(typeof LOGO_NAMES)[number]>,
    validator: (value: (typeof LOGO_NAMES)[number]) => LOGO_NAMES.includes(value),
    default: 'hr',
  },
  theme: {
    type: String as PropType<(typeof LOGO_THEMES)[number]>,
    validator: (value: (typeof LOGO_THEMES)[number]) => LOGO_THEMES.includes(value),
    default: 'dark',
  },
  width: {
    type: [String, Number] as PropType<string | number>,
    default: '50', // If number, it will be treated as px
  },
};

export type LogoPropTypes = ExtractPropTypes<typeof logoPropTypes>;
