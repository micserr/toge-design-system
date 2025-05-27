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

interface FilterOption {
  text: string;
  value: string;
}

export interface SelectedShift {
  employeeId: string;
  date: string;
  shift?: ShiftType | 'restday' | null;
}

export const calendarPropTypes = {
  employees: {
    type: Array as PropType<Employee[]>,
    required: true,
  },
  initialDate: {
    type: Date,
    default: () => new Date(),
  },
  companyOptions: {
    type: Array as PropType<FilterOption[]>,
    default: () => [{ text: 'All Companies', value: 'all' }],
  },
  departmentOptions: {
    type: Array as PropType<FilterOption[]>,
    default: () => [{ text: 'All Departments', value: 'all' }],
  },
  branchOptions: {
    type: Array as PropType<FilterOption[]>,
    default: () => [{ text: 'All Branches', value: 'all' }],
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

  selectedCompany: {
    type: String,
    default: '',
  },
  selectedDepartment: {
    type: String,
    default: '',
  },
  selectedBranch: {
    type: String,
    default: '',
  },
};

export const calendarEmitTypes = {};

export type CalendarEmitTypes = typeof calendarEmitTypes;

export type CalendarPropTypes = ExtractPropTypes<typeof calendarPropTypes>;
