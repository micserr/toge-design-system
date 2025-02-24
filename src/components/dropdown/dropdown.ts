import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const DROPDOWN_TYPES = ['single-select', 'multi-select'] as const;
const PLACEMENTS = [
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

export const dropdownPropTypes = {
  menu: {
    type: Array as PropType<{ text: string; value: string }[]>,
    required: true,
    default: [],
  },
  preSelectedItems: {
    type: Array,
    default: [],
  },
  dropdownType: {
    type: String,
    validator: (value: (typeof DROPDOWN_TYPES)[number]) => DROPDOWN_TYPES.includes(value),
    required: true,
    default: 'single-select',
  },
  placement: {
    type: String,
    validator: (value: (typeof PLACEMENTS)[number]) => PLACEMENTS.includes(value),
    default: 'bottom',
  },
  menuOpened: {
    type: Boolean,
    default: false,
  },
};

export const dropdownEmitTypes = {
  'get-selected-item': Object,
  'get-popper-state': Boolean,
};

export type DropdownPropTypes = ExtractPropTypes<typeof dropdownPropTypes>;
export type DropdownEmitTypes = typeof dropdownEmitTypes;
