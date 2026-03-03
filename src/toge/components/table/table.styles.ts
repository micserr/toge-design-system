import classNames from 'classnames'

export interface TableStyleProps {
  striped?: boolean
  hoverable?: boolean
  bordered?: boolean
  dense?: boolean
  stickyHeader?: boolean
}

export function getTableClasses(p: TableStyleProps) {
  return {
    tableWrapperClasses: classNames('spr-w-full spr-overflow-x-auto spr-rounded-border-radius-md'),

    tableBackgroundClasses: classNames('spr-bg-white spr-w-full spr-overflow-hidden'),

    headerClasses: (header: { align?: string; sticky?: boolean; stickyPosition?: string } | null) =>
      classNames(
        'spr-bg-mushroom-50 spr-text-left spr-px-size-spacing-xs spr-py-size-spacing-2xs',
        'spr-body-sm-semibold spr-text-color-strong spr-border-b spr-border-color-weak',
        {
          'spr-text-center': header?.align === 'center',
          'spr-text-right': header?.align === 'right',
          'spr-sticky spr-top-0 spr-z-10': p.stickyHeader,
          'spr-sticky spr-left-0': header?.sticky,
        },
      ),

    rowClasses: (index: number, selected?: boolean) =>
      classNames('spr-border-b spr-border-color-weak', {
        'spr-bg-mushroom-50': p.striped && index % 2 !== 0,
        'hover:spr-background-color-hover': p.hoverable,
        'spr-bg-color-brand-subtle': selected,
      }),

    cellClasses: classNames(
      'spr-px-size-spacing-xs spr-py-size-spacing-2xs',
      'spr-body-md-regular spr-text-color-strong',
    ),

    multiselectClass: classNames('spr-w-10 spr-px-size-spacing-xs spr-py-size-spacing-2xs'),

    headerNameClass: classNames('spr-flex spr-items-center spr-gap-size-spacing-3xs'),

    tableBodyClasses: classNames('spr-w-full'),

    emptyStateClasses: classNames('spr-w-full spr-h-48'),

    tableActionSlotClasses: classNames('spr-p-size-spacing-2xs'),

    headerActionsClasses: classNames(
      'spr-h-max spr-p-size-spacing-2xs spr-flex spr-justify-between',
    ),
  }
}
