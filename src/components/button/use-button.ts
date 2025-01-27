import { computed, ref, ComputedRef } from 'vue';
import { useElementHover, useMousePressed, useFocus } from '@vueuse/core';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { ButtonEmitTypes, ButtonPropTypes } from './button';

export const useButton = (props: ButtonPropTypes, emit: SetupContext<ButtonEmitTypes>['emit']) => {
  const buttonRef = ref<HTMLButtonElement | null>(null);
  const isHovered = useElementHover(buttonRef);
  const { pressed } = useMousePressed({ target: buttonRef });
  const { focused } = useFocus(buttonRef);
  const { state, type, size, tone, variant, disabled } = props;

  const buttonProps: ComputedRef<Record<string, unknown>> = computed(() => {
    return {
      ...(disabled && { ariaDisabled: true }),
      disabled: disabled,
      autofocus: state === 'focus',
      type: type ?? 'button',
    };
  });

  const buttonSizeCssClass: ComputedRef<string> = computed(() =>
    classNames({
      'px-[4px] py-[6px] font-medium font-size-100 leading-100': size === 'small',
      'p-[8px] font-medium font-size-100 leading-100': size === 'medium',
      'px-[8px] py-[12px] font-medium font-size-200 leading-300': size === 'large',
    }),
  );

  const buttonTextCssClass: ComputedRef<string> = computed(() => {
    if (variant === 'secondary' || variant === 'tertiary') {
      return classNames({
        'text-color-strong': tone === 'neutral',
        'text-color-brand-base': tone === 'success',
        'text-color-danger-base': tone === 'danger',
      });
    }

    return classNames({
      'text-color-strong': tone === 'neutral',
      'text-color-inverted-strong': tone === 'success' || tone === 'danger',
    });
  });

  // #region - Background Css Class
  const buttonBackgroundCssClass: ComputedRef<string> = computed(() => {
    if (variant === 'secondary') {
      return isHovered.value ? 'background-color-hover' : '';
    }

    if (variant === 'tertiary') {
      return getTertiaryBackground();
    }

    return getBackgroundBasedOnState();
  });

  function getTertiaryBackground(): string {
    if (pressed.value) {
      return 'background-color-pressed';
    }

    return isHovered.value ? 'background-color-hover' : '';
  }

  function getBackgroundBasedOnState(): string {
    if (pressed.value) {
      return getPressedBackground();
    }

    if (isHovered.value) {
      return getHoveredBackground();
    }

    return getDefaultBackground();
  }

  function getPressedBackground(): string {
    const backgrounds: Record<string, string> = {
      neutral: 'background-color-pressed',
      success: 'background-color-brand-pressed',
      danger: 'background-color-danger-pressed',
    };

    return backgrounds[tone] || '';
  }

  function getHoveredBackground(): string {
    const backgrounds: Record<string, string> = {
      neutral: 'background-color-hover',
      success: 'background-color-success-pressed',
      danger: 'background-color-danger-hover',
    };

    return backgrounds[tone] || '';
  }

  function getDefaultBackground(): string {
    const backgrounds: Record<string, string> = {
      neutral: 'background-color-base',
      success: 'background-color-brand-base',
      danger: 'background-color-danger-base',
    };

    return backgrounds[tone] || '';
  }
  // #endregion - Background Css Class

  const buttonBorderCssClass: ComputedRef<string> = computed(() => {
    if (variant === 'primary' || variant === 'tertiary') {
      if (focused.value) {
        return 'border-solid border border-white-50';
      }

      return 'border-solid border border-transparent';
    }

    return classNames({
      'border-solid border border-color-base': tone === 'neutral',
      'border-solid border border-color-brand-base': tone === 'success',
      'border-solid border border-color-danger-base': tone === 'danger',
    });
  });

  const buttonToneCssClass: ComputedRef<string> = computed(() => {
    return classNames(buttonBackgroundCssClass.value, buttonTextCssClass.value, buttonBorderCssClass.value);
  });

  const buttonAllCssClass: ComputedRef<string> = computed(() => {
    if (disabled) {
      return classNames(buttonSizeCssClass.value, 'text-color-disabled');
    }

    return classNames(buttonSizeCssClass.value, buttonToneCssClass.value);
  });

  const handleClick = (evt: MouseEvent) => {
    if (disabled) {
      evt.stopPropagation();

      return;
    }

    emit('click', evt);
  };

  return {
    buttonRef,
    buttonProps,
    buttonClass: buttonAllCssClass,
    handleClick,
  };
};
