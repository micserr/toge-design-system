import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const RADIO_STATES = ['default', 'hover', 'disabled'] as const;

export const radioPropTypes = {
  /**
   * @description Radio state
   */
  state: {
    type: String as PropType<(typeof RADIO_STATES)[number]>,
    validator: (value: (typeof RADIO_STATES)[number]) => RADIO_STATES.includes(value),
    default: 'default',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @description Attribute id
   */
  id: {
    type: String,
    required: true,
  },
  /**
   * @description Value for v-model
   */
  modelValue: {
    type: [String, Number, Boolean],
    required: true,
    default: false,
  },
  /**
   * @description Attribute name
   */
  name: {
    type: String,
    required: true,
  },
  /**
   * @description Attribute value
   */
  value: {
    type: [String, Number, Boolean],
    required: true,
  },
};

export const radioEmitTypes = ['update:modelValue'];

export type RadioPropTypes = ExtractPropTypes<typeof radioPropTypes>;
export type SwitchEmitTypes = typeof radioEmitTypes;
