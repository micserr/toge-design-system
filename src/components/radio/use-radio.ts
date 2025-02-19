import { computed, ref, ComputedRef } from 'vue';
import { useElementHover } from '@vueuse/core';

import classNames from 'classnames';

import type { RadioPropTypes } from './radio';

export const useRadioButton = (props: RadioPropTypes) => {
  const radioRef = ref<HTMLInputElement | null>(null);
  const isHovered = useElementHover(radioRef);

  const radioClasses: ComputedRef<string> = computed(() => {
    const baseClasses = 'spr-sr-only spr-peer spr-inline-block';

    if (props.disabled) {
      return classNames(baseClasses, 'spr-cursor-not-allowed');
    }

    return baseClasses;
  });

  const indicatorClasses: ComputedRef<string> = computed(() => {
    const baseClasses = [
      'spr-inline-block spr-w-4 spr-h-4 spr-rounded-full spr-border-2 spr-border-solid spr-mr-2 spr-shrink-0',
      'spr-transition spr-duration-150 spr-ease-in-out',
      'group-active:spr-scale-90',
    ];

    if (props.disabled) {
      return classNames(
        baseClasses,
        props.modelValue === props.value
          ? 'spr-border-color-disabled spr-background-color-disabled spr-shadow-[inset_0px_0px_0px_2.5px_#fff] spr-cursor-not-allowed'
          : 'spr-border-color-disabled spr-background-color spr-cursor-not-allowed',
      );
    }

    if (isHovered.value) {
      return classNames(
        baseClasses,
        props.modelValue === props.value
          ? 'spr-background-color-brand-hover spr-border-2 spr-border-color-brand-hover spr-shadow-[inset_0px_0px_0px_2.5px_#fff] animate-shadow-grow'
          : 'spr-background-color-base spr-border-2 spr-border-color-supporting spr-shadow-[inset_0px_0px_0px_2.5px_#fff]',
      );
    }

    if (props.modelValue === props.value) {
      return classNames(
        baseClasses,
        'spr-border-color-brand-base spr-background-color-brand-base spr-shadow-[inset_0px_0px_0px_2.5px_#fff] animate-shadow-grow',
      );
    }

    return classNames(baseClasses, 'spr-border-color-supporting spr-shadow-[inset_0px_0px_0px_2.5px_#fff]');
  });

  const radioLabelClasses: ComputedRef<string> = computed(() => {
    if (props.disabled) {
      return 'spr-text-color-disabled spr-cursor-not-allowed';
    }

    return 'spr-text-color-strong spr-cursor-pointer spr-inline-flex spr-items-center spr-p-0';
  });

  return {
    radioRef,
    radioClasses,
    indicatorClasses,
    radioLabelClasses,
  };
};
