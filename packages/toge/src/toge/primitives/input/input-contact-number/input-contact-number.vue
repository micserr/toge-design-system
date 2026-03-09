<template>
  <TogeInput v-bind="$attrs" type="tel" v-model="model">
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
    <template #icon>
      <Icon icon="ph:phone" />
    </template>
  </TogeInput>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import TogeInput from '../input.vue'
import type { InputContactNumberProps } from './input-contact-number.types'

defineProps<InputContactNumberProps>()

defineSlots<{
  prefix(props: {}): any
  trailing(props: {}): any
  helperMessage(props: {}): any
}>()

const model = defineModel<string | number>({ default: '' })
</script>
