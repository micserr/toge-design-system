import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

export const popperPropTypes = {
  id: {
    type: String,
    required: true,
  },
};

export type PopperPropTypes = ExtractPropTypes<typeof popperPropTypes>;
