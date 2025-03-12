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
    default: '',
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

  refreshing: {
    type: Boolean,
    default: false,
  },

  search: {
    type: String,
    default: '',
  },
};

export interface FilterPropsInterface {
  optionDetails: { isSelected: boolean; text: string; value: string; column?: string; subtext?: string };
  options: Array<FilterPropsInterface['optionDetails']>;
  filterDetails: { isFilterVisible?: boolean; columnName: string; field: string; count?: number; selected?: object };
  filterMenu: Array<FilterPropsInterface['filterDetails']>;
}

export const filterEmitTypes = {
  getFilterData: null,
  'update:modelValue': (value: FilterPropsInterface['options']): value is FilterPropsInterface['options'] =>
    Array.isArray(value),
  'update:search': (value: string) => typeof value === 'string',
  selectedFilter: null,
};
export type FilterEmitTypes = typeof filterEmitTypes;
export type FilterPropTypes = ExtractPropTypes<typeof filterPropTypes>;
