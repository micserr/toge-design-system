<template>
  <div id="empty-state" :class="emptyStateWrapperClasses">
    <slot :class="imageSizeClasses" />

    <div v-if="!$slots.default" :class="imageSizeClasses">
      <img :src="getImageUrl" alt="empty-image" class="spr-h-full spr-w-full spr-object-cover" />
    </div>

    <section class="spr-flex spr-flex-col spr-items-center spr-justify-center spr-gap-size-spacing-md">
      <div class="spr-text-color-strong spr-body-md spr-body-md-regular-medium spr-flex spr-flex-col">
        <span>{{ description }}</span>
        <div class="spr-text-color-base spr-body-sm-regular">
          {{ subDescription }}
        </div>
      </div>

      <slot name="button" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { emptyStatePropTypes } from './empty-state';
import { useEmptyState } from './use-empty-state';

defineEmits(['onClick']);

const props = defineProps(emptyStatePropTypes);

const { emptyStateWrapperClasses, imageSizeClasses, getImageUrl } = useEmptyState(props);
</script>
