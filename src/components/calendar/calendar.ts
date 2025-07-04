import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

export interface ShiftType {
  startTime: string;
  endTime: string;
  location: string;
  type: string;
}

interface EmployeeSchedule {
  [key: string]: ShiftType | 'restday' | null;
}

interface Employee {
  id: string;
  name: string;
  position: string;
  avatar?: string;
  hoursWorked?: number;
  hoursTarget?: number;
  schedule: EmployeeSchedule[];
}
export interface SelectedShift {
  employeeId: string;
  date: string;
  shift?: ShiftType | 'restday' | null;
}

export const calendarPropTypes = {
  employees: {
    type: Array as PropType<Employee[]>,
    default: () => [],
  },
  initialDate: {
    type: Date,
    default: () => new Date(),
  },

  search: {
    type: String,
    default: '',
  },

  selectedCell: {
    type: Object as PropType<SelectedShift>,
    default: () => ({
      employeeId: '',
      date: '',
      shift: null,
    }),
  },
  loading: {
    type: Boolean,
    default: false,
  },
  emptyStateTitle: {
    type: String,
    default: 'No List Found',
  },
  emptyStateDescription: {
    type: String,
    default: '',
  },
  emptyStateButtonText: {
    type: String,
    default: 'Add Employee',
  },
  hideAddButton: {
    type: Boolean,
    default: false,
  },
};

export const calendarEmitTypes = {};

export type CalendarEmitTypes = typeof calendarEmitTypes;

export type CalendarPropTypes = ExtractPropTypes<typeof calendarPropTypes>;
