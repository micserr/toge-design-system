import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

export const datePickerPropTypes = {
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
  currentYear: {
    type: String,
    default: new Date().getFullYear().toString(),
  },
  minMaxYear: {
    type: Object as PropType<{ min: number; max: number }>,
    default: () => ({
      min: 1900,
      max: new Date().getFullYear(),
    }),
  },
  restDays: {
    type: Array as PropType<Array<string>>,
    default: () => [],
  },
  disabledDates: {
    type: Object as PropType<{
      to: string;
      from: string;
      pastDates: boolean;
      futureDates: boolean;
      selectedDates: Array<string>;
      weekends: boolean;
      weekdays: boolean;
      selectedDays: Array<string>;
    }>,
  },
  displayHelper: {
    type: Boolean,
    default: false,
  },
  helperText: {
    type: String,
    default: '',
  },
  helperIcon: {
    type: String,
    default: null,
  },
};

export const datePickerEmitTypes = {
  'update:modelValue': (value: string) => typeof value === 'string',
  getDateFormats: (value: object) => typeof value === 'object',
  getMonthList: (value: Array<string>) => Array.isArray(value),
  getYearList: (value: Array<string>) => Array.isArray(value),
};

export type DatePickerPropTypes = ExtractPropTypes<typeof datePickerPropTypes>;
export type DatePickerEmitTypes = typeof datePickerEmitTypes;
