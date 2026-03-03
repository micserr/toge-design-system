import { ref, onMounted, onUnmounted } from 'vue'

export function useSidepanelState(
  isOpen: () => boolean,
  closeOutside: () => boolean,
  escapeClose: () => boolean,
  onClose: () => void,
) {
  const sidepanelRef = ref<HTMLDivElement | null>(null)

  let ignoreClick = false

  function handleClose() {
    onClose()
  }

  function handlePanelExpansion(isExpanded: boolean, onExpand: () => void, onShrink: () => void) {
    if (isExpanded) {
      onShrink()
    } else {
      onExpand()
    }
  }

  function handleClickOutside(event: MouseEvent) {
    if (ignoreClick) return
    if (
      sidepanelRef.value &&
      !sidepanelRef.value.contains(event.target as Node) &&
      closeOutside()
    ) {
      onClose()
    }
  }

  function handleEscapeKey(event: KeyboardEvent) {
    if (event.key === 'Escape' && isOpen() && escapeClose()) {
      onClose()
    }
  }

  // When panel opens, ignore the initial click that opened it
  function onOpenChanged(open: boolean) {
    if (open) {
      ignoreClick = true
      setTimeout(() => {
        ignoreClick = false
      })
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
    window.addEventListener('keydown', handleEscapeKey)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
    window.removeEventListener('keydown', handleEscapeKey)
  })

  return {
    sidepanelRef,
    handleClose,
    handlePanelExpansion,
    onOpenChanged,
  }
}
