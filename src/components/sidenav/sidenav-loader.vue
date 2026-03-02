<template>
  <div v-for="loader in count" :key="loader" class="spr-flex lg:spr-m-auto">
    <div
      class="spr-skeletal-loader spr-h-[40px] spr-w-full spr-rounded-lg lg:spr-h-[24px] lg:spr-w-[24px]"
    />
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
