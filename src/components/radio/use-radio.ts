import { computed, ref, ComputedRef } from 'vue';
import { useElementHover } from '@vueuse/core';
import classNames from 'classnames';
import type { RadioPropTypes } from './radio';

export const useRadioButton = (props: RadioPropTypes) => {
  const radioRef = ref<HTMLInputElement | null>(null);
  const isHovered = useElementHover(radioRef);

  const radioClasses: ComputedRef<string> = computed(() => {
    const baseClasses = 'sr-only peer inline-block';

    if (props.disabled) {
      return classNames(baseClasses, 'cursor-not-allowed');
    }

    return baseClasses;
  });

  const indicatorClasses: ComputedRef<string> = computed(() => {
    const baseClasses = [
      'inline-block w-4 h-4 rounded-full border-2 border-solid mr-2 shrink-0',
      'transition duration-150 ease-in-out',
      'group-active:scale-90',
    ];

    if (props.disabled) {
      return classNames(
        baseClasses,
        props.modelValue === props.value
          ? 'border-color-disabled background-color-disabled shadow-[inset_0px_0px_0px_2.5px_#fff] cursor-not-allowed'
          : 'border-color-disabled background-color cursor-not-allowed',
      );
    }

    if (isHovered.value) {
      return classNames(
        baseClasses,
        props.modelValue === props.value
          ? 'background-color-brand-hover border-2 border-color-brand-hover shadow-[inset_0px_0px_0px_2.5px_#fff] animate-shadow-grow'
          : 'background-color-base border-2 border-color-supporting shadow-[inset_0px_0px_0px_2.5px_#fff]',
      );
    }

    if (props.modelValue === props.value) {
      return classNames(
        baseClasses,
        'border-color-brand-base background-color-brand-base shadow-[inset_0px_0px_0px_2.5px_#fff] animate-shadow-grow',
      );
    }

    return classNames(baseClasses, 'border-color-supporting shadow-[inset_0px_0px_0px_2.5px_#fff]');
  });

  const radioLabelClasses: ComputedRef<string> = computed(() => {
    if (props.disabled) {
      return 'text-color-disabled cursor-not-allowed';
    }

    return 'text-color-strong cursor-pointer inline-flex items-center p-0';
  });

  return {
    radioRef,
    radioClasses,
    indicatorClasses,
    radioLabelClasses,
  };
};
