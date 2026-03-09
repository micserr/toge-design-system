import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

export const REST_DAYS_TYPES = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'] as const;

const POPPER_STRATEGY_TYPES = ['fixed', 'absolute'] as const;
export const PLACEMENTS_TYPES = [
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

export const dateRangePickerPropTypes = {
  id: {
    type: String,
    required: true,
    default: 'date-range-picker',
  },
  modelValue: {
    type: Object as PropType<DateRangeType>,
    default: () => ({
      startDate: '',
      endDate: '',
    }),
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
  restDays: {
    type: Array as PropType<RestDayType[]>,
    validator: (value: RestDayType[]): boolean => {
      return value.every((val) => REST_DAYS_TYPES.includes(val));
    },
    default: [],
  },
  disabledDates: {
    type: Object as PropType<DisabledDatesType>,
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
    default: 'MM-DD-YYYY',
  },
  separator: {
    type: String,
    default: 'to',
    description: 'Text separator between start and end date inputs',
  },
  allowSameDay: {
    type: Boolean,
    default: false,
    description: 'Allow selecting the same day for start and end date',
  },
  maxRange: {
    type: Number,
    default: null,
    description: 'Maximum number of days allowed in the range',
  },
  minRange: {
    type: Number,
    default: 1,
    description: 'Minimum number of days required in the range',
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

export type RestDayType = (typeof REST_DAYS_TYPES)[number];

export type DateRangeType = {
  startDate: string;
  endDate: string;
};

export type DisabledDatesType = {
  to?: string;
  from?: string;
  pastDates?: boolean | string;
  futureDates?: boolean | string;
  selectedDates?: Array<string>;
  weekends?: boolean;
  weekdays?: boolean;
  selectedDays?: Array<string>;
};

export type MinMaxYearType = {
  min: number;
  max: number;
};

export const dateRangePickerEmitTypes = {
  'update:modelValue': (value: DateRangeType) => typeof value === 'object' && value !== null,
  getInputValue: (value: DateRangeType | null) => value === null || typeof value === 'object',
  getDateFormats: (value: Record<string, DateRangeType>) => {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      Object.keys(value).every((key) => typeof value[key] === 'object')
    );
  },
  getMonthList: (value: Array<object>) => Array.isArray(value),
  getYearList: (value: Array<number>) => Array.isArray(value),
  rangeChange: (value: { startDate: string; endDate: string; isValid: boolean }) => {
    return (
      typeof value === 'object' &&
      value !== null &&
      typeof value.startDate === 'string' &&
      typeof value.endDate === 'string' &&
      typeof value.isValid === 'boolean'
    );
  },
};

export type DateRangePickerPropTypes = ExtractPropTypes<typeof dateRangePickerPropTypes>;
export type DateRangePickerEmitTypes = typeof dateRangePickerEmitTypes;
