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

export const selectLadderizedPropTypes = {
  id: {
    type: String,
    required: true,
    default: 'select-ladderized',
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
  placeholder: {
    type: String,
    default: '',
  },
  textSeperator: {
    type: String,
    default: ' > ',
  },
  helperText: {
    type: String,
    default: '',
  },
  helperIcon: {
    type: String,
    default: null,
  },
  displayHelper: {
    type: Boolean,
    default: false,
  },
  clearable: {
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
  wrapperPosition: {
    type: String,
    default: 'relative',
  },
  width: {
    type: String,
    default: '100%',
  },
  popperWidth: {
    type: String,
    default: '100%',
  },
  popperStrategy: {
    type: String,
    validator: (value: 'fixed' | 'absolute') => POPPER_STRATEGY_TYPES.includes(value),
    default: 'absolute',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  removeCurrentLevelInBackLabel: {
    type: Boolean,
    default: false,
  },
};

export const selectLadderizedEmitTypes = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  'update:modelValue': (_value: unknown) => true,
};

export type SelectLadderizedEmitFn = (event: string, ...args: unknown[]) => void;

export type SelectLadderizedPropTypes = ExtractPropTypes<typeof selectLadderizedPropTypes>;
export type SelectLadderizedEmitTypes = typeof selectLadderizedEmitTypes;
