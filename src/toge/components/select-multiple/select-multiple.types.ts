import type { SelectOption, PlacementType, PopperStrategy } from '../select/select.types'

export type { SelectOption, PlacementType, PopperStrategy }

export interface SelectMultipleProps {
  id: string
  options: SelectOption[]
  placeholder?: string
  label?: string
  supportingLabel?: string
  disabled?: boolean
  error?: boolean
  active?: boolean
  clearable?: boolean
  searchable?: boolean
  persistentDisplayText?: string
  displayHelper?: boolean
  helperText?: string
  helperIcon?: string
  inputLoader?: boolean
  optionsLoader?: boolean
  placement?: PlacementType
  popperStrategy?: PopperStrategy
  popperWidth?: string
  popperContainer?: string
  width?: string
  distance?: number
}

export interface SelectMultipleEmits {
  'update:modelValue': [value: (string | number)[]]
  'search': [query: string]
  'popper-state': [state: boolean]
}

export interface SelectMultipleSlots {
  'chip'(props: { option: SelectOption }): unknown
  'option'(props: { option: SelectOption; selected: boolean }): unknown
  'empty'(props: Record<string, never>): unknown
}
