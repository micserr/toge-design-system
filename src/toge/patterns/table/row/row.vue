<template>
  <tr :class="classes" @click="emit('click', $event)">
    <slot />
  </tr>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { RowProps, RowEmits } from './row.types'
import { getRowClasses } from './row.styles'

const props = withDefaults(defineProps<RowProps>(), {
  hoverable: false,
  selected: false,
  striped: false,
})

const emit = defineEmits<RowEmits>()

defineSlots<{ default(props: {}): any }>()

const classes = computed(() =>
  getRowClasses({
    hoverable: props.hoverable,
    selected: props.selected,
    striped: props.striped,
    index: props.index,
  }),
)
</script>
