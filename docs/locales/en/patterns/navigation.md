---
title: Navigation
description: Sidenav structure, tabs, breadcrumbs, routing patterns, and z-index layers in Sprout products.
outline: deep
---

# Navigation

Sprout products use a layered navigation system: a **sidenav** for primary navigation, **tabs** for secondary in-page navigation, and **breadcrumbs** for wayfinding.

## Sidenav

The sidenav (`spr-sidenav`) is the primary navigation for all Sprout products.

### Modes

| Mode | Width | Item Height | Behavior |
|---|---|---|---|
| **Rail** (collapsed) | 64px | 48px | Icon-only with tooltips on hover |
| **Expanded** | 240px | 36px | Full text labels with submenus |
| **Mobile** | Full screen | — | Overlay triggered by hamburger icon |

### Navigation Levels

| Level | Description | Example |
|---|---|---|
| Rail icons | Top-level product modules | Dashboard, People, Payroll |
| Menu L1 | Primary sub-sections | Employees, Departments, Positions |
| Menu L2 | Detailed pages | Employee Profile, Contract Details |

### Sidenav Rules

- Rail is always visible on desktop (lg+ breakpoints)
- On mobile (below lg), sidenav is hidden behind a hamburger menu
- Active rail item is highlighted with brand color
- Only **one popover menu** open at a time — hovering another rail item closes the previous
- Submenu supports 2 levels of nesting (L1, L2)

### Popover Menus

| Property | Value |
|---|---|
| Width | 215px |
| Max height | 500px |
| Border | `spr-border-color-base` |
| Border radius | `spr-rounded-border-radius-xl` (16px) |
| Shadow | `spr-drop-shadow-md` |
| Z-index | 1000 |

## Tabs

The `spr-tabs` component provides in-page navigation between related views.

| Property | Value |
|---|---|
| Tab height | 40px |
| Tab padding | `spr-px-4` |
| Active indicator | 2px bottom border, brand color (kangkong-700) |

### Tab States

| State | Text Color | Background |
|---|---|---|
| Default | `spr-text-color-base` | transparent |
| Hover | `spr-text-color-strong` | `spr-background-color-hover` |
| Active | `spr-text-color-brand-base` | transparent (with 2px bottom border) |
| Disabled | `spr-text-color-disabled` | transparent |

### Tab Rules

- Max **6 tabs** visible — use scrollable tabs or dropdown for more
- Labels should be **1-2 words**
- Tab order follows importance (most used first)
- Active tab persists when navigating back

## Breadcrumbs

Shows the user's location within the navigation hierarchy.

| Property | Value |
|---|---|
| Separator | `/` |
| Typography | `spr-body-sm-regular` |
| Current page | `spr-text-color-strong`, medium weight |
| Parent links | `spr-text-color-brand-base`, underline on hover |

### Breadcrumb Rules

- Always show breadcrumbs on detail/edit pages
- Don't show breadcrumbs on top-level (L0) pages
- Max depth: 4 levels — truncate middle with ellipsis if deeper
- Last breadcrumb (current page) is **not** a link

## URL Conventions

| Page Type | Pattern | Example |
|---|---|---|
| List page | `/module/resource` | `/people/employees` |
| Detail page | `/module/resource/:id` | `/people/employees/123` |
| Create page | `/module/resource/new` | `/people/employees/new` |
| Edit page | `/module/resource/:id/edit` | `/people/employees/123/edit` |

## Z-Index Layers

Stacking order for overlapping elements:

| Layer | Z-Index | Elements |
|---|---|---|
| Base | 0 | Page content |
| Filter / Time picker | 50 | Filters, time pickers |
| Dropdown / Popover | 1000 | Dropdowns, selects, date pickers, sidenav popovers |
| Modal overlay | 2000 | Modal backdrop |
| Modal | 2001 | Modal dialog |
| Snackbar | 3000 | Toast notifications |
| Tooltip | 4000 | Tooltips (topmost layer) |

::: warning
Do NOT use arbitrary z-index values. Stick to the defined tiers above to prevent stacking conflicts.
:::

## Sprout Products

Available product identifiers for `<spr-logo>`:

| ID | Product |
|---|---|
| `hr` | Sprout HR |
| `hr-mobile` | Sprout HR Mobile |
| `performance-plus` | Performance+ |
| `recruit-plus` | Recruit+ |
| `sail` | Sail |
| `readycash` | ReadyCash |
| `readywage` | ReadyWage |

## Source

Machine-readable version: [`design-rules/navigation-architecture.yaml`](https://github.com/user/repo/blob/dev/design-rules/navigation-architecture.yaml)
