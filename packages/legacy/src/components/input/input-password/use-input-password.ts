import { ref, computed } from 'vue';

export const useInputPassword = () => {
  const showPassword = ref(false);

  const evaluateEyeIcon = computed(() => {
    return showPassword.value ? 'ph:eye' : 'ph:eye-closed';
  });

  const evaluatePasswordInputType = computed(() => {
    return showPassword.value ? 'text' : 'password';
  });

  return {
    showPassword,
    evaluateEyeIcon,
    evaluatePasswordInputType,
  };
};
