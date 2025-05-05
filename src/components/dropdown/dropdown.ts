import type { PropType, ExtractPropTypes } from 'vue';
import type { MenuListType } from '../list/list';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const GROUPED_ITEMS_BY_TYPES = ['A-Z', 'Z-A'] as const;

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

const POPPER_STRATEGY_TYPES = ['fixed', 'absolute'] as const;

export const dropdownPropTypes = {
  id: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  menuList: {
    type: Array as PropType<MenuListType[]>,
    required: true,
    default: [],
  },
  searchString: {
    type: String,
    default: '',
  },
  multiSelect: {
    type: Boolean,
    default: false,
  },
  placement: {
    type: String as PropType<(typeof PLACEMENTS_TYPES)[number]>,
    validator: (value: (typeof PLACEMENTS_TYPES)[number]) => PLACEMENTS_TYPES.includes(value),
    default: 'bottom',
  },
  groupItemsBy: {
    type: String as PropType<(typeof GROUPED_ITEMS_BY_TYPES)[number]>,
    validator: (value: (typeof GROUPED_ITEMS_BY_TYPES)[number] | undefined) => {
      return value === undefined || GROUPED_ITEMS_BY_TYPES.includes(value);
    },
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
  popperStrategy: {
    type: String,
    validator: (value: 'fixed' | 'absolute') => POPPER_STRATEGY_TYPES.includes(value),
    default: 'absolute',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  ladderized: {
    type: Boolean,
    default: false,
  },
  removeCurrentLevelInBackLabel: {
    type: Boolean,
    default: false,
  }
};

export const dropdownEmitTypes = {
  'infinite-scroll-trigger': Boolean,
  'update:modelValue': (value: string[]) => value,
};

export type DropdownPropTypes = ExtractPropTypes<typeof dropdownPropTypes>;
export type DropdownEmitTypes = typeof dropdownEmitTypes;
