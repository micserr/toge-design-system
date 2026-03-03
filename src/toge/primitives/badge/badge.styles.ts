import classNames from 'classnames'
import type { BadgeVariant, BadgeSize, BadgePosition } from './badge.types'

export function getBadgeBaseClasses(position: BadgePosition): string {
  return classNames({
    'spr-flex spr-items-center spr-gap-2': position === 'default',
    'spr-relative': position === 'top' || position === 'bottom',
  })
}

export function getBadgeVariantClasses(variant: BadgeVariant): string {
  return classNames({
    'spr-background-color-surface spr-text-color-base': variant === 'neutral',
    'spr-background-color-danger-base spr-text-color-inverted-strong': variant === 'danger',
    'spr-background-color-disabled spr-text-color-on-fill-disabled': variant === 'disabled',
    'spr-background-color-information-base spr-text-color-inverted-strong': variant === 'information',
    'spr-background-color-brand-base spr-text-color-inverted-strong': variant === 'brand',
  })
}

export function getBadgeSizeClasses(size: BadgeSize): string {
  return classNames({
    'spr-label-sm-medium !spr-leading-[0] !spr-tracking-normal spr-h-[20px] spr-min-w-[20px] spr-rounded-[32px] spr-py-size-spacing-3xs spr-px-size-spacing-5xs spr-box-border':
      size === 'big',
    'spr-label-xs-medium !spr-leading-[0] !spr-tracking-normal spr-h-[16px] spr-min-w-[16px] spr-rounded-[32px] spr-py-size-spacing-6xs spr-px-size-spacing-5xs spr-box-border':
      size === 'small',
    'spr-h-[10px] spr-min-w-[10px] spr-rounded-full': size === 'tiny',
  })
}

export function getBadgePositionClasses(position: BadgePosition, size: BadgeSize): string {
  return classNames({
    'spr-absolute -spr-top-1 spr-right-1': position === 'top' && size === 'tiny',
    'spr-absolute -spr-bottom-1 spr-right-1': position === 'bottom' && size === 'tiny',
    'spr-absolute -spr-top-2 -spr-right-1': position === 'top' && size === 'small',
    'spr-absolute -spr-bottom-2 -spr-right-1': position === 'bottom' && size === 'small',
    'spr-absolute -spr-top-3 -spr-right-2': position === 'top' && size === 'big',
    'spr-absolute -spr-bottom-3 -spr-right-2': position === 'bottom' && size === 'big',
  })
}
