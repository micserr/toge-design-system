import type { MinMaxYear } from '../date-calendar-picker/date-calendar-picker.types'

export type { MinMaxYear }

export interface MonthYearPickerProps {
  id?: string
  label?: string
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
  minMaxYear?: MinMaxYear
  format?: string
}

export interface MonthYearPickerEmits {
  'update:modelValue': [value: string]
  'change': [value: string]
}
