import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

export const filterPropTypes = {
  modelValue: {
    type: [Array, String],
    default: () => [],
  },
  options: {
    type: Array as PropType<FilterPropsInterface['options']>,
    required: true,
    default: () => [],
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  filterable: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: 'spr-filter',
  },
  filterMenu: {
    type: Array as PropType<FilterPropsInterface['filterMenu']>,
    default: () => [],
  },
  filterData: {
    type: Array as PropType<FilterPropsInterface['options']>,
    default: () => [],
  },

  loading: {
    type: Boolean,
    default: false,
  },
  filling: {
    type: Boolean,
    default: false,
  },
  search: {
    type: String,
    default: '',
  },
  searchFilter: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '100%',
  },
  deselected: {
    type: String,
    default: '',
  },
  hasSearchApi: {
    type: Boolean,
    default: false,
  },
  hasAvatar: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  helperText: {
    type: String,
    default: '',
  },
  hasAdvancedFilterApi: {
    type: Boolean,
    default: false,
  },
};

export interface FilterPropsInterface {
  optionDetails: {
    isSelected: boolean;
    text: string;
    value: string;
    column?: string;
    subtext?: string;
    avatar?: string;
  };
  options: Array<FilterPropsInterface['optionDetails']>;
  filterDetails: { isFilterVisible?: boolean; columnName: string; field: string; count?: number; selected?: object };
  filterMenu: Array<FilterPropsInterface['filterDetails']>;
}

export const filterEmitTypes = {
  getFilterData: (value: string) => typeof value === 'string',
  'update:modelValue': (value: FilterPropsInterface['options']): value is FilterPropsInterface['options'] =>
    Array.isArray(value),
  'update:search': (value: string) => typeof value === 'string',
  'update:searchFilter': (value: string) => typeof value === 'string',
  selectedFilter: (value: FilterPropsInterface['options']): value is FilterPropsInterface['options'] =>
    Array.isArray(value),
  infiniteScrollTrigger: Boolean,
  infiniteScrollFilterTrigger: (value: string) => typeof value === 'string',
};
export type FilterEmitTypes = typeof filterEmitTypes;
export type FilterPropTypes = ExtractPropTypes<typeof filterPropTypes>;
