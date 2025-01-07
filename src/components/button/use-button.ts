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
      'tw-px-[4px] tw-py-[6px] tw-font-medium tw-font-size-100 tw-leading-100': size === 'small',
      'tw-p-[8px] tw-font-medium tw-font-size-100 tw-leading-100': size === 'medium',
      'tw-px-[8px] tw-py-[12px] tw-font-medium tw-font-size-200 tw-leading-300': size === 'large',
    }),
  );

  const buttonTextCssClass: ComputedRef<string> = computed(() => {
    if (variant === 'secondary' || variant === 'tertiary') {
      return classNames({
        'tw-text-color-strong': tone === 'neutral',
        'tw-text-color-brand-base': tone === 'success',
        'tw-text-color-danger-base': tone === 'danger',
      });
    }

    return classNames({
      'tw-text-color-strong': tone === 'neutral',
      'tw-text-color-inverted-strong': tone === 'success' || tone === 'danger',
    });
  });

  // #region - Background Css Class
  const buttonBackgroundCssClass: ComputedRef<string> = computed(() => {
    if (variant === 'secondary') {
      return isHovered.value ? 'tw-background-color-hover' : '';
    }

    if (variant === 'tertiary') {
      return getTertiaryBackground();
    }

    return getBackgroundBasedOnState();
  });

  function getTertiaryBackground(): string {
    if (pressed.value) {
      return 'tw-background-color-pressed';
    }

    return isHovered.value ? 'tw-background-color-hover' : '';
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
      neutral: 'tw-background-color-pressed',
      success: 'tw-background-color-brand-pressed',
      danger: 'tw-background-color-danger-pressed',
    };

    return backgrounds[tone] || '';
  }

  function getHoveredBackground(): string {
    const backgrounds: Record<string, string> = {
      neutral: 'tw-background-color-hover',
      success: 'tw-background-color-success-pressed',
      danger: 'tw-background-color-danger-hover',
    };

    return backgrounds[tone] || '';
  }

  function getDefaultBackground(): string {
    const backgrounds: Record<string, string> = {
      neutral: 'tw-background-color-base',
      success: 'tw-background-color-brand-base',
      danger: 'tw-background-color-danger-base',
    };

    return backgrounds[tone] || '';
  }
  // #endregion - Background Css Class

  const buttonBorderCssClass: ComputedRef<string> = computed(() => {
    if (variant === 'primary' || variant === 'tertiary') {
      if (focused.value) {
        return 'tw-border-solid tw-border tw-border-white-50';
      }

      return 'tw-border-solid tw-border tw-border-transparent';
    }

    return classNames({
      'tw-border-solid tw-border tw-border-color-base': tone === 'neutral',
      'tw-border-solid tw-border tw-border-color-brand-base': tone === 'success',
      'tw-border-solid tw-border tw-border-color-danger-base': tone === 'danger',
    });
  });

  const buttonToneCssClass: ComputedRef<string> = computed(() => {
    return classNames(buttonBackgroundCssClass.value, buttonTextCssClass.value, buttonBorderCssClass.value);
  });

  const buttonShadowClass: ComputedRef<string> = computed(() => {
    if (pressed.value) {
      return 'tw-shadow-button';
    } else if (focused.value) {
      return 'tw-shadow-button-active';
    }

    return '';
  });

  const buttonAllCssClass: ComputedRef<string> = computed(() => {
    if (disabled) {
      return classNames(buttonSizeCssClass.value, 'tw-text-color-disabled');
    }

    return classNames(buttonSizeCssClass.value, buttonToneCssClass.value, buttonShadowClass.value);
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
