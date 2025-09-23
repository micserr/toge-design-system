import { ref, toRefs, computed, type ComputedRef, watch, onMounted, type SetupContext } from 'vue';
import { useVModel } from '@vueuse/core';

import { countries } from 'countries-list';
import classNames from 'classnames';

import { type InputCurrencyPropTypes, type InputCurrencyEmitTypes, type CurrencyOption } from './input-currency';

interface CountryLike {
  name: string;
  currency: string[] | undefined;
}

interface InputCurrencyClasses {
  dropdownBaseClasses: string;
  dropdownWrappertClasses: string;
}

export const useInputCurrency = (props: InputCurrencyPropTypes, emit: SetupContext<InputCurrencyEmitTypes>['emit']) => {
  const { id, preSelectedCurrency, disabledCountryCurrency, disabled, autoFormat, maxDecimals } = toRefs(props);

  const inputCurrencyClasses: ComputedRef<InputCurrencyClasses> = computed(() => {
    const dropdownBaseClasses = classNames(
      '[&_#dropdown-wrapper]:spr-my-1',
      '[&_#dropdown-wrapper[data-popper-placement="bottom-start"]]:spr-ml-[-10px]',
      '[&_#dropdown-wrapper[data-popper-placement="bottom-start"]]:spr-mt-[6px]',
      '[&_#dropdown-wrapper[data-popper-placement="top-start"]]:spr-ml-[-10px]',
      '[&_#dropdown-wrapper[data-popper-placement="top-start"]]:spr-mt-[-6px]',
    );

    const dropdownWrappertClasses = classNames(
      'spr-font-weight-regular spr-font-size-200 spr-line-height-500 spr-letter-spacing-none spr-font-main',
      'spr-flex spr-items-center spr-gap-size-spacing-5xs',
      {
        'spr-cursor-not-allowed': disabled.value,
        'spr-cursor-default': disabledCountryCurrency.value && !disabled.value,
        'spr-cursor-pointer': !disabledCountryCurrency.value && !disabled.value,
      },
    );

    return {
      dropdownBaseClasses,
      dropdownWrappertClasses,
    };
  });

  // fallback random id if user does not provide one (stable per component instance)
  const fallbackId = ref(`currency-${Math.random().toString(36).slice(2, 8)}-dropdown`);
  const dropdownId = computed(() => (id.value ? `${id.value}-dropdown` : fallbackId.value));

  const modelValue = useVModel(props, 'modelValue', emit);
  const popperState = ref(false);

  // Numeric representation (removing grouping separators) to emit numeric value
  const numericValue = computed<number | null>(() => {
    if (!modelValue.value) return null;

    const cleaned = String(modelValue.value).replace(/,/g, '');
    const parsed = Number(cleaned);

    return isNaN(parsed) ? null : parsed;
  });

  const handleFormatDisplay = (raw: string): string => {
    if (!autoFormat.value) return raw;
    if (!raw) return '';

    const cleaned = raw.replace(/,/g, '');

    if (!/^\d*(\.)?\d*$/.test(cleaned)) return raw; // fallback: user mid-typing

    const parts = cleaned.split('.');
    const intPart = parts[0] || '0';
    const fracPart = parts[1] || '';
    const grouped = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    if (parts.length === 2) {
      return `${grouped}.${fracPart.slice(0, maxDecimals.value)}`;
    }

    return grouped;
  };

  const handleCurrencyInput = (event: InputEvent) => {
    const inputEl = event.target as HTMLInputElement;
    let raw = inputEl.value;

    raw = raw.replace(/\s+/g, '');

    let sign = '';
    if (raw.startsWith('-')) {
      sign = '-';
      raw = raw.slice(1);
    }

    raw = raw.replace(/[^0-9.]/g, '');

    const firstDot = raw.indexOf('.');

    if (firstDot !== -1) {
      raw = raw.slice(0, firstDot + 1) + raw.slice(firstDot + 1).replace(/\./g, '');
    }

    // Do not truncate fractional digits while typing; allow user to input freely.
    if (sign && (raw === '' || raw === '0')) {
      modelValue.value = sign + raw;
    } else {
      modelValue.value = sign + raw;
    }

    emit('getCurrencyErrors', []);
  };

  const handleBlur = () => {
    if (!modelValue.value) return;

    let out = modelValue.value;
    out = handleFormatDisplay(out); // Only format with grouping; no forced decimal padding
    modelValue.value = out;

    if (numericValue.value !== null) emit('getNumericValue', numericValue.value);
  };

  const handleSelectedCurrency = (currencyRaw: unknown) => {
    let currencyCode: string | undefined;

    if (typeof currencyRaw === 'string') {
      currencyCode = currencyRaw;
    } else if (
      currencyRaw &&
      typeof currencyRaw === 'object' &&
      'value' in currencyRaw &&
      typeof (currencyRaw as { value: unknown }).value === 'string'
    ) {
      currencyCode = (currencyRaw as { value: string }).value;
    }

    if (typeof currencyCode !== 'string') {
      return;
    }

    const found = currencyOptions.find((c) => c.value === currencyCode);

    if (found) {
      selected.value = { ...found };
      emit('getSelectedCurrencyMeta', {
        currency: found.currency,
        symbol: found.symbol,
      });
    }
  };

  const handlePopperState = (state: boolean) => {
    popperState.value = state;
  };

  const dropdownDisplayText = computed(() => (props.displayAsCode ? selected.value.currency : selected.value.symbol));

  // #region - Set Currency Options
  // Collect currency codes first so we can derive ambiguity and symbols deterministically.
  const currencyCodesSet = new Set<string>();
  const currencyCodeToName = new Map<string, string>();

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

  // Dynamically detect ambiguous narrow symbols so we fall back to currency code when a symbol represents >1 code.
  const detectAmbiguousSymbols = (codes: string[], locale = 'en'): Set<string> => {
    const symbolToCodes = new Map<string, Set<string>>();
    for (const code of codes) {
      try {
        const parts = new Intl.NumberFormat(locale, {
          style: 'currency',
          currency: code,
          currencyDisplay: 'narrowSymbol',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).formatToParts(1);
        const sym = parts.find((p) => p.type === 'currency')?.value;

        if (!sym) continue;
        if (!symbolToCodes.has(sym)) symbolToCodes.set(sym, new Set());

        symbolToCodes.get(sym)!.add(code);
      } catch {
        // Ignore unsupported currency
      }
    }

    const ambiguous = new Set<string>();

    for (const [sym, set] of symbolToCodes.entries()) {
      if (set.size > 1) ambiguous.add(sym);
    }

    if (ambiguous.size === 0) ['$', '¥', '﷼', 'kr'].forEach((s) => ambiguous.add(s));

    return ambiguous;
  };

  const AMBIGUOUS_SYMBOLS: Set<string> = detectAmbiguousSymbols(Array.from(currencyCodesSet));

  const deriveCurrencySymbol = (code: string, locale = 'en'): string => {
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: code,
      currencyDisplay: 'narrowSymbol',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    const parts = formatter.formatToParts(1);
    const currencyPart = parts.find((p) => p.type === 'currency');

    if (currencyPart && currencyPart.value) {
      return AMBIGUOUS_SYMBOLS.has(currencyPart.value) ? code : currencyPart.value;
    }

    return code;
  };

  let displayNames: { of(code: string): string | undefined } | null = null;

  try {
    const dn = (
      Intl as unknown as { DisplayNames?: new (l: string[], o: { type: string }) => { of(code: string): string } }
    ).DisplayNames;

    if (dn) displayNames = new dn(['en'], { type: 'currency' });
  } catch {
    displayNames = null;
  }

  // Build UNSORTED_CURRENCY_OPTIONS now that we have supporting data & helpers.
  const UNSORTED_CURRENCY_OPTIONS: CurrencyOption[] = Array.from(currencyCodesSet).map((code) => {
    let displayName: string | null | undefined;

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

  const currencyOptions: CurrencyOption[] = [...UNSORTED_CURRENCY_OPTIONS].sort((a, b) =>
    a.text.localeCompare(b.text, 'en', { sensitivity: 'base' }),
  );

  // Initialization of selected currency must occur AFTER currencyOptions is defined.
  const initCurrency = () => {
    const fallback = currencyOptions.find((c) => c.value === 'USD') || currencyOptions[0];

    return currencyOptions.find((c) => c.value === preSelectedCurrency.value) || fallback;
  };

  const selected = ref(initCurrency());
  // #endregion - Set Currency Options

  watch(preSelectedCurrency, (code) => {
    if (code) handleSelectedCurrency(code);
  });

  onMounted(() => {
    handleSelectedCurrency(preSelectedCurrency.value);
    if (modelValue.value) {
      modelValue.value = handleFormatDisplay(modelValue.value);

      if (numericValue.value !== null) emit('getNumericValue', numericValue.value);
    }
  });

  return {
    inputCurrencyClasses,
    dropdownId,
    modelValue,
    currencyOptions,
    selected,
    dropdownDisplayText,
    popperState,
    handleCurrencyInput,
    handleBlur,
    handleSelectedCurrency,
    handlePopperState,
  };
};
