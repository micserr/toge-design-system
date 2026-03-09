import type { ExtractPropTypes, PropType } from 'vue';
import { buttonPropTypes } from '../button';
import type { MenuListType } from '@/components/list/list';
import { PLACEMENTS_TYPES } from '@/components/dropdown/dropdown';

const BUTTON_DROPDOWN_VARIANTS = ['primary', 'secondary'] as const;
const BUTTON_DROPDOWN_TONES = ['neutral', 'success'] as const;

export const buttonDropdownProps = {
  modelValue: {
    type: Array as PropType<MenuListType[] | string[] | Record<string, unknown>[]>,
    required: true,
    default: [],
  },
  ...buttonPropTypes, // Inherit button properties
  tone: {
    type: String as PropType<(typeof BUTTON_DROPDOWN_TONES)[number]>,
    validator: (value: (typeof BUTTON_DROPDOWN_TONES)[number]) => BUTTON_DROPDOWN_TONES.includes(value),
    default: 'neutral',
  },
  variant: {
    type: String as PropType<(typeof BUTTON_DROPDOWN_VARIANTS)[number]>,
    validator: (value: (typeof BUTTON_DROPDOWN_VARIANTS)[number]) => BUTTON_DROPDOWN_VARIANTS.includes(value),
    default: 'primary',
  },
  dropdownId: {
    type: String,
    required: true,
  },
  menuList: {
    type: Array as PropType<MenuListType[] | string[] | Record<string, unknown>[]>,
    required: true,
    default: [],
  },
  placement: {
    type: String as PropType<(typeof PLACEMENTS_TYPES)[number]>,
    validator: (value: (typeof PLACEMENTS_TYPES)[number]) => PLACEMENTS_TYPES.includes(value),
    default: 'bottom',
  },
  width: {
    type: String,
    default: 'fit-content',
  },
  popperWidth: {
    type: String,
    default: 'fit-content',
  },
  popperInnerWidth: {
    type: String,
    default: 'unset',
  },
};

export const buttonDropdownEmits = ['click', 'update:modelValue'];

export type ButtonDropdownPropTypes = ExtractPropTypes<typeof buttonDropdownProps>;
export type ButtonDropdownEmitTypes = typeof buttonDropdownEmits;
