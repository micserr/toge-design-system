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

const TABLE_SORT = ['asc', 'desc'] as const;

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

  sortOrder: {
    type: String as PropType<(typeof TABLE_SORT)[number]>,
    validator: (value: (typeof TABLE_SORT)[number]) => TABLE_SORT.includes(value),
    default: 'asc',
  },
};

export const tableEmitTypes = ['onSort'];
export type TablePropTypes = ExtractPropTypes<typeof tablePropTypes>;
export type TableEmitTypes = typeof tableEmitTypes;
