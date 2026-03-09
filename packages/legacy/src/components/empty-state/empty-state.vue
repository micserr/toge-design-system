<template>
  <div id="empty-state" :class="containerClasses">
    <slot :class="emptyStateClasses.imageSizeClasses" />

    <div v-if="!$slots.default" :class="emptyStateClasses.imageSizeClasses">
      <img :src="getImageUrl" alt="empty" class="spr-h-full spr-w-full spr-object-cover" />
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

<script lang="ts" setup>
import { emptyStatePropTypes } from './empty-state';
import { useEmptyState } from './use-empty-state';

defineEmits(['onClick']);

const props = defineProps(emptyStatePropTypes);

const { emptyStateClasses, getImageUrl, containerClasses } = useEmptyState(props);
</script>
