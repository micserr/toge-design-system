<template>
  <div :class="avatarClasses.baseClasses">
    <template v-if="['image', 'client', 'user', 'user-group'].includes(props.variant) || $slots.default">
      <div :class="[avatarClassses.imageClasses, 'avatar__slot spr-border-color-weak spr-border spr-border-solid']">
        <slot>
          <img v-if="src" :src="src" :alt="alt" :class="avatarClassses.imageClasses" />
          <Icon v-else :icon="getIconVariant" />
        </slot>
      </div>
    </template>

    <div v-else :class="avatarClassses.nameInitalsClasses">
      {{ props.variant === 'count' ? `+${count}` : getInitials }}
    </div>

    <span v-if="notification" :class="avatarClassses.notificationClasses">
      <spr-badge :text="NotificationText" variant="danger" :size="getAvatarSize.notif" />
    </span>

    <span v-if="badge" :class="avatarClassses.onlineNotificationClasses">
      <spr-badge text="" :variant="status" :size="getAvatarSize.badge" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { avatarPropTypes } from './avatar';
import { useAvatar } from './use-avatar';
import { Icon } from '@iconify/vue';

import SprBadge from '@/components/badge/badge.vue';

const props = defineProps(avatarPropTypes);

const { avatarClasses, getAvatarSize, getIconVariant, getInitials } = useAvatar(props);
</script>
