import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const CHIPS_SIZE = ['lg', 'md', 'sm'] as const;
export const TONES = ['subtle', 'default']
export const ICON_WEIGHTS = ['regular', 'bold', 'thin', 'light', 'fill', 'duotone'] as const;
const CHIPS_VARIANT = ['tag', 'day'] as const;
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const;

export const chipsPropTypes = {
  label: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    validator: (value: (typeof CHIPS_SIZE)[number]) => CHIPS_SIZE.includes(value),
    default: 'md',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
  closable: {
    type: Boolean,
    default: false,
  },
  avatarUrl: {
    type: String,
    default: '',
  },
  avatarVariant: {
    type: String,
    default: '',
  },
  avatarInitials: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  iconWeight: {
    type: String as PropType<(typeof ICON_WEIGHTS)[number]>,
    validator: (value: (typeof ICON_WEIGHTS)[number]) => ICON_WEIGHTS.includes(value),
    default: 'regular',
  },
  closeIconSize: {
    type: Number,
    default: 16,
  },
  badge: {
    type: Boolean,
    default: false,
  },
  badgeText: {
    type: String,
    default: '0',
  },
  badgeVariant: {
    type: String,
    default: 'brand',
  },
  removable: {
    type: Boolean,
    default: false,
  },
  visible: {
    type: Boolean,
    default: true,
  },
  variant: {
    type: String as PropType<(typeof CHIPS_VARIANT)[number]>,
    validator: (value: (typeof CHIPS_VARIANT)[number]) => CHIPS_VARIANT.includes(value),
    default: 'tag',
  },
  day: {
    type: String as PropType<(typeof DAYS)[number]>,
    default: 'Sunday',
    validator: (value: string) => DAYS.includes(value as (typeof DAYS)[number]),
  },
  tone: {
    type: String as PropType<(typeof TONES)[number]>,
    default: 'default',
    validator: (value: string) => TONES.includes(value as (typeof TONES)[number]),
  }
};

export type ChipsPropTypes = ExtractPropTypes<typeof chipsPropTypes>;

export const chipsEmitTypes = {
  close: (evt: MouseEvent | KeyboardEvent): boolean => evt instanceof MouseEvent || evt instanceof KeyboardEvent,
  update: (value: boolean): value is boolean => typeof value === 'boolean',
};
export type ChipsEmitTypes = typeof chipsEmitTypes;
