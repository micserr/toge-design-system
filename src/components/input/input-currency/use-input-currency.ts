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
  const {
    id,
    preSelectedCurrency,
    disabledCountryCurrency,
    disabled,
    autoFormat,
    maxDecimals,
    minDecimals,
    disableRounding,
  } = toRefs(props);

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

  // Locale mapping per currency (extend as needed). Fallback 'en-US'.
  const currencyLocaleMap: Record<string, string> = {
    EUR: 'de-DE',
    USD: 'en-US',
    GBP: 'en-GB',
    JPY: 'ja-JP',
    PHP: 'en-PH',
    AUD: 'en-AU',
    CAD: 'en-CA',
    CHF: 'de-CH',
  };

  const currentLocale = computed(() => currencyLocaleMap[selected.value.currency] || 'en-US');

  const buildNumberFormat = (minFrac: number, maxFrac: number) =>
    new Intl.NumberFormat(currentLocale.value, {
      style: 'currency',
      currency: selected.value.currency,
      currencyDisplay: 'symbol',
      minimumFractionDigits: minFrac,
      maximumFractionDigits: maxFrac,
    });

  const localeSeparators = computed(() => {
    try {
      const fmt = buildNumberFormat(0, 2);
      const parts = fmt.formatToParts(1234.5);
      const group = parts.find((p) => p.type === 'group')?.value || ',';
      const decimal = parts.find((p) => p.type === 'decimal')?.value || '.';
      return { group, decimal };
    } catch {
      return { group: ',', decimal: '.' };
    }
  });

  // Numeric representation – removes locale grouping & normalizes decimal to '.'
  const numericValue = computed<number | null>(() => {
    if (!modelValue.value) return null;
    const { group, decimal } = localeSeparators.value;
    const escapedGroup = group.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    const escapedDec = decimal.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    let cleaned = String(modelValue.value)
      .replace(new RegExp(escapedGroup, 'g'), '')
      .replace(new RegExp(escapedDec, 'g'), '.');
    cleaned = cleaned.replace(/[^0-9.-]/g, '');
    const parsed = Number(cleaned);
    return isNaN(parsed) ? null : parsed;
  });

  const rawNumericString = computed<string | null>(() => {
    if (!modelValue.value) return null;
    const { group, decimal } = localeSeparators.value;
    const escapedGroup = group.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    const escapedDec = decimal.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    let cleaned = String(modelValue.value)
      .replace(new RegExp(escapedGroup, 'g'), '')
      .replace(new RegExp(escapedDec, 'g'), '.');
    cleaned = cleaned.replace(/[^0-9.-]/g, '');
    return cleaned || null;
  });

  /**
   * Derive the default fraction digits for a currency using Intl metadata.
   * Falls back to 2 when unavailable.
   */
  const getCurrencyFractionDigits = (code: string): number => {
    try {
      const fmt = new Intl.NumberFormat('en', { style: 'currency', currency: code });
      const resolved = fmt.resolvedOptions();
      if (resolved && typeof resolved.minimumFractionDigits === 'number') {
        return resolved.minimumFractionDigits;
      }
    } catch {
      /* ignore */
    }
    return 2;
  };

  const effectiveMinDecimals = computed(() => {
    // Minimum is just the user's minDecimals value
    const userMin = Math.min(Math.max(0, minDecimals.value), 6);
    return Math.min(6, Math.max(0, userMin));
  });

  const effectiveMaxDecimals = computed(() => {
    // Use the user-provided maxDecimals value directly (clamped to 0-6)
    const userMax = Math.min(Math.max(0, maxDecimals.value), 6);
    // Ensure max >= min
    return Math.max(userMax, effectiveMinDecimals.value);
  });

  const formatNumberForBlur = (value: number): string => {
    const fmt = buildNumberFormat(effectiveMinDecimals.value, effectiveMaxDecimals.value);
    // Remove currency symbol from formatted output (component is responsible only for numeric part in input)
    const parts = fmt.formatToParts(value).filter((p) => p.type !== 'currency');
    let result = parts
      .map((p) => p.value)
      .join('')
      .replace(/\s+/g, '');

    // Ensure minimum decimals are enforced by padding if needed
    const { decimal: decimalSep } = localeSeparators.value;
    if (effectiveMinDecimals.value > 0) {
      const [integerPart, decimalPart] = result.split(decimalSep);
      const currentDecimals = decimalPart ? decimalPart.length : 0;

      if (currentDecimals < effectiveMinDecimals.value) {
        // Pad with zeros to meet minimum decimals
        const paddedDecimal = (decimalPart || '').padEnd(effectiveMinDecimals.value, '0');
        result = integerPart + decimalSep + paddedDecimal;
      }
    }

    return result;
  };

  /**
   * Full formatting for blur: grouping + enforce min decimals padding and clamp to max.
   */
  const formatOnBlur = (raw: string): string => {
    if (!raw) return '';

    const cleaned = raw.replace(/[^0-9,.-]/g, '');
    let work = cleaned;
    let sign = '';
    if (work.startsWith('-')) {
      sign = '-';
      work = work.slice(1);
    }
    const lastDot = work.lastIndexOf('.');
    const lastComma = work.lastIndexOf(',');
    const lastSep = Math.max(lastDot, lastComma);
    let intPart: string;
    let fracPart = '';
    if (lastSep !== -1) {
      intPart = work.slice(0, lastSep).replace(/[.,]/g, '');
      fracPart = work.slice(lastSep + 1);
    } else {
      intPart = work.replace(/[.,]/g, '');
    }
    if (!intPart) intPart = '0';

    // Truncate fractional part to max without rounding if disableRounding
    if (fracPart && disableRounding.value) {
      fracPart = fracPart.slice(0, effectiveMaxDecimals.value);
    }

    const canonical = sign + intPart + (fracPart ? '.' + fracPart : '');
    let numeric = Number(canonical);
    if (isNaN(numeric)) return raw;

    if (disableRounding.value && fracPart) {
      // Ensure numeric value is truncated (not rounded) at effectiveMaxDecimals
      const factor = Math.pow(10, effectiveMaxDecimals.value);
      numeric = Math.trunc(numeric * factor) / factor;
    }

    return formatNumberForBlur(numeric);
  };

  const handleCurrencyInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    let raw = target.value;

    // Remove spaces
    raw = raw.replace(/\s+/g, '');

    // Only allow digits and dots (.) as decimal separator
    // Reject commas (,) during typing - they will be added during formatting on blur
    raw = raw.replace(/[^0-9.]/g, '');

    // Handle multiple dots (keep only the last one as decimal separator)
    const lastDot = raw.lastIndexOf('.');
    if (lastDot !== -1) {
      const beforeDecimal = raw.slice(0, lastDot).replace(/\./g, '');
      const afterDecimal = raw.slice(lastDot + 1).replace(/\./g, '');
      raw = beforeDecimal + '.' + afterDecimal;
    }

    // Just update the value without formatting during typing
    // Formatting happens on blur to avoid cursor jumping
    modelValue.value = raw;
    // Emit raw unformatted value (no thousand separators) while typing
    emit('getCurrencyValue', raw);
  };

  const handleBlur = () => {
    // Format only if there is a value
    if (modelValue.value) {
      let out = modelValue.value;

      out = formatOnBlur(out);

      modelValue.value = out;
    }

    // Always emit meta on blur (even if empty -> numericValue/rawValue may be null)
    emit('getSelectedCurrencyMeta', {
      currency: selected.value.currency,
      symbol: selected.value.symbol,
      numericValue: numericValue.value,
      rawValue: rawNumericString.value,
    });

    if (numericValue.value !== null) emit('getNumericValue', numericValue.value);

    // Emit the unformatted numeric value after blur (no thousand separators, but with locale decimal)
    // Use setTimeout to ensure the formatted value is set before emitting
    setTimeout(() => {
      emit('getCurrencyValue', rawNumericString.value || '');
    }, 0);
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
      const previousCurrency = selected.value.currency;

      // Locale-agnostic parse of current input before switching locale to avoid misinterpretation
      let preSwitchNumeric: number | null = null;
      if (modelValue.value) {
        const raw = modelValue.value;
        const cleaned = raw.replace(/[^0-9,.-]/g, '');
        let work = cleaned;
        let sign = '';
        if (work.startsWith('-')) {
          sign = '-';
          work = work.slice(1);
        }
        // Identify last separator (either '.' or ',') as decimal; earlier ones are grouping
        const lastDot = work.lastIndexOf('.');
        const lastComma = work.lastIndexOf(',');
        const lastSep = Math.max(lastDot, lastComma);
        let intPart: string;
        let fracPart = '';
        if (lastSep !== -1) {
          intPart = work.slice(0, lastSep).replace(/[.,]/g, '');
          fracPart = work.slice(lastSep + 1);
        } else {
          intPart = work.replace(/[.,]/g, '');
        }
        const canonical = sign + intPart + (fracPart ? '.' + fracPart : '');
        const parsed = Number(canonical);
        preSwitchNumeric = isNaN(parsed) ? null : parsed;
      }

      selected.value = { ...found };
      emit('getSelectedCurrencyMeta', {
        currency: found.currency,
        symbol: found.symbol,
        numericValue: preSwitchNumeric !== null ? preSwitchNumeric : numericValue.value,
        rawValue: preSwitchNumeric !== null ? String(preSwitchNumeric) : rawNumericString.value,
      });
      // Re-format current input according to new currency fraction rules only if currency actually changed
      if (preSwitchNumeric !== null && previousCurrency !== found.currency) {
        modelValue.value = formatNumberForBlur(preSwitchNumeric);
        emit('getNumericValue', preSwitchNumeric);
      }
    }
  };

  const handlePopperState = (state: boolean) => {
    popperState.value = state;
  };

  const dropdownDisplayText = computed(() => {
    if (props.displayAsSymbol) {
      return selected.value.symbol;
    }
    return props.displayAsCode ? selected.value.currency : selected.value.symbol;
  });

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
    if (modelValue.value && numericValue.value !== null) {
      modelValue.value = formatNumberForBlur(numericValue.value);
      emit('getNumericValue', numericValue.value);
      emit('getCurrencyValue', rawNumericString.value || '');
      emit('getSelectedCurrencyMeta', {
        currency: selected.value.currency,
        symbol: selected.value.symbol,
        numericValue: numericValue.value,
        rawValue: rawNumericString.value,
      });
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
    effectiveMinDecimals,
    effectiveMaxDecimals,
    currentLocale,
    rawNumericString,
  };
};
