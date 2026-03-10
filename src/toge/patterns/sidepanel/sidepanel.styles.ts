import classNames from 'classnames'

export interface SidepanelStyleProps {
  size: string
  position: string
  contentPadding: boolean
  staticBackdropClicked: boolean
}

export interface SidepanelClasses {
  backdrop: string
  container: string
  base: string
  header: string
  closeBtn: string
  content: string
  footer: string
}

export function getSidepanelClasses(p: SidepanelStyleProps): SidepanelClasses {
  return {
    backdrop: classNames('spr:fixed spr:inset-0 spr:z-[1050] spr:h-full spr:w-full spr:bg-[#4C5857] spr:opacity-60'),
    container: classNames(
      'spr:fixed spr:top-0 spr:bottom-0 spr:z-[1100]',
      'spr:p-6 spr:flex spr:items-stretch',
      {
        'spr:right-0': p.position === 'right',
        'spr:left-0': p.position === 'left',
        'spr:w-[calc(100%-2rem)] sm:spr:w-[360px]': p.size === 'sm',
        'spr:w-[calc(100%-2rem)] sm:spr:w-[480px]': p.size === 'md',
        'spr:w-[calc(100%-2rem)] md:spr:w-[720px]': p.size === 'lg',
        'spr:w-[calc(100%-2rem)] lg:spr:w-[900px]': p.size === 'xl',
      },
    ),
    base: classNames(
      'spr:flex spr:flex-col spr:w-full spr:h-full',
      'spr-background-color spr:border spr:border-solid spr-border-color-weak',
      'spr:rounded-xl spr:overflow-hidden',
      { 'bounce-animation': p.staticBackdropClicked },
    ),
    header: classNames(
      'spr:flex spr:items-start spr:justify-between spr:gap-2 spr-text-color-strong spr-subheading-xs',
      'spr-border-color-weak spr:border-x-0 spr:border-b spr:border-t-0 spr:border-solid',
      'spr:p-2 sm:spr:px-4 sm:spr:py-3',
    ),
    closeBtn: classNames(
      'spr-text-color-weak spr-subheading-xs spr:mt-0.5 spr:cursor-pointer',
      'spr:transition spr:duration-150 spr:ease-in-out hover:spr-text-color-base',
      'active:spr-text-color-strong active:spr:scale-75',
    ),
    content: classNames(
      'spr:flex-1 spr-body-sm-regular spr:overflow-y-auto spr:overflow-x-hidden',
      { 'spr:p-2 sm:spr:p-4': p.contentPadding },
    ),
    footer: classNames(
      'spr-border-color-weak spr:border-x-0 spr:border-b-0 spr:border-t spr:border-solid',
      'spr:flex spr:w-full spr:items-center spr:gap-2 spr:px-size-spacing-xs spr:py-size-spacing-2xs spr-text-color-strong',
    ),
  }
}
