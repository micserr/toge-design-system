import { computed, type Ref } from 'vue';
import type { BannerPropTypes } from './banner';
import classNames from 'classnames';

interface BannerClasses {
  base: string;
  icon: string;
  message: string;
  close: string;
}

export const useBanner = (props: BannerPropTypes, showModel: Ref<boolean>) => {
  const closeBanner = () => (showModel.value = false);

  const bannerClasses = computed<BannerClasses>(() => {
    const base = classNames(
      'spr-w-full spr-flex spr-p-size-spacing-3xs spr-justify-between spr-rounded-border-radius-md',
      {
        'spr-background-color-success-weak': props.type === 'success',
        'spr-background-color-danger-weak': props.type === 'error',
        'spr-background-color-information-weak': props.type === 'info',
        'spr-background-color-pending-weak': props.type === 'pending',
        'spr-background-color-caution-weak': props.type === 'caution',
      },
    );

    const icon = classNames('spr-py-[2px]', {
      'spr-text-color-brand-base': props.type === 'success',
      'spr-text-color-danger-base': props.type === 'error',
      'spr-text-color-information-base': props.type === 'info',
      'spr-text-color-pending-base': props.type === 'pending',
      'spr-text-color-caution-base': props.type === 'caution',
    });

    const message = classNames('spr-block spr-m-0 spr-body-sm-regular', {
      'spr-text-color-brand-base': props.type === 'success',
      'spr-text-color-danger-pressed': props.type === 'error',
      'spr-text-color-information-pressed': props.type === 'info',
      'spr-text-color-pending-pressed': props.type === 'pending',
      'spr-text-color-caution-pressed': props.type === 'caution',
    });

    const close = classNames('spr-flex-none spr-cursor-pointer spr-mt-[2px]', {
      'spr-text-color-brand-base': props.type === 'success',
      'spr-text-color-danger-base': props.type === 'error',
      'spr-text-color-information-base': props.type === 'info',
      'spr-text-color-pending-base': props.type === 'pending',
      'spr-text-color-caution-base': props.type === 'caution',
    });

    return {
      base,
      icon,
      message,
      close,
    };
  });

  const bannerIcon = computed(() => {
    switch (props.type) {
      case 'success':
        return 'ph:check-circle-fill';
      case 'error':
        return 'ph:warning-circle-fill';
      case 'info':
        return 'ph:info-fill';
      case 'pending':
        return 'ph:info-fill';
      case 'caution':
        return 'ph:warning-fill';
      default:
        return '';
    }
  });

  return {
    closeBanner,
    bannerClasses,
    bannerIcon,
  };
};
