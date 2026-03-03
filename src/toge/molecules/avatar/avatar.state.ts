import { ref } from 'vue'

/**
 * Tracks whether the avatar image failed to load.
 * When true, the component falls back to initials or icon display.
 */
export function useAvatarImageState() {
  const imageError = ref<boolean>(false)

  const handleImageError = (onError?: (error: boolean) => void) => {
    imageError.value = true
    onError?.(true)
  }

  return {
    imageError,
    handleImageError,
  }
}
