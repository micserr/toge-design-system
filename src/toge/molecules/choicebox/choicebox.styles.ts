import classNames from 'classnames'

export interface ChoiceboxStyleState {
  isChecked: boolean
  disabled: boolean
  fullWidth: boolean
  isIndeterminate: boolean
}

export function getChoiceboxClasses(state: ChoiceboxStyleState) {
  const { isChecked, disabled, fullWidth, isIndeterminate } = state

  // Bordered card container — owns all visual chrome
  const container = classNames(
    'spr-flex spr-items-center spr-gap-2 spr-select-none spr-box-border',
    'spr-border spr-border-solid spr-rounded-border-radius-lg spr-p-size-spacing-2xs',
    'spr-transition spr-duration-150 spr-ease-in-out',
    {
      'spr-border-color-success-base spr-bg-kangkong-100': isChecked && !disabled,
      'spr-border-color-base hover:spr-background-color-hover': !isChecked && !disabled,
      'spr-border-mushroom-100 spr-bg-white-100 spr-cursor-not-allowed': disabled,
      'spr-cursor-pointer': !disabled,
      'spr-w-full': fullWidth,
      'spr-w-fit': !fullWidth,
    },
  )

  // Checkbox: styled input box (appearance-none so we control visuals)
  const checkboxInput = classNames(
    'spr-h-[20px] spr-w-[20px] spr-appearance-none spr-rounded-border-radius-sm spr-border-[1.25px] spr-border-solid spr-m-1',
    'spr-transition spr-duration-150 spr-ease-in-out spr-shrink-0',
    {
      'spr-background-color-brand-base spr-border-color-brand-base': isChecked && !disabled,
      'hover:spr-background-color-brand-hover hover:spr-border-color-brand-hover': isChecked && !disabled,
      'spr-border-color-supporting hover:spr-background-color-hover': !isChecked && !disabled,
      'spr-border-color-on-fill-disabled spr-background-color-disabled spr-cursor-not-allowed': !isChecked && disabled,
      'spr-bg-white-300 spr-border-none': isChecked && disabled,
      'spr-cursor-pointer': !disabled,
    },
  )

  // Checkbox: check/minus icon overlay
  const checkboxIndicator = classNames(
    'spr-h-[20px] spr-w-[20px] spr-flex spr-items-center spr-justify-center',
    'spr-pointer-events-none spr-absolute spr-left-1/2 spr-top-1/2 -spr-translate-x-1/2 -spr-translate-y-1/2',
    'spr-font-bold spr-text-color-inverted-strong',
    {
      'spr-opacity-100': isChecked || isIndeterminate,
      'spr-opacity-0': !isChecked && !isIndeterminate,
    },
  )

  // Radio: circle indicator (visually replaces native radio)
  const radioIndicator = classNames(
    'spr-inline-block spr-w-4 spr-h-4 spr-rounded-full spr-border-2 spr-border-solid spr-shrink-0',
    'spr-transition spr-duration-150 spr-ease-in-out',
    {
      'spr-background-color-brand-base spr-border-color-brand-base spr-shadow-[inset_0px_0px_0px_2.5px_#fff]': isChecked && !disabled,
      'spr-border-color-supporting': !isChecked && !disabled,
      'spr-border-color-disabled spr-background-color-disabled spr-shadow-[inset_0px_0px_0px_2.5px_#fff]': isChecked && disabled,
      'spr-border-color-disabled spr-background-color-disabled': !isChecked && disabled,
    },
  )

  const label = classNames('spr-body-sm-regular spr-block', {
    'spr-text-color-strong': !disabled,
    'spr-text-color-on-fill-disabled': disabled,
  })

  const description = classNames('spr-body-xs-regular spr-block', {
    'spr-text-color-supporting': !disabled,
    'spr-text-color-on-fill-disabled': disabled,
  })

  return { container, checkboxInput, checkboxIndicator, radioIndicator, label, description }
}
