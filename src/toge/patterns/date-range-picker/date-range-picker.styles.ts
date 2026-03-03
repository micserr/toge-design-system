import classNames from 'classnames'

export interface DateRangeStyleParams {
  disabled: boolean
  readonly: boolean
  error: boolean
  active: boolean
  isOpen: boolean
  isStartActive?: boolean
  isEndActive?: boolean
}

export function getDateRangePickerClasses(p: DateRangeStyleParams) {
  const baseInput = classNames(
    'spr-flex spr-justify-between spr-items-center spr-gap-2 spr-rounded-border-radius-lg',
    'spr-bg-white spr-py-1.5 spr-px-3 spr-flex-1',
    {
      'spr-border spr-border-solid spr-border-mushroom-200':
        !p.error && !p.disabled && !p.active && !p.isOpen && !p.readonly,
      'spr-border spr-border-solid spr-border-mushroom-200 spr-cursor-default': p.readonly,
      'spr-border-[1.5px] spr-border-solid spr-border-kangkong-700': (p.active || p.isOpen) && !p.readonly,
      'spr-border spr-border-solid spr-border-tomato-600': p.error,
      'spr-background-color-disabled spr-border-white-100 spr-cursor-not-allowed spr-text-color-on-fill-disabled':
        p.disabled,
    },
  )

  return {
    wrapper: 'spr-grid spr-gap-size-spacing-4xs',
    label: classNames('spr-body-sm-regular spr-text-color-strong spr-block', {
      'spr-text-color-on-fill-disabled': p.disabled,
    }),
    inputRow: 'spr-flex spr-w-full spr-items-center spr-gap-2',
    inputBase: baseInput,
    startInputBase: classNames(baseInput, {
      'spr-border-[1.5px] spr-border-solid spr-border-kangkong-700': p.isStartActive && p.isOpen && !p.readonly,
    }),
    endInputBase: classNames(baseInput, {
      'spr-border-[1.5px] spr-border-solid spr-border-kangkong-700': p.isEndActive && p.isOpen && !p.readonly,
    }),
    displayText: classNames('spr-h-full spr-border-none spr-bg-transparent spr-outline-none spr-body-sm-regular', {
      'spr-text-color-strong': !p.disabled,
      'spr-text-color-on-fill-disabled': p.disabled,
      'spr-cursor-not-allowed': p.disabled,
    }),
    placeholder: 'spr-text-color-placeholder',
    separator: 'spr-body-sm-regular spr-text-color-supporting spr-whitespace-nowrap',
    iconWrapper: 'spr-flex spr-items-center spr-justify-center',
    calendarIcon: 'spr-text-color-supporting spr-h-4 spr-w-4',
    helper: classNames(
      'spr-body-sm-regular spr-flex spr-items-center spr-gap-size-spacing-5xs spr-mt-size-spacing-4xs',
      {
        'spr-text-color-danger-base': p.error,
        'spr-text-color-supporting': !p.error,
      },
    ),
    // Dual-panel popper
    popperPanel: 'spr-flex spr-gap-0',
    panelDivider: 'spr-border-l spr-border-solid spr-border-mushroom-200',
  }
}

export function getRangeDayClasses(p: {
  isCurrentMonth: boolean
  isStartDate: boolean
  isEndDate: boolean
  isInRange: boolean
  isToday: boolean
  isDisabled: boolean
  isRestDay: boolean
}): string {
  return classNames({
    'spr-background-color-disabled': p.isRestDay,
    'spr-text-green-600': p.isToday && !p.isStartDate && !p.isEndDate,
    'spr-text-color-strong': p.isCurrentMonth && !p.isStartDate && !p.isEndDate && !p.isToday && !p.isDisabled && !p.isInRange,
    'spr-text-color-disabled': !p.isCurrentMonth && !p.isDisabled,
    'spr-background-color-brand-base active:spr-background-color-brand-pressed spr-text-color-inverted-strong spr-cursor-pointer !spr-text-white-50 spr-font-medium':
      p.isStartDate || p.isEndDate,
    'spr-cursor-pointer spr-bg-green-100 spr-outline spr-outline-1 spr-outline-offset-[-0.5px] spr-outline-kangkong-700':
      p.isInRange && !p.isStartDate && !p.isEndDate,
    'spr-cursor-pointer spr-border spr-border-solid spr-border-gray-300':
      !p.isStartDate && !p.isEndDate && !p.isInRange && !p.isDisabled,
    'spr-cursor-not-allowed spr-opacity-30': p.isDisabled,
  })
}
