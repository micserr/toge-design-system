import { computed } from 'vue';
import type { InputPropTypes } from './input';

import classNames from 'classnames';
export const useInput = (props: InputPropTypes, slots: Record<string, unknown>) => {
  const { error, disabled, offset, offsetSize } = props;

  const wrapperClasses = computed(() => {
    return classNames('flex flex-col gap-size-spacing-4xs');
  });

  const labelClasses = computed(() => {
    return classNames('body-sm-regular text-color-strong block', {
      'text-color-on-fill-disabled': disabled,
    });
  });

  const inputClasses = computed(() => {
    return classNames(
      'block',
      'w-full',
      'px-size-spacing-2xs',
      'py-size-spacing-4xs',
      'rounded-border-radius-md',
      'placeholder:text-mushroom-300',
      'text-color-strong',
      'font-size-200',
      'border border-solid border-mushroom-200',
      'focus:border-kangkong-700',
      'focus:text-color-strong',
      'focus:border-[1.5px]',
      'outline-none',
      'ring-0',
      {
        'border-[1.5px]': error,
        'border-tomato-600': error,
        'focus:border-tomato-600': error,
        'border-white-100': disabled,
        'background-color-disabled': disabled,
        'cursor-not-allowed': disabled,
        'text-color-on-fill-disabled': disabled,
        'pr-[5%]': slots.icon,
        'pl-size-spacing-lg': slots.prefix,
        'pr-[94%] sm:pr-[85%]': offsetSize === 'xs' && slots.trailing && offset[0] === '0',
        'pr-[90%]': offsetSize === 'sm' && slots.trailing && offset[0] === '0',
        'pr-[50%]': offsetSize === 'md' && slots.trailing && offset[0] === '0',
      },
    );
  });

  const iconSlotClasses = computed(() => {
    return classNames('absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-mushroom-300', {
      '!text-tomato-600': error,
    });
  });

  const prefixSlotClasses = computed(() => {
    return classNames('absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-mushroom-300', {
      '!text-tomato-600': error,
    });
  });

  const trailingSlotClasses = computed(() => {
    return classNames('absolute left-[55%] top-1/2 -translate-y-1/2 transform text-mushroom-300', {
      '!text-tomato-600': error,
      'left-[7%] sm:left-[16%]': offsetSize === 'xs' && slots.trailing && offset[1] === '0',
      'left-[11%]': offsetSize === 'sm' && slots.trailing && offset[1] === '0',
      'left-[51%]': offsetSize === 'md' && slots.trailing && offset[1] === '0',
    });
  });

  return {
    inputClasses,
    wrapperClasses,
    labelClasses,
    iconSlotClasses,
    prefixSlotClasses,
    trailingSlotClasses,
  };
};
