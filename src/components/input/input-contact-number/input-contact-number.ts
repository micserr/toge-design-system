import { getCountries } from 'libphonenumber-js'
import type { ExtractPropTypes } from 'vue';

// Text and value in CCA2 country code
export interface CountryOption {
  text: string;
  value: string; 

}

// List of countries with their CCA2 country code
export const COUNTRY_OPTIONS: CountryOption[] = getCountries().map((country) => ({
  text: country,
  value: country,
}));

export const inputContactNumberPropTypes = {
  modelValue: {
    type: String,
    required: true,
  },
};

export const inputContactNumberEmitTypes = {
  'update:modelValue': (value: string): value is string => typeof value === 'string',
};

export type InputContactNumberEmitTypes = { 'update:modelValue': typeof inputContactNumberEmitTypes };
export type InputContactNumberPropTypes = ExtractPropTypes<typeof inputContactNumberPropTypes>;
