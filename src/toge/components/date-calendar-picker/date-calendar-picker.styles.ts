import classNames from 'classnames'

export function getCalendarClasses() {
  return {
    wrapper: classNames(
      'spr-bg-white spr-rounded-border-radius-lg spr-shadow-lg',
      'spr-border spr-border-solid spr-border-mushroom-200',
      'spr-min-w-[320px]',
    ),
    header: classNames(
      'spr-flex spr-justify-between spr-gap-2 spr-px-4 spr-py-3',
      'spr-border spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid spr-border-mushroom-200',
    ),
    headerTabs: 'spr-flex spr-gap-1',
    headerNav: 'spr-flex spr-gap-1',
    body: 'spr-px-4 spr-pb-4 spr-pt-2',
    calendarGrid: 'spr-grid spr-grid-cols-7',
    dayHeaderCell: 'spr-py-1 spr-text-center spr-font-semibold spr-body-xs-semibold spr-text-color-supporting',
    dayCell: classNames(
      'spr-relative spr-box-border spr-flex spr-h-[40px] spr-items-center spr-justify-center spr-p-2',
      'spr-transition spr-duration-150 spr-ease-in-out',
    ),
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
    todayDot: classNames(
      'spr-background-color-brand-base spr-absolute spr-bottom-1 spr-m-auto spr-h-1 spr-w-1 spr-rounded-full',
    ),
    currentPeriodDot: classNames(
      'spr-background-color-brand-base spr-absolute spr-bottom-2 spr-m-auto spr-h-1 spr-w-1 spr-rounded-full',
    ),
    tabActive: 'spr-background-color-pressed !spr-shadow-button',
  }
}

export function getDayCellClasses(p: {
  isCurrentMonth: boolean
  isSelected: boolean
  isToday: boolean
  isDisabled: boolean
  isRestDay: boolean
}): string {
  return classNames({
    // Rest day background — gray tint
    'spr-background-color-disabled': p.isRestDay,

    // Today indicator — brand color text when not selected
    'spr-text-color-brand-base': p.isToday && !p.isSelected,

    // Active month unselected dates
    'spr-text-color-strong':
      p.isCurrentMonth && !p.isSelected && !p.isToday && !p.isDisabled,

    // Inactive month dates (overflow days)
    'spr-text-color-disabled': !p.isCurrentMonth && !p.isDisabled,

    // Selected date
    'spr-background-color-brand-base active:spr-background-color-brand-pressed spr-text-color-inverted-strong spr-cursor-pointer !spr-text-white-50 active:spr-scale-95':
      p.isSelected,

    // Unselected, not disabled
    'hover:spr-background-color-hover spr-border-color-weak active:spr-background-color-pressed spr-cursor-pointer spr-border spr-border-solid active:spr-scale-95':
      !p.isSelected && !p.isDisabled,

    // Disabled
    'spr-cursor-not-allowed spr-opacity-30': p.isDisabled,
  })
}

export function getMonthCellClasses(p: {
  isCurrentMonth: boolean
  isSelected: boolean
}): string {
  return classNames({
    'spr-text-color-brand-base': p.isCurrentMonth,
    'spr-border-color-weak hover:spr-background-color-hover active:spr-background-color-pressed': !p.isSelected,
    'spr-border-color-brand-base spr-background-color-single-active': p.isSelected,
  })
}

export function getYearCellClasses(p: {
  isCurrentYear: boolean
  isSelected: boolean
}): string {
  return classNames({
    'spr-text-color-brand-base': p.isCurrentYear,
    'spr-border-color-weak hover:spr-background-color-hover active:spr-background-color-pressed': !p.isSelected,
    'spr-border-color-brand-base spr-background-color-single-active': p.isSelected,
  })
}
