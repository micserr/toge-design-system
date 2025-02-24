import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const TRAILING_SIZES = ['xs', 'sm', 'md'] as const;

export const INPUT_TYPES = ['default', 'search', 'number','username', 'email', 'password', 'url'] as const;

export const TYPE_HAS_TRAILING_ICONS = ['search', 'password', 'url'] as const;

export const TYPE_HAS_LEADING_ICONS = ['username', 'email', 'url'] as const;

export const inputPropTypes = {
  id: {
    type: String,
    default: '',
  },
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
  error: {
    type: Boolean,
    default: false,
  },
  offsetSize: {
    type: String as PropType<(typeof TRAILING_SIZES)[number]>,
    validator: (value: (typeof TRAILING_SIZES)[number]) => TRAILING_SIZES.includes(value),
    default: 'sm',
  },
};

export const inputEmitTypes = {
  'update:modelValue': (evt: KeyboardEvent): evt is KeyboardEvent => evt instanceof KeyboardEvent,
};

export type InputEmitTypes = { 'update:modelValue': typeof inputEmitTypes };
export type InputPropTypes = ExtractPropTypes<typeof inputPropTypes>;
