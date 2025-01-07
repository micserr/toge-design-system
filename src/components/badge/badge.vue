<template>
  <div class="tw-flex">
    <div class="tw-relative">
      <section class="tw-absolute tw-right-0 tw-top-0 tw--mr-1.5 tw--mt-1">
        <div :class="[badgeClasses, 'tw-flex tw-items-center tw-justify-center tw-font-medium']">
          {{ props.size === 'tiny' ? '' : text }}
        </div>
      </section>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { badgePropTypes } from './badge';
import { useBadge } from './use-badge';

const props = defineProps(badgePropTypes);
const { badgeClasses } = useBadge(props);
</script>
