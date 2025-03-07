<template>
  <transition name="backdrop-transition" appear>
    <div
      v-if="props.modelValue"
      class="spr-absolute spr-bottom-0 spr-left-0 spr-right-0 spr-top-0 spr-z-[9999999] spr-h-full spr-w-full spr-bg-[#4C5857] spr-opacity-60"
      @click="handleCloseModal"
    ></div>
  </transition>

  <transition name="modal-transition" appear>
    <div v-if="props.modelValue" :class="modalClasses.baseClasses">
      <header
        v-if="$slots.header || title"
        :class="[
          'spr-flex spr-items-center spr-justify-between spr-gap-2 spr-px-4 spr-py-3',
          'spr-text-color-strong spr-subheading-xs',
          'spr-border-color-weak spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid',
          'spr-rounded-tl-xl spr-rounded-tr-xl',
          'sm:spr-p-2',
        ]"
      >
        <span v-if="!$slots.header && title">{{ title }}</span>

        <slot name="header"></slot>

        <span
          v-if="props.closeButtonX"
          :class="[
            'spr-text-color-weak spr-subheading-xs spr-cursor-pointer',
            'spr-transition spr-duration-150 spr-ease-in-out',
            'hover:spr-text-color-base',
            'active:spr-text-color-strong active:spr-scale-75',
          ]"
          @click="handleCloseModal"
        >
          <Icon icon="ph:x" />
        </span>
      </header>

      <div
        :class="[
          'spr-body-sm-regular spr-max-h-[calc(100vh-100px)] spr-overflow-y-auto spr-overflow-x-hidden',
          {
            'spr-p-4 sm:spr-p-2': props.contentPadding,
          },
        ]"
      >
        <slot />
      </div>

      <footer
        v-if="$slots.footer"
        :class="[
          'spr-border-color-weak spr-border-x-0 spr-border-b-0 spr-border-t spr-border-solid',
          'spr-flex spr-w-full spr-items-center spr-px-size-spacing-xs spr-py-size-spacing-2xs',
          'spr-text-color-strong spr-subheading-xs',
        ]"
      >
        <slot name="footer" />
      </footer>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

import { modalPropTypes, modalEmitTypes } from './modal';
import { useModal } from './use-modal';

const props = defineProps(modalPropTypes);
const emit = defineEmits(modalEmitTypes);

const { modalClasses, handleCloseModal } = useModal(props, emit);
</script>

<style scoped>
.backdrop-transition-enter-active,
.backdrop-transition-leave-active {
  transition: opacity 150ms ease-in-out;
}

.backdrop-transition-enter-from,
.backdrop-transition-leave-to {
  opacity: 0;
}

.modal-transition-enter-active,
.modal-transition-leave-active {
  transition: opacity 300ms ease-in-out;
}

.modal-transition-enter-from,
.modal-transition-leave-to {
  opacity: 0;
}
</style>
