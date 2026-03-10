import classNames from 'classnames'
import type { ProgressBarSize, ProgressBarColor, ProgressBarLabelPlacement } from './progress-bar.types'

export interface ProgressBarStyleState {
  size: ProgressBarSize
  color: ProgressBarColor
  labelPlacement: ProgressBarLabelPlacement
}

export interface ProgressBarClasses {
  wrapper: string
  track: string
  fill: string
  label: string
}

export function getProgressBarClasses(s: ProgressBarStyleState): ProgressBarClasses {
  const wrapper = classNames('spr:flex spr:w-full spr:items-center spr:gap-size-spacing-3xs', {
    'spr:flex-col': s.labelPlacement.startsWith('top') || s.labelPlacement.startsWith('bottom'),
    'spr:flex-col-reverse': s.labelPlacement.startsWith('top'),
    'spr:flex-row': s.labelPlacement === 'left',
    'spr:flex-row-reverse': s.labelPlacement === 'right',
  })

  const track = classNames('spr:w-full spr:overflow-hidden spr:rounded-full spr-background-color-surface', {
    'spr:h-1': s.size === 'xs',
    'spr:h-2': s.size === 'sm',
    'spr:h-3': s.size === 'lg',
  })

  const fill = classNames('spr:h-full spr:rounded-full spr:transition-all spr:duration-300', {
    'spr-background-color-brand-base': s.color === 'success',
    'spr-background-color-danger-base': s.color === 'danger',
    'spr-background-color-caution-base': s.color === 'warning',
    'spr-background-color-information-base': s.color === 'info',
    'spr-background-color-supporting': s.color === 'neutral',
  })

  const label = classNames('spr-body-xs-regular spr-text-color-base spr:whitespace-nowrap', {
    'spr:text-start': s.labelPlacement.endsWith('start'),
    'spr:text-end': s.labelPlacement.endsWith('end'),
    'spr:text-center': s.labelPlacement.endsWith('center') || s.labelPlacement === 'top' || s.labelPlacement === 'bottom',
  })

  return { wrapper, track, fill, label }
}
