import type { ExtractPropTypes } from 'vue';

import { getCountries, getCountryCallingCode } from 'libphonenumber-js';
import { countries } from 'countries-list';

export interface CountryOption {
  text: string;
  value: string;
  countryCode: string;
}

export const COUNTRY_OPTIONS: CountryOption[] = getCountries().map((countryCode) => {
  const country = countries[countryCode as keyof typeof countries];
  const countryName = country ? country.name : countryCode;
  const countryCallingCode = getCountryCallingCode(countryCode);

  return {
    text: `${countryName} (+${countryCallingCode})`,
    value: countryCode,
    countryCode: countryCode,
    countryCallingCode: countryCallingCode,
  };
});

export const inputContactNumberPropTypes = {
  id: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Enter Phone Number',
  },
  preSelectedCountryCode: {
    type: String,
    default: 'PH',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  disabledCountryCallingCode: {
    type: Boolean,
    default: false,
  },
  displayHelper: {
    type: Boolean,
    default: false,
  },
  helperText: {
    type: String,
    default: '',
  },
  helperIcon: {
    type: String,
    default: null,
  },
  error: {
    type: Boolean,
    default: false,
  },
};

export const inputContactNumberEmitTypes = {
  'update:modelValue': (value: string): value is string => typeof value === 'string',
  getSelectedCountryCallingCode: (value: {
    countryCode: string;
    countryCallingCode: string;
  }): value is { countryCode: string; countryCallingCode: string } =>
    typeof value.countryCode === 'string' && typeof value.countryCallingCode === 'string',
  getParsedInternationalNumber: (value: string): value is string => typeof value === 'string',
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

export interface InputContactNumberEmit {
  (event: 'update:modelValue', value: string): void;
  (event: 'getSelectedCountryCallingCode', value: { countryCode: string; countryCallingCode: string }): void;
  (event: 'getContactNumberErrors', value: Array<{ title: string; message: string }>): void;
}

export type InputContactNumberPropTypes = ExtractPropTypes<typeof inputContactNumberPropTypes>;
export type InputContactNumberEmitTypes = typeof inputContactNumberEmitTypes;
