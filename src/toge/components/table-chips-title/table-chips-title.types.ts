export interface ChipsCell {
  title: string
  icon?: string
  iconWeight?: string
  badge?: boolean
  badgeText?: string
  badgeVariant?: string
  avatarUrl?: string
  avatarVariant?: string
}

export interface TableChipsTitleProps {
  cell: ChipsCell
}

export interface TableChipsTitleSlots {
  default(props: {}): any
}
