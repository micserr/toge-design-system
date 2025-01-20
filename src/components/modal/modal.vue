<template>
  <dialog
    ref="dialog"
    :class="[
      'modal-dialog tw-border-color-weak tw-background-color tw-bg-over tw-rounded-border-radius-xl tw-p-0 tw-drop-shadow-[0_2px_8px_-2px_rgba(38,43,43,0.20)]',
      modalSizesClasses,
    ]"
  >
    <header
      v-if="hasHeader"
      :class="[
        'tw-border-color-weak tw-background-color tw-flex tw-items-center tw-justify-between tw-gap-size-spacing-3xs tw-border-x-0 tw-border-b tw-border-t-0 tw-border-solid tw-px-size-spacing-xs tw-py-size-spacing-2xs',
        'tw-text-color-strong tw-subheading-xs',
      ]"
    >
      <slot name="header" />

      <div v-if="!$slots.header">{{ title }}</div>

      <span v-if="hasClose" class="tw-text-color-weak tw-subheading-xs" @click="closeModal"><IconClose /></span>
    </header>

    <div class="tw-body-sm-regular">
      <slot />
    </div>

    <footer
      v-if="hasFooter"
      :class="[
        'tw-border-color-weak tw-background-color tw-flex tw-w-full tw-items-center tw-border-x-0 tw-border-b-0 tw-border-t tw-border-solid tw-px-size-spacing-xs tw-py-size-spacing-2xs',
        'tw-text-color-strong tw-subheading-xs',
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
  @apply tw-bg-overlay;
}
</style>
