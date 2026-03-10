import classNames from 'classnames'

export interface ModalStyleProps {
  size: string
  contentPadding: boolean
  staticBackdropClicked: boolean
}

export interface ModalClasses {
  backdrop: string
  base: string
  header: string
  closeBtn: string
  content: string
  footer: string
}

export function getModalClasses(p: ModalStyleProps): ModalClasses {
  return {
    backdrop: classNames('spr:fixed spr:inset-0 spr:z-[1050] spr:h-full spr:w-full spr:bg-[#4C5857] spr:opacity-60'),
    base: classNames(
      'spr:fixed spr:z-[1100] spr:left-1/2 spr:top-1/2 spr:transform -spr:translate-x-1/2 -spr:translate-y-1/2',
      'spr-background-color spr:rounded-xl spr:border spr:border-solid spr-border-color-weak',
      'spr:w-[calc(100%-2rem)] spr:max-w-[calc(100%-2rem)]',
      {
        'sm:spr:w-[360px] sm:spr:max-w-[480px]': p.size === 'sm',
        'sm:spr:w-[480px] sm:spr:max-w-[720px]': p.size === 'md',
        'md:spr:w-[720px] md:spr:max-w-[960px]': p.size === 'lg',
        'lg:spr:w-[900px] lg:spr:max-w-[1200px]': p.size === 'xl',
        'xl:spr:w-[1200px] xl:spr:max-w-[1400px]': p.size === 'xxl',
        'bounce-animation': p.staticBackdropClicked,
      },
    ),
    header: classNames(
      'spr:flex spr:items-start spr:justify-between spr:gap-2 spr-text-color-strong spr-subheading-xs',
      'spr-border-color-weak spr:border-x-0 spr:border-b spr:border-t-0 spr:border-solid',
      'spr:rounded-tl-xl spr:rounded-tr-xl spr:p-2 sm:spr:px-4 sm:spr:py-3',
    ),
    closeBtn: classNames(
      'spr-text-color-weak spr-subheading-xs spr:mt-0.5 spr:cursor-pointer',
      'spr:transition spr:duration-150 spr:ease-in-out hover:spr-text-color-base',
      'active:spr-text-color-strong active:spr:scale-75',
    ),
    content: classNames(
      'spr-body-sm-regular spr:max-h-[calc(100vh-200px)] spr:overflow-y-auto spr:overflow-x-hidden',
      { 'spr:p-2 sm:spr:p-4': p.contentPadding },
    ),
    footer: classNames(
      'spr-border-color-weak spr:border-x-0 spr:border-b-0 spr:border-t spr:border-solid',
      'spr:flex spr:w-full spr:items-center spr:gap-2 spr:px-size-spacing-xs spr:py-size-spacing-2xs spr-text-color-strong spr-subheading-xs',
    ),
  }
}
