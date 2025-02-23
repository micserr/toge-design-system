import { computed } from 'vue';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { CheckboxPropTypes, CheckboxEmitTypes } from './checkbox';

interface CheckboxEvent extends Event {
  target: HTMLInputElement;
}

export const useCheckbox = (props: CheckboxPropTypes, emit: SetupContext<CheckboxEmitTypes>['emit']) => {
  const wrapperClasses = computed(() => {
    const baseClasses =
      'spr-flex spr-w-fit spr-select-none spr-items-center spr-gap-1.5 spr-transition spr-duration-150 spr-ease-in-out';

    const conditionalClasses = {
      'spr-cursor-not-allowed': props.disabled,
      'spr-cursor-pointer': !props.disabled,
    };

    return classNames(baseClasses, conditionalClasses);
  });

  const inputCheckboxClasses = computed(() => {
    const baseClasses =
      'spr-h-5 spr-w-5 spr-appearance-none spr-rounded-[2.5px] spr-border-color-supporting spr-border-[1.25px] spr-border-solid spr-transition spr-duration-150 spr-ease-in-out';

    const conditionalClasses = {
      'spr-background-color-brand-base spr-border-color-brand-base': props.modelValue,
      'spr-border-color-disabled spr-background-color-base spr-cursor-not-allowed': props.disabled,
      'spr-cursor-pointer': !props.disabled,
    };

    return classNames(baseClasses, conditionalClasses);
  });

  const inputCheckboxCheckIconClasses = computed(() => {
    const baseClasses =
      'spr-flex spr-items-center spr-justify-center spr-pointer-events-none spr-absolute spr-left-1/2 spr-top-1/2 -spr-translate-x-1/2 -spr-translate-y-1/2 spr-transform spr-font-bold spr-opacity-0';

    const conditionalClasses = {
      'spr-opacity-100': props.modelValue,
      'spr-text-color-inverted-strong': !props.disabled,
      'spr-text-color-on-fill-disabled': props.disabled,
    };

    return classNames(baseClasses, conditionalClasses);
  });

  const labelClasses = computed(() => {
    const baseClasses = 'spr-label-xs-regular spr-block';

    const conditionalClasses = {
      'spr-text-color-on-fill-disabled': props.disabled,
    };

    return classNames(baseClasses, conditionalClasses);
  });

  const descriptionClasses = computed(() => {
    const baseClasses = 'spr-body-xs-regular spr-block';

    const conditionalClasses = {
      'spr-text-color-on-fill-disabled': props.disabled,
    };

    return classNames(baseClasses, conditionalClasses);
  });

  const handleCheckbox = (e: CheckboxEvent): void => {
    emit('update:modelValue', e.target.checked);
  };

  return {
    wrapperClasses,
    inputCheckboxClasses,
    inputCheckboxCheckIconClasses,
    labelClasses,
    descriptionClasses,
    handleCheckbox,
  };
};
