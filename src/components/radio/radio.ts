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
};

export const radioEmitTypes = ['update:modelValue'];

export type RadioPropTypes = ExtractPropTypes<typeof radioPropTypes>;

export type SwitchEmitTypes = typeof radioEmitTypes;
