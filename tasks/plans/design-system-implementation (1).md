# Design System Implementation Guide
> Vue 3 · Three-Tier Architecture · Shared Versioned Library

---

## Vision

A **shared, versioned Vue component library** consumed by multiple products as an npm dependency. Products never own or copy component source — they import, extend via slots, and own all business logic themselves.

```
┌─────────────────────────────────────────────────┐
│              TIER 3: PATTERNS                   │
│     FilterPanel · DataView · FormWizard         │
│   Layout shells — slot-driven, flow-level       │
├─────────────────────────────────────────────────┤
│              TIER 2: MOLECULES                  │
│   Chip · Banner · DatePicker · SearchInput      │
│   2–3 atoms combined, still self-contained      │
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
│   │       ├── Icon/
│   │       ├── Badge/
│   │       ├── Tag/
│   │       ├── Checkbox/
│   │       ├── Dropdown/
│   │       └── index.ts          ← package entry point
│   │
│   ├── molecules/                ← @yourds/molecules
│   │   └── src/
│   │       ├── Chip/
│   │       │   ├── Chip.vue
│   │       │   ├── Chip.types.ts
│   │       │   ├── Chip.stories.ts
│   │       │   └── index.ts
│   │       ├── Banner/
│   │       ├── DatePicker/
│   │       ├── SearchInput/
│   │       ├── Toast/
│   │       ├── Avatar/
│   │       ├── Tooltip/
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

## Tier Classification — How to Decide

### The 3-Tier Test

```
Does it render ONE indivisible thing?
└── YES → Tier 1 Primitive   (Button, Icon, Badge, Input)

Is it 2–3 atoms combined into a NEW named UI concept
that still feels like one component to the user?
└── YES → Tier 2 Molecule    (Chip, Banner, DatePicker, Toast)

Is it a layout shell that holds an entire flow
and needs slots for product content injection?
└── YES → Tier 3 Pattern     (FilterPanel, DataView, FormWizard)

Is it specific to one product's domain?
└── YES → Product repo only  (InvoiceFilterPanel, UserDataView)
```

### Component Classification Reference

| Component | Tier | Why |
|---|---|---|
| Button | Primitive | Single element, no composition |
| Input | Primitive | Single element |
| Icon | Primitive | Single element |
| Badge | Primitive | Single element |
| Tag | Primitive | Single element |
| Checkbox | Primitive | Single element |
| Dropdown | Primitive | Single interactive element |
| **Chip** | **Molecule** | Badge + Icon + dismiss interaction |
| **Banner** | **Molecule** | Icon + text + optional Button |
| **DatePicker** | **Molecule** | Input + Calendar + Icon |
| **SearchInput** | **Molecule** | Input + Icon + clear Button |
| **Toast** | **Molecule** | Icon + text + close Button |
| **Avatar** | **Molecule** | Image + fallback initials + status Badge |
| **Tooltip** | **Molecule** | Trigger slot + floating text box |
| FilterPanel | Pattern | Layout shell with named slots |
| DataView | Pattern | Layout shell with named slots |
| FormWizard | Pattern | Layout shell with named slots |

Rule: if a domain word appears in the component name — it does not belong in the DS.

---

## Tier 1 — Primitive Components

### The 4-Question Atomic Test

Before building any component, answer these:

1. Does it render **one** thing?
2. Can it exist without knowing **why** it's being used?
3. Is its only input **props + slots**? (no API calls, no composables)
4. Can **two completely different products** use it unchanged?

If any answer is **no** — it belongs in Tier 2 or higher.

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

## Tier 2 — Molecule Components

Molecules are **2–3 primitives combined into a new named UI concept** that still feels like a single component to the user. They live in `@yourds/molecules` and import only from `@yourds/primitives`.

### What Molecules CAN and CANNOT Have

| ✅ Allowed | ❌ Not Allowed |
|---|---|
| Compose 2–3 primitives | Fetch data or call APIs |
| Internal UI state (calendar open/close, tooltip) | Domain types |
| Generic typed props | Import from patterns or products |
| Emit raw events (dismiss, select, clear) | More than ~5 props (question the design) |
| Accessibility wiring across composed parts | Global state |

---

### Chip — Full Example

Chip is NOT just a Badge. It's Badge + Icon + dismiss — a new named concept.

**Chip.types.ts**
```typescript
export interface ChipProps {
  label: string
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md'
  /** Shows dismiss (×) button */
  dismissible?: boolean
  /** Left icon */
  icon?: string
  isDisabled?: boolean
}

export interface ChipEmits {
  (e: 'dismiss'): void
  (e: 'click'): void
}
```

**Chip.vue**
```vue
<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@yourds/primitives'   // ← atoms only
import type { ChipProps, ChipEmits } from './Chip.types'

const props = withDefaults(defineProps<ChipProps>(), {
  variant: 'default',
  size: 'md',
  dismissible: false,
  isDisabled: false,
})

const emit = defineEmits<ChipEmits>()

const classes = computed(() => [
  'chip',
  `chip--${props.variant}`,
  `chip--${props.size}`,
  { 'chip--disabled': props.isDisabled },
])
</script>

<template>
  <span :class="classes">
    <Icon v-if="icon" :name="icon" class="chip__icon" />
    <span class="chip__label">{{ label }}</span>
    <button
      v-if="dismissible"
      class="chip__dismiss"
      :disabled="isDisabled"
      @click.stop="emit('dismiss')"
    >×</button>
  </span>
</template>
```

---

### Banner — Full Example

Banner is Icon + text area + optional action Button — a notification concept.

**Banner.types.ts**
```typescript
export interface BannerProps {
  title: string
  description?: string
  variant?: 'info' | 'success' | 'warning' | 'danger'
  /** Shows dismiss button */
  dismissible?: boolean
}

export interface BannerEmits {
  (e: 'dismiss'): void
}

export interface BannerSlots {
  /** Optional action area — inject a Button */
  action(): any
}
```

**Banner.vue**
```vue
<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@yourds/primitives'
import type { BannerProps, BannerEmits, BannerSlots } from './Banner.types'

const props = withDefaults(defineProps<BannerProps>(), {
  variant: 'info',
  dismissible: false,
})

const emit = defineEmits<BannerEmits>()
defineSlots<BannerSlots>()

const iconMap = { info: 'info', success: 'check', warning: 'alert', danger: 'x-circle' }
const icon = computed(() => iconMap[props.variant])
</script>

<template>
  <div :class="['banner', `banner--${variant}`]">
    <Icon :name="icon" class="banner__icon" />
    <div class="banner__content">
      <p class="banner__title">{{ title }}</p>
      <p v-if="description" class="banner__description">{{ description }}</p>
      <div v-if="$slots.action" class="banner__action">
        <slot name="action" />
      </div>
    </div>
    <button v-if="dismissible" class="banner__dismiss" @click="emit('dismiss')">×</button>
  </div>
</template>
```

## Tier 3 — Pattern Components

Patterns are **named layout shells** composed of primitives and molecules. They live in `@yourds/patterns` and own:
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

Products install only what they need:

```json
// product/package.json
{
  "dependencies": {
    "@yourds/primitives": "^1.4.0",
    "@yourds/molecules": "^1.2.0",
    "@yourds/patterns": "^1.1.0"
  }
}
```

A simple product might only need `@yourds/primitives`. A data-heavy product installs all three.

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
Does it render ONE indivisible visual element?
├── YES → Tier 1 Primitive (Button, Input, Badge, Icon, Tag)
└── NO ↓

Is it 2–3 atoms forming a new named UI concept,
still self-contained with no layout opinions?
├── YES → Tier 2 Molecule (Chip, Banner, DatePicker, Toast, Avatar)
└── NO ↓

Is it a layout shell for an entire UI flow,
needing slots for product content injection?
├── YES → Tier 3 Pattern (FilterPanel, DataView, FormWizard)
└── NO ↓

Is it specific to one product's domain?
└── YES → Product repo only (InvoiceFilterPanel, UserDataView)
```

---

## Naming Convention

```
Tier 1 (primitives)   — short generic nouns
  Button, Input, Tag, Badge, Icon, Checkbox, Dropdown

Tier 2 (molecules)    — compound nouns describing the new concept
  Chip, Banner, DatePicker, SearchInput, Toast, Avatar, Tooltip

Tier 3 (patterns)     — compound descriptive nouns ending in Panel/View/Wizard
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
  Button.stories.ts   ← all variants as Storybook stories
  index.ts            ← export entry point

Tier 2 Molecules:
  Chip.types.ts       ← props + emits + slots typed
  Chip.stories.ts     ← shows all states and compositions
  index.ts            ← export entry point

Tier 3 Patterns:
  FilterPanel.types.ts   ← slot + prop contract
  FilterPanel.stories.ts ← shows slot usage with real primitives
  README.md              ← explains the flow, do's and don'ts
  index.ts               ← export entry point
```

No YAML needed. TypeScript types + JSDoc + Storybook stories give AI everything it needs for accurate code generation.

---

## One-Way Dependency Rule

```
Products     →  can import from  →  @yourds/patterns
Products     →  can import from  →  @yourds/molecules
Products     →  can import from  →  @yourds/primitives
Patterns     →  can import from  →  @yourds/molecules + @yourds/primitives
Molecules    →  can import from  →  @yourds/primitives only
Primitives   →  import from      →  tokens only

❌  Primitives never import from molecules, patterns, or products
❌  Molecules never import from patterns or products
❌  Patterns never import from products
❌  DS packages never import domain types
```

---

## Layer Ownership Summary

| Layer | Owns | Never Touches |
|---|---|---|
| **@yourds/primitives** | Visual atom, states, a11y | APIs, auth, routing, domain types |
| **@yourds/molecules** | Named UI concepts from 2–3 atoms | APIs, domain types, patterns, products |
| **@yourds/patterns** | Layout shells, slot structure, show/hide | Data fetching, business rules, domain types |
| **Product adapter** | API → prop shape transformation | Visual implementation |
| **Product composable** | State, API calls, business logic | Visual styling |

---

## Prompting AI With This System

When asking AI to generate product code, use this framing:

```
I have a shared Vue design system with three packages:
- @yourds/primitives — atomic components (Button, Input, Icon, Tag, Badge, Checkbox)
- @yourds/molecules  — composed UI concepts (Chip, Banner, DatePicker, Toast, Avatar)
- @yourds/patterns   — layout shells with slots (FilterPanel, DataView, FormWizard)

Rules:
1. Components are imported, never copied or modified
2. All business logic, API calls, and state live in product composables
3. Patterns use named slots — the product injects content via <template #slot-name>
4. Molecules compose primitives — they have no domain knowledge
5. No domain types inside any DS component

Generate a [feature name] using FilterPanel from @yourds/patterns,
Chip from @yourds/molecules, and Dropdown, Button from @yourds/primitives.
The product composable is useXxxFilters() and handles all state.
```

This anchors the AI to the architecture and prevents it from collapsing logic back into components.
