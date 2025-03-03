<template>
  <spr-input v-bind="$attrs" :type="evaluatePasswordInputType()">
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
    
    <template #icon>
      <Icon :icon="evaluateEyeIcon()" :class="iconClasses" @click="toggleShowPassword()" />
    </template>
  </spr-input>
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
