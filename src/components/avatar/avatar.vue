<template>
  <div class="spr-h-fit spr-w-fit">
    <div :class="avatarClasses.baseClasses">
      <template v-if="['image', 'client', 'user', 'user-group'].includes(props.variant) || $slots.default">
        <div :class="avatarClasses.imageContainerClasses">
          <slot>
            <img v-if="src" :src="src" :alt="alt" class="" />
            <Icon v-else :icon="getIconVariant" />
          </slot>
        </div>
      </template>
      <template v-else>
        <div :class="avatarClasses.initialsContainerClasses">
          {{ props.variant === 'count' ? `+${props.count}` : getInitials }}
        </div>
      </template>

      <span v-if="props.notification" :class="avatarClasses.notificationClasses">
        <spr-badge :text="props.notificationText" variant="danger" :size="getAvatarSize.notif" />
      </span>

      <span v-if="props.badge" :class="avatarClasses.onlineNotificationClasses">
        <spr-badge :variant="status" :size="getAvatarSize.badge" />
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { avatarPropTypes } from './avatar';
import { useAvatar } from './use-avatar';
import { Icon } from '@iconify/vue';

import SprBadge from '@/components/badge/badge.vue';

const props = defineProps(avatarPropTypes);

const { avatarClasses, getAvatarSize, getIconVariant, getInitials } = useAvatar(props);
</script>
