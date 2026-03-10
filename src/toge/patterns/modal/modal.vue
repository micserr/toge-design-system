<template>
  <Teleport to="body">
    <Transition name="spr:backdrop">
      <div v-if="model" :class="classes.backdrop" @click="handleBackdropClick" />
    </Transition>
    <Transition name="spr:modal">
      <div
        v-if="model"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="title ? 'modal-title' : undefined"
        :class="classes.base"
        @keydown.escape="closeModal"
      >
        <header v-if="$slots.header || title" :class="classes.header">
          <span v-if="!$slots.header && title" id="modal-title">{{ title }}</span>
          <slot name="header" />
          <span
            v-if="props.closeButtonX"
            :class="classes.closeBtn"
            aria-label="Close modal"
            @click="closeModal"
          >
            <Icon class="spr:h-5 spr:w-5" icon="ph:x" />
          </span>
        </header>
        <div :class="classes.content">
          <slot />
        </div>
        <footer v-if="$slots.footer" :class="classes.footer">
          <slot name="footer" />
        </footer>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { computed, watch } from 'vue'
import { Icon } from '@iconify/vue'
import type { ModalProps, ModalEmits, ModalSlots } from './modal.types'
import { getModalClasses } from './modal.styles'
import { useModalState } from './modal.state'

const props = withDefaults(defineProps<ModalProps>(), {
  title: undefined,
  closeButtonX: true,
  contentPadding: true,
  hasFooter: true,
  size: 'md',
  staticBackdrop: false,
})

const emit = defineEmits<ModalEmits>()
defineSlots<ModalSlots>()

const model = defineModel<boolean>({ default: false })

function closeModal() {
  model.value = false
  emit('close')
}

const { staticBackdropClicked, handleBackdropClick } = useModalState(
  () => props.staticBackdrop,
  closeModal,
)

// Lock body scroll when modal is open
watch(model, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

const classes = computed(() =>
  getModalClasses({
    size: props.size!,
    contentPadding: props.contentPadding!,
    staticBackdropClicked: staticBackdropClicked.value,
  }),
)
</script>

<style scoped>
.spr:backdrop-enter-active,
.spr:backdrop-leave-active { transition: opacity 150ms ease-in-out; }
.spr:backdrop-enter-from,
.spr:backdrop-leave-to { opacity: 0; }

.spr:modal-enter-active,
.spr:modal-leave-active { transition: opacity 150ms ease-in-out, transform 150ms ease-in-out; }
.spr:modal-enter-from,
.spr:modal-leave-to { opacity: 0; transform: translateX(-50%) translateY(-50%) scale(0.9); }
.spr:modal-enter-to,
.spr:modal-leave-from { opacity: 1; transform: translateX(-50%) translateY(-50%) scale(1); }

.bounce-animation { animation: bounce 0.5s ease; }
@keyframes bounce {
  0% { transform: translateX(-50%) translateY(-50%) scale(1); }
  30% { transform: translateX(-50%) translateY(-50%) scale(1.02); }
  50% { transform: translateX(-50%) translateY(-50%) scale(0.98); }
  70% { transform: translateX(-50%) translateY(-50%) scale(1.02); }
  100% { transform: translateX(-50%) translateY(-50%) scale(1); }
}
</style>
