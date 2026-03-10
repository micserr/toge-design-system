export type ChipsSize = 'lg' | 'md' | 'sm'
export type ChipsTone = 'subtle' | 'default'
export type ChipsIconWeight = 'regular' | 'bold' | 'thin' | 'light' | 'fill' | 'duotone'

export interface ChipsProps {
  label?: string
  size?: ChipsSize
  tone?: ChipsTone
  disabled?: boolean
  closable?: boolean
  avatar?: boolean
  avatarSize?: '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | '2xs'
  avatarUrl?: string
  avatarInitials?: string
  icon?: string
  iconWeight?: ChipsIconWeight
  badge?: boolean
  badgeText?: string
  visible?: boolean
  ariaLabel?: string
}

export interface ChipsEmits {
  (e: 'close', evt: MouseEvent | KeyboardEvent): void
  (e: 'update', value: boolean): void
}
