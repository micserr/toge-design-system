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
  const { id, currency, disabledCountryCurrency, disabled, maxDecimals, minDecimals, disableRounding, baseValue } =
    toRefs(props);

  // Normalize currency to uppercase for case-insensitive support
  const normalizedCurrency = computed(() => currency.value.toUpperCase());

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
    // Format the number and get parts
    const parts = fmt.formatToParts(value);

    // Extract only numeric parts (number, decimal, group)
    let result = '';
    for (const part of parts) {
      if (part.type === 'currency') {
        // Skip currency symbol/code
        continue;
      }
      result += part.value;
    }

    return result.trim();
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
    // Emit numeric value while typing (null for empty, parsed value otherwise)
    const parsedNumeric = raw === '' ? null : Number(raw);
    // Only emit if it's a valid number (not NaN) or null
    if (parsedNumeric === null || !isNaN(parsedNumeric)) {
      emit('getCurrencyValue', parsedNumeric);
    }
  };

  const handleBlur = () => {
    // If input is empty and baseValue is provided, use baseValue
    if (!modelValue.value && baseValue && baseValue.value !== undefined) {
      modelValue.value = formatNumberForBlur(baseValue.value);
    } else if (modelValue.value) {
      // Format only if there is a value
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

    // Emit the numeric value after blur (null for empty, numeric value otherwise)
    // Use setTimeout to ensure the formatted value is set before emitting
    setTimeout(() => {
      emit('getCurrencyValue', numericValue.value ?? null);
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
        emit('getCurrencyValue', preSwitchNumeric);
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
    const fallback =
      currencyOptions.find((c) => c.value === 'PHP') ||
      currencyOptions.find((c) => c.value === 'USD') ||
      currencyOptions[0];

    return currencyOptions.find((c) => c.value === normalizedCurrency.value) || fallback;
  };

  const selected = ref(initCurrency());
  // #endregion - Set Currency Options

  watch(normalizedCurrency, (code) => {
    if (code) handleSelectedCurrency(code);
  });

  onMounted(() => {
    handleSelectedCurrency(normalizedCurrency.value);
    if (modelValue.value && numericValue.value !== null) {
      modelValue.value = formatNumberForBlur(numericValue.value);
      emit('getCurrencyValue', numericValue.value);
      emit('getSelectedCurrencyMeta', {
        currency: selected.value.currency,
        symbol: selected.value.symbol,
        numericValue: numericValue.value,
        rawValue: rawNumericString.value,
      });
    } else if (!modelValue.value && baseValue && baseValue.value !== undefined) {
      // If empty on mount and baseValue is provided, use it
      modelValue.value = formatNumberForBlur(baseValue.value);
      emit('getCurrencyValue', baseValue.value);
      emit('getSelectedCurrencyMeta', {
        currency: selected.value.currency,
        symbol: selected.value.symbol,
        numericValue: baseValue.value,
        rawValue: String(baseValue.value),
      });
    } else {
      // Always emit null for empty on mount
      emit('getCurrencyValue', null);
      emit('getSelectedCurrencyMeta', {
        currency: selected.value.currency,
        symbol: selected.value.symbol,
        numericValue: null,
        rawValue: null,
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
