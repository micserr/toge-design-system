<template>
  <div :class="classes.wrapper">
    <div
      class="spr:flex spr:w-full spr:items-center spr:gap-size-spacing-3xs"
      :class="{ 'spr:flex-row': props.labelPlacement === 'left', 'spr:flex-row-reverse': props.labelPlacement === 'right' }"
    >
      <div
        :class="classes.track"
        role="progressbar"
        :aria-valuenow="props.value"
        :aria-valuemin="0"
        :aria-valuemax="props.max"
      >
        <div :class="classes.fill" :style="{ width: `${percentage}%` }" />
      </div>
      <span
        v-if="props.label && (props.labelPlacement === 'left' || props.labelPlacement === 'right')"
        :class="classes.label"
      >
        {{ percentage }}%
      </span>
    </div>

    <div
      v-if="props.label && !['left', 'right'].includes(props.labelPlacement!)"
      class="spr:flex spr:w-full spr:items-center spr:justify-between"
    >
      <span :class="classes.label">{{ percentage }}%</span>
      <span v-if="props.supportingLabel" :class="classes.label">{{ props.supportingLabel }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ProgressBarProps } from './progress-bar.types'
import { getProgressBarClasses } from './progress-bar.styles'

const props = withDefaults(defineProps<ProgressBarProps>(), {
  size: 'lg',
  value: 0,
  max: 100,
  color: 'success',
  label: true,
  labelPlacement: 'bottom',
  supportingLabel: '',
})

const percentage = computed(() => Math.min(100, Math.round(((props.value ?? 0) / (props.max ?? 100)) * 100)))

const classes = computed(() =>
  getProgressBarClasses({
    size: props.size!,
    color: props.color!,
    labelPlacement: props.labelPlacement!,
  }),
)
</script>
