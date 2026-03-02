import { ref, toRefs, computed, ComputedRef } from 'vue';
import { useVModel, useElementHover } from '@vueuse/core';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { RadioPropTypes, RadioEmitTypes } from './radio';

interface RadioClasses {
  baseClasses: string;
  baseInputClasses: string;
  baseIndicatorClasses: string;
  labelClasses: string;
  borderedClasses: string;
}

export const useRadioButton = (
  props: RadioPropTypes,
  emit: SetupContext<RadioEmitTypes>['emit'],
  slots: Record<string, unknown>,
) => {
  const { modelValue, disabled, description, bordered, fullWidth, choiceBox } = toRefs(props);

  const radioRef = ref<HTMLInputElement | null>(null);
  const isHovered = useElementHover(radioRef);

  const radioClasses: ComputedRef<RadioClasses> = computed(() => {
    const baseClasses = classNames('spr-relative spr-m-0 spr-flex spr-items-center', {
      'spr-inline-block': !choiceBox.value,
      'spr-block': choiceBox.value,
      'spr-w-full': fullWidth.value || choiceBox.value,
      'spr-align-middle': !choiceBox.value,
      'spr-border-color spr-border-color-weak spr-border spr-border-solid spr-p-2 spr-rounded-lg spr-transition spr-ease-in-out spr-duration-150 active:spr-scale-[0.98]':
        choiceBox.value,
      'spr-border-color-success-base spr-background-color-brand-weak':
        choiceBox.value && String(modelValue?.value) === String(props.value) && !disabled.value,
      'spr-cursor-pointer': choiceBox.value && !disabled.value,
      'spr-cursor-not-allowed': disabled.value && choiceBox.value,
    });

    const baseInputClasses = classNames('spr-sr-only spr-peer spr-inline-block', {
      'spr-cursor-not-allowed': disabled.value,
    });

    const baseIndicatorClasses = classNames(
      'spr-inline-block spr-w-4 spr-h-4 spr-rounded-full spr-border-2 spr-border-solid spr-shrink-0',
      {
        'spr-mr-2': slots.default,
        'group-active:spr-scale-95': !disabled.value,
      },

      // Hover State
      {
        // Hover state with matching value
        'spr-background-color-brand-hover spr-border-2 spr-border-color-brand-hover spr-shadow-[inset_0px_0px_0px_2.5px_#fff]':
          isHovered.value && String(modelValue?.value) === String(props.value) && !disabled.value && !bordered.value,

        // Hover state but different value
        'spr-background-color-base spr-border-2 spr-border-color-supporting spr-shadow-[inset_0px_0px_0px_2.5px_#fff]':
          isHovered.value && String(modelValue?.value) !== String(props.value) && !disabled.value && !bordered.value,

        // Bordered Hover state but different value
        'spr-background-color-base spr-border-2 spr-border-color-supporting':
          isHovered.value && String(modelValue?.value) !== String(props.value) && !disabled.value && bordered.value,
      },

      // Active State
      {
        // Active state with matching value
        'spr-border-color-brand-base spr-background-color-brand-base spr-shadow-[inset_0px_0px_0px_2.5px_#fff] animate-shadow-grow':
          String(modelValue?.value) === String(props.value) && !disabled.value && !bordered.value,

        // Active state with different value
        'spr-border-color-supporting spr-shadow-[inset_0px_0px_0px_2.5px#fff]':
          String(modelValue?.value) !== String(props.value) && !disabled.value && !bordered.value,

        //Bordered Active state with matching value
        'spr-border-color-brand-base spr-background-color-brand-base animate-shadow-grow':
          String(modelValue?.value) === String(props.value) && !disabled.value && bordered.value,

        //Bordered Active state with different value
        'spr-border-color-supporting':
          String(modelValue?.value) !== String(props.value) && !disabled.value && bordered.value,
      },

      // Disabled State
      {
        'spr-cursor-not-allowed': disabled.value,

        // Disabled state with matching value
        'spr-border-color-disabled spr-background-color-disabled spr-shadow-[inset_0px_0px_0px_2.5px_#fff]':
          disabled.value && String(modelValue?.value) === String(props.value) && !bordered.value,

        // Disabled state but different value
        'spr-border-color-disabled spr-background-color spr-cursor-not-allowed':
          disabled.value && String(modelValue?.value) !== String(props.value) && !bordered.value,

        // Bordered Disabled state with matching value
        'spr-bg-white-400 spr-shadow-[inset_0px_0px_0px_2.5px_#fff]':
          disabled.value && String(modelValue?.value) === String(props.value) && bordered.value,

        // Bordered Disabled state but different value
        'spr-border-white-400 spr-background-color-disabled':
          disabled.value && String(modelValue?.value) !== String(props.value) && bordered.value,
      },
    );

    const labelClasses = classNames(
      'spr-group spr-m-0 spr-inline-flex spr-w-auto spr-items-center spr-p-0 spr-font-main',
      'spr-text-color-strong spr-inline-flex spr-items-center spr-p-0',
      {
        'spr-text-color-disabled': disabled.value && !bordered.value,
        'spr-text-color-on-fill-disabled': disabled.value && bordered.value,
        'spr-cursor-pointer': !disabled.value,
        'spr-cursor-not-allowed': disabled.value,
      },
    );

    const borderedClasses = classNames(
      'spr-border spr-rounded-md spr-p-size-spacing-2xs spr-border-solid spr-box-border',
      {
        //enabled state
        'spr-border-color-brand-base spr-background-color-brand-weak':
          String(modelValue?.value) === String(props.value) && !disabled.value, // matching value
        'spr-border-color-weak spr-bg-white-50 hover:spr-background-color-hover':
          String(modelValue?.value) !== String(props.value) && !disabled.value, // different value

        //disabled state
        'spr-border-color-disabled spr-background-color-disabled': disabled.value,

        'spr-w-full': fullWidth.value,
        'spr-w-fit': !fullWidth.value,
      },
    );

    return {
      baseClasses,
      baseInputClasses,
      baseIndicatorClasses,
      labelClasses,
      borderedClasses,
    };
  });

  const proxyValue = useVModel(props, 'modelValue', emit);

  return {
    radioRef,
    radioClasses,
    isHovered,
    proxyValue,
    description,
    bordered,
  };
};
