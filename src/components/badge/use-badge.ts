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
      'background-color-danger-base text-color-inverted-strong': variant === 'danger',
      'background-color-disabled text-color-on-fill-disabled ': variant === 'disabled',
      'background-color-information-base text-color-inverted-strong': variant === 'information',
      'background-color-brand-base text-color-inverted-strong': variant === 'brand',
    });

    const sizeClasses = classNames({
      'label-sm-medium  !leading-[0] !tracking-normal h-[20px] min-w-[20px] rounded-[32px] py-size-spacing-3xs px-size-spacing-5xs':
        size === 'big',
      'label-xs-medium !leading-[0] !tracking-normal h-[16px] min-w-[16px] rounded-[32px] py-size-spacing-6xs px-size-spacing-5xs':
        size === 'small',
      'h-[10px] min-w-[10px] rounded-full': size === 'tiny',
    });

    return classNames(variantClasses, sizeClasses);
  });

  const badgePositionClasses = computed(() => {
    return classNames({
      'absolute -top-1 right-1': position === 'top' && size === 'tiny',
      ' absolute -bottom-1 right-1': position === 'bottom' && size === 'tiny',
      'absolute -top-2 -right-1': position === 'top' && size === 'small',
      ' absolute -bottom-2 -right-1': position === 'bottom' && size === 'small',
      'absolute -top-3 -right-2': position === 'top' && size === 'big',
      ' absolute -bottom-3 -right-2': position === 'bottom' && size === 'big',
    });
  });

  const badgeElementWrapper = computed(() => {
    return classNames({
      'flex items-center gap-2 ': position === 'default',
      relative: position === 'top' || position === 'bottom',
    });
  });

  return {
    badgeClasses,
    badgePositionClasses,
    badgeElementWrapper,
  };
};
