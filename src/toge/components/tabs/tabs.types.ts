export interface TabItem {
  label: string
  icon?: string
  iconFill?: string
  disabled?: boolean
  badge?: {
    text: string
    variant?: string
    size?: string
  }
}

export interface TabsProps {
  list?: TabItem[]
  underlined?: boolean
  showBadge?: boolean
}

export interface TabsEmits {
  (e: 'change', index: number): void
}

export interface TabsSlots {
  default(props: {}): any
}
