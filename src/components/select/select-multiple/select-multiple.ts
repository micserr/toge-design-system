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

export const multiSelectPropTypes = {
  id: {
    type: String,
    required: true,
    default: 'multi-select',
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
  placement: {
    type: String as PropType<(typeof PLACEMENTS_TYPES)[number]>,
    validator: (value: (typeof PLACEMENTS_TYPES)[number]) => PLACEMENTS_TYPES.includes(value),
    default: 'bottom',
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
  loading: {
    type: Boolean,
    default: false,
  },
  disabledLocalSearch: {
    type: Boolean,
    default: false,
  },
};

export const multiSelectEmitTypes = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  'update:modelValue': (_value: unknown) => true,
  'update:searchValue': (value: string) => typeof value === 'string',
  'infinite-scroll-trigger': Boolean,
  'popper-state': Boolean,
};

export type MultiSelectPropTypes = ExtractPropTypes<typeof multiSelectPropTypes>;
export type MultiSelectEmitTypes = typeof multiSelectEmitTypes;
