import type { PropType, ExtractPropTypes } from 'vue';

const STATUS_STATES = ['success', 'information', 'pending', 'caution', 'danger'] as const;

export const statusPropTypes = {
  /**
   * @description status state
   */
  state: {
    type: String as PropType<(typeof STATUS_STATES)[number]>,
    validator: (value: (typeof STATUS_STATES)[number]) => STATUS_STATES.includes(value),
    default: 'success',
  },
};

export type StatusPropTypes = ExtractPropTypes<typeof statusPropTypes>;
