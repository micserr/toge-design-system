import type { StepPropTypes } from '@/components/stepper/step/step';
import type { StepperPropTypes } from '@/components/stepper/stepper';
import classNames from 'classnames';
import { computed, ComputedRef } from 'vue';

interface StepperClasses {
  baseClass: string;
  stepClass: string;
  lineContainerClass: string;
  linesClass: string;
}

export const useStepper = (props: StepperPropTypes) => {
  const stepperClasses: ComputedRef<StepperClasses> = computed(() => {
    const baseClass = classNames('spr-flex spr-gap-size-spacing-xs ', {
      'spr-flex-col spr-mb-size-spacing-xs': props.variant === 'vertical',
      'spr-flex-row spr-mr-size-spacing-xs': props.variant === 'horizontal',
    });

    const stepClass = classNames('spr-flex spr-flex-grow', {
      'spr-flex-col': props.variant === 'vertical',
      'spr-flex-rows': props.variant === 'horizontal',
    });

    const lineContainerClass = classNames('spr-flex spr-min-w-6 spr-min-h-6', {
      'spr-ml-3.5 spr-pt-size-spacing-2xs': props.variant === 'vertical',
      'spr-items-center spr-pl-size-spacing-xs spr-w-full': props.variant === 'horizontal',
    })

    const linesClass = classNames({
      'spr-w-0.5 spr-rounded-full spr-h-12': props.variant === 'vertical',
      'spr-h-0.5 spr-rounded-full spr-w-full': props.variant === 'horizontal',
    });


    return {
      baseClass,
      stepClass,
      lineContainerClass,
      linesClass,
    }
  });

  const getLineColorClass = (step: StepPropTypes) => {
    return step.status === 'completed' ? 'spr-bg-kangkong-700' : 'spr-bg-mushroom-200';
  };

  return {
    stepperClasses,
    getLineColorClass,
  };
};
