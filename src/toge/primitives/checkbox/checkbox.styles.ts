import classNames from 'classnames'

export interface CheckboxStyleState {
  isChecked: boolean
  disabled: boolean
  bordered: boolean
  fullWidth: boolean
  indeterminate: boolean
}

export interface CheckboxClasses {
  baseClasses: string
  inputCheckboxClasses: string
  inputCheckboxCheckIconClasses: string
  labelClasses: string
  descriptionClasses: string
  borderedClasses: string
}

export function getCheckboxClasses(state: CheckboxStyleState): CheckboxClasses {
  const { isChecked, disabled, bordered, fullWidth } = state

  const baseClasses = classNames(
    'spr-flex spr-w-fit spr-select-none spr-items-center spr-gap-1.5 spr-transition spr-duration-150 spr-ease-in-out',
    {
      'spr-cursor-not-allowed': disabled,
      'spr-cursor-pointer': !disabled,
    },
  )

  const inputCheckboxClasses = classNames(
    'spr-h-[20px] spr-w-[20px] spr-appearance-none spr-rounded-[2.5px] spr-border-color-supporting spr-border-[1.25px] spr-border-solid spr-m-1',
    'spr-transition spr-duration-150 spr-ease-in-out',
    {
      'spr-background-color-brand-base spr-border-color-brand-base': isChecked && !disabled,
      'hover:spr-background-color-brand-hover hover:spr-border-color-brand-hover':
        isChecked && !bordered && !disabled,
      'hover:spr-background-color-hover': !isChecked && !bordered,
      'spr-border-color-on-fill-disabled spr-background-color-disabled spr-cursor-not-allowed':
        !isChecked && disabled,
      'spr-bg-white-300 spr-border-none': isChecked && disabled,
      'spr-cursor-pointer': !disabled,
    },
  )

  const inputCheckboxCheckIconClasses = classNames(
    'spr-h-[20px] spr-w-[20px] spr-flex spr-items-center spr-justify-center spr-pointer-events-none spr-absolute spr-left-1/2 spr-top-1/2 -spr-translate-x-1/2 -spr-translate-y-1/2 spr-transform spr-font-bold spr-opacity-0 spr-text-color-inverted-strong',
    {
      'spr-opacity-100': isChecked,
    },
  )

  const labelClasses = classNames('spr-body-sm-regular spr-text-color-strong spr-block', {
    'spr-text-color-on-fill-disabled': disabled,
  })

  const descriptionClasses = classNames('spr-body-xs-regular spr-block', {
    'spr-text-color-on-fill-disabled': disabled,
  })

  const borderedClasses = classNames(
    'spr-border spr-rounded-md spr-p-size-spacing-2xs spr-border-solid spr-box-border',
    {
      'spr-border-color-success-base spr-bg-kangkong-100': isChecked && !disabled,
      'spr-border-color-base': !isChecked && !disabled,
      'hover:spr-background-color-hover': !isChecked || disabled,
      'spr-border-0 spr-bg-white-100': disabled,
      'spr-w-fit': !fullWidth,
      'spr-w-full': fullWidth,
    },
  )

  return {
    baseClasses,
    inputCheckboxClasses,
    inputCheckboxCheckIconClasses,
    labelClasses,
    descriptionClasses,
    borderedClasses,
  }
}
