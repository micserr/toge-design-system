export type EmptyStateImage =
  | 'bug'
  | 'clock'
  | 'dashboard'
  | 'employees'
  | 'government-id'
  | 'integration'
  | 'list'
  | 'social-media-handles'
  | 'work-in-progress'
  | 'work-location'

export type EmptyStateSize = 'small' | 'large'

export interface EmptyStateProps {
  description?: string
  subDescription?: string
  size?: EmptyStateSize
  image?: EmptyStateImage
  hasButton?: boolean
  customClasses?: string
}

export interface EmptyStateEmits {
  (e: 'click', evt: MouseEvent): void
}
