import { reactive, watch } from 'vue'

export function useAuditTrailState(
  getLogs: () => { userName: string; title: string }[],
  alwaysOpen: () => boolean,
) {
  const collapsedState = reactive<Record<number, boolean>>({})

  watch(
    getLogs,
    (logs) => {
      logs.forEach((_, i) => {
        if (collapsedState[i] === undefined) {
          collapsedState[i] = i === 0
        }
      })
    },
    { immediate: true },
  )

  function toggleCollapse(index: number) {
    collapsedState[index] = !collapsedState[index]
    if (!alwaysOpen()) {
      Object.keys(collapsedState).forEach((key) => {
        const k = Number(key)
        if (k !== index) collapsedState[k] = false
      })
    }
  }

  return { collapsedState, toggleCollapse }
}
