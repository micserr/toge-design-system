import { ref, SetupContext } from 'vue';
import { CountryOption, type InputContactNumberEmitTypes, type InputContactNumberPropTypes } from './input-contact-number';
import parsePhoneNumber, { CountryCode } from 'libphonenumber-js'
import { useVModel } from '@vueuse/core'

export const useInputContactNumber = (
  props: InputContactNumberPropTypes,
  emit: SetupContext<InputContactNumberEmitTypes>['emit'],
) => {
  const formattedValue = useVModel(props, 'modelValue', emit);

  // const formattedValue = ref('');
  const selectedCountry = ref<string[]>(['PH']); // Default to Philippines

  const handleSelectedCountries = (item: CountryOption) => {
    // Set the selected country
    selectedCountry.value[0] = item.value;

    if (!formattedValue.value) return;
    let newPhoneNumber = formattedValue.value;

    // Remove the country code if the value has formatted value
    if(formattedValue.value !== '') { 
      newPhoneNumber = newPhoneNumber.substring(formattedValue.value.indexOf(" ")); 
    }
  
    // Parse the phone number
    const phoneNumber = parsePhoneNumber(newPhoneNumber, { defaultCountry: selectedCountry.value[0] as CountryCode });
    // Format the phone number
    if (phoneNumber) {
      formattedValue.value = phoneNumber.formatInternational();
    }
  };
  
  const handleOnBlur = () => {
    if (!formattedValue.value) return;
  
    const phoneNumber = parsePhoneNumber(formattedValue.value, { defaultCountry: selectedCountry.value[0] as CountryCode, extract: false});
    if (phoneNumber) {
        formattedValue.value = phoneNumber.formatInternational();
    } else {
      formattedValue.value = '';
    }
  };

  const handleUpdateModelValue = (value: string) => {
    emit('update:modelValue', value);
  };

  return {
    formattedValue,
    handleSelectedCountries,
    selectedCountry,
    handleOnBlur,
    handleUpdateModelValue,
  };
}; 
