<template>
  <SprInput v-bind="$attrs" :type="evaluatePasswordInputType()">
    <template #icon>
      <Icon :icon="evaluateEyeIcon()" @click="toggleShowPassword()" class="spr-cursor-pointer"/>
    </template>
  </SprInput>
</template>

<script setup lang="ts">
import SprInput from '@/components/input/input.vue';
import { useInputPassword } from './use-input-password';
import { Icon } from "@iconify/vue";
const {

  evaluateEyeIcon, 
  toggleShowPassword,
  evaluatePasswordInputType,
 } = 
  useInputPassword();
</script>
