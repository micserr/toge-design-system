<template>
  <div v-if="$slots.component" ref="componentRef" class="tw-relative tw-w-min tw-h-min tw-whitespace-nowrap">
    <slot name="component" />
    <div
      :class="[
        tooltipClasses,
        'tw-absolute tw-z-50 tw-background-color-inverted tw-min-w-10 tw-max-w-72 tw-w-max tw-py-size-spacing-3xs tw-px-size-spacing-4xs tw-rounded-md tw-text-wrap',
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

const props = defineProps(tooltipPropTypes)
const { componentRef, tooltipClasses, text } = useTooltip(props)
</script>
