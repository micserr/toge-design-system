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
  removeCurrentLevelInBackLabel: {
    type: Boolean,
    default: false,
  }
};

export const ladderizedListEmitTypes = {
  'update:modelValue': (value: string[]) => value,
};

export type LadderizedListPropTypes = ExtractPropTypes<typeof ladderizedListPropTypes>;
export type LadderizedListEmitTypes = typeof ladderizedListEmitTypes;
