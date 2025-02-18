import { computed } from 'vue';
import classNames from 'classnames';
import type { SetupContext } from 'vue';

import type { CheckboxPropTypes, CheckboxEmitTypes } from './checkbox';

interface CheckboxEvent extends Event {
  target: HTMLInputElement;
}

export const useCheckbox = (props: CheckboxPropTypes, emit: SetupContext<CheckboxEmitTypes>['emit']) => {
  const wrapperClasses = computed(() => {
    const baseClasses = 'flex w-fit select-none items-center gap-1.5 transition duration-150 ease-in-out';

    const conditionalClasses = {
      'border-color-weak hover:background-color-hover rounded-lg border border-solid px-3 py-2': props.bordered,
      'active:scale-95': props.bordered && !props.disabled,
      'cursor-not-allowed': props.disabled,
      'cursor-pointer': !props.disabled,
      'background-color-brand-weak hover:background-color-brand-weak border-color-success-base':
        props.bordered && props.modelValue,
      'background-color-disabled': props.bordered && props.disabled,
    };

    return classNames(baseClasses, conditionalClasses);
  });

  const inputCheckboxClasses = computed(() => {
    const baseClasses =
      'h-5 w-5 appearance-none rounded-[2.5px] border-color-supporting border-[1.25px] border-solid transition duration-150 ease-in-out';

    const conditionalClasses = {
      'background-color-brand-base border-color-brand-base': props.modelValue,
      'border-color-disabled background-color-base cursor-not-allowed': props.disabled,
      'cursor-pointer': !props.disabled,
    };

    return classNames(baseClasses, conditionalClasses);
  });

  const inputCheckboxCheckIconClasses = computed(() => {
    const baseClasses =
      'flex items-center justify-center pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform font-bold opacity-0';

    const conditionalClasses = {
      'opacity-100': props.modelValue,
      'text-color-inverted-strong': !props.disabled,
      'text-color-on-fill-disabled': props.disabled,
    };

    return classNames(baseClasses, conditionalClasses);
  });

  const labelClasses = computed(() => {
    const baseClasses = 'label-xs-regular block';

    const conditionalClasses = {
      'text-color-on-fill-disabled': props.disabled,
    };

    return classNames(baseClasses, conditionalClasses);
  });

  const descriptionClasses = computed(() => {
    const baseClasses = 'body-xs-regular block';

    const conditionalClasses = {
      'text-color-on-fill-disabled': props.disabled,
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
