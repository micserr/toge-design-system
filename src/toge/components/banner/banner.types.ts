export type BannerType = 'success' | 'error' | 'info' | 'pending' | 'caution'

export interface BannerProps {
  type?: BannerType
  showCloseButton?: boolean
  message?: string
}

export interface BannerEmits {
  (e: 'close'): void
}
