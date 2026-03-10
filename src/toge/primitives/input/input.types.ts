export type InputType = 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number'

export interface InputProps {
  id?: string
  label?: string
  supportingLabel?: string
  placeholder?: string
  type?: InputType
  disabled?: boolean
  readonly?: boolean
  error?: boolean
  minLength?: number
  maxLength?: number
  showCharCount?: boolean
  showHelper?: boolean
  helperIcon?: string
  helperText?: string
}

export interface InputEmits {
  (e: 'change', evt: Event): void
  (e: 'blur', evt: FocusEvent): void
  (e: 'focus', evt: FocusEvent): void
}
