# Toge Two-Tier Architecture Design
> Date: 2026-03-03 · Approach: Option C (Directory split + import chain + targeted refactors)

---

## Vision

Apply the two-tier architecture from `design-system-implementation.md` to the existing 63 toge components. Split the flat `src/toge/components/` into `primitives/` (visual atoms) and `patterns/` (composed layout shells), enforce one-way dependency, and refactor 4 components that currently violate the atomic test.

---

## Audit Summary

**Total components:** 63
**Primitives:** 24 — pass all 4 questions of the atomic test
**Patterns:** 39 — compose primitives, own UI state, or have use-case assumptions

### The 4-Question Atomic Test
1. Does it render **one** thing?
2. Can it exist without knowing **why** it's being used?
3. Is its only input **props + slots**?
4. Can **two completely different products** use it unchanged?

---

## New Directory Structure

```
src/toge/
├── primitives/                    ← visual atoms — props in, render out
│   ├── button/
│   ├── badge/
│   ├── icon/
│   ├── lozenge/
│   ├── status/
│   ├── chip/                      ← NEW (extracted from chips pattern)
│   ├── avatar/
│   ├── collapsible/
│   ├── tooltip/
│   ├── popper/
│   ├── dropdown/
│   ├── input/
│   │   ├── input-search/
│   │   ├── input-email/
│   │   ├── input-password/
│   │   ├── input-url/
│   │   ├── input-username/
│   │   ├── input-contact-number/
│   │   ├── input-currency/
│   │   └── input-dropdown/
│   ├── textarea/
│   ├── checkbox/
│   ├── radio/
│   ├── switch/
│   ├── slider/
│   ├── progress-bar/
│   ├── logo/
│   ├── floating-action/
│   ├── table-cell/                ← NEW (merged from table-chips-title + table-lozenge-title)
│   └── event-cell/                ← RENAMED from calendar-cell (domain stripped)
│
└── patterns/                      ← composed shells — slot-driven, UI-state owners
    ├── button-dropdown/
    ├── chips/                     ← now composes chip primitive
    ├── banner/
    ├── empty-state/
    ├── card/
    ├── radio-grouped/
    ├── file-upload/
    ├── modal/
    ├── sidepanel/
    ├── stacking-sidepanel/
    ├── accordion/
    ├── tabs/
    ├── stepper/
    │   └── step/
    ├── audit-trail/
    ├── time-picker/
    ├── list/
    ├── select/
    ├── select-multiple/
    ├── select-ladderized/
    ├── filter/
    ├── attribute-filter/
    ├── table/
    │   ├── table-actions/
    │   └── table-pagination/
    ├── date-calendar-picker/
    ├── date-picker/
    ├── date-range-picker/
    ├── month-year-picker/
    └── snackbar/
```

---

## One-Way Dependency Rule

```
primitives/ → tokens only (spr- Tailwind, @iconify/vue, floating-vue)
patterns/   → can import from ../primitives/ freely
            → can import from sibling patterns/ (sparingly)

❌ primitives/ NEVER imports from patterns/
❌ DS components NEVER import domain types
```

---

## Targeted Refactors (4 components)

### Refactor 1: Extract `chip` primitive from `chips`

**Problem:** `chips` renders avatar + badge + icon + pill + close button — fails Q1.

**Solution:**
- NEW `primitives/chip/chip.vue` — lean pill atom: `label`, `icon`, `closable`, `disabled`, `size`, `tone`. Nothing else.
- `patterns/chips/chips.vue` — composes `TogeChip` + `TogeAvatar` + `TogeBadge`. Handles collections, active state.

### Refactor 2: Rename `calendar-cell` → `event-cell`, strip domain

**Problem:** Contains shift-scheduling concepts (`shiftLabel`, `shiftType`) — fails Q2 and Q4.

**Solution:**
- Rename to `event-cell`
- Replace domain props with generic equivalents: `startTime?`, `endTime?`
- Remove `ShiftType`/`ShiftState` — use `state: 'success' | 'info' | 'pending' | 'caution' | 'danger'`
- Export rename: `TogeCalendarCell` → `TogeEventCell`

### Refactor 3: Merge `table-chips-title` + `table-lozenge-title` → `table-cell`

**Problem:** Two separate thin-wrapper components doing the same job with different display modes.

**Solution:**
- NEW `primitives/table-cell/table-cell.vue`
- Props: `type: 'chip' | 'lozenge' | 'text' | 'badge'`, `cell: TableCellData`
- Renders `TogeChip`, `TogeLozenge`, or `TogeBadge` based on `type`
- `TableCellData` is a discriminated union keyed by `type`

### Refactor 4: Move `banner` + `empty-state` to patterns (no code change)

**Problem:** Both compose multiple visual elements — miscategorised as primitives in the flat structure.

**Solution:** Move files only. Zero code changes. Update imports.

---

## Migration Phases

### Phase 0 — Scaffolding
- Create `src/toge/primitives/` and `src/toge/patterns/` directories
- Add placeholder `index.ts` to each
- No component moves yet — build stays green

### Phase 1 — Move primitives (parallel agents)
Move all 24 primitives (no toge cross-imports) into `primitives/`:
`button, badge, icon, lozenge, status, avatar, collapsible, tooltip, popper, dropdown, input (+ all variants), textarea, checkbox, radio, switch, slider, progress-bar, logo, floating-action`
- Update `lib/toge.ts` paths
- Build must pass ✓

### Phase 2 — 4 targeted refactors (sequential, main session)
Execute in order:
1. Extract `chip` primitive, refactor `chips` to compose it
2. Rename `calendar-cell` → `event-cell`, strip domain props
3. Create `table-cell` primitive, delete `table-chips-title` + `table-lozenge-title`
4. Move `banner` + `empty-state` to patterns (no code change)
- Build must pass after each ✓

### Phase 3 — Move patterns (parallel agents)
Move all 39 patterns into `patterns/`. Update cross-imports to resolve to `../../primitives/`.
- Build must pass ✓

### Phase 4 — Cleanup
- Add one-way dependency comment enforcement in `lib/toge.ts`
- Update `TogePlayground.vue` import paths
- Update `toge-component-builder` skill with new directory conventions
- Final build verification ✓

---

## lib/toge.ts Output Shape

```typescript
// ─── Primitives ──────────────────────────────────────────────────────────────
export { default as TogeButton }       from '../src/toge/primitives/button/button.vue'
export { default as TogeChip }         from '../src/toge/primitives/chip/chip.vue'
export { default as TogeEventCell }    from '../src/toge/primitives/event-cell/event-cell.vue'
export { default as TogeTableCell }    from '../src/toge/primitives/table-cell/table-cell.vue'
// ... all 26 primitives

// ─── Patterns ────────────────────────────────────────────────────────────────
export { default as TogeChips }        from '../src/toge/patterns/chips/chips.vue'
export { default as TogeTable }        from '../src/toge/patterns/table/table.vue'
// ... all 37 patterns

// ─── Stores ──────────────────────────────────────────────────────────────────
export { useSnackbarStore } from '../src/toge/stores/useSnackbarStore'

// ─── Utilities ───────────────────────────────────────────────────────────────
export { generateTimeSlots } from '../src/toge/primitives/time-picker/time-picker.styles'
```

---

## Success Criteria

- [ ] `npm run build:toge` passes with zero errors
- [ ] IDE diagnostics zero on `TogePlayground.vue`
- [ ] No primitive file imports from `patterns/`
- [ ] All 4 refactors implemented and verified
- [ ] `toge-component-builder` skill updated with new conventions
