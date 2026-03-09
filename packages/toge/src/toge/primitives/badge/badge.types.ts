export type BadgeVariant = 'neutral' | 'danger' | 'disabled' | 'information' | 'brand'
export type BadgeSize = 'small' | 'big' | 'tiny'
export type BadgePosition = 'top' | 'bottom' | 'default'

export interface BadgeProps {
  text?: string
  variant?: BadgeVariant
  size?: BadgeSize
  position?: BadgePosition
}
