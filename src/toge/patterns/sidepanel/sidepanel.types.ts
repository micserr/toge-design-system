export type SidepanelSize = 'sm' | 'md' | 'lg' | 'xl'

export interface SidepanelProps {
  headerTitle?: string
  headerSubtitle?: string
  size?: SidepanelSize
  height?: string | number
  hideHeader?: boolean
  position?: 'right'
  hasBackdrop?: boolean
  closeOutside?: boolean
  escapeClose?: boolean
  footerNoPadding?: boolean
  isExpandable?: boolean
  isExpanded?: boolean
  footerNoTopBorder?: boolean
  isLoading?: boolean
}

export interface SidepanelEmits {
  (e: 'close'): void
  (e: 'expand'): void
  (e: 'shrink'): void
}

export interface SidepanelSlots {
  default(props: {}): any
  header(props: {}): any
  subtitle(props: {}): any
  footer(props: {}): any
}
