<template>
  <div :class="textareaClasses.wrapperClasses">
    <label v-if="label" :for="id" :class="textareaClasses.labelClasses">{{ label }}</label>
    <textarea
      :class="textareaClasses.textAreaClasses"
      v-bind="$attrs"
      :rows="rows"
      :placeholder="placeholder"
      :value="modelValue"
      :minlength="props.minLength"
      :maxlength="props.maxLength"
      :readonly="readonly"
      :disabled="props.disabled"
      @input="onInput"
    ></textarea>
    <div v-if="props.displayHelper" :class="textareaClasses.helperClasses">
      <slot name="helperMessage">
        <Icon v-if="props.helperIcon" :icon="props.helperIcon" width="20px" height="20px" />
        <span>{{ props.helperText }}</span>
      </slot>
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
