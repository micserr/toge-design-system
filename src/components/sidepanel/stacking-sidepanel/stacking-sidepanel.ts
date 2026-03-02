import type { ExtractPropTypes, PropType } from "vue";

export const stackingSidePanelProps = {
  stack: {
    type: Array as PropType<string[]>,
    default: [],
    required: true,
  }
};

export const stackingSidePanelEmits = {
  'update:stack': (value: string[]) => value,
};

export type StackingSidePanelPropTypes = ExtractPropTypes<typeof stackingSidePanelProps>;
export type StackingSidePanelEmitTypes = typeof stackingSidePanelEmits;
