---
name: design-system-docu-skills
description: >
  Guide for creating and maintaining component documentation in the Sprout Design System's
  VitePress docs site. Use this skill when: (1) Adding tabbed documentation for a new component,
  (2) Creating interactive PropsPlayground demos, (3) Writing Guidelines, Code Docu, UI Specs, or
  Accessibility pages, (4) Updating sidebar navigation for components, (5) Following the established
  documentation patterns and conventions, (6) Adding both EN and TH locale documentation,
  (7) Configuring VitePress rewrites for folder-based component docs.
---

# Design System Documentation Skills

> **Skill version:** 2.0.0 | **Docs framework:** VitePress 1.6.4

## Overview

The Sprout Design System docs use VitePress with a **tabbed documentation pattern** for component pages. Each component has up to 5 tab pages stored as separate markdown files in a subfolder. A shared `<ComponentTabBar>` provides navigation and an interactive `<PropsPlayground>` provides live demos.

## Architecture

```
docs/
├── .vitepress/
│   ├── config.ts                    # Main config (srcDir: ./locales, rewrites)
│   ├── theme/
│   │   ├── index.ts                 # Theme with globally registered components
│   │   ├── custom.css               # Custom CSS variables (Sprout green: #158039)
│   │   └── components/
│   │       ├── ComponentTabBar.vue   # Reusable sticky tab navigation
│   │       └── PropsPlayground.vue   # Interactive prop playground with code gen
│   └── locales/
│       ├── en.ts                     # English sidebar & nav config
│       └── th.ts                     # Thai sidebar & nav config
└── locales/                          # srcDir root
    ├── en/documentation/components/  # English component docs
    └── th/documentation/components/  # Thai component docs
```

## Folder Structure Convention

**Target state:** Every component gets its own subfolder with up to 5 tab files. Currently only Button and Button Dropdown are fully migrated. Other components still use flat `.md` files (legacy).

### Tabbed Component with Sub-Components (target pattern)

```
docs/locales/en/documentation/components/
└── {parent}/                      # Parent group folder (e.g., button/)
    ├── {component}/               # Component subfolder
    │   ├── index.md               # Live Example tab (main page)
    │   ├── code.md                # Code Documentation tab
    │   ├── guidelines.md          # Guidelines tab
    │   ├── ui-specs.md            # UI Specs tab
    │   └── accessibility.md       # Accessibility tab
    └── {sub-component}/           # Sub-component subfolder (e.g., button-dropdown/)
        ├── index.md
        ├── code.md
        ├── guidelines.md
        ├── ui-specs.md
        └── accessibility.md
```

### Standalone Component (no sub-components)

```
docs/locales/en/documentation/components/
└── {component}/
    └── {component}/
        ├── index.md               # Live Example tab
        ├── code.md                # Code Documentation
        ├── guidelines.md          # Guidelines (if needed)
        ├── ui-specs.md            # UI Specs (if needed)
        └── accessibility.md       # Accessibility
```

### Legacy (flat file — to be migrated)

```
docs/locales/en/documentation/components/
└── {component}.md                 # All content in one file, no tabs
```

Most components are still in legacy format. When migrating a component, create the subfolder structure and add rewrites.

### Minimal Tab Set

Simple components (Badge, Icon, Logo, Status) may only need 3 tabs:

| Tab | When to Include |
|---|---|
| Live Example | Always |
| Code Docu | Always |
| Accessibility | Always |
| Guidelines | Include if the component has variant/tone selection, do's/don'ts, or common patterns |
| UI Specs | Include if the component has sizing, design tokens, or complex anatomy |

Adjust the `tabs` array in `<ComponentTabBar>` accordingly — only include the tabs that exist.

**Example — Button family (fully migrated):**

```
button/
├── button/
│   ├── index.md           → /en/documentation/components/button/button
│   ├── code.md            → /en/documentation/components/button/button/code
│   ├── guidelines.md      → /en/documentation/components/button/button/guidelines
│   ├── ui-specs.md        → /en/documentation/components/button/button/ui-specs
│   └── accessibility.md   → /en/documentation/components/button/button/accessibility
└── button-dropdown/
    ├── index.md           → /en/documentation/components/button/button-dropdown
    ├── code.md            → /en/documentation/components/button/button-dropdown/code
    ├── guidelines.md      → /en/documentation/components/button/button-dropdown/guidelines
    ├── ui-specs.md        → /en/documentation/components/button/button-dropdown/ui-specs
    └── accessibility.md   → /en/documentation/components/button/button-dropdown/accessibility
```

## VitePress Rewrites

The `index.md` files use VitePress **rewrites** in `config.ts` so the main component URL stays clean (no `/index` suffix):

```typescript
// docs/.vitepress/config.ts
export default defineConfig({
  srcDir: './locales',
  rewrites: {
    'en/documentation/components/button/button/index.md': 'en/documentation/components/button/button.md',
    'en/documentation/components/button/button-dropdown/index.md': 'en/documentation/components/button/button-dropdown.md',
    // Repeat for TH locale
    'th/documentation/components/button/button/index.md': 'th/documentation/components/button/button.md',
    'th/documentation/components/button/button-dropdown/index.md': 'th/documentation/components/button/button-dropdown.md',
  },
});
```

**Only `index.md` needs rewrites.** The other tab files (`code.md`, `guidelines.md`, etc.) resolve naturally under the component URL.

## ComponentTabBar Usage

```markdown
<ComponentTabBar
  component-name="button"
  :tabs="[
    { label: 'Live Example', slug: '' },
    { label: 'Code Docu', slug: 'code' },
    { label: 'Guidelines', slug: 'guidelines' },
    { label: 'UI Specs', slug: 'ui-specs' },
    { label: 'Accessibility', slug: 'accessibility' },
  ]"
/>
```

### Props

| Prop | Type | Description |
|---|---|---|
| `component-name` | `string` | Kebab-case name of the component (e.g., `button-dropdown`) |
| `:tabs` | `TabDefinition[]` | Array of `{ label, slug }` objects |
| `parent` | `string` | Parent component name for nested components (see below) |

### `parent` Prop for Nested Components

Components nested under a parent group (e.g., `button-dropdown` under `button/`) must use the `parent` prop so tab URLs resolve correctly:

```markdown
<!-- button-dropdown lives at /components/button/button-dropdown -->
<ComponentTabBar
  component-name="button-dropdown"
  parent="button"
  :tabs="[...]"
/>
```

Without `parent`, the tab bar would generate `/components/button-dropdown/...` instead of `/components/button/button-dropdown/...`.

### Tab Slug Mapping

- `slug: ''` → links to the component's main page (`index.md`, rewritten)
- `slug: 'code'` → links to `{component}/code`
- `slug: 'guidelines'` → links to `{component}/guidelines`
- etc.

## PropsPlayground Usage

### Simple Component (e.g., Button)

```markdown
<script setup>
import SprButton from '@/components/button/button.vue';
</script>

<PropsPlayground
  :component="SprButton"
  component-tag="spr-button"
  :prop-defs="[
    { name: 'tone', type: 'select', options: ['neutral', 'success', 'danger'], default: 'neutral' },
    { name: 'size', type: 'select', options: ['small', 'medium', 'large'], default: 'medium' },
    { name: 'variant', type: 'select', options: ['primary', 'secondary', 'tertiary'], default: 'primary' },
    { name: 'disabled', type: 'boolean', default: false },
    { name: 'hasIcon', type: 'boolean', default: false },
    { name: 'fullwidth', type: 'boolean', default: false },
  ]"
  default-slot="Button"
/>
```

### Complex Component with v-model (e.g., Button Dropdown)

Components that require `v-model`, `menu-list`, or other non-knob bindings use the `extraProps`, `extraCodeAttrs`, and `codeSetup` props:

```markdown
<script setup>
import SprButtonDropdown from '@/components/button/button-dropdown/button-dropdown.vue';
import { ref, computed } from 'vue';

const menuList = ref([
  { text: 'Add', value: 'add', icon: 'ph:check', onClickFn: () => { alert('Add') } },
  { text: 'Delete', value: 'delete', icon: 'ph:trash', textColor: 'spr-text-color-danger-base' },
]);
const selected = ref([]);

const dropdownExtraProps = computed(() => ({
  'dropdownId': 'playground-1',
  'modelValue': selected.value,
  'onUpdate:modelValue': (v) => { selected.value = v; },
  'menuList': menuList.value,
  'width': '200px',
  'popperWidth': '200px',
}));

const codeSetupStr = `import { ref } from 'vue';

const selected = ref([]);
const menuList = ref([
  { text: 'Add', value: 'add', icon: 'ph:check' },
  { text: 'Delete', value: 'delete', icon: 'ph:trash', textColor: 'spr-text-color-danger-base' },
]);`;
</script>

<PropsPlayground
  :component="SprButtonDropdown"
  component-tag="spr-button-dropdown"
  :extra-props="dropdownExtraProps"
  :extra-code-attrs="'dropdown-id=&quot;my-dropdown&quot;\nv-model=&quot;selected&quot;\n:menu-list=&quot;menuList&quot;'"
  :code-setup="codeSetupStr"
  :prop-defs="[
    { name: 'tone', type: 'select', options: ['neutral', 'success'], default: 'neutral' },
    { name: 'size', type: 'select', options: ['small', 'medium', 'large'], default: 'medium' },
    { name: 'variant', type: 'select', options: ['primary', 'secondary'], default: 'primary' },
    { name: 'disabled', type: 'boolean', default: false },
  ]"
  default-slot="Button Dropdown"
/>
```

### PropsPlayground Props Reference

| Prop | Type | Required | Description |
|---|---|---|---|
| `:component` | `Component` | Yes | Imported Vue component reference |
| `component-tag` | `string` | Yes | Kebab-case tag for generated code (e.g., `spr-button`) |
| `:prop-defs` | `PropDef[]` | Yes | Knob controls array (see below) |
| `default-slot` | `string` | No | Initial slot text content (default: `'Button'`) |
| `:extra-props` | `Record<string, unknown>` | No | Additional props passed to the component that aren't knobs (v-model, menu-list, etc.) |
| `extra-code-attrs` | `string` | No | Newline-separated attribute strings shown in generated code |
| `code-setup` | `string` | No | Script setup code included in generated code snippet |
| `icon-name` | `string` | No | Icon for `hasIcon` knob preview and code gen (default: `'ph:trash'`) |

### PropDef Types

| Type | Renders As | Extra Fields |
|---|---|---|
| `select` | `<select>` dropdown | `options: string[]` (required) |
| `boolean` | `<spr-switch>` toggle | — |
| `text` | `<input type="text">` | — |

### v-model Pattern for extraProps

For components that use `v-model`, use a `computed` to keep reactivity working:

```ts
const extraProps = computed(() => ({
  'modelValue': selected.value,           // Unwrap the ref
  'onUpdate:modelValue': (v) => { selected.value = v; },  // Vue event handler
  'menuList': menuList.value,             // Unwrap the ref
}));
```

**Why `computed`?** Vue's `v-bind` doesn't auto-unwrap refs in plain objects. Using `computed` ensures `modelValue` updates when `selected` changes, and `onUpdate:modelValue` as a function prop acts as Vue's v-model event handler.

## Consistent Page Header

Every tab page MUST have this identical header structure:

```markdown
---
title: {Component Name} — {Tab Name}
description: {SEO description for this specific tab}
outline: deep
---

# {Component Name}

{Component description paragraph — identical across all 5 tabs.}

<ComponentTabBar component-name="{name}" :tabs="[...]" />
```

## Sidebar Configuration

Tab pages are **NOT** shown as sidebar children. Only the component and its sub-components appear:

```typescript
// docs/.vitepress/locales/en.ts
{
  text: 'Button',
  link: '/en/documentation/components/button/button',
  items: [
    { text: 'Button', link: '/en/documentation/components/button/button' },
    { text: 'Button Dropdown', link: '/en/documentation/components/button/button-dropdown' },
  ],
},
```

Sidebar sections (Components, Forms, Utilities) use `collapsed: false` for accordion behavior.

### Standalone Components (no sub-components)

For components like Accordion with no children, use a flat sidebar entry (no redundant `items` array):

```typescript
{
  text: 'Accordion',
  link: '/en/documentation/components/accordion/accordion',
},
```

## Content Standards

See detailed reference files for each tab's content requirements:

- **Live Example tab**: See [references/live-example-tab.md](references/live-example-tab.md)
- **Code Docu tab**: See [references/code-docu-tab.md](references/code-docu-tab.md)
- **Guidelines tab**: See [references/guidelines-tab.md](references/guidelines-tab.md)
- **UI Specs tab**: See [references/ui-specs-tab.md](references/ui-specs-tab.md)
- **Accessibility tab**: See [references/accessibility-tab.md](references/accessibility-tab.md)
- **Boilerplate templates**: See [references/boilerplate.md](references/boilerplate.md)

## Step-by-Step: Adding Tabs to a Component

See [references/add-component-tabs.md](references/add-component-tabs.md) for the complete walkthrough.

## Reference Implementations

Two reference components demonstrate both simple and complex patterns:

### Button (simple — no v-model)

```
docs/locales/en/documentation/components/button/button/
├── index.md         # PropsPlayground with basic prop-defs
├── code.md
├── guidelines.md
├── ui-specs.md
└── accessibility.md
```

### Button Dropdown (complex — needs v-model, menu-list, dropdown-id)

```
docs/locales/en/documentation/components/button/button-dropdown/
├── index.md         # PropsPlayground with extraProps, extraCodeAttrs, codeSetup
├── code.md
├── guidelines.md
├── ui-specs.md
└── accessibility.md
```

## Related Skills

- **sprout-design-system** — Component API reference, design tokens, Tailwind integration, and usage patterns for building with the design system
