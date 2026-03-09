import type { PropType, ExtractPropTypes } from 'vue';
const SLIDER_SIZES = ['sm','lg'] as const;

export const sliderPropTypes = {
  size: {
    type: String as PropType<(typeof SLIDER_SIZES)[number]>,
    validator: (value: (typeof SLIDER_SIZES)[number]) => SLIDER_SIZES.includes(value),
    default: 'lg',
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 1,
  },
  modelValue: {
    type: Number,
    default: 0,
  },
  disabled: {
    type: Boolean,
    default: false,
  }
};

export const sliderEmits = {
  'update:modelValue': (value: number): value is number => typeof value === 'number',
  slideend: (value: number): value is number => typeof value === 'number',
};

export type SliderPropTypes = ExtractPropTypes<typeof sliderPropTypes>;
export type SliderEmitTypes = typeof sliderEmits;
