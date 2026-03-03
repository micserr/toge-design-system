<template>
  <TogeChip
    v-if="props.visible"
    :size="props.size"
    :tone="props.tone"
    :variant="props.variant"
    :disabled="props.disabled"
    :active="props.active"
    :closable="props.closable"
    :aria-label="props.ariaLabel || undefined"
    :aria-pressed="props.active"
    @click="handleClick"
    @close="handleClose"
  >
    <template v-if="$slots.default">
      <slot />
    </template>
    <template v-else-if="props.variant === 'tag'">
      <span v-if="hasIcon" class="chips-icon spr-inline-flex spr-items-center spr-leading-[0]">
        <slot name="icon">
          <Icon :icon="resolvedIcon" class="spr-font-size-300" />
        </slot>
      </span>
      <span v-if="hasAvatar" class="spr-flex spr-items-center spr-justify-center">
        <TogeAvatar
          size="2xs"
          :src="props.avatarUrl"
          :variant="props.avatarVariant || 'initial'"
          :initial="props.avatarInitials"
        />
      </span>
      <span class="spr-chips-label">
        {{ props.label }}
      </span>
      <span v-if="props.badge" class="chips-badge">
        <TogeBadge :text="props.badgeText" :variant="props.badgeVariant" size="small" position="default" />
      </span>
    </template>
    <template v-else>
      {{ props.day?.charAt(0) }}
    </template>
  </TogeChip>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { Icon } from '@iconify/vue'
import type { ChipsProps, ChipsEmits } from './chips.types'
import { getChipsIcon } from './chips.styles'
import TogeBadge from '../../primitives/badge/badge.vue'
import TogeAvatar from '../../primitives/avatar/avatar.vue'
import TogeChip from '../../primitives/chip/chip.vue'

const props = withDefaults(defineProps<ChipsProps>(), {
  label: '',
  size: 'md',
  disabled: false,
  active: false,
  closable: false,
  avatarUrl: '',
  avatarVariant: '',
  avatarInitials: '',
  icon: '',
  iconWeight: 'regular',
  closeIconSize: 16,
  badge: false,
  badgeText: '0',
  badgeVariant: 'brand',
  removable: false,
  visible: true,
  variant: 'tag',
  day: 'Sunday',
  tone: 'default',
})

const emit = defineEmits<ChipsEmits>()

defineSlots<{
  default(props: {}): any
  icon(props: {}): any
  'close-icon'(props: {}): any
}>()

const slots = useSlots()

const resolvedIcon = computed(() => getChipsIcon(props.icon, props.iconWeight))

const hasAvatar = computed(() => props.avatarUrl || props.avatarVariant || props.avatarInitials)
const hasIcon = computed(() => props.icon || slots.icon)

const handleClick = () => {
  if (!props.disabled) {
    emit('update', !props.active)
  }
}

const handleClose = (event?: MouseEvent | KeyboardEvent) => {
  if (!props.disabled) {
    emit('close', (event || new MouseEvent('click')) as MouseEvent | KeyboardEvent)
  }
}
</script>
