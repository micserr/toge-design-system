<template>
  <SprInput v-bind="$attrs" :type="evaluatePasswordInputType()">
    <template #icon>
      <Icon :icon="evaluateEyeIcon()" :class="iconClasses" @click="toggleShowPassword()" />
    </template>
  </SprInput>
</template>

<script setup lang="ts">
import SprInput from '@/components/input/input.vue';
import { useInputPassword } from './use-input-password';
import { Icon } from "@iconify/vue";

const {
  iconClasses,
  evaluateEyeIcon, 
  toggleShowPassword,
  evaluatePasswordInputType,
 } = 
  useInputPassword();
</script>
