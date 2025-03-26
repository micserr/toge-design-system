import { computed } from 'vue';
import type { TableChipsTitlePropTypes } from '@/components/table/table-chips-title/table-chips-title';

export const useTableChipsTitle = (props: TableChipsTitlePropTypes) => {
  const computeIcon = computed(() => props.cell?.icon || '');
  const computeIconWeight = computed(() => props.cell?.iconWeight || 'regular');
  const computeBadge = computed(() => props.cell?.badge || false);
  const computeBadgeText = computed(() => props.cell?.badgeText || '');
  const computeBadgeVariant = computed(() => props.cell?.badgeVariant || 'primary');
  const computeAvatarUrl = computed(() => props.cell?.avatarUrl);
  const computeAvatarVariant = computed(() => props.cell?.avatarVariant || 'image');

  return {
    computeIcon,
    computeIconWeight,
    computeBadge,
    computeBadgeText,
    computeBadgeVariant,
    computeAvatarUrl,
    computeAvatarVariant,
  };
};
