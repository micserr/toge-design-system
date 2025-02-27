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


## Status API

### Status Attributes

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Accepted Values</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>status</td>
      <td>Defines the status of the state.</td>
      <td>'success', 'information', 'pending', 'caution', 'danger' </td>
      <td>string</td>
      <td>success</td>
    </tr>
    <tr>
      <td>size</td>
      <td>Defines the size of the state. Options range from extra small to extra large, offering flexibility for different UI layouts</td>
      <td>'2xl', 'xl', 'lg', 'base', 'sm', 'xs', '2xs'</td>
      <td>string</td>
      <td>base</td>
    </tr>    
  </tbody>
</table>

<script lang="ts" setup>
import SprStatus from "@/components/status/status.vue";
</script>
