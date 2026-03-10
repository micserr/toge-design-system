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

export interface ListProps {
  items: ListItem[]
  disabled?: boolean
  multiSelect?: boolean
  ladderized?: boolean
  noCheck?: boolean
  lozenge?: boolean
  infiniteScrollLoader?: boolean
  optionsLoader?: boolean
}

export interface ListEmits {
  'update:modelValue': [value: (string | number)[]]
  'select': [item: ListItem]
  'infinite-scroll-trigger': [triggered: boolean]
}

export interface ListSlots {
  'item'(props: { item: ListItem; selected: boolean }): unknown
  'empty'(props: {}): unknown
  'loader'(props: {}): unknown
}
