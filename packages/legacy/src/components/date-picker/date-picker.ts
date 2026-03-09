import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

export const REST_DAYS_TYPES = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'] as const;

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

export const datePickerPropTypes = {
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
  readonly2: {
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
    description: 'Format for the selected date. For example: MM/DD/YYYY, YYYY-MM-DD, etc.',
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

export type DatePickerPropTypes = ExtractPropTypes<typeof datePickerPropTypes>;
export type DatePickerEmitTypes = typeof datePickerEmitTypes;

// Tab component interfaces
export interface TabComponentProps {
  selectedMonth?: number;
  selectedYear?: number;
  selectedDay?: number;
  minMaxYear: MinMaxYearType;
}

export interface CalendarTabEmits {
  'update:date': [day: { date: Date; inactive: boolean }];
  'update:month': [month: number];
  'update:year': [year: number];
}

export interface MonthTabEmits {
  'update:month': (month: number) => void;
}

export interface YearTabEmits {
  'update:year': (year: number) => void;
  'update:currentPage': (page: number) => void;
}
