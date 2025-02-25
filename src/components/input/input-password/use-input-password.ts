import { ref } from 'vue';

export const useInputPassword = () => {

  const iconClasses = (
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
