<template>
  <div class="spr:flex spr:gap-2">
    <slot />

    <div :class="baseClasses">
      <section :class="positionClasses">
        <div
          :class="[
            'spr:flex spr:items-center spr:justify-center',
            variantClasses,
            sizeClasses,
          ]"
        >
          {{ props.size === 'tiny' ? '' : props.text }}
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { BadgeProps } from './badge.types'
import {
  getBadgeBaseClasses,
  getBadgeVariantClasses,
  getBadgeSizeClasses,
  getBadgePositionClasses,
} from './badge.styles'

const props = withDefaults(defineProps<BadgeProps>(), {
  text: '0',
  variant: 'brand',
  size: 'big',
  position: 'default',
})

defineSlots<{
  default(props: {}): any
}>()

const baseClasses = computed(() => getBadgeBaseClasses(props.position))
const variantClasses = computed(() => getBadgeVariantClasses(props.variant))
const sizeClasses = computed(() => getBadgeSizeClasses(props.size))
const positionClasses = computed(() => getBadgePositionClasses(props.position, props.size))
</script>
