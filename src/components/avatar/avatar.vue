<template>
  <div :class="avatarClassses">
    <template v-if="!initial">
      <img v-if="!$slots.default" :src="src" :alt="alt" :class="avatarImageClassses" />
      <div v-else :class="avatarImageClassses">
        <slot />
      </div>
    </template>
    <div v-else :class="initialClassses">
      {{ initial }}
    </div>
    <span v-if="badge" :class="avatarNotificationClassses">
      <spr-badge :text="badgeText" variant="danger" :size="getAvatarSize.notif" />
    </span>
    <span v-if="online" :class="onlineNotificationClassses">
      <spr-badge text="" variant="brand" :size="getAvatarSize.online" />
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
