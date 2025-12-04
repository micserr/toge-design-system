<template>
  <spr-input
    v-model="formattedValue"
    v-bind="$attrs"
    type="contact-number"
    :placeholder="props.placeholder"
    :active="popperState"
    :disabled="props.disabled"
    :display-helper="props.displayHelper"
    :helper-text="props.helperText"
    :helper-icon="props.helperIcon"
    :error="props.error"
    @keyup="handleContactNumberInput"
    @blur="formatContactNumber"
    @update:model-value="handleUpdateModelValue"
  >
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>

    <template #prefix>
      <spr-dropdown
        :id="dropdownId"
        v-model="selectedCountry.countryCode"
        :class="inputContactNumberClasses.dropdownBaseClasses"
        :menu-list="COUNTRY_OPTIONS"
        placement="bottom-start"
        :width="!props.disabledCountryCallingCode ? '45px' : '35px'"
        popper-width="330px"
        :disabled="props.disabled || props.disabledCountryCallingCode"
        @update:model-value="handleSelectedCountryCode"
        @get-popper-state="handlePopperState"
      >
        <div :class="inputContactNumberClasses.dropdownWrappertClasses">
          <span>+{{ selectedCountry.countryCallingCode }}</span>
          <icon v-if="!props.disabledCountryCallingCode" icon="ph:caret-down" width="16px" height="16px" />
        </div>
      </spr-dropdown>
    </template>
  </spr-input>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

import SprInput from '@/components/input/input.vue';
import SprDropdown from '@/components/dropdown/dropdown.vue';

import { useInputContactNumber } from './use-input-contact-number';
import { COUNTRY_OPTIONS, inputContactNumberPropTypes, inputContactNumberEmitTypes } from './input-contact-number';

const props = defineProps(inputContactNumberPropTypes);
const emit = defineEmits(inputContactNumberEmitTypes);

const {
  inputContactNumberClasses,
  dropdownId,
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
