import type { PropType, ExtractPropTypes } from 'vue';
import type { MenuListType } from '../../list/list';

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
const TRIGGER_EVENTS = ['click', 'hover', 'focus', 'touch'] as const;

export const multiSelectPropTypes = {
  id: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Array as PropType<(string | number | Record<string, unknown>)[]>,
    default: () => [],
  },
  searchValue: {
    type: String,
    default: '',
  },
  options: {
    type: Array as PropType<MenuListType[] | string[] | Record<string, unknown>[]>,
    required: true,
    default: [],
  },
  groupItemsBy: {
    type: String as PropType<(typeof GROUPED_ITEMS_BY_TYPES)[number]>,
    validator: (value: (typeof GROUPED_ITEMS_BY_TYPES)[number] | undefined) => {
      return value === undefined || GROUPED_ITEMS_BY_TYPES.includes(value);
    },
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
  placeholder: {
    type: String,
  },
  label: {
    type: String,
    default: '',
  },
  supportingLabel: {
    type: String,
    default: '',
  },
  inputLoader: {
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
  triggers: {
    type: Array as PropType<(typeof TRIGGER_EVENTS)[number][]>,
    validator: (value: (typeof TRIGGER_EVENTS)[number][]) => {
      return value.every((val) => TRIGGER_EVENTS.includes(val));
    },
    default: () => [],
  },
  autoHide: {
    type: Boolean,
    default: false,
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
  popperContainer: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '100%',
  },
  wrapperPosition: {
    type: String,
    default: 'relative',
  },
  displayText: {
    type: String,
    default: '',
  },
  supportingDisplayText: {
    type: String,
    default: '',
  },
  persistentDisplayText: {
    type: Boolean,
    default: false,
  },
  displaySelectedCountOnly: {
    type: Boolean,
    default: false,
  },
  displayListItemSelected: {
    type: Boolean,
    default: false,
  },
  displayHelper: {
    type: Boolean,
    default: false,
  },
  helperIcon: {
    type: String,
    default: null,
  },
  helperText: {
    type: String,
    default: '',
  },
  active: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  chipped: {
    type: Boolean,
    default: false,
  },
  searchable: {
    type: Boolean,
    default: false,
  },
  disabledLocalSearch: {
    type: Boolean,
    default: false,
  },
  optionsLoader: {
    type: Boolean,
    default: false,
  },
  infiniteScrollLoader: {
    type: Boolean,
    default: false,
  },
  lozenge: {
    type: Boolean,
    default: false,
  },
  itemIcon: {
    type: String,
    default: '',
  },
  disabledUnselectedItems: {
    type: Boolean,
    default: false,
  },

  // Deprecated alias - kept for backward compatibility
  loading: {
    type: Boolean,
    default: false,
  },
  allowSelectAll: {
    type: Boolean,
    default: false,
  },
  avatarVariant: {
    type: String,
    default: '',
  },
  avatarSource: {
    type: String,
    default: '',
  },
};

export const multiSelectEmitTypes = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  'update:modelValue': (_value: unknown) => true,
  'update:searchValue': (value: string) => typeof value === 'string',
  'search-string': (value: string) => typeof value === 'string',
  'infinite-scroll-trigger': Boolean,
  'popper-state': Boolean,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  'get-selected-options': (_value: unknown) => true,
  'get-single-selected-item': (item: MenuListType) => item,
};

export type MultiSelectPropTypes = ExtractPropTypes<typeof multiSelectPropTypes>;
export type MultiSelectEmitTypes = typeof multiSelectEmitTypes;
