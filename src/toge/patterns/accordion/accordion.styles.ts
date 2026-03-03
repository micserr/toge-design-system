// Pure functions only — no Vue imports, no reactivity
import classNames from 'classnames'

export interface AccordionClasses {
  container: string
  item: string
  header: string
  triggerBtn: string
}

export function getAccordionClasses(bordered: boolean): AccordionClasses {
  const container = classNames({
    'spr-rounded-border-radius-xl spr-border spr-border-solid spr-border-mushroom-200': bordered,
  })

  const item = classNames('spr-w-full')

  const header = classNames(
    'spr-flex spr-items-center spr-justify-between spr-px-size-spacing-xs spr-py-size-spacing-sm',
  )

  const triggerBtn = classNames(
    'spr-flex spr-h-7 spr-w-7 spr-items-center spr-justify-center spr-rounded-md',
    'spr-border spr-border-solid spr-border-color-base',
    'spr-background-color',
    'hover:spr-background-color-hover hover:spr-shadow-button-hover',
    'active:spr-background-color-pressed active:spr-scale-95',
    'spr-transition spr-duration-150 spr-ease-in-out',
    'spr-cursor-pointer',
  )

  return { container, item, header, triggerBtn }
}
