<template>
  <Teleport to="body">
    <Transition name="spr-backdrop">
      <div v-if="model && props.hasBackdrop" :class="classes.backdrop" @click="handleBackdropClick" />
    </Transition>
    <Transition :name="`spr-sidepanel-${props.position}`">
      <div v-if="model" :class="classes.container">
        <div
          role="dialog"
          aria-modal="true"
          :aria-labelledby="title ? 'sidepanel-title' : undefined"
          :class="classes.base"
        >
          <header v-if="$slots.header || title" :class="classes.header">
            <span v-if="!$slots.header && title" id="sidepanel-title">{{ title }}</span>
            <slot name="header" />
            <span
              v-if="props.closeButtonX"
              :class="classes.closeBtn"
              aria-label="Close sidepanel"
              @click="closePanel"
            >
              <Icon class="spr-h-5 spr-w-5" icon="ph:x" />
            </span>
          </header>
          <div :class="classes.content">
            <slot />
          </div>
          <footer v-if="$slots.footer" :class="classes.footer">
            <slot name="footer" />
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { computed, watch } from 'vue'
import { Icon } from '@iconify/vue'
import type { SidepanelProps, SidepanelEmits, SidepanelSlots } from './sidepanel.types'
import { getSidepanelClasses } from './sidepanel.styles'
import { useModalState } from '../modal/modal.state'

const props = withDefaults(defineProps<SidepanelProps>(), {
  title: undefined,
  closeButtonX: true,
  contentPadding: true,
  size: 'sm',
  position: 'right',
  hasBackdrop: true,
  staticBackdrop: false,
})

const emit = defineEmits<SidepanelEmits>()
defineSlots<SidepanelSlots>()

const model = defineModel<boolean>({ default: false })

function closePanel() {
  model.value = false
  emit('close')
}

const { staticBackdropClicked, handleBackdropClick } = useModalState(
  () => props.staticBackdrop!,
  closePanel,
)

watch(model, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

const classes = computed(() =>
  getSidepanelClasses({
    size: props.size!,
    position: props.position!,
    contentPadding: props.contentPadding!,
    staticBackdropClicked: staticBackdropClicked.value,
  }),
)
</script>

<style scoped>
.spr-backdrop-enter-active,
.spr-backdrop-leave-active { transition: opacity 150ms ease-in-out; }
.spr-backdrop-enter-from,
.spr-backdrop-leave-to { opacity: 0; }

.spr-sidepanel-right-enter-active,
.spr-sidepanel-right-leave-active { transition: transform 150ms ease-in-out, opacity 150ms ease-in-out; }
.spr-sidepanel-right-enter-from,
.spr-sidepanel-right-leave-to { transform: translateX(100%); opacity: 0; }

.spr-sidepanel-left-enter-active,
.spr-sidepanel-left-leave-active { transition: transform 150ms ease-in-out, opacity 150ms ease-in-out; }
.spr-sidepanel-left-enter-from,
.spr-sidepanel-left-leave-to { transform: translateX(-100%); opacity: 0; }
</style>
