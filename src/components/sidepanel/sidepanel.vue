<template>
  <div
    v-if="isOpen && hasBackdrop"
    class="spr-fixed spr-left-0 spr-top-0 spr-z-[4000] spr-h-screen spr-w-screen spr-bg-mushroom-700/60"
  ></div>
  <Transition
    name="sidepanel"
    enter-active-class="spr-transition-transform spr-duration-[150ms] spr-ease-[ease-in-out]"
    leave-active-class="spr-transition-transform spr-duration-[150ms] spr-ease-[ease-in-out]"
    :enter-from-class="sidepanelStartEndState"
    :leave-to-class="sidepanelStartEndState"
    :enter-to-class="sidepanelMidState"
    :leave-from-class="sidepanelMidState"
    appear
  >
    <div
      v-if="isOpen"
      ref="sidepanelRef"
      role="dialog"
      aria-labelledby="sidepanel-title"
      aria-describedby="sidepanel-content"
      :class="[
        sidepanelSizesClasses,
        'spr-fixed spr-right-4 spr-top-1/2 spr-z-[4000] spr-flex spr-h-full spr-min-h-[200px] spr-translate-y-[-50%] spr-flex-col spr-rounded-border-radius-xl spr-bg-white-50 spr-drop-shadow',
      ]"
      :style="{ height: typeof height === 'number' ? `${height}px` : height }"
    >
      <template v-if="!hideHeader">
        <div
          v-if="!$slots.header"
          class="spr-tw-min-h-12 spr-text-color-strong spr-flex spr-justify-between spr-border-0 spr-border-b spr-border-solid spr-border-mushroom-200 spr-p-4"
        >
          <div id="sidepanel-title" class="spr-subheading-xs">
            {{ headerTitle }}
          </div>
          <Icon class="spr-text-color-weak spr-h-5 spr-w-5 spr-cursor-pointer" icon="ph:x" @click="handleClose" />
        </div>
        <div v-else>
          <slot name="header"></slot>
        </div>
      </template>
      <div id="sidepanel-content" :class="['spr-h-full spr-overflow-y-auto']">
        <slot />
      </div>
      <div
        v-if="$slots.footer"
        class="spr-bottom-0 spr-left-0 spr-w-full spr-rounded-b-border-radius-xl spr-border-0 spr-border-t spr-border-solid spr-border-mushroom-200 spr-bg-white-50 spr-py-3"
      >
        <slot name="footer"></slot>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

import { useSidepanel } from './use-sidepanel';
import { sidepanelPropTypes, sidepanelEmitTypes } from './sidepanel';

const props = defineProps(sidepanelPropTypes);
const emit = defineEmits(sidepanelEmitTypes);

const { sidepanelRef, sidepanelSizesClasses, sidepanelMidState, sidepanelStartEndState, handleClose } = useSidepanel(
  props,
  emit,
);
</script>
