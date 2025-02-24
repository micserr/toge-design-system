import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

export const textAreaPropTypes = {
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  rows: {
    type: Number,
    default: 4,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: '',
  },
  helperText: {
    type: String,
    default: '',
  },
};

export const textAreaEmitTypes = {
  'update:modelValue': (evt: KeyboardEvent): evt is KeyboardEvent => evt instanceof KeyboardEvent,
};

export type TextAreaEmitTypes = { 'update:modelValue': typeof textAreaEmitTypes };

export type TextAreaPropTypes = ExtractPropTypes<typeof textAreaPropTypes>;
