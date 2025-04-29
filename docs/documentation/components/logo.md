---
title: Logo
description: Displays various Sprout product logo with customizable options.
---

# Product Logo

Displays various Sprout product logo. This component allows specifying the product name and the desired color theme.

## Basic Usage

Shows the default logo (`hr` name, `dark` theme).

<div class="spr-flex spr-items-center spr-gap-4 spr-py-4 spr-rounded">
  <spr-logo />
</div>

```vue
<template>
  <spr-logo />
</template>

<script setup lang="ts">
import SprLogo from '@/components/logo/logo.vue';
</script>
```

## Themes

You can change the logo theme using the `theme` prop.

<div class="spr-flex spr-flex-wrap spr-items-center spr-gap-4 spr-py-4 spr-rounded">
  <spr-logo theme="white" name="hr" />
  <spr-logo theme="dark" name="hr" />
  <spr-logo theme="gray" name="hr" />
  <spr-logo theme="green" name="hr" />
</div>

```vue
<template>
  <spr-logo theme="white" name="hr" />
  <spr-logo theme="dark" name="hr" />
  <spr-logo theme="gray" name="hr" />
  <spr-logo theme="green" name="hr" />
</template>

<script setup lang="ts">
import SprLogo from '@/components/logo/logo.vue';
</script>
```

## Names

Specify different product logo using the `name` prop.

<div class="spr-flex spr-flex-wrap spr-items-center spr-gap-4 spr-py-4 spr-rounded">
  <spr-logo name="benchmark" />
  <spr-logo name="ecosystem" />
  <spr-logo name="engage" />
  <spr-logo name="finances" />
  <spr-logo name="hr-mobile" />
  <spr-logo name="hr" />
  <spr-logo name="inbound" />
  <spr-logo name="insight" />
  <spr-logo name="readycash" />
  <spr-logo name="readywage" />
  <spr-logo name="payroll" />
  <spr-logo name="performance-plus" />
  <spr-logo name="procurement" />
  <spr-logo name="professional-services" />
  <spr-logo name="recruit" />
  <spr-logo name="recruit-plus" />
  <spr-logo name="sail" />
  <spr-logo name="sidekick" />
  <spr-logo name="wellness" />
</div>

```vue
<template>
  <spr-logo name="benchmark" />
  <spr-logo name="ecosystem" />
  <spr-logo name="engage" />
  <spr-logo name="finances" />
  <spr-logo name="hr-mobile" />
  <spr-logo name="hr" />
  <spr-logo name="inbound" />
  <spr-logo name="insight" />
  <spr-logo name="instacash" />
  <spr-logo name="instawage" />
  <spr-logo name="payroll" />
  <spr-logo name="performance-plus" />
  <spr-logo name="procurement" />
  <spr-logo name="professional-services" />
  <spr-logo name="recruit" />
  <spr-logo name="recruit-plus" />
  <spr-logo name="sail" />
  <spr-logo name="sidekick" />
  <spr-logo name="wellness" />
</template>

<script setup lang="ts">
import SprLogo from '@/components/logo/logo.vue';
</script>
```

## API Reference

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Available Values</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>name</td>
      <td>Specifies the product logo to display.</td>
      <td><code>String</code></td>
      <td><code>'benchmark'</code>, <code>'ecosystem'</code>, <code>'engage'</code>, <code>'finances'</code>, <code>'hr-mobile'</code>, <code>'hr'</code>, <code>'inbound'</code>, <code>'insight'</code>, <code>'instacash'</code>, <code>'instawage'</code>, <code>'payroll'</code>, <code>'performance-plus'</code>, <code>'procurement'</code>, <code>'professional-services'</code>, <code>'recruit'</code>, <code>'recruit-plus'</code>, <code>'sail'</code>, <code>'sidekick'</code>, <code>'wellness'</code></td>
      <td><code>'hr'</code></td>
    </tr>
    <tr>
      <td>theme</td>
      <td>Specifies the color theme of the logo.</td>
      <td><code>String</code></td>
      <td><code>'white'</code>, <code>'dark'</code>, <code>'gray'</code>, <code>'green'</code></td>
      <td><code>'dark'</code></td>
    </tr>
    <tr>
      <td>size</td>
      <td>Specifies the size of the logo. Can be in <code>px</code>, <code>em</code>, or just a number. If a number is provided, it will be treated as pixels (px).</td>
      <td><code>String</code>, <code>Number</code></td>
      <td>-</td>
      <td><code>50</code></td>
    </tr>
  </tbody>
</table>

<script setup lang="ts">
import SprLogo from "@/components/logo/logo.vue";
</script>
