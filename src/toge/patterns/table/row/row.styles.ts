import classNames from 'classnames'

export interface RowStyleProps {
  hoverable?: boolean
  selected?: boolean
  striped?: boolean
  index?: number
}

export function getRowClasses(p: RowStyleProps): string {
  return classNames('spr:border-b spr-border-color-weak spr:transition-colors', {
    'hover:spr-background-color-hover spr:cursor-pointer': p.hoverable,
    'spr-background-color-brand-weak': p.selected,
    'spr-background-color-surface': p.striped && typeof p.index === 'number' && p.index % 2 !== 0,
  })
}
