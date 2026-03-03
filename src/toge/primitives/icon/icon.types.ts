export type IconSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type IconTone = 'success' | 'error' | 'info' | 'pending' | 'caution'
export type IconVariant = 'primary' | 'secondary' | 'tertiary'

export interface IconProps {
  /** Accessible id forwarded to the underlying Iconify Icon element */
  id?: string
  /** Iconify icon name, e.g. "ph:check" */
  icon: string
  size?: IconSize
  tone?: IconTone
  variant?: IconVariant
  /** Set to false to make icon non-decorative (removes aria-hidden) */
  ariaHidden?: boolean
}
