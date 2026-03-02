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
  'contact-number',
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
  },
  modelValue: {
    type: [String, Number],
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
  showCharCount: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    validator: (value: (typeof INPUT_TYPES)[number]) => !value || INPUT_TYPES.includes(value),
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
  offsetSize: {
    type: String as PropType<(typeof TRAILING_SIZES)[number]>,
    validator: (value: (typeof TRAILING_SIZES)[number]) => TRAILING_SIZES.includes(value),
    default: 'sm',
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
};

export const inputEmitTypes = {
  'update:modelValue': (value: string | number): boolean => typeof value === 'string' || typeof value === 'number',
  blur: (event: Event): boolean => event instanceof Event,
};

export type InputEmitTypes = { 'update:modelValue': typeof inputEmitTypes };
export type InputPropTypes = ExtractPropTypes<typeof inputPropTypes>;
