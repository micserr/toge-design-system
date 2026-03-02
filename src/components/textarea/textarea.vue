<template>
  <div :class="textareaClasses.wrapperClasses">
    <label v-if="props.label || props.supportingLabel" :for="props.id" :class="textareaClasses.labelClasses">
      <span v-if="props.label">{{ props.label }}</span>
      <span v-if="props.supportingLabel" :class="textareaClasses.supportingLabelClasses">
        {{ props.supportingLabel }}
      </span>
    </label>

    <textarea
      v-bind="$attrs"
      :id="props.id"
      :class="textareaClasses.textAreaClasses"
      :rows="rows"
      :placeholder="placeholder"
      :value="modelValue"
      :minlength="props.minLength"
      :maxlength="props.maxLength"
      :readonly="readonly"
      :disabled="props.disabled"
      @input="onInput"
    ></textarea>

    <div :class="textareaClasses.slotWrapperClasses">
      <div v-if="props.displayHelper" :class="textareaClasses.helperClasses">
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

      <div v-if="props.hasCounter && props.maxLength" :class="textareaClasses.helperClasses">
        <slot name="counter">
          <span>{{ `${modelValue.length}/${props.maxLength}` }}</span>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

import { textAreaPropTypes, textAreaEmitTypes } from './textarea';
import { useTextArea } from './use-textarea';

const props = defineProps(textAreaPropTypes);
const emit = defineEmits(textAreaEmitTypes);

const { onInput, textareaClasses } = useTextArea(props, emit);
</script>
