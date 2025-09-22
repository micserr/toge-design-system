import { ref, toRefs, computed, type ComputedRef, watch, onMounted, type SetupContext } from 'vue';
import { useVModel } from '@vueuse/core';
import classNames from 'classnames';
import { CURRENCY_OPTIONS, type InputCurrencyPropTypes, type InputCurrencyEmitTypes } from './input-currency';

interface InputCurrencyClasses {
  countrySelectClasses: string;
  currencySymbolClasses: string;
}

export const useInputCurrency = (props: InputCurrencyPropTypes, emit: SetupContext<InputCurrencyEmitTypes>['emit']) => {
  const { preSelectedCurrency, disabledCountryCurrency, disabled, autoFormat, maxDecimals, minDecimals } =
    toRefs(props);

  const inputCurrencyClasses: ComputedRef<InputCurrencyClasses> = computed(() => {
    const baseInteractive = disabled.value
      ? 'spr-cursor-not-allowed'
      : disabledCountryCurrency.value
        ? 'spr-cursor-default'
        : 'spr-cursor-pointer';
    return {
      countrySelectClasses: classNames(
        'spr-font-weight-regular spr-font-size-200 spr-line-height-500 spr-letter-spacing-none spr-font-main',
        'spr-flex spr-items-center spr-gap-size-spacing-5xs',
        baseInteractive,
      ),
      currencySymbolClasses: 'spr-font-weight-regular spr-font-size-200 spr-line-height-500 spr-font-main',
    };
  });

  const modelValue = useVModel(props, 'modelValue', emit);
  const popperState = ref(false);

  const initCurrency = () => {
    const fallback = CURRENCY_OPTIONS.find((c) => c.value === 'USD') || CURRENCY_OPTIONS[0];
    return CURRENCY_OPTIONS.find((c) => c.value === preSelectedCurrency.value) || fallback;
  };

  const selected = ref(initCurrency());

  // Internal numeric representation (without formatting separators)
  const numericValue = computed<number | null>(() => {
    if (!modelValue.value) return null;

    const cleaned = String(modelValue.value).replace(/,/g, '');
    const parsed = Number(cleaned);

    return isNaN(parsed) ? null : parsed;
  });

  const formatDisplay = (raw: string): string => {
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

  const applyMinFractionDigits = (val: string): string => {
    if (val === '') return '';

    const [i, f = ''] = val.split('.');

    if (minDecimals.value === 0) return val;

    const padded = f.padEnd(minDecimals.value, '0');

    return `${i}.${padded.slice(0, Math.max(minDecimals.value, f.length))}`;
  };

  const handleCurrencyInput = (event: InputEvent) => {
    const inputEl = event.target as HTMLInputElement;

    let value = inputEl.value;

    value = value.replace(/\s+/g, ''); // remove spaces
    value = value.replace(/[^0-9.]/g, ''); // allow only digits & dot

    const firstDot = value.indexOf('.');

    if (firstDot !== -1) {
      value = value.slice(0, firstDot + 1) + value.slice(firstDot + 1).replace(/\./g, '');
    }

    // Limit fractional digits during typing
    if (maxDecimals.value >= 0 && value.includes('.')) {
      const [i, f] = value.split('.');
      value = `${i}.${f.slice(0, maxDecimals.value)}`;
    }

    // Update without formatting first to keep caret predictable
    modelValue.value = value;

    emit('getCurrencyErrors', []);
  };

  const handleBlur = () => {
    if (!modelValue.value) return;

    let out = modelValue.value;

    out = applyMinFractionDigits(out);
    out = formatDisplay(out);
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

    const found = CURRENCY_OPTIONS.find((c) => c.value === currencyCode);

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

  watch(preSelectedCurrency, (code) => {
    if (code) handleSelectedCurrency(code);
  });

  onMounted(() => {
    handleSelectedCurrency(preSelectedCurrency.value);
    if (modelValue.value) {
      modelValue.value = formatDisplay(applyMinFractionDigits(modelValue.value));

      if (numericValue.value !== null) emit('getNumericValue', numericValue.value);
    }
  });

  const displayToken = computed(() => (props.displayAsCode ? selected.value.currency : selected.value.symbol));

  return {
    inputCurrencyClasses,
    modelValue,
    selected,
    popperState,
    displayToken,
    handleCurrencyInput,
    handleBlur,
    handleSelectedCurrency,
    handlePopperState,
    formatDisplay,
  };
};
