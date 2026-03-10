<template>
  <label :class="classes.baseClasses">
    <div class="spr-relative spr-flex spr-items-center">
      <input
        :id="props.id"
        type="checkbox"
        :class="classes.inputCheckboxClasses"
        :disabled="props.disabled"
        :checked="model"
        :aria-checked="model"
        :aria-disabled="props.disabled || undefined"
        :aria-label="props.ariaLabel || undefined"
        @change="handleChange"
      />
      <span :class="classes.inputCheckboxCheckIconClasses">
        <Icon :icon="checkboxIcon" />
      </span>
    </div>
    <div v-if="props.label || props.description || $slots.default" class="spr-grid spr-gap-0.5">
      <span v-if="$slots.default" :class="classes.labelClasses">
        <slot />
      </span>
      <span v-else-if="props.label" :class="classes.labelClasses">
        {{ props.label }}
      </span>
      <span v-if="props.description" :class="classes.descriptionClasses">
        {{ props.description }}
      </span>
    </div>
  </label>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { CheckboxProps, CheckboxEmits } from './checkbox.types'
import { getCheckboxClasses } from './checkbox.styles'

const props = withDefaults(defineProps<CheckboxProps>(), {
  id: undefined,
  label: undefined,
  description: undefined,
  disabled: false,
  indeterminate: false,
  ariaLabel: undefined,
})

const emit = defineEmits<CheckboxEmits>()

defineSlots<{
  default(props: {}): any
}>()

const model = defineModel<boolean>({ default: false })

const classes = computed(() =>
  getCheckboxClasses({
    isChecked: model.value,
    disabled: props.disabled,
    indeterminate: props.indeterminate,
  }),
)

const checkboxIcon = computed(() => {
  if (props.indeterminate) return 'ph:minus-bold'
  return 'ph:check-bold'
})

function handleChange(evt: Event) {
  if (evt.target instanceof HTMLInputElement) {
    model.value = evt.target.checked
    emit('change', evt)
  }
}
</script>
