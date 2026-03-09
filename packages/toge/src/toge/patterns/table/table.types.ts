export type SortOrder = 'asc' | 'desc' | null

export interface TableHeader {
  name: string
  field: string
  sort?: boolean
  width?: string
  align?: 'left' | 'center' | 'right'
  sticky?: boolean
  stickyPosition?: string
  badgeText?: string
  badgeVariant?: string
}

export interface TableProps<T extends Record<string, unknown> = Record<string, unknown>> {
  id?: string
  headers: TableHeader[]
  tableData: T[]
  loading?: boolean
  isMultiSelect?: boolean
  selectedRows?: T[]
  sortField?: string
  sortOrder?: SortOrder
  emptyText?: string
  removeHeaderOnEmpty?: boolean
  striped?: boolean
  hoverable?: boolean
  bordered?: boolean
  dense?: boolean
  stickyHeader?: boolean
}

export interface TableEmits<T extends Record<string, unknown> = Record<string, unknown>> {
  'sort-change': [field: string, order: SortOrder]
  'row-select': [row: T, selected: boolean]
  'select-all': [selected: boolean]
  'row-click': [row: T]
  'update:selectedRows': [rows: T[]]
}

export interface TableSlots<T extends Record<string, unknown> = Record<string, unknown>> {
  default(props: {}): any
  tableActionSection(props: {}): any
  cell(props: { row: T; header: TableHeader; value: unknown }): any
  empty(props: {}): any
}
