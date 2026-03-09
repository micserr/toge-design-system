<template>
  <TogeInput
    v-bind="$attrs"
    v-model="model"
    :class="{ 'spr-cursor-pointer': props.readonly }"
  >
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>

    <template #icon>
      <Icon icon="ph:caret-down" />
    </template>
  </TogeInput>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import TogeInput from '../input.vue'
import type { InputDropdownProps } from './input-dropdown.types'

const props = defineProps<InputDropdownProps>()

defineSlots<{
  prefix(props: {}): any
  trailing(props: {}): any
  helperMessage(props: {}): any
}>()

const model = defineModel<string | number>({ default: '' })
</script>
