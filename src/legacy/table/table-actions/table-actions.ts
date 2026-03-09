import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;


export const tableActionPropTypes = {
  /**
   * @description Toggle Search field,
   */
  toggleSearch: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * @description Toggle Option button
   */
  toggleOption: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * @description Toggle Filter Button
   */
  toggleFilter: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * @description Search variable
   */
  searchModel: {
    type: String as PropType<string>,
    default: '',
  },
};

export const tableActionEmitTypes = {
  'update:searchModel': (value: string): value is string => typeof value === 'string',
};

export type TableActionEmitTypes = { 'update:searchModel': typeof tableActionEmitTypes };
export type TableActionPropTypes = ExtractPropTypes<typeof tableActionPropTypes>;
