<template>
  <TogeInput v-bind="{ ...props, ...$attrs }" v-model="model">
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>

    <template v-if="props.icon" #icon>
      <Icon :icon="props.icon" />
    </template>
  </TogeInput>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import TogeInput from '../input.vue'
import type { InputFlexibleProps } from './input-flexible.types'

const props = defineProps<InputFlexibleProps>()

defineSlots<{
  prefix(props: {}): any
  trailing(props: {}): any
  helperMessage(props: {}): any
}>()

const model = defineModel<string | number>({ default: '' })
</script>
