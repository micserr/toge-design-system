import type { BadgeVariant, BadgeSize, BadgePosition } from '../badge/badge.types'
import type { LozengeTone } from '../lozenge/lozenge.types'

export type TableCellType = 'chip' | 'lozenge' | 'badge' | 'text'

export interface ChipCellData {
  type: 'chip'
  title: string
  icon?: string
  iconWeight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
  badge?: boolean
  badgeText?: string
  badgeVariant?: string
  avatarUrl?: string
  avatarVariant?: string
}

export interface LozengeCellData {
  type: 'lozenge'
  title: string
  fill?: boolean
  avatarUrl?: string
  tone?: LozengeTone
  icon?: string
}

export interface BadgeCellData {
  type: 'badge'
  text?: string
  variant?: BadgeVariant
  size?: BadgeSize
  position?: BadgePosition
}

export interface TextCellData {
  type: 'text'
  value: string
}

export type TableCellData = ChipCellData | LozengeCellData | BadgeCellData | TextCellData

export interface TableCellProps {
  cell: TableCellData
}
