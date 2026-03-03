export interface AttributeFilterItem {
  label: string
  value: string | number
  disabled?: boolean
}

export interface AttributeFilterGroup {
  id: string
  label: string
  icon?: string
  items: AttributeFilterItem[]
  multiple?: boolean
}

export type AttributeFilterValue = Record<string, (string | number)[]>

export interface AttributeFilterProps {
  groups: AttributeFilterGroup[]
  modelValue?: AttributeFilterValue
  disabled?: boolean
  placement?: 'bottom' | 'bottom-start' | 'bottom-end' | 'top' | 'top-start' | 'top-end'
}

export interface AttributeFilterEmits {
  'update:modelValue': [value: AttributeFilterValue]
  'filter-change': [value: AttributeFilterValue]
  'clear': []
}

export interface AttributeFilterSlots {
  'trigger'(props: { group: AttributeFilterGroup; activeCount: number }): unknown
  'item'(props: { item: AttributeFilterItem; selected: boolean }): unknown
}
