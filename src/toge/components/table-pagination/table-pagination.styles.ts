import classNames from 'classnames'

export function getTablePaginationClasses() {
  return {
    baseClasses: classNames(
      'spr-flex spr-items-center spr-justify-between',
      'spr-px-size-spacing-xs spr-py-size-spacing-2xs',
      'spr-border-t spr-border-color-weak',
      'spr-bg-white',
    ),
    rightSideClasses: classNames(
      'spr-flex spr-items-center spr-gap-size-spacing-xs',
    ),
    rowRangeClasses: classNames(
      'spr-body-xs-regular spr-text-color-base',
    ),
    navigationContainerClasses: classNames(
      'spr-flex spr-items-center spr-gap-size-spacing-3xs',
    ),
    navigationButtonClasses: classNames(
      'spr-flex spr-items-center spr-justify-center',
      'spr-p-size-spacing-2xs spr-rounded-border-radius-sm',
      'spr-border spr-border-color-weak',
      'hover:spr-background-color-hover',
      'disabled:spr-opacity-50 disabled:spr-cursor-not-allowed',
      'spr-cursor-pointer spr-transition-colors',
    ),
    itemsPerPageLabelClasses: classNames(
      'spr-body-xs-regular spr-text-color-base spr-whitespace-nowrap',
    ),
    selectClasses: classNames(
      'spr-body-xs-regular spr-text-color-strong',
      'spr-border spr-border-color-weak spr-rounded-border-radius-sm',
      'spr-px-size-spacing-2xs spr-py-size-spacing-3xs',
      'spr-bg-white spr-cursor-pointer',
    ),
  }
}
