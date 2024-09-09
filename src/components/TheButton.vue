<template>
  <button :type="btnType" class="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white">
    <slot />
  </button>
</template>
<script setup lang="ts">
import type { PropType, ButtonHTMLAttributes } from "vue";
defineProps({
  btnType: {
    type: String as PropType<ButtonHTMLAttributes["type"]>,
    default: "button",
  },
});
</script>
