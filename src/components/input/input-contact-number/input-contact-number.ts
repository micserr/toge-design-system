import type { ExtractPropTypes } from 'vue';

import { getCountries, getCountryCallingCode } from 'libphonenumber-js';
import { countries } from 'countries-list';

// Text and value in CCA2 country code
export interface CountryOption {
  text: string;
  value: string;
  countryCode: string;
}

// List of countries with their CCA2 country code
export const COUNTRY_OPTIONS: CountryOption[] = getCountries().map((countryCode) => {
  const countryName = countries[countryCode] ? countries[countryCode].name : countryCode;
  const countryCallingCode = getCountryCallingCode(countryCode);

  return {
    text: `${countryName} (+${countryCallingCode})`,
    value: countryCallingCode,
    countryCode: countryCode,
  };
});

export const inputContactNumberPropTypes = {
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: 'Enter Phone Number',
  },
};

export const inputContactNumberEmitTypes = {
  'update:modelValue': (value: string): value is string => typeof value === 'string',
  getSelectedCountryCallingCode: (value: string): value is string => typeof value === 'string',
  getContactNumberErrors: (value: Array<{ title: string; message: string }>) => {
    return (
      Array.isArray(value) &&
      value.every(
        (item) =>
          item !== null &&
          typeof item === 'object' &&
          typeof item.title === 'string' &&
          typeof item.message === 'string',
      )
    );
  },
};

export type InputContactNumberEmitTypes = ExtractPropTypes<typeof inputContactNumberEmitTypes>;
export type InputContactNumberPropTypes = ExtractPropTypes<typeof inputContactNumberPropTypes>;
