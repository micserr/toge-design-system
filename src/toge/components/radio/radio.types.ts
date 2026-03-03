export interface RadioProps {
  id?: string
  name?: string
  value?: string | number | boolean
  description?: string
  disabled?: boolean
  bordered?: boolean
  choiceBox?: boolean
  fullWidth?: boolean
  ariaLabel?: string
}

export interface RadioEmits {
  (e: 'change', evt: Event): void
}
