import type { ExtractPropTypes } from 'vue';

export interface CurrencyOption {
  text: string;
  value: string;
  currency: string;
  symbol: string;
}

export const inputCurrencyPropTypes = {
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
    default: '0.00',
  },
  preSelectedCurrency: {
    type: String,
    default: 'PHP',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  disabledCountryCurrency: {
    type: Boolean,
    default: false,
  },
  autoFormat: {
    type: Boolean,
    default: false,
  },
  maxDecimals: {
    type: Number,
    default: 2,
  },
  minDecimals: {
    type: Number,
    default: 2,
  },
  displayAsCode: {
    type: Boolean,
    default: true,
  },
  disableRounding: {
    type: Boolean,
    default: false,
  },
};

export const inputCurrencyEmitTypes = {
  'update:modelValue': (value: string): value is string => typeof value === 'string',
  getSelectedCurrencyMeta: (value: {
    currency: string;
    symbol: string;
    numericValue: number | null;
    rawValue: string | null;
  }): value is { currency: string; symbol: string; numericValue: number | null; rawValue: string | null } =>
    typeof value.currency === 'string' &&
    typeof value.symbol === 'string' &&
    (value.numericValue === null || (typeof value.numericValue === 'number' && !isNaN(value.numericValue))) &&
    (value.rawValue === null || typeof value.rawValue === 'string'),
  getCurrencyErrors: (value: Array<{ title: string; message: string }>) => {
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
  getNumericValue: (value: number): value is number => typeof value === 'number' && !isNaN(value),
};

export interface InputCurrencyEmit {
  (event: 'update:modelValue', value: string): void;
  (
    event: 'getSelectedCurrencyMeta',
    value: {
      currency: string;
      symbol: string;
      numericValue: number | null;
      rawValue: string | null;
    },
  ): void;
  (event: 'getCurrencyErrors', value: Array<{ title: string; message: string }>): void;
  (event: 'getNumericValue', value: number): void;
}

export type InputCurrencyPropTypes = ExtractPropTypes<typeof inputCurrencyPropTypes>;
export type InputCurrencyEmitTypes = typeof inputCurrencyEmitTypes;
