import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

interface Header {
  field: string;
  name: string;
  sort: boolean;
  hasAvatar: boolean;
  hasSubtext: boolean;
  badgeText: string;
  badgeVariant: string;
}

interface TableData {
  [key: string]: {
    title: string;
    subtext?: string;
    image?: string;
  };
}

interface EmptyState {
  description: string;
  subDescription: string;
  image: string;
  size: 'small' | 'large';
}

interface TableActions {
  search: boolean;
  filter: boolean;
  option: boolean;
}

interface SortEvent {
  field: string;
  sortOrder: TABLE_SORT;
}

const TABLE_SORT = ['asc', 'desc'] as const;
const TABLE_VARIANT = ['surface', 'white'] as const;
export type TABLE_SORT = (typeof TABLE_SORT)[number];

export const tablePropTypes = {
  /**
   * @description Action Column,
   */
  action: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * @description Table Values
   */
  dataTable: {
    type: Array as PropType<TableData[]>,
    default: false,
  },
  /**
   * @description Table Headers
   */
  headers: {
    type: Array as PropType<Header[]>,
    required: true,
  },

  emptyState: {
    type: Object as PropType<EmptyState>,
    default: () => ({
      description: 'No results found',
      subDescription: 'Try a different search term',
      image: 'location',
      size: 'large',
    }),
  },
  loading: {
    type: Boolean as PropType<boolean>,
    default: false,
  },

  /**
   * @description Table Actions
   */
  tableActions: {
    type: Object as PropType<TableActions>,
    default: () => ({
      search: false,
      filter: false,
      option: false,
    }),
  },

  /**
   * @description Search variable
   *
   */
  searchModel: {
    type: String as PropType<string>,
    default: '',
  },

  sortOrder: {
    type: String as PropType<(typeof TABLE_SORT)[number]>,
    validator: (value: (typeof TABLE_SORT)[number]) => TABLE_SORT.includes(value),
  },

  variant: {
    type: String as PropType<(typeof TABLE_VARIANT)[number]>,
    validator: (value: (typeof TABLE_VARIANT)[number]) => TABLE_VARIANT.includes(value),
    default: 'surface',
  },

  isRowClickable: {
    type: Boolean as PropType<boolean>,
    default: false
  }
};

export const tableEmitTypes = {
  'update:searchModel': (value: string): value is string => typeof value === 'string',
  onSort: (value: SortEvent): value is SortEvent =>
    typeof value.field === 'string' && TABLE_SORT.includes(value.sortOrder),
  onRowClick: (rowData: TableData, rowKey: number): rowData is TableData =>
    typeof rowData === 'object' && typeof rowKey === 'number'
};

export type TablePropTypes = ExtractPropTypes<typeof tablePropTypes>;
export type TableEmitTypes = typeof tableEmitTypes;
