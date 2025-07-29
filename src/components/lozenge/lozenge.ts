import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

export const LOZENGE_TONE = ['plain', 'pending', 'information', 'success', 'danger', 'neutral', 'caution'] as const;

export const lozengePropTypes = {
  /**
   * @description Lozenge Label
   */
  label: {
    type: String,
    default: 'label',
  },
  /**
   * @description Lozenge tone
   */
  tone: {
    type: String as PropType<(typeof LOZENGE_TONE)[number]>,
    validator: (value: (typeof LOZENGE_TONE)[number]) => LOZENGE_TONE.includes(value),
    default: 'plain',
  },
  /**
   * @description Lozenge type (fill or outline)
   */
  fill: {
    type: Boolean,
    default: false,
  },
  /**
   * @description Lozenge removable
   */
  removable: {
    type: Boolean,
    default: false,
  },
  /**
   * @description avatar image url
   */
  url: {
    type: String,
    default: '',
  },
  /**
   * @description handler if the lozenge is visible
   */
  visible: {
    type: Boolean,
    default: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
};

export type LozengePropTypes = ExtractPropTypes<typeof lozengePropTypes>;
export const removeEmitTypes = {
  onRemove: (evt: MouseEvent): evt is MouseEvent => evt instanceof MouseEvent,
};
export type RemoveEmitTypes = typeof removeEmitTypes;
