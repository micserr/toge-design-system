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
      <Icon v-if="resolvedIcon" :icon="resolvedIcon" class="spr-flex-none" />
    </slot>
    <slot>
      <div class="spr-flex spr-flex-col spr-flex-1 spr-min-w-0">
        <span :class="[classes.typeLabel, classes.textFormat]">{{ shiftLabel }}</span>
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
import type { CalendarCellProps, CalendarCellEmits } from './calendar-cell.types'
import { getCalendarCellClasses, SHIFT_LABELS, ICON_MAP } from './calendar-cell.styles'

const props = withDefaults(defineProps<CalendarCellProps>(), {
  type: 'standard',
  status: 'default',
  state: 'danger',
  fullwidth: false,
  viewOnly: true,
  loading: false,
  customColor: '',
  lineThrough: false,
  disabled: false,
})

const emit = defineEmits<CalendarCellEmits>()

defineSlots<{
  default(props: {}): any
  prefix(props: {}): any
}>()

const classes = computed(() => getCalendarCellClasses({
  type: props.type!,
  status: props.status!,
  state: props.state!,
  fullwidth: props.fullwidth!,
  viewOnly: props.viewOnly!,
  loading: props.loading!,
  customColor: props.customColor!,
  lineThrough: props.lineThrough!,
  disabled: props.disabled!,
  hasCustomBorderSize: false,
  customBorderSize: '',
}))

const shiftLabel = computed(() => SHIFT_LABELS[props.type!] ?? props.type)
const resolvedIcon = computed(() => props.icon || ICON_MAP[props.type!] || '')

function handleClick(evt: MouseEvent | KeyboardEvent) {
  if (!props.viewOnly && !props.disabled) emit('click', evt as MouseEvent)
}
</script>
