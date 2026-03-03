export type EventCellState = 'success' | 'information' | 'pending' | 'caution' | 'danger'

export interface EventCellProps {
  title?: string
  description?: string
  subDescription?: string
  state?: EventCellState
  startTime?: string
  endTime?: string
  icon?: string
  fullwidth?: boolean
  viewOnly?: boolean
  disabled?: boolean
  loading?: boolean
  lineThrough?: boolean
  ariaLabel?: string
}

export interface EventCellEmits {
  'click': [event: MouseEvent]
}

export interface EventCellSlots {
  default(props: {}): any
  prefix(props: {}): any
}
