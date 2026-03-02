import { ref, toRefs, computed, ComputedRef } from 'vue';
import { useElementHover, useMousePressed, useFocus } from '@vueuse/core';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { ButtonEmitTypes, ButtonPropTypes } from './button';

export const useButton = (props: ButtonPropTypes, emit: SetupContext<ButtonEmitTypes>['emit']) => {
  const { state, type, size, tone, variant, disabled, hasIcon, fullwidth } = toRefs(props);

  const buttonRef = ref<HTMLButtonElement | null>(null);

  const isHovered = useElementHover(buttonRef);
  const { pressed } = useMousePressed({ target: buttonRef });
  const { focused } = useFocus(buttonRef);

  const buttonClassses: ComputedRef<string> = computed(() => {
    const defaultClasses = classNames(
      'spr-background-color spr-flex spr-items-center spr-gap-1.5 spr-w-fit spr-min-w-[24px] spr-items-center spr-justify-center spr-rounded-md spr-outline-2 spr-outline-offset-4',
      {
        'spr-w-full': fullwidth.value,
      },
    );

    const sizeClasses = classNames('spr-font-medium', {
      'spr-min-w-6 spr-p-1.5 spr-leading-100 spr-font-size-100': !hasIcon.value && size.value === 'small',
      'spr-min-w-7 spr-p-2 spr-leading-100 spr-font-size-100': !hasIcon.value && size.value === 'medium',
      'spr-max-h-9 spr-min-w-9 spr-px-2 spr-py-3 spr-leading-300 spr-font-size-200':
        !hasIcon.value && size.value === 'large',

      // Has Icon
      'spr-min-w-6 spr-p-1.5 spr-leading-100 spr-font-size-100 [&>svg]:spr-font-size-200':
        hasIcon.value && size.value === 'small',
      'spr-min-w-7 spr-p-2 spr-leading-100 spr-font-size-100 [&>svg]:spr-font-size-300':
        hasIcon.value && size.value === 'medium',
      'spr-max-h-9 spr-min-w-9 spr-px-2 spr-py-3 spr-leading-300 spr-font-size-200 [&>svg]:spr-font-size-400':
        hasIcon.value && size.value === 'large',
    });

    const toneClasses = classNames(
      buttonBackgroundCssClass.value,
      buttonTextCssClass.value,
      buttonBorderCssClass.value,
    );

    const transitionClasses = classNames([
      'spr-transition spr-duration-150 spr-ease-in-out',
      'hover:spr-shadow-button-hover',
      'active:spr-scale-95',
    ]);

    if (disabled.value) {
      if (variant.value === 'primary')
        return classNames(
          defaultClasses,
          sizeClasses,
          'spr-text-color-disabled spr-background-color-disabled !spr-shadow-none !spr-cursor-not-allowed spr-border-none',
        );

      if (variant.value === 'secondary')
        return classNames(
          defaultClasses,
          sizeClasses,
          'spr-text-color-disabled !spr-shadow-none !spr-cursor-not-allowed spr-border spr-border-solid spr-border-color-disabled',
        );

      if (variant.value === 'tertiary')
        return classNames(
          defaultClasses,
          sizeClasses,
          'spr-text-color-disabled !spr-shadow-none !spr-cursor-not-allowed spr-border-none',
        );
    }

    return classNames(defaultClasses, sizeClasses, toneClasses, transitionClasses);
  });

  const buttonTextCssClass: ComputedRef<string> = computed(() => {
    if (variant.value === 'secondary' || variant.value === 'tertiary') {
      return classNames({
        'spr-text-color-strong': tone.value === 'neutral',
        'spr-text-color-brand-base': tone.value === 'success',
        'spr-text-color-danger-base': tone.value === 'danger',
      });
    }

    return classNames({
      'spr-text-color-strong': tone.value === 'neutral',
      'spr-text-color-inverted-strong': tone.value === 'success' || tone.value === 'danger',
    });
  });

  // #region - Background Css Class
  const buttonBackgroundCssClass: ComputedRef<string> = computed(() => {
    if (variant.value === 'secondary') {
      if (pressed.value) {
        return 'spr-background-color-pressed !spr-shadow-button';
      }

      return isHovered.value ? 'spr-background-color-hover' : 'spr-background-color ';
    }

    if (variant.value === 'tertiary') {
      return getTertiaryBackground();
    }

    return getBackgroundBasedOnState();
  });

  const getTertiaryBackground = (): string => {
    if (pressed.value) {
      return 'spr-background-color-pressed !spr-shadow-button';
    }

    return classNames('!border-none', {
      'spr-background-color-hover': isHovered.value,
    });
  };

  const getBackgroundBasedOnState = (): string => {
    if (pressed.value) {
      return getPressedBackground();
    }

    if (isHovered.value) {
      return getHoveredBackground();
    }

    return getDefaultBackground();
  };

  const getPressedBackground = (): string => {
    const backgrounds: Record<string, string> = {
      neutral: 'spr-background-color-pressed !spr-shadow-button',
      success: 'spr-background-color-brand-pressed !spr-shadow-button',
      danger: 'spr-background-color-danger-pressed !spr-shadow-button',
    };

    return backgrounds[tone.value] || '';
  };

  const getHoveredBackground = (): string => {
    const backgrounds: Record<string, string> = {
      neutral: 'spr-background-color-hover',
      success: 'spr-background-color-success-pressed',
      danger: 'spr-background-color-danger-hover',
    };

    return backgrounds[tone.value] || '';
  };

  const getDefaultBackground = (): string => {
    const backgrounds: Record<string, string> = {
      neutral: 'spr-background-color-base',
      success: 'spr-background-color-brand-base',
      danger: 'spr-background-color-danger-base',
    };

    return backgrounds[tone.value] || '';
  };
  // #endregion - Background Css Class

  const buttonBorderCssClass: ComputedRef<string> = computed(() => {
    return classNames('spr-border spr-border-solid', {
      'spr-border-transparent': variant.value === 'primary' || variant.value === 'tertiary',
      'spr-border-white-50': (focused.value && variant.value === 'primary') || variant.value === 'tertiary',
      'spr-border-color-base': variant.value === 'secondary' && tone.value === 'neutral',
      'spr-border-color-brand-base': variant.value === 'secondary' && tone.value === 'success',
      'spr-border-color-danger-base': variant.value === 'secondary' && tone.value === 'danger',
    });
  });

  const buttonProps: ComputedRef<Record<string, unknown>> = computed(() => {
    return {
      ...(disabled.value && { ariaDisabled: true }),
      disabled: disabled.value,
      autofocus: state.value === 'focus',
      type: type.value,
    };
  });

  const handleClick = (evt: MouseEvent) => {
    if (disabled.value) {
      evt.stopPropagation();

      return;
    }

    emit('click', evt);
  };

  return {
    buttonClassses,
    buttonRef,
    buttonProps,
    handleClick,
  };
};
