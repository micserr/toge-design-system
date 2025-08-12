<template>
  <div :class="['spr-lozenge__wrapper', lozengeClasses.wrapperClasses]">
    <div v-if="visible && !loading" :class="['spr-lozenge__base', lozengeClasses.baseClasses]">
      <div :class="['spr-lozenge__tone',lozengeClasses.toneClasses]">
        <div v-if="$slots.icon" class="spr-lozenge__prefix-icon spr-flex spr-h-3 spr-w-3 spr-items-center spr-overflow-hidden">
          <slot name="icon" />
        </div>

        <div v-if="$slots.avatar || props.url" class="spr-lozenge__avatar">
          <slot name="avatar">
            <div v-if="url" class="spr-h-4 spr-w-4 spr-overflow-hidden">
              <img class="spr-h-full spr-w-full spr-rounded-full spr-object-cover" :src="url" alt="avatar" />
            </div>
          </slot>
        </div>

        <span class="spr-lozenge__label spr-label-xs-medium">{{ label }}</span>

        <div v-if="$slots.postfixIcon || props.dropdown" class="spr-lozenge__prefix-icon spr-flex spr-h-3 spr-w-3 spr-items-center spr-overflow-hidden">
          <slot name="postfixIcon">
            <icon icon="ph:caret-down-fill" />
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
