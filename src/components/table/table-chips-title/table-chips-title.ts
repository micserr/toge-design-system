import type { PropType, ExtractPropTypes } from 'vue';
import type { AVATAR_VARIANT } from '@/components/avatar/avatar';
import type { ICON_WEIGHTS } from '@/components/chips/chips';
export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

export interface ChipTitle {
  title: string;
  icon: string;
  iconWeight: (typeof ICON_WEIGHTS)[number];
  badge: boolean;
  badgeText: string;
  badgeVariant: string;
  avatarUrl: string;
  avatarVariant: (typeof AVATAR_VARIANT)[number];
}

export const tableChipsTitlePropTypes = {
  /**
   * @description Cell Content,
   */
  cell: {
    type: definePropType<ChipTitle>(Object),
    required: true,
  },
};

export type TableChipsTitlePropTypes = ExtractPropTypes<typeof tableChipsTitlePropTypes>;
