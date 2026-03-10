import classNames from 'classnames'
import type { SnackbarProps, SnackTone } from './snackbar.types'

const toneColor: Record<SnackTone, string> = {
  success: 'spr:text-kangkong-500',
  warning: 'spr:text-carrot-500',
  error: 'spr:text-tomato-500',
  info: 'spr:text-blueberry-500',
  neutral: 'spr:text-mushroom-300',
}

export function getSnackbarPositionClasses(position: SnackbarProps['position'] = 'bottom-left') {
  return classNames(
    'spr:fixed spr:z-[9999] spr:flex spr:flex-col spr:gap-size-spacing-xs',
    {
      'spr:bottom-4 spr:left-4': position === 'bottom-left',
      'spr:bottom-4 spr:left-1/2 spr:-translate-x-1/2': position === 'bottom-center',
      'spr:bottom-4 spr:right-4': position === 'bottom-right',
      'spr:top-4 spr:left-4': position === 'top-left',
      'spr:top-4 spr:left-1/2 spr:-translate-x-1/2': position === 'top-center',
      'spr:top-4 spr:right-4': position === 'top-right',
    }
  )
}

export function getSnackClasses(tone: SnackTone = 'neutral') {
  return {
    wrapper: classNames(
      'spr:flex spr:items-center spr:gap-2',
      'spr:px-3 spr:py-2',
      'spr:rounded-border-radius-xl',
      'spr:border spr:border-solid spr:border-mushroom-500',
      'spr:bg-mushroom-950',
      'spr-drop-shadow-sm',
      'spr:min-w-[200px] spr:max-w-[360px] spr:min-h-14',
    ),
    icon: classNames('spr:shrink-0', toneColor[tone]),
    text: classNames('spr:flex-1 spr-body-sm-regular spr-text-color-inverted-strong'),
    actionLabel: classNames('spr-body-sm-semibold', toneColor[tone]),
  }
}
