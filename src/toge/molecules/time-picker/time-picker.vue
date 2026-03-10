<template>
  <div :style="props.fullWidth ? { width: '100%' } : {}">
    <TogePopover
      v-model:shown="isOpen"
      placement="bottom-start"
      :distance="4"
      :triggers="['click']"
      :popper-width="props.fullWidth ? '100%' : '240px'"
    >
      <template #reference>
        <TogeInput
          :id="props.id"
          v-model="model"
          type="text"
          :placeholder="computedPlaceholder"
          :readonly="props.disableTyping"
          :disabled="props.disabled"
          :label="props.label"
          :error="props.error"
          @input="handleInput"
        >
          <template #icon>
            <Icon icon="ph:clock" />
          </template>
        </TogeInput>
      </template>

      <div class="spr:max-h-[300px] spr:overflow-y-auto">
        <TogeList
          :items="timeItems"
          :model-value="selectedValues"
          @select="selectOption"
        />
      </div>
    </TogePopover>

    <div
      v-if="props.showHelper"
      class="spr:flex spr:flex-row spr:items-start spr:justify-between spr:w-full spr:mt-1"
    >
      <div
        :class="[
          'spr-body-sm-regular spr:flex spr:items-center spr:gap-size-spacing-5xs spr:flex-1',
          props.error ? 'spr-text-color-danger-base' : 'spr-text-color-supporting',
        ]"
      >
        <span>{{ props.helperText }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import TogeInput from '../../primitives/input/input.vue'
import TogePopover from '../../primitives/popover/popover.vue'
import TogeList from '../list/list.vue'
import type { ListItem } from '../list/list.types'
import type { TimePickerProps, TimePickerEmits } from './time-picker.types'
import { generateTimeSlots } from './time-picker.styles'

const props = withDefaults(defineProps<TimePickerProps>(), {
  label: undefined,
  error: false,
  disabled: false,
  interval: 30,
  format: '24',
  disableTyping: false,
  fullWidth: false,
  helperText: undefined,
  showHelper: false,
  placeholder: undefined,
  id: undefined,
})

const emit = defineEmits<TimePickerEmits>()

const model = defineModel<string>({ default: '' })
const isOpen = ref(false)

const timeItems = computed<ListItem[]>(() =>
  generateTimeSlots(props.interval!, props.format as '12' | '24').map((slot) => ({
    text: slot,
    value: slot,
  })),
)

const selectedValues = computed(() =>
  model.value ? [model.value.toUpperCase()] : [],
)

const computedPlaceholder = computed(() =>
  props.placeholder ?? (props.format === '12' ? 'HH:MM AM/PM' : 'HH:MM'),
)

function handleInput(evt: Event) {
  const target = evt.target as HTMLInputElement
  const input = target.value.toUpperCase()
  const regex = props.format === '12' ? /^[0-9:APM\s]*$/ : /^[0-9:]*$/
  if (!regex.test(input)) {
    model.value = model.value?.slice(0, -1) ?? ''
  } else {
    model.value = input
  }
}

function selectOption(item: ListItem) {
  model.value = item.value as string
  emit('change', item.value as string)
  isOpen.value = false
}
</script>
