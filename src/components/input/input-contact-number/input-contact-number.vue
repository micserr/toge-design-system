<template>
  <spr-input
    v-model="formattedValue"
    v-bind="attrs"
    type="contact-number"
    :placeholder="props.placeholder"
    :active="popperState"
    @input="handleContactNumberInput"
    @blur="formatContactNumber"
    @update:model-value="handleUpdateModelValue"
  >
    <template #prefix>
      <spr-dropdown
        id="contact-number-country-dropdown"
        v-model="selectedCountry.countryCallingCode"
        class="[&>#dropdown-wrapper]:spr-my-1"
        :menu-list="COUNTRY_OPTIONS"
        placement="bottom-start"
        width="45px"
        popper-width="330px"
        :disabled="isDisabled"
        @get-selected-item="handleSelectedCountries"
        @get-popper-state="handlePopperState"
      >
        <label
          :class="[
            'spr-font-weight-regular spr-font-size-200 spr-line-height-500 spr-letter-spacing-none spr-font-main',
            'spr-flex spr-items-center spr-gap-size-spacing-5xs',
            {
              'spr-cursor-not-allowed': isDisabled,
              'spr-cursor-pointer': !isDisabled,
            },
          ]"
        >
          +{{ selectedCountry.countryCallingCode[0] }}
          <icon icon="ph:caret-down" width="16px" height="16px" />
        </label>
      </spr-dropdown>
    </template>
  </spr-input>
</template>

<script setup lang="ts">
import { ref, useAttrs } from 'vue';

import { Icon } from '@iconify/vue';

import SprInput from '@/components/input/input.vue';
import SprDropdown from '@/components/dropdown/dropdown.vue';

import { useInputContactNumber } from './use-input-contact-number';
import { COUNTRY_OPTIONS } from './input-contact-number';

import { inputContactNumberPropTypes, inputContactNumberEmitTypes } from './input-contact-number';

const props = defineProps(inputContactNumberPropTypes);
const emit = defineEmits(inputContactNumberEmitTypes);

const attrs = useAttrs();
const isDisabled = ref((attrs.disabled as boolean) || attrs.disabled === '');

const {
  formattedValue,
  selectedCountry,
  popperState,
  handleContactNumberInput,
  handleSelectedCountries,
  formatContactNumber,
  handleUpdateModelValue,
  handlePopperState,
} = useInputContactNumber(props, emit);
</script>
