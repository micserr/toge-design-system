<template>
  <button :type="props.btnType" class="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white">
    <slot />
  </button>
</template>
<script setup lang="ts">
const props = defineProps({
  btnType: {
    type: String as () => "submit" | "button",
    default: "button",
  },
});
</script>
