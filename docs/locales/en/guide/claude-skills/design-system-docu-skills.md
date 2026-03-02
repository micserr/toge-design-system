---
title: Design System Docu Skills
description: Claude Skill for creating and maintaining VitePress component documentation in the Sprout Design System.
outline: deep
---

# Design System Docu Skills

**Skill version:** 2.0.0

The documentation skill that teaches Claude how to create and maintain the VitePress documentation site. It covers the tabbed documentation pattern, PropsPlayground, sidebar configuration, and both EN/TH locales.

## What It Teaches Claude

- Add tabbed documentation for a new component (Live Example, Code Docu, Guidelines, UI Specs, Accessibility)
- Create interactive PropsPlayground demos with live controls and code generation
- Configure VitePress rewrites for folder-based component docs
- Update sidebar navigation for both EN and TH locales
- Follow the established documentation patterns and conventions

## Structure

```
skill/design-system-docu-skills/
├── SKILL.md                          # Entry point with architecture and conventions
└── references/
    ├── add-component-tabs.md         # Step-by-step guide for adding tabs
    ├── live-example-tab.md           # PropsPlayground patterns (simple and complex)
    ├── code-docu-tab.md              # Code Documentation tab standards
    ├── guidelines-tab.md             # Guidelines tab content requirements
    ├── ui-specs-tab.md               # UI Specs tab content requirements
    ├── accessibility-tab.md          # Accessibility tab content requirements
    └── boilerplate.md                # Copy-paste starter templates for all 5 tabs
```

## Key Concepts

### Tabbed Documentation Pattern

Each component has up to 5 tab pages stored as separate markdown files in a subfolder. A shared `<ComponentTabBar>` component provides navigation between tabs.

```
button/button/
├── index.md           # Live Example tab (main page)
├── code.md            # Code Documentation tab
├── guidelines.md      # Guidelines tab
├── ui-specs.md        # UI Specs tab
└── accessibility.md   # Accessibility tab
```

### PropsPlayground

An interactive component that renders the actual component with knob controls. Users can manipulate props in real-time and see both the live result and generated code.

**Simple components** (like Button) only need `prop-defs` and a `default-slot`:

```html
<PropsPlayground
  :component="SprButton"
  component-tag="spr-button"
  :prop-defs="[
    { name: 'tone', type: 'select', options: ['neutral', 'success', 'danger'], default: 'neutral' },
    { name: 'disabled', type: 'boolean', default: false },
  ]"
  default-slot="Button"
/>
```

**Complex components** (like Button Dropdown) that need `v-model` or extra bindings use `extra-props`, `extra-code-attrs`, and `code-setup`:

```html
<PropsPlayground
  :component="SprButtonDropdown"
  component-tag="spr-button-dropdown"
  :extra-props="dropdownExtraProps"
  :extra-code-attrs="'v-model=&quot;selected&quot;\n:menu-list=&quot;menuList&quot;'"
  :code-setup="codeSetupStr"
  :prop-defs="[...]"
  default-slot="Button Dropdown"
/>
```

### Folder Structure

**Target state:** Every component gets its own subfolder with up to 5 tab files.

| Pattern | Example | When to Use |
|---|---|---|
| **With sub-components** | `button/button/`, `button/button-dropdown/` | Components that have child variants |
| **Standalone** | `accordion/accordion/` | Components with no children |
| **Legacy (flat file)** | `accordion.md` | Not yet migrated — to be replaced |

### Minimal Tab Set

Simple components (Badge, Icon, Logo, Status) may only need 3 tabs: Live Example, Code Docu, and Accessibility. Guidelines and UI Specs are optional.

## Usage Examples

**Add tabbed docs:**
> "Create tabbed documentation for the Accordion component following the Button reference pattern."

**Create a playground:**
> "Add a PropsPlayground to the Select component's Live Example tab."

**Update sidebar:**
> "Add the new Card component to the sidebar navigation in both EN and TH locales."

## Reference Implementations

Two reference components demonstrate both simple and complex patterns:

- **Button** (`docs/locales/en/documentation/components/button/button/`) — Simple component, no v-model
- **Button Dropdown** (`docs/locales/en/documentation/components/button/button-dropdown/`) — Complex component with v-model, menu-list, and dropdown-id
