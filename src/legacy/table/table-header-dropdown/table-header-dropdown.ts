import type { MenuListType } from '@/components/list/list';
import { type PropType, type ExtractPropTypes, ref } from 'vue';
import type { Header } from '../table';
export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const defaultSortOptions = ref([
  { text: 'Sort Ascending', value: 'asc', icon: 'ph:sort-ascending', iconColor: 'spr-text-color-supporting' },
  { text: 'Sort Descending', value: 'desc', icon: 'ph:sort-descending', iconColor: 'spr-text-color-supporting' },
]);

export const tableHeaderDropdownPropTypes = {
  id: {
    type: String,
    required: true,
  },
  header: {
    type: Object as PropType<Header>,
    default: () => ({}),
  },
  isSortable: {
    type: Boolean,
    default: true,
  },
  headerClasses: {
    type: String,
    default: '',
  },
  sortOptions: {
    type: Array as PropType<MenuListType[]>,
    default: () => defaultSortOptions.value,
  },
  hasSelectAll: {
    type: Boolean,
    default: true,
  }
};

export interface TableHeaderFilterType {
  headerField: string;
  sortBy: 'asc' | 'desc' | null;
  appliedFilters: Record<string, string>;
};

export const tableHeaderDropdownEmitTypes = {
  onApplyFilter: (filter: TableHeaderFilterType) => !!filter,
  onSelectAll: () => true,
  'update:selectedSort': (selectedSort: MenuListType[]) => Array.isArray(selectedSort),
  'update:selectedFilters': (selectedFilters: MenuListType[]) => Array.isArray(selectedFilters),
};

export type TableHeaderDropdownPropTypes = ExtractPropTypes<typeof tableHeaderDropdownPropTypes>;
export type TableHeaderDropdownEmitTypes = typeof tableHeaderDropdownEmitTypes;
