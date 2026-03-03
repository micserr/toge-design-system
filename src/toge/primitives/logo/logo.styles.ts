export interface LogoStyleState {
  width: string | number
}

export interface LogoClasses {
  img: string
}

export function getLogoClasses(_s: LogoStyleState): LogoClasses {
  return {
    img: 'spr-block',
  }
}

const LOGO_NAME_MAP: Record<string, string> = {
  'hr': 'Sprout HR',
  'hr-mobile': 'Sprout HR Mobile',
  'performance-plus': 'Sprout Performance+',
  'recruit-plus': 'Sprout Recruit+',
  'sail': 'Sprout SAIL',
  'readycash': 'Sprout ReadyCash',
  'readywage': 'Sprout ReadyWage',
}

export function getLogoTitle(name: string): string {
  if (name in LOGO_NAME_MAP) {
    return LOGO_NAME_MAP[name]
  }
  const firstChar = name.charAt(0).toUpperCase()
  const remainingChars = name.slice(1)
  return `Sprout ${firstChar}${remainingChars}`
}
