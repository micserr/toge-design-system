---
title: Claude Skills
descripttion: Learn how to use the Sprout Design System Claude Skill to accelerate development with AI-assisted coding using Claude Code.
outline: deep
---

# Claude Skills

The Sprout Design System includes a **Claude Skill** that enables [Claude Code](https://docs.anthropic.com/en/docs/claude-code) to understand and use the design system's components, props, events, slots, and design tokens when building Vue 3 applications.

## What is a Claude Skill?

A Claude Skill is a structured knowledge package that extends Claude Code's capabilities with domain-specific expertise. The `sprout-design-system` skill teaches Claude how to:

- Scaffold pages and features using `spr-` prefixed components
- Look up component APIs (props, events, slots) accurately
- Apply design tokens (colors, typography, border-color, border-radius, max-width) with the `spr-` Tailwind prefix while using standard Tailwind for general layout, spacing, and sizing
- Use the Pinia snackbar store for notifications
- Follow correct setup and configuration patterns

## Download

**Skill version:** 1.0.0 | **Generated from design-system-next:** v2.26.21

<a href="/downloads/sprout-design-system-skill.zip" download class="spr-inline-flex spr-items-center spr-gap-2">
  <strong>Download Skill (.zip)</strong>
</a>

Extract the contents into a `skill/` directory in your project root:

```
your-project/
├── skill/
│   └── sprout-design-system/
│       ├── SKILL.md
│       └── references/
│           ├── form-components.md
│           ├── display-components.md
│           ├── layout-components.md
│           ├── overlay-components.md
│           ├── action-components.md
│           └── utilities.md
├── src/
└── ...
```

## Setup

### Prerequisites

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) installed and configured in your development environment

### Adding the Skill

After downloading and extracting the skill into your project, add it to your Claude Code configuration.

**Project-level configuration (`.claude/settings.json`):**

```json
{
  "skills": [
    "skill/sprout-design-system"
  ]
}
```

Once configured, Claude Code automatically loads the skill when working in your project. You can verify by asking Claude about any design system component.

## Skill Structure

```
skill/sprout-design-system/
├── SKILL.md                          # Entry point with setup guide and component index
└── references/
    ├── form-components.md            # Input, Select, Checkbox, Radio, Switch, etc.
    ├── display-components.md         # Avatar, Badge, Banner, Chips, Icon, etc.
    ├── layout-components.md          # Accordion, Card, Table, Tabs, Stepper, etc.
    ├── overlay-components.md         # Modal, Tooltip, Dropdown, Snackbar, Sidepanel, etc.
    ├── action-components.md          # Button, DatePicker, TimePicker, Calendar, Filter, etc.
    └── utilities.md                  # Colors, Typography, Spacing, Border Radius, etc.
```

The skill uses **progressive disclosure** — Claude loads `SKILL.md` first, then pulls in only the relevant reference file based on the component category being used. This keeps context usage efficient.

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

## Covered Components

The skill covers all **60+** components in the design system:

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

The skill also includes reference for all design tokens:

- **Colors** — 9 color palettes (Neutral, Blue, Green, Yellow, Orange, Red, Purple, Pink, Teal) with full shade ranges
- **Typography** — Font families, sizes, weights, line heights, letter spacing, heading/body/label presets
- **Border Radius** — 7 radius values from `spr-rounded-border-radius-2xs` to `spr-rounded-border-radius-full`
- **Border Colors** — 28 semantic border color classes and 28 divider classes
- **Max Width** — Container width utilities (`spr-max-w-sm`, `spr-max-w-md`, `spr-max-w-lg`)
- **Spacing** — 15 design system spacing tokens (use standard Tailwind spacing for general layout)
- **Skeletal Loader** — Loading state placeholder utility

> **Note:** The skill instructs Claude to use standard Tailwind utility classes (`flex`, `gap-4`, `p-2`, `w-full`, etc.) for general layout, spacing, sizing, and display. The `spr-` prefixed classes are reserved for design system visual tokens: colors, typography, border-color, border-radius, max-width, and skeletal loaders.

## Updating the Skill

When new components are added or existing APIs change, the skill reference files should be updated to match. Reference files are located in `skill/sprout-design-system/references/` and follow a straightforward markdown format with props, events, and slots tables for each component.
