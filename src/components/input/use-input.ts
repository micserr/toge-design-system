import { computed } from 'vue';
import type { InputPropTypes } from './input';

import classNames from 'classnames';
export const useInput = (props: InputPropTypes, slots: Record<string, unknown>) => {
  const { error, disabled, offset, offsetSize } = props;

  const wrapperClasses = computed(() => {
    return classNames('tw-flex tw-flex-col tw-gap-size-spacing-4xs');
  });

  const labelClasses = computed(() => {
    return classNames('tw-body-sm-regular tw-text-color-strong tw-block', {
      'tw-text-color-on-fill-disabled': disabled,
    });
  });

  const inputClasses = computed(() => {
    return classNames(
      'tw-block',
      'tw-w-full',
      'tw-px-size-spacing-2xs',
      'tw-py-size-spacing-4xs',
      'tw-rounded-border-radius-md',
      'placeholder:tw-text-mushroom-300',
      'tw-text-color-strong',
      'tw-font-size-200',
      'tw-border tw-border-solid tw-border-mushroom-200',
      'focus:tw-border-kangkong-700',
      'focus:tw-text-color-strong',
      'focus:tw-border-[1.5px]',
      'tw-outline-none',
      'tw-ring-0',
      {
        'tw-border-[1.5px]': error,
        'tw-border-tomato-600': error,
        'focus:tw-border-tomato-600': error,
        'tw-border-white-100': disabled,
        'tw-background-color-disabled': disabled,
        'tw-cursor-not-allowed': disabled,
        'tw-text-color-on-fill-disabled': disabled,
        'tw-pr-[5%]': slots.icon,
        'tw-pl-size-spacing-lg': slots.prefix,
        'tw-pr-[94%] sm:tw-pr-[85%]': offsetSize === 'xs' && slots.trailing && offset[0] === '0',
        'tw-pr-[90%]': offsetSize === 'sm' && slots.trailing && offset[0] === '0',
        'tw-pr-[50%]': offsetSize === 'md' && slots.trailing && offset[0] === '0',
      },
    );
  });

  const iconSlotClasses = computed(() => {
    return classNames(
      'tw-absolute tw-right-3 tw-top-1/2 tw-h-5 tw-w-5 tw--translate-y-1/2 tw-transform tw-text-mushroom-300',
      { '!tw-text-tomato-600': error },
    );
  });

  const prefixSlotClasses = computed(() => {
    return classNames(
      'tw-absolute tw-left-3 tw-top-1/2 tw-h-5 tw-w-5 tw--translate-y-1/2 tw-transform tw-text-mushroom-300',
      { '!tw-text-tomato-600': error },
    );
  });

  const trailingSlotClasses = computed(() => {
    return classNames('tw-absolute tw-left-[55%] tw-top-1/2 tw--translate-y-1/2 tw-transform tw-text-mushroom-300', {
      '!tw-text-tomato-600': error,
      'tw-left-[7%] sm:tw-left-[16%]': offsetSize === 'xs' && slots.trailing && offset[1] === '0',
      'tw-left-[11%]': offsetSize === 'sm' && slots.trailing && offset[1] === '0',
      'tw-left-[51%]': offsetSize === 'md' && slots.trailing && offset[1] === '0',
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
