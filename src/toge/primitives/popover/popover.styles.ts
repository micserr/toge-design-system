// Pure functions only — no Vue imports, no reactivity
import classNames from 'classnames'

export interface PopoverStyleProps {
  width?: string
  popperInnerWidth?: string
}

export function getPopoverClasses(_p: PopoverStyleProps) {
  return {
    wrapper: classNames('spr-relative'),
    menu: classNames(
      'spr-rounded-border-radius-lg spr-border spr-border-color-weak spr-bg-white spr-shadow-md spr-overflow-hidden spr-p-2',
    ),
  }
}
