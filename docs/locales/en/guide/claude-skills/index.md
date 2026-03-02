---
title: Claude Skills
description: Learn how to use the Sprout Design System Claude Skills to accelerate development with AI-assisted coding using Claude Code.
outline: deep
---

# Claude Skills

The Sprout Design System includes three **Claude Skills** that enable [Claude Code](https://docs.anthropic.com/en/docs/claude-code) to understand and use the design system when building Vue 3 applications and maintaining documentation.

## What is a Claude Skill?

A Claude Skill is a structured knowledge package that extends Claude Code's capabilities with domain-specific expertise. Skills are loaded automatically when Claude works in your project.

## Available Skills

| Skill | Purpose |
|---|---|
| **sprout-design-system** | Component APIs, design tokens, Tailwind integration, usage patterns |
| **design-system-docu-skills** | VitePress documentation — tabbed docs, PropsPlayground, sidebar config |
| **sprout-ui-patterns** | Design conventions — card borders, form section layouts, spacing patterns |

---

## 1. sprout-design-system

**Skill version:** 2.0.0 | **Generated from design-system-next:** v2.27.2

The primary skill that teaches Claude how to:

- Scaffold pages and features using `spr-` prefixed components
- Look up component APIs (props, events, slots) accurately
- Apply design tokens (colors, typography, border-color, border-radius, max-width) with the `spr-` Tailwind prefix, including semantic design color tokens from `src/assets/styles/tailwind.css`, while using standard Tailwind for general layout, spacing, and sizing
- Use Iconify icons with the Phosphor collection (`ph:`)
- Use the Pinia snackbar store for notifications
- Follow correct setup and configuration patterns

### Structure

```
skill/sprout-design-system/
├── SKILL.md                          # Entry point with setup guide and component index
└── references/
    ├── form-components.md            # Input, Select, Checkbox, Radio, Switch, etc.
    ├── display-components.md         # Avatar, Badge, Banner, Chips, Icon, etc.
    ├── layout-components.md          # Accordion, Card, Table, Tabs, Stepper, etc.
    ├── overlay-components.md         # Modal, Tooltip, Dropdown, Snackbar, Sidepanel, etc.
    ├── action-components.md          # Button, DatePicker, TimePicker, Calendar, Filter, etc.
    ├── color-tokens.md               # Design color tokens (semantic text/background/border)
    └── utilities.md                  # Palette hex values, Typography, Spacing, Border Radius, etc.
```

The skill uses **progressive disclosure** — Claude loads `SKILL.md` first, then pulls in only the relevant reference file based on the component category being used. This keeps context usage efficient.

### Covered Components (65 exported)

| Category | Components |
|---|---|
| **Actions & Buttons** | Button, ButtonDropdown, FloatingAction |
| **Form Inputs** | Input, InputContactNumber, InputCurrency, InputDropdown, InputEmail, InputPassword, InputSearch, InputUrl, InputUsername, Textarea, Checkbox, Radio, RadioGrouped, Switch, Slider, Select, SelectMultiple, SelectLadderized, FileUpload |
| **Date & Time** | DatePicker, DateCalendarPicker, DateRangePicker, MonthYearPicker, TimePicker |
| **Data Display** | Avatar, Badge, Banner, Chips, Icon, Logo, Lozenge, ProgressBar, Status, EmptyState, AuditTrail |
| **Layout & Navigation** | Accordion, Card, Collapsible, List, Tabs, Table, TablePagination, Stepper, Sidenav |
| **Overlays & Feedback** | Modal, Tooltip, Dropdown, Popper, Snackbar, Sidepanel, StackingSidepanel |
| **Filters** | Filter, AttributeFilter |
| **Scheduling** | Calendar, CalendarCell |

### Design Tokens & Utilities

- **Design color tokens** — Semantic tokens from `src/assets/styles/tailwind.css`: `spr-text-color-*`, `spr-background-color-*`, `spr-border-color-*`, `spr-divide-color-*` for UI states (base, hover, disabled, success, danger, etc.). Raw palette: 9 palettes (white, mushroom, tomato, carrot, mango, kangkong, wintermelon, blueberry, ubas) with shades 50–950.
- **Typography** — Font families, sizes, weights, line heights, letter spacing, heading/body/label presets
- **Border Radius** — 7 radius values from `spr-rounded-border-radius-2xs` to `spr-rounded-border-radius-full`
- **Border Colors** — 28 semantic border color classes and 28 divider classes (see [Border Colors](/en/documentation/utilities/border-colors))
- **Max Width** — Container width utilities (`spr-max-w-sm`, `spr-max-w-md`, `spr-max-w-lg`)
- **Spacing** — 15 design system spacing tokens (use standard Tailwind spacing for general layout)
- **Skeletal Loader** — Loading state placeholder utility

> **Note:** The skill instructs Claude to use standard Tailwind utility classes (`flex`, `gap-4`, `p-2`, `w-full`, etc.) for general layout, spacing, sizing, and display. The `spr-` prefixed classes are reserved for design system visual tokens: colors (semantic and palette), typography, border-color, border-radius, max-width, and skeletal loaders.

### Usage Examples

Once the skill is active, you can ask Claude Code to build UI using the design system:

**Scaffold a form:**
> "Create a user registration form with name, email, password, and role selection using the design system components."

**Look up a component API:**
> "What props does the Select component support?"

**Build a data table:**
> "Create a table with pagination that displays a list of employees with edit and delete actions."

**Apply design tokens:**
> "Style this card using the design system's color tokens and spacing."

---

## 2. design-system-docu-skills

**Skill version:** 2.0.0

The documentation skill that teaches Claude how to create and maintain the VitePress documentation site:

- Add tabbed documentation for a new component (Live Example, Code Docu, Guidelines, UI Specs, Accessibility)
- Create interactive PropsPlayground demos with live controls and code generation
- Configure VitePress rewrites for folder-based component docs
- Update sidebar navigation for both EN and TH locales
- Follow the established documentation patterns and conventions

### Structure

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

### Key Concepts

**Tabbed documentation pattern:** Each component has up to 5 tab pages stored as separate markdown files in a subfolder. A shared `<ComponentTabBar>` provides navigation.

```
button/button/
├── index.md           # Live Example tab
├── code.md            # Code Documentation tab
├── guidelines.md      # Guidelines tab
├── ui-specs.md        # UI Specs tab
└── accessibility.md   # Accessibility tab
```

**PropsPlayground:** An interactive component that renders the actual component with knob controls. Supports simple components (prop-only) and complex components (v-model, menu-list, extra bindings).

### Usage Examples

**Add tabbed docs:**
> "Create tabbed documentation for the Accordion component following the Button reference pattern."

**Create a playground:**
> "Add a PropsPlayground to the Select component's Live Example tab."

**Update sidebar:**
> "Add the new Card component to the sidebar navigation in both EN and TH locales."

---

## 3. sprout-ui-patterns

**Skill version:** 1.0.0

The design patterns skill that teaches Claude the visual conventions used across Sprout products:

- **Card borders** — All cards and card-like sections use `spr-border-color-weak` (mushroom-200)
- **Form section separators** — Full-width `spr-border-color-weak` horizontal rules between form sections, with each section owning its own 16px padding (`p-4`)

### Card Pattern

```html
<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg p-4">
  <!-- Card content -->
</div>
```

### Form Sections Pattern

Borders span full container width. Padding lives inside each section, not on the outer wrapper:

```html
<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg">
  <div class="p-4">
    <!-- Section A -->
  </div>
  <div class="spr-border-0 spr-border-t spr-border-solid spr-border-color-weak"></div>
  <div class="p-4">
    <!-- Section B -->
  </div>
</div>
```

### Usage Examples

**Build a form layout:**
> "Create a settings page with Personal Info and Contact sections separated by borders."

**Build a card section:**
> "Wrap this content in a card with the standard Sprout border treatment."

---

## Download & Setup

### Download

<a href="/downloads/sprout-design-system-skill.zip" download class="spr-inline-flex spr-items-center spr-gap-2">
  <strong>Download Skills (.zip)</strong>
</a>

Extract the contents into a `skill/` directory in your project root:

```
your-project/
├── skill/
│   ├── sprout-design-system/
│   │   ├── SKILL.md
│   │   └── references/
│   ├── design-system-docu-skills/
│   │   ├── SKILL.md
│   │   └── references/
│   └── sprout-ui-patterns/
│       └── SKILL.md
├── src/
└── ...
```

### Configuration

**Prerequisites:** [Claude Code](https://docs.anthropic.com/en/docs/claude-code) installed and configured in your development environment.

**Project-level configuration (`.claude/settings.json`):**

```json
{
  "skills": [
    "skill/sprout-design-system",
    "skill/design-system-docu-skills",
    "skill/sprout-ui-patterns"
  ]
}
```

Once configured, Claude Code automatically loads the skills when working in your project. You can verify by asking Claude about any design system component, documentation pattern, or UI convention.

## Updating Skills

When new components are added, APIs change, or new design patterns are established, update the skill files in `skill/` to match. Each skill uses straightforward markdown with tables, code examples, and structured references.
