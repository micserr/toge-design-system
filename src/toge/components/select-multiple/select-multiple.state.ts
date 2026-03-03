import { ref } from 'vue'

export function useSelectMultipleState() {
  const isOpen = ref(false)
  const searchQuery = ref('')

  return { isOpen, searchQuery }
}
