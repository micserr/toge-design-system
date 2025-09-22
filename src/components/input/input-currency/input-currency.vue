<template>
  <spr-input
    v-bind="$attrs"
    v-model="modelValue"
    type="text"
    :placeholder="props.placeholder"
    :active="popperState"
    :disabled="props.disabled"
    @input="handleCurrencyInput"
    @blur="handleBlur"
  >
    <template #prefix>
      <spr-dropdown
        id="input-currency-dropdown"
        v-model="selected.value"
        class="[&>#dropdown-wrapper]:spr-my-1"
        :menu-list="CURRENCY_OPTIONS"
        placement="bottom-start"
        :width="!props.disabledCountryCurrency ? '45px' : '35px'"
        popper-width="300px"
        :disabled="props.disabled || props.disabledCountryCurrency"
        @update:model-value="handleSelectedCurrency"
        @get-popper-state="handlePopperState"
      >
        <span :class="inputCurrencyClasses.countrySelectClasses">
          {{ displayToken }}
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
import { CURRENCY_OPTIONS, inputCurrencyPropTypes, inputCurrencyEmitTypes } from './input-currency';

const props = defineProps(inputCurrencyPropTypes);
const emit = defineEmits(inputCurrencyEmitTypes);

const {
  inputCurrencyClasses,
  modelValue,
  selected,
  displayToken,
  popperState,
  handleCurrencyInput,
  handleBlur,
  handleSelectedCurrency,
  handlePopperState,
} = useInputCurrency(props, emit);
</script>
