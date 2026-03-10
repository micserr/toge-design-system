import type { MinMaxYear, RestDayType, DisabledDates } from '../date-calendar-picker/date-calendar-picker.types'

export type { MinMaxYear, RestDayType, DisabledDates }

export interface DateRange {
  startDate: string
  endDate: string
}

export interface DateRangePickerProps {
  id?: string
  label?: string
  disabled?: boolean
  readonly?: boolean
  error?: boolean
  separator?: string
  width?: string
  format?: string
  placement?: 'bottom' | 'bottom-start' | 'top' | 'top-start'
  popperStrategy?: 'fixed' | 'absolute'
  popperContainer?: string
  showHelper?: boolean
  helperText?: string
  helperIcon?: string
  minMaxYear?: MinMaxYear
  restDays?: RestDayType[]
  disabledDates?: DisabledDates
  allowSameDay?: boolean
  maxRange?: number
  minRange?: number
}

export interface DateRangePickerEmits {
  'update:modelValue': [value: DateRange]
  'range-change': [value: { startDate: string; endDate: string; isValid: boolean }]
}
