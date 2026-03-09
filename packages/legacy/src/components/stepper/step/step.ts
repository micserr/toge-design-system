import type { ExtractPropTypes, PropType } from 'vue';
import { STEPPER_TYPE } from '../stepper';

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
  /**
     * @description Display type of stepper if displayed as compact (no solid bg color) or solid
     */
  type: {
    type: String as PropType<(typeof STEPPER_TYPE)[number]>,
    validator: (value: (typeof STEPPER_TYPE)[number]) => STEPPER_TYPE.includes(value),
  }
};

export const stepEmitTypes = {
  click: (evt: MouseEvent): evt is MouseEvent => evt instanceof MouseEvent,
};

export type StepPropTypes = ExtractPropTypes<typeof stepPropTypes>;
export type StepEmitTypes = typeof stepEmitTypes;
