<template>
  <div :class="iconClasses">
    <Icon
      v-bind="$attrs"
      :id="props.id"
      :icon="props.icon"
      :aria-hidden="props.ariaHidden ? 'true' : undefined"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { IconProps } from './icon.types'
import { getIconClasses } from './icon.styles'

const props = withDefaults(defineProps<IconProps>(), {
  id: 'icon',
  size: 'md',
  tone: undefined,
  variant: undefined,
  ariaHidden: true,
})

const iconClasses = computed(() =>
  getIconClasses(props.size, props.tone ?? '', props.variant ?? ''),
)
</script>
