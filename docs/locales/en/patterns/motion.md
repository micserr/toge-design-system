---
title: Motion
description: Animation durations, easing functions, and transition patterns used across the Sprout Design System.
outline: deep
---

# Motion

Motion in Sprout is purposeful and consistent. Every animation uses a named duration and a standard easing function to create a cohesive feel across all products.

## Duration Scale

| Name | Value | Use |
|---|---|---|
| **Instant** | 0ms | Checkbox toggle, radio selection |
| **Fast** | 150ms | Button hover, input focus, tab switch, tooltip |
| **Normal** | 300ms | Slide panels, progress bar fill, popper show/hide |
| **Slow** | 500ms | Modal entrance, mobile sidenav slide |
| **Extra Slow** | 800ms | Deliberate exit animations |

## Easing Functions

| Name | Value | Use |
|---|---|---|
| **Standard** | `ease-in-out` | Default for most transitions — smooth start and end |
| **Enter** | `ease-out` | Elements entering the viewport — fast start, gentle landing |
| **Exit** | `ease-in` | Elements leaving the viewport — gentle start, fast exit |
| **Linear** | `linear` | Progress bars, continuous animations |
| **Custom Sidenav** | `cubic-bezier(1, 0.5, 0.8, 1)` | Sidenav submenu leave transition |

## Transition Patterns

### Fade

Simple opacity change for showing/hiding elements.

```css
transition: opacity 150ms ease-in-out;
```

### Slide Fade

Horizontal slide with fade for panel content transitions (e.g., sidenav submenus).

```css
/* Enter */
transition: all 300ms ease-out;
transform: translateX(-20px); opacity: 0; → translateX(0); opacity: 1;

/* Leave */
transition: all 800ms cubic-bezier(1, 0.5, 0.8, 1);
```

### Scale Fade (Modal Bounce)

Scale + fade for modal entrance.

```css
@keyframes bounce {
  0%   { transform: scale(0.9); opacity: 0; }
  50%  { transform: scale(1.02); }
  100% { transform: scale(1); opacity: 1; }
}
animation: bounce 500ms;
```

### Color Transition

Background, text, or border color change on state change.

```css
transition: color 150ms ease-in-out, background-color 150ms ease-in-out;
```

## Component Animations

| Component | Animation | Duration | Notes |
|---|---|---|---|
| `spr-modal` | Bounce scale | 500ms | `scale(0.9) → scale(1.02) → scale(1)` |
| `spr-banner` | Slide down | 250ms | `translateY(-100%) → translateY(0)` |
| `spr-snackbar` | Fade in/out | 300ms | Auto-dismiss after 4000ms |
| `spr-skeletal-loader` | Pulse shimmer | 2s cycle | Gradient from mushroom-50 to mushroom-200 |
| `spr-radio` | Shadow grow | — | Ring expanding outward on selection |
| `spr-sidenav` (desktop) | Slide | 300ms | `ease-out` |
| `spr-sidenav` (mobile) | Slide | 500ms | `ease-in-out` |
| Date/Time pickers | Opacity | 150ms | `ease-in-out` |

## Reduced Motion

When a user has `prefers-reduced-motion: reduce` enabled:

- Disable all decorative animations (transitions, transforms)
- Keep essential motion (loading spinners, progress indicators)
- Opacity-only fades are acceptable as reduced alternatives
- Replace slide/scale transitions with instant state changes

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Rules

| Rule | Detail |
|---|---|
| Use named durations | Never use arbitrary values — use fast (150ms), normal (300ms), slow (500ms) |
| Enter = ease-out | Elements appearing use `ease-out` |
| Exit = ease-in | Elements disappearing use `ease-in` |
| Bidirectional = ease-in-out | Hover, focus, and toggle transitions use `ease-in-out` |
| Delay for loading | Show loading states after 300ms to avoid flash |
| Never block interaction | Animations must not prevent user from clicking or typing |

## Source

Machine-readable version: [`design-rules/motion.yaml`](https://github.com/user/repo/blob/dev/design-rules/motion.yaml)
