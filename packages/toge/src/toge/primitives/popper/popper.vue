<template>
  <Menu
    v-bind="$attrs"
    id="popper-wrapper"
    distance="4"
    :container="`#${props.id}`"
    :style="{ width: '100%' }"
  >
    <div :id="props.id">
      <slot />
    </div>

    <template #popper>
      <slot name="content" />
    </template>
  </Menu>
</template>

<script lang="ts" setup>
import { Menu } from 'floating-vue'
import 'floating-vue/dist/style.css'
import type { PopperProps } from './popper.types'

const props = defineProps<PopperProps>()

defineSlots<{
  default(props: {}): any
  content(props: {}): any
}>()
</script>
