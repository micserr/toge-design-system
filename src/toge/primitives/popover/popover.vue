<template>
  <Menu
    :placement="props.placement"
    :distance="props.distance"
    :triggers="props.triggers"
    :popper-triggers="props.popperTriggers"
    :strategy="props.popperStrategy"
    :container="props.popperContainer || undefined"
    :auto-hide="props.autoHide"
    :disabled="props.disabled"
    :style="props.width ? { width: props.width } : undefined"
    @apply-show="emit('popper-state', true)"
    @apply-hide="emit('popper-state', false)"
  >
    <template #default>
      <slot name="reference" />
    </template>

    <template #popper>
      <div
        :class="classes.menu"
        :style="{
          width: props.popperWidth || undefined,
          minWidth: props.popperInnerWidth || undefined,
        }"
      >
        <slot />
      </div>
    </template>
  </Menu>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Menu } from 'floating-vue'
import 'floating-vue/dist/style.css'
import type { PopoverProps, PopoverEmits, PopoverSlots } from './popover.types'
import { getPopoverClasses } from './popover.styles'

const props = withDefaults(defineProps<PopoverProps>(), {
  placement: 'bottom',
  distance: 6,
  triggers: () => ['click'],
  popperTriggers: () => [],
  popperStrategy: 'absolute',
  autoHide: true,
  disabled: false,
})

const emit = defineEmits<PopoverEmits>()

defineSlots<PopoverSlots>()

const classes = computed(() =>
  getPopoverClasses({
    width: props.width,
    popperInnerWidth: props.popperInnerWidth,
  }),
)
</script>
