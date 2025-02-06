import { computed, ref, ComputedRef, toRefs } from 'vue';
import { useElementHover, useMousePressed, useFocus } from '@vueuse/core';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { ButtonEmitTypes, ButtonPropTypes } from './button';

export const useButton = (props: ButtonPropTypes, emit: SetupContext<ButtonEmitTypes>['emit']) => {
  const buttonRef = ref<HTMLButtonElement | null>(null);
  const isHovered = useElementHover(buttonRef);
  const { pressed } = useMousePressed({ target: buttonRef });
  const { focused } = useFocus(buttonRef);
  const { state, type, size, tone, variant, disabled, hasIcon } = toRefs(props);

  const buttonProps: ComputedRef<Record<string, unknown>> = computed(() => {
    return {
      ...(disabled.value && { ariaDisabled: true }),
      disabled: disabled.value,
      autofocus: state.value === 'focus',
      type: type.value,
    };
  });

  const buttonDefaultCssClass: ComputedRef<string> = computed(() =>
    classNames([
      'background-color inline-flex w-fit min-w-[24px] items-center justify-center rounded-md outline-2 outline-offset-4',
    ]),
  );

  const buttonTransitionCssClass: ComputedRef<string> = computed(() =>
    classNames(['transition duration-150 ease-in-out', 'hover:shadow-button-hover', 'active:scale-95']),
  );

  const buttonSizeCssClass: ComputedRef<string> = computed(() =>
    classNames({
      'min-w-6 p-size-spacing-4xs font-medium font-size-100 leading-100': size.value === 'small',
      'min-w-7 p-2 font-medium font-size-100 leading-100': size.value === 'medium',
      '!min-w-9 px-2 py-3 font-medium font-size-200 leading-300 max-h-9': size.value === 'large',
      'font-size-400': hasIcon.value && size.value === 'large',
      'font-size-300': hasIcon.value && size.value === 'medium',
      'font-size-200': hasIcon.value && size.value === 'small',
    }),
  );

  const buttonTextCssClass: ComputedRef<string> = computed(() => {
    if (variant.value === 'secondary' || variant.value === 'tertiary') {
      return classNames({
        'text-color-strong': tone.value === 'neutral',
        'text-color-brand-base': tone.value === 'success',
        'text-color-danger-base': tone.value === 'danger',
      });
    }

    return classNames({
      'text-color-strong': tone.value === 'neutral',
      'text-color-inverted-strong': tone.value === 'success' || tone.value === 'danger',
    });
  });

  // #region - Background Css Class
  const buttonBackgroundCssClass: ComputedRef<string> = computed(() => {
    if (variant.value === 'secondary') {
      if (pressed.value) {
        return 'background-color-pressed !shadow-button';
      }

      return isHovered.value ? 'background-color-hover' : 'background-color ';
    }

    if (variant.value === 'tertiary') {
      return getTertiaryBackground();
    }

    return getBackgroundBasedOnState();
  });

  function getTertiaryBackground(): string {
    if (pressed.value) {
      return 'background-color-pressed !shadow-button';
    }

    return classNames('!border-none', {
      'background-color-hover': isHovered.value,
    });
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
      neutral: 'background-color-pressed !shadow-button',
      success: 'background-color-brand-pressed !shadow-button',
      danger: 'background-color-danger-pressed !shadow-button',
    };

    return backgrounds[tone.value] || '';
  }

  function getHoveredBackground(): string {
    const backgrounds: Record<string, string> = {
      neutral: 'background-color-hover',
      success: 'background-color-success-pressed',
      danger: 'background-color-danger-hover',
    };

    return backgrounds[tone.value] || '';
  }

  function getDefaultBackground(): string {
    const backgrounds: Record<string, string> = {
      neutral: 'background-color-base',
      success: 'background-color-brand-base',
      danger: 'background-color-danger-base',
    };

    return backgrounds[tone.value] || '';
  }
  // #endregion - Background Css Class

  const buttonBorderCssClass: ComputedRef<string> = computed(() => {
    if (variant.value === 'primary' || variant.value === 'tertiary') {
      if (focused.value) {
        return 'border-solid !border !border-white-50';
      }

      return 'border-solid !border !border-transparent';
    }

    return classNames({
      'border-solid !border !border-color-base': tone.value === 'neutral',
      'border-solid !border !border-color-brand-base': tone.value === 'success',
      'border-solid !border !border-color-danger-base': tone.value === 'danger',
    });
  });

  const buttonToneCssClass: ComputedRef<string> = computed(() => {
    return classNames(buttonBackgroundCssClass.value, buttonTextCssClass.value, buttonBorderCssClass.value);
  });

  const buttonAllCssClass: ComputedRef<string> = computed(() => {
    if (disabled.value) {
      if (variant.value === 'primary')
        return classNames(
          buttonDefaultCssClass.value,
          buttonSizeCssClass.value,
          'text-color-disabled background-color-disabled !border-0 !shadow-none !cursor-not-allowed',
        );

      if (variant.value === 'secondary')
        return classNames(
          buttonDefaultCssClass.value,
          buttonSizeCssClass.value,
          'text-color-disabled border-solid !border !border-color-disabled !shadow-none !cursor-not-allowed',
        );

      if (variant.value === 'tertiary')
        return classNames(
          buttonDefaultCssClass.value,
          buttonSizeCssClass.value,
          'text-color-disabled !border-0 !shadow-none !cursor-not-allowed',
        );
    }

    return classNames(
      buttonDefaultCssClass.value,
      buttonSizeCssClass.value,
      buttonToneCssClass.value,
      buttonTransitionCssClass.value,
    );
  });

  const handleClick = (evt: MouseEvent) => {
    if (disabled.value) {
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
