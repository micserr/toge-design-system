<template>
  <div class="spr-h-fit spr-w-fit">
    <div v-if="!props.loading && !imageError" :class="avatarClasses.baseClasses">
      <template v-if="props.variant === 'count' || props.variant === 'initial'">
        <div :class="avatarClasses.initialsContainerClasses">
          {{ props.variant === 'count' ? `+${props.count}` : getInitials }}
        </div>
      </template>
      <template v-else>
        <div v-if="props.variant || $slots.default" :class="avatarClasses.imageContainerClasses">
          <slot>
            <img v-if="src" :src="src" :alt="alt" @error="handleImageError" />
            <Icon v-else :icon="getIconVariant" />
          </slot>
        </div>
      </template>

      <span v-if="props.notification" :class="avatarClasses.notificationClasses">
        <spr-badge :text="props.notificationText" variant="danger" :size="getAvatarSize.notif" />
      </span>

      <span v-if="props.badge" :class="avatarClasses.onlineNotificationClasses">
        <spr-badge :variant="status" :size="getAvatarSize.badge" />
      </span>
    </div>

    <div v-else :class="avatarClasses.baseClasses">
      <div :class="avatarClasses.initialsContainerClasses" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

import { avatarPropTypes, avatarEmitTypes } from './avatar';
import { useAvatar } from './use-avatar';

import SprBadge from '@/components/badge/badge.vue';

const props = defineProps(avatarPropTypes);
const emit = defineEmits(avatarEmitTypes);

const { avatarClasses, getAvatarSize, getIconVariant, getInitials, imageError, handleImageError } = useAvatar(
  props,
  emit,
);
</script>
