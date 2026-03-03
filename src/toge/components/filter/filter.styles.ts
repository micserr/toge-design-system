import classNames from 'classnames'

export interface FilterOptionStyleProps {
  active?: boolean
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function getFilterOptionClasses(p: FilterOptionStyleProps): string {
  return classNames(
    'spr-inline-flex spr-items-center spr-gap-size-spacing-2xs spr-rounded-border-radius-full spr-border spr-border-solid',
    'spr-cursor-pointer spr-transition-colors',
    {
      'spr-px-size-spacing-xs spr-py-size-spacing-3xs spr-body-sm-regular': p.size === 'sm' || !p.size,
      'spr-px-size-spacing-sm spr-py-size-spacing-2xs spr-body-md-regular': p.size === 'md',
      'spr-px-size-spacing-md spr-py-size-spacing-xs spr-body-lg-regular': p.size === 'lg',
      'spr-bg-color-brand-base spr-border-color-brand-base spr-text-white': p.active && !p.disabled,
      'spr-border-color-weak spr-text-color-strong hover:spr-background-color-hover': !p.active && !p.disabled,
      'spr-text-color-disabled spr-cursor-not-allowed spr-border-color-weak': p.disabled,
    },
  )
}

export function getFilterWrapperClasses(): string {
  return 'spr-flex spr-flex-wrap spr-gap-size-spacing-2xs'
}
