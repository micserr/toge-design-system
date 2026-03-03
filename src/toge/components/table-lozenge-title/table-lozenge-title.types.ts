export interface LozengeCell {
  title: string
  fill?: boolean
  avatarUrl?: string
  tone?: string
  icon?: string
}

export interface TableLozengeTitleProps {
  cell: LozengeCell
}

export interface TableLozengeTitleSlots {
  default(props: {}): any
}
