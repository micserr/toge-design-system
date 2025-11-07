---
title: Status
descripttion: The Status component provides a standardized way to display status indicators across the application. It ensures consistent color, iconography, and accessibility for different states such as Success, Information, Pending, Caution, and Danger.
outline: deep
---

# Status

The Status component provides a standardized way to display status indicators across the application. It ensures consistent color, iconography, and accessibility for different states such as Success, Information, Pending, Caution, and Danger.

## Basic Usage

<div class="spr-flex spr-flex-row spr-gap-2">
  <spr-status state="success" />
  <spr-status state="information" />
  <spr-status state="pending" />
  <spr-status state="caution" />
  <spr-status state="danger" />
</div>

```vue
<template>
  <spr-status state="success" />
  <spr-status state="information" />
  <spr-status state="pending" />
  <spr-status state="caution" />
  <spr-status state="danger" />
</template>
```

## Sizes

status component has 7 different sizes. You can use the `size` prop to set the size of the status. The default size is `base`. The available sizes are `2xl`, `xl`, `lg`, `base`, `sm`, `xs`, `2xs`.

<div class="spr-flex spr-flex-row spr-gap-2 spr-items-center">
  <spr-status state="success" size="2xl" />
  <spr-status state="success" size="xl" />
  <spr-status state="success" size="lg" />
  <spr-status state="success" size="base" />
  <spr-status state="success" size="sm" />
  <spr-status state="success" size="xs" />
  <spr-status state="success" size="2xs" />
</div>

<div class="spr-flex spr-flex-row spr-gap-2 spr-items-center">
  <spr-status state="information" size="2xl" />
  <spr-status state="information" size="xl" />
  <spr-status state="information" size="lg"/>
  <spr-status state="information" size="base" />
  <spr-status state="information" size="sm" />
  <spr-status state="information" size="xs" />
  <spr-status state="information" size="2xs" />
</div>

<div class="spr-flex spr-flex-row spr-gap-2 spr-items-center">
  <spr-status state="pending" size="2xl" />
  <spr-status state="pending" size="xl" />
  <spr-status state="pending" size="lg"/>
  <spr-status state="pending" size="base" />
  <spr-status state="pending" size="sm" />
  <spr-status state="pending" size="xs" />
  <spr-status state="pending" size="2xs" />
</div>

<div class="spr-flex spr-flex-row spr-gap-2 spr-items-center">
  <spr-status state="caution" size="2xl" />
  <spr-status state="caution" size="xl" />
  <spr-status state="caution" size="lg"/>
  <spr-status state="caution" size="base" />
  <spr-status state="caution" size="sm" />
  <spr-status state="caution" size="xs" />
  <spr-status state="caution" size="2xs" />
</div>

<div class="spr-flex spr-flex-row spr-gap-2 spr-items-center">
  <spr-status state="danger" size="2xl" />
  <spr-status state="danger" size="xl" />
  <spr-status state="danger" size="lg"/>
  <spr-status state="danger" size="base" />
  <spr-status state="danger" size="sm" />
  <spr-status state="danger" size="xs" />
  <spr-status state="danger" size="2xs" />
</div>

## API Reference

### Props

<table>
  <thead>
    <tr>
      <th class="spr-min-w-[180px]">Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>state</code>
      </td>
      <td>
        Defines the status state to display. Each state has a specific color and icon:
        <ul>
          <li><code>success</code>: Green check circle for successful operations</li>
          <li><code>information</code>: Blue info icon for informational messages</li>
          <li><code>pending</code>: Yellow warning icon for pending states</li>
          <li><code>caution</code>: Orange warning icon for caution states</li>
          <li><code>danger</code>: Red warning circle for error or danger states</li>
        </ul>
      </td>
      <td>'success' | 'information' | 'pending' | 'caution' | 'danger'</td>
      <td><code>'success'</code></td>
    </tr>
    <tr>
      <td>
        <code>size</code>
      </td>
      <td>
        Defines the size of the status indicator. Provides flexibility for different UI layouts and emphasis levels:
        <ul>
          <li><code>2xs</code>: 14px × 14px</li>
          <li><code>xs</code>: 16px × 16px</li>
          <li><code>sm</code>: 20px × 20px</li>
          <li><code>base</code>: 24px × 24px</li>
          <li><code>lg</code>: 32px × 32px</li>
          <li><code>xl</code>: 40px × 40px</li>
          <li><code>2xl</code>: 48px × 48px</li>
        </ul>
      </td>
      <td>'2xs' | 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'</td>
      <td><code>'base'</code></td>
    </tr>    
  </tbody>
</table>

### Icons

<table>
  <thead>
    <tr>
      <th class="spr-min-w-[180px]">State</th>
      <th>Icon</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Success</td>
      <td><code>ph:check-circle-fill</code></td>
    </tr>
    <tr>
      <td>Information</td>
      <td><code>ph:info-fill</code></td>
    </tr>
    <tr>
      <td>Pending</td>
      <td><code>ph:warning-fill</code></td>
    </tr>
    <tr>
      <td>Caution</td>
      <td><code>ph:warning-fill</code></td>
    </tr>
    <tr>
      <td>Danger</td>
      <td><code>ph:warning-circle-fill</code></td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import SprStatus from "@/components/status/status.vue";
</script>
