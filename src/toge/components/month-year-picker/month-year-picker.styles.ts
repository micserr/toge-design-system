import classNames from 'classnames'

export interface MonthYearStyleParams {
  disabled: boolean
  readonly: boolean
  error: boolean
  active: boolean
  isOpen: boolean
}

export function getMonthYearPickerClasses(p: MonthYearStyleParams) {
  return {
    wrapper: 'spr-grid spr-gap-size-spacing-4xs',
    label: classNames('spr-body-sm-regular spr-text-color-strong spr-block', {
      'spr-text-color-on-fill-disabled': p.disabled,
    }),
    inputBase: classNames(
      'spr-flex spr-justify-between spr-items-center spr-gap-2 spr-rounded-border-radius-lg',
      'spr-bg-white spr-py-1.5 spr-px-3 spr-min-w-[180px]',
      {
        'spr-border spr-border-solid spr-border-mushroom-200':
          !p.error && !p.disabled && !p.active && !p.isOpen && !p.readonly,
        'spr-border spr-border-solid spr-border-mushroom-200 spr-cursor-default': p.readonly,
        'spr-border-[1.5px] spr-border-solid spr-border-kangkong-700': (p.active || p.isOpen) && !p.readonly,
        'spr-border spr-border-solid spr-border-tomato-600': p.error,
        'spr-background-color-disabled spr-border-white-100 spr-cursor-not-allowed spr-text-color-on-fill-disabled':
          p.disabled,
      },
    ),
    displayText: classNames('spr-h-full spr-border-none spr-bg-transparent spr-outline-none spr-body-sm-regular', {
      'spr-text-color-strong': !p.disabled,
      'spr-text-color-on-fill-disabled': p.disabled,
      'spr-cursor-not-allowed': p.disabled,
    }),
    placeholder: 'spr-text-color-placeholder',
    iconWrapper: 'spr-flex spr-items-center spr-justify-center',
    calendarIcon: 'spr-text-color-supporting spr-h-4 spr-w-4',
    helper: classNames(
      'spr-body-sm-regular spr-flex spr-items-center spr-gap-size-spacing-5xs spr-mt-size-spacing-4xs',
      {
        'spr-text-color-danger-base': p.error,
        'spr-text-color-supporting': !p.error,
      },
    ),
    // Popper inner
    popperWrapper: classNames(
      'spr-bg-white spr-rounded-border-radius-lg spr-shadow-lg',
      'spr-border spr-border-solid spr-border-mushroom-200',
      'spr-min-w-[280px]',
    ),
    popperHeader: classNames(
      'spr-flex spr-justify-between spr-gap-2 spr-px-4 spr-py-3',
      'spr-border spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid spr-border-mushroom-200',
    ),
    popperHeaderTabs: 'spr-flex spr-gap-1',
    popperHeaderNav: 'spr-flex spr-gap-1',
    popperBody: 'spr-px-4 spr-pb-4 spr-pt-2',
    monthGrid: 'spr-grid spr-grid-cols-4 spr-gap-2',
    monthCell: classNames(
      'spr-subheading-xs spr-relative spr-flex spr-cursor-pointer spr-items-center spr-justify-center spr-rounded-border-radius-lg spr-p-4',
      'spr-border spr-border-solid',
      'spr-transition spr-duration-150 spr-ease-in-out',
      'active:spr-scale-95',
    ),
    yearGrid: 'spr-grid spr-grid-cols-4 spr-gap-2',
    yearCell: classNames(
      'spr-subheading-xs spr-relative spr-flex spr-cursor-pointer spr-items-center spr-justify-center spr-rounded-border-radius-lg spr-p-4',
      'spr-border spr-border-solid',
      'spr-transition spr-duration-150 spr-ease-in-out',
      'active:spr-scale-95',
    ),
    currentPeriodDot: 'spr-background-color-brand-base spr-absolute spr-bottom-2 spr-m-auto spr-h-1 spr-w-1 spr-rounded-full',
    tabBtn: 'spr-cursor-pointer spr-rounded-border-radius-md spr-px-3 spr-py-1 spr-border spr-border-solid spr-border-mushroom-200 spr-body-sm-semibold hover:spr-background-color-hover',
    tabBtnActive: 'spr-background-color-pressed !spr-shadow-button spr-border-mushroom-200',
    navBtn: 'spr-cursor-pointer spr-rounded-border-radius-md spr-px-2 spr-py-1 spr-border spr-border-solid spr-border-mushroom-200 hover:spr-background-color-hover disabled:spr-opacity-40 disabled:spr-cursor-not-allowed',
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
