import type { PropType, ExtractPropTypes } from 'vue';
import { MenuListType } from '../list';
export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

export type LadderizedListOutputType = {
  text: string;          // Text to display
  value: string[];        // Array of value text
};


export const ladderizedListPropTypes = {
  modelValue: {
    type: Object as PropType<LadderizedListOutputType>,
    required: true,
    default: () => ({text: "", value: []}),
  },
  menuList: {
    type: Array as PropType<MenuListType[]>,
    required: true,
    default: [],
  },
};

export const ladderizedListEmitTypes = {
  'update:modelValue': (value: MenuListType[]) => value,
};

export type LadderizedListPropTypes = ExtractPropTypes<typeof ladderizedListPropTypes>;
export type LadderizedListEmitTypes = typeof ladderizedListEmitTypes;
