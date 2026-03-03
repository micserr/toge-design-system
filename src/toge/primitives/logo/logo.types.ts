export type LogoName =
  | 'benchmark'
  | 'ecosystem'
  | 'engage'
  | 'finances'
  | 'hr-mobile'
  | 'hr'
  | 'inbound'
  | 'insight'
  | 'readycash'
  | 'readywage'
  | 'payroll'
  | 'performance-plus'
  | 'procurement'
  | 'professional-services'
  | 'recruit'
  | 'recruit-plus'
  | 'sail'
  | 'sidekick'
  | 'wellness'

export type LogoTheme = 'white' | 'dark' | 'gray' | 'green'

export interface LogoProps {
  name?: LogoName
  theme?: LogoTheme
  width?: string | number
}
