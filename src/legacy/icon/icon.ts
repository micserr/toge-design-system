import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;
export const ICON_SIZE = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
export const ICON_TONE = ['success', 'error', 'info', 'pending', 'caution'] as const;
export const ICON_VARIANTS = ['primary', 'secondary', 'tertiary'] as const;

export const iconPropTypes = {
  id: {
    type: String,
    required: true,
    default: 'icon',
  },
  icon: {
    type: String,
    required: true,
    default: '',
  },
  size: {
    type: String as PropType<(typeof ICON_SIZE)[number]>,
    validator: (value: (typeof ICON_SIZE)[number]) => ICON_SIZE.includes(value),
    default: 'md',
  },
  tone: {
    type: String as PropType<(typeof ICON_TONE)[number]>,
    validator: (value: (typeof ICON_TONE)[number]) => ICON_TONE.includes(value),
    default: '',
  },
  variant: {
    type: String as PropType<(typeof ICON_VARIANTS)[number]>,
    validator: (value: (typeof ICON_VARIANTS)[number]) => ICON_VARIANTS.includes(value),
    default: '',
  },
};

export type IconPropTypes = ExtractPropTypes<typeof iconPropTypes>;
