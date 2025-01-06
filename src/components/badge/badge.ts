import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const BADGE_VARIANT = ['danger', 'disabled', 'information', 'brand'] as const;
const BADGE_SIZE = ['small', 'big', 'tiny'] as const;

export const badgePropTypes = {
  /**
   * @description Badge Label
   */
  text: {
    type: String,
    default: '99+',
  },
  /**
   * @description Badge variant
   */
  variant: {
    type: String,
    validator: (value: (typeof BADGE_VARIANT)[number]) => BADGE_VARIANT.includes(value),
    default: 'brand',
  },
  /**
   * @description Badge size
   */
  size: {
    type: String,
    validator: (value: (typeof BADGE_SIZE)[number]) => BADGE_SIZE.includes(value),
    default: 'small',
  },
};

export type BadgePropTypes = ExtractPropTypes<typeof badgePropTypes>;
