import { ref, toRefs, computed, ComputedRef, watch, onMounted, SetupContext } from 'vue';
import { useVModel } from '@vueuse/core';

import classNames from 'classnames';

import parsePhoneNumber, { getCountries, getCountryCallingCode, CountryCode } from 'libphonenumber-js';

import { type InputContactNumberEmitTypes, type InputContactNumberPropTypes } from './input-contact-number';

interface InputContactNumberClasses {
  countryCallingCodeClasses: string;
}

export const useInputContactNumber = (
  props: InputContactNumberPropTypes,
  emit: SetupContext<InputContactNumberEmitTypes>['emit'],
) => {
  const { preSelectedCountryCode, disabledCountryCallingCode, disabled } = toRefs(props);

  const inputContactNumberClasses: ComputedRef<InputContactNumberClasses> = computed(() => {
    const countryCallingCodeClasses = classNames(
      'spr-font-weight-regular spr-font-size-200 spr-line-height-500 spr-letter-spacing-none spr-font-main',
      'spr-flex spr-items-center spr-gap-size-spacing-5xs',
      {
        'spr-cursor-not-allowed': disabled.value,
        'spr-cursor-default': disabledCountryCallingCode.value && !disabled.value,
        'spr-cursor-pointer': !disabledCountryCallingCode.value && !disabled.value,
      },
    );

    return {
      countryCallingCodeClasses,
    };
  });

  const formattedValue = useVModel(props, 'modelValue', emit);

  const selectedCountry = ref({
    countryCode: ['PH'],
    countryCallingCode: ['63'],
  });

  const popperState = ref(false);

  const setselectedCountry = (selectedCountryCode: string) => {
    const countryCallingCode = getCountryCallingCode(selectedCountryCode as CountryCode);

    const countryCode = getCountries().find((country) => {
      return getCountryCallingCode(country) === String(countryCallingCode) && country === selectedCountryCode;
    });

    if (countryCode && countryCallingCode) {
      selectedCountry.value = {
        countryCode: [countryCode],
        countryCallingCode: [countryCallingCode],
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
      formatContactNumber();
    }
  };

  const handleSelectedCountryCode = (countryCode: string[]) => {
    selectedCountry.value = {
      countryCode: [countryCode[0]],
      countryCallingCode: [getCountryCallingCode(countryCode[0] as CountryCode)],
    };

    emit('getContactNumberErrors', []);

    formatContactNumber();

    emit('getSelectedCountryCallingCode', {
      countryCode: selectedCountry.value.countryCode[0],
      countryCallingCode: selectedCountry.value.countryCallingCode[0],
    });
  };

  const formatContactNumber = () => {
    if (!formattedValue.value) return;

    const normalizedNumber = formattedValue.value.replace(/\D/g, '');

    const phoneNumber = parsePhoneNumber(normalizedNumber, {
      defaultCountry: selectedCountry.value.countryCode[0] as CountryCode,
      extract: false,
    });

    if (phoneNumber && phoneNumber.isValid()) {
      let formattedNumber = phoneNumber.formatInternational();

      formattedNumber = formattedNumber.replace(`+${selectedCountry.value.countryCallingCode[0]} `, '');

      formattedValue.value = formattedNumber;
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
      setselectedCountry(newValue);
    }
  });

  onMounted(() => {
    emit('getSelectedCountryCallingCode', {
      countryCode: selectedCountry.value.countryCode[0],
      countryCallingCode: selectedCountry.value.countryCallingCode[0],
    });

    if (preSelectedCountryCode.value) {
      setselectedCountry(preSelectedCountryCode.value);
    }
  });

  return {
    inputContactNumberClasses,
    formattedValue,
    selectedCountry,
    popperState,
    handleContactNumberInput,
    handleSelectedCountryCode,
    formatContactNumber,
    handleUpdateModelValue,
    handlePopperState,
  };
};
