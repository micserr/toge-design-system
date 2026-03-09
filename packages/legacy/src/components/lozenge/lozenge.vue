<template>
  <div :class="['spr-lozenge__wrapper', lozengeClasses.wrapperClasses]">
    <div v-if="visible && !loading" :class="['spr-lozenge__base', lozengeClasses.baseClasses]">
      <div
        :class="['spr-lozenge__tone', lozengeClasses.toneClasses]"
        :tabindex="props.interactive || props.dropdown ? 0 : -1"
        :style="{ maxWidth: props.maxWidth }"
      >
        <div
          v-if="$slots.icon || props.icon"
          class="spr-lozenge__prefix-icon spr-flex spr-h-3 spr-w-3 spr-items-center spr-overflow-hidden"
        >
          <slot name="icon">
            <icon :icon="props.icon" />
          </slot>
        </div>

        <div v-if="$slots.avatar || props.url" class="spr-lozenge__avatar">
          <slot name="avatar">
            <div v-if="url" class="spr-h-4 spr-w-4 spr-overflow-hidden">
              <img class="spr-h-full spr-w-full spr-rounded-full spr-object-cover" :src="url" alt="avatar" />
            </div>
          </slot>
        </div>

        <span :class="lozengeClasses.labelClasses">{{ label }}</span>

        <div
          v-if="$slots.postfixIcon || props.postfixIcon || props.dropdown"
          class="spr-lozenge__prefix-icon spr-flex spr-h-3 spr-w-3 spr-items-center spr-overflow-hidden"
        >
          <slot name="postfixIcon">
            <icon v-if="props.postfixIcon" :icon="props.postfixIcon" />
            <icon v-else icon="ph:caret-down-fill" />
          </slot>
        </div>
      </div>
    </div>
    <div v-if="visible && loading" :class="['spr-lozenge__loading', lozengeClasses.baseClasses]" />
  </div>
</template>

<script lang="ts" setup>
import { lozengePropTypes } from './lozenge';
import { useLozenge } from './use-lozenge';
import { Icon } from '@iconify/vue';

const props = defineProps(lozengePropTypes);
const { lozengeClasses } = useLozenge(props);
</script>
