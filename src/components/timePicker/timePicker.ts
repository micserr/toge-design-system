import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

export const timePickerPropTypes = {
  modelValue: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @description Interval in minutes
   */
  interval: {
    type: Number,
    default: 30,
  },
  /**
   * @description '24' for 24-hour format, '12' for 12-hour format
   */
  format: {
    type: String,
    default: '24',
  },
  /**
   * @description disable user to type
   */
  disableTyping: {
    type: Boolean,
    default: false,
  },
};
export const timePickerEmitTypes = {
  'update:modelValue': (evt: MouseEvent): evt is MouseEvent => evt instanceof MouseEvent,
};
export type TimePickerEmitTypes = {
  'update:modelValue': string;
};
export type TimePickerPropTypes = ExtractPropTypes<typeof timePickerPropTypes>;
