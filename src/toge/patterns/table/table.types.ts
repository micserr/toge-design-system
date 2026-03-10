/** Shared sort order type — used by TogeTableHead */
export type SortOrder = 'asc' | 'desc' | null

/** Props for the root TogeTable wrapper */
export interface TableRootProps {
  id?: string
  bordered?: boolean
}
