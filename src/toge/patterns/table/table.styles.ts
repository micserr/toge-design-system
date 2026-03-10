import classNames from 'classnames'

export interface TableRootStyleProps {
  bordered?: boolean
}

export function getTableRootClasses(p: TableRootStyleProps): string {
  return classNames('spr-w-full spr-caption-bottom spr-border-collapse', {
    'spr-border spr-border-color-weak': p.bordered,
  })
}
