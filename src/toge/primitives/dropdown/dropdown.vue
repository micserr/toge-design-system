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
import type { DropdownProps, DropdownEmits, DropdownSlots } from './dropdown.types'
import { getDropdownClasses } from './dropdown.styles'

const props = withDefaults(defineProps<DropdownProps>(), {
  placement: 'bottom',
  distance: 6,
  triggers: () => ['click'],
  popperTriggers: () => [],
  popperStrategy: 'absolute',
  autoHide: true,
  disabled: false,
})

const emit = defineEmits<DropdownEmits>()

defineSlots<DropdownSlots>()

const classes = computed(() =>
  getDropdownClasses({
    width: props.width,
    popperInnerWidth: props.popperInnerWidth,
  }),
)
</script>
