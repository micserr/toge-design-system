export interface RadioOption {
  text: string
  value: string | number | boolean
  disabled?: boolean
  description?: string
}

export interface RadioGroupedProps {
  id?: string
  name: string
  options: RadioOption[]
  disabled?: boolean
  description?: string
  fullWidth?: boolean
  bordered?: boolean
  choiceBox?: boolean
  displayHelper?: boolean
  helperIcon?: string
  helperText?: string
  error?: boolean
  horizontalAlign?: 'left' | 'center' | 'right'
}

export interface RadioGroupedEmits {
  (e: 'change', value: string | number | boolean): void
}
