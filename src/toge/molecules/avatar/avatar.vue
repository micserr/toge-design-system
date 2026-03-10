<template>
  <div class="spr:h-fit spr:w-fit" :aria-label="props.ariaLabel || undefined">
    <div v-if="!props.loading" :class="baseClasses">
      <template v-if="props.variant === 'count' || props.variant === 'initial'">
        <div :class="initialsContainerClasses">
          {{ props.variant === 'count' ? `+${props.count}` : initials }}
        </div>
      </template>
      <template v-else>
        <div v-if="props.variant || $slots.default" :class="imageContainerClasses">
          <slot>
            <img
              v-if="props.src && !imageError"
              :src="props.src"
              :alt="props.alt"
              @error="onImageError"
            />
            <Icon v-else :icon="iconVariant" />
          </slot>
        </div>
      </template>

      <span v-if="props.badge" :class="onlineNotificationClasses">
        <TogeBadge :variant="props.status" :size="avatarSizeConfig.badge" />
      </span>
    </div>

    <div v-else :class="baseClasses">
      <div :class="initialsContainerClasses" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { AvatarProps, AvatarEmits } from './avatar.types'
import {
  getAvatarBaseClasses,
  getAvatarImageContainerClasses,
  getAvatarInitialsContainerClasses,
  getAvatarOnlineNotificationClasses,
  getAvatarSizeConfig,
  getAvatarIconVariant,
  getAvatarInitials,
} from './avatar.styles'
import { useAvatarImageState } from './avatar.state'
import TogeBadge from '../../primitives/badge/badge.vue'

const props = withDefaults(defineProps<AvatarProps>(), {
  alt: 'Avatar',
  badge: false,
  size: '2xl',
  initial: 'Avatar',
  color: 'primary',
  status: 'brand',
  count: 0,
  variant: 'initial',
  loading: false,
})

const emit = defineEmits<AvatarEmits>()

defineSlots<{
  default(props: {}): any
}>()

const { imageError, handleImageError } = useAvatarImageState()

const onImageError = () => handleImageError((error) => emit('image-error', error))

const baseClasses = computed(() => getAvatarBaseClasses(props.color, props.loading))
const imageContainerClasses = computed(() => getAvatarImageContainerClasses(props.size))
const initialsContainerClasses = computed(() => getAvatarInitialsContainerClasses(props.size))
const onlineNotificationClasses = computed(() => getAvatarOnlineNotificationClasses(props.size))
const avatarSizeConfig = computed(() => getAvatarSizeConfig(props.size))
const iconVariant = computed(() => getAvatarIconVariant(props.variant))
const initials = computed(() => getAvatarInitials(props.initial, props.size))
</script>
