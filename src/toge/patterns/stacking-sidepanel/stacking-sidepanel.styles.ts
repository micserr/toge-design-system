import classNames from 'classnames'

export interface StackingSidepanelClasses {
  backdrop: string
  base: string
}

export function getStackingSidepanelClasses(): StackingSidepanelClasses {
  return {
    backdrop: classNames(
      'spr-fixed spr-left-0 spr-top-0 spr-z-[1010] spr-h-full spr-w-full spr-bg-mushroom-700/60',
    ),
    base: classNames(
      'spr-fixed spr-right-4 spr-top-0 spr-z-[1015] spr-flex spr-h-full spr-items-center',
    ),
  }
}
