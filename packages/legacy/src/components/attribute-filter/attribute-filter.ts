import type { PropType, ExtractPropTypes } from 'vue';
import type { MenuListType } from '../list/list';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;
const TRIGGER_EVENTS = ['click', 'hover', 'focus', 'touch'] as const;
const POPPER_STRATEGY_TYPES = ['fixed', 'absolute'] as const;
const PLACEMENTS_TYPES = [
  'auto',
  'auto-start',
  'auto-end',
  'top',
  'top-start',
  'top-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
] as const;

export const attributeFilterPropTypes = {
  id: {
    type: String,
    default: 'attribute_filter',
  },
  filterLabel: {
    type: String,
    default: 'Filter',
  },
  headerLabel: {
    type: String,
    default: 'Add Filter',
  },
  triggers: {
    type: Array as PropType<(typeof TRIGGER_EVENTS)[number][]>,
    validator: (value: (typeof TRIGGER_EVENTS)[number][]) => {
      return value.every((val) => TRIGGER_EVENTS.includes(val));
    },
    default: () => [],
  },
  popperTriggers: {
    type: Array as PropType<(typeof TRIGGER_EVENTS)[number][]>,
    validator: (value: (typeof TRIGGER_EVENTS)[number][]) => {
      return value.every((val) => TRIGGER_EVENTS.includes(val));
    },
    default: () => [],
  },
  autoHide: {
    type: Boolean,
    default: true,
  },
  popperStrategy: {
    type: String,
    validator: (value: 'fixed' | 'absolute') => POPPER_STRATEGY_TYPES.includes(value),
    default: 'absolute',
  },
  distance: {
    type: Number,
    default: 6,
  },
  placement: {
    type: String as PropType<(typeof PLACEMENTS_TYPES)[number]>,
    validator: (value: (typeof PLACEMENTS_TYPES)[number]) => PLACEMENTS_TYPES.includes(value),
    default: 'bottom',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  wrapperPosition: {
    type: String,
    default: 'relative',
  },
  width: {
    type: String,
    default: '100%',
  },
  popperWidth: {
    type: String,
    default: '100%',
  },
  popperInnerWidth: {
    type: String,
    default: 'unset',
  },
  searchable: {
    type: Boolean,
    default: false,
  },
  multiselect: {
    type: Boolean,
    default: false,
  },
  filterMenuList: {
    type: Array as PropType<MenuListType[] | string[]>,
    default: [],
  },
  disableLocalSearch: {
    type: Boolean,
    default: false,
  },
  showSelectedFilterCount: {
    type: Boolean,
    default: true,
  },
  selectedFilterCount: {
    type: String,
    default: undefined,
  },
  badgeVariant: {
    type: String,
    default: 'danger',
  },
  noList: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: true,
  }
};

export const attributeFilterEmitTypes = {
  onSaveFilter: (savedFilters: MenuListType[]) => Array.isArray(savedFilters),
  onCloseFilter: () => true,
  onOpenFilter: () => true,
  onSelectFilter: (selectedFilters: MenuListType[]) => Array.isArray(selectedFilters),
  infiniteScrollTrigger: () => true,
  onClearFilter: () => true,
};

export type AttributeFilterPropTypes = ExtractPropTypes<typeof attributeFilterPropTypes>;
export type AttributeFilterEmitTypes = typeof attributeFilterEmitTypes;
