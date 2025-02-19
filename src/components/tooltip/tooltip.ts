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
  /**
   * @description Tooltip Label
   */
  text: {
    type: String,
    default: '',
  },
  /**
   * @description Tooltip Placement
   */
  placement: {
    type: String,
    validator: (value: (typeof PLACEMENTS)[number]) => PLACEMENTS.includes(value),
    default: 'top',
  },
  hasMaxWidth: {
    type: Boolean,
    default: true,
  },
};

export type TooltipPropTypes = ExtractPropTypes<typeof tooltipPropTypes>;
