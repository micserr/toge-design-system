import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const AVATAR_SIZE = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs', '2xs'] as const;

export const avatarPropTypes = {
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: 'Avatar',
  },
  badge: {
    type: Boolean,
    default: false,
  },
  online: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    validator: (value: (typeof AVATAR_SIZE)[number]) => AVATAR_SIZE.includes(value),
    default: '2xl',
  },
  badgeText: {
    type: String,
    default: '',
  },
  initial: {
    type: String,
    default: '',
  },
};

export type AvatarPropTypes = ExtractPropTypes<typeof avatarPropTypes>;
