<template>
  <div
    :class="[
      'tw-background-color-base tw-w-[80px] tw-overflow-y-hidden tw-py-[14px] tw-duration-300 tw-ease-in-out',
      'hover:tw-overflow-y-auto',
    ]"
  >
    <div class="tw-m-[10px] tw-bg-tomato-300" v-for="i in 100" :key="i">
      {{ i }}
    </div>
  </div>
</template>
