<template>
  <div v-for="loader in count" :key="loader" class="spr-flex [@media(min-width:1024px)]:spr-m-auto">
    <div
      class="spr-skeletal-loader spr-h-[40px] spr-w-full spr-rounded-lg [@media(min-width:1024px)]:spr-h-[24px] [@media(min-width:1024px)]:spr-w-[24px]"
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
