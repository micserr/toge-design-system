import classNames from 'classnames'

export function getCalendarClasses(naked = false) {
  return {
    wrapper: naked
      ? 'spr-body-sm-regular spr:min-w-[280px]'
      : classNames(
          'spr-body-sm-regular spr-background-color spr:rounded-border-radius-lg spr:shadow-md spr:overflow-hidden spr:border-solid spr-border-color-weak',
          'spr:min-w-[320px]',
        ),
    header: classNames(
      'spr:flex spr:justify-between spr:gap-2 spr:px-4 spr:py-3',
      'spr-border-color-weak spr:border-solid spr:border-b-1 spr:border-t-0 spr:border-x-0',
    ),
    headerTabs: 'spr:flex spr:gap-1',
    headerNav: 'spr:flex spr:gap-1',
    body: 'spr:p-4',
    calendarGrid: 'spr:grid spr:grid-cols-7',
    dayHeaderCell: 'spr:py-1 spr:text-center spr-body-xs-semibold spr-text-color-supporting',
    dayCell: 'spr-body-sm-regular spr:relative spr:flex spr:w-full spr:aspect-square spr:items-center spr:justify-center',
    monthGrid: 'spr:grid spr:grid-cols-4 spr:gap-2',
    monthCell: classNames(
      'spr-body-sm-semibold spr:relative spr:flex spr:cursor-pointer spr:items-center spr:justify-center spr:rounded-border-radius-lg spr:p-4',
      'spr:border spr:border-solid',
      'spr:transition spr:duration-150 spr:ease-in-out',
      'active:spr:scale-95',
    ),
    yearGrid: 'spr:grid spr:grid-cols-4 spr:gap-2',
    yearCell: classNames(
      'spr-body-sm-semibold spr:relative spr:flex spr:cursor-pointer spr:items-center spr:justify-center spr:rounded-border-radius-lg spr:p-4',
      'spr:border spr:border-solid',
      'spr:transition spr:duration-150 spr:ease-in-out',
      'active:spr:scale-95',
    ),
    todayDot: classNames(
      'spr-background-color-brand-base spr:absolute spr:bottom-1 spr:inset-x-0 spr:mx-auto spr:h-1 spr:w-1 spr:rounded-full',
    ),
    // Range endpoint inner circle (absolutely fills the cell, on top of half-bg)
    endpointCircle: classNames(
      'spr:absolute spr:inset-0 spr:z-10',
      'spr:rounded-border-radius-md spr-background-color-brand-base active:spr-background-color-brand-pressed',
      'spr:flex spr:items-center spr:justify-center spr:flex-col',
      'spr-text-color-inverted-strong spr:font-medium spr:cursor-pointer',
    ),
    // Half-bg for range fill behind endpoint circle
    rangeHalfBg: 'spr:absolute spr:inset-y-0 spr-background-color-brand-weak spr:w-1/2',
    currentPeriodDot: classNames(
      'spr-background-color-brand-base spr:absolute spr:bottom-2 spr:inset-x-0 spr:mx-auto spr:h-1 spr:w-1 spr:rounded-full',
    ),
  }
}

export function getDayCellClasses(p: {
  isCurrentMonth: boolean
  isSelected: boolean
  isToday: boolean
  isDisabled: boolean
  isRestDay: boolean
  // Range mode (optional)
  isStartDate?: boolean
  isEndDate?: boolean
  isInRange?: boolean
}): string {
  const isEndpoint = p.isStartDate || p.isEndDate
  return classNames({
    // Rest day background — skip for range endpoints
    'spr-background-color-disabled': p.isRestDay && !isEndpoint,

    // Today indicator — brand color text when not selected/endpoint
    'spr-text-color-brand-base': p.isToday && !p.isSelected && !isEndpoint,

    // Active month unselected dates
    'spr-text-color-strong':
      p.isCurrentMonth && !p.isSelected && !p.isToday && !p.isDisabled && !p.isInRange && !isEndpoint,

    // Inactive month dates (overflow days)
    'spr-text-color-disabled': !p.isCurrentMonth && !p.isDisabled && !isEndpoint,

    // Range endpoint: cursor only — bg/radius handled by inner endpointCircle element
    'spr:cursor-pointer': isEndpoint && !p.isDisabled,

    // In range (between start and end, not an endpoint)
    'spr:cursor-pointer spr-background-color-brand-weak': p.isInRange && !isEndpoint,

    // Single-date selected (non-range mode)
    'spr:rounded-border-radius-md spr-background-color-brand-base active:spr-background-color-brand-pressed spr-text-color-inverted-strong spr:cursor-pointer active:spr:scale-95':
      p.isSelected && !isEndpoint,

    // Unselected, not in range, not disabled
    'hover:spr:rounded-border-radius-md hover:spr-background-color-hover active:spr-background-color-pressed spr:cursor-pointer active:spr:scale-95':
      !p.isSelected && !isEndpoint && !p.isInRange && !p.isDisabled,

    // Disabled
    'spr:cursor-not-allowed spr:opacity-30': p.isDisabled,
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
