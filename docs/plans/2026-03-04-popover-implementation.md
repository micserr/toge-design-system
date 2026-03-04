# Popover Component Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rename `primitives/dropdown` → `primitives/popover` with a card-like visual upgrade.

**Architecture:** Delete the `dropdown/` folder and create a `popover/` folder in its place under `src/toge/primitives/`. All symbols are renamed (`Dropdown*` → `Popover*`). Two downstream files are updated: `lib/toge.ts` and `src/playground/TogePlayground.vue`. No pattern components import from dropdown directly.

**Tech Stack:** Vue 3, floating-vue `<Menu>`, classnames, `spr-` Tailwind prefix.

---

### Task 1: Create `popover.types.ts`

**Files:**
- Create: `src/toge/primitives/popover/popover.types.ts`
- Delete: `src/toge/primitives/dropdown/dropdown.types.ts` (after)

**Step 1: Create the file**

```typescript
export type PlacementType =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'

export type TriggerEvent = 'click' | 'hover' | 'focus' | 'touch'

export type PopperStrategy = 'fixed' | 'absolute'

export interface PopoverProps {
  placement?: PlacementType
  distance?: number
  triggers?: TriggerEvent[]
  popperTriggers?: TriggerEvent[]
  popperStrategy?: PopperStrategy
  popperWidth?: string
  popperInnerWidth?: string
  popperContainer?: string
  autoHide?: boolean
  disabled?: boolean
  width?: string
}

export interface PopoverEmits {
  'popper-state': [state: boolean]
}

export interface PopoverSlots {
  default(props: Record<string, never>): unknown
  reference(props: Record<string, never>): unknown
}
```

**Step 2: Verify no TypeScript errors** — open in IDE, confirm zero diagnostics.

---

### Task 2: Create `popover.styles.ts`

**Files:**
- Create: `src/toge/primitives/popover/popover.styles.ts`
- Delete: `src/toge/primitives/dropdown/dropdown.styles.ts` (after)

**Step 1: Create the file**

Visual upgrade: `spr-rounded-border-radius-lg` (was `md`) + `spr-p-2` on the content container.

```typescript
// Pure functions only — no Vue imports, no reactivity
import classNames from 'classnames'

export interface PopoverStyleProps {
  width?: string
  popperInnerWidth?: string
}

export function getPopoverClasses(_p: PopoverStyleProps) {
  return {
    wrapper: classNames('spr-relative'),
    menu: classNames(
      'spr-rounded-border-radius-lg spr-border spr-border-color-weak spr-bg-white spr-shadow-md spr-overflow-hidden spr-p-2',
    ),
  }
}
```

**Step 2: Verify** — no Vue imports, no reactivity, only `classnames`.

---

### Task 3: Create `popover.vue`

**Files:**
- Create: `src/toge/primitives/popover/popover.vue`
- Delete: `src/toge/primitives/dropdown/dropdown.vue` (after)

**Step 1: Create the file**

```vue
<template>
  <Menu
    :placement="props.placement"
    :distance="props.distance"
    :triggers="props.triggers"
    :popper-triggers="props.popperTriggers"
    :strategy="props.popperStrategy"
    :container="props.popperContainer || undefined"
    :auto-hide="props.autoHide"
    :disabled="props.disabled"
    :style="props.width ? { width: props.width } : undefined"
    @apply-show="emit('popper-state', true)"
    @apply-hide="emit('popper-state', false)"
  >
    <template #default>
      <slot name="reference" />
    </template>

    <template #popper>
      <div
        :class="classes.menu"
        :style="{
          width: props.popperWidth || undefined,
          minWidth: props.popperInnerWidth || undefined,
        }"
      >
        <slot />
      </div>
    </template>
  </Menu>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Menu } from 'floating-vue'
import 'floating-vue/dist/style.css'
import type { PopoverProps, PopoverEmits, PopoverSlots } from './popover.types'
import { getPopoverClasses } from './popover.styles'

const props = withDefaults(defineProps<PopoverProps>(), {
  placement: 'bottom',
  distance: 6,
  triggers: () => ['click'],
  popperTriggers: () => [],
  popperStrategy: 'absolute',
  autoHide: true,
  disabled: false,
})

const emit = defineEmits<PopoverEmits>()

defineSlots<PopoverSlots>()

const classes = computed(() =>
  getPopoverClasses({
    width: props.width,
    popperInnerWidth: props.popperInnerWidth,
  }),
)
</script>
```

**Step 2: Verify** — IDE diagnostics must be zero.

---

### Task 4: Create `popover/index.ts`

**Files:**
- Create: `src/toge/primitives/popover/index.ts`
- Delete: `src/toge/primitives/dropdown/index.ts` (after)

**Step 1: Create the file**

```typescript
export { default as TogePopover } from './popover.vue'
export type * from './popover.types'
```

---

### Task 5: Delete the old `dropdown/` folder

**Step 1: Remove the folder**

```bash
rm -rf src/toge/primitives/dropdown
```

**Step 2: Verify it's gone**

```bash
ls src/toge/primitives/
```

Expected: `dropdown/` is no longer listed.

---

### Task 6: Update `lib/toge.ts`

**Files:**
- Modify: `lib/toge.ts`

**Step 1: Find and replace the two dropdown lines**

Old:
```typescript
export { default as TogeDropdown } from '../src/toge/primitives/dropdown/dropdown.vue'
// ...
export type * from '../src/toge/primitives/dropdown/dropdown.types'
```

New:
```typescript
export { default as TogePopover } from '../src/toge/primitives/popover/popover.vue'
// ...
export type * from '../src/toge/primitives/popover/popover.types'
```

**Step 2: Build to verify**

```bash
npm run build:toge
```

Expected: `✓ built in X.XXs` with no errors.

---

### Task 7: Update `src/playground/TogePlayground.vue`

**Files:**
- Modify: `src/playground/TogePlayground.vue`

**Step 1: Update the import**

Old:
```typescript
import TogeDropdown from '@/toge/primitives/dropdown/dropdown.vue'
```

New:
```typescript
import TogePopover from '@/toge/primitives/popover/popover.vue'
```

**Step 2: Update the template usage** (lines ~53–64)

Old:
```vue
<TogeDropdown v-bind="currentProps">
  ...
</TogeDropdown>
```

New:
```vue
<TogePopover v-bind="currentProps">
  ...
</TogePopover>
```

**Step 3: Update the registry entry** (lines ~818–819)

Old:
```typescript
component: TogeDropdown,
tag: 'toge-dropdown',
```

New:
```typescript
component: TogePopover,
tag: 'toge-popover',
```

**Step 4: Verify** — IDE diagnostics on `TogePlayground.vue` must be zero.

---

### Task 8: Final commit

```bash
git add src/toge/primitives/popover/ lib/toge.ts src/playground/TogePlayground.vue
git commit -m "feat: rename primitives/dropdown → primitives/popover with card-like visual upgrade"
```
