export interface CollapsibleProps {
  defaultOpen?: boolean
}

export interface CollapsibleEmits {
  'change': [isOpen: boolean]
}

export interface CollapsibleSlots {
  trigger(props: { isOpen: boolean; toggle: () => void }): any
  default(props: {}): any
}
