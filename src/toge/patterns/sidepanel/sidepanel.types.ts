export type SidepanelSize = 'sm' | 'md' | 'lg' | 'xl'

export interface SidepanelProps {
  title?: string
  closeButtonX?: boolean
  contentPadding?: boolean
  size?: SidepanelSize
  position?: 'left' | 'right'
  hasBackdrop?: boolean
  staticBackdrop?: boolean
}

export interface SidepanelEmits {
  (e: 'close'): void
}

export interface SidepanelSlots {
  default(props: {}): any
  header(props: {}): any
  footer(props: {}): any
}
