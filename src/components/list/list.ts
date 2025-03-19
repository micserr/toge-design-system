import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const GROUPED_ITEMS_BY_TYPES = ['A-Z', 'Z-A', 'default'] as const;

export type MenuListType = {
  text: string;
  value: string | number;
  sublevel?: MenuListType[];
  group?: string;
};

export type GroupedMenuListType = {
  groupLabel: string;
  items: MenuListType[];
}

export const listPropTypes = {
  modelValue: {
    type: Array as PropType<MenuListType[]>,
    default: () => [],
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
  preSelectedItems: {
    type: Array as PropType<String[]>,
    default: () => [],
  },
  ladderized: {
    type: Boolean,
    default: false,
  }
};

export const listEmitTypes = {
  'update:modelValue': (value: MenuListType[]) => value,
};

export type ListPropTypes = ExtractPropTypes<typeof listPropTypes>;
export type ListEmitTypes = typeof listEmitTypes;
