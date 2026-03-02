import type { PropType, ExtractPropTypes } from 'vue';
import type { MenuListType } from '../list/list';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const GROUPED_ITEMS_BY_TYPES = ['A-Z', 'Z-A'] as const;

export const PLACEMENTS_TYPES = [
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
const TRIGGER_EVENTS = ['click', 'hover', 'focus', 'touch'] as const;

export const dropdownPropTypes = {
  id: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number, Object, Array] as PropType<
      string | number | Record<string, unknown> | (string | number | Record<string, unknown>)[]
    >,
    default: () => [],
  },
  menuList: {
    type: Array as PropType<MenuListType[] | string[] | Record<string, unknown>[]>,
    default: () => [],
  },
  searchableMenu: {
    type: Boolean,
    default: false,
  },
  textField: {
    type: String,
    default: 'text',
    description: 'Field name to use for display text when using dynamic object arrays',
  },
  valueField: {
    type: String,
    default: 'value',
    description: 'Field name to use for value when using dynamic object arrays',
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
  distance: {
    type: Number,
    default: 6,
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
  autoHide: {
    type: Boolean,
    default: true,
  },
  triggers: {
    type: Array as PropType<(typeof TRIGGER_EVENTS)[number][]>,
    validator: (value: (typeof TRIGGER_EVENTS)[number][]) => {
      return value.every((val) => TRIGGER_EVENTS.includes(val));
    },
    default: () => ['click'],
  },
  popperTriggers: {
    type: Array as PropType<(typeof TRIGGER_EVENTS)[number][]>,
    validator: (value: (typeof TRIGGER_EVENTS)[number][]) => {
      return value.every((val) => TRIGGER_EVENTS.includes(val));
    },
    default: () => [],
  },
  popperStrategy: {
    type: String,
    validator: (value: 'fixed' | 'absolute') => POPPER_STRATEGY_TYPES.includes(value),
    default: 'absolute',
  },
  popperWidth: {
    type: String,
    default: '100%',
  },
  popperInnerWidth: {
    type: String,
    default: 'unset',
  },
  popperContainer: {
    type: String,
    default: '',
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
  },
  noCheckInList: {
    type: Boolean,
    default: false,
  },
  lozenge: {
    type: Boolean,
    default: false,
  },
  noPadding: {
    type: Boolean,
    default: false,
  }
};

export const dropdownEmitTypes = {
  'infinite-scroll-trigger': (value: boolean) => typeof value === 'boolean',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  'update:modelValue': (_value: unknown) => true, // Accept any type of value
  'popper-state': (state: boolean) => typeof state === 'boolean',
};

export type DropdownPropTypes = ExtractPropTypes<typeof dropdownPropTypes>;
export type DropdownEmitTypes = typeof dropdownEmitTypes;
