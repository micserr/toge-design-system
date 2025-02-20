<template>
  <div class="spr-flex spr-gap-2">
    <slot />
    <div :class="[badgeElementWrapper]">
      <section :class="[badgePositionClasses]">
        <div :class="[badgeClasses, 'spr-flex spr-items-center spr-justify-center']">
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
