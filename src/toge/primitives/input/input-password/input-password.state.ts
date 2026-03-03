import { ref } from 'vue'

export function useInputPasswordState() {
  const showPassword = ref(false)
  function togglePassword() { showPassword.value = !showPassword.value }
  return { showPassword, togglePassword }
}
