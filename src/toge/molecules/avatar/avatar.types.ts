export type AvatarSize = '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | '2xs'
export type AvatarColor = 'primary' | 'secondary' | 'tertiary'
export type AvatarStatus = 'danger' | 'disabled' | 'information' | 'brand'
export type AvatarVariant = 'image' | 'initial' | 'client' | 'user' | 'user-group' | 'count'

export interface AvatarProps {
  src?: string
  alt?: string
  badge?: boolean
  size?: AvatarSize
  initial?: string
  color?: AvatarColor
  status?: AvatarStatus
  count?: number
  variant?: AvatarVariant
  loading?: boolean
  ariaLabel?: string
}

export interface AvatarEmits {
  (e: 'image-error', error: boolean): void
}
