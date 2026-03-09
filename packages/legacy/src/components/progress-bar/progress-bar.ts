import { PropType, ExtractPropTypes } from 'vue';

const PROGRESS_BAR_SIZES = ['xs', 'sm', 'lg'] as const;
const PERCENTAGE_PLACEMENTS = [
  'top',
  'top-start',
  'top-center',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-center',
  'bottom-end',
  'left',
  'right',
] as const;

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
  color: {
    type: String as PropType<string>,
    default: 'success',
    validator(value: string) {
      if (value !== 'success' && value !== 'danger' && value !== 'warning' && value !== 'info' && value !== 'neutral') {
        console.error('Invalid prop: "color" must be one of the following: success, danger, warning, info, neutral.');
        return false;
      }
      return true;
    },
  },
  labelPlacement: {
    type: String as PropType<(typeof PERCENTAGE_PLACEMENTS)[number]>,
    validator: (value: (typeof PERCENTAGE_PLACEMENTS)[number]) => PERCENTAGE_PLACEMENTS.includes(value),
    default: 'bottom',
  },
  supportingLabel: {
    type: String as PropType<string>,
    default: '',
  },
};

export type ProgressBarPropTypes = ExtractPropTypes<typeof progressBarPropTypes>;
