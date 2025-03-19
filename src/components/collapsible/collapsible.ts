import type { PropType, ExtractPropTypes } from "vue";

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

export const collapsiblePropTypes = {
  modelValue: {
    type: Boolean,
    required: true,
  },
  transitionDuration: {
    type: Number,
    default: 150, // Default transition duration in milliseconds
  },
};

export const collapsibleEmitTypes = {
  'update:modelValue': (value: boolean) => typeof value === 'boolean',
};

export type CollapsibleEmitTypes = typeof collapsibleEmitTypes
export type CollapsibleProps = ExtractPropTypes<typeof collapsiblePropTypes>;
