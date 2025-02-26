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

## Status API

### Status Attributes

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
      <td>status</td>
      <td>the state of the element</td>
      <td>string</td>
      <td>success</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import SprStatus from "@/components/status/status.vue";
</script>
