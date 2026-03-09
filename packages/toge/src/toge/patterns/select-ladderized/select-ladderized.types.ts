import type { PlacementType, PopperStrategy } from '../select/select.types'

export type { PlacementType, PopperStrategy }

export interface SelectLadderizedOption {
  text: string
  value: string | number
  disabled?: boolean
  sublevel?: SelectLadderizedOption[]
}

export interface SelectLadderizedProps {
  id: string
  options: SelectLadderizedOption[]
  placeholder?: string
  label?: string
  supportingLabel?: string
  disabled?: boolean
  error?: boolean
  active?: boolean
  clearable?: boolean
  textSeparator?: string
  prependText?: boolean
  placement?: PlacementType
  distance?: number
  popperStrategy?: PopperStrategy
  popperWidth?: string
  popperContainer?: string
  width?: string
  displayHelper?: boolean
  helperText?: string
  helperIcon?: string
  inputLoader?: boolean
}

export interface SelectLadderizedEmits {
  'update:modelValue': [value: string[]]
  'popper-state': [state: boolean]
}
