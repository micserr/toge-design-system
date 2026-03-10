import classNames from 'classnames'

export interface CheckboxStyleState {
  isChecked: boolean
  disabled: boolean
  indeterminate: boolean
}

export interface CheckboxClasses {
  baseClasses: string
  inputCheckboxClasses: string
  inputCheckboxCheckIconClasses: string
  labelClasses: string
  descriptionClasses: string
}

export function getCheckboxClasses(state: CheckboxStyleState): CheckboxClasses {
  const { isChecked, disabled } = state

  const baseClasses = classNames(
    'spr-flex spr-w-fit spr-select-none spr-items-center spr-gap-1.5 spr-transition spr-duration-150 spr-ease-in-out',
    {
      'spr-cursor-not-allowed': disabled,
      'spr-cursor-pointer': !disabled,
    },
  )

  const inputCheckboxClasses = classNames(
    'spr-h-[20px] spr-w-[20px] spr-appearance-none spr-rounded-border-radius-sm spr-border-color-supporting spr-border-[1.25px] spr-border-solid spr-m-1',
    'spr-transition spr-duration-150 spr-ease-in-out',
    {
      'spr-background-color-brand-base spr-border-color-brand-base': isChecked && !disabled,
      'hover:spr-background-color-brand-hover hover:spr-border-color-brand-hover': isChecked && !disabled,
      'hover:spr-background-color-hover': !isChecked && !disabled,
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

  return {
    baseClasses,
    inputCheckboxClasses,
    inputCheckboxCheckIconClasses,
    labelClasses,
    descriptionClasses,
  }
}
