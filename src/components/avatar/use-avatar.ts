import { computed, toRefs } from 'vue';
import type { AvatarPropTypes } from './avatar';

import classNames from 'classnames';
export const useAvatar = (props: AvatarPropTypes) => {
  const { size } = toRefs(props);
  const avatarClassses = computed(() => {
    return classNames(' relative  inline-block');
  });

  const avatarImageClassses = computed(() => {
    return classNames('  rounded-full  object-cover ', {
      ' h-20 min-w-20': size.value === '2xl',
      ' h-14 min-w-14': size.value === 'xl',
      ' h-10 min-w-10': size.value === 'lg',
      ' h-9  min-w-9': size.value === 'md',
      ' h-6  min-w-6': size.value === 'sm',
      ' h-5  min-w-5': size.value === 'xs',
      ' h-4  min-w-4': size.value === '2xs',
    });
  });

  const initialClassses = computed(() => {
    return classNames(
      '  rounded-full   background-color-surface  border-color-weak  border  border-solid  items-center  flex  justify-center  heading-xs  text-color-strong',
      {
        ' h-20 min-w-20': size.value === '2xl',
        ' h-14 min-w-14  body-lg-regular-medium': size.value === 'xl',
        ' h-10 min-w-10  body-sm-regular-medium': size.value === 'lg',
        ' h-9  min-w-9  body-sm-regular-medium': size.value === 'md',
        ' h-6  min-w-6  body-xs-regular-medium': size.value === 'sm',
        ' h-5  min-w-5 !text-[10px]': size.value === 'xs',
        ' h-4  min-w-4 !text-[10px]': size.value === '2xs',
      },
    );
  });

  const avatarNotificationClassses = computed(() => {
    return classNames(' absolute  right-0  top-0', {
      ' right-[-5px]  top-[-6.3px]': size.value === 'xl',
      ' right-[-7px]  top-[-8px]': size.value === 'lg',
      ' right-[-5px]  top-[-6px]': size.value === 'md',
      ' right-[-7px]  top-[-7px]': size.value === 'sm',
      ' right-[-5px]  top-[-4px]': size.value === 'xs',
      ' right-[-4px]  top-[-4px]': size.value === '2xs',
    });
  });

  const onlineNotificationClassses = computed(() => {
    return classNames(' absolute  bottom-0  right-0', {
      ' bottom-0  right-0': size.value === 'xl' || size.value === 'lg' || size.value === 'md',
      ' bottom-[1px]  right-[1px]': size.value === 'xl',
      ' bottom-[-3px]  right-[-4px]': size.value === 'sm',
      ' bottom-[-4px]  right-[-3px]': size.value === 'xs',
      ' bottom-[-2px]  right-[-4px]': size.value === '2xs',
    });
  });

  const getAvatarSize = computed(() => {
    if (['2xl'].includes(size.value)) return { notif: 'big', online: 'big' };
    if (['xl', 'lg'].includes(size.value)) return { notif: 'big', online: 'tiny' };
    if (['md', 'sm'].includes(size.value)) return { notif: 'small', online: 'tiny' };

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
