<template>
  <transition name="backdrop-transition">
    <div v-if="props.modelValue" :class="modalClasses.backdropClasses" @click="handleBackdropClick"></div>
  </transition>

  <transition name="modal-transition">
    <div v-if="props.modelValue" id="modal" :class="modalClasses.baseClasses">
      <header v-if="$slots.header || title" :class="modalClasses.headerClasses">
        <span v-if="!$slots.header && title">{{ title }}</span>

        <slot name="header"></slot>

        <span v-if="props.closeButtonX" :class="modalClasses.headerCloseButtonXClasses" @click="handleCloseModal">
          <Icon class="spr-h-[20px] spr-w-[20px]" icon="ph:x" />
        </span>
      </header>

      <div :class="modalClasses.contentClasses">
        <slot />
      </div>

      <footer v-if="$slots.footer" :class="modalClasses.footerClasses">
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

const { modalClasses, handleCloseModal, handleBackdropClick } = useModal(props, emit);
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
  transition:
    opacity 150ms ease-in-out,
    transform 150ms ease-in-out;
}

.modal-transition-enter-from,
.modal-transition-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-50%) scale(0.9);
}

.modal-transition-enter-to,
.modal-transition-leave-from {
  opacity: 1;
  transform: translateX(-50%) translateY(-50%) scale(1);
}

.bounce-animation {
  animation: bounce 0.5s ease;
}

@keyframes bounce {
  0% {
    transform: translateX(-50%) translateY(-50%) scale(1);
  }
  30% {
    transform: translateX(-50%) translateY(-50%) scale(1.02);
  }
  50% {
    transform: translateX(-50%) translateY(-50%) scale(0.98);
  }
  70% {
    transform: translateX(-50%) translateY(-50%) scale(1.02);
  }
  100% {
    transform: translateX(-50%) translateY(-50%) scale(1);
  }
}
</style>
