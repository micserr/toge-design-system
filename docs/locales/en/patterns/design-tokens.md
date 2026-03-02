---
title: Design Tokens
description: The foundational color, spacing, typography, and shadow tokens that power the Sprout Design System.
outline: deep
---

# Design Tokens

Design tokens are the atomic values — colors, spacing, typography, shadows, and radii — that define the visual language of Sprout products. All tokens are consumed via Tailwind CSS utilities with the `spr-` prefix.

## Color Palettes

Sprout uses 9 named color palettes, each with shades from 50 (lightest) to 950 (darkest).

| Palette | Purpose | 500 Hex |
|---|---|---|
| **white** | Neutral grays, backgrounds, disabled states | `#7C7C7C` |
| **mushroom** | Primary neutral, text, borders, surfaces | `#738482` |
| **tomato** | Danger, error, destructive actions | `#EC4750` |
| **carrot** | Caution, warning | `#FF970A` |
| **mango** | Pending, awaiting approval | `#FFBF00` |
| **kangkong** | Success, brand, primary actions | `#22C558` |
| **wintermelon** | Accent, supplementary highlights | `#02AFCE` |
| **blueberry** | Information, links | `#2D88FF` |
| **ubas** | Purple, specialty use | `#8952F6` |

### Shade Scale

Each palette follows the same 50–950 shade scale:

<div class="spr-grid spr-grid-cols-11 spr-gap-1 spr-mt-4">
  <div class="spr-bg-kangkong-50 spr-rounded-border-radius-sm spr-p-2 spr-text-center spr-body-xs-regular">50</div>
  <div class="spr-bg-kangkong-100 spr-rounded-border-radius-sm spr-p-2 spr-text-center spr-body-xs-regular">100</div>
  <div class="spr-bg-kangkong-200 spr-rounded-border-radius-sm spr-p-2 spr-text-center spr-body-xs-regular">200</div>
  <div class="spr-bg-kangkong-300 spr-rounded-border-radius-sm spr-p-2 spr-text-center spr-body-xs-regular">300</div>
  <div class="spr-bg-kangkong-400 spr-rounded-border-radius-sm spr-p-2 spr-text-center spr-body-xs-regular">400</div>
  <div class="spr-bg-kangkong-500 spr-rounded-border-radius-sm spr-p-2 spr-text-center spr-body-xs-regular spr-text-white-50">500</div>
  <div class="spr-bg-kangkong-600 spr-rounded-border-radius-sm spr-p-2 spr-text-center spr-body-xs-regular spr-text-white-50">600</div>
  <div class="spr-bg-kangkong-700 spr-rounded-border-radius-sm spr-p-2 spr-text-center spr-body-xs-regular spr-text-white-50">700</div>
  <div class="spr-bg-kangkong-800 spr-rounded-border-radius-sm spr-p-2 spr-text-center spr-body-xs-regular spr-text-white-50">800</div>
  <div class="spr-bg-kangkong-900 spr-rounded-border-radius-sm spr-p-2 spr-text-center spr-body-xs-regular spr-text-white-50">900</div>
  <div class="spr-bg-kangkong-950 spr-rounded-border-radius-sm spr-p-2 spr-text-center spr-body-xs-regular spr-text-white-50">950</div>
</div>

## Semantic Color Tokens

Instead of using raw palette values, always use semantic tokens that describe the **purpose**, not the color.

### Text Colors

| Token | Maps To | Use |
|---|---|---|
| `spr-text-color-strong` | mushroom-950 | Primary text, headings |
| `spr-text-color-base` | mushroom-600 | Secondary text, descriptions |
| `spr-text-color-weak` | mushroom-400 | Tertiary text, placeholders |
| `spr-text-color-disabled` | white-400 | Disabled state text |
| `spr-text-color-brand-base` | kangkong-700 | Links, brand emphasis |
| `spr-text-color-danger-base` | tomato-700 | Error messages |
| `spr-text-color-information-base` | blueberry-800 | Info callouts |
| `spr-text-color-inverted-strong` | white-50 | Text on dark backgrounds |

### Background Colors

| Token | Maps To | Use |
|---|---|---|
| `spr-background-color` | white-50 | Page background |
| `spr-background-color-surface` | mushroom-50 | Card/section surface |
| `spr-background-color-base` | mushroom-100 | Secondary surface |
| `spr-background-color-hover` | mushroom-950/8% | Hover state overlay |
| `spr-background-color-disabled` | white-100 | Disabled elements |
| `spr-background-color-brand-base` | kangkong-700 | Primary buttons |
| `spr-background-color-danger-base` | tomato-600 | Danger buttons |
| `spr-background-color-inverted` | mushroom-950 | Dark backgrounds |

### Border Colors

| Token | Maps To | Use |
|---|---|---|
| `spr-border-color-strong` | mushroom-500 | Emphasized borders |
| `spr-border-color-base` | mushroom-300 | Default input borders |
| `spr-border-color-weak` | mushroom-200 | Card borders, separators |
| `spr-border-color-brand-base` | kangkong-700 | Active/focus borders |
| `spr-border-color-danger-base` | tomato-700 | Error field borders |

## Spacing

The spacing scale uses CSS custom properties mapped to named size tokens.

| Token | Value | Common Use |
|---|---|---|
| `size-spacing-6xs` | 2px | Micro gaps, icon offsets |
| `size-spacing-5xs` | 4px | Tight inner padding |
| `size-spacing-4xs` | 6px | Small inner padding |
| `size-spacing-3xs` | 8px | Default inner gap |
| `size-spacing-2xs` | 12px | Compact section gap |
| `size-spacing-xs` | 16px | Standard padding (`spr-p-4`) |
| `size-spacing-sm` | 24px | Card padding, form gap |
| `size-spacing-md` | 32px | Section margin |
| `size-spacing-lg` | 40px | Large section margin |
| `size-spacing-xl` | 48px | Page section margin |
| `size-spacing-2xl` | 64px | — |
| `size-spacing-3xl` | 72px | — |
| `size-spacing-4xl` | 80px | — |
| `size-spacing-5xl` | 96px | — |
| `size-spacing-6xl` | 128px | — |

## Border Radius

| Token | Value | Use |
|---|---|---|
| `border-radius-2xs` | 2px | Subtle rounding |
| `border-radius-xs` | 4px | Badges, tags |
| `border-radius-sm` | 6px | Small buttons, inputs |
| `border-radius-md` | 8px | Tooltips, small cards |
| `border-radius-lg` | 12px | Standard cards |
| `border-radius-xl` | 16px | Modals, dropdowns |
| `border-radius-full` | 999px | Circular elements, pills |

<div class="spr-flex spr-gap-4 spr-mt-4 spr-items-end">
  <div class="spr-border spr-border-solid spr-border-color-base spr-rounded-border-radius-2xs spr-w-12 spr-h-12 spr-flex spr-items-center spr-justify-center spr-body-xs-regular">2xs</div>
  <div class="spr-border spr-border-solid spr-border-color-base spr-rounded-border-radius-xs spr-w-12 spr-h-12 spr-flex spr-items-center spr-justify-center spr-body-xs-regular">xs</div>
  <div class="spr-border spr-border-solid spr-border-color-base spr-rounded-border-radius-sm spr-w-12 spr-h-12 spr-flex spr-items-center spr-justify-center spr-body-xs-regular">sm</div>
  <div class="spr-border spr-border-solid spr-border-color-base spr-rounded-border-radius-md spr-w-12 spr-h-12 spr-flex spr-items-center spr-justify-center spr-body-xs-regular">md</div>
  <div class="spr-border spr-border-solid spr-border-color-base spr-rounded-border-radius-lg spr-w-12 spr-h-12 spr-flex spr-items-center spr-justify-center spr-body-xs-regular">lg</div>
  <div class="spr-border spr-border-solid spr-border-color-base spr-rounded-border-radius-xl spr-w-12 spr-h-12 spr-flex spr-items-center spr-justify-center spr-body-xs-regular">xl</div>
  <div class="spr-border spr-border-solid spr-border-color-base spr-rounded-border-radius-full spr-w-12 spr-h-12 spr-flex spr-items-center spr-justify-center spr-body-xs-regular">full</div>
</div>

## Typography

### Font Families

| Token | Font | Use |
|---|---|---|
| `spr-font-main` | Rubik | Primary typeface for all UI |
| `spr-font-inbound` | Roboto | Secondary typeface (inbound content) |
| `spr-font-code` | Roboto Mono | Code snippets, monospace |

### Text Styles

| Class | Size | Line Height | Weight | Use |
|---|---|---|---|---|
| `spr-heading-xl` | 48px | 60px | Medium | Page hero titles |
| `spr-heading-lg` | 40px | 48px | Medium | Page titles |
| `spr-heading-md` | 32px | 40px | Medium | Section titles |
| `spr-heading-sm` | 28px | 36px | Medium | Sub-section titles |
| `spr-heading-xs` | 24px | 32px | Medium | Card titles |
| `spr-subheading-sm` | 20px | 24px | Medium | Form section headings |
| `spr-subheading-xs` | 16px | 20px | Medium | Small headings |
| `spr-body-md-regular` | 16px | 24px | Regular | Body text |
| `spr-body-sm-regular` | 14px | 20px | Regular | Default body text |
| `spr-body-xs-regular` | 12px | 16px | Regular | Captions, helper text |
| `spr-label-sm-medium` | 14px | 14px | Medium | Table headers, labels |
| `spr-label-xs-medium` | 12px | 12px | Medium | Small labels, tags |

## Shadows

| Token | Value | Use |
|---|---|---|
| `spr-drop-shadow-sm` | `0px 2px 4px -1px #262B2B1F` | Subtle elevation |
| `spr-drop-shadow` | `0px 2px 8px -2px #262B2B33` | Dropdowns, tooltips |
| `spr-drop-shadow-md` | `0px 4px 12px 0px #262B2B29` | Modals, popovers |
| `spr-drop-shadow-top-sm` | `0px -2px 4px -1px #262B2B1F` | Bottom-anchored elevation |
| `spr-drop-shadow-top` | `0px -2px 8px -2px #262B2B33` | Bottom sheet |
| `spr-drop-shadow-top-md` | `0px -4px 12px 0px #262B2B29` | Prominent bottom sheet |

## Rules

| Rule | Detail |
|---|---|
| Use semantic tokens | Never use raw palette values (`spr-border-mushroom-300`) — use semantic tokens (`spr-border-color-base`) |
| Tailwind prefix | ALL utility classes require the `spr-` prefix |
| Spacing scale | Use named spacing tokens, not arbitrary pixel values |
| Typography composites | Use predefined text styles (`spr-heading-sm`) instead of manual font-size + line-height combos |

## Source

Machine-readable version: [`design-rules/tokens.json`](https://github.com/user/repo/blob/dev/design-rules/tokens.json)
