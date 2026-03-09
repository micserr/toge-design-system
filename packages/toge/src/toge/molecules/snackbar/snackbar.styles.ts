import classNames from 'classnames'
import type { SnackbarProps, SnackTone } from './snackbar.types'

export function getSnackbarPositionClasses(position: SnackbarProps['position'] = 'bottom-left') {
  return classNames(
    'spr-fixed spr-z-[9999] spr-flex spr-flex-col spr-gap-size-spacing-xs',
    {
      'spr-bottom-4 spr-left-4': position === 'bottom-left',
      'spr-bottom-4 spr-left-1/2 spr--translate-x-1/2': position === 'bottom-center',
      'spr-bottom-4 spr-right-4': position === 'bottom-right',
      'spr-top-4 spr-left-4': position === 'top-left',
      'spr-top-4 spr-left-1/2 spr--translate-x-1/2': position === 'top-center',
      'spr-top-4 spr-right-4': position === 'top-right',
    }
  )
}

export function getSnackClasses(tone: SnackTone = 'neutral') {
  return {
    wrapper: classNames(
      'spr-flex spr-items-center spr-gap-size-spacing-xs spr-px-size-spacing-sm spr-py-size-spacing-xs',
      'spr-rounded-border-radius-md spr-shadow-lg spr-min-w-[280px] spr-max-w-[480px]',
      {
        'spr-bg-kangkong-700 spr-text-white': tone === 'success',
        'spr-bg-marigold-600 spr-text-white': tone === 'warning',
        'spr-bg-tomato-600 spr-text-white': tone === 'error',
        'spr-bg-blueberry-700 spr-text-white': tone === 'info',
        'spr-bg-mushroom-700 spr-text-white': tone === 'neutral',
      }
    ),
    icon: classNames('spr-flex-shrink-0'),
    text: classNames('spr-flex-1 spr-body-sm-regular'),
    action: classNames('spr-body-sm-semibold spr-cursor-pointer spr-underline'),
    dismiss: classNames('spr-flex-shrink-0 spr-cursor-pointer spr-opacity-70 hover:spr-opacity-100'),
  }
}
