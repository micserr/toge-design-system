import { toRefs, computed, ComputedRef } from 'vue';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { CheckboxPropTypes, CheckboxEmitTypes } from './checkbox';

interface CheckboxClasses {
  baseClasses: string;
  inputCheckboxClasses: string;
  inputCheckboxCheckIconClasses: string;
  labelClasses: string;
  descriptionClasses: string;
}

interface CheckboxEvent extends Event {
  target: HTMLInputElement;
}

export const useCheckbox = (props: CheckboxPropTypes, emit: SetupContext<CheckboxEmitTypes>['emit']) => {
  const { modelValue, disabled } = toRefs(props);

  const checkboxClasses: ComputedRef<CheckboxClasses> = computed(() => {
    const baseClasses = classNames(
      'spr-flex spr-w-fit spr-select-none spr-items-center spr-gap-1.5 spr-transition spr-duration-150 spr-ease-in-out',
      {
        'spr-cursor-not-allowed': disabled.value,
        'spr-cursor-pointer': !disabled.value,
      },
    );

    const inputCheckboxClasses = classNames(
      'spr-h-5 spr-w-5 spr-appearance-none spr-rounded-[2.5px] spr-border-color-supporting spr-border-[1.25px] spr-border-solid',
      'spr-transition spr-duration-150 spr-ease-in-out',
      {
        'spr-background-color-brand-base spr-border-color-brand-base': modelValue.value,
        'spr-border-color-disabled spr-background-color-base spr-cursor-not-allowed': disabled.value,
        'spr-cursor-pointer': !disabled.value,
      },
    );

    const inputCheckboxCheckIconClasses = classNames(
      'spr-flex spr-items-center spr-justify-center spr-pointer-events-none spr-absolute spr-left-1/2 spr-top-1/2 -spr-translate-x-1/2 -spr-translate-y-1/2 spr-transform spr-font-bold spr-opacity-0',
      {
        'spr-opacity-100': modelValue.value,
        'spr-text-color-inverted-strong': !disabled.value,
        'spr-text-color-on-fill-disabled': disabled.value,
      },
    );

    const labelClasses = classNames('spr-label-xs-regular spr-block', {
      'spr-text-color-on-fill-disabled': disabled.value,
    });

    const descriptionClasses = classNames('spr-body-xs-regular spr-block', {
      'spr-text-color-on-fill-disabled': disabled.value,
    });

    return {
      baseClasses,
      inputCheckboxClasses,
      inputCheckboxCheckIconClasses,
      labelClasses,
      descriptionClasses,
    };
  });

  const handleCheckbox = (e: CheckboxEvent): void => {
    emit('update:modelValue', e.target.checked);
  };

  return {
    checkboxClasses,
    handleCheckbox,
  };
};
