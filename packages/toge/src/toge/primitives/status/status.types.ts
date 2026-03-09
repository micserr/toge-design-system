export type StatusState = 'success' | 'information' | 'pending' | 'caution' | 'danger'
export type StatusSize = '2xs' | 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'

export interface StatusProps {
  state?: StatusState
  size?: StatusSize
}
