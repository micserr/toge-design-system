import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

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
};

export type InputPropTypes = ExtractPropTypes<typeof inputPropTypes>;
