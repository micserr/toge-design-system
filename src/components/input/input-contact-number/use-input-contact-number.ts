import { ref, toRefs, computed, ComputedRef, onMounted, SetupContext } from 'vue';
import { useVModel, useDebounceFn } from '@vueuse/core';

import classNames from 'classnames';

import parsePhoneNumber, { CountryCode } from 'libphonenumber-js';

import {
  CountryOption,
  type InputContactNumberEmitTypes,
  type InputContactNumberPropTypes,
} from './input-contact-number';

interface InputContactNumberClasses {
  countryCallingCodeClasses: string;
}

export const useInputContactNumber = (
  props: InputContactNumberPropTypes,
  emit: SetupContext<InputContactNumberEmitTypes>['emit'],
) => {
  const { disabled } = toRefs(props);

  const inputContactNumberClasses: ComputedRef<InputContactNumberClasses> = computed(() => {
    const countryCallingCodeClasses = classNames(
      'spr-font-weight-regular spr-font-size-200 spr-line-height-500 spr-letter-spacing-none spr-font-main',
      'spr-flex spr-items-center spr-gap-size-spacing-5xs',
      {
        'spr-cursor-not-allowed': disabled.value,
        'spr-cursor-pointer': !disabled.value,
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

  const handleContactNumberInput = (event: InputEvent) => {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (!/^[+]?\d*[\d\s-]*$/.test(value)) {
      input.value = value.replace(/[^0-9+\s-]/g, '');
    }

    emit('getContactNumberErrors', []);

    if (value.length > 0) {
      handleContactNumberInputFormat();
    }
  };

  const handleContactNumberInputFormat = useDebounceFn(() => {
    formatContactNumber();
  }, 500);

  const handleSelectedCountries = (item: CountryOption) => {
    selectedCountry.value = {
      countryCode: [item.countryCode],
      countryCallingCode: [item.value],
    };

    emit('getContactNumberErrors', []);

    formatContactNumber();

    emit('getSelectedCountryCallingCode', selectedCountry.value.countryCallingCode[0]);
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

  onMounted(() => {
    emit('getSelectedCountryCallingCode', selectedCountry.value.countryCallingCode[0]);
  });

  return {
    inputContactNumberClasses,
    formattedValue,
    selectedCountry,
    popperState,
    handleContactNumberInput,
    handleSelectedCountries,
    formatContactNumber,
    handleUpdateModelValue,
    handlePopperState,
  };
};
