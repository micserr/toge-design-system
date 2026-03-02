import type { PropType, ExtractPropTypes } from 'vue';

const STATUS_STATES = ['success', 'information', 'pending', 'caution', 'danger'] as const;
const STATUS_SIZES = ['2xs', 'xs', 'sm', 'base', 'lg', 'xl', '2xl'] as const;

export const statusPropTypes = {
  state: {
    type: String as PropType<(typeof STATUS_STATES)[number]>,
    validator: (value: (typeof STATUS_STATES)[number]) => STATUS_STATES.includes(value),
    default: 'success',
  },
  size: {
    type: String as PropType<(typeof STATUS_SIZES)[number]>,
    validator: (value: (typeof STATUS_SIZES)[number]) => STATUS_SIZES.includes(value),
    default: 'base',
  },
};

export type StatusPropTypes = ExtractPropTypes<typeof statusPropTypes>;
