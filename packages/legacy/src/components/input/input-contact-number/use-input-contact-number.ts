import { ref, toRefs, computed, ComputedRef, watch, onMounted, SetupContext } from 'vue';
import { useVModel } from '@vueuse/core';

import classNames from 'classnames';

import parsePhoneNumber, { getCountries, getCountryCallingCode, CountryCode } from 'libphonenumber-js';

import { type InputContactNumberEmitTypes, type InputContactNumberPropTypes } from './input-contact-number';

interface InputContactNumberClasses {
  dropdownBaseClasses: string;
  dropdownWrappertClasses: string;
}

export const useInputContactNumber = (
  props: InputContactNumberPropTypes,
  emit: SetupContext<InputContactNumberEmitTypes>['emit'],
) => {
  const { id, preSelectedCountryCode, disabledCountryCallingCode, disabled } = toRefs(props);

  const inputContactNumberClasses: ComputedRef<InputContactNumberClasses> = computed(() => {
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
        'spr-cursor-default': disabledCountryCallingCode.value && !disabled.value,
        'spr-cursor-pointer': !disabledCountryCallingCode.value && !disabled.value,
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

  const formattedValue = useVModel(props, 'modelValue', emit);

  const selectedCountry = ref({
    countryCode: 'PH',
    countryCallingCode: '63',
  });

  const popperState = ref(false);

  const setSelectedCountry = (selectedCountryCode: string) => {
    const countryCallingCode = getCountryCallingCode(selectedCountryCode as CountryCode);

    const countryCode = getCountries().find((country) => {
      return getCountryCallingCode(country) === String(countryCallingCode) && country === selectedCountryCode;
    });

    if (countryCode && countryCallingCode) {
      selectedCountry.value = {
        countryCode: countryCode,
        countryCallingCode: countryCallingCode,
      };

      formatContactNumber();

      emit('getSelectedCountryCallingCode', {
        countryCode: countryCode,
        countryCallingCode: countryCallingCode,
      });
    } else {
      console.error(`No valid country found for the code: ${selectedCountryCode}`);
    }
  };

  const handleContactNumberInput = (event: InputEvent) => {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (!/^[+]?\d*[\d\s-]*$/.test(value)) {
      input.value = value.replace(/[^0-9+\s-]/g, '');
    }

    emit('getContactNumberErrors', []);

    if (value.length > 0) {
      // Try to parse the number as user types
      const original = value.trim();
      const hasPlus = original.startsWith('+');
      const normalizedNumber = hasPlus ? `+${original.replace(/[^0-9]/g, '')}` : original.replace(/\D/g, '');

      let phoneNumber;

      try {
        phoneNumber = hasPlus
          ? parsePhoneNumber(normalizedNumber)
          : parsePhoneNumber(normalizedNumber, {
              defaultCountry: selectedCountry.value.countryCode as CountryCode,
              extract: false,
            });
      } catch {
        phoneNumber = undefined;
      }

      // Emit parsed number even if incomplete, if it was parsed
      if (phoneNumber && phoneNumber.isValid()) {
        emit('getParsedInternationalNumber', phoneNumber.formatInternational());
      } else if (normalizedNumber) {
        // For incomplete numbers, emit what we have in international format prefix
        const prefix = `+${selectedCountry.value.countryCallingCode}`;
        emit('getParsedInternationalNumber', `${prefix} ${value.replace(/[^0-9]/g, '')}`);
      }

      formatContactNumber();
    } else {
      // Emit empty string when input is cleared
      emit('getParsedInternationalNumber', '');
    }
  };

  const handleSelectedCountryCode = (countryCode: string) => {
    selectedCountry.value = {
      countryCode: countryCode,
      countryCallingCode: getCountryCallingCode(countryCode as CountryCode),
    };

    emit('getContactNumberErrors', []);

    formatContactNumber();

    emit('getSelectedCountryCallingCode', {
      countryCode: selectedCountry.value.countryCode,
      countryCallingCode: selectedCountry.value.countryCallingCode,
    });

    // Emit parsed number with new country code if there's a value
    if (formattedValue.value) {
      const original = formattedValue.value.trim();
      const normalizedNumber = original.replace(/\D/g, '');

      let phoneNumber;

      try {
        phoneNumber = parsePhoneNumber(normalizedNumber, {
          defaultCountry: selectedCountry.value.countryCode as CountryCode,
          extract: false,
        });
      } catch {
        phoneNumber = undefined;
      }

      if (phoneNumber && phoneNumber.isValid()) {
        emit('getParsedInternationalNumber', phoneNumber.formatInternational().replace(/\s/g, ''));
      } else if (normalizedNumber) {
        const prefix = `+${selectedCountry.value.countryCallingCode}`;
        emit('getParsedInternationalNumber', `${prefix}${normalizedNumber}`);
      }
    }
  };

  const formatContactNumber = () => {
    if (!formattedValue.value) {
      emit('getContactNumberErrors', []);
      return;
    }

    const original = formattedValue.value.trim();
    const hasPlus = original.startsWith('+');
    const normalizedNumber = hasPlus ? `+${original.replace(/[^0-9]/g, '')}` : original.replace(/\D/g, '');

    let phoneNumber;

    try {
      phoneNumber = hasPlus
        ? parsePhoneNumber(normalizedNumber)
        : parsePhoneNumber(normalizedNumber, {
            defaultCountry: selectedCountry.value.countryCode as CountryCode,
            extract: false,
          });
    } catch {
      phoneNumber = undefined;
    }

    if (phoneNumber && phoneNumber.isValid()) {
      let formattedNumber = phoneNumber.formatInternational();

      const prefix = `+${selectedCountry.value.countryCallingCode} `;

      if (formattedNumber.startsWith(prefix)) {
        formattedNumber = formattedNumber.slice(prefix.length);
      }

      formattedValue.value = formattedNumber;

      emit('getContactNumberErrors', []);
      emit('getParsedInternationalNumber', phoneNumber.formatInternational());
    } else {
      emit('getContactNumberErrors', [
        {
          title: 'Invalid Contact Number',
          message: 'Must be a valid contact number',
        },
      ]);
    }
  };

  const handleUpdateModelValue = (value: string) => {
    emit('update:modelValue', value);
  };

  const handlePopperState = (state: boolean) => {
    popperState.value = state;
  };

  watch(preSelectedCountryCode, (newValue) => {
    if (newValue) {
      setSelectedCountry(newValue);
    }
  });

  onMounted(() => {
    emit('getSelectedCountryCallingCode', {
      countryCode: selectedCountry.value.countryCode,
      countryCallingCode: selectedCountry.value.countryCallingCode,
    });

    if (preSelectedCountryCode.value) {
      setSelectedCountry(preSelectedCountryCode.value);
    }
  });

  return {
    inputContactNumberClasses,
    dropdownId,
    formattedValue,
    selectedCountry,
    popperState,
    handleContactNumberInput,
    handleSelectedCountryCode,
    formatContactNumber,
    handleUpdateModelValue,
    handlePopperState,
    setSelectedCountry,
  };
};
