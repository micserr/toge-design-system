# Button

Commonly used button.

## Basic Usage

<div class="flex items-center gap-2">
  <spr-button>Buttons</spr-button>
</div>

```vue
<spr-button>Button</spr-button>
```

## Tone

<div class="flex items-center gap-2">
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

<div class="flex items-center gap-2">
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

<div class="flex items-center gap-2 mb-2">
  <spr-button>Primary</spr-button>
  <spr-button variant="secondary">Secondary</spr-button>
  <spr-button variant="tertiary">Tertiary</spr-button>
</div>
<div class="flex items-center gap-2 mb-2">
  <spr-button tone="success">Primary</spr-button>
  <spr-button tone="success" variant="secondary">Secondary</spr-button>
  <spr-button tone="success" variant="tertiary">Tertiary</spr-button>
</div>
<div class="flex items-center gap-2">
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

<div class="flex items-center gap-2 mb-2">
  <spr-button size="small" disabled>Primary</spr-button>
  <spr-button size="small" variant="secondary" disabled>Secondary</spr-button>
  <spr-button size="small" variant="tertiary" disabled>Tertiary</spr-button>
</div>
<div class="flex items-center gap-2 mb-2">
  <spr-button  disabled>Primary</spr-button>
  <spr-button variant="secondary" disabled>Secondary</spr-button>
  <spr-button variant="tertiary" disabled>Tertiary</spr-button>
</div>
<div class="flex items-center gap-2">
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

<div class="flex items-center gap-2 mb-2">
    <spr-button size="small" :isIcon="true"><Icon icon="ph:trash" /></spr-button>
    <spr-button variant="secondary" :isIcon="true"><Icon icon="ph:trash" /></spr-button>
    <spr-button size="large" variant="tertiary" :isIcon="true"><Icon icon="ph:trash" /></spr-button>
</div>

<div class="flex items-center gap-2 mb-2">
    <spr-button size="small" tone="success" isIcon><Icon icon="ph:trash" /></spr-button>
    <spr-button tone="success"  variant="secondary" isIcon><Icon icon="ph:trash" /></spr-button>
    <spr-button size="large" tone="success"variant="tertiary" isIcon><Icon icon="ph:trash" /></spr-button>
</div>

<div class="flex items-center gap-2 mb-2">
    <spr-button isIcon size="small" tone="danger" ><Icon icon="ph:trash" /></spr-button>
    <spr-button isIcon tone="danger" variant="secondary" ><Icon icon="ph:trash" /></spr-button>
    <spr-button isIcon size="large" tone="danger" variant="tertiary" ><Icon icon="ph:trash" /></spr-button>
</div>

<div class="flex items-center gap-2 mb-2">
    <spr-button disabled isIcon size="small" tone="danger"><Icon icon="ph:trash" /></spr-button>
    <spr-button disabled isIcon tone="danger" variant="secondary" ><Icon icon="ph:trash" /></spr-button>
    <spr-button disabled isIcon size="large" tone="danger" variant="tertiary" ><Icon icon="ph:trash" /></spr-button>
</div>

```vue
<template>
  <spr-button size="small">
    <Icon icon="ph:trash" />
  </spr-button>

  <spr-button>
    <Icon icon="ph:trash" />
  </spr-button>

  <spr-button size="large">
    <Icon icon="ph:trash" />
  </spr-button>
</template>
```

## Button API

### Button Attributes

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
import SprButton from "@/components/button/button.vue"
import { Icon } from '@iconify/vue';
</script>
