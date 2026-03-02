---
title: Button — Code Documentation
description: Code examples, demos, and API reference for the Sprout Button component.
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

## Code Documentation

### Import

```vue
<script lang="ts" setup>
import SprButton from "@/components/button/button.vue";
</script>
```

### Basic Usage

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button>Button</spr-button>
</div>

```html
<spr-button>Button</spr-button>
```

### Tone

Controls the button's color theme based on the nature of the action.

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button>Neutral</spr-button>
  <spr-button tone="success">Success</spr-button>
  <spr-button tone="danger">Danger</spr-button>
</div>

```html
<spr-button>Neutral/Default</spr-button>
<spr-button tone="success">Success</spr-button>
<spr-button tone="danger">Danger</spr-button>
```

### Sizes

Defines the button's physical dimensions — padding, font size, and min-width.

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button size="small">Small</spr-button>
  <spr-button>Medium</spr-button>
  <spr-button size="large">Large</spr-button>
</div>

```html
<spr-button size="small">Small</spr-button>
<spr-button>Medium/Default</spr-button>
<spr-button size="large">Large</spr-button>
```

### Variant

Controls the visual emphasis level. Use `primary` for the main CTA, `secondary` for supporting actions, and `tertiary` for low-emphasis actions.

<div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
  <spr-button>Primary</spr-button>
  <spr-button variant="secondary">Secondary</spr-button>
  <spr-button variant="tertiary">Tertiary</spr-button>
</div>
<div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
  <spr-button tone="success">Primary</spr-button>
  <spr-button tone="success" variant="secondary">Secondary</spr-button>
  <spr-button tone="success" variant="tertiary">Tertiary</spr-button>
</div>
<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button tone="danger">Primary</spr-button>
  <spr-button tone="danger" variant="secondary">Secondary</spr-button>
  <spr-button tone="danger" variant="tertiary">Tertiary</spr-button>
</div>

```html
<!-- Neutral (default) -->
<spr-button>Primary</spr-button>
<spr-button variant="secondary">Secondary</spr-button>
<spr-button variant="tertiary">Tertiary</spr-button>

<!-- Success -->
<spr-button tone="success">Primary</spr-button>
<spr-button tone="success" variant="secondary">Secondary</spr-button>
<spr-button tone="success" variant="tertiary">Tertiary</spr-button>

<!-- Danger -->
<spr-button tone="danger">Primary</spr-button>
<spr-button tone="danger" variant="secondary">Secondary</spr-button>
<spr-button tone="danger" variant="tertiary">Tertiary</spr-button>
```

### Disabled

Prevents user interaction and applies a muted visual state across all variants and sizes.

<div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
  <spr-button size="small" disabled>Primary</spr-button>
  <spr-button size="small" variant="secondary" disabled>Secondary</spr-button>
  <spr-button size="small" variant="tertiary" disabled>Tertiary</spr-button>
</div>
<div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
  <spr-button disabled>Primary</spr-button>
  <spr-button variant="secondary" disabled>Secondary</spr-button>
  <spr-button variant="tertiary" disabled>Tertiary</spr-button>
</div>
<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button size="large" disabled>Primary</spr-button>
  <spr-button size="large" variant="secondary" disabled>Secondary</spr-button>
  <spr-button size="large" variant="tertiary" disabled>Tertiary</spr-button>
</div>

```html
<spr-button disabled>Primary</spr-button>
<spr-button variant="secondary" disabled>Secondary</spr-button>
<spr-button variant="tertiary" disabled>Tertiary</spr-button>
```

### Icon

Set `hasIcon` to adjust spacing and layout when rendering icons inside the button.

#### Icon With Text

<script setup>
import { Icon } from '@iconify/vue';
</script>

<div class="spr-mt-4">
  <div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
    <spr-button size="small" hasIcon><Icon icon="ph:trash" /><span>Button</span></spr-button>
    <spr-button variant="secondary" hasIcon><Icon icon="ph:trash" /><span>Button</span></spr-button>
    <spr-button size="large" variant="tertiary" hasIcon><Icon icon="ph:trash" /><span>Button</span></spr-button>
  </div>
  <div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
    <spr-button size="small" tone="success" hasIcon><Icon icon="ph:trash" /><span>Button</span></spr-button>
    <spr-button tone="success" variant="secondary" hasIcon><Icon icon="ph:trash" /><span>Button</span></spr-button>
    <spr-button size="large" tone="success" variant="tertiary" hasIcon><Icon icon="ph:trash" /><span>Button</span></spr-button>
  </div>
  <div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
    <spr-button size="small" tone="danger" hasIcon><Icon icon="ph:trash" /><span>Button</span></spr-button>
    <spr-button tone="danger" variant="secondary" hasIcon><Icon icon="ph:trash" /><span>Button</span></spr-button>
    <spr-button size="large" tone="danger" variant="tertiary" hasIcon><Icon icon="ph:trash" /><span>Button</span></spr-button>
  </div>
  <div class="spr-flex spr-items-center spr-gap-2">
    <spr-button size="small" tone="danger" hasIcon disabled><Icon icon="ph:trash" /><span>Button</span></spr-button>
    <spr-button tone="danger" variant="secondary" hasIcon disabled><Icon icon="ph:trash" /><span>Button</span></spr-button>
    <spr-button size="large" tone="danger" variant="tertiary" hasIcon disabled><Icon icon="ph:trash" /><span>Button</span></spr-button>
  </div>
</div>

```vue
<template>
  <spr-button hasIcon>
    <Icon icon="ph:trash" />
    <span>Button</span>
  </spr-button>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>
```

#### Icon Only

Pass only an icon without text content. The button will size to fit the icon.

<div class="spr-mt-4">
  <div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
    <spr-button size="small" hasIcon><Icon icon="ph:trash" /></spr-button>
    <spr-button variant="secondary" hasIcon><Icon icon="ph:trash" /></spr-button>
    <spr-button size="large" variant="tertiary" hasIcon><Icon icon="ph:trash" /></spr-button>
  </div>
  <div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
    <spr-button size="small" tone="success" hasIcon><Icon icon="ph:trash" /></spr-button>
    <spr-button tone="success" variant="secondary" hasIcon><Icon icon="ph:trash" /></spr-button>
    <spr-button size="large" tone="success" variant="tertiary" hasIcon><Icon icon="ph:trash" /></spr-button>
  </div>
  <div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
    <spr-button size="small" tone="danger" hasIcon><Icon icon="ph:trash" /></spr-button>
    <spr-button tone="danger" variant="secondary" hasIcon><Icon icon="ph:trash" /></spr-button>
    <spr-button size="large" tone="danger" variant="tertiary" hasIcon><Icon icon="ph:trash" /></spr-button>
  </div>
  <div class="spr-flex spr-items-center spr-gap-2">
    <spr-button size="small" tone="danger" hasIcon disabled><Icon icon="ph:trash" /></spr-button>
    <spr-button tone="danger" variant="secondary" hasIcon disabled><Icon icon="ph:trash" /></spr-button>
    <spr-button size="large" tone="danger" variant="tertiary" hasIcon disabled><Icon icon="ph:trash" /></spr-button>
  </div>
</div>

```vue
<template>
  <!-- Icon-only button — always add aria-label for accessibility -->
  <spr-button hasIcon aria-label="Delete">
    <Icon icon="ph:trash" />
  </spr-button>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>
```

### Fullwidth

Expands the button to fill the width of its parent container. Works with all variants.

<div class="spr-space-y-2">
  <spr-button fullwidth>Button</spr-button>
  <spr-button fullwidth variant="secondary">Button</spr-button>
  <spr-button fullwidth variant="tertiary">Button</spr-button>
</div>

```html
<spr-button fullwidth>Button</spr-button>
<spr-button fullwidth variant="secondary">Button</spr-button>
<spr-button fullwidth variant="tertiary">Button</spr-button>
```

## API Reference

### Props

| Name | Description | Type | Default |
|------|-------------|------|---------|
| `tone` | Controls the button's color theme. | `'neutral' \| 'success' \| 'danger'` | `'neutral'` |
| `size` | Defines the button's size, affecting padding, font size, and overall dimensions. | `'small' \| 'medium' \| 'large'` | `'medium'` |
| `variant` | Controls the button's visual emphasis. | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` |
| `type` | Specifies the native HTML button type attribute. | `'button' \| 'submit' \| 'reset'` | `'button'` |
| `state` | Defines the visual state of the button. | `'base' \| 'hover' \| 'pressed' \| 'focus'` | `'base'` |
| `disabled` | Prevents user interaction and applies a visual disabled state. | `boolean` | `false` |
| `hasIcon` | Indicates the button contains an icon, adjusting spacing. | `boolean` | `false` |
| `fullwidth` | Expands the button to fill the width of its container. | `boolean` | `false` |

### Events

| Name | Description | Parameters |
|------|-------------|------------|
| `click` | Emitted when the button is clicked. Not emitted when disabled. | `(event: MouseEvent)` |

### Slots

| Name | Description |
|------|-------------|
| `default` | Content displayed inside the button. Can include text, icons, or a combination of both. |
