<template>
  <div :class="cardClasses.baseClasses">
    <div v-if="props.showHeader && ($slots.header || props.title)" :class="cardClasses.headerClasses">
      <div v-if="props.title" class="spr-flex spr-items-center">
        <Icon
          v-if="props.headerIcon"
          :icon="props.headerIcon"
          class="spr-me-size-spacing-3xs spr-h-6 spr-w-6 spr-text-kangkong-600"
        />
        <div class="spr-mr-size-spacing-3xs">
          <div class="spr-text-mushroom-950 spr-font-size-300 spr-font-medium spr-leading-5">{{ props.title }}</div>
          <div v-if="props.subtitle" class="spr-font-size-100 spr-leading-4 spr-text-mushroom-600">
            {{ props.subtitle }}
          </div>
        </div>
      </div>
      <template v-if="$slots.header">
        <slot name="header" />
      </template>
    </div>

    <div v-if="$slots.content" :class="cardClasses.contentPaddingSizeClasses">
      <slot name="content" />
    </div>

    <slot />

    <div v-if="$slots.footer && $props.showFooter" :class="cardClasses.footerClasses">
      <slot name="footer" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useSlots } from 'vue';
import { Icon } from '@iconify/vue';
import { cardPropTypes } from './card';
import { useCard } from './use-card';

const props = defineProps(cardPropTypes);
const slots = useSlots();

const { cardClasses } = useCard(props, slots);
</script>
