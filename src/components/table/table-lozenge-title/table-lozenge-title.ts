import type { PropType, ExtractPropTypes } from 'vue';
import type { LOZENGE_TONE } from '@/components/lozenge/lozenge';
export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

export interface LozengeTitle {
  title: string;
  fill?: boolean;
  avatarUrl?: string;
  tone?: (typeof LOZENGE_TONE)[number];
  icon?: string;
}

export const tableLozengesTitlePropTypes = {
  /**
   * @description Cell Content,
   */
  cell: {
    type: definePropType<LozengeTitle>(Object),
    required: true,
  },
};

export type TableLozengeTitlePropTypes = ExtractPropTypes<typeof tableLozengesTitlePropTypes>;
