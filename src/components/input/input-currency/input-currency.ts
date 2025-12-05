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
  displayAsSymbol: {
    type: Boolean,
    default: false,
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
  getNumericValue: (value: number): value is number => typeof value === 'number' && !isNaN(value),
  getCurrencyValue: (value: string): value is string => typeof value === 'string',
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
  (event: 'getNumericValue', value: number): void;
  (event: 'getCurrencyValue', value: string): void;
}

export type InputCurrencyPropTypes = ExtractPropTypes<typeof inputCurrencyPropTypes>;
export type InputCurrencyEmitTypes = typeof inputCurrencyEmitTypes;
