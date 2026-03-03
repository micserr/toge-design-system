<template>
  <div :class="classes.wrapperClasses">
    <TogeChips
      :label="props.cell.title"
      :icon="props.cell.icon || ''"
      :icon-weight="(props.cell.iconWeight as ChipsIconWeight) || 'regular'"
      :badge="props.cell.badge || false"
      :badge-text="props.cell.badgeText || '0'"
      :badge-variant="props.cell.badgeVariant || 'brand'"
      :avatar-url="props.cell.avatarUrl || ''"
      :avatar-variant="props.cell.avatarVariant || ''"
    />
  </div>
</template>

<script lang="ts" setup>
import type { TableChipsTitleProps, TableChipsTitleSlots } from './table-chips-title.types'
import type { ChipsIconWeight } from '../chips/chips.types'
import { getTableChipsTitleClasses } from './table-chips-title.styles'
import TogeChips from '../chips/chips.vue'

const props = defineProps<TableChipsTitleProps>()

defineSlots<TableChipsTitleSlots>()

const classes = getTableChipsTitleClasses()
</script>
