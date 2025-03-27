import { ref, toRefs, computed, ComputedRef } from 'vue';
import { useVModel, useElementHover } from '@vueuse/core';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { RadioPropTypes, RadioEmitTypes } from './radio';

interface RadioClasses {
  baseClasses: string;
  baseIndicatorClasses: string;
  labelClasses: string;
}

export const useRadioButton = (
  props: RadioPropTypes,
  emit: SetupContext<RadioEmitTypes>['emit'],
  slots: Record<string, unknown>,
) => {
  const { modelValue, disabled } = toRefs(props);

  const radioRef = ref<HTMLInputElement | null>(null);
  const isHovered = useElementHover(radioRef);

  const radioClasses: ComputedRef<RadioClasses> = computed(() => {
    const baseClasses = classNames('spr-sr-only spr-peer spr-inline-block', {
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
          isHovered.value && String(modelValue?.value) === String(props.value) && !disabled.value,

        // Hover state but different value
        'spr-background-color-base spr-border-2 spr-border-color-supporting spr-shadow-[inset_0px_0px_0px_2.5px_#fff]':
          isHovered.value && String(modelValue?.value) !== String(props.value) && !disabled.value,
      },

      // Active State
      {
        // Active state with matching value
        'spr-border-color-brand-base spr-background-color-brand-base spr-shadow-[inset_0px_0px_0px_2.5px_#fff] animate-shadow-grow':
          String(modelValue?.value) === String(props.value) && !disabled.value,

        // Active state with different value
        'spr-border-color-supporting spr-shadow-[inset_0px_0px_0px_2.5px#fff]':
          String(modelValue?.value) !== String(props.value) && !disabled.value,
      },

      // Disabled State
      {
        'spr-cursor-not-allowed': disabled.value,

        // Disabled state with matching value
        'spr-border-color-disabled spr-background-color-disabled spr-shadow-[inset_0px_0px_0px_2.5px_#fff]':
          disabled.value && String(modelValue?.value) === String(props.value),

        // Disabled state but different value
        'spr-border-color-disabled spr-background-color spr-cursor-not-allowed':
          disabled.value && String(modelValue?.value) !== String(props.value),
      },
    );

    const labelClasses = classNames(
      'spr-group spr-m-0 spr-inline-flex spr-w-auto spr-items-center spr-space-x-2 spr-p-0 spr-font-main',
      'spr-text-color-strong spr-inline-flex spr-items-center spr-p-0',
      {
        'spr-text-color-disabled spr-cursor-not-allowed': disabled.value,
        'spr-cursor-pointer': !disabled.value,
      },
    );

    return {
      baseClasses,
      baseIndicatorClasses,
      labelClasses,
    };
  });

  const proxyValue = useVModel(props, 'modelValue', emit);

  return {
    radioRef,
    radioClasses,
    proxyValue,
  };
};
