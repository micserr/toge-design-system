import type { PropType, ExtractPropTypes } from 'vue';

// export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

export const SNACKBAR_TONES = ['success', 'information', 'danger', 'caution'] as const;
type ActionIconProps = {
  icon: string;
  tone: 'neutral' | 'success' | 'danger'
}

export const snackPropTypes = {
  /**
   * @description Text label shown in snack
   */
  text: {
    type: String,
    required: true,
  },
  /**
   * @description Snack tone either as 'success', 'information', 'danger', 'caution'
   */
  tone: {
    type: String as PropType<(typeof SNACKBAR_TONES)[number]>,
    validator: (value: (typeof SNACKBAR_TONES)[number]) => SNACKBAR_TONES.includes(value),
    default: 'information',
  },
  /**
   * @description To show action label in snack. Default is false
   */
  showAction: {
    type: Boolean,
    default: false,
  },
  /**
   * @description Text label for the action function.
   */
  actionText: {
    type: String,
    default: "action",
  },
  /**
   * @description On click function of the action text.
   */
  action: {
    type: Function,
    default: () => {},
  },
  /**
   * @description To show icon in snack. Default is false.
   */
  showIcon: {
    type: Boolean,
    default: false,
  },
  /**
   * @description Duration to show snack. Default is 4000 ms (4s) declared on store
   */
  duration: {
    type: Number,
  },
  actionIconProps: {
    type: Object as PropType<ActionIconProps>,
  },
};

export const snackEmitTypes = {
  click: (evt: MouseEvent): evt is MouseEvent => evt instanceof MouseEvent,
};

export type SnackPropTypes = ExtractPropTypes<typeof snackPropTypes>;
export type SnackEmitTypes = typeof snackEmitTypes;
