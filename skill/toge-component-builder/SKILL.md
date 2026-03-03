---
name: toge-component-builder
description: Use when building, scaffolding, or refactoring toge components (the v2 Sprout Design System). Applies when creating new .vue/.types.ts/.styles.ts/.state.ts files under src/toge/components/, wiring lib/toge.ts exports, adding playground registry entries, or migrating v1 spr- components to toge pattern.
---

# Toge Component Builder

## Overview

**Toge** is the v2 Sprout Design System — reusable, business-logic-free Vue 3 components that products consume and wire up themselves.

**Core principle:** Toge components are render shells. No domain logic, no internal data fetching, no state that belongs to the product. Only justified UI-only state (animations, open/close, navigation).

**Working directory:** `/Users/maaraquel/Coding/Sprout-Design-System-Next`

---

## 4-File Component Pattern

Every toge component follows this exact structure:

```
src/toge/components/{name}/
  {name}.vue          ← render shell, template + script setup
  {name}.types.ts     ← Props, Emits, Slots interfaces
  {name}.styles.ts    ← pure classNames function, ZERO Vue imports
  {name}.state.ts     ← ONLY if justified UI-only state exists
  index.ts            ← re-exports everything
```

Sub-components live in a subfolder: `src/toge/components/stepper/step/step.vue`

---

## TypeScript Conventions

| Rule | Pattern |
|---|---|
| Props | `withDefaults(defineProps<Props>(), {...})` — never options-style |
| Emits | `defineEmits<EmitsInterface>()` — TypeScript interface, not array |
| Slots | `defineSlots<{slot(props: {...}): any}>()` — always declare |
| v-model | `defineModel<T>({ default: ... })` — never useVModel |
| No `any` | Use `unknown`, generics `T extends Record<string, unknown>` |
| No vueuse | Use Vue 3 composition API only (`ref`, `computed`, `watch`, etc.) |

**Emits interface syntax:**
```typescript
// ✅ Correct — tuple syntax
export interface ButtonEmits {
  'click': [event: MouseEvent]
  'update:modelValue': [value: string]
}

// ❌ Wrong — function syntax
export interface ButtonEmits {
  click: (event: MouseEvent) => void
}
```

---

## Style Conventions

```typescript
// {name}.styles.ts — pure function, zero Vue imports
import classNames from 'classnames'

export interface ButtonStyleProps {
  disabled?: boolean
  variant?: 'primary' | 'secondary'
}

export function getButtonClasses(p: ButtonStyleProps) {
  return {
    base: classNames('spr-flex spr-items-center spr-gap-2', {
      'spr-opacity-50 spr-cursor-not-allowed': p.disabled,
    }),
    label: classNames('spr-body-md-semibold'),
  }
}
```

**Critical rules:**
- ALL Tailwind classes use `spr-` prefix — `spr-flex`, `spr-w-full`, `spr-gap-2` etc.
- Zero Vue imports in `.styles.ts` — it must be a pure JS/TS module
- Import `classNames` from `classnames`

---

## Vue Component Rules

```vue
<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'           // icons
import { Menu } from 'floating-vue'           // dropdowns
import classNames from 'classnames'           // ad-hoc classes if needed
import { getButtonClasses } from './button.styles'
import type { ButtonProps, ButtonEmits, ButtonSlots } from './button.types'

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  disabled: false,
})
const emit = defineEmits<ButtonEmits>()
defineSlots<ButtonSlots>()

const model = defineModel<string>({ default: '' })  // only if v-model needed
const classes = computed(() => getButtonClasses(props))
</script>
```

**Icon imports:** Always `import { Icon } from '@iconify/vue'` — never other icon libs.

**Dropdown overlays:** Always `import { Menu } from 'floating-vue'` with `<template #reference>` + `<template #popper>`.

**No dayjs** — use native `Date` math for date calculations.

---

## Justified vs. Unjustified State

| ✅ Keep (UI-only state) | ❌ Strip (business logic) |
|---|---|
| `isOpen` ref for popovers | Internal search/filter logic |
| `currentMonth/Year` for calendar nav | `processOptions` normalization |
| `hoveredDate` for range highlight | `getMonthList`/`getYearList` emits |
| `collapsedState` for accordion | `createPinia()` self-instantiation |
| `breadcrumb` for ladderized nav | localStorage for drag/drop |
| Sort icon derivation from props | Internal sort state |
| `isAllSelected` computed from props | Internal selection state management |

**Rule:** If the product should own it, strip it. Emit an event instead.

---

## What to Strip When Migrating from v1

v1 components live in `src/components/`. When migrating to toge:

1. **Strip `@vueuse/core`** — replace `useVModel` → `defineModel`, `onClickOutside` → floating-vue `auto-hide`
2. **Strip `textField`/`valueField` normalization** — accept pre-shaped `SelectOption[]`
3. **Strip `disabledLocalSearch`** — all search is external, just emit `search`
4. **Strip `createPinia()`** — snackbar anti-pattern; accept `snacks` prop instead
5. **Strip `getMonthList`/`getYearList` emits** — date pickers shouldn't fetch data
6. **Strip localStorage** — table drag-drop reordering goes away entirely
7. **Keep floating-vue `<Menu>`** — it's a peer dep, use it for all popover overlays

---

## Naming Conventions

| Thing | Convention |
|---|---|
| Component export | `TogeButton`, `TogeSelectMultiple` |
| Component file | `button.vue`, `select-multiple.vue` |
| Types interface | `ButtonProps`, `ButtonEmits`, `ButtonSlots` |
| Style function | `getButtonClasses(p: ButtonStyleProps)` |
| State composable | `useButtonState()` |
| Index export | `export { default as TogeButton } from './button.vue'` |

---

## Parallel Agent Strategy

For 3+ independent components, dispatch parallel agents:

```
Group 1: foundational (list + dropdown)
Group 2: form variants (select + select-multiple + select-ladderized)
Group 3: filter UI (filter + attribute-filter)
Group 4: table ecosystem (table + table-actions + table-pagination + sub-cells)
Group 5: date ecosystem (date-calendar-picker + date-picker + date-range + month-year)
Group 6: special cases (snackbar)
```

**After agents complete:** Wire `lib/toge.ts` and playground yourself — do not delegate this.

---

## lib/toge.ts Wiring

After all components in a phase are built:

```typescript
// Component exports
export { default as TogeButton } from '../src/toge/components/button/button.vue'

// Type re-exports
export type * from '../src/toge/components/button/button.types'

// Utility exports (if any)
export { generateTimeSlots } from '../src/toge/components/time-picker/time-picker.styles'

// Store exports (special cases only)
export { useSnackbarStore } from '../src/toge/stores/useSnackbarStore'
```

**Known gotcha:** `defineProps` defaults cannot reference locally declared variables (Vue SFC limitation). Inline the value directly in the default factory.

```typescript
// ❌ Build error
const DEFAULT_OPTIONS = [10, 20, 50]
withDefaults(defineProps<Props>(), { options: () => DEFAULT_OPTIONS })

// ✅ Works
withDefaults(defineProps<Props>(), { options: () => [10, 20, 50] })
```

---

## Playground Registration

After wiring `lib/toge.ts`, add to `src/playground/TogePlayground.vue`:

**Import:**
```typescript
import TogeButton from '@/toge/components/button/button.vue'
```

**Registry entry (ComponentConfig interface):**
```typescript
{
  component: TogeButton,       // Component reference
  tag: 'toge-button',          // kebab-case tag for code gen
  propDefs: [...],             // Configurable props
  defaultSlot?: 'Click me',    // If component has a default slot
  extraProps?: { ... },        // Pre-populated data (items, options, headers)
  hasModel?: true,             // If component uses defineModel
  modelDefault?: '',           // Initial modelValue
}
```

**Special preview cases** (add `v-else-if` in template):
- `collapsible` — needs named `#trigger` slot
- `tooltip` — needs trigger element
- `popper` — needs `#content` slot
- `dropdown` — needs `#reference` slot
- `snackbar` — teleports to `body`, show explanation note

**Data-heavy components** use `extraProps` for sample data:
```typescript
extraProps: {
  items: [{ text: 'Option A', value: 'a' }, ...],
  headers: [{ name: 'Name', field: 'name', sort: true }, ...],
  tableData: [{ name: 'John Doe', ... }, ...],
}
```

---

## Build Verification

Always run after wiring:
```bash
npm run build:toge
```

Expected output: `✓ built in X.XXs` with no errors. Fix any errors before declaring phase complete.

Check diagnostics:
- IDE diagnostics on `TogePlayground.vue` must be zero
- IDE diagnostics on all new component files must be zero

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| `import { ref } from 'vue'` in `.styles.ts` | Remove — styles must be pure |
| `p-4` instead of `spr-p-4` | All Tailwind needs `spr-` prefix |
| `defineEmits(['click'])` array form | Use TypeScript interface form |
| Using `useVModel` from vueuse | Use `defineModel<T>()` instead |
| `any` type | Use `unknown` or proper generic |
| `createPinia()` in component | Move to store, accept data as prop |
| `DEFAULT_OPTIONS` const in defineProps default | Inline the value directly |
| Forgetting `defineSlots<{...}>()` | Always declare even if template uses `$slots` |

---

## Phase Reference

| Phase | Components | Count |
|---|---|---|
| Phase 1 | button, button-dropdown, badge, icon, lozenge, status, chips, avatar, collapsible, tooltip, popper | 11 |
| Phase 2 | input, input-search, input-dropdown, input-email, input-password, input-url, input-username, input-contact-number, input-currency, textarea, checkbox, radio, radio-grouped, switch, slider, file-upload, progress-bar, empty-state, banner, card, logo, floating-action, calendar-cell | 23 |
| Phase 3 | modal, sidepanel, stacking-sidepanel, accordion, tabs, stepper, step, audit-trail, time-picker | 9 |
| Phase 4 | list, dropdown, select, select-multiple, select-ladderized, filter, attribute-filter, table, table-actions, table-chips-title, table-lozenge-title, table-pagination, date-calendar-picker, date-picker, date-range-picker, month-year-picker, snackbar | 17 |

---

## Self-Update Protocol

After every successful toge task, review this skill:
1. Did we discover a new pattern or convention? Add it to the relevant section.
2. Did we hit a new gotcha? Add to Common Mistakes.
3. Did a new component type need special handling? Document the approach.
4. Update the Phase Reference table if a new phase completes.

**Update this file at:** `~/.claude/skills/toge-component-builder/SKILL.md`
