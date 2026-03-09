import { toRefs, computed, ComputedRef } from 'vue';

import classNames from 'classnames';

import type { BadgePropTypes } from './badge';

interface BadgeClasses {
  baseClasses: string;
  variantClasses: string;
  sizeClasses: string;
  positionClasses: string;
}

export const useBadge = (props: BadgePropTypes) => {
  const { variant, size, position } = toRefs(props);

  const badgeClasses: ComputedRef<BadgeClasses> = computed(() => {
    const baseClasses = classNames({
      'spr-flex spr-items-center spr-gap-2': position.value === 'default',
      'spr-relative': position.value === 'top' || position.value === 'bottom',
    });

    const variantClasses = classNames({
      'spr-background-color-surface spr-text-color-base': variant.value === 'neutral',
      'spr-background-color-danger-base spr-text-color-inverted-strong': variant.value === 'danger',
      'spr-background-color-disabled spr-text-color-on-fill-disabled': variant.value === 'disabled',
      'spr-background-color-information-base spr-text-color-inverted-strong': variant.value === 'information',
      'spr-background-color-brand-base spr-text-color-inverted-strong': variant.value === 'brand',
    });

    const sizeClasses = classNames({
      'spr-label-sm-medium !spr-leading-[0] !spr-tracking-normal spr-h-[20px] spr-min-w-[20px] spr-rounded-[32px] spr-py-size-spacing-3xs spr-px-size-spacing-5xs spr-box-border':
        size.value === 'big',
      'spr-label-xs-medium !spr-leading-[0] !spr-tracking-normal spr-h-[16px] spr-min-w-[16px] spr-rounded-[32px] spr-py-size-spacing-6xs spr-px-size-spacing-5xs spr-box-border':
        size.value === 'small',
      'spr-h-[10px] spr-min-w-[10px] spr-rounded-full': size.value === 'tiny',
    });

    const positionClasses = classNames({
      'spr-absolute -spr-top-1 spr-right-1': position.value === 'top' && size.value === 'tiny',
      'spr-absolute -spr-bottom-1 spr-right-1': position.value === 'bottom' && size.value === 'tiny',
      'spr-absolute -spr-top-2 -spr-right-1': position.value === 'top' && size.value === 'small',
      'spr-absolute -spr-bottom-2 -spr-right-1': position.value === 'bottom' && size.value === 'small',
      'spr-absolute -spr-top-3 -spr-right-2': position.value === 'top' && size.value === 'big',
      'spr-absolute -spr-bottom-3 -spr-right-2': position.value === 'bottom' && size.value === 'big',
    });

    return {
      baseClasses,
      variantClasses,
      sizeClasses,
      positionClasses,
    };
  });

  return {
    badgeClasses,
  };
};
