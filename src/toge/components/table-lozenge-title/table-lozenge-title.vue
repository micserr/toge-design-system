<template>
  <div :class="classes.wrapperClasses">
    <TogeLozenge
      :label="props.cell.title"
      :fill="props.cell.fill || false"
      :url="props.cell.avatarUrl || ''"
      :tone="(props.cell.tone as LozengeTone) || 'plain'"
      :icon="props.cell.icon || ''"
    />
  </div>
</template>

<script lang="ts" setup>
import type { TableLozengeTitleProps, TableLozengeTitleSlots } from './table-lozenge-title.types'
import type { LozengeTone } from '../../primitives/lozenge/lozenge.types'
import { getTableLozengeTitleClasses } from './table-lozenge-title.styles'
import TogeLozenge from '../../primitives/lozenge/lozenge.vue'

const props = defineProps<TableLozengeTitleProps>()

defineSlots<TableLozengeTitleSlots>()

const classes = getTableLozengeTitleClasses()
</script>
