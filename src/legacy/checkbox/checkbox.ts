import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

export const checkboxPropTypes = {
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  indeterminate: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  fullWidth: {
    type: Boolean,
    default: false,
  }
};

export const checkboxEmitTypes = {
  'update:modelValue': (value: boolean) => typeof value === 'boolean',
};

export type CheckboxPropTypes = ExtractPropTypes<typeof checkboxPropTypes>;
export type CheckboxEmitTypes = typeof checkboxEmitTypes;
