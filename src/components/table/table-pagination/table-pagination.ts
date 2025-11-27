import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

// Current implem is backend, but we can add more types in the future
// No behavior is implemented for checking this for now
export const PAGINATION_TYPES = ['backend'] as const;

export const tablePaginationPropTypes = {
  /**
   * @description Toggle Search field,
   */
  selectedRowCount: {
    required: true,
    type: Number as PropType<number>,
    default: 10,
  },
  /**
   * @description Toggle Option button
   */
  totalItems: {
    required: true,
    type: Number as PropType<number>,
    default: 1,
  },
  /**
   * @description Toggle Option button
   */
  currentPage: {
    required: true,
    type: Number as PropType<number>,
    default: 1,
  },
  /**
   * @description Menu items
   */
  dropdownSelection: {
    type: Array as PropType<{ text: string; value: string }[]>,
    required: true,
    default: [
      { text: 10, value: 10 },
      { text: 20, value: 20 },
      { text: 50, value: 50 },
      { text: 100, value: 100 },
    ],
  },
  /**
   * @description Toggle Search field,
   */
  bordered: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  /**
   * @description Toggle editable state for current page input
   */
  editableCurrentPage: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  showNumberOfRowsDropdown: {
    type: Boolean as PropType<boolean>,
    default: true,
  }
};

export const tablePaginationEmitTypes = {
  'update:selectedRowCount': (value: number): value is number => typeof value === 'number',
  'update:currentPage': (value: number): value is number => typeof value === 'number',
  previous: () => true,
  next: () => true,
};

export type TablePaginationEmitTypes = typeof tablePaginationEmitTypes;
export type TablePaginationPropTypes = ExtractPropTypes<typeof tablePaginationPropTypes>;
