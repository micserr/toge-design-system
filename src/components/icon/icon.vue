<template>
  <div :class="iconClasses">
    <Icon v-bind="$attrs" :id="props.id" :icon="props.icon" />
  </div>
</template>
<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { iconPropTypes } from './icon';
import { useIcon } from './use-icon';
const props = defineProps(iconPropTypes);
const { iconClasses } = useIcon(props);
</script>
