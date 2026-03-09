import { ref } from 'vue'

export function useModalState(staticBackdrop: () => boolean, closeModal: () => void) {
  const staticBackdropClicked = ref(false)

  function handleBackdropClick() {
    if (!staticBackdrop()) {
      closeModal()
    } else {
      staticBackdropClicked.value = true
      setTimeout(() => {
        staticBackdropClicked.value = false
      }, 500)
    }
  }

  return { staticBackdropClicked, handleBackdropClick }
}
