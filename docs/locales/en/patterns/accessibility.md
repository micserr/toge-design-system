---
title: Accessibility
description: WCAG 2.1 AA compliance guidelines, contrast ratios, keyboard navigation, and ARIA patterns for Sprout products.
outline: deep
---

# Accessibility

Sprout Design System targets **WCAG 2.1 Level AA** compliance. All components are tested with `@axe-core/playwright`.

## Color Contrast

### Minimum Ratios

| Element | Ratio | Applies To |
|---|---|---|
| Normal text | **4.5:1** | Text smaller than 18px (or 14px bold) |
| Large text | **3:1** | Text 18px+ (or 14px+ bold) |
| UI components | **3:1** | Borders, icons, focus indicators |
| Non-text elements | **3:1** | Chart elements, graphical objects |

### Key Token Contrast

| Token | On Background | Passes? |
|---|---|---|
| `spr-text-color-strong` (mushroom-950) | white-50 | Yes |
| `spr-text-color-base` (mushroom-600) | white-50 | Yes |
| `spr-text-color-weak` (mushroom-400) | white-50 | Verify per context |
| Focus ring (mushroom-900) | any background | Yes (3:1+) |

::: warning
Never rely on color alone to convey information. Always pair with icons, text labels, or patterns.
:::

## Keyboard Navigation

### Tab Order

- Tab order MUST follow visual reading order (left-to-right, top-to-bottom)
- Use natural DOM order — avoid `tabindex` values greater than 0
- All interactive elements must be reachable via keyboard

### Key Bindings

| Key | Action |
|---|---|
| `Enter` | Activate buttons, submit forms, confirm dialogs |
| `Space` | Toggle checkboxes, switches; activate buttons |
| `Escape` | Close modals, popovers, dropdowns |
| `Arrow keys` | Navigate within lists, menus, radio groups, tabs |
| `Tab` | Move to next focusable element |
| `Shift + Tab` | Move to previous focusable element |
| `Home` | Move to first item in list/menu |
| `End` | Move to last item in list/menu |

### Focus Management

- **Focus ring**: `box-shadow: 0px 0px 0px 2px #394141` (mushroom-900)
- **Modals**: Must trap focus — cycle between first and last focusable element
- **On close**: Return focus to the element that triggered the modal
- **Skip link**: Provide "Skip to main content" as the first focusable element

## ARIA Patterns

### Button

```html
<!-- Icon-only button: requires aria-label -->
<spr-button variant="ghost" aria-label="Delete employee">
  <Icon icon="ph:trash" />
</spr-button>
```

### Modal

```html
<div role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <h2 id="modal-title">Confirm Deletion</h2>
  <!-- Focus trapped inside -->
</div>
```

### Tabs

| Element | Role | Attributes |
|---|---|---|
| Tab container | `tablist` | — |
| Tab | `tab` | `aria-selected`, `aria-controls` |
| Tab panel | `tabpanel` | `aria-labelledby` |

### Form Fields

| Attribute | When to Use |
|---|---|
| `aria-required="true"` | Required fields |
| `aria-invalid="true"` | Fields with validation errors |
| `aria-describedby` | Link to helper/error text |
| `aria-errormessage` | Link to error description |

### Live Regions

| Component | Role / Attribute |
|---|---|
| Snackbar | `role="alert"` (assertive) |
| Loading status | `aria-live="polite"` |
| Form validation | `aria-live="polite"` on error container |

## Screen Reader Guidelines

### Images and Icons

- **Decorative images**: `alt=""`
- **Informative images**: descriptive `alt` text
- **Decorative icons** (next to text): `aria-hidden="true"`
- **Standalone icons** (icon-only buttons): `aria-label` on the button

### Landmarks

| Landmark | Element | Use |
|---|---|---|
| Header | `<header>` | Site header, sidenav top |
| Navigation | `<nav>` | Sidenav, breadcrumbs, tabs |
| Main content | `<main>` | Primary content area |
| Footer | `<footer>` | Page footer |

Use `aria-label` to differentiate multiple `<nav>` elements on the same page.

## Touch Targets (Mobile)

| Property | Value |
|---|---|
| Minimum size | **44 x 44px** (WCAG 2.5.8) |
| Recommended | 48 x 48px |
| Spacing between targets | 8px minimum |

## Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

- Disable decorative animations
- Keep essential motion (spinners, progress bars)
- Opacity-only fades are acceptable alternatives

## Rules

| Rule | Detail |
|---|---|
| WCAG 2.1 AA | Minimum compliance target |
| Keyboard accessible | All interactive elements reachable via keyboard |
| Visible focus | Focus indicators must meet 3:1 contrast |
| Color is not enough | Always pair color with icons, text, or patterns |
| Labels required | Every form field must have an associated label |
| Error association | Error messages linked via `aria-describedby` |
| Focus trapping | Modals must trap and restore focus |
| Test with axe | Use `@axe-core/playwright` for automated checks |

## Source

Machine-readable version: [`design-rules/accessibility.yaml`](https://github.com/user/repo/blob/dev/design-rules/accessibility.yaml)
