// Root table wrapper
export { default as TogeTable } from './table.vue'
export type { TableRootProps, SortOrder } from './table.types'
export { getTableRootClasses } from './table.styles'
export type { TableRootStyleProps } from './table.styles'

// Structural wrappers
export { default as TogeTableHeader } from './header/header.vue'
export { default as TogeTableBody } from './body/body.vue'
export { default as TogeTableFooter } from './footer/footer.vue'

// Caption
export { default as TogeTableCaption } from './caption/caption.vue'
export type { CaptionProps, CaptionPosition } from './caption/caption.types'

// Row
export { default as TogeTableRow } from './row/row.vue'
export type { RowProps, RowEmits } from './row/row.types'

// Head (th)
export { default as TogeTableHead } from './head/head.vue'
export type { HeadProps, HeadEmits, HeadAlign } from './head/head.types'

// Cell (td)
export { default as TogeTableCell } from './cell/cell.vue'
export type {
  CellProps,
  CellSlots,
  CellAlign,
  TableCellData,
  ChipCellData,
  LozengeCellData,
  BadgeCellData,
  TextCellData,
} from './cell/cell.types'
