<template>
  <div v-for="loader in count" :key="loader" class="spr-m-auto spr-flex">
    <div class="spr-skeletal-loader spr-h-[24px] spr-w-[24px] spr-rounded" />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  count: {
    type: Number,
    default: 2,
  },
});
</script>
