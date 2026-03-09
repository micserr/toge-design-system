export interface LogEntry {
  label: string[]
  oldValue: string
  newValue: string
}

export interface AuditTrailLog {
  userName: string
  avatarUrl?: string
  title: string
  logs: LogEntry[]
}

export interface AuditTrailProps {
  logs?: AuditTrailLog[]
  alwaysOpen?: boolean
}

export interface AuditTrailEmits {
  (e: 'toggle', index: number, isOpen: boolean): void
}
