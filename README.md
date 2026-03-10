# Sprout Design System

A Vue 3 component library in a monorepo, shipping two independently installable packages — the legacy `spr-` system for existing products and the new `toge-` system for new products.

---

## Packages

| Package | npm name | Version | Purpose |
|---------|----------|---------|---------|
| `packages/tokens` | `@toge-design-system/tokens` | 0.1.0 | Shared design tokens, Tailwind config, CSS variables |
| `packages/legacy` | `@toge-design-system/design-system-next` | 2.27.3 | Legacy `spr-` component system |
| `packages/toge` | `@toge-design-system/toge` | 0.1.0 | New `toge-` component system |

---

## Installation

### New products — install the toge system

```bash
npm install @toge-design-system/toge
```

Peer dependencies you must install separately:

```bash
npm install vue pinia floating-vue tailwindcss
```

### Existing products — install the legacy system

```bash
npm install @toge-design-system/design-system-next
```

Peer dependency:

```bash
npm install vue
```

### Tokens only (advanced)

```bash
npm install @toge-design-system/tokens
```

---

## Setup — Toge Package (`@toge-design-system/toge`)

### 1. Register the plugin

```ts
// main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import FloatingVue from 'floating-vue'
import TogeDS from '@toge-design-system/toge'
import '@toge-design-system/toge/style.css'

const app = createApp(App)
app.use(createPinia())
app.use(FloatingVue)
app.use(TogeDS)
app.mount('#app')
```

### 2. Configure Tailwind

```js
// tailwind.config.js
import togeTokens from '@toge-design-system/tokens/tailwind'

export default {
  ...togeTokens,
  content: [
    './src/**/*.{vue,ts,js}',
    './node_modules/@toge-design-system/toge/dist/**/*.js',
  ],
}
```

### 3. Use components

All components are globally registered with the `toge-` prefix after calling `app.use(TogeDS)`.

```vue
<template>
  <toge-button variant="primary" @click="handleClick">Save</toge-button>
  <toge-badge tone="success">Active</toge-badge>
  <toge-input v-model="value" label="Email" />
</template>
```

You can also import components individually for tree-shaking:

```ts
import { TogeButton, TogeBadge, TogeInput } from '@toge-design-system/toge'
```

---

## Setup — Legacy Package (`@toge-design-system/design-system-next`)

### 1. Register the plugin

```ts
// main.ts
import { createApp } from 'vue'
import DesignSystem from '@toge-design-system/design-system-next'
import '@toge-design-system/design-system-next/style.css'

const app = createApp(App)
app.use(DesignSystem)
app.mount('#app')
```

### 2. Configure Tailwind

```js
// tailwind.config.js
import tokensConfig from '@toge-design-system/tokens/tailwind'

export default {
  ...tokensConfig,
  content: [
    './src/**/*.{vue,ts,js}',
    './node_modules/@toge-design-system/design-system-next/dist/**/*.js',
  ],
}
```

### 3. Use components

All components are globally registered with the `spr-` prefix.

```vue
<template>
  <spr-button variant="primary">Save</spr-button>
  <spr-input v-model="value" label="Email" />
  <spr-modal v-model="isOpen" title="Confirm">...</spr-modal>
</template>
```

---

## Component Reference

### Toge — Primitives

| Component | Tag | Description |
|-----------|-----|-------------|
| `TogeButton` | `<toge-button>` | Primary action button |
| `TogeBadge` | `<toge-badge>` | Status indicator badge |
| `TogeIcon` | `<toge-icon>` | Iconify icon wrapper |
| `TogeLozenge` | `<toge-lozenge>` | Inline status label |
| `TogeStatus` | `<toge-status>` | Dot + label status indicator |
| `TogeInput` | `<toge-input>` | Text input field |
| `TogeInputSearch` | `<toge-input-search>` | Search input |
| `TogeInputEmail` | `<toge-input-email>` | Email input with validation |
| `TogeInputPassword` | `<toge-input-password>` | Password input with toggle |
| `TogeInputUrl` | `<toge-input-url>` | URL input |
| `TogeInputUsername` | `<toge-input-username>` | Username input |
| `TogeInputContactNumber` | `<toge-input-contact-number>` | Phone input with country code |
| `TogeInputCurrency` | `<toge-input-currency>` | Currency input |
| `TogeTextarea` | `<toge-textarea>` | Multi-line text input |
| `TogeCheckbox` | `<toge-checkbox>` | Checkbox input |
| `TogeRadio` | `<toge-radio>` | Radio button |
| `TogeSwitch` | `<toge-switch>` | Toggle switch |
| `TogeSlider` | `<toge-slider>` | Range slider |
| `TogeProgressBar` | `<toge-progress-bar>` | Progress indicator |
| `TogeCollapsible` | `<toge-collapsible>` | Expandable container |
| `TogePopover` | `<toge-popover>` | Floating popover |
| `TogeFloatingAction` | `<toge-floating-action>` | Floating action button |
| `TogeEventCell` | `<toge-event-cell>` | Calendar event cell |
| `TogeLogo` | `<toge-logo>` | Brand logo |

### Toge — Molecules

| Component | Tag | Description |
|-----------|-----|-------------|
| `TogeAvatar` | `<toge-avatar>` | User avatar |
| `TogeTooltip` | `<toge-tooltip>` | Hover tooltip |
| `TogeBanner` | `<toge-banner>` | Page-level alert banner |
| `TogeSnackbar` | `<toge-snackbar>` | Toast notification |
| `TogeCard` | `<toge-card>` | Content card container |
| `TogeEmptyState` | `<toge-empty-state>` | Empty state illustration |
| `TogeChips` | `<toge-chips>` | Tag/chip group |
| `TogeDatePicker` | `<toge-date-picker>` | Single date picker |
| `TogeDateRangePicker` | `<toge-date-range-picker>` | Date range picker |
| `TogeDateCalendarPicker` | `<toge-date-calendar-picker>` | Inline calendar picker |
| `TogeMonthYearPicker` | `<toge-month-year-picker>` | Month/year selector |
| `TogeTimePicker` | `<toge-time-picker>` | Time selector |

### Toge — Patterns

| Component | Tag | Description |
|-----------|-----|-------------|
| `TogeModal` | `<toge-modal>` | Dialog modal |
| `TogeSidepanel` | `<toge-sidepanel>` | Slide-in side panel |
| `TogeTabs` | `<toge-tabs>` | Tabbed navigation |
| `TogeStepper` | `<toge-stepper>` | Multi-step form stepper |
| `TogeStep` | `<toge-step>` | Individual step inside stepper |
| `TogeFileUpload` | `<toge-file-upload>` | File upload with drag-and-drop |
| `TogeTable` | `<toge-table>` | Data table |
| `TogeTablePagination` | `<toge-table-pagination>` | Table pagination controls |

---

## Design Tokens

All tokens are exposed via Tailwind utilities with the `spr-` prefix.

### Tailwind Usage

```html
<!-- Colors -->
<div class="spr-bg-kangkong-500 spr-text-white">Brand green</div>

<!-- Semantic text colors -->
<p class="spr-text-color-strong">Primary text</p>
<p class="spr-text-color-weak">Muted text</p>
<p class="spr-text-color-brand-base">Brand color</p>
<p class="spr-text-color-danger-base">Error text</p>

<!-- Spacing -->
<div class="spr-p-size-spacing-md spr-gap-size-spacing-xs">...</div>

<!-- Border radius -->
<div class="spr-rounded-border-radius-md">...</div>

<!-- Shadows -->
<div class="spr-shadow-drop-md">...</div>

<!-- Typography -->
<h1 class="spr-heading-lg">Page title</h1>
<p class="spr-body-md-regular">Body text</p>
<span class="spr-label-sm-medium">Label</span>
```

### Color Palette

The design system uses food-inspired color names:

| Token | Description |
|-------|-------------|
| `kangkong` | Brand green (primary) |
| `mushroom` | Neutral grey |
| `tomato` | Red / danger |
| `carrot` | Orange / warning |
| `mango` | Yellow / caution |
| `wintermelon` | Teal / info |
| `blueberry` | Blue / information |
| `ubas` | Purple / accent |

Each color has shades from `50` to `950`, e.g. `spr-bg-kangkong-100`, `spr-text-tomato-600`.

### CSS Variables

The CSS file (`@toge-design-system/tokens/styles`) ships semantic CSS variables for backgrounds, borders, and text:

```css
/* Backgrounds */
--color-background-base
--color-background-subtle
--color-background-inverse

/* Borders */
--color-border-base
--color-border-strong

/* Text */
--color-text-strong
--color-text-base
--color-text-weak
--color-text-brand-base
--color-text-danger-base
```

---

## Snackbar Store (Toge)

The toge package ships a Pinia store for triggering snackbar notifications imperatively.

```ts
import { useSnackbarStore } from '@toge-design-system/toge'

const snackbar = useSnackbarStore()

snackbar.show({
  message: 'Changes saved successfully',
  type: 'success',
})
```

Mount `<toge-snackbar>` once at your app root:

```vue
<template>
  <toge-snackbar />
  <RouterView />
</template>
```

---

## TypeScript

All components ship full TypeScript types. Import prop types directly:

```ts
import type {
  TogeButtonProps,
  TogeInputProps,
  TogeModalProps,
  TogeTableProps,
} from '@toge-design-system/toge'
```

For the legacy package:

```ts
import type {
  NavLinks,
  ActiveNav,
  UserMenu,
} from '@toge-design-system/design-system-next'
```

---

## Monorepo Development

```bash
# Install all workspace deps
npm install

# Start dev server (playground at http://localhost:5173)
npm run dev

# Build legacy package
npm run build --workspace=packages/legacy

# Build toge package
npm run build --workspace=packages/toge

# Build tokens package
npm run build --workspace=packages/tokens
```

### Source structure

```
src/
├── legacy/        ← Source for @toge-design-system/design-system-next (spr- components)
├── toge/          ← Source for @toge-design-system/toge (toge components)
│   ├── primitives/
│   ├── molecules/
│   ├── patterns/
│   └── stores/
└── tokens/        ← Source for @toge-design-system/tokens
    ├── scripts/   ← Token JS values (colors, spacing, etc.)
    └── styles/    ← tailwind.css with @apply utilities

packages/
├── tokens/        ← Package config for tokens
├── legacy/        ← Package config + build for legacy
└── toge/          ← Package config + build for toge
```

### One-way dependency rule

```
tokens  ←  legacy
tokens  ←  toge

primitives  ←  molecules  ←  patterns

❌  primitives must not import from molecules or patterns
❌  molecules must not import from patterns
❌  DS components must not import domain/product types
```

---

## Migration Guide

If you are moving from the legacy to the toge system:

1. Install `@toge-design-system/toge` alongside the legacy package
2. Replace `spr-button` → `toge-button`, `spr-input` → `toge-input`, etc.
3. Component APIs are similar but not identical — check prop names for each component
4. Once all `spr-` references are removed, uninstall `@toge-design-system/design-system-next`
