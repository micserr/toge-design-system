export type CardTone = 'plain' | 'neutral' | 'success' | 'information' | 'pending' | 'caution' | 'accent' | 'danger'
export type CardBorderRadius = 'xl' | 'lg' | 'md' | 'sm' | 'xs' | '2xs'

export interface CardProps {
  id?: string
  tone?: CardTone
  title?: string
  subtitle?: string
  headerIcon?: string
  showHeader?: boolean
  showFooter?: boolean
  borderRadiusSize?: CardBorderRadius
  hasCollapsible?: boolean
  isCollapsibleOpen?: boolean
  hasContentPadding?: boolean
  flexbox?: boolean
}

export interface CardEmits {
  (e: 'toggle', isOpen: boolean): void
}
