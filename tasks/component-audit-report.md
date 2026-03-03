# Sprout Design System — Component Audit Report

**Date:** 2026-03-02
**Scope:** All components in `src/components/` (67 directories, ~50 unique components + sub-components)
**Audited Against:** Props, Emits, Slots, v-model, TypeScript, Accessibility, Naming, Index Exports, Missing Features

---

## Executive Summary

| Metric | Value |
|---|---|
| Total components audited | ~50 components + sub-components |
| GOOD health | 13 |
| NEEDS WORK health | 28 |
| POOR health | 6 |
| Components with index.ts | **0 / ~50** |
| Components with defineSlots | **0 / ~50** |
| Components with full ARIA support | **~3 / ~50** |
| Components with correct emit types | ~60% |
| Components with `any` types | ~20% |

**Overall System Health: NEEDS WORK** — The codebase has strong TypeScript foundations but suffers from three systemic gaps: missing module exports, absent slot contracts, and near-zero accessibility attributes.

---

## Systemic Issues (Affect All Components)

### 🔴 CRITICAL-1 — No `index.ts` export files
**Affects:** Every single component
**Impact:** Clean module imports (`import { SprButton } from '@/components/button'`) don't work. All consumers must import directly from `.vue` files.
**Fix:** Create `index.ts` per component that exports the component and its TypeScript types.

### 🔴 CRITICAL-2 — No `defineSlots` declarations
**Affects:** Every component that uses named slots
**Impact:** Slot contracts are invisible to TypeScript and IDE tooling. No type checking on slot props.
**Fix:** Add `defineSlots<{ slotName: (props: SlotProps) => any }>()` to all components with named slots.

### 🟡 WARNING-1 — Accessibility crisis
**Affects:** ~90% of components
**Impact:** Products built on this system fail WCAG 2.1 AA compliance. Screen readers cannot interpret most interactive components.
**Common missing attributes:** `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-expanded`, `aria-modal`, `aria-live`, `aria-invalid`, `role`, keyboard handlers (Enter/Space/Escape).

### 🟡 WARNING-2 — Inconsistent emit syntax
**Affects:** ~40% of components
**Issue:** Mix of array syntax (`['update:modelValue']`) and object syntax with validators. Array syntax provides no type safety.
**Fix:** Standardize all emits to object syntax with validator functions.

---

## Component-by-Component Findings

### accordion — NEEDS WORK
| | |
|---|---|
| Props | ✅ Typed, validators, defaults |
| Emits | ⚠️ None declared (internal state only) |
| Slots | ❌ Used but no defineSlots |
| v-model | N/A |
| TypeScript | ✅ ExtractPropTypes used |
| Accessibility | ❌ No aria-expanded, no roles on headers |
| Index export | ❌ Missing |

**Key issues:**
- `isDefaultOpen` prop only works when `alwaysOpen` is also true — logic bug in `use-accordion.ts`
- Slot names are dynamic (`slot :name="item.collapseId"`) but not documented

---

### attribute-filter — NEEDS WORK
| | |
|---|---|
| Props | ✅ Typed (25+ props — very large surface) |
| Emits | ⚠️ Weak validators (`Array.isArray` only) |
| Slots | ❌ No defineSlots |
| v-model | ✅ defineModel for search |
| TypeScript | ⚠️ Mixed `MenuListType[] | string[]` without narrowing |
| Accessibility | ❌ No aria-label on filter trigger, search, list items |
| Index export | ❌ Missing |

**Key issues:**
- 25+ props without grouping — consider prop objects or composable injection
- Inconsistent: uses `defineModel` for search but standard emits for everything else

---

### audit-trail — GOOD
| | |
|---|---|
| Props | ✅ Typed with nested data interfaces |
| Emits | ✅ N/A — read-only component |
| v-model | N/A |
| TypeScript | ✅ Good |
| Accessibility | ⚠️ No aria-expanded on collapsible headers |
| Index export | ❌ Missing |

**Strengths:** Clean ResizeObserver usage, proper lifecycle cleanup, well-structured nested interfaces.

---

### avatar — NEEDS WORK
| | |
|---|---|
| Props | ✅ Typed with validators |
| Emits | 🔴 `image-error` emit defined in `.ts` but missing `defineEmits` call in `.vue` |
| v-model | N/A |
| TypeScript | ⚠️ Unsafe cast `el as HTMLElement` without guard |
| Accessibility | ⚠️ Alt prop exists but no meaningful default enforcement |
| Index export | ❌ Missing |

**Key issues:**
- Emit types exported but not actually used in the component — silent bug

---

### badge — GOOD
| | |
|---|---|
| Props | ✅ Typed |
| Emits | N/A |
| Accessibility | ⚠️ Empty string for `tiny` size could confuse screen readers |
| Index export | ❌ Missing |

**Strengths:** Single responsibility, well-typed, clean.

---

### banner — NEEDS WORK
| | |
|---|---|
| Props | ✅ Typed |
| Emits | ⚠️ Close event only communicated via v-model, not emit |
| v-model | ✅ defineModel used |
| Accessibility | 🔴 Missing `role="alert"` and `aria-live` for notification component |
| Index export | ❌ Missing |

**Key issues:**
- Alert-like component with no live region — screen readers won't announce it

---

### button — NEEDS WORK
| | |
|---|---|
| Props | ✅ Typed; `state` prop is vestigial (unused) |
| Emits | 🔴 Emit type guard syntax incorrect: arrow function doesn't return boolean |
| Slots | ❌ No defineSlots |
| Accessibility | ⚠️ `ariaDisabled` passed as camelCase — HTML needs `aria-disabled` |
| Index export | ❌ Missing |

**Key issues:**
- `click` emit validator: `(evt: MouseEvent): evt is MouseEvent => evt instanceof MouseEvent` — the arrow fn doesn't actually return, Vue gets `undefined`
- `state` prop (base/hover/pressed/focus) is never used — reactive vueuse hooks do the work instead

---

### button/button-dropdown — POOR
| | |
|---|---|
| Props | 🔴 Conflicts with parent button props (`tone`, `variant` have different allowed values) |
| Emits | 🔴 Array syntax, no validators |
| v-model | ✅ useVModel |
| Accessibility | ❌ Context lost when composing with button |
| Index export | ❌ Missing |

**Key issues:**
- `modelValue` is both `required: true` AND has a default — contradiction
- `v-bind="props"` passes all props to `SprButton` including incompatible ones

---

### calendar — NEEDS WORK
| | |
|---|---|
| Props | ✅ Typed, useVModel for search and selectedCell |
| Emits | ⚠️ Array syntax instead of object |
| Slots | ✅ Good slot support for cell customization |
| Accessibility | ⚠️ aria-describedby present but missing role on interactive elements |
| Index export | ❌ Missing |

---

### calendar-cell — NEEDS WORK
| | |
|---|---|
| Props | ✅ Typed |
| Emits | ⚠️ Validator present but limited |
| Accessibility | 🔴 No `role="button"` or `aria-label` on clickable cells |
| Index export | ❌ Missing |

---

### card — GOOD
| | |
|---|---|
| Props | ✅ Mostly typed |
| Emits | N/A — layout component |
| TypeScript | ⚠️ `String, default: null` — contradictory (null is not a string) |
| Index export | ❌ Missing |

---

### checkbox — NEEDS WORK
| | |
|---|---|
| Props | ⚠️ Both `modelValue` and `checked` exist — redundant |
| Emits | ✅ update:modelValue |
| v-model | ✅ |
| Accessibility | 🔴 Missing aria-label, aria-checked, aria-describedby |
| Index export | ❌ Missing |

**Key issues:**
- `indeterminate` prop changes icon but doesn't set native `input.indeterminate = true` via JS

---

### chips — NEEDS WORK
| | |
|---|---|
| Props | ⚠️ TONES array missing `as const` |
| Emits | ⚠️ Validators use instanceof checks |
| Accessibility | 🔴 role="button" + tabindex present but missing aria-label, aria-pressed, Space key handler |
| Index export | ❌ Missing |

---

### collapsible — NEEDS WORK
| | |
|---|---|
| Props | ⚠️ modelValue is `required: true` — unusual for v-model; consider default |
| Emits | ✅ update:modelValue |
| v-model | ✅ |
| Accessibility | 🔴 Missing aria-expanded on trigger slot |
| Index export | ❌ Missing |

---

### date-picker — POOR
| | |
|---|---|
| Props | ⚠️ Confusing `readonly` and `readonly2` props |
| Emits | ⚠️ Informational emits (getInputValue, getDateFormats) — should use expose |
| TypeScript | ⚠️ Some unsafe casts |
| Accessibility | 🔴 Missing aria-label on inputs, no describedby for helper text |
| Index export | ❌ Missing |

**Key issues:**
- `use-date-picker.ts` is **994 lines** — needs decomposition into focused composables
- Informational emit pattern (`getInputValue`, `getMonthList`) is non-idiomatic

---

### date-picker/date-calendar-picker — GOOD
**Strengths:** Clean mode system (full/month-year/year-only), well-decomposed, JSDoc on props.
**Issues:** Wrapper functions that just delegate could be inlined; `default: undefined` props.

---

### date-picker/date-range-picker — NEEDS WORK
**Issues:** Complex `modelValue` object (no separate start/end v-model), needs aria-labels on dual inputs.

---

### date-picker/month-year-picker — NEEDS WORK
**Issues:** No format string validation; informational emits pattern inherited from parent.
**Strengths:** `defineExpose` correctly exposes `clear()`.

---

### dropdown — NEEDS WORK
| | |
|---|---|
| Props | ✅ Thoroughly typed with validators |
| Emits | ✅ Properly defined |
| v-model | ✅ useVModel (complex) |
| TypeScript | 🔴 `_originalObject` stored without proper typing, cast via `unknown as MenuListType` |
| Accessibility | 🔴 No role, aria-expanded, aria-haspopup on menu trigger |
| Index export | ❌ Missing |

---

### empty-state — GOOD
| | |
|---|---|
| Props | ✅ Typed |
| Emits | ⚠️ Template emits `onClick` but not typed |
| Accessibility | ⚠️ Image alt hardcoded as "empty" |
| Index export | ❌ Missing |

---

### file-upload — NEEDS WORK
| | |
|---|---|
| Props | ⚠️ modelValue Array type too loose — allows any array |
| Emits | ✅ Defined |
| v-model | ✅ useVModel |
| Accessibility | 🔴 No role="button" on drop zone, no aria-labels |
| Index export | ❌ Missing |

**Issues:** No max file count validation; no true loading state; type narrowing in event handler could fail.

---

### filter — NEEDS WORK
| | |
|---|---|
| Props | 🔴 `[Array, String]` union — too permissive |
| Emits | ✅ |
| v-model | ✅ |
| TypeScript | 🔴 Direct mutation of `options.value[index].isSelected` — violates reactivity best practices |
| Accessibility | 🔴 No ARIA on chips, checkboxes, collapsible sections |
| Index export | ❌ Missing |

**Issues:** Infinite scroll uses `filterMenuOptionList.value[0]` — assumes index 0 always exists.

---

### floating-action — NEEDS WORK
| | |
|---|---|
| Props | ✅ |
| Emits | ❌ None defined |
| Slots | ❌ No defineSlots |
| Accessibility | 🔴 No role, aria-live, aria-label on floating bar |
| Index export | ❌ Missing |

**Key issues:**
- Class string has `spr-bg-white-50` appearing twice in `use-floating-action.ts`
- z-index is hardcoded (`spr-z-50`) with no prop control

---

### icon — GOOD
| | |
|---|---|
| Props | ⚠️ `id` prop marked required but has default — contradiction |
| Accessibility | ⚠️ No role="img" for meaningful icons; no aria-hidden for decorative ones |
| Index export | ❌ Missing |

---

### input — NEEDS WORK
| | |
|---|---|
| Props | ✅ Well-typed |
| Emits | 🔴 `InputEmitTypes = { 'update:modelValue': typeof inputEmitTypes }` — incorrect typing syntax |
| v-model | ✅ |
| Accessibility | 🔴 No aria-invalid (error state), no aria-describedby (helper), no aria-live (char count) |
| Index export | ❌ Missing |

---

### input/input-contact-number — NEEDS WORK
**Issues:** `@get-popper-state` event used in template but missing from emit types; COUNTRY_OPTIONS mutable at module level.
**Strengths:** libphonenumber-js integration is solid.

---

### input/input-currency — NEEDS WORK
**Issues:** `@get-popper-state` not in emit types; CurrencyOption interface not validated through prop chain.

---

### input/input-dropdown — POOR
| | |
|---|---|
| TypeScript | 🔴 No `.ts` or `use-*.ts` files — zero type safety |
| Props | ❌ None defined |
| Emits | ❌ None defined |
| Accessibility | ❌ No aria-expanded, aria-haspopup |

**Issues:** Readonly detection via `$attrs.readonly === ''` is fragile.

---

### input/input-email — POOR
| | |
|---|---|
| TypeScript | 🔴 No `.ts` or `use-*.ts` files |
| Validation | 🔴 No email format validation |
| HTML | 🔴 Missing `type="email"` attribute |

---

### input/input-password — GOOD
**Strengths:** Password visibility toggle works correctly, inherits base input types.
**Issues:** Eye icon toggle button missing aria-label; no separate `.ts` file (uses base input types).

---

### input/input-search — POOR
| | |
|---|---|
| TypeScript | 🔴 No `.ts` or `use-*.ts` files |
| Features | 🔴 No search-specific logic — just an icon wrapper |
| Accessibility | 🔴 No aria-label indicating search purpose |

---

### input/input-url — POOR
| | |
|---|---|
| TypeScript | 🔴 No `.ts` or `use-*.ts` files |
| Validation | 🔴 No URL validation; missing `type="url"` |
| Props | 🔴 `https://` prefix hardcoded — no prop to customize |

---

### input/input-username — POOR
| | |
|---|---|
| TypeScript | 🔴 No `.ts` or `use-*.ts` files |
| Validation | 🔴 No pattern validation |

---

### list — NEEDS WORK
| | |
|---|---|
| Props | ✅ Typed, useVModel |
| Emits | 🔴 emit used but never declared with defineEmits() |
| v-model | ✅ |
| TypeScript | ⚠️ use-list.ts is 708 lines |
| Accessibility | 🔴 No aria-label, no role on search input or list container |
| Index export | ❌ Missing |

---

### list/list-item — NEEDS WORK
**Issues:** Emits 'select' but no defineEmits; missing `aria-selected`, `role="option"`, `aria-disabled`.

---

### list/ladderized-list — NEEDS WORK
| | |
|---|---|
| Emits | ✅ useVModel |
| Bugs | 🔴 `console.log("Custom")` in production code (use-ladderized-list.ts:90) |
| Bugs | 🔴 `FIXME: activeLevel one less than expected` — acknowledged bug in comments |
| Accessibility | ❌ No ARIA on back button or transitions |
| Index export | ❌ Missing |

---

### logo — GOOD
**Issues:** Cloudinary `CLOUD_NAME` hardcoded as string — should be environment variable.
**Strengths:** Proper alt text, title attributes, Cloudinary SDK usage.

---

### lozenge — NEEDS WORK
| | |
|---|---|
| Props | ✅ Comprehensive |
| Emits | 🔴 removeEmitTypes exported but never used in component — defineEmits() never called |
| Accessibility | 🔴 No aria-label when interactive; no keyboard support (Enter/Space) |
| Index export | ❌ Missing |

---

### modal — NEEDS WORK
| | |
|---|---|
| Props | ✅ Typed |
| Emits | N/A (v-model) |
| v-model | ✅ |
| Accessibility | 🔴 Missing role="dialog", aria-labelledby, aria-modal="true", Escape key, focus trap |
| Index export | ❌ Missing |

---

### popper — NEEDS WORK
| | |
|---|---|
| Props | ✅ Minimal (wrapper component) |
| TypeScript | 🔴 use-popper.ts composable is imported but its return value is never used |
| HTML | 🔴 `aria-id="popper-wrapper"` — invalid attribute, should be `id` |
| Index export | ❌ Missing |

---

### progress-bar — GOOD
| | |
|---|---|
| Props | ✅ Typed with validators |
| Accessibility | ✅ role="progressbar", aria-valuemin, aria-valuemax, aria-valuenow |
| Index export | ❌ Missing |

**Strengths:** Best accessibility implementation in the codebase. 10 label placement options.
**Issues:** Missing aria-label on container.

---

### radio — NEEDS WORK
| | |
|---|---|
| Props | ✅ Typed |
| Emits | 🔴 Array syntax `['update:modelValue']` instead of object |
| v-model | ✅ useVModel |
| Accessibility | ⚠️ Missing aria-label/aria-labelledby |
| Index export | ❌ Missing |

**Issues:** `radioRef` assigned to label element — should only be on the input.

---

### radio/radio-grouped — NEEDS WORK
**Issues:** Same array emit syntax issue as radio; no aria-label on group; no aria-describedby linking to helper text.

---

### select — NEEDS WORK
| | |
|---|---|
| Props | ✅ Typed with ExtractPropTypes |
| Emits | ⚠️ Imprecise validators |
| v-model | ✅ useVModel; defineExpose for handleClear |
| TypeScript | ⚠️ Implicit type coercion in compatPreSelectedItems |
| Accessibility | ❌ No defineSlots for helperMessage slot |
| Index export | ❌ Missing |

---

### select/select-multiple — NEEDS WORK
**Issues:** Deprecated `loading` prop kept silently — no console warning; JSON.parse without try-catch in all paths; no focus trap.

---

### select/select-ladderized — NEEDS WORK
**Issues:** Generic emit type `(event: string, ...args: unknown[]) => void` loses all safety; disabled state not propagated to nested components; no keyboard tree traversal.

---

### sidenav — NEEDS WORK
| | |
|---|---|
| Props | ✅ Complex nav types well-defined |
| Emits | ⚠️ Uses raw `Function` type instead of callback signatures |
| Accessibility | 🔴 Interactive buttons missing aria-label (search, notification, request) |
| TypeScript | ✅ ParentLink, MenuLink, SubmenuLink interfaces |
| Index export | ❌ Missing |

**Issues:** Mobile menu doesn't close on navigation; Teleport cleanup for event listeners should be verified.

---

### sidepanel — NEEDS WORK
| | |
|---|---|
| Props | ✅ Typed |
| Emits | ⚠️ Raw `Function` type |
| Accessibility | ⚠️ role="dialog" present but missing aria-modal="true" |
| Index export | ❌ Missing |

**Issues:** No focus trap when open; height prop accepts any string without CSS validation.

---

### sidepanel/stacking-sidepanel — GOOD
| | |
|---|---|
| Props | ✅ Typed |
| Emits | ✅ update:stack properly typed |
| v-model | ✅ useVModel |
| Expose | ✅ showPanel, hidePanel, handleExpandPanel |
| TypeScript | ⚠️ Implicit return type inference for ShallowRef |
| Index export | ❌ Missing |

**Strengths:** useRefHistory, useResizeObserver from vueuse; well-encapsulated stacking logic.

---

### slider — GOOD
| | |
|---|---|
| Props | ✅ Typed |
| Emits | ⚠️ Validators lack explicit return type |
| v-model | ✅ |
| Accessibility | ✅ role="slider", aria-valuenow/min/max, aria-disabled, tabindex |
| Index export | ❌ Missing |

**Issues:** Missing Home/End/PageUp/PageDown keyboard support; no `name` attribute for form integration.

---

### snackbar — NEEDS WORK
| | |
|---|---|
| Props | ✅ Typed |
| Emits | ✅ Validated |
| Pinia | 🔴 Creates new `createPinia()` instance instead of using app's singleton |
| TypeScript | ⚠️ `action` prop typed as raw `Function` — should be `PropType<() => void>` |
| Accessibility | ✅ ARIA labels present |
| Index export | ❌ Missing |

---

### status — GOOD
| | |
|---|---|
| Props | ✅ Validators use const arrays |
| Accessibility | ⚠️ aria-label dynamic but no fallback if state not in map |
| Index export | ❌ Missing |

---

### stepper — NEEDS WORK
| | |
|---|---|
| Props | ✅ Typed |
| TypeScript | 🔴 CSS class typo: `spr-flex-rows` should be `spr-flex-row` |
| Bugs | 🔴 Step `click` emit defined but `handleClick` never called in template — dead code |
| Accessibility | ❌ No ARIA step indicators |
| Index export | ❌ Missing |

---

### switch — NEEDS WORK
| | |
|---|---|
| Props | ✅ |
| Emits | 🔴 Array syntax instead of object |
| v-model | ✅ useVModel |
| Accessibility | ⚠️ aria-disabled conditionally spread — should always be present |
| Index export | ❌ Missing |

---

### table — NEEDS WORK
| | |
|---|---|
| Props | 🔴 `dataTable` default is `false` instead of `[]` |
| Emits | ⚠️ useVModel emits don't match validator expectations |
| TypeScript | ⚠️ Some `ref<unknown>` instead of specific types |
| Bugs | 🔴 `splice(selectedIndex, 1)` called when `selectedIndex === -1` — deletes last item |
| Accessibility | ⚠️ `aria-describedby="describe"` references element that never exists |
| Index export | ❌ Missing |

**Issues:** 20+ props without documentation grouping; no defineSlots for complex slot structure.

---

### tabs — GOOD
| | |
|---|---|
| Props | ⚠️ List prop uses generic `Array<List>` without PropType |
| Accessibility | ⚠️ activeTab compared as plain string — enum would be clearer |
| Index export | ❌ Missing |

**Strengths:** Responsive underline indicator, disabled states, badge support, smooth animations.

---

### textarea — GOOD
| | |
|---|---|
| Props | ✅ |
| Emits | ⚠️ Emit type defined as object instead of array in textarea.ts |
| v-model | ✅ useVModel |
| Accessibility | ⚠️ placeholder comes from $attrs fallback — not in props |
| Index export | ❌ Missing |

---

### time-picker — NEEDS WORK
| | |
|---|---|
| Props | ✅ |
| Emits | 🔴 Validator checks `MouseEvent` but emit carries string value |
| v-model | ✅ |
| Accessibility | 🔴 No keyboard navigation support |
| Index export | ❌ Missing |

---

### tooltip — GOOD
| | |
|---|---|
| Props | ✅ Typed |
| Emits | ⚠️ Should have explicit `defineEmits([])` even if empty |
| Accessibility | N/A — presentation layer |
| Index export | ❌ Missing |

---

## Prioritized Remediation Plan

### Priority 1 — Critical Bugs (Fix Immediately)

| # | Component | Issue |
|---|---|---|
| 1 | `table` | `splice(selectedIndex, 1)` when `selectedIndex === -1` silently deletes last row |
| 2 | `avatar` | `image-error` emit never fired — defineEmits not called |
| 3 | `lozenge` | removeEmitTypes exported but defineEmits never called |
| 4 | `list` + `list-item` | `emit` called without defineEmits declaration |
| 5 | `popper` | `aria-id` is invalid HTML — should be `id` |
| 6 | `stepper` | `click` emit defined but handleClick never wired to template |
| 7 | `ladderized-list` | `console.log("Custom")` left in production code |
| 8 | `ladderized-list` | `FIXME: activeLevel one less than expected` — unresolved bug |
| 9 | `time-picker` | Emit validator expects MouseEvent but carries string |
| 10 | `snackbar` | Creates own Pinia instance instead of using app singleton |

### Priority 2 — Systemic (Address by Component Group)

1. **Add `index.ts` to all 50 components** — enables clean imports, tree-shaking
2. **Add `defineSlots` to all components with named slots**
3. **Convert array emit syntax to object syntax** — accordion, calendar, radio, radio-grouped, switch, button-dropdown, stepper

### Priority 3 — Accessibility (Plan as Sprint)

1. **Form inputs** (input, checkbox, radio, select, textarea, switch): Add `aria-invalid`, `aria-describedby`, `aria-label`
2. **Overlay components** (modal, sidepanel): Add `role="dialog"`, `aria-modal`, focus trap, Escape handler
3. **Interactive non-inputs** (chips, lozenge, collapsible): Add `aria-expanded`, `aria-pressed`, keyboard handlers
4. **Navigation** (sidenav): Add `aria-label` to icon-only buttons
5. **Live regions** (banner, snackbar, floating-action): Add `role="alert"` or `aria-live`
6. **Progress/slider**: Already partially done — fill in gaps

### Priority 4 — Type Safety Improvements

1. Replace raw `Function` type in emits with `PropType<() => void>` or specific signatures
2. Add proper typing to `input/input-dropdown`, `input/input-email`, `input/input-search`, `input/input-url`, `input/input-username` (all missing `.ts` files)
3. Fix `InputEmitTypes` syntax error in base input
4. Remove `_originalObject` unsafe cast in dropdown
5. Fix `table` `dataTable` prop default (`false` → `[]`)
6. Fix `card` `customBorderSize` prop type (`String, default: null` → `String | null`)

### Priority 5 — Architecture / Refactoring

1. Break up `use-date-picker.ts` (994 lines) into focused composables
2. Break up `use-list.ts` (708 lines)
3. Simplify `attribute-filter` prop surface (25+ props)
4. Move `CLOUD_NAME` in logo to environment variable
5. Fix filter component's direct prop mutations to use computed copies
6. Consolidate `input-dropdown`, `input-email`, `input-search`, `input-url`, `input-username` — all are thin wrappers missing TypeScript definitions

---

## Health Summary by Component

| Component | Health | Top Issue |
|---|---|---|
| accordion | NEEDS WORK | isDefaultOpen logic bug, no ARIA |
| attribute-filter | NEEDS WORK | 25+ props, weak emit validators |
| audit-trail | GOOD | Minor ARIA gap |
| avatar | NEEDS WORK | Emit never fires |
| badge | GOOD | Tiny ARIA concern |
| banner | NEEDS WORK | No role="alert" / aria-live |
| button | NEEDS WORK | Broken emit type guard |
| button-dropdown | POOR | Prop conflicts, no validators |
| calendar | NEEDS WORK | Array emit syntax |
| calendar-cell | NEEDS WORK | No role/aria-label on clickable cells |
| card | GOOD | Minor type contradiction |
| checkbox | NEEDS WORK | Missing ARIA, indeterminate not native |
| chips | NEEDS WORK | Missing aria-pressed, Space key |
| collapsible | NEEDS WORK | Missing aria-expanded |
| date-picker | POOR | 994-line composable, confusing props |
| date-calendar-picker | GOOD | Minor wrapper functions |
| date-range-picker | NEEDS WORK | Complex modelValue |
| month-year-picker | NEEDS WORK | No format validation |
| dropdown | NEEDS WORK | Unsafe _originalObject cast |
| empty-state | GOOD | Untyped onClick emit |
| file-upload | NEEDS WORK | No ARIA on drop zone |
| filter | NEEDS WORK | Direct prop mutations |
| floating-action | NEEDS WORK | Duplicate CSS class, no ARIA |
| icon | GOOD | aria-hidden/role not context-aware |
| input | NEEDS WORK | Broken emit types, no aria-invalid |
| input-contact-number | NEEDS WORK | Emit mismatch |
| input-currency | NEEDS WORK | Emit mismatch |
| input-dropdown | POOR | No TypeScript at all |
| input-email | POOR | No type="email", no validation |
| input-password | GOOD | Missing eye-icon aria-label |
| input-search | POOR | No TypeScript, no search logic |
| input-url | POOR | No validation, hardcoded prefix |
| input-username | POOR | No TypeScript |
| list | NEEDS WORK | defineEmits missing, 708-line composable |
| list-item | NEEDS WORK | defineEmits missing, no role="option" |
| ladderized-list | NEEDS WORK | console.log, known level bug |
| logo | GOOD | Hardcoded cloud name |
| lozenge | NEEDS WORK | removeEmitTypes never wired |
| modal | NEEDS WORK | No role="dialog", no focus trap |
| popper | NEEDS WORK | aria-id invalid, unused composable |
| progress-bar | GOOD | Best ARIA in codebase |
| radio | NEEDS WORK | Array emit syntax |
| radio-grouped | NEEDS WORK | Array emit syntax, no group ARIA |
| select | NEEDS WORK | Imprecise emit validators |
| select-multiple | NEEDS WORK | Silent deprecated prop |
| select-ladderized | NEEDS WORK | Generic emit type |
| sidenav | NEEDS WORK | Buttons missing aria-label |
| sidepanel | NEEDS WORK | Missing aria-modal, no focus trap |
| stacking-sidepanel | GOOD | Solid vueuse usage |
| slider | GOOD | Best keyboard support in codebase |
| snackbar | NEEDS WORK | Own Pinia instance |
| status | GOOD | aria-label needs fallback |
| stepper | NEEDS WORK | CSS typo, dead click emit |
| switch | NEEDS WORK | Array emit syntax |
| table | NEEDS WORK | splice(-1) bug, wrong prop default |
| tabs | GOOD | Generic List prop type |
| textarea | GOOD | Emit type format inconsistency |
| time-picker | NEEDS WORK | Emit validator type mismatch |
| tooltip | GOOD | Clean wrapper |
