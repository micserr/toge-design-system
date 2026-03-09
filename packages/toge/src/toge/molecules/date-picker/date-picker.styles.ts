import classNames from 'classnames'

export interface DatePickerStyleParams {
  disabled: boolean
  readonly: boolean
  error: boolean
  active: boolean
  isOpen: boolean
}

export function getDatePickerClasses(p: DatePickerStyleParams) {
  return {
    wrapper: 'spr-grid spr-gap-size-spacing-4xs',
    label: classNames('spr-body-sm-regular spr-text-color-strong spr-block', {
      'spr-text-color-on-fill-disabled': p.disabled,
    }),
    inputBase: classNames(
      'spr-flex spr-justify-between spr-items-center spr-gap-2 spr-rounded-border-radius-lg',
      'spr-bg-white spr-py-1.5 spr-px-3 spr-min-w-[180px]',
      {
        // Normal state
        'spr-border spr-border-solid spr-border-mushroom-200':
          !p.error && !p.disabled && !p.active && !p.isOpen && !p.readonly,

        // Readonly state
        'spr-border spr-border-solid spr-border-mushroom-200 spr-cursor-default': p.readonly,

        // Active / open state
        'spr-border-[1.5px] spr-border-solid spr-border-kangkong-700':
          (p.active || p.isOpen) && !p.readonly,

        // Error state
        'spr-border spr-border-solid spr-border-tomato-600': p.error,

        // Disabled state
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
    iconWrapper: 'spr-flex spr-items-center spr-justify-center spr-gap-1',
    calendarIcon: 'spr-text-color-supporting spr-h-4 spr-w-4',
    clearIcon: 'spr-text-color-supporting spr-h-4 spr-w-4 spr-cursor-pointer hover:spr-text-color-strong',
    helper: classNames(
      'spr-body-sm-regular spr-flex spr-items-center spr-gap-size-spacing-5xs spr-mt-size-spacing-4xs',
      {
        'spr-text-color-danger-base': p.error,
        'spr-text-color-supporting': !p.error,
      },
    ),
  }
}
