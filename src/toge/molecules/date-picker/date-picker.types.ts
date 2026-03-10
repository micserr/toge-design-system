import type { MinMaxYear, RestDayType, DisabledDates } from '../date-calendar-picker/date-calendar-picker.types'

export type { MinMaxYear, RestDayType, DisabledDates }

export interface DatePickerProps {
  id?: string
  label?: string
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  error?: boolean
  showHelper?: boolean
  helperText?: string
  helperIcon?: string
  width?: string
  placement?: 'bottom' | 'bottom-start' | 'top' | 'top-start'
  popperStrategy?: 'fixed' | 'absolute'
  popperContainer?: string
  format?: string
  minMaxYear?: MinMaxYear
  restDays?: RestDayType[]
  disabledDates?: DisabledDates
  clearable?: boolean
}

export interface DatePickerEmits {
  'update:modelValue': [value: string]
  'date-change': [value: string]
}
