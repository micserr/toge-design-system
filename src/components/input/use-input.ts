import { computed, toRefs, ref } from 'vue';
import { useVModel } from '@vueuse/core';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import { type InputPropTypes, type InputEmitTypes, TYPE_HAS_LEADING_ICONS, TYPE_HAS_TRAILING_ICONS } from './input';

export const useInput = (
  props: InputPropTypes,
  slots: Record<string, unknown>,
  emit: SetupContext<InputEmitTypes>['emit'],
) => {
  const { active, error, disabled, readonly, offsetSize } = toRefs(props);
  const showPassword = ref(false);
  const modelValue = useVModel(props, 'modelValue', emit);

  const wrapperClasses = computed(() => {
    return classNames('spr-flex spr-flex-col spr-gap-size-spacing-4xs');
  });

  const labelClasses = computed(() => {
    return classNames('spr-body-sm-regular spr-text-color-strong spr-block', {
      'spr-text-color-on-fill-disabled': disabled.value,
    });
  });

  const inputClasses = computed(() => {
    return classNames(
      'spr-block spr-w-full spr-px-size-spacing-2xs spr-py-size-spacing-4xs spr-rounded-border-radius-md spr-outline-none spr-ring-0',
      'spr-text-color-strong spr-font-size-200',
      'focus:!spr-border-kangkong-700 focus:spr-text-color-strong focus:!spr-border-[1.5px]',
      'placeholder:spr-text-mushroom-300',
      {
        'spr-border spr-border-solid spr-border-mushroom-200': !error.value || !disabled.value,
        '!spr-border-[1.5px]': error.value,
        '!spr-border-tomato-600': error.value,
        'focus:!spr-border-tomato-600': error.value,
        '!spr-border-white-100': disabled.value,
        'spr-background-color-disabled': disabled.value,
        'spr-cursor-not-allowed': disabled.value,
        'spr-text-color-on-fill-disabled': disabled.value,
        'spr-pr-[5%]': hasIconSlot.value,
        'spr-pl-size-spacing-lg': hasPrefix.value,
        '!spr-pl-size-spacing-4xl': props.type === 'url',
        'spr-pr-[93%] sm:spr-pr-[85%]': offsetSize.value === 'xs' && slots.trailing,
        'spr-pr-[90%] sm:spr-pr-[80%]': offsetSize.value === 'sm' && slots.trailing,
        'spr-pr-[50%]': offsetSize.value === 'md' && slots.trailing,
        'spr-cursor-pointer': readonly.value,
        'spr-border-kangkong-700': active.value,
        'spr-text-color-strong': active.value,
        'spr-border-[1.5px]': active.value,
      },
    );
  });

  const iconSlotClasses = computed(() => {
    return classNames(
      'spr-absolute spr-right-3 spr-top-1/2 spr-h-5 spr-w-5 -spr-translate-y-1/2 spr-transform spr-text-mushroom-300',
      {
        '!spr-text-tomato-600': error.value,
        'spr-cursor-pointer' : props.type === 'password',
      },
    );
  });

  const prefixSlotClasses = computed(() => {
    return classNames(
      'spr-absolute spr-left-3 spr-top-1/2 spr-h-5 spr-w-5 -spr-translate-y-1/2 spr-transform spr-text-mushroom-300',
      {
        '!spr-text-tomato-600': error.value,
        'spr-font-size-200 !spr-top-4 ': props.type === 'url',
      },
    );
  });

  const trailingSlotClasses = computed(() => {
    return classNames(
      'spr-absolute spr-left-[55%] spr-top-1/2 -spr-translate-y-1/2 spr-transform spr-text-mushroom-300',
      {
        '!spr-text-tomato-600': error.value,
        'spr-left-[7%] sm:spr-left-[16%]': offsetSize.value === 'xs' && slots.trailing,
        'spr-left-[12%] sm:spr-left-[24%]': offsetSize.value === 'sm' && slots.trailing,
        'spr-left-[52%]': offsetSize.value === 'md' && slots.trailing,
      },
    );
  });

  const onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    
    modelValue.value = target.value;
  };

  const hasPrefix = computed(() => {
    return slots.prefix || TYPE_HAS_LEADING_ICONS.includes(props.type as typeof TYPE_HAS_LEADING_ICONS[number]);
  });

  const hasIconSlot = computed(() => {
    return slots.icon || TYPE_HAS_TRAILING_ICONS.includes(props.type as typeof TYPE_HAS_TRAILING_ICONS[number]);
  });

  const toggleShowPassword = () => {
    showPassword.value = !showPassword.value;
  }

  const evaluateEyeIcon = () => {
    return showPassword.value ? 'ph:eye' : 'ph:eye-closed';
  };

  const evaluateInputType = () => {
    if (props.type === 'password') {
      return showPassword.value ? 'text' : 'password';
    }
    return 'text';
  }
  return {
    inputClasses,
    wrapperClasses,
    labelClasses,
    iconSlotClasses,
    prefixSlotClasses,
    trailingSlotClasses,
    onInput,
    hasPrefix,
    hasIconSlot,
    toggleShowPassword,
    evaluateEyeIcon,
    evaluateInputType,
  };
};
