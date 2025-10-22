---
outline: 'deep'
---

# Icon

Icon component provides a consistent way to display icons with various sizes, tones, and variants throughout the application.

## Key Features

<ul>
  <li>
    <strong>Multiple Sizes:</strong>
    <span>Seven different size options from 2xs to 2xl for flexible scaling.</span>
  </li>
  <li>
    <strong>Semantic Tones:</strong>
    <span>Five different tones for status representation: success, error, info, pending, and caution.</span>
  </li>
  <li>
    <strong>Visual Variants:</strong>
    <span>Three styling variants: primary (filled), secondary (outlined), and tertiary (plain).</span>
  </li>
  <li>
    <strong>Iconify Integration:</strong>
    <span>Seamless integration with Iconify's extensive icon library.</span>
  </li>
  <li>
    <strong>Consistent Styling:</strong>
    <span>Standardized appearance with proper spacing and alignment.</span>
  </li>
</ul>

## Basic Usage

A basic icon requires an ID and icon name from the Iconify library.

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-icon id="basic-icon" icon="ph:user" />
</div>

```vue
<spr-icon id="basic-icon" icon="ph:user" />
```

## Sizes

Icons can be displayed in different sizes to match various UI contexts.

<div class="spr-flex spr-items-center spr-gap-4 spr-p-4">
  <spr-icon id="icon-2xs" icon="ph:user" size="2xs" />
  <spr-icon id="icon-xs" icon="ph:user" size="xs" />
  <spr-icon id="icon-sm" icon="ph:user" size="sm" />
  <spr-icon id="icon-md" icon="ph:user" size="md" />
  <spr-icon id="icon-lg" icon="ph:user" size="lg" />
  <spr-icon id="icon-xl" icon="ph:user" size="xl" />
  <spr-icon id="icon-2xl" icon="ph:user" size="2xl" />
</div>

```vue
<template>
  <spr-icon id="icon-2xs" icon="ph:user" size="2xs" />
  <spr-icon id="icon-xs" icon="ph:user" size="xs" />
  <spr-icon id="icon-sm" icon="ph:user" size="sm" />
  <spr-icon id="icon-md" icon="ph:user" size="md" />
  <spr-icon id="icon-lg" icon="ph:user" size="lg" />
  <spr-icon id="icon-xl" icon="ph:user" size="xl" />
  <spr-icon id="icon-2xl" icon="ph:user" size="2xl" />
</template>
```

## Tones and Variants

Icons can be styled with different tones and variants to convey meaning or status.

### Primary Variant (Filled)

<div class="spr-flex spr-items-center spr-gap-4 spr-p-4">
  <spr-icon id="success-primary" icon="ph:check-circle" tone="success" variant="primary" />
  <spr-icon id="error-primary" icon="ph:x-circle" tone="error" variant="primary" />
  <spr-icon id="info-primary" icon="ph:info" tone="info" variant="primary" />
  <spr-icon id="pending-primary" icon="ph:clock" tone="pending" variant="primary" />
  <spr-icon id="caution-primary" icon="ph:warning" tone="caution" variant="primary" />
</div>

### Secondary Variant (Outlined)

<div class="spr-flex spr-items-center spr-gap-4 spr-p-4">
  <spr-icon id="success-secondary" icon="ph:check-circle" tone="success" variant="secondary" />
  <spr-icon id="error-secondary" icon="ph:x-circle" tone="error" variant="secondary" />
  <spr-icon id="info-secondary" icon="ph:info" tone="info" variant="secondary" />
  <spr-icon id="pending-secondary" icon="ph:clock" tone="pending" variant="secondary" />
  <spr-icon id="caution-secondary" icon="ph:warning" tone="caution" variant="secondary" />
</div>

### Tertiary Variant (Plain)

<div class="spr-flex spr-items-center spr-gap-4 spr-p-4">
  <spr-icon id="success-tertiary" icon="ph:check-circle" tone="success" variant="tertiary" />
  <spr-icon id="error-tertiary" icon="ph:x-circle" tone="error" variant="tertiary" />
  <spr-icon id="info-tertiary" icon="ph:info" tone="info" variant="tertiary" />
  <spr-icon id="pending-tertiary" icon="ph:clock" tone="pending" variant="tertiary" />
  <spr-icon id="caution-tertiary" icon="ph:warning" tone="caution" variant="tertiary" />
</div>

```vue
<template>
  <!-- Primary Variant -->
  <spr-icon id="success-primary" icon="ph:check-circle" tone="success" variant="primary" />

  <!-- Secondary Variant -->
  <spr-icon id="info-secondary" icon="ph:info" tone="info" variant="secondary" />

  <!-- Tertiary Variant -->
  <spr-icon id="warning-tertiary" icon="ph:warning" tone="caution" variant="tertiary" />
</template>
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
      <td>id</td>
      <td>Unique identifier for the icon. Required for proper functionality.</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>The Iconify icon name to display (e.g., 'ph:user', 'ph:check-circle').</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>size</td>
      <td>Size of the icon. Available options:
        <ul>
          <li><code>2xs</code>: Extra extra small (16px)</li>
          <li><code>xs</code>: Extra small (20px)</li>
          <li><code>sm</code>: Small (24px)</li>
          <li><code>md</code>: Medium (36px)</li>
          <li><code>lg</code>: Large (40px)</li>
          <li><code>xl</code>: Extra large (56px)</li>
          <li><code>2xl</code>: Extra extra large (80px)</li>
        </ul>
      </td>
      <td>'2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'</td>
      <td>'md'</td>
    </tr>
    <tr>
      <td>tone</td>
      <td>Color tone of the icon. Available options:
        <ul>
          <li><code>success</code>: Green, for positive actions/states</li>
          <li><code>error</code>: Red, for errors/failures</li>
          <li><code>info</code>: Blue, for information</li>
          <li><code>pending</code>: Yellow, for in-progress states</li>
          <li><code>caution</code>: Orange, for warnings</li>
        </ul>
      </td>
      <td>'success' | 'error' | 'info' | 'pending' | 'caution'</td>
      <td>-</td>
    </tr>
    <tr>
      <td>variant</td>
      <td>Visual style of the icon:
        <ul>
          <li><code>primary</code>: Filled background</li>
          <li><code>secondary</code>: Outlined with light background</li>
          <li><code>tertiary</code>: Plain icon without background</li>
        </ul>
      </td>
      <td>'primary' | 'secondary' | 'tertiary'</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import SprIcon from "@/components/icon/icon.vue";
import SprLogo from "@/components/logo/logo.vue";
</script>
