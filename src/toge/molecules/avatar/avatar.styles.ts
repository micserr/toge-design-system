import classNames from 'classnames'
import type { AvatarSize, AvatarColor } from './avatar.types'

export function getAvatarBaseClasses(color: AvatarColor, loading: boolean): string {
  return classNames('spr-relative spr-inline-block spr-rounded-full', {
    'spr-background-color-surface': color === 'primary',
    'spr-background-color': color === 'secondary',
    'spr-background-color spr-border-color-success-base spr-border spr-border-solid': color === 'tertiary',
    'spr-skeletal-loader spr-h-full spr-w-full': loading,
  })
}

export function getAvatarImageContainerClasses(size: AvatarSize): string {
  return classNames(
    'avatar__slot spr-border-color-weak spr-border spr-border-solid',
    'spr-rounded-full spr-object-cover spr-flex spr-items-center spr-justify-center spr-overflow-hidden',
    {
      'spr-h-20 spr-min-w-20 spr-text-[36px]': size === '2xl',
      'spr-h-14 spr-min-w-14 spr-font-size-600': size === 'xl',
      'spr-h-10 spr-min-w-10 spr-font-size-400': size === 'lg',
      'spr-h-9 spr-min-w-9 spr-font-size-300': size === 'md',
      'spr-h-6 spr-min-w-6 spr-font-size-200': size === 'sm',
      'spr-h-5 spr-min-w-5 spr-text-[10px]': size === 'xs',
      'spr-h-4 spr-min-w-4 spr-text-[10px]': size === '2xs',
    },
    {
      '[&>img]:spr-h-20 [&>img]:spr-w-20 [&>img]:spr-min-h-20 [&>img]:spr-min-w-20': size === '2xl',
      '[&>img]:spr-h-14 [&>img]:spr-w-14 [&>img]:spr-min-h-14 [&>img]:spr-min-w-14': size === 'xl',
      '[&>img]:spr-h-10 [&>img]:spr-w-10 [&>img]:spr-min-h-10 [&>img]:spr-min-w-10': size === 'lg',
      '[&>img]:spr-h-9 [&>img]:spr-w-9 [&>img]:spr-min-h-9 [&>img]:spr-min-w-9': size === 'md',
      '[&>img]:spr-h-6 [&>img]:spr-w-6 [&>img]:spr-min-h-6 [&>img]:spr-min-w-6': size === 'sm',
      '[&>img]:spr-h-5 [&>img]:spr-w-5 [&>img]:spr-min-h-5 [&>img]:spr-min-w-5': size === 'xs',
      '[&>img]:spr-h-4 [&>img]:spr-w-4 [&>img]:spr-min-h-4 [&>img]:spr-min-w-4': size === '2xs',
    },
  )
}

export function getAvatarInitialsContainerClasses(size: AvatarSize): string {
  return classNames(
    'spr-rounded-full spr-border-color-weak spr-border spr-border-solid spr-items-center spr-flex spr-justify-center spr-heading-xs spr-text-color-strong',
    {
      'spr-h-20 spr-min-w-20': size === '2xl',
      'spr-h-14 spr-min-w-14 spr-body-lg-regular-medium': size === 'xl',
      'spr-h-10 spr-min-w-10 spr-body-sm-regular-medium': size === 'lg',
      'spr-h-9 spr-min-w-9 spr-body-sm-regular-medium': size === 'md',
      'spr-h-6 spr-min-w-6 spr-body-xs-regular-medium': size === 'sm',
      'spr-h-5 spr-min-w-5 !spr-text-[10px]': size === 'xs',
      'spr-h-4 spr-min-w-4 !spr-text-[10px]': size === '2xs',
    },
  )
}


export function getAvatarOnlineNotificationClasses(size: AvatarSize): string {
  return classNames('spr-absolute spr-bottom-0 spr-right-0', {
    'spr-bottom-0 spr-right-0': size === 'xl' || size === 'lg' || size === 'md',
    'spr-bottom-[1px] spr-right-[1px]': size === 'xl',
    'spr-bottom-[-3px] spr-right-[-4px]': size === 'sm',
    'spr-bottom-[-4px] spr-right-[-3px]': size === 'xs',
    'spr-bottom-[-2px] spr-right-[-4px]': size === '2xs',
  })
}

export function getAvatarSizeConfig(size: AvatarSize): { badge: string } {
  if (size === '2xl') return { badge: 'big' }
  return { badge: 'tiny' }
}

export function getAvatarIconVariant(variant: string): string {
  switch (variant) {
    case 'user-group':
      return 'ph:users-three'
    case 'user':
      return 'ph:user'
    case 'client':
      return 'ph:building'
    case 'admin':
      return 'ph:shield-check'
    case 'guest':
      return 'ph:user-circle'
    default:
      return `ph:${variant}`
  }
}

export function getAvatarInitials(initial: string, size: AvatarSize): string {
  const maxInitials = ['xs', '2xs'].includes(size) ? 1 : 2

  if (typeof initial !== 'string' || initial.trim().length === 0) {
    return ''
  }

  const nameParts = initial.trim().split(/\s+/)

  if (nameParts.length === 1) {
    return nameParts[0].charAt(0).toUpperCase()
  }

  const firstInitial = nameParts[0].charAt(0).toUpperCase()
  const lastInitial = nameParts[nameParts.length - 1].charAt(0).toUpperCase()

  return (firstInitial + lastInitial).slice(0, maxInitials)
}
