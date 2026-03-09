import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const BADGE_VARIANT = ['neutral', 'danger', 'disabled', 'information', 'brand'] as const;
const BADGE_SIZE = ['small', 'big', 'tiny'] as const;
const BADGE_POSITION = ['top', 'bottom', 'default'] as const;

export const badgePropTypes = {
  /**
   * @description Badge Label
   */
  text: {
    type: String,
    default: '0',
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
  /**
   * @description Badge position (top, bottom, default)
   */
  position: {
    type: String,
    validator: (value: (typeof BADGE_POSITION)[number]) => BADGE_POSITION.includes(value),
    default: 'default',
  },
};

export type BadgePropTypes = ExtractPropTypes<typeof badgePropTypes>;
