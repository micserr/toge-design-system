<template>
  <template v-if="props.text || slots['popper-content']">
    <Tooltip
      :class="[props.fitContent ? 'spr-w-fit' : 'spr-w-full']"
      :aria-id="props.hasMaxWidth ? 'tooltip-full-width-wrapper' : 'tooltip-wrapper'"
      :placement="placement"
      :show-triggers="
        Array.isArray(props.showTriggers)
          ? props.showTriggers.flat().map((trigger) => trigger as TriggerEvent)
          : [props.showTriggers as TriggerEvent]
      "
      :hide-triggers="
        Array.isArray(props.hideTriggers)
          ? props.hideTriggers.flat().map((trigger) => trigger as TriggerEvent)
          : [props.hideTriggers as TriggerEvent]
      "
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
import { useSlots } from 'vue';

import { Tooltip, type TriggerEvent } from 'floating-vue';

import 'floating-vue/dist/style.css';

import { tooltipPropTypes } from './tooltip';
import { useTooltip } from './use-tooltip';

const props = defineProps(tooltipPropTypes);
const slots = useSlots();

const { placement } = useTooltip(props);
</script>
