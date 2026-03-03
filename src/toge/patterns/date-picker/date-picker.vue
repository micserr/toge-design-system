<template>
  <div :style="props.width ? { width: props.width } : {}">
    <Menu
      v-model:shown="isOpen"
      aria-id="date-picker-wrapper"
      distance="4"
      :placement="props.placement ?? 'bottom'"
      :triggers="[]"
      :popper-hide-triggers="[]"
      :auto-hide="false"
      :disabled="props.disabled || props.readonly"
      :container="popperContainerAttr"
      :strategy="props.popperStrategy ?? 'absolute'"
      :delay="0"
      style="position: relative; width: 100%"
    >
      <div :id="uniqueId" :class="classes.wrapper">
        <label v-if="props.label" :for="uniqueId" :class="classes.label">
          {{ props.label }}
        </label>

        <!-- Input trigger -->
        <div
          :class="classes.inputBase"
          @click="!props.disabled && !props.readonly ? (isOpen = !isOpen) : undefined"
        >
          <span
            :class="[classes.displayText, { [classes.placeholder]: !model }]"
          >
            {{ model ? formatDisplayDate(model) : (props.placeholder ?? 'Select date') }}
          </span>

          <div :class="classes.iconWrapper">
            <Icon
              v-if="props.clearable && model"
              :class="classes.clearIcon"
              icon="ph:x"
              @click.stop="clearDate"
            />
            <Icon :class="classes.calendarIcon" icon="ph:calendar-blank" />
          </div>
        </div>
      </div>

      <template #popper>
        <TogeDateCalendarPicker
          :model-value="model"
          :min-max-year="props.minMaxYear"
          :rest-days="props.restDays"
          :disabled-dates="props.disabledDates"
          :disabled="props.disabled"
          :readonly="props.readonly"
          mode="full"
          @update:model-value="handleDateSelect"
        />
      </template>
    </Menu>

    <div v-if="props.displayHelper" :class="classes.helper">
      <slot name="helperMessage">
        <Icon v-if="props.helperIcon" class="spr-h-5 spr-min-h-5 spr-w-5 spr-min-w-5" :icon="props.helperIcon" />
        <span>{{ props.helperText }}</span>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { Menu } from 'floating-vue'
import 'floating-vue/dist/style.css'
import TogeDateCalendarPicker from '../date-calendar-picker/date-calendar-picker.vue'
import type { DatePickerProps, DatePickerEmits } from './date-picker.types'
import { getDatePickerClasses } from './date-picker.styles'

const props = withDefaults(defineProps<DatePickerProps>(), {
  id: undefined,
  label: undefined,
  placeholder: undefined,
  disabled: false,
  readonly: false,
  error: false,
  active: false,
  displayHelper: false,
  helperText: undefined,
  helperIcon: undefined,
  width: undefined,
  placement: 'bottom',
  popperStrategy: 'absolute',
  popperContainer: undefined,
  format: 'MM-DD-YYYY',
  minMaxYear: () => ({ min: 1900, max: new Date().getFullYear() }),
  restDays: () => [],
  disabledDates: undefined,
  clearable: false,
})

const emit = defineEmits<DatePickerEmits>()

defineSlots<{
  helperMessage(props: {}): unknown
}>()

const model = defineModel<string>({ default: '' })
const isOpen = ref(false)
const uniqueId = ref(props.id ?? 'dp-' + Math.random().toString(36).slice(2))

const popperContainerAttr = computed(() =>
  props.popperContainer ? props.popperContainer : `#${uniqueId.value}`,
)

const classes = computed(() =>
  getDatePickerClasses({
    disabled: props.disabled,
    readonly: props.readonly,
    error: props.error,
    active: props.active,
    isOpen: isOpen.value,
  }),
)

function formatDisplayDate(value: string): string {
  if (!value) return ''
  const d = new Date(value)
  if (isNaN(d.getTime())) return value

  const format = props.format ?? 'MM-DD-YYYY'
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  const yyyy = String(d.getFullYear())

  return format
    .replace('MM', mm)
    .replace('DD', dd)
    .replace('YYYY', yyyy)
}

function handleDateSelect(value: string) {
  model.value = value
  emit('date-change', value)
  // Small delay before closing to allow the selection to visually register
  setTimeout(() => {
    isOpen.value = false
  }, 100)
}

function clearDate() {
  model.value = ''
  emit('date-change', '')
}
</script>
