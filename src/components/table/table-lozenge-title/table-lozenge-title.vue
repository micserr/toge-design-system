<template>
  <spr-lozenge
    :label="props.cell?.title"
    :tone="computeTone"
    :url="props.cell?.avatarUrl"
    :fill="computeFill"
  >
    <template v-if="props.cell?.icon" #icon>
      <Icon :icon="props.cell?.icon" />
    </template>
  </spr-lozenge>
</template>


<script lang="ts" setup>
import SprLozenge from '@/components/lozenge/lozenge.vue';
import { Icon } from '@iconify/vue';


import { tableLozengesTitlePropTypes } from '@/components/table/table-lozenge-title/table-lozenge-title';
import { useTableLozengeTitle } from './use-table-lozenge-title';

const props = defineProps(tableLozengesTitlePropTypes);

const { computeTone, computeFill} = useTableLozengeTitle(props);
</script>
