export interface SwitchProps {
  id?: string
  disabled?: boolean
  ariaLabel?: string
}

export interface SwitchEmits {
  (e: 'change', value: boolean): void
}
