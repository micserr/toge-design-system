export type ChipTone = 'default' | 'subtle'
export type ChipSize = 'sm' | 'md' | 'lg'
export type ChipVariant = 'tag' | 'day'

export interface ChipProps {
  label?: string
  icon?: string
  iconWeight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
  size?: ChipSize
  tone?: ChipTone
  variant?: ChipVariant
  disabled?: boolean
  active?: boolean
  closable?: boolean
}

export interface ChipEmits {
  'click': [event: MouseEvent]
  'close': []
}

export interface ChipSlots {
  default(props: {}): any
}
