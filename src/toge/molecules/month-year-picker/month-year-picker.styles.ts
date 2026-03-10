import classNames from 'classnames'

export function getMonthYearPickerClasses() {
  return {
    popperWrapper: 'spr-body-sm-regular spr-background-color spr-min-w-[280px] spr-rounded-border-radius-lg spr-overflow-hidden',
    popperHeader: classNames(
      'spr-flex spr-justify-between spr-gap-2 spr-px-4 spr-py-3',
      'spr-border-solid spr-border-color-weak spr-border-b-1 spr-border-t-0 spr-border-x-0',
    ),
    popperHeaderTabs: 'spr-flex spr-gap-1',
    popperHeaderNav: 'spr-flex spr-gap-1',
    popperBody: 'spr-px-4 spr-pb-4 spr-pt-2',
    monthGrid: 'spr-grid spr-grid-cols-4 spr-gap-2',
    monthCell: classNames(
      'spr-body-sm-semibold spr-relative spr-flex spr-cursor-pointer spr-items-center spr-justify-center spr-rounded-border-radius-lg spr-p-4',
      'spr-border spr-border-solid',
      'active:spr-scale-95',
    ),
    yearGrid: 'spr-grid spr-grid-cols-4 spr-gap-2',
    yearCell: classNames(
      'spr-body-sm-semibold spr-relative spr-flex spr-cursor-pointer spr-items-center spr-justify-center spr-rounded-border-radius-lg spr-p-4',
      'spr-border spr-border-solid',
      'active:spr-scale-95',
    ),
    currentPeriodDot: 'spr-background-color-brand-base spr-absolute spr-bottom-2 spr-inset-x-0 spr-mx-auto spr-h-1 spr-w-1 spr-rounded-full',
  }
}

export function getMonthCellClasses(isCurrentMonth: boolean, isSelected: boolean): string {
  return classNames({
    'spr-text-color-brand-base': isCurrentMonth,
    'spr-border-color-weak hover:spr-background-color-hover active:spr-background-color-pressed': !isSelected,
    'spr-border-color-brand-base spr-background-color-single-active': isSelected,
  })
}

export function getYearCellClasses(isCurrentYear: boolean, isSelected: boolean): string {
  return classNames({
    'spr-text-color-brand-base': isCurrentYear,
    'spr-border-color-weak hover:spr-background-color-hover active:spr-background-color-pressed': !isSelected,
    'spr-border-color-brand-base spr-background-color-single-active': isSelected,
  })
}
