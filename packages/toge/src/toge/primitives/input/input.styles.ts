export interface InputStyleState {
  disabled: boolean
  readonly: boolean
  error: boolean
  hasPrefix: boolean
  hasTrailing: boolean
  hasIcon: boolean
}

export function getInputClasses(state: InputStyleState) {
  // Wrapper: flex column with gap
  const wrapper = 'spr-flex spr-flex-col spr-gap-size-spacing-4xs'

  // Label: body-sm, strong color, flex with gap; disabled shifts to disabled color
  const label = [
    'spr-body-sm-regular spr-text-color-strong spr-flex spr-gap-2',
    state.disabled ? 'spr-text-color-on-fill-disabled' : '',
  ]
    .filter(Boolean)
    .join(' ')

  // Supporting label: body-sm, supporting color; disabled shifts to disabled color
  const labelSupporting = [
    'spr-body-sm-regular spr-text-color-supporting',
    state.disabled ? 'spr-text-color-on-fill-disabled' : '',
  ]
    .filter(Boolean)
    .join(' ')

  // Input base: the border container (relative, flex, items-center, padding, rounded, border)
  const inputBaseParts = [
    'spr-relative spr-flex spr-items-center spr-p-[1.5px] spr-rounded-border-radius-md spr-border-[1.5px] spr-border-solid',
  ]

  if (state.disabled) {
    inputBaseParts.push('spr-background-color-disabled spr-cursor-not-allowed spr-border-mushroom-100')
  } else if (state.error) {
    inputBaseParts.push('spr-border-color-danger-base')
  } else {
    inputBaseParts.push('spr-border-color-weak')
  }

  const inputBase = inputBaseParts.join(' ')

  // The actual <input> element classes
  const inputParts = [
    'spr-block spr-h-8 spr-py-size-spacing-4xs spr-outline-none spr-ring-0 spr-border-none spr-rounded-border-radius-md',
    'spr-font-main spr-font-size-200 [font-weight:inherit]',
    'placeholder:spr-text-mushroom-300',
    'spr-w-full',
  ]

  if (state.disabled) {
    inputParts.push('spr-text-color-on-fill-disabled !spr-cursor-not-allowed')
  } else {
    inputParts.push('spr-text-color-strong')
  }

  // Horizontal padding depends on prefix/icon/trailing slots
  if (!state.hasPrefix && !state.hasIcon && !state.hasTrailing) {
    inputParts.push('spr-px-3')
  } else if (state.hasPrefix && !state.hasIcon && !state.hasTrailing) {
    inputParts.push('spr-pr-3')
  } else if (!state.hasPrefix && (state.hasIcon || state.hasTrailing)) {
    inputParts.push('spr-pl-3')
  }

  const input = inputParts.join(' ')

  // Prefix slot container
  const prefix = [
    'spr-flex spr-items-center spr-justify-center spr-h-8 spr-px-2 [&>svg]:spr-min-h-4 [&>svg]:spr-min-w-4',
    state.error ? 'spr-text-tomato-600' : 'spr-text-mushroom-300',
  ].join(' ')

  // Trailing slot container
  const trailing = [
    'spr-flex spr-items-center spr-h-8 spr-w-full spr-px-2',
    state.error ? 'spr-text-tomato-600' : 'spr-text-mushroom-300',
  ].join(' ')

  // Icon slot container
  const icon = [
    'spr-flex spr-items-center spr-justify-center spr-h-8 spr-px-2 [&>svg]:spr-min-h-4 [&>svg]:spr-min-w-4',
    state.error ? 'spr-text-tomato-600' : 'spr-text-mushroom-300',
  ].join(' ')

  // Helper text row
  const helper = [
    'spr-body-sm-regular spr-flex spr-items-center spr-gap-size-spacing-5xs spr-flex-1',
    state.error ? 'spr-text-color-danger-base' : 'spr-text-color-supporting',
  ].join(' ')

  return {
    wrapper,
    label,
    labelSupporting,
    inputBase,
    input,
    prefix,
    trailing,
    icon,
    helper,
  }
}
