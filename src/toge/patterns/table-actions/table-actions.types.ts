export interface TableActionsProps {
  toggleSearch?: boolean
  toggleOption?: boolean
  toggleFilter?: boolean
  searchPlaceholder?: string
}

export interface TableActionsEmits {
  (e: 'update:searchModel', value: string): void
  (e: 'option-click'): void
  (e: 'filter-click'): void
}

export interface TableActionsSlots {
  tableActionSection(props: {}): any
}
