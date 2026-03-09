import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

export interface RadioOption {
  text: string;
  value: string | number | boolean;
  disabled?: boolean;
  description?: string;
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
  fullWidth: {
    type: Boolean,
    default: false,
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
  choiceBox: {
    type: Boolean,
    default: false,
  },
};

export const radioGroupedEmitTypes = ['update:modelValue'];

export type RadioGroupedPropTypes = ExtractPropTypes<typeof radioGroupedPropTypes>;

export type RadioGroupedEmitTypes = typeof radioGroupedEmitTypes;
