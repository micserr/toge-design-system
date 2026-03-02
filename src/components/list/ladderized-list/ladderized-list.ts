import type { PropType, ExtractPropTypes } from 'vue';
import { MenuListType } from '../list';
export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

export const ladderizedListPropTypes = {
  modelValue: {
    type: Array as PropType<string[]>,
    required: true,
    default: [],
  },
  menuList: {
    type: Array as PropType<MenuListType[]>,
    required: true,
    default: [],
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
  removeCurrentLevelInBackLabel: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  infiniteScrollLoader: {
    type: Boolean,
    default: false,
  },
};

export const ladderizedListEmitTypes = {
  'update:modelValue': (value: string[]) => value,
};

export type LadderizedListPropTypes = ExtractPropTypes<typeof ladderizedListPropTypes>;
export type LadderizedListEmitTypes = typeof ladderizedListEmitTypes;
