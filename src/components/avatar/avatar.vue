<template>
  <div :class="avatarClassses">
    <template v-if="!initial">
      <img v-if="!$slots.default && src" :src="src" :alt="alt" :class="avatarImageClassses" />
      <div v-else :class="[avatarImageClassses, 'avatar__slot spr-border-color-weak spr-border spr-border-solid']">
        <slot />
      </div>
    </template>
    <div v-else :class="initialClassses">
      {{ initial }}
    </div>
    <span v-if="notification" :class="avatarNotificationClassses">
      <spr-badge :text="badgeText" variant="danger" :size="getAvatarSize.notif" />
    </span>
    <span v-if="badge" :class="onlineNotificationClassses">
      <spr-badge text="" :variant="status" :size="getAvatarSize.badge" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { avatarPropTypes } from './avatar';
import { useAvatar } from './use-avatar';

import SprBadge from '@/components/badge/badge.vue';

const props = defineProps(avatarPropTypes);

const {
  avatarClassses,
  avatarImageClassses,
  getAvatarSize,
  avatarNotificationClassses,
  onlineNotificationClassses,
  initialClassses,
} = useAvatar(props);
</script>
