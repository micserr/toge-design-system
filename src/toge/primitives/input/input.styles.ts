// Shared base classes for the input container — import this in other components
// (e.g. select) to stay visually in sync with TogeInput without duplication.
export const INPUT_CONTAINER_BASE = 'spr:relative spr:flex spr:items-center spr:rounded-border-radius-md spr:border spr:border-solid spr:bg-white-50'

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
  const wrapper = 'spr:flex spr:flex-col spr:gap-size-spacing-4xs'

  // Label: body-sm, strong color, flex with gap; disabled shifts to disabled color
  const label = [
    'spr-body-sm-regular spr-text-color-strong spr:flex spr:gap-2',
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
  // Border rule: always 1px — only color changes per state (no thickness change = no layout shift)
  //   default   → border-color-weak
  //   focused   → kangkong-700 — pure CSS via focus-within
  //   error     → border-color-danger-base (error always wins regardless of focus state)
  //   disabled  → mushroom-100
  //
  // Why focus-within over JS isFocused:
  //   spr-border-color-brand-base is a custom CSS class (defined via @apply in tailwind.css),
  //   NOT a raw Tailwind utility. Tailwind JIT cannot generate focus-within: variants for it.
  //   Solution: use the raw token spr:border-kangkong-700 for focus-within variants directly.
  const inputBaseParts = [
    'spr:relative spr:flex spr:items-center spr:rounded-border-radius-md spr:border spr:border-solid spr:bg-white-50',
  ]

  if (state.disabled) {
    inputBaseParts.push('spr-background-color-disabled spr:cursor-not-allowed spr:border-mushroom-100')
  } else if (state.error) {
    inputBaseParts.push('spr-border-color-danger-base')
  } else {
    // Default: weak border; on focus-within swap to brand color
    inputBaseParts.push(
      'spr-border-color-weak',
      'focus-within:spr:border-kangkong-700',
    )
  }

  const inputBase = inputBaseParts.join(' ')

  // The actual <input> element classes
  const inputParts = [
    'spr:block spr:h-8 spr:py-size-spacing-4xs spr:outline-none spr:ring-0 spr:border-none spr:rounded-border-radius-md',
    'spr:font-main spr-font-size-200 [font-weight:inherit]',
    'placeholder:spr:text-mushroom-300',
    'spr:w-full',
  ]

  if (state.disabled) {
    inputParts.push('spr-text-color-on-fill-disabled !spr:cursor-not-allowed')
  } else {
    inputParts.push('spr-text-color-strong')
  }

  // Horizontal padding depends on prefix/icon/trailing slots
  if (!state.hasPrefix && !state.hasIcon && !state.hasTrailing) {
    inputParts.push('spr:px-3')
  } else if (state.hasPrefix && !state.hasIcon && !state.hasTrailing) {
    inputParts.push('spr:pr-3')
  } else if (!state.hasPrefix && (state.hasIcon || state.hasTrailing)) {
    inputParts.push('spr:pl-3')
  }

  const input = inputParts.join(' ')

  // Prefix slot container
  const prefix = [
    'spr:flex spr:items-center spr:justify-center spr:h-8 spr:px-2 [&>svg]:spr:min-h-4 [&>svg]:spr:min-w-4',
    state.error ? 'spr:text-tomato-600' : 'spr:text-mushroom-300',
  ].join(' ')

  // Unified container for trailing + icon slots — single background, no gap between them
  const trailingArea = [
    'spr:flex spr:items-center spr:h-8',
    state.error ? 'spr:text-tomato-600' : 'spr:text-mushroom-300',
  ].join(' ')

  // Trailing slot: inline content (text, lozenges, etc.)
  const trailing = 'spr:flex spr:items-center spr:h-full spr:px-2'

  // Icon slot: fixed-size icon button
  const icon = 'spr:flex spr:items-center spr:justify-center spr:h-full spr:px-2 [&>svg]:spr:min-h-4 [&>svg]:spr:min-w-4'

  // Helper text row
  const helper = [
    'spr-body-sm-regular spr:flex spr:items-center spr:gap-size-spacing-5xs spr:flex-1',
    state.error ? 'spr-text-color-danger-base' : 'spr-text-color-supporting',
  ].join(' ')

  return {
    wrapper,
    label,
    labelSupporting,
    inputBase,
    input,
    prefix,
    trailingArea,
    trailing,
    icon,
    helper,
  }
}
