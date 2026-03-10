<template>
  <span
    :class="classes"
    :tabindex="props.disabled ? -1 : 0"
    :aria-label="props.ariaLabel || props.day"
    :aria-pressed="props.active"
    @click="handleClick"
  >
    {{ props.day.charAt(0) }}
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ChipDayProps, ChipDayEmits } from './chip-day.types'
import { getChipDayClasses } from './chip-day.styles'

const props = withDefaults(defineProps<ChipDayProps>(), {
  active: false,
  disabled: false,
  ariaLabel: undefined,
})

const emit = defineEmits<ChipDayEmits>()

const classes = computed(() => getChipDayClasses(props.active, props.disabled))

function handleClick() {
  if (!props.disabled) {
    emit('update', !props.active)
  }
}
</script>
