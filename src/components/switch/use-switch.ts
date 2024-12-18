import { computed, ref, ComputedRef } from 'vue';
import { useElementHover, useMousePressed } from '@vueuse/core';
import classNames from 'classnames';
import type { SwitchPropTypes } from './switch';

export const useSwitch = (props: SwitchPropTypes) => {
  const switchWrapperRef = ref<HTMLDivElement | null>(null);
  const switchRef = ref<HTMLInputElement | null>(null);
  const isHovered = useElementHover(switchWrapperRef);
  const { pressed } = useMousePressed({ target: switchRef });
  const { disabled, state, animated, modelValue } = props;

  const switchProps: ComputedRef<Record<string, unknown>> = computed(() => {
    return {
      ...(disabled && { ariaDisabled: true }),
      disabled: disabled,
      autofocus: state === 'hover',
      animated: animated,
      modelValue: modelValue,
    };
  });

  // #region - Background CSS Class
  const switchBackgroundCssClass: ComputedRef<string> = computed(() => {
    if (props.disabled) {
      return getDisabledBackground()
    }
    if (pressed.value) {
      return getPressedBackground();
    }
    if (isHovered.value) {
      return getHoveredBackground();
    }

    return getDefaultBackground();
  });

  function getDefaultBackground(): string {
    return props.modelValue ? 
      'tw-background-color-success-base' : 
      'tw-switch-background-default';
  }

  function getHoveredBackground(): string {
    return props.modelValue ? 
      'tw-background-color-success-hover' :
      'tw-switch-background-hover';
  }

  function getPressedBackground(): string {
    return props.modelValue ? 
      'tw-background-color-success-pressed' :
      'tw-switch-background-pressed';
  }

  function getDisabledBackground(): string {
    return classNames(
      { 
        'tw-background-color-success-base' : props.modelValue,
        'tw-switch-background-default' : !props.modelValue
      },
      'tw-opacity-60',
    );
  }
  // #endregion - Background CSS Class

  const switchTextCssClass: ComputedRef<string> = computed(() => {
    if (props.disabled) {
      return 'tw-text-color-disabled';
    }

    return 'tw-text-color-strong';
  });

  const switchAnimationCssClass: ComputedRef<string> = computed(() => {
    if (props.animated) {
      return classNames(
        'tw-transition-colors',
        'before:tw-transition-all',
        'before:tw-duration-500',
        'after:tw-transition-all',
        'after:tw-duration-500',
      );
    }

    return '';
  });

  const switchMarkClass: ComputedRef<string> = computed(() => {
    return classNames(
      switchBackgroundCssClass.value,
      switchAnimationCssClass.value
    );
  });

  return {
    switchWrapperRef,
    switchRef,
    switchProps,
    switchMarkClass,
    switchTextCssClass,
  };
};
