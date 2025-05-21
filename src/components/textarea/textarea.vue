<template>
  <div :class="textareaClasses.wrapperClasses">
    <label v-if="label" :for="id" :class="textareaClasses.labelClasses">{{ label }}</label>
    <textarea
      v-bind="$attrs"
      :id="props.id"
      :class="textareaClasses.textAreaClasses"
      :rows="rows"
      :placeholder="placeholder"
      :minlength="props.minLength"
      :maxlength="props.maxLength"
      :readonly="readonly"
      :disabled="props.disabled"
      @input="onInput"
    ></textarea>

    <div :class="textareaClasses.slotWrapperClasses">
      <div v-if="props.displayHelper" :class="textareaClasses.helperClasses">
        <slot name="helperMessage">
          <Icon v-if="props.helperIcon" :icon="props.helperIcon" width="20px" height="20px" />
          <span>{{ props.helperText }}</span>
        </slot>
      </div>

      <div v-if="props.hasCounter && props.maxLength" :class="textareaClasses.helperClasses">
        <slot name="counter">
          <span>{{ `${$attrs.modelValue.length}/${props.maxLength}` }}</span>
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
