export type CardBorderRadius = 'xl' | 'lg' | 'md' | 'sm' | 'xs' | '2xs'

export interface CardProps {
  id?: string
  showHeader?: boolean
  title?: string
  subtitle?: string
  headerIcon?: string
  showFooter?: boolean
  primaryLabel?: string
  secondaryLabel?: string
  borderRadiusSize?: CardBorderRadius
  flexbox?: boolean
}

export interface CardEmits {
  (e: 'primary'): void
  (e: 'secondary'): void
}
