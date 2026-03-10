export type PlacementType =
  | 'auto'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'right'

export type PopperStrategy = 'fixed' | 'absolute'

export interface SelectOption {
  text: string
  value: string | number
  subtext?: string
  disabled?: boolean
  icon?: string
  lozengeProps?: Record<string, unknown>
}

export interface SelectProps {
  id: string
  options: SelectOption[]
  placeholder?: string
  label?: string
  supportingLabel?: string
  disabled?: boolean
  error?: boolean
  active?: boolean
  clearable?: boolean
  displayText?: string
  showHelper?: boolean
  helperText?: string
  helperIcon?: string
  inputLoader?: boolean
  optionsLoader?: boolean
  infiniteScrollLoader?: boolean
  lozenge?: boolean
  placement?: PlacementType
  distance?: number
  popperStrategy?: PopperStrategy
  popperWidth?: string
  popperContainer?: string
  width?: string
}

export interface SelectEmits {
  'update:modelValue': [value: string | number | null]
  'infinite-scroll-trigger': [triggered: boolean]
  'popper-state': [state: boolean]
  'get-selected-option': [option: SelectOption | null]
}

export interface SelectSlots {
  'display'(props: { selected: SelectOption | null; isOpen: boolean }): unknown
  'option'(props: { option: SelectOption; selected: boolean }): unknown
  'empty'(props: Record<string, never>): unknown
}
