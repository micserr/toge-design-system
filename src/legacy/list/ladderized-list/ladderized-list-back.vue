<template>
  <div
    :class="[
      'spr-sticky spr-top-0 spr-z-30',
      'spr-flex spr-cursor-pointer spr-items-center spr-gap-size-spacing-5xs spr-bg-white-50 spr-px-size-spacing-xs spr-py-size-spacing-2xs',
      'spr-body-xs-regular',
      'spr-border-color-weak spr-border-0 spr-border-b spr-border-solid',
    ]"
    @click="handleBackClick"
  >
    <Icon icon="ph:arrow-left" class="spr-size-4" />
    <span>{{ props.label }}</span>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

const props = defineProps({
  label: {
    type: String,
    default: 'Back',
  },
});

const emit = defineEmits({
  back: () => true,
});

const handleBackClick = () => {
  emit('back');
};
</script>
