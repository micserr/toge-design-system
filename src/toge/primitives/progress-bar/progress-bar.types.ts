export type ProgressBarSize = 'xs' | 'sm' | 'lg'
export type ProgressBarColor = 'success' | 'danger' | 'warning' | 'info' | 'neutral'
export type ProgressBarLabelPlacement =
  | 'top'
  | 'top-start'
  | 'top-center'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-center'
  | 'bottom-end'
  | 'left'
  | 'right'

export interface ProgressBarProps {
  size?: ProgressBarSize
  value?: number
  max?: number
  color?: ProgressBarColor
  label?: boolean
  labelPlacement?: ProgressBarLabelPlacement
  supportingLabel?: string
}
