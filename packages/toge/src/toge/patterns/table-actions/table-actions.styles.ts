import classNames from 'classnames'

export function getTableActionsClasses() {
  return {
    baseClasses: classNames(
      'spr-h-max spr-p-size-spacing-2xs spr-flex spr-justify-between spr-items-center',
    ),
    searchFilterClasses: classNames(
      'spr-flex spr-gap-size-spacing-2xs spr-items-center',
    ),
    searchInputClasses: classNames('spr-w-full'),
    iconButtonClasses: classNames(
      'spr-flex spr-items-center spr-justify-center',
      'spr-p-size-spacing-2xs spr-rounded-border-radius-sm',
      'spr-border spr-border-color-weak',
      'hover:spr-background-color-hover',
      'spr-cursor-pointer',
    ),
  }
}
