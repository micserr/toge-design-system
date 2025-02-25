import { 
  // toRefs, computed, ComputedRef, 
  ref } from 'vue';
// import { useVModel } from '@vueuse/core';

// import classNames from 'classnames';

// import type { SetupContext } from 'vue';
// import { type InputPropTypes, type InputEmitTypes } from '@/components/input/input';

interface InputClasses {
  baseClasses: string;
  labelClasses: string;
  inputTextClasses: string;
  iconSlotClasses: string;
  prefixSlotClasses: string;
  trailingSlotClasses: string;
}

export const useInputPassword = (
) => {
  const showPassword = ref(false);

  const toggleShowPassword = () => {
    showPassword.value = !showPassword.value;
  }

  const evaluateEyeIcon = () => {
    return showPassword.value ? 'ph:eye' : 'ph:eye-closed';
  };

  const evaluatePasswordInputType = () => {
    return showPassword.value ? 'text' : 'password';
  }
  return {
    toggleShowPassword,
    evaluateEyeIcon,
    evaluatePasswordInputType,
  };
};
