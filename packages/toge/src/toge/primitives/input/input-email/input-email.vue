<template>
  <TogeInput v-bind="$attrs" type="email" v-model="model">
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
    <template #icon>
      <Icon icon="ph:envelope" />
    </template>
  </TogeInput>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import TogeInput from '../input.vue'
import type { InputEmailProps } from './input-email.types'

defineProps<InputEmailProps>()

defineSlots<{
  prefix(props: {}): any
  trailing(props: {}): any
  helperMessage(props: {}): any
}>()

const model = defineModel<string | number>({ default: '' })
</script>
