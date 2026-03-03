<template>
  <div :class="wrapperClasses" role="group" aria-label="Filter options">
    <template v-for="option in props.options" :key="option.value">
      <slot name="option" :option="option" :active="isActive(option.value)">
        <button
          type="button"
          :class="getOptionClasses(option)"
          :disabled="option.disabled || props.disabled"
          :aria-pressed="isActive(option.value)"
          :aria-disabled="option.disabled || props.disabled || undefined"
          @click="handleOptionClick(option)"
        >
          <span>{{ option.label }}</span>
          <span
            v-if="option.count !== undefined"
            class="spr-body-xs-regular spr-text-color-supporting"
          >
            {{ option.count }}
          </span>
        </button>
      </slot>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { FilterProps, FilterEmits, FilterSlots, FilterOption } from './filter.types'
import { getFilterOptionClasses, getFilterWrapperClasses } from './filter.styles'

const props = withDefaults(defineProps<FilterProps>(), {
  options: () => [],
  multiple: true,
  disabled: false,
  size: 'sm',
})

const model = defineModel<(string | number)[]>({ default: () => [] })

const emit = defineEmits<FilterEmits>()

defineSlots<FilterSlots>()

const wrapperClasses = computed(() => getFilterWrapperClasses())

function isActive(value: string | number): boolean {
  return model.value.includes(value)
}

function getOptionClasses(option: FilterOption): string {
  return getFilterOptionClasses({
    active: isActive(option.value),
    disabled: option.disabled || props.disabled,
    size: props.size,
  })
}

function handleOptionClick(option: FilterOption): void {
  if (option.disabled || props.disabled) return

  let newValue: (string | number)[]

  if (props.multiple) {
    if (isActive(option.value)) {
      newValue = model.value.filter((v) => v !== option.value)
    } else {
      newValue = [...model.value, option.value]
    }
  } else {
    newValue = isActive(option.value) ? [] : [option.value]
  }

  model.value = newValue
  emit('filter-change', newValue)
}
</script>
