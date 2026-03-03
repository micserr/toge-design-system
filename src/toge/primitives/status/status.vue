<template>
  <Icon
    :icon="statusIcon"
    :class="[statusColorClass, statusSizeClass]"
    :aria-label="statusDescription"
  />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { StatusProps } from './status.types'
import {
  getStatusSizeClass,
  getStatusColorClass,
  getStatusIcon,
  getStatusDescription,
} from './status.styles'

const props = withDefaults(defineProps<StatusProps>(), {
  state: 'success',
  size: 'base',
})

const statusSizeClass = computed(() => getStatusSizeClass(props.size))
const statusColorClass = computed(() => getStatusColorClass(props.state))
const statusIcon = computed(() => getStatusIcon(props.state))
const statusDescription = computed(() => getStatusDescription(props.state))
</script>
