import { toRefs, computed, ComputedRef } from 'vue';
import { useVModel } from '@vueuse/core';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { InputPropTypes, InputEmitTypes } from './input';

interface InputClasses {
  baseClasses: string;
  labelClasses: string;
  inputTextClasses: string;
  iconSlotClasses: string;
  prefixSlotClasses: string;
  trailingSlotClasses: string;
  helperClasses: string;
}

export const useInput = (
  props: InputPropTypes,
  slots: Record<string, unknown>,
  emit: SetupContext<InputEmitTypes>['emit'],
) => {
  const { active, error, disabled, readonly, offsetSize } = toRefs(props);
  const modelValue = useVModel(props, 'modelValue', emit);

  const inputClasses: ComputedRef<InputClasses> = computed(() => {
    const baseClasses = classNames('spr-flex spr-flex-col spr-gap-size-spacing-4xs');

    const labelClasses = classNames('spr-body-sm-regular spr-text-color-strong spr-block', {
      'spr-text-color-on-fill-disabled': disabled.value,
    });

    const inputTextClasses = classNames(
      'spr-block spr-w-full spr-px-size-spacing-2xs spr-py-size-spacing-4xs spr-rounded-border-radius-md spr-outline-none spr-ring-0',
      'spr-text-color-strong spr-font-size-200',
      'spr-border spr-border-solid',
      'placeholder:spr-text-mushroom-300',
      {
        'spr-border-mushroom-200 focus:spr-border-kangkong-700': !error.value && !disabled.value && !active.value,
        'spr-border-kangkong-700 spr-border-[1.5px] spr-border-solid': active.value,
        'spr-border-tomato-600 focus:spr-border-tomato-600': error.value,
        'spr-background-color-disabled spr-border-white-100 focus:spr-border-white-100 spr-cursor-not-allowed spr-text-color-on-fill-disabled':
          disabled.value,
        'spr-pr-[5%]': slots.icon,
        'spr-pl-size-spacing-lg': slots.prefix,
        'spr-pr-[93%] sm:spr-pr-[85%]': offsetSize.value === 'xs' && slots.trailing,
        'spr-pr-[90%] sm:spr-pr-[80%]': offsetSize.value === 'sm' && slots.trailing,
        'spr-pr-[50%]': offsetSize.value === 'md' && slots.trailing,
        'spr-cursor-pointer': readonly.value,
      },
    );

    const iconSlotClasses = classNames(
      'spr-absolute spr-right-3 spr-top-1/2 spr-h-5 spr-w-5 -spr-translate-y-1/2 spr-transform spr-text-mushroom-300',
      {
        '!spr-text-tomato-600': error.value,
      },
    );

    const prefixSlotClasses = classNames(
      'spr-absolute spr-left-3 spr-top-1/2 spr-h-5 spr-w-5 -spr-translate-y-1/2 spr-transform spr-text-mushroom-300',
      {
        '!spr-text-tomato-600': error.value,
      },
    );

    const trailingSlotClasses = classNames(
      'spr-absolute spr-left-[55%] spr-top-1/2 -spr-translate-y-1/2 spr-transform spr-text-mushroom-300',
      {
        '!spr-text-tomato-600': error.value,
        'spr-left-[7%] sm:spr-left-[16%]': offsetSize.value === 'xs' && slots.trailing,
        'spr-left-[12%] sm:spr-left-[24%]': offsetSize.value === 'sm' && slots.trailing,
        'spr-left-[52%]': offsetSize.value === 'md' && slots.trailing,
      },
    );

    const helperClasses = classNames(
      {
        'spr-text-color-danger-base': error.value,
        'spr-text-color-supporting': !error.value,
      }
    );

    return { baseClasses, labelClasses, inputTextClasses, iconSlotClasses, prefixSlotClasses, trailingSlotClasses, helperClasses };
  });

  const onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;

    modelValue.value = target.value;
  };

  return {
    inputClasses,
    onInput,
  };
};
