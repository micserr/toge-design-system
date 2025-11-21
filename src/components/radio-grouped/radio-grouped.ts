import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

export interface RadioOption {
  text: string;
  value: string | number | boolean;
  disabled?: boolean;
}

export const radioGroupedPropTypes = {
  id: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number, Boolean],
  },
  name: {
    type: String,
    required: true,
  },
  options: {
    type: Array as PropType<RadioOption[]>,
    required: true,
    default: () => [],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
  },
  bordered: {
    type: Boolean,
    default: false,
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
  error: {
    type: Boolean,
    default: false,
  },
  horizontalAlign: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'left',
  },
};

export const radioGroupedEmitTypes = ['update:modelValue'];

export type RadioGroupedPropTypes = ExtractPropTypes<typeof radioGroupedPropTypes>;

export type RadioGroupedEmitTypes = typeof radioGroupedEmitTypes;
