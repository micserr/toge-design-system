import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const PLACEMENTS = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end',
] as const;

export const tooltipPropTypes = {
  text: {
    type: String,
    default: '',
  },
  placement: {
    type: String,
    validator: (value: (typeof PLACEMENTS)[number]) => PLACEMENTS.includes(value),
    default: 'top',
  },
  distance: {
    type: Number,
    default: 6,
  },
  hasMaxWidth: {
    type: Boolean,
    default: true,
  },
  fitContent: {
    type: Boolean,
    default: true,
  },
  showTriggers: {
    type: [String, Array] as PropType<string | string[]>,
    default: 'hover',
  },
  hideTriggers: {
    type: [String, Array] as PropType<string | string[]>,
    default: 'hover',
  },
  autoHide: {
    type: Boolean,
    default: false,
  },
};

export type TooltipPropTypes = ExtractPropTypes<typeof tooltipPropTypes>;
