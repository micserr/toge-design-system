<template>
  <div v-if="$slots.default" ref="componentRef" class="tw-relative tw-h-min tw-w-min tw-whitespace-nowrap">
    <slot />
    <div
      :class="[
        tooltipClasses,
        'tw-background-color-inverted tw-absolute tw-z-50 tw-w-max tw-min-w-10 tw-max-w-72 tw-text-wrap tw-rounded-md tw-px-size-spacing-4xs tw-py-size-spacing-3xs',
      ]"
    >
      <div class="tw-text-color-inverted-strong tw-body-xs-regular">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { tooltipPropTypes } from './tooltip';
import { useTooltip } from './use-tooltip';

const props = defineProps(tooltipPropTypes);
const { componentRef, tooltipClasses, text } = useTooltip(props);
</script>
