import classNames from 'classnames'
import { INPUT_CONTAINER_BASE } from '../../primitives/input/input.styles'

export interface SelectStyleProps {
  disabled?: boolean
  error?: boolean
  active?: boolean
}

export function getSelectClasses(p: SelectStyleProps) {
  return {
    wrapper: classNames('spr:flex spr:flex-col spr:gap-size-spacing-4xs'),

    label: classNames('spr-body-sm-regular spr-text-color-strong spr:flex spr:gap-2', {
      'spr-text-color-on-fill-disabled': p.disabled,
    }),

    supportingLabel: classNames('spr-body-sm-regular spr-text-color-supporting', {
      'spr-text-color-on-fill-disabled': p.disabled,
    }),

    // Uses INPUT_CONTAINER_BASE so the container always matches TogeInput visually.
    // Border state logic mirrors input.styles.ts inputBase, with an added active/open state.
    trigger: classNames(
      INPUT_CONTAINER_BASE,
      'spr:flex-wrap spr:min-h-10 spr:px-3 spr:py-size-spacing-4xs spr:cursor-pointer spr:w-full spr:gap-1 spr:appearance-none',
      {
        'spr-border-color-weak focus-within:spr:border-kangkong-700': !p.error && !p.disabled && !p.active,
        'spr-border-color-brand-base': p.active && !p.error && !p.disabled,
        'spr-border-color-danger-base': p.error && !p.disabled,
        'spr-background-color-disabled spr:cursor-not-allowed spr:border-mushroom-100': p.disabled,
      },
    ),

    triggerInner: classNames('spr:flex spr:flex-wrap spr:items-center spr:flex-1 spr:gap-1 spr:min-w-0'),

    placeholder: classNames('spr:font-main spr-font-size-200 spr:text-mushroom-300', {
      'spr-text-color-on-fill-disabled': p.disabled,
    }),

    trailingIcons: classNames('spr:flex spr:items-center spr:gap-1 spr:ml-auto spr:shrink-0'),

    chevron: classNames('spr-text-color-supporting spr:transition-transform spr:shrink-0'),

    clearBtn: classNames(
      'spr:flex spr:items-center spr:justify-center spr-text-color-supporting spr:shrink-0 spr:cursor-pointer hover:spr-text-color-strong',
    ),

    helperRow: classNames('spr:flex spr:flex-row spr:items-start spr:justify-between spr:w-full spr:mt-1'),

    helperText: classNames('spr-body-sm-regular spr:flex spr:items-center spr:gap-size-spacing-5xs spr:flex-1', {
      'spr-text-color-danger-base': p.error,
      'spr-text-color-supporting': !p.error,
    }),
  }
}
