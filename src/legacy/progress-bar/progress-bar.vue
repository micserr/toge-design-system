<template>
  <div
    :class="containerClasses"
    :aria-valuemin="0"
    :aria-valuemax="props.max || 100"
    :aria-valuenow="props.value"
    role="progressbar"
  >
    <div
      :class="[
        handleProgressBarSize,
        'spr-overflow-hidden spr-rounded-lg spr-bg-white-100',
        {
          'spr-w-full': [
            'top',
            'top-start',
            'top-center',
            'top-end',
            'bottom',
            'bottom-start',
            'bottom-center',
            'bottom-end',
          ].includes(props.labelPlacement),
          'spr-flex-1': ['left', 'right'].includes(props.labelPlacement),
        },
      ]"
    >
      <div
        :class="[`spr-background-color-${validColor}-base`, 'spr-transition-all spr-duration-300']"
        :style="handleProgressBarStyle"
      ></div>
    </div>
    <div v-if="props.label || props.supportingLabel" class="spr-flex spr-gap-1.5">
      <span v-if="props.label" class="spr-text-color-strong spr-subheading-sm">{{ percentage }}%</span>
      <span v-if="props.supportingLabel" class="spr-body-md-regular">{{ props.supportingLabel }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { progressBarPropTypes } from './progress-bar';
import { useProgressBar } from './use-progress-bar';

const props = defineProps(progressBarPropTypes);

const { handleProgressBarSize, validColor, percentage, handleProgressBarStyle, containerClasses } =
  useProgressBar(props);
</script>
