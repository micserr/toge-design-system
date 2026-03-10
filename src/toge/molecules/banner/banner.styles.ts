import classNames from 'classnames'
import type { BannerType } from './banner.types'

export interface BannerStyleState {
  type: BannerType
}

export interface BannerClasses {
  base: string
  message: string
  close: string
}

export function getBannerClasses(s: BannerStyleState): BannerClasses {
  const base = classNames(
    'spr-w-full spr-flex spr-p-size-spacing-3xs spr-items-start spr-justify-between spr-rounded-border-radius-md spr-gap-size-spacing-3xs',
    {
      'spr-background-color-success-weak': s.type === 'success',
      'spr-background-color-danger-weak': s.type === 'error',
      'spr-background-color-information-weak': s.type === 'info',
      'spr-background-color-pending-weak': s.type === 'pending',
      'spr-background-color-caution-weak': s.type === 'caution',
    },
  )

  const message = classNames('spr-block spr-m-0 spr-body-sm-regular', {
    'spr-text-color-success-pressed': s.type === 'success',
    'spr-text-color-danger-pressed': s.type === 'error',
    'spr-text-color-information-pressed': s.type === 'info',
    'spr-text-color-pending-pressed': s.type === 'pending',
    'spr-text-color-caution-pressed': s.type === 'caution',
  })

  const close = classNames(
    'spr-cursor-pointer spr-p-0 spr-m-0 spr-border-0 spr-bg-transparent spr-inline-flex spr-items-center spr-leading-[0] spr-shrink-0',
    {
      'spr-text-color-success-base': s.type === 'success',
      'spr-text-color-danger-base': s.type === 'error',
      'spr-text-color-information-base': s.type === 'info',
      'spr-text-color-pending-base': s.type === 'pending',
      'spr-text-color-caution-base': s.type === 'caution',
    },
  )

  return { base, message, close }
}
