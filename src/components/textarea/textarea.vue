<template>
  <div :class="textareaClasses.wrapperClasses">
    <label v-if="label" :for="id" :class="textareaClasses.labelClasses">{{ label }}</label>
    <textarea
      :class="textareaClasses.textAreaClasses"
      v-bind="$attrs"
      :disabled="disabled"
      :rows="rows"
      :placeholder="placeholder"
      :readonly="readonly"
      @input="onInput"
    ></textarea>
    <div v-if="error" :class="textareaClasses.errorTextClasses">
      <Icon icon="ph:warning-circle-fill" />{{ helperText }}
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
