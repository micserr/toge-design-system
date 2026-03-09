import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

export const LOZENGE_TONE = ['plain', 'pending', 'information', 'success', 'danger', 'neutral', 'caution'] as const;

export const lozengePropTypes = {
  label: {
    type: String,
    default: '',
  },
  tone: {
    type: String as PropType<(typeof LOZENGE_TONE)[number]>,
    validator: (value: (typeof LOZENGE_TONE)[number]) => LOZENGE_TONE.includes(value),
    default: 'plain',
  },
  fill: {
    type: Boolean,
    default: false,
  },
  removable: {
    type: Boolean,
    default: false,
  },
  url: {
    type: String,
    default: '',
  },
  visible: {
    type: Boolean,
    default: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
  postfixIcon: {
    type: String,
    default: '',
  },
  interactive: {
    type: Boolean,
    default: false,
  },
  dropdown: {
    type: Boolean,
    default: false,
  },
  maxWidth: {
    type: String,
    default: 'none',
  },
};

export type LozengePropTypes = ExtractPropTypes<typeof lozengePropTypes>;
export const removeEmitTypes = {
  onRemove: (evt: MouseEvent): evt is MouseEvent => evt instanceof MouseEvent,
};
export type RemoveEmitTypes = typeof removeEmitTypes;
