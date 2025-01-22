<template>
  <div id="empty-state" :class="emptyStateWrapperClasses">
    <slot :class="imageSizeClasses" />

    <div v-if="!$slots.default" :class="imageSizeClasses">
      <img :src="getImageUrl" alt="empty-image" class="tw-h-full tw-w-full tw-object-cover" />
    </div>

    <section class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-size-spacing-md">
      <div class="tw-text-color-strong tw-body-md tw-flex tw-flex-col">
        {{ description }}
        <div class="tw-text-color-base tw-body-sm-regular">
          {{ subDescription }}
        </div>
      </div>

      <spr-button tone="success" @click="$emit('onClick')">{{ buttonLabel }}</spr-button>
    </section>
  </div>
</template>
<script setup lang="ts">
import SprButton from '@/components/button/button.vue';
import { emptyStatePropTypes } from './emptyState';
import { useEmptyState } from './use-emptyState';
defineEmits(['onClick']);

const props = defineProps(emptyStatePropTypes);

const { emptyStateWrapperClasses, imageSizeClasses, getImageUrl } = useEmptyState(props);
</script>
