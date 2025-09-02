---
outline: 'deep'
title: Button
description: The button component is a versatile and commonly used element in user interfaces, designed to trigger actions or events when clicked. It can be customized in various ways, including size, tone, and variant, to suit different design needs. The button can also include icons for enhanced visual communication and can be disabled to prevent user interaction when necessary.
---

# Button

The Button component is a versatile and commonly used element in user interfaces, designed to trigger actions or events when clicked. It can be customized in various ways, including size, tone, and variant, to suit different design needs. The button can also include icons for enhanced visual communication and can be disabled to prevent user interaction when necessary.

## Basic Usage

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button>Buttons</spr-button>
</div>

```vue
<spr-button>Button</spr-button>
```

## Tone

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button data-testid="button-tone-neutral">Neutral</spr-button>
  <spr-button data-testid="button-tone-success" tone="success">Success</spr-button>
  <spr-button data-testid="button-tone-danger" tone="danger">Danger</spr-button>
</div>

```vue
<spr-button>Neutral/Default</spr-button>
<spr-button tone="success">Success</spr-button>
<spr-button tone="danger">Danger</spr-button>
```

## Sizes

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button size="small" data-testid="button-size-small">Small</spr-button>
  <spr-button data-testid="button-size-medium">Medium</spr-button>
  <spr-button size="large" data-testid="button-size-large">Large</spr-button>
</div>

```vue
<spr-button size="small">Small</spr-button>
<spr-button>Medium/Default</spr-button>
<spr-button size="large">Large</spr-button>
```

## Variant

<div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
  <spr-button data-testid="button-tone-neutral-variant-primary">Primary</spr-button>
  <spr-button variant="secondary" data-testid="button-tone-neutral-variant-secondary">Secondary</spr-button>
  <spr-button variant="tertiary" data-testid="button-tone-neutral-variant-tertiary">Tertiary</spr-button>
</div>
<div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
  <spr-button tone="success" data-testid="button-tone-success-variant-primary">Primary</spr-button>
  <spr-button tone="success" variant="secondary" data-testid="button-tone-success-variant-secondary">Secondary</spr-button>
  <spr-button tone="success" variant="tertiary" data-testid="button-tone-success-variant-tertiary">Tertiary</spr-button>
</div>
<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button tone="danger" data-testid="button-tone-danger-variant-primary">Primary</spr-button>
  <spr-button tone="danger" variant="secondary" data-testid="button-tone-danger-variant-secondary">Secondary</spr-button>
  <spr-button tone="danger" variant="tertiary" data-testid="button-tone-danger-variant-tertiary">Tertiary</spr-button>
</div>

```vue
// Primary/Default
<spr-button>Primary/Default</spr-button>
<spr-button variant="secondary">Secondary</spr-button>
<spr-button variant="tertiary">Tertiary</spr-button>

// Succees
<spr-button tone="success">Primary/Default</spr-button>
<spr-button tone="success" variant="secondary">Secondary</spr-button>
<spr-button tone="success" variant="tertiary">Tertiary</spr-button>

// Danger
<spr-button tone="danger">Primary/Default</spr-button>
<spr-button tone="danger" variant="secondary">Secondary</spr-button>
<spr-button tone="danger" variant="tertiary">Tertiary</spr-button>
```

## Disabled

<div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
  <spr-button size="small" disabled>Primary</spr-button>
  <spr-button size="small" variant="secondary" disabled>Secondary</spr-button>
  <spr-button size="small" variant="tertiary" disabled>Tertiary</spr-button>
</div>
<div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
  <spr-button  disabled>Primary</spr-button>
  <spr-button variant="secondary" disabled>Secondary</spr-button>
  <spr-button variant="tertiary" disabled>Tertiary</spr-button>
</div>
<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button size="large" disabled>Primary</spr-button>
  <spr-button size="large" variant="secondary" disabled>Secondary</spr-button>
  <spr-button size="large" variant="tertiary" disabled>Tertiary</spr-button>
</div>

```vue
<spr-button disabled ize="small">Small</spr-button>
<spr-button disabled>Medium/Default</spr-button>
<spr-button disabled size="large">Large</spr-button>
```

## Icon

### Icon With Text

<div class="spr-mt-4">
  <div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
    <spr-button size="small" hasIcon >
      <Icon icon="ph:trash" />
      <span>Button</span>
    </spr-button>
    <spr-button variant="secondary" hasIcon>
      <Icon icon="ph:trash" />
      <span>Button</span>
    </spr-button>
    <spr-button size="large" variant="tertiary" hasIcon>
      <Icon icon="ph:trash" />
      <span>Button</span>
    </spr-button>
  </div>

  <div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
    <spr-button size="small" tone="success" hasIcon>
      <Icon icon="ph:trash" />
      <span>Button</span>
    </spr-button>
    <spr-button tone="success" variant="secondary" hasIcon>
      <Icon icon="ph:trash" />
      <span>Button</span>
    </spr-button>
    <spr-button size="large" tone="success"variant="tertiary" hasIcon>
      <Icon icon="ph:trash" />
      <span>Button</span>
    </spr-button>
  </div>

  <div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
    <spr-button size="small" tone="danger" hasIcon>
      <Icon icon="ph:trash" />
      <span>Button</span>
    </spr-button>
    <spr-button tone="danger" variant="secondary" hasIcon>
      <Icon icon="ph:trash" />
      <span>Button</span>
    </spr-button>
    <spr-button size="large" tone="danger" variant="tertiary" hasIcon>
      <Icon icon="ph:trash" />
      <span>Button</span>
    </spr-button>
  </div>

  <div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
    <spr-button size="small" tone="danger" hasIcon disabled>
      <Icon icon="ph:trash" />
      <span>Button</span>
    </spr-button>
    <spr-button tone="danger" variant="secondary" hasIcon disabled>
      <Icon icon="ph:trash" />
      <span>Button</span>
    </spr-button>
    <spr-button size="large" tone="danger" variant="tertiary" hasIcon disabled>
      <Icon icon="ph:trash" />
      <span>Button</span>
    </spr-button>
  </div>
</div>

### Icon Only

<div class="spr-mt-4">
  <div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
    <spr-button size="small" hasIcon>
      <Icon icon="ph:trash" />
    </spr-button>
    <spr-button variant="secondary" hasIcon>
      <Icon icon="ph:trash" />
    </spr-button>
    <spr-button size="large" variant="tertiary" hasIcon>
      <Icon icon="ph:trash" />
    </spr-button>
  </div>

  <div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
    <spr-button size="small" tone="success" hasIcon>
      <Icon icon="ph:trash" />
    </spr-button>
    <spr-button tone="success"  variant="secondary" hasIcon>
      <Icon icon="ph:trash" />
    </spr-button>
    <spr-button size="large" tone="success"variant="tertiary" hasIcon>
      <Icon icon="ph:trash" />
    </spr-button>
  </div>

  <div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
    <spr-button size="small" tone="danger" hasIcon>
      <Icon icon="ph:trash" />
    </spr-button>
    <spr-button tone="danger" variant="secondary" hasIcon>
      <Icon icon="ph:trash" />
    </spr-button>
    <spr-button size="large" tone="danger" variant="tertiary" hasIcon>
      <Icon icon="ph:trash" />
    </spr-button>
  </div>

  <div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
    <spr-button size="small" tone="danger" hasIcon disabled>
      <Icon icon="ph:trash" />
    </spr-button>
    <spr-button tone="danger" variant="secondary" hasIcon disabled>
      <Icon icon="ph:trash" />
    </spr-button>
    <spr-button size="large" tone="danger" variant="tertiary" hasIcon disabled>
      <Icon icon="ph:trash" />
    </spr-button>
  </div>
</div>

```vue
<template>
  <spr-button hasIcon>
    <Icon icon="ph:trash" />
    <span>Button</span>
  </spr-button>

  <spr-button iconOnly>
    <Icon icon="ph:trash" />
    <span>Button</span>
  </spr-button>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>
```

## Fullwidth

<div class="spr-space-y-2">
<spr-button fullwidth>Buttons</spr-button>
<spr-button fullwidth variant="secondary">Buttons</spr-button>
<spr-button fullwidth variant="tertiary">Buttons</spr-button>
</div>

```vue
<spr-button fullwidth>Button</spr-button>
```

## API Reference

### Props

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>tone</td>
      <td>Controls the button's color theme. Use <code>neutral</code> for standard actions, <code>success</code> for positive actions, and <code>danger</code> for destructive actions.</td>
      <td>'neutral' | 'success' | 'danger'</td>
      <td>'neutral'</td>
    </tr>
    <tr>
      <td>size</td>
      <td>Defines the button's size, affecting padding, font size, and overall dimensions.</td>
      <td>'small' | 'medium' | 'large'</td>
      <td>'medium'</td>
    </tr>
    <tr>
      <td>variant</td>
      <td>Controls the button's visual style. <code>primary</code> provides the strongest emphasis, <code>secondary</code> has medium emphasis with an outline, and <code>tertiary</code> offers the subtlest styling.</td>
      <td>'primary' | 'secondary' | 'tertiary'</td>
      <td>'primary'</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Specifies the native HTML button type attribute.</td>
      <td>'button' | 'submit' | 'reset'</td>
      <td>'button'</td>
    </tr>
    <tr>
      <td>state</td>
      <td>Defines the visual state of the button. Mostly used internally.</td>
      <td>'base' | 'hover' | 'pressed' | 'focus'</td>
      <td>'base'</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>When set to <code>true</code>, prevents user interaction and applies a visual disabled state.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>hasIcon</td>
      <td>Indicates that the button contains an icon, which affects spacing and layout.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>fullwidth</td>
      <td>When set to <code>true</code>, the button will expand to fill the width of its container.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Parameters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>click</td>
      <td>Emitted when the button is clicked and not disabled.</td>
      <td>(event: MouseEvent)</td>
    </tr>
  </tbody>
</table>

### Slots

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>default</td>
      <td>Content to be displayed inside the button. This can include text, icons, or other elements.</td>
    </tr>
  </tbody>
</table>

### Accessibility

The button component follows accessibility best practices:

- Uses native `<button>` element for proper keyboard navigation and screen reader support
- Sets `aria-disabled="true"` when the button is disabled
- Preserves hover and focus states for keyboard users
- Maintains sufficient color contrast in all states and variants
- Supports autofocus when the `state` prop is set to 'focus'

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark" width="50px" />
  <spr-logo name="payroll" theme="dark" width="50px" />
  <spr-logo name="ecosystem" theme="dark" width="50px" />
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import SprButton from "@/components/button/button.vue";
import SprLogo from "@/components/logo/logo.vue";
import { Icon } from '@iconify/vue';
</script>
