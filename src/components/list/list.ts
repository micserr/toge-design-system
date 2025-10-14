import type { PropType, ExtractPropTypes } from 'vue';
import type { LozengePropTypes } from '../lozenge/lozenge';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const GROUPED_ITEMS_BY_TYPES = ['A-Z', 'Z-A', 'default'] as const;

export type MenuListType = {
  text: string;
  subtext?: string;
  value: string | number; // Allow both string and number values
  subvalue?: string;
  sublevel?: MenuListType[];
  group?: string;
  disabled?: boolean;
  _originalObject?: Record<string, unknown>; // Store original object reference when mapping complex objects
  icon?: string; // String value for Iconify
  iconColor?: string;
  textColor?: string;
  lozengeProps?: LozengePropTypes; // Props for the lozenge component when list is displayed as lozenge
  onClickFn?: () => void;
};

export type GroupedMenuListType = {
  groupLabel: string;
  items: MenuListType[];
};

export const listPropTypes = {
  modelValue: {
    type: Array as PropType<MenuListType[]>,
    default: [],
  },
  searchValue: {
    type: String,
    default: '',
  },
  menuList: {
    type: Array as PropType<MenuListType[]>,
    required: true,
    default: [],
  },
  groupItemsBy: {
    type: String as PropType<(typeof GROUPED_ITEMS_BY_TYPES)[number]>,
    validator: (value: (typeof GROUPED_ITEMS_BY_TYPES)[number] | undefined) => {
      return value === undefined || GROUPED_ITEMS_BY_TYPES.includes(value);
    },
  },
  multiSelect: {
    type: Boolean,
    default: false,
  },
  menuLevel: {
    type: Number,
    default: 0,
  },
  searchableMenu: {
    type: Boolean,
    default: false,
  },
  searchableMenuPlaceholder: {
    type: String,
    default: 'Search...',
  },
  preSelectedItems: {
    type: Array as PropType<(string | number | Record<string, unknown>)[]>,
    default: () => [],
  },
  ladderized: {
    type: Boolean,
    default: false,
  },
  disabledLocalSearch: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  noCheck: {
    type: Boolean,
    default: false,
  },
  dropdown: {
    type: Boolean,
    default: false,
  },
  lozenge: {
    type: Boolean,
    default: false,
  },
  stickySearchOffset: {
    type: [String, Number] as PropType<string | number>,
    default: 0,
  },
};

export const listEmitTypes = {
  'update:modelValue': (value: MenuListType[]) => value,
  'update:searchValue': (value: string) => typeof value === 'string',
};

export type ListPropTypes = ExtractPropTypes<typeof listPropTypes>;
export type ListEmitTypes = typeof listEmitTypes;
