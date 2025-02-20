<template>
  <Tooltip
    class="spr-w-fit"
    :aria-id="props.hasMaxWidth ? 'tooltip-full-width-wrapper' : 'tooltip-wrapper'"
    :placement="placement"
  >
    <template #popper>
      <p v-if="text">{{ text }}</p>

      <slot name="popper-content" />
    </template>

    <slot />
  </Tooltip>
</template>

<script lang="ts" setup>
import { Tooltip } from 'floating-vue';
import 'floating-vue/dist/style.css';

import { tooltipPropTypes } from './tooltip';
import { useTooltip } from './use-tooltip';

const props = defineProps(tooltipPropTypes);

const { placement } = useTooltip(props);
</script>
