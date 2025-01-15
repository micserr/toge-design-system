import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const MODAL_SIZE = ['sm', 'md', 'lg', 'xl'] as const;

export const modalPropTypes = {
  open: {
    type: Boolean,
    default: false,
  },

  title: {
    type: String,
    default: '',
  },
  hasHeader: {
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
    default: 'sm',
  },
  hasClose: {
    type: Boolean,
    default: true,
  },
};

export type ModalPropTypes = ExtractPropTypes<typeof modalPropTypes>;
export const modalEmitTypes = {
  onClose: () => true,
};
export type ModalEmitTypes = typeof modalEmitTypes;
