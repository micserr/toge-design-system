import type { ExtractPropTypes, PropType } from 'vue';

export const STEP_STATES = ['pending', 'active', 'completed'] as const;

export const stepPropTypes = {
  /**
   * @description Step number
   */
  number: {
    type: Number,
    required: true,
  },
  /**
   * @description Text label shown in step
   */
  label: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  /**
   * @description Step state either as 'pending', 'active', 'completed'
   */
  status: {
    type: String as PropType<(typeof STEP_STATES)[number]>,
    validator: (value: (typeof STEP_STATES)[number]) => STEP_STATES.includes(value),
    default: 'pending',
  },
};

export const stepEmitTypes = {
  click: (evt: MouseEvent): evt is MouseEvent => evt instanceof MouseEvent,
};

export type StepPropTypes = ExtractPropTypes<typeof stepPropTypes>;
export type StepEmitTypes = typeof stepEmitTypes;
