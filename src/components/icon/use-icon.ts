import { toRefs, computed } from 'vue';
import classNames from 'classnames';
import type { IconPropTypes } from './icon';

export const useIcon = (props: IconPropTypes) => {
  const { size, tone, variant } = toRefs(props);

  const iconClasses = computed(() => {
    const BASE_CLASSES =
      'spr-rounded-border-radius-md spr-relative spr-inline-block spr-rounded spr-flex spr-items-center spr-justify-center';

    const TONE_MAP = {
      success: {
        primary: 'spr-border-color-brand-base spr-text-color-inverted-strong spr-background-color-success-base',
        secondary: 'spr-border-color-brand-base spr-text-color-success-base spr-bg-kangkong-50',
        tertiary: 'spr-text-color-success-base',
      },
      error: {
        primary: 'spr-border-color-danger-base spr-text-color-inverted-strong spr-background-color-danger-base',
        secondary: 'spr-border-color-danger-base spr-text-color-danger-base spr-bg-tomato-50',
        tertiary: 'spr-text-color-danger-base',
      },
      info: {
        primary:
          'spr-border-color-information-base spr-text-color-inverted-strong spr-background-color-information-base',
        secondary: 'spr-border-color-information-base spr-text-color-information-base spr-bg-sky-50',
        tertiary: 'spr-text-color-information-base',
      },
      pending: {
        primary: 'spr-border-color-pending-base spr-text-color-inverted-strong spr-background-color-pending-base',
        secondary: 'spr-border-color-pending-base spr-text-color-pending-base spr-bg-yellow-50',
        tertiary: 'spr-text-color-pending-base',
      },
      caution: {
        primary: 'spr-border-color-caution-base spr-text-color-inverted-strong spr-background-color-caution-base',
        secondary: 'spr-border-color-caution-base spr-text-color-caution-base spr-bg-orange-50',
        tertiary: 'spr-text-color-caution-base',
      },
    };

    const SIZE_MAP = {
      '2xl': variant.value === 'tertiary' ? 'spr-font-size-700' : 'spr-h-20 spr-min-w-20 spr-font-size-700',
      xl: variant.value === 'tertiary' ? 'spr-font-size-600' : 'spr-h-14 spr-min-w-14 spr-font-size-600',
      lg: variant.value === 'tertiary' ? 'spr-font-size-500' : 'spr-h-10 spr-min-w-10 spr-font-size-500',
      md: variant.value === 'tertiary' ? 'spr-font-size-400' : 'spr-h-9 spr-min-w-9 spr-font-size-400',
      sm:
        variant.value === 'tertiary'
          ? 'spr-font-size-300'
          : 'spr-h-6 spr-min-w-6 spr-font-size-300 spr-rounded-border-radius-sm',
      xs:
        variant.value === 'tertiary'
          ? 'spr-font-size-250'
          : 'spr-h-5 spr-min-w-5 spr-font-size-250 spr-rounded-border-radius-xs',
      '2xs':
        variant.value === 'tertiary'
          ? 'spr-font-size-250'
          : 'spr-h-4 spr-min-w-4  spr-font-size-250 spr-rounded-border-radius-xs',
    };

    const toneClasses = classNames('spr-border spr-border-solid', TONE_MAP[tone.value]?.[variant.value] || '');

    const sizeClasses = SIZE_MAP[size.value] || SIZE_MAP.md;

    const variantClasses = classNames({
      'spr-border-0': variant.value === 'primary',
      'spr-border': variant.value === 'secondary',
      'spr-border-0 spr-bg-transparent ': variant.value === 'tertiary' || !variant.value,
    });

    return classNames(variantClasses, BASE_CLASSES, sizeClasses, toneClasses);
  });

  return {
    iconClasses,
  };
};
