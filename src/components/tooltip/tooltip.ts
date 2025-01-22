import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const TOOLTIP_POSITION = [
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
  'right-end'
] as const;

export const tooltipPropTypes = {
  /**
   * @description Tooltip Label
   */
  text: {
    type: String,
    default: 'Sample tooltip',
  },
  /**
   * @description Tooltip Position
   */
  position: {
    type: String,
    validator: (value: (typeof TOOLTIP_POSITION)[number]) => TOOLTIP_POSITION.includes(value),
    default: 'top-start',
  },
};

export type TooltipPropTypes = ExtractPropTypes<typeof tooltipPropTypes>;
