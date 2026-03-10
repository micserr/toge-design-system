<template>
  <div :class="classes.wrapper">
    <label
      v-if="props.label || props.supportingLabel"
      :for="props.id"
      :class="classes.label"
    >
      <span v-if="props.label">{{ props.label }}</span>
      <span v-if="props.supportingLabel" :class="classes.labelSupporting">
        {{ props.supportingLabel }}
      </span>
    </label>

    <div :class="classes.inputBase">
      <div v-if="slots.prefix" :class="classes.prefix">
        <slot name="prefix" />
      </div>

      <input
        v-bind="$attrs"
        :id="props.id"
        :class="[classes.input, { 'number-input': props.type === 'number' }]"
        :placeholder="props.placeholder"
        :type="props.type"
        :minlength="props.minLength"
        :maxlength="props.maxLength"
        :disabled="props.disabled"
        :readonly="props.readonly"
        :aria-disabled="props.disabled || undefined"
        :aria-invalid="props.error || undefined"
        v-model="model"
        @blur="(evt) => emit('blur', evt as FocusEvent)"
        @focus="(evt) => emit('focus', evt as FocusEvent)"
        @change="(evt) => emit('change', evt)"
      />

      <div v-if="slots.trailing || slots.icon" :class="classes.trailingArea">
        <div v-if="slots.trailing" :class="classes.trailing">
          <slot name="trailing" />
        </div>
        <div
          v-if="slots.icon"
          :class="classes.icon"
          @click="onIconClick"
        >
          <slot name="icon" />
        </div>
      </div>
    </div>

    <div
      v-if="props.showHelper || props.showCharCount"
      class="spr-flex spr-flex-row spr-items-start spr-justify-between spr-w-full spr-mt-1"
    >
      <div v-if="props.showHelper" :class="classes.helper">
        <slot name="helperMessage">
          <Icon
            v-if="props.helperIcon"
            class="spr-h-5 spr-min-h-5 spr-w-5 spr-min-w-5"
            :icon="props.helperIcon"
          />
          <span>{{ props.helperText }}</span>
        </slot>
      </div>
      <div
        v-if="props.showCharCount"
        class="spr-ml-auto spr-body-2xs-regular spr-text-right spr-text-xs spr-text-color-supporting"
      >
        {{ model?.toString().length ?? 0 }}{{ props.maxLength ? '/' + props.maxLength : '' }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { Icon } from '@iconify/vue'
import type { InputProps, InputEmits } from './input.types'
import { getInputClasses } from './input.styles'

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  disabled: false,
  readonly: false,
  error: false,
  showCharCount: false,
  showHelper: false,
})

const emit = defineEmits<InputEmits>()

defineSlots<{
  prefix(props: {}): any
  trailing(props: {}): any
  icon(props: {}): any
  helperMessage(props: {}): any
}>()

const model = defineModel<string | number>({ default: '' })

const slots = useSlots()

const classes = computed(() =>
  getInputClasses({
    disabled: props.disabled,
    readonly: props.readonly,
    error: props.error,
    hasPrefix: !!slots.prefix,
    hasTrailing: !!slots.trailing,
    hasIcon: !!slots.icon,
  }),
)

function onIconClick(evt: MouseEvent) {
  if (props.disabled) {
    evt.preventDefault()
    evt.stopPropagation()
  }
}
</script>

<style scoped>
.number-input::-webkit-outer-spin-button,
.number-input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
}

.number-input {
  -moz-appearance: textfield;
}
</style>
