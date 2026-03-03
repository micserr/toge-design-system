export interface TablePaginationProps {
  totalItems: number
  currentPage?: number
  itemsPerPage?: number
  itemsPerPageOptions?: number[]
  selectedRowCount?: number
  showRowCount?: boolean
}

export interface TablePaginationEmits {
  (e: 'update:currentPage', page: number): void
  (e: 'update:itemsPerPage', perPage: number): void
  (e: 'page-change', page: number): void
}

export interface TablePaginationSlots {
  actions(props: {}): any
}
