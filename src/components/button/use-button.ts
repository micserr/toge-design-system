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
  const { state, tag, type, href, size, tone, variant, disabled } = props;

  const buttonProps: ComputedRef<Record<string, unknown>> = computed(() => {
    if (tag === 'spr-button') {
      return {
        ...(disabled && { ariaDisabled: true }),
        disabled: disabled,
        autofocus: state === 'focus',
        type: type ?? 'button',
      };
    }
    if (tag === 'a') {
      return {
        href: href ?? '#',
      };
    }
    return {};
  });

  const buttonSizeCssClass: ComputedRef<string> = computed(() =>
    classNames({
      'tw-min-w-9 tw-px-1 tw-py-1.5': size === 'small',
      'tw-min-w-9 tw-p-2': size === 'medium',
      'tw-min-w-10 tw-px-2 tw-py-3': size === 'large',
    }),
  );

  const buttonTextCssClass: ComputedRef<string> = computed(() => {
    if (variant === 'secondary' || variant === 'tertiary') {
      return classNames({
        'tw-text-mushroom-950': tone === 'neutral',
        'tw-text-kangkong-700': tone === 'success',
        'tw-text-tomato-600': tone === 'danger',
      });
    }

    return classNames({
      'tw-text-mushroom-950': tone === 'neutral',
      'tw-text-white-50': tone === 'success' || tone === 'danger',
    });
  });

  // #region - Background Css Class
  const buttonBackgroundCssClass: ComputedRef<string> = computed(() => {
    if (variant === 'tertiary') {
      return getTertiaryBackground();
    }

    if (variant === 'secondary') {
      return isHovered.value ? 'tw-bg-mushroom-100' : '';
    }

    return getBackgroundBasedOnState();
  });

  function getTertiaryBackground(): string {
    if (pressed.value) {
      return 'tw-bg-mushroom-200';
    }
    return isHovered.value ? 'tw-bg-mushroom-100' : '';
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
      neutral: 'tw-bg-mushroom-200',
      success: 'tw-bg-kangkong-900',
      danger: 'tw-bg-tomato-800',
    };
    return backgrounds[tone] || '';
  }

  function getHoveredBackground(): string {
    const backgrounds: Record<string, string> = {
      neutral: 'tw-bg-mushroom-100',
      success: 'tw-bg-kangkong-800',
      danger: 'tw-bg-tomato-700',
    };
    return backgrounds[tone] || '';
  }

  function getDefaultBackground(): string {
    const backgrounds: Record<string, string> = {
      neutral: 'tw-bg-white-50',
      success: 'tw-bg-kangkong-700',
      danger: 'tw-bg-tomato-600',
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
      'tw-border-solid tw-border tw-border-mushroom-300': tone === 'neutral',
      'tw-border-solid tw-border tw-border-kangkong-700': tone === 'success',
      'tw-border-solid tw-border tw-border-tomato-600': tone === 'danger',
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
      return classNames(buttonSizeCssClass.value, 'tw-text-white-300');
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
