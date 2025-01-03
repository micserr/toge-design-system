import { computed, ref, ComputedRef } from 'vue';
import { useElementHover, useMousePressed } from '@vueuse/core';
import classNames from 'classnames';
import type { SwitchPropTypes } from './switch';

export const useSwitch = (props: SwitchPropTypes) => {
  const switchWrapperRef = ref<HTMLDivElement | null>(null);
  const switchRef = ref<HTMLInputElement | null>(null);
  const isHovered = useElementHover(switchWrapperRef);
  const { pressed } = useMousePressed({ target: switchRef });
  const { disabled, state, modelValue } = props;

  const switchProps: ComputedRef<Record<string, unknown>> = computed(() => {
    return {
      ...(disabled && { ariaDisabled: true }),
      disabled: disabled,
      autofocus: state === 'hover',
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

  const switchTextClass: ComputedRef<string> = computed(() => {
    if (props.disabled) {
      return 'tw-text-color-disabled';
    }

    return 'tw-text-color-strong';
  });

  const switchAnimationCssClass: ComputedRef<string> = computed(() => {
    return classNames(
      'tw-transition-colors',
      'before:tw-transition-all',
      'before:tw-duration-150',
      'after:tw-transition-all',
      'after:tw-duration-150',
    );
  });

  const switchMarkClass: ComputedRef<string> = computed(() => {
    return classNames(
      switchBackgroundCssClass.value,
      switchAnimationCssClass.value
    );
  });

  const switchInputClass: ComputedRef<string> = computed(() => {
    return classNames({
      'tw-cursor-not-allowed': props.disabled,
      'tw-cursor-pointer': !props.disabled,
    });
  });

  return {
    switchWrapperRef,
    switchRef,
    switchProps,
    switchMarkClass,
    switchTextClass,
    switchInputClass
  };
};
