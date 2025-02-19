<template>
  <div
    v-if="isOpen && hasBackdrop"
    class="spr-w-screen spr-h-screen spr-bg-mushroom-700/60 spr-fixed spr-top-0 spr-left-0 spr-z-[30]"
    @click="handleBackdropClick"
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
      :class="[
        sidepanelSizesClasses,
        'spr-h-[calc(100vh-32px)] spr-bg-white-50 spr-pr-rounded-border-radius-xl spr-fixed spr-right-4 spr-z-[30] spr-min-h-[200px] spr-flex spr-flex-col spr-top-1/2 spr-translate-y-[-50%] spr-drop-shadow',
      ]"
      :style="{ height: typeof height === 'number' ? `${height}px` : height }"
    >
      <template v-if="!hideHeader">
        <div
          v-if="!$slots.header"
          class="spr-tw-min-h-12 spr-subheading-xs spr-text-color-strong spr-flex spr-justify-between spr-border-0 spr-border-b spr-border-solid spr-border-mushroom-200 spr-p-4"
        >
          {{ headerTitle }}
          <Icon class="spr-cursor-pointer" icon="ph:x" @click="handleClose" />
        </div>
        <div v-else>
          <slot name="header"></slot>
        </div>
      </template>
      <div :class="['spr-overflow-y-auto spr-p-4', { 'spr-mb-[52px]': $slots.footer }]">
        <slot> Sidepanel Content </slot>
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
  handleBackdropClick,
} = useSidepanel(props, emit);
</script>
