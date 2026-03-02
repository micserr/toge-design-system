---
title: Layout System
description: Spacing scale, grid system, container rules, and breakpoints for Sprout product layouts.
outline: deep
---

# Layout System

The Sprout layout system is built on a consistent spacing scale, responsive breakpoints, and Tailwind CSS grid utilities — all using the `spr-` prefix.

## Spacing Scale

All spacing in Sprout follows a predefined scale based on CSS custom properties.

| Token | Value | Tailwind Class | Common Use |
|---|---|---|---|
| `6xs` | 2px | `spr-p-size-spacing-6xs` | Micro gaps |
| `5xs` | 4px | `spr-p-size-spacing-5xs` | Tight padding |
| `4xs` | 6px | `spr-p-size-spacing-4xs` | Small padding |
| `3xs` | 8px | `spr-p-size-spacing-3xs` | Inner gap |
| `2xs` | 12px | `spr-p-size-spacing-2xs` | Compact gap |
| `xs` | 16px | `spr-p-size-spacing-xs` | Standard padding |
| `sm` | 24px | `spr-p-size-spacing-sm` | Card/form gap |
| `md` | 32px | `spr-p-size-spacing-md` | Section margin |
| `lg` | 40px | `spr-p-size-spacing-lg` | Large margin |
| `xl` | 48px | `spr-p-size-spacing-xl` | Page section |

::: tip
Standard Tailwind shorthand (`spr-p-4` = 16px, `spr-p-6` = 24px) also works alongside the named tokens.
:::

## Breakpoints

Sprout uses mobile-first responsive breakpoints (Tailwind defaults):

| Breakpoint | Width | Class Prefix | Use |
|---|---|---|---|
| Default | 0px+ | (none) | Mobile portrait |
| `sm` | 640px+ | `sm:spr-` | Mobile landscape |
| `md` | 768px+ | `md:spr-` | Tablet |
| `lg` | 1024px+ | `lg:spr-` | Desktop |
| `xl` | 1280px+ | `xl:spr-` | Large desktop |
| `2xl` | 1536px+ | `2xl:spr-` | Extra-large screens |

## Container

Centered container with responsive padding:

```html
<div class="spr-container">
  <!-- Content -->
</div>
```

| Breakpoint | Horizontal Padding |
|---|---|
| Default | 16px |
| `sm` | 32px |
| `md` | 40px |
| `lg` | 48px |
| `xl` | 96px |
| `xxl` | 104px |

## Content Max Widths

| Token | Value | Use |
|---|---|---|
| `spr-max-w-sm` | 640px | Narrow content (forms, modals) |
| `spr-max-w-md` | 1000px | Medium content (detail pages) |
| `spr-max-w-lg` | 1320px | Wide content (dashboards) |

## Grid Patterns

Common grid layouts used across Sprout products:

### Two-Column Form

```html
<div class="spr-grid spr-grid-cols-2 spr-gap-4">
  <spr-input label="First Name" />
  <spr-input label="Last Name" />
</div>
```

<div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg spr-p-4 spr-mt-4">
  <div class="spr-grid spr-grid-cols-2 spr-gap-4">
    <spr-input label="First Name" placeholder="e.g., Juan" />
    <spr-input label="Last Name" placeholder="e.g., dela Cruz" />
  </div>
</div>

### Responsive Form (stacks on mobile)

```html
<div class="spr-grid spr-grid-cols-1 md:spr-grid-cols-2 spr-gap-4">
  <spr-input label="Email" />
  <spr-input label="Phone" />
</div>
```

### Three-Column Card Grid

```html
<div class="spr-grid spr-grid-cols-3 spr-gap-4">
  <div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg spr-p-4">Card 1</div>
  <div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg spr-p-4">Card 2</div>
  <div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg spr-p-4">Card 3</div>
</div>
```

<div class="spr-grid spr-grid-cols-3 spr-gap-4 spr-mt-4">
  <div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg spr-p-4">
    <p class="spr-subheading-xs spr-m-0">Card 1</p>
    <p class="spr-body-sm-regular spr-text-color-base spr-m-0 spr-mt-2">Dashboard widget content</p>
  </div>
  <div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg spr-p-4">
    <p class="spr-subheading-xs spr-m-0">Card 2</p>
    <p class="spr-body-sm-regular spr-text-color-base spr-m-0 spr-mt-2">Dashboard widget content</p>
  </div>
  <div class="spr-border spr-border-solid spr-border-color-weak spr-rounded-border-radius-lg spr-p-4">
    <p class="spr-subheading-xs spr-m-0">Card 3</p>
    <p class="spr-body-sm-regular spr-text-color-base spr-m-0 spr-mt-2">Dashboard widget content</p>
  </div>
</div>

## Rules

| Rule | Detail |
|---|---|
| Always use `spr-` prefix | `spr-p-4`, `spr-grid`, `spr-gap-4` — NOT `p-4`, `grid`, `gap-4` |
| Use spacing tokens | Prefer named tokens over arbitrary values |
| Mobile-first responsive | Start with mobile layout, add breakpoint overrides (`md:spr-grid-cols-2`) |
| Container padding | Use `spr-container` for page-level centering with responsive padding |

## Source

Machine-readable version: [`design-rules/layout-system.yaml`](https://github.com/user/repo/blob/dev/design-rules/layout-system.yaml)
