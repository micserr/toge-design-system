<template>
  <TogeInput v-bind="{ ...props, ...$attrs }" type="text" v-model="model">
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
    <template #icon>
      <Icon icon="ph:at" />
    </template>
  </TogeInput>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import TogeInput from '../input.vue'
import type { InputUsernameProps } from './input-username.types'

const props = defineProps<InputUsernameProps>()

defineSlots<{
  prefix(props: {}): any
  trailing(props: {}): any
  helperMessage(props: {}): any
}>()

const model = defineModel<string | number>({ default: '' })
</script>
