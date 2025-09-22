<template>
  <spr-input
    v-model="formattedValue"
    v-bind="$attrs"
    type="contact-number"
    :placeholder="props.placeholder"
    :active="popperState"
    :disabled="props.disabled"
    @keyup="handleContactNumberInput"
    @blur="formatContactNumber"
    @update:model-value="handleUpdateModelValue"
  >
    <template #prefix>
      <spr-dropdown
        id="input-contact-number-country-dropdown"
        v-model="selectedCountry.countryCode"
        class="[&>#dropdown-wrapper]:spr-my-1"
        :menu-list="COUNTRY_OPTIONS"
        placement="bottom-start"
        :width="!props.disabledCountryCallingCode ? '45px' : '35px'"
        popper-width="330px"
        :disabled="props.disabled || props.disabledCountryCallingCode"
        @update:model-value="handleSelectedCountryCode"
        @get-popper-state="handlePopperState"
      >
        <span :class="inputContactNumberClasses.countryCallingCodeClasses">
          +{{ selectedCountry.countryCallingCode }}
          <icon v-if="!props.disabledCountryCallingCode" icon="ph:caret-down" width="16px" height="16px" />
        </span>
      </spr-dropdown>
    </template>
  </spr-input>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

import SprInput from '@/components/input/input.vue';
import SprDropdown from '@/components/dropdown/dropdown.vue';

import { useInputContactNumber } from './use-input-contact-number';
import { COUNTRY_OPTIONS } from './input-contact-number';

import { inputContactNumberPropTypes, inputContactNumberEmitTypes } from './input-contact-number';

const props = defineProps(inputContactNumberPropTypes);
const emit = defineEmits(inputContactNumberEmitTypes);

const {
  inputContactNumberClasses,
  formattedValue,
  selectedCountry,
  popperState,
  handleContactNumberInput,
  handleSelectedCountryCode,
  formatContactNumber,
  handleUpdateModelValue,
  handlePopperState,
} = useInputContactNumber(props, emit);
</script>
