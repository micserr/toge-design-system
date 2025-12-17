import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

export const radioPropTypes = {
  id: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number, Boolean],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number, Boolean],
    required: true,
  },
  description: {
    type: String,
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  choiceBox: {
    type: Boolean,
    default: false,
  },
};

export const radioEmitTypes = ['update:modelValue'];

export type RadioPropTypes = ExtractPropTypes<typeof radioPropTypes>;

export type RadioEmitTypes = typeof radioEmitTypes;
