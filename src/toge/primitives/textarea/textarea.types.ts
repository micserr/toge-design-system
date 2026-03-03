export interface TextareaProps {
  id?: string
  label?: string
  supportingLabel?: string
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  error?: boolean
  rows?: number
  minLength?: number
  maxLength?: number
  hasCounter?: boolean
  displayHelper?: boolean
  helperIcon?: string
  helperText?: string
}

export interface TextareaEmits {
  (e: 'change', evt: Event): void
  (e: 'blur', evt: FocusEvent): void
  (e: 'focus', evt: FocusEvent): void
}
