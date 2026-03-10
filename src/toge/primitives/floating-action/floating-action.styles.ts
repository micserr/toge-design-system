export interface FloatingActionClasses {
  wrapper: string
  inner: string
}

export function getFloatingActionClasses(): FloatingActionClasses {
  const wrapper =
    'spr:bg-white-50 spr-body-md-regular spr-text-color-strong spr:bg-white spr:fixed spr:bottom-8 spr:left-1/2 spr:z-50 spr:flex spr:w-full spr:max-w-[1024px] spr:-translate-x-1/2 spr:items-center spr:gap-4 spr:rounded-border-radius-md spr-drop-shadow-sm spr:border-solid spr-border-color-weak'

  const inner =
    'spr:flex spr:w-full spr:items-center spr:justify-between spr:px-size-spacing-md spr:py-size-spacing-2xs'

  return { wrapper, inner }
}
