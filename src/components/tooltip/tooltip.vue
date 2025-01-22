<template>
  <div v-if="$slots.default" ref="componentRef" class="relative h-min w-min whitespace-nowrap">
    <slot />
    <div
      :class="[
        tooltipClasses,
        'background-color-inverted absolute z-50 w-max min-w-10 max-w-72 text-wrap rounded-md px-size-spacing-4xs py-size-spacing-3xs',
      ]"
    >
      <div class="text-color-inverted-strong body-xs-regular">
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
