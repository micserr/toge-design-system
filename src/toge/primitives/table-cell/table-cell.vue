<script lang="ts" setup>
import type { TableCellProps } from './table-cell.types'
import TogeChips from '../../components/chips/chips.vue'
import TogeLozenge from '../lozenge/lozenge.vue'
import TogeBadge from '../badge/badge.vue'

const props = defineProps<TableCellProps>()
</script>

<template>
  <div class="spr-flex spr-items-center">
    <TogeChips
      v-if="props.cell.type === 'chip'"
      :label="props.cell.title"
      :icon="props.cell.icon"
      :icon-weight="props.cell.iconWeight"
      :badge="props.cell.badge"
      :badge-text="props.cell.badgeText"
      :badge-variant="props.cell.badgeVariant"
      :avatar-url="props.cell.avatarUrl"
      :avatar-variant="props.cell.avatarVariant"
    />
    <TogeLozenge
      v-else-if="props.cell.type === 'lozenge'"
      :label="props.cell.title"
      :fill="props.cell.fill"
      :url="props.cell.avatarUrl"
      :tone="props.cell.tone"
      :icon="props.cell.icon"
    />
    <TogeBadge
      v-else-if="props.cell.type === 'badge'"
      :text="props.cell.text"
      :variant="props.cell.variant"
      :size="props.cell.size"
      :position="props.cell.position"
    />
    <span v-else>{{ props.cell.value }}</span>
  </div>
</template>
