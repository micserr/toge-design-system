<template>
  <div :class="['spr-lozenge__wrapper', wrapperClasses]">
    <div v-if="props.visible && !props.loading" :class="['spr-lozenge__base', baseClasses]">
      <div
        :class="['spr-lozenge__tone', toneClasses]"
        :tabindex="props.interactive || props.dropdown ? 0 : -1"
        :style="{ maxWidth: props.maxWidth }"
        :aria-label="props.ariaLabel || undefined"
        :role="props.interactive ? 'button' : undefined"
        @keyup.enter="props.interactive ? emit('click', $event) : undefined"
        @keydown.space.prevent="props.interactive ? emit('click', $event) : undefined"
      >
        <div
          v-if="$slots.icon || props.icon"
          class="spr-lozenge__prefix-icon spr-flex spr-h-3 spr-w-3 spr-items-center spr-overflow-hidden"
        >
          <slot name="icon">
            <Icon :icon="props.icon!" />
          </slot>
        </div>

        <div v-if="$slots.avatar || props.url" class="spr-lozenge__avatar">
          <slot name="avatar">
            <div v-if="props.url" class="spr-h-4 spr-w-4 spr-overflow-hidden">
              <img class="spr-h-full spr-w-full spr-rounded-full spr-object-cover" :src="props.url" alt="avatar" />
            </div>
          </slot>
        </div>

        <span :class="labelClasses">{{ props.label }}</span>

        <div
          v-if="$slots.postfixIcon || props.postfixIcon || props.dropdown"
          class="spr-lozenge__prefix-icon spr-flex spr-h-3 spr-w-3 spr-items-center spr-overflow-hidden"
        >
          <slot name="postfixIcon">
            <Icon v-if="props.postfixIcon" :icon="props.postfixIcon" />
            <Icon v-else icon="ph:caret-down-fill" />
          </slot>
        </div>
      </div>
    </div>
    <div v-if="props.visible && props.loading" :class="['spr-lozenge__loading', baseClasses]" />
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { Icon } from '@iconify/vue'
import type { LozengeProps, LozengeEmits } from './lozenge.types'
import {
  getLozengeWrapperClasses,
  getLozengeBaseClasses,
  getLozengeToneClasses,
  getLozengeLabelClasses,
} from './lozenge.styles'

const emit = defineEmits<LozengeEmits>()

const props = withDefaults(defineProps<LozengeProps>(), {
  label: '',
  tone: 'plain',
  fill: false,
  removable: false,
  url: '',
  visible: true,
  loading: false,
  icon: '',
  postfixIcon: '',
  interactive: false,
  dropdown: false,
  maxWidth: 'none',
})

defineSlots<{
  icon(props: {}): any
  avatar(props: {}): any
  postfixIcon(props: {}): any
}>()

const slots = useSlots()

const isInteractive = computed(() => props.interactive || props.dropdown)
const hasAvatarSlot = computed(() => !!slots.avatar)

const wrapperClasses = computed(() => getLozengeWrapperClasses(props.loading))
const baseClasses = computed(() => getLozengeBaseClasses(props.fill, props.loading))
const toneClasses = computed(() =>
  getLozengeToneClasses(props.tone, props.fill, isInteractive.value, !!props.url, hasAvatarSlot.value),
)
const labelClasses = computed(() => getLozengeLabelClasses())
</script>
