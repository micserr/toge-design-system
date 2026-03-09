<template>
  <Icon :icon="statusIcon"  :class="[statusClass, statusSize]" :aria-label="statusDescription" />
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { statusPropTypes } from './status';
import { useStatus } from './use-status';

const props = defineProps(statusPropTypes);

const { statusIcon, statusClass, statusDescription, statusSize} = useStatus(props);
</script>
