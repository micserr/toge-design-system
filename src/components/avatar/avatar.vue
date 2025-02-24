<template>
  <div :class="avatarClassses.baseClasses">
    <template v-if="!initial">
      <img v-if="!$slots.default && src" :src="src" :alt="alt" :class="avatarClassses.imageClasses" />

      <div
        v-else
        :class="[avatarClassses.imageClasses, 'avatar__slot spr-border-color-weak spr-border spr-border-solid']"
      >
        <slot />
      </div>
    </template>

    <div v-else :class="avatarClassses.nameInitalsClasses">
      {{ count ? `+${initial}` : initial.charAt(0) }}
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

import SprBadge from '@/components/badge/badge.vue';

const props = defineProps(avatarPropTypes);

const { avatarClassses, getAvatarSize } = useAvatar(props);
</script>
