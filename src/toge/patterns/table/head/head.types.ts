import type { SortOrder } from '../table.types'

export type HeadAlign = 'left' | 'center' | 'right'

export interface HeadProps {
  align?: HeadAlign
  sort?: boolean
  sortOrder?: SortOrder
  active?: boolean
  sticky?: boolean
  stickyPosition?: string
  width?: string
  colspan?: number
}

export interface HeadEmits {
  'sort': []
}
