---
title: Button — UI Specs
description: Anatomy, sizing, spacing, design tokens, and state specifications for the Sprout Button component.
outline: deep
---

# Button

The Button component is a versatile and commonly used element in user interfaces, designed to trigger actions or events when clicked. It can be customized in various ways, including size, tone, and variant, to suit different design needs.

<ComponentTabBar component-name="button" :tabs="[
  { label: 'Live Example', slug: '' },
  { label: 'Code Docu', slug: 'code' },
  { label: 'Guidelines', slug: 'guidelines' },
  { label: 'UI Specs', slug: 'ui-specs' },
  { label: 'Accessibility', slug: 'accessibility' },
]" />

## UI Specs

### Key Features

- 3 tones: `neutral`, `success`, `danger`
- 3 sizes: `small`, `medium`, `large`
- 3 variants: `primary`, `secondary`, `tertiary`
- 5 states: base, hover, pressed, focus, disabled
- Icon support with automatic spacing adjustments
- Fullwidth option for container-filling layouts

### Anatomy

The Button component is composed of the following parts:

| # | Part | Description | Required |
|---|------|-------------|----------|
| 1 | Container | The outer boundary that holds all button content. Includes background, border, and shadow. | Yes |
| 2 | Start Icon | An optional icon placed before the text label to add visual context. | No |
| 3 | Text Label | The primary content that communicates the button's action. | Yes |
| 4 | End Icon | An optional icon placed after the text label, typically used for dropdown indicators. | No |

### Sizing

#### Size Reference

<div class="spr-flex spr-items-end spr-gap-4 spr-mt-4 spr-mb-4">
  <div class="spr-text-center">
    <spr-button size="small">Small</spr-button>
    <div class="spr-mt-2 spr-text-xs spr-text-color-subtle">Small</div>
  </div>
  <div class="spr-text-center">
    <spr-button>Medium</spr-button>
    <div class="spr-mt-2 spr-text-xs spr-text-color-subtle">Medium</div>
  </div>
  <div class="spr-text-center">
    <spr-button size="large">Large</spr-button>
    <div class="spr-mt-2 spr-text-xs spr-text-color-subtle">Large</div>
  </div>
</div>

#### Dimensions

| Property | Small | Medium | Large |
|----------|-------|--------|-------|
| Min Width | 24px `spr-min-w-6` | 28px `spr-min-w-7` | 36px `spr-min-w-9` |
| Padding | 6px `spr-p-1.5` | 8px `spr-p-2` | 8px / 12px `spr-px-2 spr-py-3` |
| Max Height | auto | auto | 36px `spr-max-h-9` |
| Font Size | `font-size-100` | `font-size-100` | `font-size-200` |
| Line Height | `leading-100` | `leading-100` | `leading-300` |
| Icon Size | `font-size-200` | `font-size-300` | `font-size-400` |

### Spacing

| Property | Value | Token |
|----------|-------|-------|
| Icon-to-text gap | 6px | `spr-gap-1.5` |
| Focus outline offset | 4px | `spr-outline-offset-4` |
| Border radius | 6px | `spr-rounded-md` |
| Outline width | 2px | `spr-outline-2` |

### Design Tokens

#### Background Colors — Primary Variant

| Tone | Base | Hover | Pressed |
|------|------|-------|---------|
| Neutral | `spr-background-color-base` | `spr-background-color-hover` | `spr-background-color-pressed` |
| Success | `spr-background-color-brand-base` | `spr-background-color-success-pressed` | `spr-background-color-brand-pressed` |
| Danger | `spr-background-color-danger-base` | `spr-background-color-danger-hover` | `spr-background-color-danger-pressed` |

#### Background Colors — Secondary & Tertiary Variants

| State | Token |
|-------|-------|
| Base (Secondary) | `spr-background-color` |
| Base (Tertiary) | transparent |
| Hover | `spr-background-color-hover` |
| Pressed | `spr-background-color-pressed` |

#### Text Colors

| Variant | Neutral | Success | Danger |
|---------|---------|---------|--------|
| Primary | `spr-text-color-strong` | `spr-text-color-inverted-strong` | `spr-text-color-inverted-strong` |
| Secondary / Tertiary | `spr-text-color-strong` | `spr-text-color-brand-base` | `spr-text-color-danger-base` |

#### Border Colors

| Variant | Neutral | Success | Danger |
|---------|---------|---------|--------|
| Primary | transparent | transparent | transparent |
| Secondary | `spr-border-color-base` | `spr-border-color-brand-base` | `spr-border-color-danger-base` |
| Tertiary | none | none | none |

#### Disabled State

| Variant | Style |
|---------|-------|
| Primary | `spr-text-color-disabled`, `spr-background-color-disabled`, no shadow, no border |
| Secondary | `spr-text-color-disabled`, `spr-border-color-disabled`, no shadow |
| Tertiary | `spr-text-color-disabled`, no shadow, no border |

### States

#### State Reference

<div class="spr-mt-4 spr-mb-4">
  <div class="spr-flex spr-items-center spr-gap-4 spr-mb-3">
    <div class="spr-w-20 spr-text-xs spr-font-medium spr-text-color-subtle">Base</div>
    <spr-button>Button</spr-button>
    <spr-button tone="success">Button</spr-button>
    <spr-button tone="danger">Button</spr-button>
  </div>
  <div class="spr-flex spr-items-center spr-gap-4 spr-mb-3">
    <div class="spr-w-20 spr-text-xs spr-font-medium spr-text-color-subtle">Hover</div>
    <spr-button state="hover">Button</spr-button>
    <spr-button tone="success" state="hover">Button</spr-button>
    <spr-button tone="danger" state="hover">Button</spr-button>
  </div>
  <div class="spr-flex spr-items-center spr-gap-4 spr-mb-3">
    <div class="spr-w-20 spr-text-xs spr-font-medium spr-text-color-subtle">Focus</div>
    <spr-button state="focus">Button</spr-button>
    <spr-button tone="success" state="focus">Button</spr-button>
    <spr-button tone="danger" state="focus">Button</spr-button>
  </div>
  <div class="spr-flex spr-items-center spr-gap-4 spr-mb-3">
    <div class="spr-w-20 spr-text-xs spr-font-medium spr-text-color-subtle">Disabled</div>
    <spr-button disabled>Button</spr-button>
    <spr-button tone="success" disabled>Button</spr-button>
    <spr-button tone="danger" disabled>Button</spr-button>
  </div>
</div>

#### State Behavior

| State | Behavior |
|-------|----------|
| **Base** | Default appearance with tone-specific background and text colors. |
| **Hover** | Background shifts to hover token. Shadow appears (`spr-shadow-button-hover`). |
| **Pressed** | Background shifts to pressed token. Scale reduces to 95% (`spr-scale-95`). Shadow changes to `spr-shadow-button`. |
| **Focus** | Visible outline with 4px offset for keyboard accessibility. |
| **Disabled** | Muted colors, cursor changes to `not-allowed`, no hover/press effects. |

### Transitions

All state changes use `transition: 150ms ease-in-out` for smooth visual feedback.
