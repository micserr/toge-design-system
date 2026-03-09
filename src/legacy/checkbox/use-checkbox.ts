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
  borderedClasses: string;
}

export const useCheckbox = (props: CheckboxPropTypes, emit: SetupContext<CheckboxEmitTypes>['emit']) => {
  const { modelValue, disabled, checked, bordered, fullWidth } = toRefs(props);

  const checkboxClasses: ComputedRef<CheckboxClasses> = computed(() => {
    const baseClasses = classNames(
      'spr-flex spr-w-fit spr-select-none spr-items-center spr-gap-1.5 spr-transition spr-duration-150 spr-ease-in-out',
      {
        'spr-cursor-not-allowed': disabled.value,
        'spr-cursor-pointer': !disabled.value,
      },
    );

    const inputCheckboxClasses = classNames(
      'spr-h-[20px] spr-w-[20px] spr-appearance-none spr-rounded-[2.5px] spr-border-color-supporting spr-border-[1.25px] spr-border-solid spr-m-1',
      'spr-transition spr-duration-150 spr-ease-in-out',
      {
        'spr-background-color-brand-base spr-border-color-brand-base': isChecked.value && !disabled.value,
        'hover:spr-background-color-brand-hover hover:spr-border-color-brand-hover':
          isChecked.value && !bordered.value && !disabled.value, //remove hover checkbox styling when bordered
        'hover:spr-background-color-hover': !isChecked.value && !bordered.value, //remove hover checkbox styling when bordered
        'spr-border-color-on-fill-disabled spr-background-color-disabled spr-cursor-not-allowed':
          !isChecked.value && disabled.value,
        'spr-bg-white-300 spr-border-none': isChecked.value && disabled.value,
        'spr-cursor-pointer': !disabled.value,
      },
    );

    const inputCheckboxCheckIconClasses = classNames(
      'spr-h-[20px] spr-w-[20px] spr-flex spr-items-center spr-justify-center spr-pointer-events-none spr-absolute spr-left-1/2 spr-top-1/2 -spr-translate-x-1/2 -spr-translate-y-1/2 spr-transform spr-font-bold spr-opacity-0 spr-text-color-inverted-strong',
      {
        'spr-opacity-100': isChecked.value,
      },
    );

    const labelClasses = classNames('spr-body-sm-regular spr-text-color-strong spr-block', {
      'spr-text-color-on-fill-disabled': disabled.value,
    });

    const descriptionClasses = classNames('spr-body-xs-regular spr-block', {
      'spr-text-color-on-fill-disabled': disabled.value,
    });

    const borderedClasses = classNames(
      'spr-border spr-rounded-md spr-p-size-spacing-2xs spr-border-solid spr-box-border',
      {
        'spr-border-color-success-base spr-bg-kangkong-100': (modelValue.value || checked.value) && !disabled.value,
        'spr-border-color-base': (!modelValue.value || !checked.value) && !disabled.value,
        'hover:spr-background-color-hover': (!modelValue.value && !checked.value) || disabled.value,
        'spr-border-0 spr-bg-white-100': disabled.value,
        'spr-w-fit': !fullWidth.value,
        'spr-w-full': fullWidth.value,
      },
    );

    return {
      baseClasses,
      inputCheckboxClasses,
      inputCheckboxCheckIconClasses,
      labelClasses,
      descriptionClasses,
      borderedClasses,
    };
  });

  const handleCheckbox = (event: Event): void => {
    if (event.target instanceof HTMLInputElement) {
      emit('update:modelValue', event.target.checked);
    }
  };

  const resolveCheckboxIcon = computed(() => {
    if (props.indeterminate) return 'ph:minus-bold';

    return 'ph:check-bold';
  });

  const isChecked = computed(() => modelValue.value || checked.value);

  return {
    checkboxClasses,
    handleCheckbox,
    resolveCheckboxIcon,
  };
};
