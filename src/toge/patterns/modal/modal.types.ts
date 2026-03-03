export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export interface ModalProps {
  title?: string
  closeButtonX?: boolean
  contentPadding?: boolean
  hasFooter?: boolean
  size?: ModalSize
  staticBackdrop?: boolean
}

export interface ModalEmits {
  (e: 'close'): void
}

export interface ModalSlots {
  default(props: {}): any
  header(props: {}): any
  footer(props: {}): any
}
