---
name: sprout-design-system
description: >
  Guide for building Vue 3 applications using the Sprout Design System (design-system-next).
  Use this skill when: (1) Building Vue 3 pages or features that need UI components from the
  Sprout/Toge Design System, (2) Looking up component APIs - props, events, slots, and usage
  examples, (3) Setting up or configuring a project to consume design-system-next, (4) Using
  design tokens (colors, typography, border-color, border-radius, max-width) with the spr- Tailwind prefix,
  (5) Working with the Pinia snackbar store, (6) Scaffolding new pages with spr-prefixed
  components like spr-button, spr-input, spr-modal, spr-table, spr-select, (7) Using design
  color tokens from src/assets/styles/tailwind.css (semantic and raw palette).
---

# Sprout Design System

> **Skill version:** 2.0.0 | **Generated from design-system-next:** v2.27.2

## Installation & Setup

```bash
npm install design-system-next
```

### Global Registration (recommended)

```ts
// main.ts
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import SproutDesignSystem from 'design-system-next';
import 'design-system-next/style.css';

const app = createApp(App);
app.use(createPinia()); // Required for snackbar store
app.use(SproutDesignSystem);
app.mount('#app');
```

All components auto-register with the `spr-` prefix: `<spr-button>`, `<spr-input>`, `<spr-modal>`, etc.

### Tree-Shaking (named imports)

```ts
import { Button, Input, Modal } from 'design-system-next';
```

Components used without prefix: `<Button>`, `<Input>`, `<Modal>`.

### TypeScript Types

```ts
import type { ButtonPropTypes, InputPropTypes } from 'design-system-next';
```

## Tailwind CSS Integration

**Important:** If the consuming app has its own Tailwind CSS setup, always prefer standard (or app-prefixed) Tailwind utility classes for general layout, spacing, sizing, display, flexbox, grid, and other standard utilities. Only use `spr-` prefixed classes for the design system's specific visual tokens.

### When to use `spr-` prefixed classes

Use `spr-` **only** for these design system tokens:
- **Colors** — Prefer semantic tokens from `src/assets/styles/tailwind.css`: `spr-text-color-base`, `spr-background-color-hover`, `spr-border-color-brand-base`, etc. For specific shades use raw palette: `spr-text-kangkong-700`, `spr-bg-tomato-500`. Full list: [references/color-tokens.md](references/color-tokens.md)
- **Typography** — `spr-heading-md`, `spr-body-sm-regular`, `spr-font-main`, `spr-font-size-300`
- **Border Color** — `spr-border-color-base`, `spr-border-color-brand-base` (see [references/color-tokens.md](references/color-tokens.md))
- **Border Radius** — `spr-rounded-border-radius-md`, `spr-rounded-border-radius-lg`
- **Max Width** — `spr-max-w-sm`, `spr-max-w-md`, `spr-max-w-lg`
- **Skeletal Loader** — `spr-skeletal-loader`

### When to use standard Tailwind classes

Use standard Tailwind (no `spr-` prefix) for everything else:
- **Layout** — `flex`, `grid`, `block`, `inline-flex`, `relative`, `absolute`
- **Spacing** — `p-4`, `m-2`, `px-6`, `gap-4`, `space-y-2`
- **Sizing** — `w-full`, `h-10`, `w-1/2`, `min-h-screen`
- **Flexbox / Grid** — `items-center`, `justify-between`, `col-span-2`, `flex-1`
- **Other** — `overflow-hidden`, `cursor-pointer`, `opacity-50`, `transition`

```html
<!-- Correct: standard Tailwind for layout, spr- only for design tokens -->
<div class="flex gap-4 p-6 spr-bg-white-50 spr-rounded-border-radius-md">
  <spr-button tone="success">Save</spr-button>
</div>
```

Custom breakpoints: `sm: 575.98px`, `md: 767.98px`, `lg: 991.98px`, `xl: 1199.98px`, `xxl: 1399.98px`

Preflight is disabled.

## Icons (Iconify)

The design system uses `@iconify/vue` for all icons.

### Usage

```vue
<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <Icon icon="ph:trash" />
  <Icon icon="ph:pencil" class="spr-text-color-brand-base" />
  <spr-button hasIcon>
    <Icon icon="ph:plus" />
    Add Item
  </spr-button>
</template>
```

### Icon Naming Convention

Icons use the `{collection}:{name}` format. The primary collection is **Phosphor** (`ph:`):
- `ph:trash`, `ph:pencil`, `ph:check`, `ph:plus`, `ph:caret-down`
- `ph:file-text`, `ph:check-circle`, `ph:x`

Browse all icons: https://icon-sets.iconify.design/ph/

## Snackbar (Pinia Store)

```ts
import { useSnackbarStore } from 'design-system-next';

const snackbar = useSnackbarStore();
snackbar.message({ text: 'Saved successfully', tone: 'success', duration: 4000 });
```

Or via template ref:

```vue
<template>
  <spr-snackbar ref="snackbarRef" />
</template>
<script setup>
const snackbarRef = ref();
snackbarRef.value?.showSuccess({ text: 'Done!' });
// Also: showSnackbar(), showInformation(), showDanger(), showCaution()
</script>
```

## Component Quick Reference

### Available Components (65 exported)

**Actions & Buttons:** Button, ButtonDropdown, FloatingAction
**Form Inputs:** Input, InputContactNumber, InputCurrency, InputDropdown, InputEmail, InputPassword, InputSearch, InputUrl, InputUsername, Textarea, Checkbox, Radio, RadioGrouped, Switch, Slider, Select, SelectMultiple, SelectLadderized, FileUpload
**Date & Time:** DatePicker, DateCalendarPicker, DateRangePicker, MonthYearPicker, TimePicker
**Data Display:** Avatar, Badge, Banner, Chips, Icon, Logo, Lozenge, ProgressBar, Status, EmptyState, AuditTrail
**Layout & Navigation:** Accordion, Card, Collapsible, List, Tabs, Table, TablePagination, Stepper, Sidenav
**Overlays & Feedback:** Modal, Tooltip, Dropdown, Popper, Snackbar, Sidepanel, StackingSidepanel
**Filters:** Filter, AttributeFilter
**Scheduling:** Calendar, CalendarCell

### Component Naming Convention

- Global registration: `spr-{component-name}` (kebab-case with spr- prefix)
  - `<spr-button>`, `<spr-input-email>`, `<spr-date-picker>`, `<spr-select-multiple>`
- Tree-shaken imports: PascalCase without prefix
  - `<Button>`, `<InputEmail>`, `<DatePicker>`, `<SelectMultiple>`

## Detailed API References

Load the appropriate reference file based on what component you need:

- **Form components** (Input, Select, Checkbox, Radio, Switch, etc.): See [references/form-components.md](references/form-components.md)
- **Display components** (Avatar, Badge, Banner, Chips, Icon, etc.): See [references/display-components.md](references/display-components.md)
- **Layout & Navigation** (Accordion, Card, Table, Tabs, Stepper, etc.): See [references/layout-components.md](references/layout-components.md)
- **Overlays & Feedback** (Modal, Tooltip, Dropdown, Snackbar, Sidepanel, etc.): See [references/overlay-components.md](references/overlay-components.md)
- **Actions, Pickers & Filters** (Button, DatePicker, TimePicker, Calendar, Filter, etc.): See [references/action-components.md](references/action-components.md)
- **Design color tokens** (semantic text/background/border from `src/assets/styles/tailwind.css`): See [references/color-tokens.md](references/color-tokens.md)
- **Design Tokens & Utilities** (palette hex values, Typography, Spacing, Border Radius, etc.): See [references/utilities.md](references/utilities.md)

## Common Patterns

### Form with Validation Feedback

```vue
<template>
  <spr-input
    v-model="name"
    label="Full Name"
    placeholder="Enter your name"
    :error="errors.name"
    error-message="Name is required"
    required
  />
  <spr-select
    v-model="role"
    label="Role"
    :menu-list="roles"
    placeholder="Select a role"
  />
  <spr-button tone="success" @click="submit">Submit</spr-button>
</template>
```

### Modal with Form

```vue
<template>
  <spr-button @click="showModal = true">Open Modal</spr-button>
  <spr-modal v-model:show="showModal" title="Edit Record">
    <template #body>
      <spr-input v-model="value" label="Name" />
    </template>
    <template #footer>
      <spr-button variant="secondary" @click="showModal = false">Cancel</spr-button>
      <spr-button tone="success" @click="save">Save</spr-button>
    </template>
  </spr-modal>
</template>
```

### Table with Pagination

```vue
<template>
  <spr-table :headers="headers" :items="items">
    <template #actions="{ item }">
      <spr-button size="small" variant="tertiary" hasIcon>
        <Icon icon="ph:pencil" />
      </spr-button>
    </template>
  </spr-table>
  <spr-table-pagination
    v-model:page="page"
    :total-items="totalItems"
    :items-per-page="10"
  />
</template>
```

## Sprout Products

Available product logos (for `<spr-logo>`): `hr`, `hr-mobile`, `performance-plus`, `recruit-plus`, `sail`, `readycash`, `readywage`

```vue
<spr-logo name="hr" theme="dark" width="50px" />
```

## Troubleshooting

| Issue | Cause | Fix |
|---|---|---|
| Components render unstyled | Missing CSS import | Add `import 'design-system-next/style.css'` in main.ts |
| Snackbar doesn't work | Missing Pinia | Add `app.use(createPinia())` BEFORE `app.use(SproutDesignSystem)` |
| `spr-` utility classes not working | Tailwind not configured | Ensure consuming app's tailwind.config includes the design system's content paths |
| Icons not rendering | Missing @iconify/vue | Run `npm install @iconify/vue` — it's a peer dependency |

## Related Skills

- **design-system-docu-skills** — For creating and maintaining VitePress component documentation (tabbed docs, PropsPlayground, Guidelines, UI Specs, Accessibility pages)
