import classNames from 'classnames'

export function getAttributeFilterClasses(): {
  wrapper: string
  trigger: string
  triggerActive: string
  menu: string
  menuItem: string
  clearBtn: string
} {
  return {
    wrapper: classNames('spr-flex spr-items-center spr-gap-size-spacing-2xs spr-flex-wrap'),
    trigger: classNames(
      'spr-inline-flex spr-items-center spr-gap-size-spacing-2xs',
      'spr-h-8 spr-px-size-spacing-xs spr-rounded-border-radius-md',
      'spr-border spr-border-solid spr-border-color-weak',
      'spr-body-sm-regular spr-cursor-pointer',
      'hover:spr-background-color-hover',
    ),
    triggerActive: classNames(
      'spr-bg-color-brand-subtle spr-border-color-brand-base spr-text-color-brand-base',
    ),
    menu: classNames(
      'spr-min-w-[180px] spr-rounded-border-radius-md spr-border spr-border-color-weak',
      'spr-bg-white spr-shadow-md spr-overflow-hidden',
    ),
    menuItem: classNames(
      'spr-flex spr-items-center spr-gap-size-spacing-2xs',
      'spr-px-size-spacing-xs spr-py-size-spacing-2xs',
      'spr-cursor-pointer spr-body-md-regular',
      'hover:spr-background-color-hover',
    ),
    clearBtn: classNames(
      'spr-body-sm-regular spr-text-color-brand-base spr-cursor-pointer',
      'hover:spr-text-color-brand-hover',
    ),
  }
}
