import { ref } from 'vue';

import classNames from 'classnames';
export const useInputPassword = () => {

  const iconClasses = classNames(
    'spr-cursor-pointer'
  )
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
    iconClasses,
    toggleShowPassword,
    evaluateEyeIcon,
    evaluatePasswordInputType,
  };
};
