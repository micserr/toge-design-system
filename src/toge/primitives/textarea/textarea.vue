<template>
  <div :class="classes.wrapperClasses">
    <label
      v-if="props.label || props.supportingLabel"
      :for="props.id"
      :class="classes.labelClasses"
    >
      <span v-if="props.label">{{ props.label }}</span>
      <span v-if="props.supportingLabel" :class="classes.supportingLabelClasses">
        {{ props.supportingLabel }}
      </span>
    </label>

    <textarea
      v-bind="$attrs"
      :id="props.id"
      :class="classes.textAreaClasses"
      :rows="props.rows"
      :placeholder="props.placeholder"
      :value="model"
      :minlength="props.minLength"
      :maxlength="props.maxLength"
      :readonly="props.readonly"
      :disabled="props.disabled"
      :aria-disabled="props.disabled || undefined"
      :aria-invalid="props.error || undefined"
      @input="onInput"
      @change="(evt) => emit('change', evt)"
      @blur="(evt) => emit('blur', evt)"
      @focus="(evt) => emit('focus', evt)"
    ></textarea>

    <div :class="classes.slotWrapperClasses">
      <div v-if="props.displayHelper" :class="classes.helperClasses">
        <slot name="helperMessage">
          <Icon
            v-if="props.helperIcon"
            class="spr-h-5 spr-min-h-5 spr-w-5 spr-min-w-5"
            :icon="props.helperIcon"
            width="20px"
            height="20px"
          />
          <span>{{ props.helperText }}</span>
        </slot>
      </div>

      <div v-if="props.hasCounter && props.maxLength" :class="classes.helperClasses">
        <slot name="counter">
          <span>{{ `${model.length}/${props.maxLength}` }}</span>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { TextareaProps, TextareaEmits } from './textarea.types'
import { getTextareaClasses } from './textarea.styles'

const props = withDefaults(defineProps<TextareaProps>(), {
  id: undefined,
  label: undefined,
  supportingLabel: undefined,
  placeholder: undefined,
  disabled: false,
  readonly: false,
  error: false,
  rows: 4,
  minLength: undefined,
  maxLength: undefined,
  hasCounter: false,
  displayHelper: false,
  helperIcon: undefined,
  helperText: undefined,
})

const emit = defineEmits<TextareaEmits>()

defineSlots<{
  helperMessage(props: {}): any
  counter(props: {}): any
}>()

const model = defineModel<string>({ default: '' })

const classes = computed(() =>
  getTextareaClasses({
    error: props.error,
    disabled: props.disabled,
    readonly: props.readonly,
    displayHelper: props.displayHelper,
    hasCounter: props.hasCounter,
  }),
)

function onInput(evt: Event) {
  model.value = (evt.target as HTMLTextAreaElement).value
}
</script>
