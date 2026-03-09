import classNames from 'classnames'

export interface SidepanelStyleProps {
  size: string
  position: string
  isExpanded: boolean
  footerNoPadding: boolean
  footerNoTopBorder: boolean
}

export interface SidepanelClasses {
  base: string
  header: string
  headerTitle: string
  headerSubtitle: string
  headerIcons: string
  content: string
  footer: string
  backdrop: string
  transitionActive: string
  transitionHidden: string
  transitionVisible: string
}

export function getSidepanelClasses(p: SidepanelStyleProps): SidepanelClasses {
  const base = classNames(
    'spr-right-4 spr-top-1/2 spr-z-[1015] spr-flex spr-h-full spr-min-h-[200px] spr-translate-y-[-50%] spr-flex-col spr-rounded-border-radius-xl spr-bg-white-50 spr-drop-shadow spr-transition-all spr-ease-[ease-in-out] spr-duration-[150ms]',
    'spr-fixed',
    {
      'spr-w-[360px]': p.size === 'sm' && !p.isExpanded,
      'spr-w-[420px]': p.size === 'md' && !p.isExpanded,
      'spr-w-[480px]': p.size === 'lg' && !p.isExpanded,
      '[@media(max-width:360px)]:spr-w-[calc(100vw-35px)]': p.size === 'sm' && !p.isExpanded,
      '[@media(max-width:420px)]:spr-w-[calc(100vw-35px)]': p.size === 'md' && !p.isExpanded,
      '[@media(max-width:480px)]:spr-w-[calc(100vw-35px)]': p.size === 'lg' && !p.isExpanded,
      'spr-w-[calc(100vw-50px)]': p.isExpanded,
    },
  )

  const header = classNames(
    'spr-tw-min-h-12 spr-text-color-strong spr-flex spr-justify-between spr-border-0 spr-border-b spr-border-solid spr-border-mushroom-200 spr-p-4',
  )

  const headerTitle = classNames('spr-subheading-xs')

  const headerSubtitle = classNames('spr-text-200 spr-max-w-[95%]')

  const headerIcons = classNames('spr-text-color-weak spr-h-5 spr-w-5 spr-cursor-pointer')

  const content = classNames('spr-h-full spr-overflow-y-auto')

  const footer = classNames(
    'spr-bottom-0 spr-left-0 spr-w-full spr-rounded-b-border-radius-xl spr-border-0 spr-border-solid spr-border-mushroom-200 spr-bg-white-50',
    {
      'spr-py-3': !p.footerNoPadding,
      'spr-border-t': !p.footerNoTopBorder,
    },
  )

  const backdrop = classNames(
    'spr-fixed spr-left-0 spr-top-0 spr-z-[1010] spr-h-full spr-w-full spr-bg-mushroom-700/60',
  )

  const transitionActive = classNames(
    'spr-transition-all spr-duration-[150ms] spr-ease-[ease-in-out]',
  )

  const transitionHidden = classNames('spr-opacity-0', {
    'spr-translate-x-full -spr-translate-y-2/4': p.position === 'right',
  })

  const transitionVisible = classNames({
    'spr-translate-x-0 -spr-translate-y-2/4': p.position === 'right',
  })

  return {
    base,
    header,
    headerTitle,
    headerSubtitle,
    headerIcons,
    content,
    footer,
    backdrop,
    transitionActive,
    transitionHidden,
    transitionVisible,
  }
}
