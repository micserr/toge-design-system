export type PlacementType =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'

export type TriggerEvent = 'click' | 'hover' | 'focus' | 'touch'

export type PopperStrategy = 'fixed' | 'absolute'

export interface PopoverProps {
  placement?: PlacementType
  distance?: number
  triggers?: TriggerEvent[]
  popperTriggers?: TriggerEvent[]
  popperStrategy?: PopperStrategy
  popperWidth?: string
  popperInnerWidth?: string
  popperContainer?: string
  autoHide?: boolean
  disabled?: boolean
  width?: string
}

export interface PopoverEmits {
  'popper-state': [state: boolean]
}

export interface PopoverSlots {
  default(props: Record<string, never>): unknown
  reference(props: Record<string, never>): unknown
}
