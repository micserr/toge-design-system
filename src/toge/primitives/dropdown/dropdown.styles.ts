// Pure functions only — no Vue imports, no reactivity
import classNames from 'classnames'

export interface DropdownStyleProps {
  width?: string
  popperInnerWidth?: string
}

export function getDropdownClasses(_p: DropdownStyleProps) {
  return {
    wrapper: classNames('spr-relative'),
    menu: classNames(
      'spr-rounded-border-radius-md spr-border spr-border-color-weak spr-bg-white spr-shadow-md spr-overflow-hidden',
    ),
  }
}
