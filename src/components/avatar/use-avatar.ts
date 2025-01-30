import { computed } from 'vue';
import type { AvatarPropTypes } from './avatar';

import classNames from 'classnames';
export const useAvatar = (props: AvatarPropTypes) => {
  const { size } = props;
  const avatarClassses = computed(() => {
    return classNames(' relative  inline-block');
  });

  const avatarImageClassses = computed(() => {
    return classNames('  rounded-full  object-cover ', {
      ' h-20  w-20': size === '2xl',
      ' h-14  w-14': size === 'xl',
      ' h-10  w-10': size === 'lg',
      ' h-9  w-9': size === 'md',
      ' h-6  w-6': size === 'sm',
      ' h-5  w-5': size === 'xs',
      ' h-4  w-4': size === '2xs',
    });
  });

  const initialClassses = computed(() => {
    return classNames(
      '  rounded-full   background-color-surface  border-color-weak  border  border-solid  items-center  flex  justify-center  heading-xs  text-color-strong',
      {
        ' h-20  w-20': size === '2xl',
        ' h-14  w-14  body-lg-regular-medium': size === 'xl',
        ' h-10  w-10  body-sm-regular-medium': size === 'lg',
        ' h-9  w-9  body-sm-regular-medium': size === 'md',
        ' h-6  w-6  body-xs-regular-medium': size === 'sm',
        ' h-5  w-5 !text-[10px]': size === 'xs',
        ' h-4  w-4 !text-[10px]': size === '2xs',
      },
    );
  });

  const avatarNotificationClassses = computed(() => {
    return classNames(' absolute  right-0  top-0', {
      ' right-[-5px]  top-[-6.3px]': size === 'xl',
      ' right-[-7px]  top-[-8px]': size === 'lg',
      ' right-[-5px]  top-[-6px]': size === 'md',
      ' right-[-7px]  top-[-7px]': size === 'sm',
      ' right-[-5px]  top-[-4px]': size === 'xs',
      ' right-[-4px]  top-[-4px]': size === '2xs',
    });
  });

  const onlineNotificationClassses = computed(() => {
    return classNames(' absolute  bottom-0  right-0', {
      ' bottom-0  right-0': size === 'xl' || size === 'lg' || size === 'md',
      ' bottom-[1px]  right-[1px]': size === 'xl',
      ' bottom-[-3px]  right-[-4px]': size === 'sm',
      ' bottom-[-4px]  right-[-3px]': size === 'xs',
      ' bottom-[-2px]  right-[-4px]': size === '2xs',
    });
  });

  const getAvatarSize = computed(() => {
    if (['2xl'].includes(size)) return { notif: 'big', online: 'big' };
    if (['xl', 'lg'].includes(size)) return { notif: 'big', online: 'tiny' };
    if (['md', 'sm'].includes(size)) return { notif: 'small', online: 'tiny' };

    return { notif: 'tiny', online: 'tiny' };
  });

  return {
    avatarClassses,
    avatarImageClassses,
    getAvatarSize,
    avatarNotificationClassses,
    onlineNotificationClassses,
    initialClassses,
  };
};
