# Boilerplate Templates

Copy-paste starters for each tab file when adding tabbed documentation to a new component. Replace all `{PLACEHOLDERS}` with actual values.

## Placeholders

| Placeholder | Example | Description |
|---|---|---|
| `{COMPONENT_NAME}` | `Button` | PascalCase display name |
| `{COMPONENT_TAG}` | `spr-button` | Kebab-case tag with `spr-` prefix |
| `{COMPONENT_DESCRIPTION}` | `The Button component is a versatile...` | One-paragraph description (same on all 5 tabs) |
| `{IMPORT_PATH}` | `@/components/button/button.vue` | Path used in `import` statements |
| `{IMPORT_NAME}` | `SprButton` | PascalCase import name |
| `{COMPONENT_SLUG}` | `button` | Kebab-case name used in URL and `component-name` prop |
| `{PARENT_SLUG}` | `button` | Parent group slug (only for nested components — add `parent="{PARENT_SLUG}"` to ComponentTabBar) |

---

## index.md — Live Example

```markdown
---
title: {COMPONENT_NAME}
description: The Sprout {COMPONENT_NAME} component — interactive playground with live controls.
outline: deep
---

# {COMPONENT_NAME}

{COMPONENT_DESCRIPTION}

<ComponentTabBar component-name="{COMPONENT_SLUG}" :tabs="[
  { label: 'Live Example', slug: '' },
  { label: 'Code Docu', slug: 'code' },
  { label: 'Guidelines', slug: 'guidelines' },
  { label: 'UI Specs', slug: 'ui-specs' },
  { label: 'Accessibility', slug: 'accessibility' },
]" />

## Interactive Playground

Use the controls below to customize the {COMPONENT_NAME} component and see the changes in real-time. The generated code snippet updates automatically.

<script setup>
import {IMPORT_NAME} from '{IMPORT_PATH}';
import SprLogo from '@/components/logo/logo.vue';
</script>

<PropsPlayground
  :component="{IMPORT_NAME}"
  component-tag="{COMPONENT_TAG}"
  :prop-defs="[
    { name: 'PROP_NAME', type: 'select', options: ['option1', 'option2'], default: 'option1' },
    { name: 'disabled', type: 'boolean', default: false },
  ]"
  default-slot="{COMPONENT_NAME}"
/>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark" width="50px" />
  <!-- Add relevant product logos -->
</div>
```

### Minimal version (3 tabs only)

For simple components that don't need Guidelines or UI Specs, reduce the `:tabs` array:

```markdown
<ComponentTabBar component-name="{COMPONENT_SLUG}" :tabs="[
  { label: 'Live Example', slug: '' },
  { label: 'Code Docu', slug: 'code' },
  { label: 'Accessibility', slug: 'accessibility' },
]" />
```

---

## code.md — Code Documentation

```markdown
---
title: {COMPONENT_NAME} — Code Documentation
description: Code examples, demos, and API reference for the Sprout {COMPONENT_NAME} component.
outline: deep
---

# {COMPONENT_NAME}

{COMPONENT_DESCRIPTION}

<ComponentTabBar component-name="{COMPONENT_SLUG}" :tabs="[
  { label: 'Live Example', slug: '' },
  { label: 'Code Docu', slug: 'code' },
  { label: 'Guidelines', slug: 'guidelines' },
  { label: 'UI Specs', slug: 'ui-specs' },
  { label: 'Accessibility', slug: 'accessibility' },
]" />

## Code Documentation

### Import

\```vue
<script lang="ts" setup>
import {IMPORT_NAME} from "{IMPORT_PATH}";
</script>
\```

### Basic Usage

<div class="spr-flex spr-items-center spr-gap-2">
  <{COMPONENT_TAG}>Content</{COMPONENT_TAG}>
</div>

\```html
<{COMPONENT_TAG}>Content</{COMPONENT_TAG}>
\```

<!-- Add prop demo sections below -->

### API Reference

#### Props

<table>
  <thead>
    <tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr>
  </thead>
  <tbody>
    <tr><td><code>propName</code></td><td>Description</td><td><code>string</code></td><td><code>'default'</code></td></tr>
  </tbody>
</table>

#### Events

<table>
  <thead>
    <tr><th>Name</th><th>Description</th><th>Parameters</th></tr>
  </thead>
  <tbody>
    <tr><td><code>click</code></td><td>Emitted when clicked</td><td><code>event: MouseEvent</code></td></tr>
  </tbody>
</table>

#### Slots

<table>
  <thead>
    <tr><th>Name</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>default</code></td><td>Main content</td></tr>
  </tbody>
</table>
```

---

## guidelines.md — Guidelines

```markdown
---
title: {COMPONENT_NAME} — Guidelines
description: Usage guidelines, variant selection, and best practices for the Sprout {COMPONENT_NAME} component.
outline: deep
---

# {COMPONENT_NAME}

{COMPONENT_DESCRIPTION}

<ComponentTabBar component-name="{COMPONENT_SLUG}" :tabs="[
  { label: 'Live Example', slug: '' },
  { label: 'Code Docu', slug: 'code' },
  { label: 'Guidelines', slug: 'guidelines' },
  { label: 'UI Specs', slug: 'ui-specs' },
  { label: 'Accessibility', slug: 'accessibility' },
]" />

## Guidelines

### When to Use

<!-- Describe when this component is the right choice -->

### When Not to Use

<!-- Describe alternatives or when a different component is better -->

### Best Practices

<!-- Do's and don'ts, common patterns, variant selection guidance -->
```

---

## ui-specs.md — UI Specs

```markdown
---
title: {COMPONENT_NAME} — UI Specs
description: Anatomy, sizing, spacing, design tokens, and state specifications for the Sprout {COMPONENT_NAME} component.
outline: deep
---

# {COMPONENT_NAME}

{COMPONENT_DESCRIPTION}

<ComponentTabBar component-name="{COMPONENT_SLUG}" :tabs="[
  { label: 'Live Example', slug: '' },
  { label: 'Code Docu', slug: 'code' },
  { label: 'Guidelines', slug: 'guidelines' },
  { label: 'UI Specs', slug: 'ui-specs' },
  { label: 'Accessibility', slug: 'accessibility' },
]" />

## UI Specs

### Key Features

<!-- List sizes, variants, tones, and other configurable aspects -->

### Anatomy

<!-- Describe the visual parts of the component -->

### Sizing

| Size | Height | Padding | Font Size |
|---|---|---|---|
| `small` | — | — | — |
| `medium` | — | — | — |
| `large` | — | — | — |

### Design Tokens

| Token | Value |
|---|---|
| Border radius | — |
| Font family | — |
```

---

## accessibility.md — Accessibility

```markdown
---
title: {COMPONENT_NAME} — Accessibility
description: ARIA attributes, keyboard interaction, focus management, and accessibility best practices for the Sprout {COMPONENT_NAME} component.
outline: deep
---

# {COMPONENT_NAME}

{COMPONENT_DESCRIPTION}

<ComponentTabBar component-name="{COMPONENT_SLUG}" :tabs="[
  { label: 'Live Example', slug: '' },
  { label: 'Code Docu', slug: 'code' },
  { label: 'Guidelines', slug: 'guidelines' },
  { label: 'UI Specs', slug: 'ui-specs' },
  { label: 'Accessibility', slug: 'accessibility' },
]" />

## Accessibility

<!-- Brief intro about the component's accessibility foundation -->

### ARIA Attributes

| Attribute | Behavior |
|---|---|
| `role` | — |
| `aria-label` | — |

### Keyboard Interaction

| Key | Action |
|---|---|
| `Tab` | — |
| `Enter` | — |
| `Space` | — |
| `Escape` | — |

### Focus Management

<!-- Describe focus behavior, focus trapping, visible focus rings -->

### Screen Reader Considerations

<!-- Describe announcements, live regions, hidden text -->
```

---

## Nested Component Note

For components nested under a parent group (e.g., `button-dropdown` under `button/`), add the `parent` prop to every `<ComponentTabBar>`:

```markdown
<ComponentTabBar
  component-name="{COMPONENT_SLUG}"
  parent="{PARENT_SLUG}"
  :tabs="[...]"
/>
```
