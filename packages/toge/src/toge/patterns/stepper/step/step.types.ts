export type StepStatus = 'pending' | 'active' | 'completed'
export type StepType = 'compact' | 'solid'

export interface StepProps {
  number: number
  label?: string
  description?: string
  status?: StepStatus
  type?: StepType
}

export interface StepEmits {
  (e: 'click', evt: MouseEvent): void
}
