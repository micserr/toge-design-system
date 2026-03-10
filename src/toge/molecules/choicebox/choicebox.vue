<template>
  <div
    :class="classes.container"
    :role="props.variant === 'radio' ? 'radio' : 'checkbox'"
    :aria-checked="isChecked"
    :aria-disabled="props.disabled || undefined"
    :aria-label="props.ariaLabel"
    :tabindex="props.disabled ? -1 : 0"
    @click="handleClick"
    @keydown.space.prevent="handleClick"
    @keydown.enter.prevent="handleClick"
  >
    <!-- Checkbox control -->
    <div v-if="props.variant === 'checkbox'" class="spr-relative spr-flex spr-items-center spr-shrink-0">
      <input
        :id="props.id"
        type="checkbox"
        :class="classes.checkboxInput"
        :checked="isChecked"
        :disabled="props.disabled"
        tabindex="-1"
        aria-hidden="true"
        @change.stop
      />
      <span :class="classes.checkboxIndicator">
        <Icon :icon="(props as ChoiceboxCheckboxProps).indeterminate ? 'ph:minus-bold' : 'ph:check-bold'" />
      </span>
    </div>

    <!-- Radio indicator (purely visual, interaction handled by container) -->
    <span v-else-if="props.variant === 'radio'" :class="classes.radioIndicator" />

    <!-- Custom slot control -->
    <slot v-else name="control" />

    <!-- Text content -->
    <div v-if="props.label || props.description || $slots.default" class="spr-grid spr-gap-0.5 spr-flex-1 spr-min-w-0">
      <slot>
        <span :class="classes.label">{{ props.label }}</span>
        <span v-if="props.description" :class="classes.description">{{ props.description }}</span>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { ChoiceboxProps, ChoiceboxCheckboxProps, ChoiceboxRadioProps, ChoiceboxEmits } from './choicebox.types'
import { getChoiceboxClasses } from './choicebox.styles'

const props = defineProps<ChoiceboxProps>()

const emit = defineEmits<ChoiceboxEmits>()

defineSlots<{
  default(props: {}): any
  control(props: {}): any
}>()

const model = defineModel<boolean | string | number | undefined>({ default: undefined })

const isChecked = computed(() => {
  if (props.variant === 'radio') {
    const compareValue = (props as ChoiceboxRadioProps).value ?? true
    return model.value === compareValue
  }
  return !!model.value
})

const classes = computed(() =>
  getChoiceboxClasses({
    isChecked: isChecked.value,
    disabled: props.disabled ?? false,
    fullWidth: props.fullWidth ?? false,
    isIndeterminate: props.variant === 'checkbox'
      ? ((props as ChoiceboxCheckboxProps).indeterminate ?? false)
      : false,
  }),
)

function handleClick(evt: MouseEvent | KeyboardEvent) {
  if (props.disabled) return
  if (props.variant === 'radio') {
    model.value = (props as ChoiceboxRadioProps).value ?? true
  } else {
    model.value = !model.value as boolean
  }
  emit('change', evt as unknown as Event)
}
</script>
