import type { ExtractPropTypes } from 'vue';

import { countries } from 'countries-list';

// Ambiguous symbols replaced by code for clarity
const AMBIGUOUS_SYMBOLS = new Set(['$', '¥', '﷼', 'kr']);

const deriveCurrencySymbol = (code: string, locale = 'en'): string => {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: code,
    currencyDisplay: 'narrowSymbol',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const f: unknown = formatter;

  if (
    f &&
    typeof f === 'object' &&
    'formatToParts' in f &&
    typeof (f as { formatToParts: (n: number) => Intl.NumberFormatPart[] }).formatToParts === 'function'
  ) {
    const parts = (f as { formatToParts: (n: number) => Intl.NumberFormatPart[] }).formatToParts(1);
    const currencyPart = parts.find((p) => p.type === 'currency');
    if (currencyPart && currencyPart.value) {
      return AMBIGUOUS_SYMBOLS.has(currencyPart.value) ? code : currencyPart.value;
    }
  }

  return code;
};

export interface CurrencyOption {
  text: string;
  value: string;
  currency: string;
  symbol: string;
}

const currencyCodesSet = new Set<string>();
const currencyCodeToName = new Map<string, string>();

interface CountryLike {
  name: string;
  currency: string[] | undefined;
}

Object.values(countries).forEach((country) => {
  const _country = country as CountryLike;
  const codes: string[] = Array.isArray(_country.currency) ? _country.currency : [];

  codes.forEach((code) => {
    currencyCodesSet.add(code);

    if (!currencyCodeToName.has(code)) {
      currencyCodeToName.set(code, _country.name);
    }
  });
});

let displayNames: { of(code: string): string | undefined } | null = null;

try {
  const dn = (
    Intl as unknown as { DisplayNames?: new (l: string[], o: { type: string }) => { of(code: string): string } }
  ).DisplayNames;

  if (dn) displayNames = new dn(['en'], { type: 'currency' });
} catch {
  displayNames = null;
}

const UNSORTED_CURRENCY_OPTIONS: CurrencyOption[] = Array.from(currencyCodesSet).map((code) => {
  let displayName;

  try {
    displayName = displayNames ? displayNames.of(code) : null;
  } catch {
    displayName = null;
  }

  const fallbackName = currencyCodeToName.get(code) || code;
  const name = typeof displayName === 'string' ? displayName : fallbackName;
  const symbol = deriveCurrencySymbol(code);

  return {
    text: `${name} (${code})`,
    value: code,
    currency: code,
    symbol,
  };
});

export const CURRENCY_OPTIONS: CurrencyOption[] = [...UNSORTED_CURRENCY_OPTIONS].sort((a, b) =>
  a.text.localeCompare(b.text, 'en', { sensitivity: 'base' }),
);

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
};

export const inputCurrencyEmitTypes = {
  'update:modelValue': (value: string): value is string => typeof value === 'string',
  getSelectedCurrencyMeta: (value: {
    currency: string;
    symbol: string;
  }): value is { currency: string; symbol: string } =>
    typeof value.currency === 'string' && typeof value.symbol === 'string',
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
  (event: 'getSelectedCurrencyMeta', value: { currency: string; symbol: string }): void;
  (event: 'getCurrencyErrors', value: Array<{ title: string; message: string }>): void;
  (event: 'getNumericValue', value: number): void;
}

export type InputCurrencyPropTypes = ExtractPropTypes<typeof inputCurrencyPropTypes>;
export type InputCurrencyEmitTypes = typeof inputCurrencyEmitTypes;
