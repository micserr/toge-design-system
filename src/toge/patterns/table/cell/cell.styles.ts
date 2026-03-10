import classNames from 'classnames'
import type { CellAlign } from './cell.types'

export interface CellStyleProps {
  align?: CellAlign
  sticky?: boolean
}

export function getCellClasses(p: CellStyleProps): string {
  return classNames(
    'spr:px-size-spacing-xs spr:py-size-spacing-2xs spr:align-middle',
    'spr-body-md-regular spr-text-color-strong',
    {
      'spr:sticky spr:left-0 spr-background-color': p.sticky,
    },
  )
}

export function getCellInnerClasses(align: CellAlign = 'left'): string {
  return classNames('spr:flex spr:items-center', {
    'spr:justify-start': align === 'left',
    'spr:justify-center': align === 'center',
    'spr:justify-end': align === 'right',
  })
}
