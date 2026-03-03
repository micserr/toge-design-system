import classNames from 'classnames'

export interface SelectMultipleStyleProps {
  disabled?: boolean
  error?: boolean
  active?: boolean
  focused?: boolean
}

export function getSelectMultipleClasses(p: SelectMultipleStyleProps) {
  return {
    wrapper: classNames('spr-flex spr-flex-col spr-gap-size-spacing-4xs'),

    label: classNames('spr-body-sm-regular spr-text-color-strong spr-flex spr-gap-2', {
      'spr-text-color-on-fill-disabled': p.disabled,
    }),

    supportingLabel: classNames('spr-body-sm-regular spr-text-color-supporting', {
      'spr-text-color-on-fill-disabled': p.disabled,
    }),

    trigger: classNames(
      'spr-relative spr-flex spr-items-center spr-flex-wrap spr-min-h-10 spr-px-size-spacing-sm spr-py-size-spacing-4xs spr-rounded-border-radius-md spr-border-[1.5px] spr-border-solid spr-cursor-pointer spr-bg-white spr-w-full spr-gap-1',
      {
        'spr-border-color-weak': !p.error && !p.disabled && !p.active && !p.focused,
        'spr-border-color-brand-base': (p.active || p.focused) && !p.error && !p.disabled,
        'spr-border-color-danger-base': p.error && !p.disabled,
        'spr-bg-color-disabled spr-cursor-not-allowed spr-border-mushroom-100': p.disabled,
      },
    ),

    triggerInner: classNames('spr-flex spr-flex-wrap spr-items-center spr-flex-1 spr-gap-1 spr-min-w-0'),

    placeholder: classNames('spr-body-md-regular spr-text-color-placeholder', {
      'spr-text-color-on-fill-disabled': p.disabled,
    }),

    chip: classNames(
      'spr-inline-flex spr-items-center spr-gap-1 spr-px-size-spacing-2xs spr-py-size-spacing-5xs spr-rounded-border-radius-full spr-bg-color-brand-subtlest spr-body-sm-regular spr-text-color-brand-base spr-max-w-full',
    ),

    chipText: classNames('spr-truncate spr-max-w-[120px]'),

    chipClose: classNames(
      'spr-flex spr-items-center spr-justify-center spr-h-4 spr-w-4 spr-rounded-full spr-shrink-0 spr-cursor-pointer hover:spr-bg-color-brand-subtler spr-text-color-brand-base',
    ),

    trailingIcons: classNames('spr-flex spr-items-center spr-gap-1 spr-ml-auto spr-shrink-0'),

    chevron: classNames('spr-text-color-supporting spr-transition-transform spr-shrink-0'),

    clearBtn: classNames(
      'spr-flex spr-items-center spr-justify-center spr-text-color-supporting spr-shrink-0 spr-cursor-pointer hover:spr-text-color-strong',
    ),

    helperRow: classNames('spr-flex spr-flex-row spr-items-start spr-justify-between spr-w-full spr-mt-1'),

    helperText: classNames('spr-body-sm-regular spr-flex spr-items-center spr-gap-size-spacing-5xs spr-flex-1', {
      'spr-text-color-danger-base': p.error,
      'spr-text-color-supporting': !p.error,
    }),

    popperContent: classNames(
      'spr-rounded-border-radius-md spr-border spr-border-color-weak spr-bg-white spr-shadow-md spr-overflow-hidden',
    ),

    optionsList: classNames('spr-max-h-[300px] spr-overflow-y-auto spr-overflow-x-hidden'),

    searchInput: classNames(
      'spr-w-full spr-px-size-spacing-sm spr-py-size-spacing-xs spr-border-b spr-border-color-weak spr-outline-none spr-body-md-regular spr-text-color-strong placeholder:spr-text-color-placeholder',
    ),

    optionItem: classNames(
      'spr-flex spr-items-center spr-gap-size-spacing-xs spr-px-size-spacing-sm spr-py-size-spacing-xs spr-cursor-pointer spr-body-md-regular spr-text-color-strong hover:spr-bg-color-hover-weak',
    ),

    optionItemDisabled: classNames(
      'spr-flex spr-items-center spr-gap-size-spacing-xs spr-px-size-spacing-sm spr-py-size-spacing-xs spr-cursor-not-allowed spr-body-md-regular spr-text-color-on-fill-disabled',
    ),

    optionItemSelected: classNames(
      'spr-flex spr-items-center spr-gap-size-spacing-xs spr-px-size-spacing-sm spr-py-size-spacing-xs spr-cursor-pointer spr-body-md-regular spr-text-color-strong spr-bg-color-selected-weak hover:spr-bg-color-hover-weak',
    ),

    checkIcon: classNames('spr-ml-auto spr-text-color-brand-base spr-shrink-0'),

    loader: classNames('spr-flex spr-items-center spr-justify-center spr-p-size-spacing-sm'),

    emptyState: classNames('spr-flex spr-items-center spr-justify-center spr-p-2 spr-text-center'),

    emptyStateText: classNames('spr-body-sm-regular spr-m-0 spr-text-color-supporting'),
  }
}
