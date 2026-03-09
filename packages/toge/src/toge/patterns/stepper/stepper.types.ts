import type { StepStatus, StepType } from './step/step.types'

export type StepperVariant = 'horizontal' | 'vertical'

export interface StepData {
  number: number
  label?: string
  description?: string
  status?: StepStatus
}

export interface StepperProps {
  variant?: StepperVariant
  steps?: StepData[]
  hasLines?: boolean
  type?: StepType
}

export interface StepperEmits {
  (e: 'step-click', stepNumber: number, evt: MouseEvent): void
}
