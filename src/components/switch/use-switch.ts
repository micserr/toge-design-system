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
      return getDisabledBackground();
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
    return props.modelValue ? 'background-color-success-base' : 'switch-background-default';
  }

  function getHoveredBackground(): string {
    return props.modelValue ? 'background-color-success-hover' : 'switch-background-hover';
  }

  function getPressedBackground(): string {
    return props.modelValue ? 'background-color-success-pressed' : 'switch-background-pressed';
  }

  function getDisabledBackground(): string {
    return classNames(
      {
        'background-color-success-base': props.modelValue,
        'switch-background-default': !props.modelValue,
      },
      'opacity-60',
    );
  }
  // #endregion - Background CSS Class

  const switchTextClass: ComputedRef<string> = computed(() => {
    if (props.disabled) {
      return 'text-color-disabled';
    }

    return 'text-color-strong';
  });

  const switchAnimationCssClass: ComputedRef<string> = computed(() => {
    return classNames(
      'transition-colors',
      'before:transition-all',
      'before:duration-150',
      'after:transition-all',
      'after:duration-150',
    );
  });

  const switchMarkClass: ComputedRef<string> = computed(() => {
    return classNames(switchBackgroundCssClass.value, switchAnimationCssClass.value);
  });

  const switchInputClass: ComputedRef<string> = computed(() => {
    return classNames({
      'cursor-not-allowed': props.disabled,
      'cursor-pointer': !props.disabled,
    });
  });

  return {
    switchWrapperRef,
    switchRef,
    switchProps,
    switchMarkClass,
    switchTextClass,
    switchInputClass,
  };
};
