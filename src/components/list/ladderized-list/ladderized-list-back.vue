<template>
  <div
    class="
    spr-py-size-spacing-2xs spr-px-size-spacing-xs 
    spr-body-xs-regular 
    spr-flex spr-items-center spr-gap-size-spacing-5xs
    spr-border-solid spr-border-0 spr-border-b spr-border-color-weak 
    spr-cursor-pointer
    "
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
    default: "Back"
  },
});

const emit = defineEmits({
  back: () => true
});

const handleBackClick = () => {
  emit("back");
};
</script>
