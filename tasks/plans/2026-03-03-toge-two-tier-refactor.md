# Toge Two-Tier Architecture Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Reorganize 63 toge components from a flat `src/toge/components/` into `src/toge/primitives/` (visual atoms) and `src/toge/patterns/` (composed shells), enforce the one-way dependency rule, and refactor 4 components that fail the atomic test.

**Architecture:** Two-tier split matching `tasks/plans/design-system-implementation.md`. Primitives are visual atoms with zero cross-toge imports. Patterns compose from primitives and own UI state. One-way rule: primitives never import from patterns.

**Tech Stack:** Vue 3 + TypeScript + Vite + `classnames` + `floating-vue` + `@iconify/vue`

**Design doc:** `tasks/plans/2026-03-03-toge-two-tier-architecture-design.md`

**Build command:** `npm run build:toge` (must pass after every task)

**Current structure:** `src/toge/components/{name}/`
**Target structure:** `src/toge/primitives/{name}/` and `src/toge/patterns/{name}/`

---

## Phase 0 — Scaffolding

### Task 1: Create directory structure

**Files:**
- Create: `src/toge/primitives/index.ts`
- Create: `src/toge/patterns/index.ts`

**Step 1: Create the directories and placeholder index files**

```bash
mkdir -p /Users/maaraquel/Coding/Sprout-Design-System-Next/src/toge/primitives
mkdir -p /Users/maaraquel/Coding/Sprout-Design-System-Next/src/toge/patterns
```

`src/toge/primitives/index.ts`:
```typescript
// ─── Toge Primitives ─────────────────────────────────────────────────────────
// Visual atoms — props in, render out.
// Rules:
//   ✅ Can import: tokens (spr- Tailwind), @iconify/vue, floating-vue, classnames
//   ❌ Must NOT import from: ../patterns/
export {}
```

`src/toge/patterns/index.ts`:
```typescript
// ─── Toge Patterns ───────────────────────────────────────────────────────────
// Composed layout shells — slot-driven, UI-state owners.
// Rules:
//   ✅ Can import from: ../primitives/
//   ✅ Can import from sibling patterns/ (sparingly)
//   ❌ Must NOT import domain types
export {}
```

**Step 2: Verify build still passes**

```bash
npm run build:toge
```
Expected: `✓ built in X.XXs` — same module count as before, nothing changed yet.

**Step 3: Commit**

```bash
git add src/toge/primitives/index.ts src/toge/patterns/index.ts
git commit -m "chore: scaffold primitives/ and patterns/ directories for two-tier refactor"
```

---

## Phase 1 — Move Primitives

> Move 24 components from `src/toge/components/` → `src/toge/primitives/`.
> For each move: copy directory, delete old, update lib/toge.ts path.
> No component code changes — only file locations and lib/toge.ts paths change.

**Primitives list (24):**
button, badge, icon, lozenge, status, avatar, collapsible, tooltip, popper, dropdown,
input (+ input-search, input-email, input-password, input-url, input-username, input-contact-number, input-currency, input-dropdown),
textarea, checkbox, radio, switch, slider, progress-bar, logo, floating-action

---

### Task 2: Move display atom primitives

Move: `button`, `badge`, `icon`, `lozenge`, `status`, `avatar`

**Step 1: Copy directories to primitives/**

```bash
cd /Users/maaraquel/Coding/Sprout-Design-System-Next
cp -r src/toge/components/button src/toge/primitives/button
cp -r src/toge/components/badge src/toge/primitives/badge
cp -r src/toge/components/icon src/toge/primitives/icon
cp -r src/toge/components/lozenge src/toge/primitives/lozenge
cp -r src/toge/components/status src/toge/primitives/status
cp -r src/toge/components/avatar src/toge/primitives/avatar
```

**Step 2: Update `lib/toge.ts` — replace paths for these 6 components**

Find lines like:
```typescript
export { default as TogeButton } from '../src/toge/components/button/button.vue'
```
Change to:
```typescript
export { default as TogeButton } from '../src/toge/primitives/button/button.vue'
```

Do the same for badge, icon, lozenge, status, avatar — both component exports AND type re-exports.

**Step 3: Run build**

```bash
npm run build:toge
```
Expected: `✓ built` with same or higher module count. Zero errors.

**Step 4: Delete old directories**

```bash
rm -rf src/toge/components/button
rm -rf src/toge/components/badge
rm -rf src/toge/components/icon
rm -rf src/toge/components/lozenge
rm -rf src/toge/components/status
rm -rf src/toge/components/avatar
```

**Step 5: Run build again to confirm**

```bash
npm run build:toge
```
Expected: `✓ built`. Same count.

**Step 6: Update `src/playground/TogePlayground.vue` import paths**

Find:
```typescript
import TogeButton from '@/toge/components/button/button.vue'
```
Change to:
```typescript
import TogeButton from '@/toge/primitives/button/button.vue'
```
Do same for badge, icon, lozenge, status, avatar.

**Step 7: Commit**

```bash
git add -A
git commit -m "refactor: move display atom primitives to src/toge/primitives/"
```

---

### Task 3: Move interactive atom primitives

Move: `collapsible`, `tooltip`, `popper`, `dropdown`

**Step 1: Copy to primitives/**

```bash
cp -r src/toge/components/collapsible src/toge/primitives/collapsible
cp -r src/toge/components/tooltip src/toge/primitives/tooltip
cp -r src/toge/components/popper src/toge/primitives/popper
cp -r src/toge/components/dropdown src/toge/primitives/dropdown
```

**Step 2: Update lib/toge.ts paths** (component exports + type re-exports for all 4)

**Step 3: Run build** — must pass ✓

**Step 4: Delete old directories**

```bash
rm -rf src/toge/components/collapsible
rm -rf src/toge/components/tooltip
rm -rf src/toge/components/popper
rm -rf src/toge/components/dropdown
```

**Step 5: Run build again** — must pass ✓

**Step 6: Update playground imports** for collapsible, tooltip, popper, dropdown

**Step 7: Commit**

```bash
git add -A
git commit -m "refactor: move interactive atom primitives to src/toge/primitives/"
```

---

### Task 4: Move input primitive and all variants

Move: `input` (and its sub-components: `input-search`, `input-email`, `input-password`, `input-url`, `input-username`, `input-contact-number`, `input-currency`, `input-dropdown`)

**Step 1: Copy input directory (includes sub-directories)**

```bash
cp -r src/toge/components/input src/toge/primitives/input
```

This copies all sub-components at once since they live inside `components/input/`.

**Step 2: Update lib/toge.ts** — update paths for all 9 input exports:
```typescript
// Before:
export { default as TogeInput } from '../src/toge/components/input/input.vue'
export { default as TogeInputSearch } from '../src/toge/components/input/input-search/input-search.vue'
// ... etc

// After:
export { default as TogeInput } from '../src/toge/primitives/input/input.vue'
export { default as TogeInputSearch } from '../src/toge/primitives/input/input-search/input-search.vue'
// ... etc
```

**Step 3: Run build** — must pass ✓

**Step 4: Delete old**

```bash
rm -rf src/toge/components/input
```

**Step 5: Run build again** — must pass ✓

**Step 6: Update playground imports** for all 9 input variants (change `@/toge/components/input/` → `@/toge/primitives/input/`)

**Step 7: Commit**

```bash
git add -A
git commit -m "refactor: move input primitive and all variants to src/toge/primitives/"
```

---

### Task 5: Move remaining form primitive controls + utility primitives

Move: `textarea`, `checkbox`, `radio`, `switch`, `slider`, `progress-bar`, `logo`, `floating-action`

**Step 1: Copy all to primitives/**

```bash
cp -r src/toge/components/textarea src/toge/primitives/textarea
cp -r src/toge/components/checkbox src/toge/primitives/checkbox
cp -r src/toge/components/radio src/toge/primitives/radio
cp -r src/toge/components/switch src/toge/primitives/switch
cp -r src/toge/components/slider src/toge/primitives/slider
cp -r src/toge/components/progress-bar src/toge/primitives/progress-bar
cp -r src/toge/components/logo src/toge/primitives/logo
cp -r src/toge/components/floating-action src/toge/primitives/floating-action
```

**Step 2: Update lib/toge.ts paths** for all 8 (component exports + type re-exports)

**Step 3: Run build** — must pass ✓

**Step 4: Delete old directories**

```bash
rm -rf src/toge/components/textarea
rm -rf src/toge/components/checkbox
rm -rf src/toge/components/radio
rm -rf src/toge/components/switch
rm -rf src/toge/components/slider
rm -rf src/toge/components/progress-bar
rm -rf src/toge/components/logo
rm -rf src/toge/components/floating-action
```

**Step 5: Run build again** — must pass ✓

**Step 6: Update playground imports** for all 8

**Step 7: Commit**

```bash
git add -A
git commit -m "refactor: move form controls and utility primitives to src/toge/primitives/"
```

---

## Phase 2 — Targeted Refactors

### Task 6: Refactor 1 — Extract `chip` primitive from `chips`

**Goal:** Create a lean `TogeChip` primitive (pill shape only), refactor `TogeChips` pattern to compose it.

**Files:**
- Create: `src/toge/primitives/chip/chip.types.ts`
- Create: `src/toge/primitives/chip/chip.styles.ts`
- Create: `src/toge/primitives/chip/chip.vue`
- Create: `src/toge/primitives/chip/index.ts`
- Modify: `src/toge/components/chips/chips.vue` (import TogeChip)
- Modify: `lib/toge.ts` (add TogeChip export)

**Step 1: Read the existing chips component first**

Read `src/toge/components/chips/chips.vue` and `chips.types.ts` to understand what's currently there.

**Step 2: Create `chip.types.ts`**

```typescript
// src/toge/primitives/chip/chip.types.ts
export type ChipTone = 'default' | 'subtle'
export type ChipSize = 'sm' | 'md' | 'lg'
export type ChipVariant = 'tag' | 'day'

export interface ChipProps {
  label?: string
  icon?: string
  iconWeight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
  size?: ChipSize
  tone?: ChipTone
  variant?: ChipVariant
  disabled?: boolean
  active?: boolean
  closable?: boolean
}

export interface ChipEmits {
  'click': [event: MouseEvent]
  'close': []
}

export interface ChipSlots {
  default(props: {}): any
}
```

**Step 3: Create `chip.styles.ts`**

Extract the class logic from the existing `chips.styles.ts` — keep only the pill shape, label, icon, and close button classes. Remove avatar and badge classes (those belong in the pattern).

**Step 4: Create `chip.vue`**

```vue
<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { ChipProps, ChipEmits, ChipSlots } from './chip.types'
import { getChipClasses } from './chip.styles'

const props = withDefaults(defineProps<ChipProps>(), {
  size: 'md',
  tone: 'default',
  variant: 'tag',
  disabled: false,
  active: false,
  closable: false,
})
const emit = defineEmits<ChipEmits>()
defineSlots<ChipSlots>()

const classes = computed(() => getChipClasses(props))
</script>

<template>
  <span
    :class="classes.wrapper"
    :role="closable ? 'button' : undefined"
    :tabindex="disabled ? -1 : 0"
    @click="!disabled && emit('click', $event)"
  >
    <Icon v-if="props.icon" :icon="props.icon" />
    <slot>{{ props.label }}</slot>
    <button
      v-if="props.closable"
      :class="classes.close"
      type="button"
      aria-label="Remove"
      @click.stop="emit('close')"
    >
      <Icon icon="ph:x" />
    </button>
  </span>
</template>
```

**Step 5: Create `chip/index.ts`**

```typescript
export { default as TogeChip } from './chip.vue'
export type { ChipProps, ChipEmits, ChipSlots, ChipTone, ChipSize, ChipVariant } from './chip.types'
```

**Step 6: Update `chips.vue` to import and use `TogeChip`**

In `src/toge/components/chips/chips.vue`, replace the inline pill rendering with `<TogeChip>`. The chips pattern keeps avatar and badge composition.

Import: `import TogeChip from '../../primitives/chip/chip.vue'`

**Step 7: Add `TogeChip` to `lib/toge.ts`**

```typescript
// In primitives section:
export { default as TogeChip } from '../src/toge/primitives/chip/chip.vue'
export type * from '../src/toge/primitives/chip/chip.types'
```

**Step 8: Run build** — must pass ✓

**Step 9: Commit**

```bash
git add -A
git commit -m "refactor: extract TogeChip primitive from TogeChips pattern"
```

---

### Task 7: Refactor 2 — Rename `calendar-cell` → `event-cell`, strip domain

**Files:**
- Create: `src/toge/primitives/event-cell/` (full 4-file set)
- Modify: `lib/toge.ts` (swap `TogeCalendarCell` → `TogeEventCell`)
- Modify: `src/playground/TogePlayground.vue` (update import + registry key)
- Delete: `src/toge/components/calendar-cell/` (after)

**Step 1: Read existing calendar-cell**

Read `src/toge/components/calendar-cell/calendar-cell.vue` and `calendar-cell.types.ts` to see which props are domain-specific.

**Step 2: Create `event-cell.types.ts`**

Remove any shift/domain-specific props. Keep: `title`, `description`, `state`, `startTime?`, `endTime?`, `fullwidth`, `viewOnly`, `disabled`, `loading`, `lineThrough`.

```typescript
// src/toge/primitives/event-cell/event-cell.types.ts
export type EventCellState = 'success' | 'information' | 'pending' | 'caution' | 'danger'

export interface EventCellProps {
  title?: string
  description?: string
  state?: EventCellState
  startTime?: string
  endTime?: string
  fullwidth?: boolean
  viewOnly?: boolean
  disabled?: boolean
  loading?: boolean
  lineThrough?: boolean
}

export interface EventCellEmits {
  'click': [event: MouseEvent]
}
```

**Step 3: Create `event-cell.styles.ts`, `event-cell.vue`, `event-cell/index.ts`**

Port the class logic and template from `calendar-cell` with the new generic props. Export as `TogeEventCell`.

**Step 4: Update `lib/toge.ts`**

```typescript
// Remove:
export { default as TogeCalendarCell } from '../src/toge/components/calendar-cell/calendar-cell.vue'
export type * from '../src/toge/components/calendar-cell/calendar-cell.types'

// Add (in primitives section):
export { default as TogeEventCell } from '../src/toge/primitives/event-cell/event-cell.vue'
export type * from '../src/toge/primitives/event-cell/event-cell.types'
```

**Step 5: Update `TogePlayground.vue`**

Change import and registry key from `calendar-cell` / `TogeCalendarCell` to `event-cell` / `TogeEventCell`. Update the `tag` to `'toge-event-cell'`.

**Step 6: Run build** — must pass ✓

**Step 7: Delete old**

```bash
rm -rf src/toge/components/calendar-cell
```

**Step 8: Run build again** — must pass ✓

**Step 9: Commit**

```bash
git add -A
git commit -m "refactor: rename calendar-cell → event-cell, strip domain-specific props"
```

---

### Task 8: Refactor 3 — Create `table-cell` primitive, remove `table-chips-title` + `table-lozenge-title`

**Files:**
- Create: `src/toge/primitives/table-cell/table-cell.types.ts`
- Create: `src/toge/primitives/table-cell/table-cell.styles.ts`
- Create: `src/toge/primitives/table-cell/table-cell.vue`
- Create: `src/toge/primitives/table-cell/index.ts`
- Modify: `lib/toge.ts`
- Modify: `src/playground/TogePlayground.vue`
- Delete: `src/toge/components/table-chips-title/`
- Delete: `src/toge/components/table-lozenge-title/`

**Step 1: Read existing files**

Read `table-chips-title.types.ts` and `table-lozenge-title.types.ts` to understand the cell data shapes.

**Step 2: Create `table-cell.types.ts`**

```typescript
// src/toge/primitives/table-cell/table-cell.types.ts
export type TableCellType = 'chip' | 'lozenge' | 'badge' | 'text'

export interface ChipCellData {
  type: 'chip'
  title: string
  icon?: string
  closable?: boolean
  badgeText?: string
  badgeVariant?: string
  avatarUrl?: string
  avatarVariant?: string
}

export interface LozengeCellData {
  type: 'lozenge'
  title: string
  tone?: string
  fill?: boolean
  avatarUrl?: string
  icon?: string
}

export interface BadgeCellData {
  type: 'badge'
  text: string
  variant?: string
}

export interface TextCellData {
  type: 'text'
  value: string
}

export type TableCellData = ChipCellData | LozengeCellData | BadgeCellData | TextCellData

export interface TableCellProps {
  cell: TableCellData
}
```

**Step 3: Create `table-cell.vue`**

```vue
<script lang="ts" setup>
import type { TableCellProps } from './table-cell.types'
import TogeChip from '../chip/chip.vue'
import TogeLozenge from '../lozenge/lozenge.vue'
import TogeBadge from '../badge/badge.vue'

const props = defineProps<TableCellProps>()
</script>

<template>
  <div class="spr-flex spr-items-center">
    <TogeChip
      v-if="props.cell.type === 'chip'"
      :label="props.cell.title"
      :icon="props.cell.icon"
    />
    <TogeLozenge
      v-else-if="props.cell.type === 'lozenge'"
      :label="props.cell.title"
      :tone="(props.cell as any).tone"
      :fill="(props.cell as any).fill"
    />
    <TogeBadge
      v-else-if="props.cell.type === 'badge'"
      :text="(props.cell as any).text"
      :variant="(props.cell as any).variant"
    />
    <span v-else>{{ (props.cell as any).value }}</span>
  </div>
</template>
```

**Step 4: Create `table-cell/index.ts`**

```typescript
export { default as TogeTableCell } from './table-cell.vue'
export type { TableCellProps, TableCellData, ChipCellData, LozengeCellData, BadgeCellData, TextCellData, TableCellType } from './table-cell.types'
```

**Step 5: Update `lib/toge.ts`**

```typescript
// Remove:
export { default as TogeTableChipsTitle } from '../src/toge/components/table-chips-title/table-chips-title.vue'
export { default as TogeTableLozengeTitle } from '../src/toge/components/table-lozenge-title/table-lozenge-title.vue'
export type * from '../src/toge/components/table-chips-title/table-chips-title.types'
export type * from '../src/toge/components/table-lozenge-title/table-lozenge-title.types'

// Add (in primitives section):
export { default as TogeTableCell } from '../src/toge/primitives/table-cell/table-cell.vue'
export type * from '../src/toge/primitives/table-cell/table-cell.types'
```

**Step 6: Update `TogePlayground.vue`**

Replace `table-chips-title` and `table-lozenge-title` registry entries with a single `table-cell` entry:

```typescript
'table-cell': {
  component: TogeTableCell,
  tag: 'toge-table-cell',
  extraProps: {
    cell: { type: 'chip', title: 'John Doe', icon: 'ph:user' },
  },
  propDefs: [],
},
```

**Step 7: Run build** — must pass ✓

**Step 8: Delete old**

```bash
rm -rf src/toge/components/table-chips-title
rm -rf src/toge/components/table-lozenge-title
```

**Step 9: Run build again** — must pass ✓

**Step 10: Commit**

```bash
git add -A
git commit -m "refactor: merge table-chips-title + table-lozenge-title into TogeTableCell primitive"
```

---

### Task 9: Refactor 4 — Move `banner` and `empty-state` to patterns (no code changes)

**Step 1: Copy to patterns/**

```bash
cp -r src/toge/components/banner src/toge/patterns/banner
cp -r src/toge/components/empty-state src/toge/patterns/empty-state
```

**Step 2: Update `lib/toge.ts` paths**

```typescript
// Before:
export { default as TogeBanner } from '../src/toge/components/banner/banner.vue'
export { default as TogeEmptyState } from '../src/toge/components/empty-state/empty-state.vue'

// After:
export { default as TogeBanner } from '../src/toge/patterns/banner/banner.vue'
export { default as TogeEmptyState } from '../src/toge/patterns/empty-state/empty-state.vue'
```

**Step 3: Run build** — must pass ✓

**Step 4: Delete old**

```bash
rm -rf src/toge/components/banner
rm -rf src/toge/components/empty-state
```

**Step 5: Update playground imports** for banner and empty-state

**Step 6: Run build again** — must pass ✓

**Step 7: Commit**

```bash
git add -A
git commit -m "refactor: move banner and empty-state to patterns/ (no code changes)"
```

---

## Phase 3 — Move Patterns

> Move all remaining components from `src/toge/components/` → `src/toge/patterns/`.
> Critical: update cross-imports inside pattern files that import other toge components.
> After each task, `npm run build:toge` must pass.

### Task 10: Move UI shell patterns

Move: `button-dropdown`, `chips`, `card`, `radio-grouped`, `file-upload`

**Step 1: Copy to patterns/**

```bash
cp -r src/toge/components/button-dropdown src/toge/patterns/button-dropdown
cp -r src/toge/components/chips src/toge/patterns/chips
cp -r src/toge/components/card src/toge/patterns/card
cp -r src/toge/components/radio-grouped src/toge/patterns/radio-grouped
cp -r src/toge/components/file-upload src/toge/patterns/file-upload
```

**Step 2: Fix cross-imports in moved files**

For each `.vue` file that imports another toge component, update the relative import path:

- `chips/chips.vue` imports `TogeChip` → path changes from `../../components/...` to `../../primitives/chip/chip.vue` (or remove if already using the new path from Task 6)
- `button-dropdown/button-dropdown.vue` if it imports TogeButton → `../../primitives/button/button.vue`
- `radio-grouped/radio-grouped.vue` if it imports TogeRadio → `../../primitives/radio/radio.vue`

Check each file for toge imports and update accordingly.

**Step 3: Update `lib/toge.ts` paths** for all 5

**Step 4: Run build** — must pass ✓

**Step 5: Delete old directories**

```bash
rm -rf src/toge/components/button-dropdown
rm -rf src/toge/components/chips
rm -rf src/toge/components/card
rm -rf src/toge/components/radio-grouped
rm -rf src/toge/components/file-upload
```

**Step 6: Run build again** — must pass ✓

**Step 7: Update playground imports** for all 5

**Step 8: Commit**

```bash
git add -A
git commit -m "refactor: move UI shell patterns to src/toge/patterns/"
```

---

### Task 11: Move overlay + navigation patterns

Move: `modal`, `sidepanel`, `stacking-sidepanel`, `accordion`, `tabs`, `stepper` (includes `step` sub-component)

**Step 1: Copy to patterns/**

```bash
cp -r src/toge/components/modal src/toge/patterns/modal
cp -r src/toge/components/sidepanel src/toge/patterns/sidepanel
cp -r src/toge/components/stacking-sidepanel src/toge/patterns/stacking-sidepanel
cp -r src/toge/components/accordion src/toge/patterns/accordion
cp -r src/toge/components/tabs src/toge/patterns/tabs
cp -r src/toge/components/stepper src/toge/patterns/stepper
```

**Step 2: Fix cross-imports**

- `accordion/accordion.vue` imports `TogeCollapsible` → update to `../../primitives/collapsible/collapsible.vue`
- `tabs/tabs.vue` imports `TogeBadge` → update to `../../primitives/badge/badge.vue`
- Check `stepper/stepper.vue` and `stepper/step/step.vue` for any toge imports

**Step 3: Update `lib/toge.ts` paths** for modal, sidepanel, stacking-sidepanel, accordion, tabs, stepper, step

**Step 4: Run build** — must pass ✓

**Step 5: Delete old**

```bash
rm -rf src/toge/components/modal
rm -rf src/toge/components/sidepanel
rm -rf src/toge/components/stacking-sidepanel
rm -rf src/toge/components/accordion
rm -rf src/toge/components/tabs
rm -rf src/toge/components/stepper
```

**Step 6: Run build again** — must pass ✓

**Step 7: Update playground imports** for all 7

**Step 8: Commit**

```bash
git add -A
git commit -m "refactor: move overlay and navigation patterns to src/toge/patterns/"
```

---

### Task 12: Move data-input patterns

Move: `audit-trail`, `time-picker`, `list`, `select`, `select-multiple`, `select-ladderized`

**Step 1: Copy to patterns/**

```bash
cp -r src/toge/components/audit-trail src/toge/patterns/audit-trail
cp -r src/toge/components/time-picker src/toge/patterns/time-picker
cp -r src/toge/components/list src/toge/patterns/list
cp -r src/toge/components/select src/toge/patterns/select
cp -r src/toge/components/select-multiple src/toge/patterns/select-multiple
cp -r src/toge/components/select-ladderized src/toge/patterns/select-ladderized
```

**Step 2: Fix cross-imports**

- `audit-trail/audit-trail.vue` imports `TogeAvatar` and `TogeCollapsible` → update both to `../../primitives/`
- `time-picker/time-picker.vue` imports `TogeInput` → update to `../../primitives/input/input.vue`
- `list/list.vue` imports `TogeLozenge` → update to `../../primitives/lozenge/lozenge.vue`
- `select-multiple/` imports from `select` → update path (sibling patterns import: `../select/select.types`)
- `select-ladderized/` may import from `select` → update similarly

**Step 3: Update `lib/toge.ts` paths** for all 6

**Step 4: Run build** — must pass ✓

**Step 5: Delete old**

```bash
rm -rf src/toge/components/audit-trail
rm -rf src/toge/components/time-picker
rm -rf src/toge/components/list
rm -rf src/toge/components/select
rm -rf src/toge/components/select-multiple
rm -rf src/toge/components/select-ladderized
```

**Step 6: Run build again** — must pass ✓

**Step 7: Update playground imports**

**Step 8: Commit**

```bash
git add -A
git commit -m "refactor: move data-input patterns to src/toge/patterns/"
```

---

### Task 13: Move filter + table patterns

Move: `filter`, `attribute-filter`, `table` (includes `table-actions`, `table-pagination`)

**Step 1: Copy to patterns/**

```bash
cp -r src/toge/components/filter src/toge/patterns/filter
cp -r src/toge/components/attribute-filter src/toge/patterns/attribute-filter
cp -r src/toge/components/table src/toge/patterns/table
cp -r src/toge/components/table-actions src/toge/patterns/table-actions
cp -r src/toge/components/table-pagination src/toge/patterns/table-pagination
```

**Step 2: Fix cross-imports**

- `table/table.vue` imports `TogeCheckbox` and `TogeBadge` → update both to `../../primitives/`
- `table-actions/table-actions.vue` imports `TogeInputSearch` → update to `../../primitives/input/input-search/input-search.vue`
- Check `table-pagination/` for any toge imports

**Step 3: Update `lib/toge.ts` paths** for all 5

**Step 4: Run build** — must pass ✓

**Step 5: Delete old**

```bash
rm -rf src/toge/components/filter
rm -rf src/toge/components/attribute-filter
rm -rf src/toge/components/table
rm -rf src/toge/components/table-actions
rm -rf src/toge/components/table-pagination
```

**Step 6: Run build again** — must pass ✓

**Step 7: Update playground imports**

**Step 8: Commit**

```bash
git add -A
git commit -m "refactor: move filter and table patterns to src/toge/patterns/"
```

---

### Task 14: Move date + snackbar patterns

Move: `date-calendar-picker`, `date-picker`, `date-range-picker`, `month-year-picker`, `snackbar`

**Step 1: Copy to patterns/**

```bash
cp -r src/toge/components/date-calendar-picker src/toge/patterns/date-calendar-picker
cp -r src/toge/components/date-picker src/toge/patterns/date-picker
cp -r src/toge/components/date-range-picker src/toge/patterns/date-range-picker
cp -r src/toge/components/month-year-picker src/toge/patterns/month-year-picker
cp -r src/toge/components/snackbar src/toge/patterns/snackbar
```

**Step 2: Fix cross-imports**

- `date-picker/date-picker.vue` imports `TogeDateCalendarPicker` → update to `../date-calendar-picker/date-calendar-picker.vue` (sibling pattern)
- `date-range-picker/` may use `useDateCalendarPickerState` → update import path

**Step 3: Update `lib/toge.ts` paths** for all 5

**Step 4: Run build** — must pass ✓

**Step 5: Delete old**

```bash
rm -rf src/toge/components/date-calendar-picker
rm -rf src/toge/components/date-picker
rm -rf src/toge/components/date-range-picker
rm -rf src/toge/components/month-year-picker
rm -rf src/toge/components/snackbar
```

**Step 6: Verify `src/toge/components/` is now empty**

```bash
ls src/toge/components/
```
Expected: empty directory (or only `__tests__` if any exist).

**Step 7: Run build** — must pass ✓

**Step 8: Update playground imports**

**Step 9: Commit**

```bash
git add -A
git commit -m "refactor: move date and snackbar patterns to src/toge/patterns/"
```

---

## Phase 4 — Cleanup

### Task 15: Remove empty components directory + enforce one-way rule in lib/toge.ts

**Step 1: Remove the now-empty components directory**

```bash
rmdir src/toge/components
```
If it fails (non-empty), check what's left: `ls src/toge/components/`

**Step 2: Update `lib/toge.ts` — add two-tier section headers and one-way rule comment**

Reorganize `lib/toge.ts` into this structure:

```typescript
import { App } from 'vue'
import '@/assets/styles/tailwind.css'
import pkg from '../package.json'

// ─── ONE-WAY DEPENDENCY RULE ─────────────────────────────────────────────────
// primitives → tokens only (@iconify/vue, floating-vue, classnames, spr- Tailwind)
// patterns   → can import from primitives/
// ❌ primitives MUST NOT import from patterns/
// ❌ DS components MUST NOT import domain types
// ─────────────────────────────────────────────────────────────────────────────

const PREFIX = 'toge-'
const components = import.meta.glob('../src/toge/{primitives,patterns}/**/*.vue', { eager: true })

const install = (app: App) => { /* same as before */ }

export default { install }

// ─── Primitives ──────────────────────────────────────────────────────────────
export { default as TogeButton }       from '../src/toge/primitives/button/button.vue'
export { default as TogeChip }         from '../src/toge/primitives/chip/chip.vue'
// ... all primitives

// ─── Patterns ────────────────────────────────────────────────────────────────
export { default as TogeChips }        from '../src/toge/patterns/chips/chips.vue'
// ... all patterns

// ─── Stores ──────────────────────────────────────────────────────────────────
export { useSnackbarStore } from '../src/toge/stores/useSnackbarStore'

// ─── Utilities ───────────────────────────────────────────────────────────────
export { generateTimeSlots } from '../src/toge/patterns/time-picker/time-picker.styles'

// ─── Type re-exports — Primitives ────────────────────────────────────────────
// ... all primitive types

// ─── Type re-exports — Patterns ──────────────────────────────────────────────
// ... all pattern types
```

Note: update the `import.meta.glob` pattern to scan both `primitives/` and `patterns/` instead of `components/`.

**Step 3: Run build** — must pass ✓

**Step 4: Commit**

```bash
git add -A
git commit -m "chore: enforce one-way dependency rule in lib/toge.ts, remove empty components/"
```

---

### Task 16: Final verification + update toge-component-builder skill

**Step 1: Run full build**

```bash
npm run build:toge
```
Expected: `✓ built` — all modules resolved, zero errors.

**Step 2: Check IDE diagnostics**

Open `src/playground/TogePlayground.vue` in IDE. Verify zero TypeScript errors.

**Step 3: Verify one-way rule — check no primitive imports patterns**

```bash
grep -r "from.*patterns" src/toge/primitives/ 2>/dev/null
```
Expected: no output (empty). If any lines appear, fix those imports.

**Step 4: Verify directory structure**

```bash
ls src/toge/primitives/
ls src/toge/patterns/
```
Expected: primitives has 26 dirs, patterns has 37 dirs. `src/toge/components/` should not exist.

**Step 5: Update `toge-component-builder` skill**

Edit `~/.claude/skills/toge-component-builder/SKILL.md`:

1. Update **"Working directory"** section to reflect new paths
2. Update **"4-File Component Pattern"** — change path from `src/toge/components/{name}/` to:
   - Primitives: `src/toge/primitives/{name}/`
   - Patterns: `src/toge/patterns/{name}/`
3. Add **"Which tier?"** decision section with the 4 atomic test questions
4. Update **Phase Reference** table with new tier column
5. Update `skill/toge-component-builder/SKILL.md` in the project too (keep in sync)

**Step 6: Final commit**

```bash
git add -A
git commit -m "chore: update toge-component-builder skill with two-tier conventions"
```

---

## Success Criteria Checklist

- [ ] `npm run build:toge` passes with zero errors
- [ ] `src/toge/components/` directory no longer exists
- [ ] `src/toge/primitives/` contains exactly 26 components (including chip, event-cell, table-cell)
- [ ] `src/toge/patterns/` contains exactly 37 components
- [ ] `grep -r "from.*patterns" src/toge/primitives/` returns no matches
- [ ] IDE diagnostics zero on `TogePlayground.vue`
- [ ] `toge-component-builder` skill updated with new conventions
- [ ] All commits are clean and buildable individually
