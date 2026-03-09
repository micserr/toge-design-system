export type ChipsSize = 'lg' | 'md' | 'sm'
export type ChipsTone = 'subtle' | 'default'
export type ChipsIconWeight = 'regular' | 'bold' | 'thin' | 'light' | 'fill' | 'duotone'
export type ChipsVariant = 'tag' | 'day'
export type ChipsDay = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'

export interface ChipsProps {
  label?: string
  size?: ChipsSize
  disabled?: boolean
  active?: boolean
  closable?: boolean
  avatarUrl?: string
  avatarVariant?: string
  avatarInitials?: string
  icon?: string
  iconWeight?: ChipsIconWeight
  closeIconSize?: number
  badge?: boolean
  badgeText?: string
  badgeVariant?: string
  removable?: boolean
  visible?: boolean
  variant?: ChipsVariant
  day?: ChipsDay
  tone?: ChipsTone
  ariaLabel?: string
}

export interface ChipsEmits {
  (e: 'close', evt: MouseEvent | KeyboardEvent): void
  (e: 'update', value: boolean): void
}
