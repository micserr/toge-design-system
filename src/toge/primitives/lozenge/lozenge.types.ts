export type LozengeTone = 'plain' | 'pending' | 'information' | 'success' | 'danger' | 'neutral' | 'caution'

export interface LozengeProps {
  label?: string
  tone?: LozengeTone
  fill?: boolean
  removable?: boolean
  url?: string
  visible?: boolean
  loading?: boolean
  icon?: string
  postfixIcon?: string
  interactive?: boolean
  dropdown?: boolean
  maxWidth?: string
  ariaLabel?: string
}

export interface LozengeEmits {
  (e: 'click', event: KeyboardEvent): void
}

