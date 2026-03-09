<template>
  <spr-input
    v-bind="$attrs"
    v-model="modelValue"
    type="text"
    :placeholder="props.placeholder"
    :active="popperState"
    :disabled="props.disabled"
    data-testid="input-currency-text"
    @input="handleCurrencyInput"
    @blur="handleBlur"
  >
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>

    <template #prefix>
      <spr-dropdown
        :id="dropdownId"
        v-model="selected.value"
        :class="inputCurrencyClasses.dropdownBaseClasses"
        :menu-list="currencyOptions"
        placement="bottom-start"
        :width="!props.disabledCountryCurrency ? '45px' : '35px'"
        popper-width="300px"
        :disabled="props.disabled || props.disabledCountryCurrency"
        data-testid="input-currency-dropdown"
        @update:model-value="handleSelectedCurrency"
        @get-popper-state="handlePopperState"
      >
        <span :class="inputCurrencyClasses.dropdownWrappertClasses">
          <span>{{ dropdownDisplayText }}</span>
          <icon v-if="!props.disabledCountryCurrency" icon="ph:caret-down" width="16px" height="16px" />
        </span>
      </spr-dropdown>
    </template>
  </spr-input>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

import SprInput from '@/components/input/input.vue';
import SprDropdown from '@/components/dropdown/dropdown.vue';
import { useInputCurrency } from './use-input-currency';
import { inputCurrencyPropTypes, inputCurrencyEmitTypes } from './input-currency';

const props = defineProps(inputCurrencyPropTypes);
const emit = defineEmits(inputCurrencyEmitTypes);

const {
  inputCurrencyClasses,
  dropdownId,
  modelValue,
  currencyOptions,
  selected,
  dropdownDisplayText,
  popperState,
  handleCurrencyInput,
  handleBlur,
  handleSelectedCurrency,
  handlePopperState,
} = useInputCurrency(props, emit);
</script>
