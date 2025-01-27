<template>
  <div id="empty-state" :class="emptyStateWrapperClasses">
    <slot :class="imageSizeClasses" />

    <div v-if="!$slots.default" :class="imageSizeClasses">
      <img :src="getImageUrl" alt="empty-image" class="h-full w-full object-cover" />
    </div>

    <section class="flex flex-col items-center justify-center gap-size-spacing-md">
      <div class="text-color-strong body-md flex flex-col body-md-regular-medium">
        {{ description }}
        <div class="text-color-base body-sm-regular">
          {{ subDescription }}
        </div>
      </div>

      <spr-button v-if="hasButton" tone="success" @click="$emit('onClick')">{{ buttonLabel }}</spr-button>
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
