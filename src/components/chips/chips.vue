<template>
  <div
    v-if="visible"
    :class="chipsBaseClasses"
    :disabled="disabled"
    role="button"
    tabindex="0"
    @click="handleClick"
    @keyup.enter="handleClick"
  >
    <template v-if="slots.default">
      <slot />
    </template>
    <template v-else-if="variant === 'tag'">
      <span v-if="hasIcon" class="chips-icon spr-inline-flex spr-items-center spr-leading-[0]">
        <slot name="icon">
          <Icon :icon="getIcon" class="spr-font-size-300" />
        </slot>
      </span>
      <span v-if="hasAvatar" class="spr-flex spr-items-center spr-justify-center">
        <spr-avatar
          size="2xs"
          :src="props.avatarUrl"
          :variant="props.avatarVariant"
          :initial="props.avatarInitials"
        />
      </span>
      <span class="spr-chips-label">
        {{ label }}
      </span>
      <span v-if="badge" class="chips-badge">
        <spr-badge :text="badgeText" :variant="badgeVariant" size="small" position="default" />
      </span>
      <span
        v-if="closable"
        class="chips-close"
        role="button"
        tabindex="0"
        :aria-disabled="disabled"
        @click.stop="handleClose"
        @keyup.enter.stop="handleClose"
      >
        <slot name="close-icon">
          <Icon icon="ph:x" />
        </slot>
      </span>
    </template>
    <template v-else>
      {{ day.charAt(0) }}
    </template>
  </div>
</template>

<script lang="ts" setup>
import { useSlots } from 'vue';
import { Icon } from '@iconify/vue';
import { chipsPropTypes } from './chips';
import { useChips } from './use-chips';
import SprBadge from '@/components/badge/badge.vue';
import { chipsEmitTypes } from './chips';
import SprAvatar from '@/components/avatar/avatar.vue';

const props = defineProps(chipsPropTypes);
const emit = defineEmits(chipsEmitTypes);
const slots = useSlots();

const { chipsBaseClasses, handleClose, handleClick, getIcon, hasAvatar, hasIcon } = useChips(props, emit, slots);
</script>
