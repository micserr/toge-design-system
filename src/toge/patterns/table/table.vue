<template>
  <div class="spr:w-full spr:overflow-x-auto spr:rounded-border-radius-md">
    <table
      :id="props.id"
      :class="classes"
      cellspacing="0"
      cellpadding="0"
    >
      <slot />
    </table>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { TableRootProps } from './table.types'
import { getTableRootClasses } from './table.styles'

const props = withDefaults(defineProps<TableRootProps>(), {
  bordered: false,
})

defineSlots<{ default(props: {}): any }>()

const classes = computed(() => getTableRootClasses({ bordered: props.bordered }))
</script>
