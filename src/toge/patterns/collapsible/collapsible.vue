<template>
  <div :class="classes.container">
    <div :class="classes.trigger">
      <slot name="trigger" :is-open="isOpen" :toggle="toggle" />
    </div>
    <PrimitiveCollapsible v-model="isOpen">
      <div :class="classes.content">
        <slot />
      </div>
    </PrimitiveCollapsible>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import PrimitiveCollapsible from '../../primitives/collapsible/collapsible.vue'
import type { CollapsibleProps, CollapsibleEmits, CollapsibleSlots } from './collapsible.types'
import { getCollapsibleClasses } from './collapsible.styles'

const props = withDefaults(defineProps<CollapsibleProps>(), {
  defaultOpen: false,
})

const emit = defineEmits<CollapsibleEmits>()
defineSlots<CollapsibleSlots>()

const isOpen = ref(props.defaultOpen)

function toggle() {
  isOpen.value = !isOpen.value
  emit('change', isOpen.value)
}

const classes = computed(() => getCollapsibleClasses())
</script>
