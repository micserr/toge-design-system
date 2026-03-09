import type { PropType, ExtractPropTypes } from 'vue';
import type { MenuListType } from '@/components/list/list';

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

export const selectLadderizedPropTypes = {
  id: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  options: {
    type: Array as PropType<MenuListType[]>,
    required: true,
    default: () => [],
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
  placeholder: {
    type: String,
    default: '',
  },
  textSeperator: {
    type: String,
    default: ' > ',
  },
  prependText: {
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
  clearable: {
    type: Boolean,
    default: false,
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
  searchableOptions: {
    type: Boolean,
    default: false,
  },
  searchableOptionsPlaceholder: {
    type: String,
    default: 'Search...',
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
  autoHide: {
    type: Boolean,
    default: false,
  },
  triggers: {
    type: Array as PropType<(typeof TRIGGER_EVENTS)[number][]>,
    validator: (value: (typeof TRIGGER_EVENTS)[number][]) => {
      return value.every((val) => TRIGGER_EVENTS.includes(val));
    },
    default: () => [],
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
  wrapperPosition: {
    type: String,
    default: 'relative',
  },
  width: {
    type: String,
    default: '100%',
  },
  removeCurrentLevelInBackLabel: {
    type: Boolean,
    default: false,
  },
  writableInputText: {
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
};

export const selectLadderizedEmitTypes = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  'update:modelValue': (_value: unknown) => true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  'popper-state': (_state: boolean) => true,
};

export type SelectLadderizedEmitFn = (event: string, ...args: unknown[]) => void;

export type SelectLadderizedPropTypes = ExtractPropTypes<typeof selectLadderizedPropTypes>;
export type SelectLadderizedEmitTypes = typeof selectLadderizedEmitTypes;
