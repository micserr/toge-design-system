// Pure functions only — no Vue imports, no reactivity
import classNames from 'classnames'

export interface ListStyleProps {
  disabled?: boolean
  selected?: boolean
  lozenge?: boolean
}

export function getListItemClasses(p: ListStyleProps) {
  return {
    item: classNames(
      'spr:flex spr:items-center spr:gap-size-spacing-2xs spr:px-size-spacing-xs spr:py-size-spacing-2xs',
      'spr:cursor-pointer spr:rounded-border-radius-md',
      'hover:spr-background-color-hover active:spr-background-color-pressed',
      {
        'spr-background-color-single-active': p.selected && !p.disabled,
        'spr-text-color-disabled spr:cursor-not-allowed hover:spr:bg-transparent active:spr:bg-transparent': p.disabled,
      },
    ),
    text: classNames('spr-body-sm-regular spr:flex-1 spr:truncate'),
    subtext: classNames('spr-body-sm-regular spr-text-color-supporting'),
    check: classNames('spr-text-color-brand-base'),
    icon: classNames('spr:flex spr:items-center spr:leading-[0]'),
    sublevelArrow: classNames('spr:ml-auto spr-text-color-supporting'),
  }
}

export function getListClasses() {
  return {
    wrapper: classNames('spr:flex spr:flex-col spr:overflow-y-auto spr:font-main'),
    inner: classNames('spr:grid spr:gap-[2px]'),
    groupLabel: classNames(
      'spr-label-xs-medium spr-text-color-base spr:px-size-spacing-4xs spr:py-size-spacing-3xs spr:uppercase',
    ),
    groupWrapper: classNames('spr:grid spr:gap-3'),
    groupItems: classNames('spr:grid spr:gap-0.5'),
    groupItemsInner: classNames('spr:grid spr:gap-[2px]'),
    loaderWrapper: classNames('spr:flex spr:items-center spr:justify-center spr:p-2'),
    emptyWrapper: classNames(
      'spr:flex spr:items-center spr:justify-center spr:p-2 spr:text-center',
    ),
    emptyText: classNames('spr-body-sm-regular spr:m-0'),
    skeletonItem: classNames('spr-skeletal-loader spr:h-8 spr:w-full spr:rounded-md'),
    sublevelWrapper: classNames('spr:flex spr:flex-col spr:pl-size-spacing-xs'),
  }
}
