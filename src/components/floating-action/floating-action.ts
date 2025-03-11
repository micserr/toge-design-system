import { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

export const floatingActionPropTypes = {
  show: {
    type: Boolean,
    default: false,
  },
};

export type FloatingActionProps = ExtractPropTypes<typeof floatingActionPropTypes>;
