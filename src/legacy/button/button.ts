import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const BUTTON_TONES = ['neutral', 'success', 'danger'] as const;
const BUTTON_SIZES = ['small', 'medium', 'large'] as const;
const BUTTON_TYPES = ['button', 'submit', 'reset'] as const;
const BUTTON_STATES = ['base', 'hover', 'pressed', 'focus'] as const;
const BUTTON_VARIANTS = ['primary', 'secondary', 'tertiary'] as const;

export const buttonPropTypes = {
  /**
   * @description Button tone
   */
  tone: {
    type: String as PropType<(typeof BUTTON_TONES)[number]>,
    validator: (value: (typeof BUTTON_TONES)[number]) => BUTTON_TONES.includes(value),
    default: 'neutral',
  },
  /**
   * @description Button size
   */
  size: {
    type: String as PropType<(typeof BUTTON_SIZES)[number]>,
    validator: (value: (typeof BUTTON_SIZES)[number]) => BUTTON_SIZES.includes(value),
    default: 'medium',
  },
  /**
   * @description Native button type
   */
  type: {
    type: String as PropType<(typeof BUTTON_TYPES)[number]>,
    validator: (value: (typeof BUTTON_TYPES)[number]) => BUTTON_TYPES.includes(value),
    default: 'button',
  },
  /**
   * @description Button state
   */
  state: {
    type: String as PropType<(typeof BUTTON_STATES)[number]>,
    validator: (value: (typeof BUTTON_STATES)[number]) => BUTTON_STATES.includes(value),
    default: 'base',
  },
  /**
   * @description Button Variant
   */
  variant: {
    type: String as PropType<(typeof BUTTON_VARIANTS)[number]>,
    validator: (value: (typeof BUTTON_VARIANTS)[number]) => BUTTON_VARIANTS.includes(value),
    default: 'primary',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  hasIcon: {
    type: Boolean,
    default: false,
  },
  fullwidth: {
    type: Boolean,
    default: false,
  },
};

export const buttonEmitTypes = {
  click: (evt: MouseEvent): evt is MouseEvent => evt instanceof MouseEvent,
};

export type ButtonPropTypes = ExtractPropTypes<typeof buttonPropTypes>;
export type ButtonEmitTypes = typeof buttonEmitTypes;
export type ButtonType = ButtonPropTypes['type'];
