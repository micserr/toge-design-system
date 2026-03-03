export type CalendarCellState = 'success' | 'information' | 'pending' | 'caution' | 'danger'

export interface CalendarCellProps {
  type?: string
  title?: string
  description?: string
  status?: string
  state?: CalendarCellState
  fullwidth?: boolean
  viewOnly?: boolean
  subDescription?: string
  icon?: string
  loading?: boolean
  customColor?: string
  lineThrough?: boolean
  disabled?: boolean
  ariaLabel?: string
}

export interface CalendarCellEmits {
  (e: 'click', evt: MouseEvent): void
}
