<template>
  <div
    :class="classes.main"
    :role="!props.viewOnly ? 'button' : undefined"
    :tabindex="!props.viewOnly ? 0 : undefined"
    :aria-label="props.ariaLabel || props.title"
    :aria-disabled="props.disabled || undefined"
    @click="handleClick"
    @keyup.enter="handleClick"
    @keydown.space.prevent="handleClick"
  >
    <slot name="prefix">
      <Icon v-if="props.icon" :icon="props.icon" class="spr-flex-none" />
    </slot>
    <slot>
      <div class="spr-flex spr-flex-col spr-flex-1 spr-min-w-0">
        <span v-if="timeLabel" :class="[classes.title, classes.textFormat]">{{ timeLabel }}</span>
        <span v-if="props.title" :class="[classes.title, classes.textFormat]">{{ props.title }}</span>
        <span v-if="props.description" :class="[classes.description, classes.textFormat]">{{ props.description }}</span>
        <span v-if="props.subDescription" :class="[classes.description, classes.textFormat, 'spr-body-xs-regular']">{{ props.subDescription }}</span>
      </div>
    </slot>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { EventCellProps, EventCellEmits, EventCellSlots } from './event-cell.types'
import { getEventCellClasses } from './event-cell.styles'

const props = withDefaults(defineProps<EventCellProps>(), {
  state: 'information',
  fullwidth: false,
  viewOnly: true,
  loading: false,
  lineThrough: false,
  disabled: false,
})

const emit = defineEmits<EventCellEmits>()

defineSlots<EventCellSlots>()

const classes = computed(() => getEventCellClasses({
  state: props.state!,
  fullwidth: props.fullwidth!,
  viewOnly: props.viewOnly!,
  loading: props.loading!,
  lineThrough: props.lineThrough!,
  disabled: props.disabled!,
}))

const timeLabel = computed(() => {
  if (props.startTime && props.endTime) return `${props.startTime} - ${props.endTime}`
  if (props.startTime) return props.startTime
  if (props.endTime) return props.endTime
  return ''
})

function handleClick(evt: MouseEvent | KeyboardEvent) {
  if (!props.viewOnly && !props.disabled) emit('click', evt as MouseEvent)
}
</script>
