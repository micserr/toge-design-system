import classNames from 'classnames'

export function getCollapsibleClasses() {
  return {
    container: classNames('spr:w-full spr:overflow-hidden'),
    trigger: classNames(
      'spr:flex spr:w-full spr:items-center spr:justify-between',
      'spr:px-size-spacing-xs spr:py-size-spacing-sm',
    ),
    content: classNames('spr:px-size-spacing-xs spr:pb-size-spacing-sm'),
  }
}
