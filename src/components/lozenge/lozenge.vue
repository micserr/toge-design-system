<template>
  <div class="spr-h-fit spr-w-fit">
    <div v-if="visible" :class="lozengeClasses.baseClasses">
      <div :class="lozengeClasses.toneClasses">
        <div v-if="$slots.icon" class="spr-flex spr-h-3 spr-w-3 spr-items-center spr-overflow-hidden">
          <slot name="icon" />
        </div>

        <div v-if="$slots.avatar" class="spr-flex spr-items-center">
          <slot name="avatar" />
        </div>

        <div v-if="url && !$slots.avatar" class="spr-h-4 spr-w-4 spr-overflow-hidden">
          <img class="spr-h-full spr-w-full spr-rounded-full spr-object-cover" :src="url" alt="avatar" />
        </div>

        <div>{{ label }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { lozengePropTypes } from './lozenge';
import { useLozenge } from './use-lozenge';

const props = defineProps(lozengePropTypes);

const { lozengeClasses } = useLozenge(props);
</script>
