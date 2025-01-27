import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const STATE_SIZE = ['small', 'large'] as const;
const STATE_IMAGE = [
  'bug',
  'clock',
  'dashboard',
  'id',
  'integration',
  'list',
  'saturation',
  'employees',
  'location',
] as const;

export const emptyStatePropTypes = {
  description: {
    type: String,
    required: false,
    default: 'No results found',
  },
  subDescription: {
    type: String,
    required: false,
    default: 'Try a different search term.',
  },
  buttonLabel: {
    type: String,
    required: false,
    default: 'Retry',
  },
  size: {
    type: String as PropType<(typeof STATE_SIZE)[number]>,
    validator: (value: (typeof STATE_SIZE)[number]) => STATE_SIZE.includes(value),
    default: 'small',
  },
  image: {
    type: String as PropType<(typeof STATE_IMAGE)[number]>,
    validator: (value: (typeof STATE_IMAGE)[number]) => STATE_IMAGE.includes(value),
    default: 'bug',
  },
  hasButton: {
    type: Boolean,
    default: false,
  },
};

export type EmptyStatePropTypes = ExtractPropTypes<typeof emptyStatePropTypes>;
