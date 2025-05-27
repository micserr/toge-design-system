import { computed, ref, ComputedRef, toRefs, useSlots } from 'vue';
import { useElementHover, useMousePressed } from '@vueuse/core';

import classNames from 'classnames';

import type { SwitchPropTypes } from './switch';

export const useSwitch = (props: SwitchPropTypes) => {
  const switchWrapperRef = ref<HTMLDivElement | null>(null);
  const switchRef = ref<HTMLInputElement | null>(null);

  const isHovered = useElementHover(switchWrapperRef);
  const { pressed } = useMousePressed({ target: switchRef });
  const { disabled, state, modelValue } = toRefs(props);
  const slots = useSlots();

  // if the slot label is empty, we will not show the label
  const isLeftTextLabel = (!slots.default || slots.default().length === 0) && !slots.leftText;
  const isRightTextLabel = !slots.rightText;

  const switchProps: ComputedRef<Record<string, unknown>> = computed(() => {
    return {
      ...(disabled.value && { ariaDisabled: true }),
      disabled: disabled.value,
      autofocus: state.value === 'hover',
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
    return props.modelValue ? 'spr-background-color-success-base' : 'spr-switch-background-default';
  }

  function getHoveredBackground(): string {
    return props.modelValue ? 'spr-background-color-success-hover' : 'spr-switch-background-hover';
  }

  function getPressedBackground(): string {
    return props.modelValue ? 'spr-background-color-success-pressed' : 'spr-switch-background-pressed';
  }

  function getDisabledBackground(): string {
    return classNames(
      {
        'spr-background-color-success-base': props.modelValue,
        'spr-switch-background-default': !props.modelValue,
      },
      'spr-opacity-60',
    );
  }
  // #endregion - Background CSS Class

  const switchTextClass: ComputedRef<string> = computed(() => {
    if (props.disabled) {
      return 'spr-text-color-disabled';
    }

    return 'spr-text-color-strong';
  });

  const switchAnimationCssClass: ComputedRef<string> = computed(() => {
    return classNames(
      'spr-transition-colors',
      'before:spr-transition-all before:spr-duration-150',
      'after:spr-transition-all after:spr-duration-150',
    );
  });

  const switchMarkClass: ComputedRef<string> = computed(() => {
    return classNames(switchBackgroundCssClass.value, switchAnimationCssClass.value);
  });

  const switchInputClass: ComputedRef<string> = computed(() => {
    return classNames({
      'spr-cursor-not-allowed': props.disabled,
      'spr-cursor-pointer': !props.disabled,
    });
  });

  return {
    switchWrapperRef,
    switchRef,
    switchProps,
    switchMarkClass,
    switchTextClass,
    switchInputClass,
    isLeftTextLabel,
    isRightTextLabel
  };
};
