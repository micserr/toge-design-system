<template>
  <div
    class="spr-flex spr-w-full spr-flex-col spr-gap-size-spacing-5xs"
    :aria-valuemin="0"
    :aria-valuemax="props.max || 100"
    :aria-valuenow="props.value"
    role="progressbar"
  >
    <div :class="[handleProgressBarSize, 'spr-overflow-hidden spr-rounded-lg spr-bg-white-100']">
      <div
        :class="[`spr-background-color-${validColor}-base`, 'spr-transition-all spr-duration-300']"
        :style="handleProgressBarStyle"
      ></div>
    </div>
    <span
      v-if="props.label"
      class="spr-text-color-base spr-font-weight-regular spr-font-size-100 spr-line-height-100 spr-font-main"
      >{{ percentage }}%</span
    >
  </div>
</template>

<script lang="ts" setup>
import { progressBarPropTypes } from './progress-bar';
import { useProgressBar } from './use-progress-bar';

const props = defineProps(progressBarPropTypes);

const { handleProgressBarSize, validColor, percentage, handleProgressBarStyle } = useProgressBar(props);
</script>
