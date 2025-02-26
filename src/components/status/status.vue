<template>
  <Icon :icon="statusIcon" :class="statusClass" :aria-label="statusDescription" />
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { statusPropTypes } from './status';
import { useStatus } from './use-status';

const props = defineProps(statusPropTypes);

const { statusIcon, statusClass, statusDescription } = useStatus(props);
</script>
