import { ref, toRefs, computed, type ComputedRef, watch, onMounted, type SetupContext } from 'vue';
import { useVModel } from '@vueuse/core';
import classNames from 'classnames';
import { CURRENCY_OPTIONS, type InputCurrencyPropTypes, type InputCurrencyEmitTypes } from './input-currency';

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

  const initCurrency = () => {
    const fallback = CURRENCY_OPTIONS.find((c) => c.value === 'USD') || CURRENCY_OPTIONS[0];
    return CURRENCY_OPTIONS.find((c) => c.value === preSelectedCurrency.value) || fallback;
  };

  const selected = ref(initCurrency());

  // Numeric representation (removing grouping separators) to emit numeric value
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
    out = formatDisplay(out); // Only format with grouping; no forced decimal padding
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
      modelValue.value = formatDisplay(modelValue.value);

      if (numericValue.value !== null) emit('getNumericValue', numericValue.value);
    }
  });

  const displayToken = computed(() => (props.displayAsCode ? selected.value.currency : selected.value.symbol));

  return {
    inputCurrencyClasses,
    dropdownId,
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
