import { toRefs, computed, ComputedRef } from 'vue';

import classNames from 'classnames';

import type { AvatarPropTypes } from './avatar';

interface AvatarClassses {
  baseClasses: string;
  imageClasses: string;
  nameInitalsClasses: string;
  notificationClasses: string;
  onlineNotificationClasses: string;
}

export const useAvatar = (props: AvatarPropTypes) => {
  const { size, color } = toRefs(props);

  const avatarClassses: ComputedRef<AvatarClassses> = computed(() => {
    const baseClasses = classNames('spr-relative spr-inline-block spr-rounded-full', {
      'spr-background-color-surface': color.value === 'primary',
      'spr-background-color': color.value === 'secondary',
    });

    const imageClasses = classNames(
      'spr-rounded-full spr-object-cover spr-flex spr-items-center spr-justify-center spr-overflow-hidden',
      {
        'spr-h-20 spr-min-w-20 spr-text-[36px]': size.value === '2xl',
        'spr-h-14 spr-min-w-14 spr-font-size-600': size.value === 'xl',
        'spr-h-10 spr-min-w-10 spr-font-size-400': size.value === 'lg',
        'spr-h-9  spr-min-w-9 spr-font-size-300': size.value === 'md',
        'spr-h-6  spr-min-w-6 spr-font-size-200': size.value === 'sm',
        'spr-h-5  spr-min-w-5 spr-text-[10px]': size.value === 'xs',
        'spr-h-4  spr-min-w-4 spr-text-[10px]': size.value === '2xs',
      },
    );

    const nameInitalsClasses = classNames(
      'spr-rounded-full spr-border-color-weak spr-border spr-border-solid spr-items-center spr-flex spr-justify-center spr-heading-xs spr-text-color-strong',
      {
        'spr-h-20 spr-min-w-20': size.value === '2xl',
        'spr-h-14 spr-min-w-14 spr-body-lg-regular-medium': size.value === 'xl',
        'spr-h-10 spr-min-w-10 spr-body-sm-regular-medium': size.value === 'lg',
        'spr-h-9 spr-min-w-9 spr-body-sm-regular-medium': size.value === 'md',
        'spr-h-6 spr-min-w-6 spr-body-xs-regular-medium': size.value === 'sm',
        'spr-h-5 spr-min-w-5 !spr-text-[10px]': size.value === 'xs',
        'spr-h-4 spr-min-w-4 !spr-text-[10px]': size.value === '2xs',
      },
    );

    const notificationClasses = classNames('spr-absolute spr-right-0 spr-top-0', {
      'spr-right-[-5px] spr-top-[-6.3px]': size.value === 'xl',
      'spr-right-[-7px] spr-top-[-8px]': size.value === 'lg',
      'spr-right-[-5px] spr-top-[-6px]': size.value === 'md',
      'spr-right-[-7px] spr-top-[-7px]': size.value === 'sm',
      'spr-right-[-5px] spr-top-[-4px]': size.value === 'xs',
      'spr-right-[-4px] spr-top-[-4px]': size.value === '2xs',
    });

    const onlineNotificationClasses = classNames('spr-absolute spr-bottom-0 spr-right-0', {
      'spr-bottom-0 spr-right-0': size.value === 'xl' || size.value === 'lg' || size.value === 'md',
      'spr-bottom-[1px] spr-right-[1px]': size.value === 'xl',
      'spr-bottom-[-3px] spr-right-[-4px]': size.value === 'sm',
      'spr-bottom-[-4px] spr-right-[-3px]': size.value === 'xs',
      'spr-bottom-[-2px] spr-right-[-4px]': size.value === '2xs',
    });

    return {
      baseClasses,
      imageClasses,
      nameInitalsClasses,
      notificationClasses,
      onlineNotificationClasses,
    };
  });

  const getAvatarSize = computed(() => {
    if (['2xl'].includes(size.value)) return { notif: 'big', badge: 'big' };
    if (['xl', 'lg'].includes(size.value)) return { notif: 'big', badge: 'tiny' };
    if (['md', 'sm'].includes(size.value)) return { notif: 'small', badge: 'tiny' };

    return { notif: 'tiny', badge: 'tiny' };
  });

  return {
    avatarClassses,
    getAvatarSize,
  };
};
