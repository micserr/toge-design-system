import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const MODAL_SIZE = ['sm', 'md', 'lg', 'xl', 'xxl'] as const;

export const modalPropTypes = {
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  closeButtonX: {
    type: Boolean,
    default: true,
  },
  contentPadding: {
    type: Boolean,
    default: true,
  },
  hasFooter: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String as PropType<(typeof MODAL_SIZE)[number]>,
    validator: (value: (typeof MODAL_SIZE)[number]) => MODAL_SIZE.includes(value),
    default: 'md',
  },
  staticBackdrop: {
    type: Boolean,
    default: false,
  },
};

export type ModalPropTypes = ExtractPropTypes<typeof modalPropTypes>;

export const modalEmitTypes = {
  'update:modelValue': (value: boolean) => value,
};

export type ModalEmitTypes = typeof modalEmitTypes;
