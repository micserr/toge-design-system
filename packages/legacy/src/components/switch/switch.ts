import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;
const SWITCH_STATES = ['default', 'hover', 'pressed', 'disabled'] as const;

export const switchPropTypes = {
  /**
   * @description Switch UI state when hovered, pressed, disabled
   */
  state: {
    type: String as PropType<(typeof SWITCH_STATES)[number]>,
    validator: (value: (typeof SWITCH_STATES)[number]) => SWITCH_STATES.includes(value),
    default: 'default',
  },
  /**
   * @description Switch input state when disabled
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @description Required prop value for v-model
   */
  modelValue: {
    type: Boolean,
    required: true,
    default: false,
  },
  /**
   * @description Switch id
   */
  id: {
    type: String,
    default: '',
  },
};

export const switchEmitTypes = ['update:modelValue'];

export type SwitchPropTypes = ExtractPropTypes<typeof switchPropTypes>;
export type SwitchEmitTypes = typeof switchEmitTypes;
