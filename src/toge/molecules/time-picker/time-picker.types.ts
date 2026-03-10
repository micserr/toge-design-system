export type TimeFormat = '12' | '24'

export interface TimePickerProps {
  label?: string
  error?: boolean
  disabled?: boolean
  interval?: number
  format?: TimeFormat
  disableTyping?: boolean
  fullWidth?: boolean
  helperText?: string
  showHelper?: boolean
  placeholder?: string
  id?: string
}

export interface TimePickerEmits {
  (e: 'change', value: string): void
}
