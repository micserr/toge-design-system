export interface FilterOption {
  label: string
  value: string | number
  count?: number
  disabled?: boolean
}

export interface FilterProps {
  options: FilterOption[]
  modelValue?: (string | number)[]
  multiple?: boolean
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export interface FilterEmits {
  'update:modelValue': [value: (string | number)[]]
  'filter-change': [active: (string | number)[]]
}

export interface FilterSlots {
  'option'(props: { option: FilterOption; active: boolean }): unknown
}
