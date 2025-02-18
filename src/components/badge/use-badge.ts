import { computed, toRefs } from 'vue';
import type { BadgePropTypes } from './badge';

import classNames from 'classnames';
export const useBadge = (props: BadgePropTypes) => {
  const { position, size, variant } = toRefs(props);

  const badgeClasses = computed(() => {
    const variantClasses = classNames({
      'background-color-danger-base text-color-inverted-strong': variant.value === 'danger',
      'background-color-disabled text-color-on-fill-disabled ': variant.value === 'disabled',
      'background-color-information-base text-color-inverted-strong': variant.value === 'information',
      'background-color-brand-base text-color-inverted-strong': variant.value === 'brand',
    });

    const sizeClasses = classNames({
      'label-sm-medium  !leading-[0] !tracking-normal h-[20px] min-w-[20px] rounded-[32px] py-size-spacing-3xs px-size-spacing-5xs':
        size.value === 'big',
      'label-xs-medium !leading-[0] !tracking-normal h-[16px] min-w-[16px] rounded-[32px] py-size-spacing-6xs px-size-spacing-5xs':
        size.value === 'small',
      'h-[10px] min-w-[10px] rounded-full': size.value === 'tiny',
    });

    return classNames(variantClasses, sizeClasses);
  });

  const badgePositionClasses = computed(() => {
    return classNames({
      'absolute -top-1 right-1': position.value === 'top' && size.value === 'tiny',
      ' absolute -bottom-1 right-1': position.value === 'bottom' && size.value === 'tiny',
      'absolute -top-2 -right-1': position.value === 'top' && size.value === 'small',
      ' absolute -bottom-2 -right-1': position.value === 'bottom' && size.value === 'small',
      'absolute -top-3 -right-2': position.value === 'top' && size.value === 'big',
      ' absolute -bottom-3 -right-2': position.value === 'bottom' && size.value === 'big',
    });
  });

  const badgeElementWrapper = computed(() => {
    return classNames({
      'flex items-center gap-2 ': position.value === 'default',
      relative: position.value === 'top' || position.value === 'bottom',
    });
  });

  return {
    badgeClasses,
    badgePositionClasses,
    badgeElementWrapper,
  };
};
