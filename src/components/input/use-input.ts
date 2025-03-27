import { ref, toRefs, computed, ComputedRef } from 'vue';
import { useVModel, useFocus } from '@vueuse/core';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { InputPropTypes, InputEmitTypes } from './input';

interface InputClasses {
  baseClasses: string;
  labelClasses: string;
  inputTextBaseClasses: string;
  inputTextClasses: string;
  iconSlotClasses: string;
  prefixSlotClasses: string;
  trailingSlotClasses: string;
  helperClasses: string;
}

export const useInput = (
  props: InputPropTypes,
  emit: SetupContext<InputEmitTypes>['emit'],
  slots: Record<string, unknown>,
) => {
  const { active, error, disabled, offsetSize } = toRefs(props);

  const inputTextRef = ref(null);

  const { focused } = useFocus(inputTextRef);

  const modelValue = useVModel(props, 'modelValue', emit);

  const inputClasses: ComputedRef<InputClasses> = computed(() => {
    const baseClasses = classNames('spr-flex spr-flex-col spr-gap-size-spacing-4xs');

    const labelClasses = classNames('spr-body-sm-regular spr-text-color-strong spr-block', {
      'spr-text-color-on-fill-disabled': disabled.value,
    });

    const inputTextBaseClasses = classNames(
      'spr-relative spr-flex spr-items-center spr-rounded-border-radius-md spr-border-[1.5px] spr-border-solid',
      {
        // Border State
        'spr-border-color-weak': !focused.value && !error.value && !disabled.value && !active.value,
        'spr-border-color-brand-base': !focused.value && active.value,
        'spr-border-color-danger-base': !focused.value && error.value,

        // Border State Focused
        'focus: spr-border-kangkong-700': focused.value && !error.value && !disabled.value && !active.value,
        'focus: spr-border-tomato-600': focused.value && error.value,
        'focus: spr-border-white-100': focused.value && disabled.value,

        // Disabled State
        'spr-background-color-disabled spr-cursor-not-allowed spr-text-color-on-fill-disabled spr-border-mushroom-100':
          disabled.value,
      },
    );

    const inputTextClasses = classNames(
      'spr-block spr-h-8 spr-py-size-spacing-4xs spr-outline-none spr-ring-0 spr-border-none spr-rounded-border-radius-md spr-font-size-200 spr-text-color-strong',
      'spr-text-color-strong spr-font-size-200 [font-weight:inherit]',
      'placeholder:spr-text-mushroom-300',
      {
        // Disabled State
        'spr-cursor-not-allowed': disabled.value,

        // Prefix, Suffix, Trailing
        'spr-px-3': !slots.prefix && !slots.icon && !slots.trailing,
        'spr-pr-3': slots.prefix && !slots.icon && !slots.trailing,
        'spr-pl-3': !slots.prefix && (slots.icon || slots.trailing),

        // Trailing Width Adjustments
        'spr-w-full': !slots.trailing,
        'spr-w-[50px]': slots.trailing && offsetSize.value === 'xs',
        'spr-w-[40%]': slots.trailing && offsetSize.value === 'sm',
        'spr-w-[100%]': slots.trailing && offsetSize.value === 'md',
      },
    );

    const iconSlotClasses = classNames(
      'spr-flex spr-items-center spr-justify-center spr-h-8 spr-px-2 [&>svg]:spr-min-h-4 [&>svg]:spr-min-w-4',
      {
        'spr-text-mushroom-300': !error.value,
        'spr-text-tomato-600': error.value,
      },
    );

    const prefixSlotClasses = classNames(
      'spr-flex spr-items-center spr-justify-center spr-h-8 spr-px-2 [&>svg]:spr-min-h-4 [&>svg]:spr-min-w-4',
      {
        'spr-text-mushroom-300': !error.value,
        'spr-text-tomato-600': error.value,
        'spr-font-size-200': props.type === 'url',
      },
    );

    const trailingSlotClasses = classNames('spr-flex spr-items-center spr-h-8 spr-w-full spr-px-2', {
      'spr-text-mushroom-300': !error.value,
      'spr-text-tomato-600': error.value,
    });

    const helperClasses = classNames({
      'spr-text-color-danger-base': error.value,
      'spr-text-color-supporting': !error.value,
    });

    return {
      baseClasses,
      labelClasses,
      inputTextBaseClasses,
      inputTextClasses,
      iconSlotClasses,
      prefixSlotClasses,
      trailingSlotClasses,
      helperClasses,
    };
  });

  const onInput = (event: Event) => {
    modelValue.value = (event.target as HTMLInputElement).value;
  };

  return {
    inputTextRef,
    inputClasses,
    onInput,
  };
};
