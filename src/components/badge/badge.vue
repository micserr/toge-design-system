<template>
  <div class="tw-flex tw-gap-2">
    <slot />
    <div :class="[badgeElementWrapper]">
      <section :class="[badgePositionClasses]">
        <div :class="[badgeClasses, 'tw-flex tw-items-center tw-justify-center']">
          {{ props.size === 'tiny' ? '' : text }}
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { badgePropTypes } from './badge';
import { useBadge } from './use-badge';

const props = defineProps(badgePropTypes);
const { badgeClasses, badgePositionClasses, badgeElementWrapper } = useBadge(props);
</script>
