---
outline: 'deep'
---

# Button

Commonly used button.

## Basic Usage

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button>Buttons</spr-button>
</div>

```vue
<spr-button>Button</spr-button>
```

## Tone

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button>Neutral</spr-button>
  <spr-button tone="success">Success</spr-button>
  <spr-button tone="danger">Danger</spr-button>
</div>

```vue
<spr-button>Neutral/Default</spr-button>
<spr-button tone="success">Success</spr-button>
<spr-button tone="danger">Danger</spr-button>
```

## Sizes

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button size="small">Small</spr-button>
  <spr-button>Medium</spr-button>
  <spr-button size="large">Large</spr-button>
</div>

```vue
<spr-button size="small">Small</spr-button>
<spr-button>Medium/Default</spr-button>
<spr-button size="large">Large</spr-button>
```

## Variant

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
      <td>button tone</td>
      <td>'neutral' | 'success' | 'danger'</td>
      <td>neutral</td>
    </tr>
    <tr>
      <td>size</td>
      <td>button size</td>
      <td>'small' | 'medium' | 'large'</td>
      <td>medium</td>
    </tr>
    <tr>
      <td>variant</td>
      <td>button variant</td>
      <td>'primary' | 'secondary' | 'tertiary'</td>
      <td>tertiary</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>disable the button</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>tag</td>
      <td>custom element tag</td>
      <td>string / Component</td>
      <td>button</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import SprButton from "@/components/button/button.vue";
import { Icon } from '@iconify/vue';
</script>
