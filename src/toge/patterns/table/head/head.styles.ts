import classNames from 'classnames'
import type { HeadAlign } from './head.types'

export interface HeadStyleProps {
  align?: HeadAlign
  sticky?: boolean
  active?: boolean
}

export function getHeadClasses(p: HeadStyleProps): string {
  return classNames(
    'spr-background-color-surface spr:px-size-spacing-xs spr:py-size-spacing-2xs',
    'spr-subheading-xs spr-text-color-strong spr:border-b spr-border-color-weak',
    {
      'spr:text-left': !p.align || p.align === 'left',
      'spr:text-center': p.align === 'center',
      'spr:text-right': p.align === 'right',
      'spr:sticky spr:top-0 spr:z-10 spr-background-color-surface': p.sticky,
    },
  )
}

export function getHeadInnerClasses(align?: HeadAlign): string {
  return classNames('spr:flex spr:items-center spr:gap-size-spacing-3xs', {
    'spr:justify-start': !align || align === 'left',
    'spr:justify-center': align === 'center',
    'spr:justify-end': align === 'right',
  })
}

export function getSortIconClasses(active: boolean): string {
  return classNames(
    'spr:flex spr:flex-row spr:items-center spr:p-size-spacing-6xs',
    'hover:spr:rounded-border-radius-xs hover:spr:bg-mushroom-300 spr:cursor-pointer',
    {
      'spr:text-kangkong-700': active,
    },
  )
}
