<template>
  <caption :class="classes">
    <slot />
  </caption>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { CaptionProps } from './caption.types'
import { getCaptionClasses } from './caption.styles'

const props = withDefaults(defineProps<CaptionProps>(), {
  position: 'bottom',
})

defineSlots<{ default(props: {}): any }>()

const classes = computed(() => getCaptionClasses(props.position!))
</script>
