import type { StatusState, StatusSize } from './status.types'

const STATE_SIZES: Record<StatusSize, string> = {
  '2xs': 'spr-w-[14px] spr-h-[14px]',
  xs: 'spr-w-4 spr-h-4',
  sm: 'spr-w-5 spr-h-5',
  base: 'spr-w-6 spr-h-6',
  lg: 'spr-w-8 spr-h-8',
  xl: 'spr-w-10 spr-h-10',
  '2xl': 'spr-w-12 spr-h-12',
}

const STATE_CLASSES: Record<StatusState, string> = {
  success: 'spr-text-kangkong-600',
  information: 'spr-text-blueberry-700',
  pending: 'spr-text-mango-500',
  caution: 'spr-text-carrot-500',
  danger: 'spr-text-tomato-600',
}

const STATE_ICONS: Record<StatusState, string> = {
  success: 'ph:check-circle-fill',
  information: 'ph:info-fill',
  pending: 'ph:warning-fill',
  caution: 'ph:warning-fill',
  danger: 'ph:warning-circle-fill',
}

const STATE_DESCRIPTIONS: Record<StatusState, string> = {
  success: 'Success',
  information: 'Information',
  pending: 'Pending',
  caution: 'Caution',
  danger: 'Danger',
}

export function getStatusSizeClass(size: StatusSize): string {
  return STATE_SIZES[size] ?? 'spr-w-6 spr-h-6'
}

export function getStatusColorClass(state: StatusState): string {
  return STATE_CLASSES[state] ?? 'spr-text-kangkong-600'
}

export function getStatusIcon(state: StatusState): string {
  return STATE_ICONS[state] ?? 'ph:check-circle-fill'
}

export function getStatusDescription(state: StatusState): string {
  return STATE_DESCRIPTIONS[state] ?? 'Success'
}
