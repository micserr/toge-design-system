<template>
  <label :class="checkboxClasses.baseClasses">
    <div class="spr-relative spr-flex spr-items-center">
      <input
        type="checkbox"
        :class="checkboxClasses.inputCheckboxClasses"
        :disabled="props.disabled"
        :checked="props.modelValue || props.checked"
        @change="handleCheckbox"
      />
      <span :class="checkboxClasses.inputCheckboxCheckIconClasses">
        <Icon icon="ph:check-bold" />
      </span>
    </div>
    <div v-if="props.label || props.description" class="spr-grid spr-gap-0.5">
      <span v-if="props.label" :class="checkboxClasses.labelClasses">
        {{ props.label }}
      </span>
      <span v-if="props.description" :class="checkboxClasses.descriptionClasses">
        {{ props.description }}
      </span>
    </div>
  </label>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

import { checkboxPropTypes, checkboxEmitTypes } from './checkbox';
import { useCheckbox } from './use-checkbox';

const props = defineProps(checkboxPropTypes);
const emit = defineEmits(checkboxEmitTypes);

const { checkboxClasses, handleCheckbox } = useCheckbox(props, emit);
</script>
