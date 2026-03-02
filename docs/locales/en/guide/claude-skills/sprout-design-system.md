---
title: Sprout Design System Skill
description: Claude Skill for component APIs, design tokens, Tailwind integration, and usage patterns in the Sprout Design System.
outline: deep
---

# Sprout Design System Skill

**Skill version:** 2.0.0 | **Generated from design-system-next:** v2.27.2

The primary skill that teaches Claude how to build Vue 3 applications using the Sprout Design System. It covers component APIs, design tokens, Tailwind integration, icons, and common patterns.

## What It Teaches Claude

- Scaffold pages and features using `spr-` prefixed components
- Look up component APIs (props, events, slots) accurately
- Apply design tokens (colors, typography, border-color, border-radius, max-width) with the `spr-` Tailwind prefix, including semantic design color tokens from `src/assets/styles/tailwind.css`, while using standard Tailwind for general layout, spacing, and sizing
- Use Iconify icons with the Phosphor collection (`ph:`)
- Use the Pinia snackbar store for notifications
- Follow correct setup and configuration patterns

## Structure

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

## Covered Components (65 exported)

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

## Design Tokens & Utilities

- **Design color tokens** — Semantic tokens from `src/assets/styles/tailwind.css`: `spr-text-color-*`, `spr-background-color-*`, `spr-border-color-*`, `spr-divide-color-*` for UI states (base, hover, disabled, success, danger, etc.). Raw palette: 9 palettes (white, mushroom, tomato, carrot, mango, kangkong, wintermelon, blueberry, ubas) with shades 50–950.
- **Typography** — Font families, sizes, weights, line heights, letter spacing, heading/body/label presets
- **Border Radius** — 7 radius values from `spr-rounded-border-radius-2xs` to `spr-rounded-border-radius-full`
- **Border Colors** — 28 semantic border color classes and 28 divider classes (see [Border Colors](/en/documentation/utilities/border-colors))
- **Max Width** — Container width utilities (`spr-max-w-sm`, `spr-max-w-md`, `spr-max-w-lg`)
- **Spacing** — 15 design system spacing tokens (use standard Tailwind spacing for general layout)
- **Skeletal Loader** — Loading state placeholder utility

> **Note:** The skill instructs Claude to use standard Tailwind utility classes (`flex`, `gap-4`, `p-2`, `w-full`, etc.) for general layout, spacing, sizing, and display. The `spr-` prefixed classes are reserved for design system visual tokens: colors (semantic and palette), typography, border-color, border-radius, max-width, and skeletal loaders.

## Usage Examples

Once the skill is active, you can ask Claude Code to build UI using the design system:

**Scaffold a form:**
> "Create a user registration form with name, email, password, and role selection using the design system components."

**Look up a component API:**
> "What props does the Select component support?"

**Build a data table:**
> "Create a table with pagination that displays a list of employees with edit and delete actions."

**Apply design tokens:**
> "Style this card using the design system's color tokens and spacing."
