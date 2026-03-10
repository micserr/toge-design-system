<template>
  <span
    v-if="props.visible"
    :class="classes"
    :role="props.closable ? 'button' : undefined"
    :tabindex="props.disabled ? -1 : 0"
    :aria-label="props.ariaLabel || undefined"
    :aria-pressed="activeModel"
    @click="handleClick"
  >
    <template v-if="$slots.default">
      <slot />
    </template>
    <template v-else>
      <span v-if="hasIcon" class="chips-icon spr:inline-flex spr:items-center spr:leading-[0]">
        <slot name="icon">
          <Icon :icon="resolvedIcon" class="spr-font-size-300" />
        </slot>
      </span>
      <span v-if="props.avatar" class="spr:flex spr:items-center spr:justify-center">
        <TogeAvatar
          :size="props.avatarSize"
          :src="props.avatarUrl"
          :variant="avatarVariant"
          :initial="props.avatarInitials"
        />
      </span>
      <span class="spr:chips-label">
        {{ props.label }}
      </span>
      <span v-if="props.badge" class="chips-badge">
        <TogeBadge :text="props.badgeText ?? '0'" size="big" position="default" />
      </span>
    </template>
    <button
      v-if="props.closable"
      class="chips-close"
      type="button"
      aria-label="Remove"
      @click.stop="handleClose"
    >
      <Icon icon="ph:x" />
    </button>
  </span>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { Icon } from '@iconify/vue'
import type { ChipsProps, ChipsEmits } from './chips.types'
import { getChipsClasses, getChipsIcon } from './chips.styles'
import TogeBadge from '../../primitives/badge/badge.vue'
import TogeAvatar from '../avatar/avatar.vue'

const props = withDefaults(defineProps<ChipsProps>(), {
  label: '',
  size: 'md',
  tone: 'default',
  disabled: false,
  closable: false,
  avatar: false,
  avatarSize: 'sm',
  avatarUrl: '',
  avatarInitials: '',
  icon: '',
  iconWeight: 'regular',
  badge: false,
  badgeText: '0',
  visible: true,
  ariaLabel: undefined,
})

const activeModel = defineModel<boolean>('active', { default: false })

const emit = defineEmits<ChipsEmits>()

defineSlots<{
  default(props: {}): any
  icon(props: {}): any
}>()

const slots = useSlots()

const classes = computed(() =>
  getChipsClasses(props.size, props.disabled, activeModel.value, props.tone),
)

const resolvedIcon = computed(() => getChipsIcon(props.icon, props.iconWeight))
const hasIcon = computed(() => !!(props.icon || slots.icon))
const avatarVariant = computed(() => (props.avatarInitials ? 'initial' : 'image'))

const handleClick = () => {
  if (!props.disabled) {
    activeModel.value = !activeModel.value
    emit('update', activeModel.value)
  }
}

const handleClose = (event?: MouseEvent | KeyboardEvent) => {
  if (!props.disabled) {
    emit('close', (event || new MouseEvent('click')) as MouseEvent | KeyboardEvent)
  }
}
</script>
