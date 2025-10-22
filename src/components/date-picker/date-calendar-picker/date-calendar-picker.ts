import type { PropType, ExtractPropTypes } from 'vue';

// Helper function for prop types
export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

// Define constants for prop validation
export const DATE_PICKER_MODES = ['full', 'month-year', 'year-only'] as const;

// Define types
export interface MinMaxYearType {
  min: number;
  max: number;
}

export interface DisabledDatesType {
  to: string;
  from: string;
  pastDates: boolean | string;
  futureDates: boolean | string;
  selectedDates: Array<string>;
  weekends: boolean;
  weekdays: boolean;
  selectedDays: Array<string>;
}

export type RestDayType = 'su' | 'mo' | 'tu' | 'we' | 'th' | 'fr' | 'sa';
export type DatePickerMode = typeof DATE_PICKER_MODES[number];

// Define props with JSDoc comments for documentation
export const dateCalendarPickerPropTypes = {
  /**
   * @description The selected date value (v-model)
   */
  modelValue: {
    type: String,
    default: '',
  },
  /**
   * @description Pre-selected month (0-indexed)
   */
  selectedMonth: {
    type: Number,
    default: undefined,
  },
  /**
   * @description Pre-selected year
   */
  selectedYear: {
    type: Number,
    default: undefined,
  },
  /**
   * @description Pre-selected day
   */
  selectedDay: {
    type: Number,
    default: undefined,
  },
  /**
   * @description Year range constraints
   */
  minMaxYear: {
    type: Object as PropType<MinMaxYearType>,
    default: () => ({ min: 1900, max: new Date().getFullYear() }),
  },
  /**
   * @description Days to mark as rest days
   */
  restDays: {
    type: Array as PropType<RestDayType[]>,
    default: () => [],
  },
  /**
   * @description Date restrictions
   */
  disabledDates: {
    type: Object as PropType<DisabledDatesType>,
    default: undefined,
  },
  /**
   * @description Disable the calendar
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @description Make the calendar read-only
   */
  readonly: {
    type: Boolean,
    default: false,
  },
  /**
   * @description Calendar mode: 'full', 'month-year', 'year-only'
   */
  mode: {
    type: String as PropType<DatePickerMode>,
    validator: (value: DatePickerMode) => DATE_PICKER_MODES.includes(value),
    default: 'full',
  },
  /**
   * @description Date format for v-model
   */
  format: {
    type: String,
    default: 'MM-DD-YYYY',
  },
};

// Define emits with type validation
export const dateCalendarPickerEmitTypes = {
  'update:modelValue': (value: string): value is string => typeof value === 'string',
  'update:month': (month: number): month is number => typeof month === 'number',
  'update:year': (year: number): year is number => typeof year === 'number',
  'update:day': (day: number): day is number => typeof day === 'number',
};

// Export types for use in other files
export type DateCalendarPickerPropTypes = ExtractPropTypes<typeof dateCalendarPickerPropTypes>;
export type DateCalendarPickerEmitTypes = typeof dateCalendarPickerEmitTypes;
