import classNames from 'classnames'

export interface SwitchStyleState {
  checked: boolean
  disabled: boolean
}

export function getSwitchTrackClasses(s: SwitchStyleState): string {
  const base = classNames(
    'spr-relative spr-box-border spr-inline-block spr-h-6 spr-w-12 spr-rounded-[40px] spr-p-1',
    'spr-transition-colors spr-duration-150',
    'before:spr-transition-all before:spr-duration-150',
  )

  if (s.disabled) {
    return classNames(
      base,
      s.checked ? 'spr-background-color-success-base' : 'spr-switch-background-default',
      'spr-opacity-60',
    )
  }

  if (s.checked) {
    return classNames(base, 'spr-background-color-success-base')
  }

  return classNames(base, 'spr-switch-background-default')
}

export function getSwitchThumbClasses(s: SwitchStyleState): string {
  return classNames(
    'spr-absolute spr-top-1 spr-h-4 spr-w-4 spr-rounded-[50%] spr-bg-white-50',
    'spr-transition-all spr-duration-150',
    s.checked ? 'spr-left-[1.7rem]' : 'spr-left-1',
  )
}

export function getSwitchWrapperClasses(s: SwitchStyleState): string {
  return classNames('spr-relative spr-flex spr-items-center', {
    'spr-cursor-pointer spr-transition spr-duration-300 spr-ease-in-out active:spr-scale-90': !s.disabled,
    'spr-cursor-not-allowed': s.disabled,
  })
}

export function getSwitchTextClasses(s: SwitchStyleState): string {
  return s.disabled ? 'spr-text-color-disabled' : 'spr-text-color-strong'
}
