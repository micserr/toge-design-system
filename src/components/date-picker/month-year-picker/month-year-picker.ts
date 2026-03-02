import type { PropType, ExtractPropTypes } from 'vue';

const POPPER_STRATEGY_TYPES = ['fixed', 'absolute'] as const;
const PLACEMENTS_TYPES = [
  'auto',
  'auto-start',
  'auto-end',
  'top',
  'top-start',
  'top-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
] as const;

export const monthYearPickerPropTypes = {
  id: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    default: '',
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
    type: Object as PropType<MinMaxYearType>,
    validator: (value: MinMaxYearType): boolean => {
      return (
        value &&
        typeof value.min === 'number' &&
        typeof value.max === 'number' &&
        value.min >= 1900 &&
        value.min <= value.max
      );
    },
    default: () => ({
      min: 1900,
      max: new Date().getFullYear(),
    }),
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
  width: {
    type: String,
    default: '100%',
  },
  placement: {
    type: String as PropType<(typeof PLACEMENTS_TYPES)[number]>,
    validator: (value: (typeof PLACEMENTS_TYPES)[number]) => PLACEMENTS_TYPES.includes(value),
    default: 'bottom',
  },
  format: {
    type: String,
    default: 'MM-YYYY',
    description: 'Format for the selected month and year. For example: MM-YYYY, YYYY-MM, MMMM YYYY, etc.',
  },
  wrapperPosition: {
    type: String,
    default: 'relative',
  },
  popperStrategy: {
    type: String,
    validator: (value: 'fixed' | 'absolute') => POPPER_STRATEGY_TYPES.includes(value),
    default: 'absolute',
  },
  popperContainer: {
    type: String,
    default: '',
  },
};

export type MinMaxYearType = {
  min: number;
  max: number;
};

export const monthYearPickerEmitTypes = {
  'update:modelValue': (value: string) => typeof value === 'string',
  getInputValue: (value: string | null) => value === null || typeof value === 'string',
  getDateFormats: (value: Record<string, string>) => {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      Object.keys(value).every((key) => typeof value[key] === 'string')
    );
  },
  getMonthList: (value: Array<object>) => Array.isArray(value),
  getYearList: (value: Array<number>) => Array.isArray(value),
};

export type MonthYearPickerPropTypes = ExtractPropTypes<typeof monthYearPickerPropTypes>;
export type MonthYearPickerEmitTypes = typeof monthYearPickerEmitTypes;
