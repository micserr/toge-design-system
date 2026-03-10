export interface CheckboxProps {
  id?: string
  label?: string
  description?: string
  disabled?: boolean
  indeterminate?: boolean
  ariaLabel?: string
}

export interface CheckboxEmits {
  (e: 'change', evt: Event): void
}
