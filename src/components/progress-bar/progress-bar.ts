import { PropType, ExtractPropTypes } from 'vue';

const PROGRESS_BAR_SIZES = ['xs', 'sm', 'lg'] as const;

export const progressBarPropTypes = {
  size: {
    type: String as PropType<(typeof PROGRESS_BAR_SIZES)[number]>,
    validator: (value: (typeof PROGRESS_BAR_SIZES)[number]) => PROGRESS_BAR_SIZES.includes(value),
    default: 'lg',
  },
  label: {
    type: Boolean,
    default: true,
  },
  value: {
    type: Number,
    default: 0,
    validator(value: number, props: { max: number }) {
      if (value < 0 || value > props.max) {
        console.error(`Invalid prop: "value" (${value}) must be between 0 and ${props.max}.`);
        return false;
      }
      return true;
    },
  },
  max: {
    type: Number,
    default: 100,
    validator(value: number) {
      if (value <= 0 || value > 100) {
        console.error('Invalid prop: "max" must be between 1 and 100.');
        return false;
      }
      return true;
    },
  },
};

export type ProgressBarPropTypes = ExtractPropTypes<typeof progressBarPropTypes>;
