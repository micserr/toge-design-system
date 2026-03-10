<template>
  <td
    :class="cellClasses"
    :colspan="props.colspan"
    :style="props.sticky && props.stickyPosition ? { left: props.stickyPosition } : {}"
  >
    <div :class="innerClasses">
      <slot>
        <TogeChips
          v-if="props.cell?.type === 'chip'"
          :label="props.cell.label"
          :icon="props.cell.icon"
          :icon-weight="props.cell.iconWeight"
        />
        <TogeLozenge
          v-else-if="props.cell?.type === 'lozenge'"
          :label="props.cell.label"
          :tone="props.cell.tone"
          :fill="props.cell.fill"
          :icon="props.cell.icon"
          :url="props.cell.url"
        />
        <TogeBadge
          v-else-if="props.cell?.type === 'badge'"
          :text="props.cell.text"
          :variant="props.cell.variant"
          :size="props.cell.size"
          :position="props.cell.position"
        />
        <span v-else-if="props.cell?.type === 'text'">{{ props.cell.value }}</span>
      </slot>
    </div>
  </td>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { CellProps, CellSlots } from './cell.types'
import { getCellClasses, getCellInnerClasses } from './cell.styles'
import TogeChips from '../../../molecules/chips/chips.vue'
import TogeLozenge from '../../../primitives/lozenge/lozenge.vue'
import TogeBadge from '../../../primitives/badge/badge.vue'

const props = withDefaults(defineProps<CellProps>(), {
  align: 'left',
  sticky: false,
})

defineSlots<CellSlots>()

const cellClasses = computed(() => getCellClasses({ align: props.align, sticky: props.sticky }))
const innerClasses = computed(() => getCellInnerClasses(props.align))
</script>
