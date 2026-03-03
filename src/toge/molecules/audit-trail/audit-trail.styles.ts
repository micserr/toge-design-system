import classNames from 'classnames'

export function getAuditTrailClasses(index: number, isOpen: boolean) {
  return {
    dot: classNames('spr-h-[6px] spr-w-[6px] spr-rounded-full', {
      'spr-bg-kangkong-600': index === 0,
      'spr-bg-mushroom-200': index !== 0,
    }),
    line: classNames(
      'spr-relative spr-left-1/2 spr-mt-size-spacing-5xs spr-w-[1px] spr-translate-x-[-50%]',
      {
        'spr-bg-kangkong-600': index === 0,
        'spr-bg-mushroom-200': index !== 0,
        'spr-h-[calc(100%-12px)]': isOpen,
        'spr-h-[calc(100%-22px)]': !isOpen,
      },
    ),
    header: classNames(
      'hover:spr-background-color-hover spr-ml-[10px] spr-flex spr-w-full spr-items-center',
      'spr-justify-between spr-gap-size-spacing-3xs spr-self-start spr-px-2 spr-py-[6px]',
      'hover:spr-cursor-pointer hover:spr-rounded-lg',
    ),
    title: classNames('spr-text-color-strong spr-text-200 spr-font-normal spr-flex-1'),
    logLabel: classNames('spr-text-color-strong spr-text-200 spr-font-normal'),
    oldValue: classNames(
      'spr-border-color-weak spr-text-color-supporting spr-rounded-border-radius-xs',
      'spr-border spr-border-solid spr-px-size-spacing-5xs spr-py-size-spacing-6xs',
      'spr-text-200 spr-font-normal',
    ),
    newValue: classNames(
      'spr-border-color-weak spr-text-color-strong spr-rounded-border-radius-xs',
      'spr-border spr-border-solid spr-px-size-spacing-5xs spr-py-size-spacing-6xs',
      'spr-text-200 spr-font-normal',
    ),
    arrow: classNames('spr-text-200 spr-font-medium'),
  }
}
