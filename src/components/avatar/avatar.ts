import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const AVATAR_SIZE = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs', '2xs'] as const;
const AVATAR_PRIMARY = ['primary', 'secondary', 'tertiary'] as const;
const AVATAR_STATUS = ['danger', 'disabled', 'information', 'brand'] as const;

export const AVATAR_VARIANT = ['image', 'initial', 'client', 'user', 'user-group', 'count'] as const;

export const avatarPropTypes = {
  src: {
    type: String,
  },
  alt: {
    type: String,
    default: 'Avatar',
  },
  badge: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    validator: (value: (typeof AVATAR_SIZE)[number]) => AVATAR_SIZE.includes(value),
    default: '2xl',
  },
  notification: {
    type: Boolean,
    default: false,
  },
  notificationText: {
    type: String,
    default: '0',
  },
  initial: {
    type: String,
    default: 'Avatar',
  },
  color: {
    type: String,
    validator: (value: (typeof AVATAR_PRIMARY)[number]) => AVATAR_PRIMARY.includes(value),
    default: 'primary',
  },
  status: {
    type: String,
    validator: (value: (typeof AVATAR_STATUS)[number]) => AVATAR_STATUS.includes(value),
    default: 'brand',
  },
  count: {
    type: Number,
    default: 0,
  },
  variant: {
    type: String,
    validator: (value: (typeof AVATAR_VARIANT)[number]) => AVATAR_VARIANT.includes(value),
    default: 'initial',
  },
  loading: {
    type: Boolean,
    default: false,
  },
};

export const avatarEmitTypes = {
  'image-error': (error: boolean) => typeof error === 'boolean',
};

export type AvatarEmitTypes = typeof avatarEmitTypes;

export type AvatarPropTypes = ExtractPropTypes<typeof avatarPropTypes>;
