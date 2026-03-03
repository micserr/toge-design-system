export type TooltipPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'

export interface TooltipProps {
  text?: string
  placement?: TooltipPlacement
  distance?: number
  hasMaxWidth?: boolean
  fitContent?: boolean
  showTriggers?: string | string[]
  hideTriggers?: string | string[]
  autoHide?: boolean
}
