import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const GROUPED_ITEMS_BY_TYPES = ['A-Z', 'Z-A'] as const;

export const listPropTypes = {
  modelValue: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  menuList: {
    type: Array as PropType<{ text: string; value: string }[]>,
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
};

export const listEmitTypes = {
  'get-selected-item': Object,
};

export type ListPropTypes = ExtractPropTypes<typeof listPropTypes>;
export type ListEmitTypes = typeof listEmitTypes;
