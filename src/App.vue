<template>
  <spr-input-contact-number
    v-model="inputValueContactNumber"
    label="Contact Number"
    placeholder="Enter contact number"
    @get-selected-country-calling-code="handleSelectedCountryCallingCode"
    @get-contact-number-errors="handleContactNumberErrors"
  />
  <p>Output: {{ inputValueContactNumber }}</p>
  <p>Selected Country Code: {{ selectedCountryCode }}</p>
  <p>Error: {{ contactNumberErrors }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SprInputContactNumber from '@/components/input/input-contact-number/input-contact-number.vue';

const inputValueContactNumber = ref('');
const selectedCountryCode = ref('');
const contactNumberErrors = ref<{ title: string; message: string }[]>([]);

const handleSelectedCountryCallingCode = (value: string) => {
  selectedCountryCode.value = value;
};

const handleContactNumberErrors = (errors: { title: string; message: string }[]) => {
  contactNumberErrors.value = errors;
};
</script>
