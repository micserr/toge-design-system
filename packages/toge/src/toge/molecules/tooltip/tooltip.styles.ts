// Pure functions only — no Vue imports, no reactivity
import classNames from 'classnames'

export function getTooltipWrapperClasses(fitContent: boolean): string {
  return classNames({
    'spr-w-fit': fitContent,
    'spr-w-full': !fitContent,
  })
}
