# Design System Implementation Guide
> Vue 3 · Two-Tier Architecture · Shared Versioned Library

---

## Vision

A **shared, versioned Vue component library** consumed by multiple products as an npm dependency. Products never own or copy component source — they import, extend via slots, and own all business logic themselves.

```
┌─────────────────────────────────────────────────┐
│              TIER 2: PATTERNS                   │
│     FilterPanel · DataView · FormWizard         │
│   Layout shells composed from primitives        │
├─────────────────────────────────────────────────┤
│              TIER 1: PRIMITIVES                 │
│   Button · Input · Badge · Checkbox · Tag       │
│       Pure visual atoms — props in, render out  │
└─────────────────────────────────────────────────┘
         ↑ imported by products, never copied
```

---

## Monorepo Structure

```
design-system/
├── packages/
│   ├── primitives/               ← @yourds/primitives
│   │   └── src/
│   │       ├── Button/
│   │       │   ├── Button.vue
│   │       │   ├── Button.types.ts
│   │       │   ├── Button.stories.ts
│   │       │   └── index.ts
│   │       ├── Input/
│   │       ├── Badge/
│   │       ├── Tag/
│   │       ├── Checkbox/
│   │       ├── Dropdown/
│   │       └── index.ts          ← package entry point
│   │
│   └── patterns/                 ← @yourds/patterns
│       └── src/
│           ├── FilterPanel/
│           │   ├── FilterPanel.vue
│           │   ├── FilterPanel.types.ts
│           │   ├── FilterPanel.stories.ts
│           │   ├── README.md
│           │   └── index.ts
│           ├── DataView/
│           ├── FormWizard/
│           └── index.ts
│
├── apps/
│   └── docs/                     ← Storybook documentation site
│
├── tokens/
│   └── tokens.json               ← Single source of truth for design tokens
│
└── package.json                  ← Monorepo root (pnpm workspaces)
```

---

## Design Tokens — Single Source of Truth

All visual values live here. Components reference tokens only — never raw values.

```json
// tokens/tokens.json
{
  "color": {
    "primary": {
      "500": "#2563EB",
      "600": "#1D4ED8"
    },
    "danger": { "500": "#DC2626" },
    "neutral": {
      "100": "#F5F5F5",
      "900": "#111111"
    }
  },
  "spacing": {
    "1": "4px",
    "2": "8px",
    "3": "12px",
    "4": "16px",
    "6": "24px"
  },
  "radius": {
    "sm": "4px",
    "md": "8px",
    "full": "9999px"
  },
  "font": {
    "size": {
      "sm": "12px",
      "md": "14px",
      "lg": "16px"
    }
  },
  "breakpoint": {
    "sm": "640px",
    "md": "768px",
    "lg": "1024px"
  }
}
```

---

## Tier 1 — Primitive Components

### The 4-Question Atomic Test

Before building any component, answer these:

1. Does it render **one** thing?
2. Can it exist without knowing **why** it's being used?
3. Is its only input **props + slots**? (no API calls, no composables)
4. Can **two completely different products** use it unchanged?

If any answer is **no** — it belongs in Tier 2 or the product.

---

### Primitive File Structure

```
Button/
├── Button.vue          ← template + scoped styles only
├── Button.types.ts     ← props interface, emits, slots
├── Button.stories.ts   ← all variants as Storybook stories
└── index.ts            ← named export
```

---

### Button — Full Example

**Button.types.ts**
```typescript
export interface ButtonProps {
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  /** Component size */
  size?: 'sm' | 'md' | 'lg'
  /** Shows loading spinner, disables interaction */
  isLoading?: boolean
  /** Prevents interaction */
  isDisabled?: boolean
  /** Icon before label */
  leftIcon?: string
  /** Icon after label */
  rightIcon?: string
  /** Native button type */
  type?: 'button' | 'submit' | 'reset'
}

export interface ButtonEmits {
  /** Fires on click — product decides what happens */
  (e: 'click', event: MouseEvent): void
}
```

**Button.vue**
```vue
<script setup lang="ts">
import type { ButtonProps, ButtonEmits } from './Button.types'

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  isLoading: false,
  isDisabled: false,
})

const emit = defineEmits<ButtonEmits>()

// ✅ Only visual computed logic allowed here
const classes = computed(() => [
  'btn',
  `btn--${props.variant}`,
  `btn--${props.size}`,
  { 'btn--loading': props.isLoading },
  { 'btn--disabled': props.isDisabled },
])
</script>

<template>
  <button
    :class="classes"
    :type="type"
    :disabled="isDisabled || isLoading"
    @click="emit('click', $event)"
  >
    <span v-if="isLoading" class="btn__spinner" />
    <span v-if="leftIcon" class="btn__icon btn__icon--left">{{ leftIcon }}</span>
    <slot />
    <span v-if="rightIcon" class="btn__icon btn__icon--right">{{ rightIcon }}</span>
  </button>
</template>
```

**index.ts**
```typescript
export { default as Button } from './Button.vue'
export type { ButtonProps, ButtonEmits } from './Button.types'
```

---

### What Primitives CAN and CANNOT Have

| ✅ Allowed | ❌ Not Allowed |
|---|---|
| Visual variants | `fetch`, `axios`, `useQuery` |
| Props + emits + slots | Auth tokens or user roles |
| Internal UI state (dropdown open/close) | Router imports |
| Accessibility attributes | Global state (Pinia, Vuex) |
| Scoped animations | Domain types (`InvoiceStatus`, `UserRole`) |
| `computed` for class binding | `watch`, `onMounted` for data |

---

## Tier 2 — Pattern Components

Patterns are **named layout shells** composed of primitives. They live in `@yourds/patterns` and own:
- Layout and spacing of a UI flow
- Slot structure for product injection
- Show/hide logic based on generic props

They do **not** own data, state, or domain logic.

---

### FilterPanel — Full Example

**FilterPanel.types.ts**
```typescript
export interface FilterPanelProps {
  /** Shows the active filters section when true */
  hasActiveFilters?: boolean
  /** Collapses the filter area on mobile */
  isCollapsed?: boolean
}

export interface FilterPanelSlots {
  /** Inject Dropdown, Checkbox, or any filter controls */
  filters(): any
  /** Inject Apply and Reset buttons */
  actions(): any
  /** Inject Tag components for active filter display */
  'active-filters'(): any
}
```

**FilterPanel.vue**
```vue
<script setup lang="ts">
import type { FilterPanelProps, FilterPanelSlots } from './FilterPanel.types'

const props = withDefaults(defineProps<FilterPanelProps>(), {
  hasActiveFilters: false,
  isCollapsed: false,
})

defineSlots<FilterPanelSlots>()
</script>

<template>
  <div class="filter-panel">
    <div v-if="!isCollapsed" class="filter-panel__filters">
      <slot name="filters" />
    </div>

    <div class="filter-panel__actions">
      <slot name="actions" />
    </div>

    <div v-if="hasActiveFilters" class="filter-panel__active">
      <slot name="active-filters" />
    </div>
  </div>
</template>
```

---

## Product Layer — How Teams Consume This

Products install both packages as dependencies:

```json
// product/package.json
{
  "dependencies": {
    "@yourds/primitives": "^1.4.0",
    "@yourds/patterns": "^1.2.0"
  }
}
```

### The Adapter Pattern

The adapter is the **only place** that knows both your API shape and your component's prop shape.

```
API Response           Adapter (product)         Component Props
──────────────    →    ────────────────    →    ────────────────
{                      transform()              { id: string,
  id: 1,                                          label: string,
  status: 'PAID',                                 badge: 'success' }
  amount: 500
}
```

When your API changes, fix the adapter — not the component.

---

### InvoiceFilterPanel — Product Usage Example

```vue
<!-- product/src/features/invoices/InvoiceFilterPanel.vue -->
<script setup lang="ts">
import { FilterPanel } from '@yourds/patterns'
import { Dropdown, Button, Tag } from '@yourds/primitives'
import { useInvoiceFilters } from '@/composables/useInvoiceFilters'

// ✅ All logic lives here in the product
const {
  statusOptions,
  dateOptions,
  activeFilters,
  setStatus,
  setDateRange,
  applyFilters,
  resetFilters,
  removeFilter,
} = useInvoiceFilters()
</script>

<template>
  <FilterPanel :has-active-filters="activeFilters.length > 0">

    <template #filters>
      <Dropdown
        :options="statusOptions"
        placeholder="Status"
        @select="setStatus"
      />
      <Dropdown
        :options="dateOptions"
        placeholder="Date Range"
        @select="setDateRange"
      />
    </template>

    <template #actions>
      <Button variant="ghost" @click="resetFilters">Reset</Button>
      <Button variant="primary" @click="applyFilters">Apply Filters</Button>
    </template>

    <template #active-filters>
      <Tag
        v-for="filter in activeFilters"
        :key="filter.id"
        :label="filter.label"
        dismissible
        @dismiss="removeFilter(filter.id)"
      />
    </template>

  </FilterPanel>
</template>
```

**The composable stays in the product:**

```typescript
// product/src/composables/useInvoiceFilters.ts
import { ref, computed } from 'vue'
import { useInvoicesApi } from '@/api/invoices'

export function useInvoiceFilters() {
  const status = ref<string | null>(null)
  const dateRange = ref<string | null>(null)
  const { fetchInvoices } = useInvoicesApi()

  const activeFilters = computed(() => {
    const filters = []
    if (status.value) filters.push({ id: 'status', label: status.value })
    if (dateRange.value) filters.push({ id: 'date', label: dateRange.value })
    return filters
  })

  const applyFilters = () => fetchInvoices({ status: status.value, dateRange: dateRange.value })
  const resetFilters = () => { status.value = null; dateRange.value = null }
  const removeFilter = (id: string) => { if (id === 'status') status.value = null }

  return {
    statusOptions: [/* ... */],
    dateOptions: [/* ... */],
    activeFilters,
    setStatus: (val: string) => status.value = val,
    setDateRange: (val: string) => dateRange.value = val,
    applyFilters,
    resetFilters,
    removeFilter,
  }
}
```

---

## Component Decision Tree

```
Is it a single visual element with no context opinions?
├── YES → Tier 1 Primitive (Button, Input, Badge, Tag)
└── NO ↓

Is it a named UI layout/flow used across multiple products?
├── YES → Tier 2 Pattern (FilterPanel, DataView, FormWizard)
└── NO ↓

Is it specific to one product's domain?
└── YES → Product repo only (InvoiceFilterPanel, UserDataView)
```

---

## Naming Convention

```
Tier 1 (primitives)   — short generic nouns
  Button, Input, Tag, Badge, Modal, Tooltip, Dropdown

Tier 2 (patterns)     — compound descriptive nouns
  FilterPanel, DataView, FormWizard, SearchCombobox

Product components    — domain-prefixed
  InvoiceFilterPanel, UserDataView, OrderFormWizard
```

Rule: if a domain word appears in the component name — it does not belong in the DS.

---

## Documentation Format Per Component

```
Tier 1 Primitives:
  Button.types.ts     ← typed props with JSDoc (AI reads as spec)
  Button.stories.ts   ← usage examples (AI learns patterns)
  index.ts            ← export entry point

Tier 2 Patterns:
  FilterPanel.types.ts   ← slot + prop contract
  FilterPanel.stories.ts ← shows slot usage
  README.md              ← explains the flow, do's and don'ts
  index.ts               ← export entry point
```

No YAML needed. TypeScript types + JSDoc + Storybook stories give AI everything it needs for accurate code generation.

---

## One-Way Dependency Rule

```
Products     →  can import from  →  @yourds/patterns
Products     →  can import from  →  @yourds/primitives
Patterns     →  can import from  →  @yourds/primitives
Primitives   →  import from      →  tokens only

❌  Primitives never import from patterns
❌  Primitives never import from products
❌  Patterns never import from products
❌  DS packages never import domain types
```

---

## Layer Ownership Summary

| Layer | Owns | Never Touches |
|---|---|---|
| **@yourds/primitives** | Visual atom, states, a11y | APIs, auth, routing, domain types |
| **@yourds/patterns** | Layout, slot structure, show/hide | Data fetching, business rules, domain types |
| **Product adapter** | API → prop shape transformation | Visual implementation |
| **Product composable** | State, API calls, business logic | Visual styling |

---

## Prompting AI With This System

When asking AI to generate product code, use this framing:

```
I have a shared Vue design system with two packages:
- @yourds/primitives — atomic components (Button, Input, Tag, Dropdown, Badge)
- @yourds/patterns — layout shells with slots (FilterPanel, DataView)

Rules:
1. Components are imported, never copied or modified
2. All business logic, API calls, and state live in product composables
3. Patterns use named slots — the product injects content via <template #slot-name>
4. No domain types inside DS components

Generate a [feature name] using FilterPanel from @yourds/patterns
and Dropdown, Button, Tag from @yourds/primitives.
The product composable is useXxxFilters() and handles all state.
```

This anchors the AI to the architecture and prevents it from collapsing logic back into components.
