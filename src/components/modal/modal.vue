<template>
  <dialog
    ref="dialog"
    :class="[
      'modal-dialog border-color-weak background-color bg-over rounded-border-radius-xl border p-0 drop-shadow-[0_2px_8px_-2px_rgba(38,43,43,0.20)]',
      modalSizesClasses,
    ]"
  >
    <header
      v-if="hasHeader"
      :class="[
        'border-color-weak background-color flex items-center justify-between gap-size-spacing-3xs border-x-0 border-b border-t-0 border-solid px-size-spacing-xs py-size-spacing-2xs',
        'text-color-strong subheading-xs',
      ]"
    >
      <slot name="header" />

      <div v-if="!$slots.header">{{ title }}</div>

      <span v-if="hasClose" class="text-color-weak subheading-xs" @click="closeModal"><IconClose /></span>
    </header>

    <div class="body-sm-regular">
      <slot />
    </div>

    <footer
      v-if="hasFooter"
      :class="[
        'border-color-weak background-color flex w-full items-center border-x-0 border-b-0 border-t border-solid px-size-spacing-xs py-size-spacing-2xs',
        'text-color-strong subheading-xs',
      ]"
    >
      <slot name="footer" />
    </footer>
  </dialog>
</template>

<script setup>
import IconClose from '~icons/ph/x';

import { modalPropTypes, modalEmitTypes } from './modal';
import { useModal } from './use-modal';

const props = defineProps(modalPropTypes);
const emit = defineEmits(modalEmitTypes);

const { dialog, closeModal, modalSizesClasses } = useModal(props, emit);
</script>

<style scoped>
/* Tailwind CSS does not directly support the ::backdrop pseudo-element, need to add this */
.modal-dialog::backdrop {
  @apply bg-overlay;
}
</style>
