<template>
  <div
    v-if="showModel"
    id="spr-banner" 
    :class="[bannerClasses.base]"
  >
    <div :class="[bannerClasses.content]">
    <slot>
      <div class="spr-flex spr-items-top spr-gap-size-spacing-3xs">
        <span :class="[bannerClasses.icon]"><icon :icon="bannerIcon" width="16px" height="16px" /></span>
        <span :class="[bannerClasses.message]">{{ props.message }}</span>
      </div>
    </slot>
    </div>
    <icon v-if="props.showCloseButton" icon="ph:x-bold" width="16px" height="16px" :class="[bannerClasses.close]" @click="closeBanner"/>
  </div>
</template>

<script setup lang="ts">
import { bannerProps } from './banner';
import { Icon } from '@iconify/vue';
import { useBanner } from './use-banner';

const props = defineProps(bannerProps);
const showModel = defineModel('show', {type: Boolean, default: true, required: true});

const { bannerClasses, closeBanner, bannerIcon } = useBanner(props, showModel);
</script>
