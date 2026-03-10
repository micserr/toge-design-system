<template>
  <TogeInput v-bind="{ ...props, ...$attrs }" :type="inputType" v-model="model">
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
    <template #icon>
      <Icon
        :icon="showPassword ? 'ph:eye-slash' : 'ph:eye'"
        class="spr:cursor-pointer"
        @click="togglePassword"
      />
    </template>
  </TogeInput>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import TogeInput from '../input.vue'
import type { InputPasswordProps } from './input-password.types'
import { useInputPasswordState } from './input-password.state'

const props = defineProps<InputPasswordProps>()

defineSlots<{
  prefix(props: {}): any
  trailing(props: {}): any
  helperMessage(props: {}): any
}>()

const model = defineModel<string | number>({ default: '' })
const { showPassword, togglePassword } = useInputPasswordState()
const inputType = computed(() => showPassword.value ? 'text' : 'password')
</script>
