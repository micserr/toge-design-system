<template>
  <spr-input v-bind="$attrs" :type="evaluatePasswordInputType">
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>

    <template #icon>
      <Icon
        :icon="evaluateEyeIcon"
        :class="['spr-cursor-pointer spr-transition spr-duration-150 spr-ease-in-out', 'hover:spr-text-color-base']"
        @click="showPassword = !showPassword"
      />
    </template>
  </spr-input>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

import SprInput from '@/components/input/input.vue';

import { useInputPassword } from './use-input-password';

const { showPassword, evaluateEyeIcon, evaluatePasswordInputType } = useInputPassword();
</script>
