// Pure functions only — no Vue imports, no reactivity
import classNames from 'classnames'

export function getCollapsibleContainerClasses(): string {
  return classNames('spr-w-full')
}

export function getCollapsibleContentStyle(transitionDuration: number): Record<string, string> {
  return {
    overflow: 'hidden',
    transition: `max-height ${transitionDuration}ms ease-in-out`,
  }
}
