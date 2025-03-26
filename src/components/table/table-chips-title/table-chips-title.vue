<template>
  <spr-chips
    :label="props.cell?.title"
    :icon="computeIcon"
    :icon-weight="computeIconWeight"
    :badge="computeBadge"
    :badge-text="computeBadgeText"
    :badge-variant="computeBadgeVariant"
    :avatar-url="computeAvatarUrl"
    :avatar-variant="computeAvatarVariant"
  />
</template>


<script lang="ts" setup>
import SprChips from '@/components/chips/chips.vue';

import { tableChipsTitlePropTypes } from '@/components/table/table-chips-title/table-chips-title';
import { useTableChipsTitle } from './use-table-chips-title';

const props = defineProps(tableChipsTitlePropTypes);

const { 
  computeIcon, 
  computeIconWeight, 
  computeBadge, 
  computeBadgeText, 
  computeBadgeVariant, 
  computeAvatarUrl, 
  computeAvatarVariant 
} = useTableChipsTitle(props);
</script>
