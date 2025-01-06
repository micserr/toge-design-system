import { computed } from 'vue';
import type { BadgePropTypes } from './badge';

import classNames from 'classnames';
export const useBadge = (props: BadgePropTypes) => {
  const { size, variant } = props as {
    size: 'big' | 'small' | 'tiny';
    variant: 'danger' | 'disabled' | 'information' | 'brand';
  };

  const badgeClasses = computed(() => {
    const variantClasses = classNames({
      'tw-background-color-danger-base tw-text-color-inverted-strong': variant === 'danger',
      'tw-background-color-disabled tw-text-color-on-fill-disabled ': variant === 'disabled',
      'tw-background-color-information-base tw-text-color-inverted-strong': variant === 'information',
      'tw-background-color-brand-base tw-text-color-inverted-strong': variant === 'brand',
    });

    const sizeClasses = classNames({
      'tw-font-size-200 tw-h-[20px] tw-min-w-[20px] tw-rounded-[32px] tw-py-size-spacing-3xs tw-px-size-spacing-5xs ':
        size === 'big',
      'tw-font-size-100 tw-h-[16px] tw-min-w-[16px] tw-rounded-[32px] tw-px-size-spacing-5xs tw-py-size-spacing-6xs':
        size === 'small',
      'tw-h-[10px] tw-min-w-[10px] tw-rounded-full': size === 'tiny',
    });

    return classNames(variantClasses, sizeClasses);
  });

  return {
    badgeClasses,
  };
};
