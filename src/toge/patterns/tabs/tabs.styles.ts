// Pure functions only — no Vue imports, no reactivity
import classNames from 'classnames'

export function getTabClasses(
  underlined: boolean,
  isActive: boolean,
  isDisabled: boolean,
  index: number,
  tabCount: number,
): string {
  const base = classNames(
    'spr:relative spr:px-size-spacing-xs spr-body-sm spr-text-color-strong spr:group',
    'spr:transition-left spr:duration-150 spr:ease-in-out',
    {
      // Regular variant padding
      'capitalize spr:py-size-spacing-3xs': !underlined,
      // Underlined variant padding
      'spr:uppercase spr:border-x-0 spr:border-t-0 spr:py-size-spacing-xs': underlined,
    },
  )

  if (!underlined) {
    return classNames(base, {
      // Regular - rounded corners on first/last
      'spr:rounded-l-md': index === 0,
      'spr:rounded-r-md': index === tabCount - 1,

      // Regular - Active
      'spr-border-color-success-base spr:cursor-pointer !spr:border !spr:border-solid': isActive && !isDisabled,

      // Regular - Inactive
      'spr-border-color-weak hover:spr-background-color-hover spr:cursor-pointer !spr:border-x-[0.5px] !spr:border-y !spr:border-solid':
        !isActive && !isDisabled,

      // Regular - Disabled
      'spr-background-color-disabled !spr:cursor-not-allowed !spr-text-color-on-fill-disabled': isDisabled,
    })
  }

  return classNames(base, {
    // Underlined - Active
    'spr:cursor-pointer': isActive && !isDisabled,

    // Underlined - Inactive (non-disabled)
    'spr-border-color-base spr:cursor-pointer !spr:border-b !spr:border-solid hover:spr-background-color-hover':
      !isActive && !isDisabled,

    // Underlined - Disabled
    'spr-border-color-disabled spr-text-color-on-fill-disabled !spr:cursor-not-allowed spr:border-b': isDisabled,
  })
}

export function getTabsContainerClasses(): string {
  return classNames('spr:relative spr:flex')
}

export function getTabActiveIndicatorClasses(): string {
  return classNames(
    'spr-background-color-success-base spr:absolute spr:bottom-0 spr:left-0 spr:z-10 spr:block spr:h-0.5 spr:rounded-full',
    'spr:transition-[left] spr:duration-150 spr:ease-in-out',
  )
}

export function getRegularActiveIndicatorClasses(isFirst: boolean, isLast: boolean): string {
  return classNames(
    'spr-background-color-single-active spr:absolute spr:bottom-0 spr:left-0 spr:z-[5] spr:block spr:h-full spr:w-full',
    {
      'spr:rounded-l-md': isFirst,
      'spr:rounded-r-md': isLast,
    },
  )
}
