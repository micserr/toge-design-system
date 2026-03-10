<template>
  <div :id="props.id" :class="[classes.base, { 'spr:flex spr:flex-col spr:h-full': props.flexbox }]">

    <!-- Header -->
    <div v-if="props.showHeader" :class="classes.header">
      <slot name="header">
        <Icon v-if="props.headerIcon" :icon="props.headerIcon" class="spr:mr-size-spacing-3xs spr:shrink-0" />
        <div class="spr:flex spr:flex-col spr:flex-1">
          <span v-if="props.title" class="spr-body-sm-regular-medium spr-text-color-strong">{{ props.title }}</span>
          <span v-if="props.subtitle" class="spr-body-xs-regular spr-text-color-base">{{ props.subtitle }}</span>
        </div>
      </slot>
    </div>

    <!-- Body -->
    <div :class="classes.body">
      <slot />
    </div>

    <!-- Footer -->
    <div v-if="props.showFooter" :class="classes.footer">
      <slot name="footer">
        <div class="spr:flex spr:items-center spr:gap-size-spacing-3xs">
          <TogeButton variant="secondary" size="small" @click="emit('secondary')">
            {{ props.secondaryLabel }}
          </TogeButton>
          <TogeButton variant="primary" tone="success" size="small" @click="emit('primary')">
            {{ props.primaryLabel }}
          </TogeButton>
        </div>
      </slot>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { CardProps, CardEmits } from './card.types'
import { getCardClasses } from './card.styles'
import TogeButton from '../../primitives/button/button.vue'

const props = withDefaults(defineProps<CardProps>(), {
  borderRadiusSize: 'xl',
  showHeader: false,
  showFooter: false,
  flexbox: false,
  primaryLabel: 'Confirm',
  secondaryLabel: 'Cancel',
})

const emit = defineEmits<CardEmits>()

defineSlots<{
  header(props: {}): any
  default(props: {}): any
  footer(props: {}): any
}>()

const classes = computed(() =>
  getCardClasses({
    borderRadiusSize: props.borderRadiusSize!,
    flexbox: props.flexbox!,
  }),
)
</script>
