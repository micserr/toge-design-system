import classNames from 'classnames';
import type { SetupContext } from 'vue';
import { computed, ComputedRef } from 'vue';
import type { StepEmitTypes, StepPropTypes } from './step';

interface StepClasses {
  baseClass: string;
  badgeClass: string;
  numberClass: string;
  textContainerClass: string;
  labelClass: string;
  descriptionClass: string;

}

export const useStep = (props: StepPropTypes, emit: SetupContext<StepEmitTypes>['emit']) => {

  const stepClasses: ComputedRef<StepClasses> = computed(() => {
    const baseClass = classNames('spr-flex spr-gap-2 spr-items-center');
    
    // Usage of prop.status ensures reactivity instead of destructuring props
    const badgeClass = classNames(
      'spr-flex spr-items-center spr-justify-center spr-rounded-border-radius-full spr-h-6 spr-w-6 spr-border spr-border-solid spr-border-2',
      {
        'spr-bg-kangkong-700 spr-border-kangkong-700': props.status === 'active',
        'spr-border-mushroom-300': props.status === 'pending',
        'spr-border-kangkong-700': props.status === 'completed',
      }
    );
    
    const numberClass = classNames('spr-text-sm spr-font-medium', 
      {
        'spr-text-white-50': props.status === 'active',
        'spr-text-mushroom-600': props.status === 'pending',
        'spr-text-kangkong-700': props.status === 'completed',
      }
    );

    const textContainerClass = classNames('spr-flex spr-flex-col spr-relative');

    const labelClass = classNames('spr-text-sm spr-whitespace-nowrap', 
      {
      'spr-text-kangkong-700 spr-font-semibold': props.status === 'active',
      'spr-text-mushroom-600': props.status === 'pending',
      'spr-text-mushroom-950': props.status === 'completed',
      }
    );

    // Absolute since the sample in the figma is a hanging text for description
    const descriptionClass = classNames('spr-text-xs spr-text-mushroom-400 spr-absolute spr-mt-size-spacing-sm spr-whitespace-nowrap');

    return {
      baseClass,
      badgeClass,
      numberClass,
      labelClass,
      textContainerClass,
      descriptionClass,
    };
  });

  const handleClick = (evt: MouseEvent) => {
    emit('click', evt);
  };

  return {
    stepClasses,
    handleClick,
  };
};
