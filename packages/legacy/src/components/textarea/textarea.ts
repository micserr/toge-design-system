import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

export const textAreaPropTypes = {
  id: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  supportingLabel: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  active: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  minLength: {
    type: Number,
  },
  maxLength: {
    type: Number,
  },
  rows: {
    type: Number,
    default: 4,
  },
  displayHelper: {
    type: Boolean,
    default: false,
  },
  helperIcon: {
    type: String,
    default: null,
  },
  helperText: {
    type: String,
    default: '',
  },
  hasCounter: {
    type: Boolean,
    default: false,
  },
};

export const textAreaEmitTypes = {
  'update:modelValue': (value: string) => typeof value === 'string',
};

export type TextAreaEmitTypes = { 'update:modelValue': typeof textAreaEmitTypes };

export type TextAreaPropTypes = ExtractPropTypes<typeof textAreaPropTypes>;
