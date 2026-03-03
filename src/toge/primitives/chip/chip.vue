<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { ChipProps, ChipEmits, ChipSlots } from './chip.types'
import { getChipClasses, getChipIcon } from './chip.styles'

const props = withDefaults(defineProps<ChipProps>(), {
  size: 'md',
  tone: 'default',
  variant: 'tag',
  disabled: false,
  active: false,
  closable: false,
})
const emit = defineEmits<ChipEmits>()
defineSlots<ChipSlots>()

const classes = computed(() => getChipClasses(props))
const resolvedIcon = computed(() => getChipIcon(props.icon ?? '', props.iconWeight ?? 'regular'))
</script>

<template>
  <span
    :class="classes.wrapper"
    :role="closable ? 'button' : undefined"
    :tabindex="disabled ? -1 : 0"
    @click="!disabled && emit('click', $event)"
  >
    <span
      v-if="props.icon"
      class="spr-inline-flex spr-items-center spr-leading-[0]"
    >
      <Icon :icon="resolvedIcon" class="spr-font-size-300" />
    </span>
    <slot>{{ props.label }}</slot>
    <button
      v-if="props.closable"
      :class="classes.close"
      type="button"
      aria-label="Remove"
      @click.stop="emit('close')"
    >
      <Icon icon="ph:x" />
    </button>
  </span>
</template>
