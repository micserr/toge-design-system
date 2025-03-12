import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const CALENDAR_STATE_STATES = ['success', 'information', 'pending', 'caution', 'danger'] as const;

export const calendarCellPropTypes = {
  type: {
    type: String,
    required: true,
    default: 'standard',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
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
};

export type CalendarCellPropTypes = ExtractPropTypes<typeof calendarCellPropTypes>;
export const calendarCellEmitTypes = {
  onClick: (evt: MouseEvent): evt is MouseEvent => evt instanceof MouseEvent,
};

export type CalendarCellEmitTypes = typeof calendarCellEmitTypes;
