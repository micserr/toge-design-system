import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const CALENDAR_STATE_STATES = ['success', 'information', 'pending', 'caution', 'danger'] as const;

export const calendarCellPropTypes = {
  type: {
    type: String,
    default: 'standard',
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    default: 'default',
  },
  className: {
    type: String,
    default: '',
  },

  state: {
    type: String as PropType<(typeof CALENDAR_STATE_STATES)[number]>,
    validator: (value: (typeof CALENDAR_STATE_STATES)[number]) => CALENDAR_STATE_STATES.includes(value),
    default: 'danger',
  },
  fullwidth: {
    type: Boolean,
    default: false,
  },
  viewOnly: {
    type: Boolean,
    default: true,
  },
  subDescription: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  customColor: {
    type: String,
    default: '',
  },
  customBorderSize: {
    type: String,
    default: null,
  },
  lineThrough: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
};

export type CalendarCellPropTypes = ExtractPropTypes<typeof calendarCellPropTypes>;
export const calendarCellEmitTypes = {
  onClick: (evt: MouseEvent): evt is MouseEvent => evt instanceof MouseEvent,
};

export type CalendarCellEmitTypes = typeof calendarCellEmitTypes;
