import type { BadgeVariant, BadgeSize, BadgePosition } from '../../../primitives/badge/badge.types'
import type { LozengeTone } from '../../../primitives/lozenge/lozenge.types'

export interface ChipCellData {
  type: 'chip'
  label: string
  icon?: string
  iconWeight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
}

export interface LozengeCellData {
  type: 'lozenge'
  label: string
  tone?: LozengeTone
  fill?: boolean
  icon?: string
  url?: string
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

export type CellAlign = 'left' | 'center' | 'right'

export interface CellProps {
  /** Typed shortcut for built-in cell renderers. Omit to use the default slot instead. */
  cell?: TableCellData
  align?: CellAlign
  colspan?: number
  sticky?: boolean
  stickyPosition?: string
}

export interface CellSlots {
  /** Override built-in rendering with any primitive or custom content. */
  default(props: {}): unknown
}
