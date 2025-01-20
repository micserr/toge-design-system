import { computed } from 'vue';
import type { BadgePropTypes } from './badge';

import classNames from 'classnames';
export const useBadge = (props: BadgePropTypes) => {
  const { position, size, variant } = props as {
    size: 'big' | 'small' | 'tiny';
    variant: 'danger' | 'disabled' | 'information' | 'brand';
    position: 'top' | 'bottom' | 'default';
  };

  const badgeClasses = computed(() => {
    const variantClasses = classNames({
      'tw-background-color-danger-base tw-text-color-inverted-strong': variant === 'danger',
      'tw-background-color-disabled tw-text-color-on-fill-disabled ': variant === 'disabled',
      'tw-background-color-information-base tw-text-color-inverted-strong': variant === 'information',
      'tw-background-color-brand-base tw-text-color-inverted-strong': variant === 'brand',
    });

    const sizeClasses = classNames({
      'tw-label-sm-medium  !tw-leading-[0] !tw-tracking-normal tw-h-[20px] tw-min-w-[20px] tw-rounded-[32px] tw-py-size-spacing-3xs tw-px-size-spacing-5xs':
        size === 'big',
      'tw-label-xs-medium !tw-leading-[0] !tw-tracking-normal tw-h-[16px] tw-min-w-[16px] tw-rounded-[32px] tw-py-size-spacing-6xs tw-px-size-spacing-5xs':
        size === 'small',
      'tw-h-[10px] tw-min-w-[10px] tw-rounded-full': size === 'tiny',
    });

    return classNames(variantClasses, sizeClasses);
  });

  const badgePositionClasses = computed(() => {
    return classNames({
      'tw-absolute tw--top-1 tw-right-1': position === 'top' && size === 'tiny',
      ' tw-absolute tw--bottom-1 tw-right-1': position === 'bottom' && size === 'tiny',
      'tw-absolute tw--top-2 tw--right-1': position === 'top' && size === 'small',
      ' tw-absolute tw--bottom-2 tw--right-1': position === 'bottom' && size === 'small',
      'tw-absolute tw--top-3 tw--right-2': position === 'top' && size === 'big',
      ' tw-absolute tw--bottom-3 tw--right-2': position === 'bottom' && size === 'big',
    });
  });

  const badgeElementWrapper = computed(() => {
    return classNames({
      'tw-flex tw-items-center tw-gap-2 ': position === 'default',
      'tw-relative': position === 'top' || position === 'bottom',
    });
  });

  return {
    badgeClasses,
    badgePositionClasses,
    badgeElementWrapper,
  };
};
