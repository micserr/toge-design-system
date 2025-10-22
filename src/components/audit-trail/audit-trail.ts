import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;
export interface AuditTrailLog {
  userName: string;
  avatarUrl?: string;
  title: string;
  logs: LogEntry[];
}

export interface LogEntry {
  label: string[];
  oldValue: string;
  newValue: string;
}

export const auditTrailPropTypes = {
  auditTrailLogs: {
    type: Array as PropType<AuditTrailLog[]>,
    default: () => [],
  },
  alwaysOpen: {
    type: Boolean,
    default: true,
  }
};

export type AuditTrailPropTypes = ExtractPropTypes<typeof auditTrailPropTypes>;
