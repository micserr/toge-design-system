export type SnackTone = 'success' | 'warning' | 'error' | 'info' | 'neutral'

export interface Snack {
  id?: string | number
  text: string
  tone?: SnackTone
  showAction?: boolean
  actionText?: string
  showIcon?: boolean
  duration?: number
}

export interface SnackbarProps {
  snacks: Snack[]
  position?: 'bottom-left' | 'bottom-center' | 'bottom-right' | 'top-left' | 'top-center' | 'top-right'
}

export interface SnackbarEmits {
  'dismiss': [snack: Snack]
  'action': [snack: Snack]
}

export interface SnackbarSlots {
  'snack'(props: { snack: Snack }): any
}
