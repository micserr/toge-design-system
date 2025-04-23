import type { PropType, ExtractPropTypes } from 'vue';

const LOGO_THEMES = ['white','dark', 'gray', 'green'] as const;
const LOGO_NAMES = [
  'benchmark',
  'ecosystem',
  'engage',
  'finances',
  'hr-mobile',
  'hr',
  'inbound',
  'insight',
  'instacash',
  'instawage',
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

export const logosPropTypes = {
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
};

export type LogosPropTypes = ExtractPropTypes<typeof logosPropTypes>;
