import type { ButtonSize, ButtonNativeType } from '../button.types'
import type { MenuListType } from '@/components/list/list'
import type { PLACEMENTS_TYPES } from '@/components/dropdown/dropdown'

// button-dropdown restricts tone and variant relative to the base button
export type ButtonDropdownTone = 'neutral' | 'success'
export type ButtonDropdownVariant = 'primary' | 'secondary'
export type ButtonDropdownPlacement = (typeof PLACEMENTS_TYPES)[number]

export interface ButtonDropdownProps {
  // Dropdown open/close model
  modelValue?: MenuListType[] | string[] | Record<string, unknown>[]
  // Restricted button props
  tone?: ButtonDropdownTone
  variant?: ButtonDropdownVariant
  // Inherited button props (unchanged)
  size?: ButtonSize
  type?: ButtonNativeType
  disabled?: boolean
  hasIcon?: boolean
  fullwidth?: boolean
  // Dropdown-specific props
  dropdownId: string
  menuList: MenuListType[] | string[] | Record<string, unknown>[]
  placement?: ButtonDropdownPlacement
  width?: string
  popperWidth?: string
  popperInnerWidth?: string
}

export interface ButtonDropdownEmits {
  (e: 'click', evt: MouseEvent): void
  (e: 'update:modelValue', value: MenuListType[] | string[] | Record<string, unknown>[]): void
}
