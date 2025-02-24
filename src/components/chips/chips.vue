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
    <template v-if="variant === 'tag'">
      <span v-if="icon || $slots.icon" class="chips-icon spr-inline-flex spr-items-center spr-leading-[0]">
        <slot name="icon">
          <Icon :icon="getIcon" class="spr-font-size-300" />
        </slot>
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

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { chipsPropTypes } from './chips';
import { useChips } from './use-chips';
import SprBadge from '@/components/badge/badge.vue';
import { chipsEmitTypes } from './chips';

const props = defineProps(chipsPropTypes);
const emit = defineEmits(chipsEmitTypes);

const { chipsBaseClasses, handleClose, handleClick, getIcon } = useChips(props, emit);
</script>
