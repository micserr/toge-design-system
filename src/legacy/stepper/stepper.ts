import type { StepPropTypes } from '@/components/stepper/step/step';
import type { ExtractPropTypes, PropType } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;
const STEPPER_VARIANTS = ['horizontal', 'vertical'] as const;
export const STEPPER_TYPE = ['compact', 'solid'];
export const STEPPER_STATES = ['pending', 'active', 'completed'] as const;

export const stepperPropTypes = {
  /**
   * @description Variant of the stepper
   */
  variant: {
    type: String as PropType<(typeof STEPPER_VARIANTS)[number]>,
    validator: (value: (typeof STEPPER_VARIANTS)[number]) => STEPPER_VARIANTS.includes(value),
    default: 'vertical',
  },
  /**
   * @description steps of the stepper
   * @type {Array<Step>}
   * @property {number} number - Step number
   * @property {string} label - Text label shown in step
   * @property {string} status - Step state either as 'pending', 'active', 'completed'
   * @property {string} description - Description shown in step
   */
  steps: {
    type: Array as PropType<StepPropTypes[]>,
    default: () => [],
  },
  /**
   * @description has lines between steps
   */
  hasLines: {
    type: Boolean,
    default: false,
  },
  /**
   * @description Display type of stepper if displayed as compact (no solid bg color) or solid
   */
  type: {
    type: String as PropType<(typeof STEPPER_TYPE)[number]>,
    validator: (value: (typeof STEPPER_TYPE)[number]) => STEPPER_TYPE.includes(value),
    default: 'compact',
  }
};

export type StepperPropTypes = ExtractPropTypes<typeof stepperPropTypes>;
