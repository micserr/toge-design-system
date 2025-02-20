<template>
  <dialog
    ref="dialog"
    :class="[
      'spr-modal spr-border-color-weak spr-background-color spr-rounded-border-radius-xl spr-border spr-p-0 spr-drop-shadow-[0_2px_8px_-2px_rgba(38,43,43,0.20)]',
      modalSizesClasses,
    ]"
  >
    <header
      v-if="hasHeader"
      :class="[
        'spr-border-color-weak spr-background-color spr-flex spr-items-center spr-justify-between spr-gap-size-spacing-3xs spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid spr-px-size-spacing-xs spr-py-size-spacing-2xs',
        'spr-text-color-strong spr-subheading-xs',
      ]"
    >
      <slot name="header" />

      <div v-if="!$slots.header">{{ title }}</div>

      <span v-if="hasClose" class="spr-text-color-weak spr-subheading-xs" @click="closeModal">
        <Icon icon="ph:x" />
      </span>
    </header>

    <div class="spr-body-sm-regular">
      <slot />
    </div>

    <footer
      v-if="hasFooter"
      :class="[
        'spr-border-color-weak spr-background-color spr-flex spr-w-full spr-items-center spr-border-x-0 spr-border-b-0 spr-border-t spr-border-solid spr-px-size-spacing-xs spr-py-size-spacing-2xs',
        'spr-text-color-strong spr-subheading-xs',
      ]"
    >
      <slot name="footer" />
    </footer>
  </dialog>
</template>

<script setup>
import { Icon } from '@iconify/vue';

import { modalPropTypes, modalEmitTypes } from './modal';
import { useModal } from './use-modal';

const props = defineProps(modalPropTypes);
const emit = defineEmits(modalEmitTypes);

const { dialog, closeModal, modalSizesClasses } = useModal(props, emit);
</script>

<style scoped>
/* Tailwind CSS does not directly support the ::backdrop pseudo-element, need to add this */
.spr-modal::backdrop {
  @apply spr-bg-overlay;
}
</style>
