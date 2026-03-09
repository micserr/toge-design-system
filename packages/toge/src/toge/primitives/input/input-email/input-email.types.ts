import type { InputProps } from '../input.types'

// InputEmailProps re-uses InputProps but omits type since it is always 'email'
export type InputEmailProps = Omit<InputProps, 'type'>
