---
title: Interaction Rules
description: Button states, input behaviors, focus management, and feedback patterns in the Sprout Design System.
outline: deep
---

# Interaction Rules

Consistent interactive behaviors ensure that users can predict how Sprout products respond to their actions.

## Button States

Buttons use the `spr-button` component with `tone` and `variant` props.

### Tones and Variants

| Variant | Brand (Primary) | Danger | Plain |
|---|---|---|---|
| **Filled** | Green background, white text | Red background, white text | Gray background |
| **Outlined** | Green border, green text | Red border, red text | Gray border |
| **Ghost** | No border, green text | No border, red text | No border, gray text |
| **Link** | Underlined green text | Underlined red text | Underlined gray text |

### Brand Filled States

| State | Background | Text |
|---|---|---|
| Default | `kangkong-700` | `white-50` |
| Hover | `kangkong-800` | `white-50` |
| Pressed | `kangkong-900` | `white-50` |
| Disabled | `white-100` | `white-400` |

<div class="spr-flex spr-gap-3 spr-mt-4 spr-items-center">
  <spr-button tone="brand">Primary Action</spr-button>
  <spr-button tone="brand" variant="outlined">Secondary</spr-button>
  <spr-button tone="brand" variant="ghost">Ghost</spr-button>
  <spr-button tone="danger">Danger</spr-button>
</div>

### Button Placement Rules

- **Primary** action (filled) goes on the **right**
- **Secondary** action (outlined/ghost) goes on the **left**
- Only **one** primary button per context or section
- Destructive actions use `tone="danger"`

## Input States

All input components (`spr-input`, `spr-select`, `spr-textarea`) follow the same state model.

| State | Border | Background | Text |
|---|---|---|---|
| Default | `mushroom-300` | `white-50` | `mushroom-950` |
| Hover | `mushroom-400` | `white-50` | `mushroom-950` |
| Focus | `kangkong-700` | `white-50` | `mushroom-950` |
| Error | `tomato-700` | `white-50` | `mushroom-950` |
| Disabled | `white-100` | `white-100` | `white-400` |
| Read-only | `mushroom-200` | `mushroom-50` | `mushroom-950` |

### Labels and Helper Text

- **Labels**: `spr-body-sm-regular-medium`, color `spr-text-color-strong`
- **Required indicator**: `*` appended to label
- **Helper text**: `spr-body-xs-regular`, color `spr-text-color-base`
- **Error text**: `spr-body-xs-regular`, color `spr-text-color-danger-base`

## Focus Ring

All interactive elements display a focus ring when keyboard-focused.

| Property | Value |
|---|---|
| Style | `box-shadow: 0px 0px 0px 2px #394141` |
| Color | mushroom-900 (`#394141`) |
| Token | `spr-shadow-button-active` |

**Rules**:
- Focus ring MUST be visible on all interactive elements
- Tab order follows visual reading order (left-to-right, top-to-bottom)
- Never use `tabindex` values greater than 0

## Snackbar (Toast Notifications)

Managed via Pinia store: `useSprSnackbar`.

| Property | Value |
|---|---|
| Default duration | 4000ms (auto-dismiss) |
| Position | Bottom center |
| Tones | success, danger, information, caution, pending |

```ts
const sprSnackbar = useSprSnackbar()
sprSnackbar.open({
  message: 'Employee saved successfully.',
  tone: 'success',
})
```

**Rules**:
- Success: brief confirmation ("Saved successfully")
- Danger: error with recovery hint ("Failed to save. Try again.")
- Pinia must be installed BEFORE the design system plugin

## Loading States

| Pattern | Component | Use |
|---|---|---|
| Skeleton loader | `.spr-skeletal-loader` | Initial page/section load |
| Spinner | `spr-spinner` | Inline loading (button clicks, cell refresh) |

**Rules**:
- Use **skeleton** for initial loads (shows content shape)
- Use **spinner** for in-place loading
- Show loading states after a 300ms delay to avoid flash
- Never show both skeleton and spinner simultaneously

## Selection

| Type | Background Token | Use |
|---|---|---|
| Single selection | `spr-background-color-single-active` (kangkong-100) | Table row, radio choices |
| Multiple selection | `spr-background-color-multiple-active` (kangkong-50) | Checkbox, multi-select |

## Hover

| Context | Background |
|---|---|
| Generic hover | `spr-background-color-hover` (mushroom-950 at 8% opacity) |

All interactive elements MUST have hover feedback. Hover transitions use 150ms ease-in-out.

## Rules

| Rule | Detail |
|---|---|
| One primary button per section | Only one filled button per context area |
| Primary on right | Primary action on the right, secondary on the left |
| Destructive = danger | Use `tone="danger"` for delete, remove, cancel actions |
| Focus is mandatory | All interactive elements must show visible focus |
| Loading delay | Show loading UI after 300ms to prevent flash |

## Source

Machine-readable version: [`design-rules/interaction-rules.yaml`](https://github.com/user/repo/blob/dev/design-rules/interaction-rules.yaml)
