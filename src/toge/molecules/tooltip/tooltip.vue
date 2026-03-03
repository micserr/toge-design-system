<template>
  <template v-if="props.text || slots['popper-content']">
    <Tooltip
      :class="wrapperClasses"
      :aria-id="props.hasMaxWidth ? 'tooltip-full-width-wrapper' : 'tooltip-wrapper'"
      :placement="props.placement"
      :show-triggers="normalizedShowTriggers"
      :hide-triggers="normalizedHideTriggers"
      :distance="props.distance"
      handle-resize
      :auto-hide="props.autoHide"
    >
      <template #popper>
        <span v-if="props.text">{{ props.text }}</span>
        <slot name="popper-content" />
      </template>

      <slot />
    </Tooltip>
  </template>
  <template v-else>
    <slot />
  </template>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { Tooltip, type TriggerEvent } from 'floating-vue'
import 'floating-vue/dist/style.css'
import type { TooltipProps } from './tooltip.types'
import { getTooltipWrapperClasses } from './tooltip.styles'

const props = withDefaults(defineProps<TooltipProps>(), {
  text: '',
  placement: 'top',
  distance: 6,
  hasMaxWidth: true,
  fitContent: true,
  showTriggers: 'hover',
  hideTriggers: 'hover',
  autoHide: false,
})

const slots = useSlots()

defineSlots<{
  'popper-content'(props: {}): any
  default(props: {}): any
}>()

const wrapperClasses = computed(() => getTooltipWrapperClasses(props.fitContent))

const normalizedShowTriggers = computed(() =>
  Array.isArray(props.showTriggers)
    ? props.showTriggers.flat().map((t) => t as TriggerEvent)
    : [props.showTriggers as TriggerEvent],
)

const normalizedHideTriggers = computed(() =>
  Array.isArray(props.hideTriggers)
    ? props.hideTriggers.flat().map((t) => t as TriggerEvent)
    : [props.hideTriggers as TriggerEvent],
)
</script>
