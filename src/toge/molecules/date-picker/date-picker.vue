<template>
  <div :id="uniqueId" :style="props.width ? { width: props.width } : {}">
    <Menu
      v-model:shown="isOpen"
      aria-id="date-picker-wrapper"
      popper-class="spr-picker-popper"
      distance="4"
      :placement="props.placement ?? 'bottom'"
      :triggers="[]"
      :popper-hide-triggers="[]"
      :auto-hide="true"
      :disabled="props.disabled || props.readonly"
      :container="popperContainerAttr"
      :strategy="props.popperStrategy ?? 'absolute'"
      :delay="0"
      style="position: relative; width: 100%"
    >
      <!-- Input trigger -->
      <div
        :class="{ 'spr:cursor-pointer': !props.disabled && !props.readonly, 'spr:cursor-not-allowed': props.disabled }"
        @click="!props.disabled && !props.readonly ? (isOpen = !isOpen) : undefined"
      >
        <TogeInput
          :model-value="model ? formatDisplayDate(model) : ''"
          :label="props.label"
          :placeholder="props.placeholder ?? 'Select date'"
          :disabled="props.disabled"
          :readonly="true"
          :error="props.error"
          style="pointer-events: none"
        >
          <template v-if="props.clearable && model" #trailing>
            <Icon
              class="spr-text-color-supporting spr:h-4 spr:w-4 hover:spr-text-color-strong"
              style="pointer-events: all; cursor: pointer"
              icon="ph:x"
              @click.stop="clearDate"
            />
          </template>
          <template #icon>
            <Icon icon="ph:calendar-blank" />
          </template>
        </TogeInput>
      </div>

      <template #popper>
        <div class="spr-background-color">
          <TogeDateCalendarPicker
            :model-value="model"
            :min-max-year="props.minMaxYear"
            :rest-days="props.restDays"
            :disabled-dates="props.disabledDates"
            :disabled="props.disabled"
            :readonly="props.readonly"
            mode="full"
            :naked="true"
            @update:model-value="handleDateSelect"
          />
        </div>
      </template>
    </Menu>

    <!-- Helper rendered outside Menu so the popover anchors to the input only -->
    <div
      v-if="props.showHelper"
      class="spr:flex spr:flex-row spr:items-start spr:justify-between spr:w-full spr:mt-1"
    >
      <div :class="['spr-body-sm-regular spr:flex spr:items-center spr:gap-size-spacing-5xs spr:flex-1', props.error ? 'spr-text-color-danger-base' : 'spr-text-color-supporting']">
        <Icon v-if="props.helperIcon" class="spr:h-5 spr:min-h-5 spr:w-5 spr:min-w-5" :icon="props.helperIcon" />
        <span>{{ props.helperText }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { Menu } from 'floating-vue'
import 'floating-vue/dist/style.css'
import TogeDateCalendarPicker from '../date-calendar-picker/date-calendar-picker.vue'
import TogeInput from '../../primitives/input/input.vue'
import type { DatePickerProps, DatePickerEmits } from './date-picker.types'

const props = withDefaults(defineProps<DatePickerProps>(), {
  id: undefined,
  label: undefined,
  placeholder: undefined,
  disabled: false,
  readonly: false,
  error: false,
  showHelper: false,
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

const model = defineModel<string>({ default: '' })
const isOpen = ref(false)
const uniqueId = ref(props.id ?? 'dp-' + Math.random().toString(36).slice(2))

const popperContainerAttr = computed(() =>
  props.popperContainer ? props.popperContainer : `#${uniqueId.value}`,
)

function formatDisplayDate(value: string): string {
  if (!value) return ''
  const d = new Date(value)
  if (isNaN(d.getTime())) return value

  const format = props.format ?? 'MM-DD-YYYY'
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  const yyyy = String(d.getFullYear())

  return format.replace('MM', mm).replace('DD', dd).replace('YYYY', yyyy)
}

function handleDateSelect(value: string) {
  model.value = value
  emit('date-change', value)
  setTimeout(() => { isOpen.value = false }, 100)
}

function clearDate() {
  model.value = ''
  emit('date-change', '')
}
</script>
