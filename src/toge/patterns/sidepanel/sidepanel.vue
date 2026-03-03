<template>
  <div v-if="model && hasBackdrop" :class="classes.backdrop" />

  <Transition
    :enter-active-class="classes.transitionActive"
    :leave-active-class="classes.transitionActive"
    :enter-from-class="classes.transitionHidden"
    :enter-to-class="classes.transitionVisible"
    :leave-from-class="classes.transitionVisible"
    :leave-to-class="classes.transitionHidden"
    appear
  >
    <div
      v-if="model"
      ref="sidepanelRef"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sidepanel-title"
      aria-describedby="sidepanel-content"
      :class="classes.base"
      :style="{ height: typeof props.height === 'number' ? `${props.height}px` : props.height }"
      data-testid="sidepanel-dialog"
    >
      <template v-if="!props.hideHeader">
        <div v-if="!$slots.header" :class="classes.header">
          <div v-if="!props.isLoading" id="headers">
            <div id="sidepanel-title" :class="classes.headerTitle">
              {{ props.headerTitle }}
            </div>
            <div id="sidepanel-subtitle" :class="classes.headerSubtitle">
              <slot name="subtitle">
                <span class="spr-text-color-base">{{ props.headerSubtitle }}</span>
              </slot>
            </div>
          </div>
          <div v-else id="header-loaders" class="spr-w-full spr-flex spr-flex-col spr-gap-size-spacing-4xs">
            <div class="spr-skeletal-loader spr-h-4 spr-w-[90%] spr-rounded-md"></div>
            <div
              v-if="props.headerSubtitle || $slots.subtitle"
              class="spr-skeletal-loader spr-h-8 spr-w-[95%] spr-rounded-md"
            ></div>
          </div>

          <div class="spr-flex spr-items-center spr-gap-size-spacing-3xs">
            <Icon
              v-if="props.isExpandable"
              :class="classes.headerIcons"
              :icon="props.isExpanded ? 'ph:arrows-in-simple' : 'ph:arrows-out-simple'"
              data-testid="expand-icon"
              @click="handlePanelExpansion(props.isExpanded!, () => emit('expand'), () => emit('shrink'))"
            />
            <Icon
              :class="classes.headerIcons"
              icon="ph:x"
              data-testid="x-icon"
              @click="handleClose"
            />
          </div>
        </div>
        <div v-else>
          <slot name="header" />
        </div>
      </template>

      <div id="sidepanel-content" :class="classes.content">
        <slot />
      </div>

      <div v-if="$slots.footer" :class="classes.footer">
        <slot name="footer" />
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { computed, watch } from 'vue'
import { Icon } from '@iconify/vue'
import type { SidepanelProps, SidepanelEmits, SidepanelSlots } from './sidepanel.types'
import { getSidepanelClasses } from './sidepanel.styles'
import { useSidepanelState } from './sidepanel.state'

const props = withDefaults(defineProps<SidepanelProps>(), {
  headerTitle: 'Sidepanel Header',
  headerSubtitle: undefined,
  size: 'sm',
  height: 'calc(100vh - 32px)',
  hideHeader: false,
  position: 'right',
  hasBackdrop: true,
  closeOutside: true,
  escapeClose: true,
  footerNoPadding: false,
  isExpandable: false,
  isExpanded: false,
  footerNoTopBorder: false,
  isLoading: false,
})

const emit = defineEmits<SidepanelEmits>()
defineSlots<SidepanelSlots>()

const model = defineModel<boolean>('open', { default: false })

const { sidepanelRef, handleClose, handlePanelExpansion, onOpenChanged } = useSidepanelState(
  () => model.value,
  () => props.closeOutside!,
  () => props.escapeClose!,
  () => {
    model.value = false
    emit('close')
  },
)

watch(model, onOpenChanged)

const classes = computed(() =>
  getSidepanelClasses({
    size: props.size!,
    position: props.position!,
    isExpanded: props.isExpanded!,
    footerNoPadding: props.footerNoPadding!,
    footerNoTopBorder: props.footerNoTopBorder!,
  }),
)
</script>
