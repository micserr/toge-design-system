interface ChoiceboxCommonProps {
  id?: string
  label?: string
  description?: string
  disabled?: boolean
  fullWidth?: boolean
  ariaLabel?: string
}

export interface ChoiceboxCheckboxProps extends ChoiceboxCommonProps {
  variant?: 'checkbox'
  indeterminate?: boolean
}

export interface ChoiceboxRadioProps extends ChoiceboxCommonProps {
  variant: 'radio'
  name?: string
  value?: string | number | boolean
}

export interface ChoiceboxSlotProps extends ChoiceboxCommonProps {
  variant: 'slot'
}

export type ChoiceboxProps = ChoiceboxCheckboxProps | ChoiceboxRadioProps | ChoiceboxSlotProps

export interface ChoiceboxEmits {
  (e: 'change', evt: Event): void
}
