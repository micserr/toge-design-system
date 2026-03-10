export interface RowProps {
  hoverable?: boolean
  selected?: boolean
  striped?: boolean
  index?: number
}

export interface RowEmits {
  'click': [event: MouseEvent]
}
