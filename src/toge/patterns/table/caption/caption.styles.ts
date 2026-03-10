import classNames from 'classnames'
import type { CaptionPosition } from './caption.types'

export function getCaptionClasses(position: CaptionPosition): string {
  return classNames('spr-body-sm-regular spr-text-color-supporting spr:py-size-spacing-2xs', {
    'spr:caption-top': position === 'top',
    'spr:caption-bottom': position === 'bottom',
  })
}
