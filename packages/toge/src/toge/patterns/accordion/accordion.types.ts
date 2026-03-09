export interface AccordionItem {
  collapseId: string
  title: string
  subtitle?: string
}

export interface AccordionProps<T extends AccordionItem = AccordionItem> {
  items: T[]
  alwaysOpen?: boolean
  isDefaultOpen?: boolean
  trigger?: 'header' | 'button'
  bordered?: boolean
}

export interface AccordionEmits {
  (e: 'toggle', collapseId: string, isOpen: boolean): void
}
