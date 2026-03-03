# Toge Design System — Lightweight Component Architecture Plan

> **For Claude:** REQUIRED SUB-SKILL: Use `superpowers:executing-plans` to implement this plan task-by-task.

**Goal:** Refactor Sprout Design System into a lightweight, shadcn-style pure UI layer (`toge-` prefix) published alongside v1 — no business logic, no domain types, no API calls.

**Architecture:** Components are render shells only. All filtering, sorting, searching, and pagination logic lives in the product repo. The design system emits raw events and accepts pre-shaped data. v1 (`spr-` prefix, `lib/main.ts`) stays completely untouched.

**Tech Stack:** Vue 3, TypeScript, Tailwind CSS (spr- prefix), floating-vue, @iconify/vue, Vite

---

## Background

### Why This Exists

The current v1 components are "fully assembled appliances" — they bundle internal business logic (filtering, sorting, search, pagination state, domain-specific types like `Employee`). This makes them heavy and hard to reuse across different products.

The `toge-` prefix represents a new lightweight layer:
- Products import from `@sprout/design-system-next/toge`
- Components are pure render shells with TypeScript-generic props
- All business logic stays in the product repo

### Key Files

| File | Purpose |
|---|---|
| `lib/main.ts` | v1 entry — DO NOT MODIFY |
| `lib/toge.ts` | toge entry point — named exports + global install |
| `src/toge/components/` | All toge component implementations |
| `vite.toge.config.ts` | Separate Vite build config for toge (ES-only, `emptyOutDir: false`) |
| `tasks/component-audit-report.md` | Full audit of all v1 components — source of truth for known issues |

### 4-File Component Pattern

Every toge component follows this structure:

```
src/toge/components/{name}/
  {name}.vue          ← render shell only
  {name}.types.ts     ← TypeScript interfaces (Props, Emits, Slots)
  {name}.styles.ts    ← pure function returning classNames (no Vue imports)
  {name}.state.ts     ← OPTIONAL: UI-only state (hover, open/close, image-error)
  index.ts            ← re-exports everything
```

### Justified Internal State (these stay inside components)

These are UI-only and do NOT get extracted to the product:

1. **date-picker** — current month/year display, calendar grid navigation
2. **select/dropdown** — popover open/close, click-outside handling
3. **accordion** — which panels are open (when `alwaysOpen: false`)
4. **collapsible** — already correct, pure v-model boolean
5. **modal** — backdrop click close when `staticBackdrop: false`
6. **file-upload** — `isDragOver` visual state during drag
7. **time-picker** — time slot grid generation (deterministic from `interval` prop)
8. **table** — sort icon display (computed from controlled `sortField`/`sortOrder` props)

---

## Component Quality Checklist

Every toge component MUST pass all of these before it is considered done:

### Structure
- [ ] `index.ts` re-exports the component and all types
- [ ] `{name}.types.ts` — clean TypeScript interfaces (`ButtonProps`, `ButtonEmits`, `ButtonSlots`)
- [ ] `{name}.styles.ts` — pure function, zero Vue imports, returns class string
- [ ] `{name}.state.ts` — only if truly needed for UI-only state

### Vue / TypeScript
- [ ] `withDefaults(defineProps<Props>(), {...})` pattern — no options-style prop objects
- [ ] `defineEmits<EmitInterface>()` — TypeScript interface, not array syntax
- [ ] `defineSlots<SlotsInterface>()` — all named slots declared with their props
- [ ] No `any` types (use generics or `unknown` instead)
- [ ] No domain types (no `Employee`, `Invoice`, `UserRole`, etc.)

### Accessibility (WCAG 2.1 AA minimum)
- [ ] All interactive elements have `role` if not using semantic HTML
- [ ] `aria-disabled` on disabled interactive elements (not just `disabled` attribute)
- [ ] `aria-expanded` on elements that toggle visibility (accordions, dropdowns, collapsibles)
- [ ] `aria-label` or `aria-labelledby` where text content alone is insufficient
- [ ] `aria-pressed` on toggle buttons
- [ ] `aria-modal="true"` on modal overlays
- [ ] Keyboard support: `Enter` and `Space` on interactive non-button elements
- [ ] Focus management: Escape closes overlays; focus returns to trigger

### Build
- [ ] `npm run build:toge` completes without errors
- [ ] Component appears in `dist/toge.es.js`
- [ ] Types appear in `dist/` (from vite-plugin-dts)

---

## Phases

---

## Phase 0 — Audit Fix (CURRENT PHASE)

**Status:** IN PROGRESS
**Goal:** Fix the remaining audit gaps in all 11 Phase 1 components before Phase 2 starts.
**Why first:** Phase 1 is the pattern-establishing phase. Every future component copies this pattern. Fix it here, fix it everywhere.

### What Phase 1 Fixed (already done)
- ✅ `index.ts` — all 11 components now have one
- ✅ Emit syntax — all use `defineEmits<Interface>()` TypeScript pattern
- ✅ `aria-disabled` on button
- ✅ Space key handler on chips (`@keydown.space.prevent`)
- ✅ `aria-id` → `id` on popper (invalid HTML fixed)
- ✅ Dead `remove` emit removed from lozenge
- ✅ Vestigial `state` prop removed from button
- ✅ Button-dropdown prop conflict resolved

### What Phase 1 Still Needs

The two remaining gaps to fix across all 11 Phase 1 components:

#### Gap 1 — `defineSlots` missing everywhere

`defineSlots` makes slot contracts visible to TypeScript consumers. Without it, slot props are untyped and IDEs cannot hint at available slots.

**Components with named slots that need `defineSlots`:**

| Component | Named Slots |
|---|---|
| `button` | default |
| `button-dropdown` | default, trigger, items |
| `badge` | default |
| `chips` | default, icon, close-icon |
| `avatar` | default, fallback |
| `collapsible` | default (content), trigger |
| `tooltip` | default (content), reference |
| `popper` | default, reference |
| `lozenge` | default, avatar |
| `icon` | (no named slots — skip) |
| `status` | (no named slots — skip) |

#### Gap 2 — ARIA attributes

| Component | Missing |
|---|---|
| `button` | `aria-label` prop (for icon-only buttons), `aria-pressed` (for toggle use cases) |
| `chips` | `aria-label` prop, `aria-pressed` for active state |
| `lozenge` | `aria-label` on interactive lozenges, `Enter`/`Space` keyboard support |
| `collapsible` | `aria-expanded` passed through `trigger` slot props |
| `avatar` | `aria-label` prop (image alt is not sufficient for all use cases) |
| `tooltip` | `aria-describedby` wiring between trigger and tooltip content |
| `popper` | `aria-controls` |

### Phase 0 Task List

#### Task 0.1 — Add `defineSlots` to button, badge, icon, status
**Files to modify:**
- `src/toge/components/button/button.vue`
- `src/toge/components/badge/badge.vue`
- `src/toge/components/icon/icon.vue`
- `src/toge/components/status/status.vue`

**Pattern to add (inside `<script setup>`):**
```typescript
defineSlots<{
  default(props: {}): any
}>()
```

For button-dropdown add trigger + items slots.

#### Task 0.2 — Add `defineSlots` to chips, avatar, lozenge
**Files to modify:**
- `src/toge/components/chips/chips.vue`
- `src/toge/components/avatar/avatar.vue`
- `src/toge/components/lozenge/lozenge.vue`

Chips has `icon` and `close-icon` named slots. Avatar has `fallback`. Lozenge has `avatar`.

#### Task 0.3 — Add `defineSlots` to collapsible, tooltip, popper
**Files to modify:**
- `src/toge/components/collapsible/collapsible.vue`
- `src/toge/components/tooltip/tooltip.vue`
- `src/toge/components/popper/popper.vue`

Collapsible trigger slot already passes `toggleCollapsible` — that function type must be in the slot definition.

```typescript
defineSlots<{
  trigger(props: { toggleCollapsible: () => void }): any
  default(props: {}): any
}>()
```

#### Task 0.4 — ARIA: button `aria-label` + `aria-pressed`
**Files to modify:**
- `src/toge/components/button/button.types.ts` — add optional `ariaLabel?: string` and `ariaPressed?: boolean`
- `src/toge/components/button/button.vue` — bind `:aria-label="props.ariaLabel"` and `:aria-pressed="props.ariaPressed"`

#### Task 0.5 — ARIA: chips `aria-label` + `aria-pressed`
**Files to modify:**
- `src/toge/components/chips/chips.types.ts`
- `src/toge/components/chips/chips.vue`

Bind `aria-pressed` to `props.active` and add `aria-label` prop.

#### Task 0.6 — ARIA: lozenge keyboard + `aria-label`
**Files to modify:**
- `src/toge/components/lozenge/lozenge.types.ts` — add `ariaLabel?: string`, `interactive?: boolean`
- `src/toge/components/lozenge/lozenge.vue` — add `@keyup.enter` / `@keydown.space.prevent` when `interactive` is true

#### Task 0.7 — ARIA: collapsible `aria-expanded` in trigger slot
**Files to modify:**
- `src/toge/components/collapsible/collapsible.vue`

The trigger slot should receive `aria-expanded` value so consumers can bind it:
```typescript
defineSlots<{
  trigger(props: { toggleCollapsible: () => void; isOpen: boolean }): any
}>()
```
Pass `isOpen: props.modelValue` in the slot.

#### Task 0.8 — ARIA: avatar `aria-label` prop
**Files to modify:**
- `src/toge/components/avatar/avatar.types.ts`
- `src/toge/components/avatar/avatar.vue`

#### Task 0.9 — Verify build
Run: `npm run build:toge`
Expected: Exits 0, no errors, `dist/toge.es.js` is updated.

---

## Phase 1 — Pattern Establishing (COMPLETE)

**Components:** button, button-dropdown, badge, icon, lozenge, status, chips, avatar, collapsible, tooltip, popper
**Deliverable:** 11 components + `lib/toge.ts` + `vite.toge.config.ts` + separate build

**What was established:**
- 4-file pattern (`vue` + `types.ts` + `styles.ts` + optional `state.ts` + `index.ts`)
- `withDefaults(defineProps<Props>())` as standard
- `defineEmits<Interface>()` as standard
- Pure style functions with no Vue reactivity
- `toge-` prefix global registration
- `lib/toge.ts` named exports
- Separate `vite.toge.config.ts` with `formats: ['es']` and `emptyOutDir: false`

---

## Phase 2 — Form Controls

**Status:** COMPLETE
**Goal:** All form inputs available in toge.

**Components:**
- `input` (base)
- `input-contact-number`
- `input-currency`
- `input-dropdown`
- `input-email`
- `input-password`
- `input-search`
- `input-url`
- `input-username`
- `textarea`
- `checkbox`
- `radio`
- `radio-grouped`
- `switch`
- `slider`
- `file-upload` (internal: `isDragOver` state stays)
- `progress-bar`
- `empty-state`
- `banner`
- `card`
- `logo`
- `floating-action`
- `calendar-cell`

**Key decisions for this phase:**
- All inputs use `v-model` via `defineModel<string>()` pattern
- `file-upload` keeps `isDragOver` visual state internally — everything else is emitted
- Form inputs emit `@change`, `@blur`, `@focus` as raw DOM events
- No validation logic inside components — products handle validation

**Quality gate:** All 23 components must pass the Component Quality Checklist above before Phase 3 starts.

---

## Phase 3 — Layout + UI-State Components

**Status:** PENDING
**Goal:** Structural/compositional components with generic slot types.

**Components:**
- `modal` (internal: backdrop click-to-close state stays)
- `sidepanel`
- `stacking-sidepanel`
- `accordion` (internal: open panels state stays when `alwaysOpen: false`)
- `tabs`
- `stepper` + `step`
- `audit-trail`
- `time-picker` (internal: slot grid generation stays, exported as `generateTimeSlots()` utility)

**Key decisions for this phase:**
- `accordion` items: `T extends { collapseId: string }`
- `tabs` list: `T extends { label: string }`
- `modal` emits `@close` — product controls open state via `v-model`
- `time-picker` exports `generateTimeSlots(interval: number): string[]` as a utility

**Quality gate:** All 8 components must pass the Component Quality Checklist above before Phase 4 starts.

---

## Phase 4 — Data-Driven Components

**Status:** PENDING
**Goal:** Strip all business logic, emit raw events, full TypeScript generics.

**Components (order matters — dependencies listed):**

| Component | Logic to Strip | Events to Add |
|---|---|---|
| `list` | filtering, search, multi-select, grouping | `@search`, `@select` |
| `dropdown` | local option search/filter | `@search` |
| `select` | `processOptions` normalization, local filter | `@search`, accepts pre-shaped `SelectOption<T>[]` |
| `select-multiple` | same as select | same |
| `select-ladderized` | same as select | same |
| `filter` | internal filter state | controlled via `modelValue`, `@filter-change` |
| `attribute-filter` | internal filter state | `@filter-change` |
| `table` | sort state, selection state, localStorage drag | `@sort-change`, `@row-select`, `selectedRows` as controlled prop |
| `table-actions` | — | — |
| `table-chips-title` | — | — |
| `table-lozenge-title` | — | — |
| `table-pagination` | — | — |
| `date-picker` | format parsing, validation, `getMonthList`/`getYearList` | emits raw `Date` object; navigation state stays inside |
| `date-calendar-picker` | — | — |
| `date-range-picker` | — | — |
| `month-year-picker` | — | — |
| `snackbar` | `createPinia()` on line 37 — bypasses app singleton | accepts `snacks` prop, emits `@dismiss` |

**Special case — snackbar:**
- Remove the `createPinia()` self-instantiation
- Export `useSnackbarStore` from `lib/toge.ts` separately
- Component becomes a pure `snacks` prop renderer

**Quality gate:** Full `lib/toge.ts` complete, `useSnackbarStore` exported separately.

---

## Phase 5 — Sidenav (Deferred)

**Status:** DEFERRED — will be planned separately
**Reason:** Complex navigation state; needs its own dedicated plan before implementation.

---

## Export Strategy

```typescript
// Products import from:
import { TogeButton, TogeTable } from '@sprout/design-system-next/toge'
import type { TableProps, TableColumn } from '@sprout/design-system-next/toge'

// Snackbar store (separate from component):
import { useSnackbarStore } from '@sprout/design-system-next/toge'
```

`package.json` exports:
```json
"./toge": {
  "import": "./dist/toge.es.js",
  "types": "./dist/toge.es.d.ts"
}
```

---

## Verification Commands

After each phase:
```bash
# Build toge
npm run build:toge

# Build full library (confirm v1 is untouched)
npm run build

# Type check
npm run types
```

Expected after full completion:
- `dist/toge.es.js` — toge components
- `dist/design-system-next.es.js` — v1 components (unchanged)
- `dist/main.css` — v1 styles (unchanged)
- No `Employee`, `Invoice`, or other domain types in `src/toge/`

---

## Decision Log

| Date | Decision | Reason |
|---|---|---|
| 2026-03-02 | Use `toge-` prefix instead of `v2` | More descriptive, avoids version ambiguity |
| 2026-03-02 | v1 stays untouched | Products migrate on their own timeline |
| 2026-03-02 | Sidenav deferred | Too complex for initial lightweight pass |
| 2026-03-02 | Separate `vite.toge.config.ts` | Vite does not support multi-entry UMD builds |
| 2026-03-02 | `rollupTypes: false` in toge config | Known api-extractor crash with `const` symbols |
| 2026-03-03 | Path A chosen (fix audit gaps before Phase 2) | Phase 1 is the pattern reference; fix it once here |
