export type ButtonTone = 'neutral' | 'success' | 'danger'
export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'text'
export type ButtonNativeType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  tone?: ButtonTone
  size?: ButtonSize
  variant?: ButtonVariant
  type?: ButtonNativeType
  disabled?: boolean
  hasIcon?: boolean
  fullwidth?: boolean
  ariaLabel?: string
  ariaPressed?: boolean
}

export interface ButtonEmits {
  (e: 'click', evt: MouseEvent): void
}
