<template>
  <div :id="props.id" :class="[classes.base, classes.flexBox]">
    <div
      v-if="props.showHeader"
      :class="classes.header"
      :role="props.hasCollapsible ? 'button' : undefined"
      :tabindex="props.hasCollapsible ? 0 : undefined"
      :aria-expanded="props.hasCollapsible ? isOpen : undefined"
      @click="props.hasCollapsible ? handleToggle() : undefined"
      @keyup.enter="props.hasCollapsible ? handleToggle() : undefined"
    >
      <slot name="header">
        <Icon v-if="props.headerIcon" :icon="props.headerIcon" class="spr-mr-size-spacing-3xs" />
        <div class="spr-flex spr-flex-col spr-flex-1">
          <span v-if="props.title" class="spr-body-sm-regular-medium spr-text-color-strong">{{ props.title }}</span>
          <span v-if="props.subtitle" class="spr-body-xs-regular spr-text-color-base">{{ props.subtitle }}</span>
        </div>
        <Icon v-if="props.hasCollapsible" :icon="isOpen ? 'ph:caret-up' : 'ph:caret-down'" />
      </slot>
    </div>

    <div v-show="!props.hasCollapsible || isOpen" :class="classes.contentPadding">
      <slot name="content">
        <slot />
      </slot>
    </div>

    <div v-if="props.showFooter && $slots.footer" :class="classes.footer">
      <slot name="footer" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, useSlots } from 'vue'
import { Icon } from '@iconify/vue'
import type { CardProps, CardEmits } from './card.types'
import { getCardClasses } from './card.styles'

const props = withDefaults(defineProps<CardProps>(), {
  tone: 'plain',
  showHeader: true,
  showFooter: true,
  borderRadiusSize: 'xl',
  hasCollapsible: false,
  isCollapsibleOpen: false,
  hasContentPadding: true,
  flexbox: false,
})

const emit = defineEmits<CardEmits>()

defineSlots<{
  header(props: {}): any
  content(props: {}): any
  default(props: {}): any
  footer(props: {}): any
}>()

const slots = useSlots()
const isOpen = ref(props.isCollapsibleOpen)

const classes = computed(() => getCardClasses({
  tone: props.tone!,
  borderRadiusSize: props.borderRadiusSize!,
  hasCollapsible: props.hasCollapsible!,
  isCollapsibleOpen: isOpen.value,
  hasContentPadding: props.hasContentPadding!,
  flexbox: props.flexbox!,
  hasTitle: !!props.title,
  hasHeaderIcon: !!props.headerIcon,
  hasHeaderSlot: !!slots.header,
  hasContentSlot: !!slots.content || !!slots.default,
}))

function handleToggle() {
  isOpen.value = !isOpen.value
  emit('toggle', isOpen.value)
}
</script>
