import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

export const datePickerPropTypes = {};

export const datePickerEmitTypes = {};

export type DatePickerPropTypes = ExtractPropTypes<typeof datePickerPropTypes>;
export type DatePickerEmitTypes = typeof datePickerEmitTypes;
