import classNames from 'classnames'
import type { ButtonDropdownTone, ButtonDropdownVariant } from './button-dropdown.types'

export interface ButtonDropdownStyleState {
  tone: ButtonDropdownTone
  variant: ButtonDropdownVariant
  disabled: boolean
}

export function getButtonDropdownClasses(s: ButtonDropdownStyleState): {
  mainButtonClasses: string
  dropdownButtonClasses: string
} {
  const mainButtonClasses = classNames('spr:rounded-r-none spr:border-r', {
    '!spr:border-solid spr:border-l-0 spr:border-t-0 spr:border-b-0': s.disabled && s.variant !== 'secondary',
    'spr:border-r-kangkong-800': s.tone === 'success' && !s.disabled,
    'spr:border-r-mushroom-200': s.tone !== 'success' || (s.tone === 'success' && s.disabled),
  })

  const dropdownButtonClasses = classNames('spr:rounded-l-none', {
    'spr:border-solid spr:border-l-0': s.variant === 'secondary',
    'spr:border-l-transparent': s.variant !== 'secondary',
  })

  return { mainButtonClasses, dropdownButtonClasses }
}
