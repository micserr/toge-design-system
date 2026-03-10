import classNames from 'classnames'

export function getChipDayClasses(active: boolean, disabled: boolean): string {
  return classNames(
    'spr-label-xs-medium spr:inline-flex spr:items-center spr:justify-center spr:rounded-full spr:transition-all spr:aspect-square spr:h-10 spr:w-10 spr-body-sm-regular spr:border spr:border-solid',
    {
      'spr:cursor-pointer': !disabled,
      'spr:cursor-not-allowed spr-text-color-on-fill-disabled spr-background-color-disabled spr-border-color-disabled':
        disabled,
      'spr-background-color-brand-base spr-text-color-inverted-strong spr-border-color-brand-base':
        active && !disabled,
      'spr-background-color spr-text-color-strong spr-border-color-weak hover:spr-background-color-hover active:spr-background-color-pressed':
        !active && !disabled,
    },
  )
}
