import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const TRAILING_SIZES = ['xs', 'sm', 'md'] as const;

export const INPUT_TYPES = [
  'button',
  'checkbox',
  'color',
  'date',
  'datetime-local',
  'email',
  'file',
  'hidden',
  'image',
  'month',
  'number',
  'password',
  'radio',
  'range',
  'reset',
  'search',
  'submit',
  'tel',
  'text',
  'time',
  'url',
  'week',
] as const;

export const inputPropTypes = {
  id: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
  preValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    validator: (value: (typeof INPUT_TYPES)[number]) => INPUT_TYPES.includes(value),
    default: 'text',
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
  minLength: {
    type: Number,
  },
  maxLength: {
    type: Number,
  },
  error: {
    type: Boolean,
    default: false,
  },
  offsetSize: {
    type: String as PropType<(typeof TRAILING_SIZES)[number]>,
    validator: (value: (typeof TRAILING_SIZES)[number]) => TRAILING_SIZES.includes(value),
    default: 'sm',
  },
  helperText: {
    type: String,
    default: '',
  },
  helperIcon: {
    type: String,
    default: null,
  },
  displayHelper: {
    type: Boolean,
    default: false,
  },
};

export const inputEmitTypes = {
  'update:modelValue': (value: string): value is string => typeof value === 'string',
};

export type InputEmitTypes = { 'update:modelValue': typeof inputEmitTypes };
export type InputPropTypes = ExtractPropTypes<typeof inputPropTypes>;
