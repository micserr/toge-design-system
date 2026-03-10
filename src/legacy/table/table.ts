import type { PropType, ExtractPropTypes } from 'vue';
import type { ChipTitle } from '@/legacy/table/table-chips-title/table-chips-title';
import type { LozengeTitle } from '@/legacy/table/table-lozenge-title/table-lozenge-title';
import { type SortableEvent } from 'sortablejs';
import type { MenuListType } from '../list/list';
import type { TableHeaderFilterType } from './table-header-dropdown/table-header-dropdown';
export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

export interface Header {
  field: string;
  name: string;
  sort?: boolean;
  hasAvatar?: boolean;
  hasIcon?: boolean;
  hasSubtext?: boolean;
  hasLozengeTitle?: boolean;
  hasChipTitle?: boolean;
  badgeText?: string;
  badgeVariant?: string;
  avatarVariant?: string;
  customTailwindClasses?: string;
  width?: string;
  filterList?: MenuListType[]; // List of filter options for table header dropdown
  hasSelectAll?: boolean; // Option to show select all button in header dropdown
}

export interface TableData {
  [key: string]: TableDataProps | string | number;
}

export interface TableDataProps {
  title: string | LozengeTitle | ChipTitle | LozengeTitle[] | ChipTitle[];
  subtext?: string;
  image?: string;
  icon?: string;
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

interface DragOnChangeEvent {
  element: TableData;
  updatedList: TableData[];
}

export interface DragOnAddEvent extends DragOnChangeEvent {
  newIndex: number;
}

export interface DragOnRemoveEvent extends DragOnChangeEvent {
  oldIndex: number;
}

export interface SortableDragEvent extends SortableEvent {
  originalEvent: DragEvent;
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
    default: () => [],
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
  emptyStateCustomClasses: {
    type: String,
    default: '',
  },
  tableActionSlotCustomClasses: {
    type: String,
    default: '',
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
    default: 'asc',
  },

  variant: {
    type: String as PropType<(typeof TABLE_VARIANT)[number]>,
    validator: (value: (typeof TABLE_VARIANT)[number]) => TABLE_VARIANT.includes(value),
    default: 'surface',
  },

  isRowClickable: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  fullHeight: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  removeHeaderOnEmpty: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  isMultiSelect: {
    type: Boolean,
    default: false,
  },
  selectedKeyId: {
    type: String,
    default: '',
  },
  returnCompleteSelectedProperties: {
    type: Boolean,
    default: false,
  },
  allowSelfDrag: {
    type: Boolean,
    default: false,
  },
  isDraggable: {
    type: Boolean,
    default: false,
  },
  retainSelectionOnDataChange: {
    type: Boolean,
    default: false,
  },
  showHeaderFilter: {
    type: Boolean, 
    default: false,
  },
  id: {
    type: String,
    default: 'spr-table',
  }
};

export const tableEmitTypes = {
  'update:searchModel': (value: string): value is string => typeof value === 'string',
  onSort: (value: SortEvent): value is SortEvent =>
    typeof value.field === 'string' && TABLE_SORT.includes(value.sortOrder),
  onRowClick: (rowData: TableData, rowKey: number): rowData is TableData =>
    typeof rowData === 'object' && typeof rowKey === 'number',
  onHover: (value: { active: boolean; data: TableData }): value is { active: boolean; data: TableData } =>
    typeof value.active === 'boolean' && typeof value.data === 'object',
  'update:selectedData': (value: (string | number | TableDataProps)[] | TableData[]) =>
    Array.isArray(value) &&
    value.every(
      (item) => (typeof item === 'object' || typeof item === 'string' || typeof item === 'number') && item !== null,
    ),
  onDragAdd: (event: DragOnAddEvent): event is DragOnAddEvent =>
    event !== undefined && Array.isArray(event.updatedList),
  onDragRemove: (event: DragOnRemoveEvent): event is DragOnRemoveEvent =>
    event !== undefined && Array.isArray(event.updatedList),
  onApplyFilter: (filter: TableHeaderFilterType) => !!filter,
};

export type TablePropTypes = ExtractPropTypes<typeof tablePropTypes>;
export type TableEmitTypes = typeof tableEmitTypes;
