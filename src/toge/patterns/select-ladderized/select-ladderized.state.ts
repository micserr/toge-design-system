import { ref } from 'vue'
import type { SelectLadderizedOption } from './select-ladderized.types'

export function useSelectLadderizedState(rootOptions: () => SelectLadderizedOption[]) {
  const currentLevel = ref<SelectLadderizedOption[]>([])
  const breadcrumb = ref<string[]>([])

  function init(): void {
    currentLevel.value = rootOptions()
    breadcrumb.value = []
  }

  function drillDown(option: SelectLadderizedOption): void {
    if (option.sublevel?.length) {
      currentLevel.value = option.sublevel
      breadcrumb.value.push(option.text)
    }
  }

  function goBack(allOptions: SelectLadderizedOption[]): void {
    breadcrumb.value.pop()
    // Re-traverse from root to find the parent level
    currentLevel.value = resolveLevelFromPath(allOptions, breadcrumb.value)
  }

  function reset(): void {
    currentLevel.value = rootOptions()
    breadcrumb.value = []
  }

  return { currentLevel, breadcrumb, init, drillDown, goBack, reset }
}

/**
 * Walk the option tree following a breadcrumb path and return the option list at that depth.
 * If the path resolves to a node with sublevels, return those sublevels.
 * If the path is empty, return the root.
 */
function resolveLevelFromPath(
  root: SelectLadderizedOption[],
  path: string[],
): SelectLadderizedOption[] {
  let level = root
  for (const segment of path) {
    const found = level.find((o) => o.text === segment)
    if (found?.sublevel?.length) {
      level = found.sublevel
    } else {
      break
    }
  }
  return level
}
