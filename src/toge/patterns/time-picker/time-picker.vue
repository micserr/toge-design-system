<template>
  <Menu
    v-model:shown="isOpen"
    distance="4"
    placement="bottom-start"
    :triggers="['click']"
    :popper-hide-triggers="[]"
    :container="`#${uniqueId}`"
    instant-move
  >
    <div :id="uniqueId" :style="props.fullWidth ? { width: '100%' } : {}">
      <TogeInput
        :id="props.id"
        v-model="model"
        type="text"
        :placeholder="computedPlaceholder"
        :readonly="props.disableTyping"
        :disabled="props.disabled"
        :label="props.label"
        :error="props.error"
        :display-helper="!!props.helperText"
        :helper-text="props.helperText"
        @input="handleInput"
      >
        <template #icon>
          <Icon icon="ph:clock" />
        </template>
      </TogeInput>
    </div>
    <template #popper>
      <div :class="classes.optionList">
        <div v-if="timeOptions.length > 0">
          <div
            v-for="option in timeOptions"
            :key="option"
            :class="[classes.option, { [classes.optionActive]: option.toUpperCase() === model?.toUpperCase() }]"
            @mousedown.prevent="selectOption(option)"
          >
            {{ option }}
            <span v-if="option.toUpperCase() === model?.toUpperCase()" :class="classes.optionActiveIcon">
              <Icon icon="ph:check" />
            </span>
          </div>
        </div>
        <div v-else :class="classes.empty">No options</div>
      </div>
    </template>
  </Menu>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { Menu } from 'floating-vue'
import TogeInput from '../../primitives/input/input.vue'
import type { TimePickerProps, TimePickerEmits } from './time-picker.types'
import { generateTimeSlots, getTimePickerClasses } from './time-picker.styles'

const props = withDefaults(defineProps<TimePickerProps>(), {
  label: undefined,
  error: false,
  disabled: false,
  interval: 30,
  format: '24',
  disableTyping: false,
  fullWidth: false,
  helperText: undefined,
  placeholder: undefined,
  id: undefined,
})

const emit = defineEmits<TimePickerEmits>()

defineSlots<{ default(props: {}): any }>()

const model = defineModel<string>({ default: '' })
const isOpen = ref(false)
const uniqueId = ref('tp-' + Math.random().toString(36).slice(2))

const timeOptions = computed(() => generateTimeSlots(props.interval!, props.format as '12' | '24'))
const computedPlaceholder = computed(() => props.placeholder ?? (props.format === '12' ? 'HH:MM AM/PM' : 'HH:MM'))
const classes = computed(() => getTimePickerClasses(props.fullWidth!))

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

function selectOption(option: string) {
  model.value = option
  emit('change', option)
  isOpen.value = false
}
</script>
