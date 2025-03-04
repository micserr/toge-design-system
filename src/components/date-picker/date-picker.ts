import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

export const REST_DAYS_TYPES = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'] as const;

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
    type: Object as PropType<MinMaxYearType>,
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
    default: '400px',
  },
};

export type RestDayType = (typeof REST_DAYS_TYPES)[number];

export type DisabledDatesType = {
  to: string;
  from: string;
  pastDates: boolean | string;
  futureDates: boolean | string;
  selectedDates: Array<string>;
  weekends: boolean;
  weekdays: boolean;
  selectedDays: Array<string>;
};

export type MinMaxYearType = {
  min: number;
  max: number;
};

export const datePickerEmitTypes = {
  'update:modelValue': (value: string) => typeof value === 'string',
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

export type DatePickerPropTypes = ExtractPropTypes<typeof datePickerPropTypes>;
export type DatePickerEmitTypes = typeof datePickerEmitTypes;
