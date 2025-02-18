<template>
  <div 
    v-if="isOpen && hasBackdrop"
    class="w-screen h-screen bg-mushroom-700/60 fixed top-0 left-0 z-[30]" 
    @click="handleBackdropClick"
  ></div>
  <Transition 
    :name="`sidepanel`"
    enter-active-class="transition-transform duration-[0.3s] ease-[ease-out]"
    leave-active-class="transition-transform duration-[0.3s] ease-[ease-out]"
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
        'h-[calc(100vh_-_32px)] bg-white-50 rounded-border-radius-xl fixed right-4 z-[30] min-h-[200px] flex flex-col top-1/2 translate-y-[-50%] drop-shadow'
      ]"
      :style="{ height: typeof height === 'number' ? `${height}px` : height }"
    >
      <template v-if="!hideHeader">
        <div v-if="!$slots.header" class="flex justify-between tw-min-h-12 p-4 border-mushroom-200 border-b border-solid border-0 subheading-xs text-color-strong">
          {{ headerTitle }}
          <Icon 
            class="cursor-pointer"
            icon="ph:x"
            @click="handleClose"
          />
        </div>
        <div v-else>
          <slot name="header"></slot>
        </div>
      </template>
      <div :class="['overflow-y-auto p-4', {'mb-[52px]': $slots.footer}]">
        <slot>
          Sidepanel Content
        </slot>
      </div>
      <div v-if="$slots.footer" class="absolute bottom-0 left-0 w-full border-0 border-t border-mushroom-200 bg-white-50 border-solid py-3 rounded-b-border-radius-xl">
        <slot name="footer"></slot>
      </div>
    </div>
  </Transition>
  
</template>
<script lang="ts" setup>
import { useSidepanel } from './use-sidepanel';
import { sidepanelPropTypes, sidepanelEmitTypes } from './sidepanel';
import { Icon } from '@iconify/vue';

const props = defineProps(sidepanelPropTypes);
const emit = defineEmits(sidepanelEmitTypes);

const { sidepanelRef, sidepanelSizesClasses, sidepanelMidState, sidepanelStartEndState, handleClose, handleBackdropClick } = useSidepanel(props, emit);
</script>
