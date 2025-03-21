<template>
  <div
    v-if="isOpen && hasBackdrop"
    class="spr-w-screen spr-h-screen spr-bg-mushroom-700/60 spr-fixed spr-top-0 spr-left-0 spr-z-[4000]"
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
        'spr-h-[calc(100vh-32px)] spr-bg-white-50 spr-rounded-border-radius-xl spr-fixed spr-right-4 spr-z-[4000] spr-min-h-[200px] spr-flex spr-flex-col spr-top-1/2 spr-translate-y-[-50%] spr-drop-shadow',
      ]"
      :style="{ height: typeof height === 'number' ? `${height}px` : height }"
    >
      <template v-if="!hideHeader">
        <div 
          v-if="!$slots.header" 
          class="spr-flex spr-justify-between spr-tw-min-h-12 spr-p-4 spr-border-0 spr-border-b spr-border-solid spr-border-mushroom-200 spr-text-color-strong"
        >
          <div 
            id="sidepanel-title" 
            class="spr-subheading-xs"
          >
            {{ headerTitle }}
          </div>
          <Icon 
            class="spr-cursor-pointer spr-w-5 spr-h-5 spr-text-color-weak"
            icon="ph:x"
            @click="handleClose"
          />
        </div>
        <div v-else>
          <slot name="header"></slot>
        </div>
      </template>
      <div 
        id="sidepanel-content" 
        :class="['spr-overflow-y-auto spr-h-full', {'spr-mb-[52px]': $slots.footer}]"
      >
        <slot />
      </div>
      <div
        v-if="$slots.footer"
        class="spr-absolute spr-bottom-0 spr-left-0 spr-w-full spr-rounded-b-border-radius-xl spr-border-0 spr-border-t spr-border-solid spr-border-mushroom-200 spr-bg-white-50 spr-py-3"
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

const {
  sidepanelRef,
  sidepanelSizesClasses,
  sidepanelMidState,
  sidepanelStartEndState,
  handleClose,
} = useSidepanel(props, emit);
</script>
