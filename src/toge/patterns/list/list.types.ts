export interface ListItem {
  text: string
  subtext?: string
  value: string | number
  sublevel?: ListItem[]
  group?: string
  disabled?: boolean
  icon?: string
  iconColor?: string
  textColor?: string
  lozengeProps?: Record<string, unknown>
}

export type ListGroupedBy = 'A-Z' | 'Z-A' | 'default'

export interface ListProps {
  items: ListItem[]
  modelValue?: (string | number)[]
  searchValue?: string
  multiSelect?: boolean
  searchable?: boolean
  searchablePlaceholder?: string
  ladderized?: boolean
  noCheck?: boolean
  lozenge?: boolean
  infiniteScrollLoader?: boolean
  optionsLoader?: boolean
}

export interface ListEmits {
  'update:modelValue': [value: (string | number)[]]
  'select': [item: ListItem]
  'search': [value: string]
  'infinite-scroll-trigger': [triggered: boolean]
}

export interface ListSlots {
  'item'(props: { item: ListItem; selected: boolean }): unknown
  'empty'(props: Record<string, never>): unknown
  'loader'(props: Record<string, never>): unknown
}
