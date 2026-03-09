import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const STATE_SIZE = ['small', 'large'] as const;
const STATE_IMAGE = [
  'bug',
  'clock',
  'dashboard',
  'employees',
  'government-id',
  'integration',
  'list',
  'social-media-handles',
  'work-in-progress',
  'work-location',
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
  size: {
    type: String as PropType<(typeof STATE_SIZE)[number]>,
    validator: (value: (typeof STATE_SIZE)[number]) => STATE_SIZE.includes(value),
    default: 'small',
  },
  image: {
    type: String as PropType<(typeof STATE_IMAGE)[number]>,
    default: 'list',
    validator: (value: (typeof STATE_IMAGE)[number] | undefined) => value === undefined || STATE_IMAGE.includes(value),
  },
  hasButton: {
    type: Boolean,
    default: false,
  },
  emptyStateCustomClasses: {
    type: String,
    default: '',
  }
};

export type EmptyStatePropTypes = ExtractPropTypes<typeof emptyStatePropTypes>;
