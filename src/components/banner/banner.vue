<template>
  <transition name="fade-in-out">
    <div v-if="showModel" :class="[bannerClasses.base]" v-bind="$attrs">
      <div class="spr-flex spr-items-start spr-gap-size-spacing-3xs">
        <slot>
          <div :class="[bannerClasses.icon]">
            <icon :icon="bannerIcon" width="16px" height="16px" />
          </div>
          <span :class="[bannerClasses.message]">{{ props.message }}</span>
        </slot>
      </div>

      <div v-if="props.showCloseButton" class="spr-flex spr-h-full spr-items-start">
        <icon icon="ph:x-bold" width="16px" height="16px" :class="[bannerClasses.close]" @click="closeBanner" />
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { bannerProps } from './banner';
import { useBanner } from './use-banner';

import { Icon } from '@iconify/vue';

const props = defineProps(bannerProps);
const showModel = defineModel('show', { type: Boolean, default: true, required: true });

const { bannerClasses, closeBanner, bannerIcon } = useBanner(props, showModel);
</script>

<style scoped>
.fade-in-out-enter-active,
.fade-in-out-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.fade-in-out-enter-from,
.fade-in-out-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.fade-in-out-enter-to,
.fade-in-out-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
