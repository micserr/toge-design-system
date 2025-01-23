import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const TRAILING_SIZES = ['xs', 'sm', 'md'] as const;

export const inputPropTypes = {
  modelValue: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  offsetSize: {
    type: String as PropType<(typeof TRAILING_SIZES)[number]>,
    validator: (value: (typeof TRAILING_SIZES)[number]) => TRAILING_SIZES.includes(value),
    default: 'sm',
  },
};

export type InputPropTypes = ExtractPropTypes<typeof inputPropTypes>;
