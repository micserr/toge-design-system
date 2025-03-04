<template>
  <div class="spr-flex spr-gap-2">
    <slot />

    <div :class="badgeClasses.baseClasses">
      <section :class="badgeClasses.positionClasses">
        <div
          :class="[
            'spr-flex spr-items-center spr-justify-center',
            badgeClasses.variantClasses,
            badgeClasses.sizeClasses,
          ]"
        >
          {{ props.size === 'tiny' ? '' : text }}
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { badgePropTypes } from './badge';
import { useBadge } from './use-badge';

const props = defineProps(badgePropTypes);

const { badgeClasses } = useBadge(props);
</script>
