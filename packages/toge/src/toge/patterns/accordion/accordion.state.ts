import { ref, reactive, watch } from 'vue'
import type { AccordionItem } from './accordion.types'

export function useAccordionState<T extends AccordionItem>(
  items: () => T[],
  alwaysOpen: () => boolean,
  isDefaultOpen: () => boolean,
) {
  const collapsedState = reactive<Record<string, boolean>>({})
  const clickedId = ref<string | undefined>(undefined)

  function initState() {
    const shouldOpen = alwaysOpen() && isDefaultOpen()
    items().forEach((item) => {
      collapsedState[item.collapseId] = shouldOpen
    })
  }

  watch(items, initState, { immediate: true })

  function toggleCollapse(id: string) {
    collapsedState[id] = !collapsedState[id]
    if (!alwaysOpen()) {
      items().forEach((item) => {
        if (item.collapseId !== id) collapsedState[item.collapseId] = false
      })
    }
  }

  function setClickedId(id: string) {
    clickedId.value = id
  }

  function clearClickedId() {
    clickedId.value = undefined
  }

  return { collapsedState, clickedId, toggleCollapse, setClickedId, clearClickedId }
}
