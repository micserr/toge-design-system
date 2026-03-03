import { ref, onMounted, watch, nextTick } from 'vue'

export function useTabsState(getActiveIndex: () => number, getTabElements: () => HTMLElement[]) {
  const underlineWidth = ref(0)
  const underlineLeft = ref(0)

  function updateUnderline() {
    nextTick(() => {
      const el = getTabElements()[getActiveIndex()]
      if (el) {
        underlineWidth.value = el.clientWidth
        underlineLeft.value = el.offsetLeft
      }
    })
  }

  onMounted(updateUnderline)
  watch(getActiveIndex, updateUnderline)

  return { underlineWidth, underlineLeft, updateUnderline }
}
