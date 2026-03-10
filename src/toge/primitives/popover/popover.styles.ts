// Pure functions only — no Vue imports, no reactivity
import classNames from 'classnames'

export interface PopoverStyleProps {
  width?: string
  popperInnerWidth?: string
}

export function getPopoverClasses(_p: PopoverStyleProps) {
  return {
    wrapper: classNames('spr-relative'),
    // ─── Floating-vue radius/clipping rule ────────────────────────────────────
    // floating-vue renders: .v-popper__inner > <anonymous div> > this div.
    // .v-popper__inner is neutralized via .toge-popover-popper in tailwind.css:
    //   border-radius matches spr-rounded-border-radius-lg (12px), overflow:hidden,
    //   border/shadow/bg stripped so this div owns all visual chrome.
    menu: classNames(
      'spr-rounded-border-radius-lg spr-border spr-border-solid spr-border-color-weak spr-background-color spr-shadow-md spr-overflow-hidden spr-p-2',
    ),
  }
}
