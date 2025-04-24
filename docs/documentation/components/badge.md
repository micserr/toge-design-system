---
outline: 'deep'
title: Badge
description: The Badge component is a small visual indicator that can be used to convey information, status, or notifications. It is often used in conjunction with other UI elements to provide context or highlight important information. Badges can be customized in terms of text, color, size, and position.
---

# Badge

The Badge component is a small visual indicator that can be used to convey information, status, or notifications. It is often used in conjunction with other UI elements to provide context or highlight important information. Badges can be customized in terms of text, color, size, and position.

## Key Features

<ul>
  <li><strong>Text:</strong>  Badges typically contain a short piece of text or a number to convey information.
  </li>
  <li><strong>Variant:</strong>  Badges can have different color schemes to indicate various statuses, such as disabled, brand, danger, or information.
  </li>
  <li><strong>Size:</strong> Badges can come in different sizes to fit various design requirements. (e.g, "big", "small", tiny).
  </li>
    <li><strong>Positioning:</strong> Badges can be positioned relative to the element they are attached to, such as at the top-right or bottom-right corner.
  </li>
</ul>

## Basic Usage

<div class="spr-flex spr-items-center spr-gap-2 spr-p-1">
  <spr-badge variant="disabled" size="big" />
  <spr-badge variant="danger" size="big" />
  <spr-badge variant="information" size="big" />
  <spr-badge variant="brand" size="big" />
</div>

<div class="spr-flex spr-items-center spr-gap-2 spr-p-1">
  <spr-badge variant="disabled" size="small" />
  <spr-badge variant="danger" size="small" />
  <spr-badge variant="information" size="small" />
  <spr-badge variant="brand" size="small" />
</div>

<div class="spr-flex spr-items-center spr-gap-2 spr-p-1">
  <spr-badge variant="disabled" size="tiny" />
  <spr-badge variant="danger" size="tiny" />
  <spr-badge variant="information" size="tiny" />
  <spr-badge variant="brand" size="tiny" />
</div>

```vue
<template>
  <div>
    <spr-badge text="9" variant="disabled" size="big" />
    <spr-badge text="9" variant="danger" size="big" />
    <spr-badge text="9" variant="information" size="big" />
    <spr-badge text="9" variant="brand" size="big" />
  </div>

  <div>
    <spr-badge text="9" variant="disabled" size="small" />
    <spr-badge text="9" variant="danger" size="small" />
    <spr-badge text="9" variant="information" size="small" />
    <spr-badge text="9" variant="brand" size="small" />
  </div>

  <div>
    <spr-badge variant="disabled" size="tiny" />
    <spr-badge variant="danger" size="tiny" />
    <spr-badge variant="information" size="tiny" />
    <spr-badge variant="brand" size="tiny" />
  </div>
</template>
```

## Variant

used to customize the background of the badge

<div class="spr-p-1 spr-flex spr-gap-4">
  <spr-badge text="9" variant="disabled" size="big" />
  <spr-badge text="9" variant="danger" size="big" />
  <spr-badge text="9" variant="information" size="big" />
  <spr-badge text="9" variant="brand" size="big" />
</div>

```vue
<template>
  <div>
    <spr-badge text="9" variant="disabled" size="big" />
    <spr-badge text="9" variant="danger" size="big" />
    <spr-badge text="9" variant="information" size="big" />
    <spr-badge text="9" variant="brand" size="big" />
  </div>
</template>
```

## Size

<div class="spr-flex spr-gap-4">
  <spr-badge text="4" variant="information" size="tiny" />
  <spr-badge text="0" variant="information" size="small" />
  <spr-badge text="30" variant="information" size="big" />
</div>

```vue
<template>
  <div>
    <spr-badge text="4" variant="information" size="tiny" />
    <spr-badge text="0" variant="information" size="small" />
    <spr-badge text="30" variant="information" size="big" />
  </div>
</template>
```

## Position

used to display the badge in different positions (top, bottom).

<div class="spr-grid spr-gap-4">
  <div class="spr-flex spr-gap-4">
    <spr-badge text="9" variant="brand" size="big" position="top">
      <spr-lozenge label="top" />
    </spr-badge>
    <spr-badge text="9" variant="brand" size="small" position="top">
      <spr-lozenge label="top"/>
    </spr-badge>    
    <spr-badge text="9" variant="brand" size="tiny" position="top">
      <spr-lozenge label="top"/>
    </spr-badge>
  </div>

  <div class="spr-flex spr-gap-4">
    <spr-badge text="9" variant="information" size="big" position="bottom">
      <spr-lozenge label="bottom"/>
    </spr-badge>
    <spr-badge text="9" variant="information" size="small" position="bottom">
      <spr-lozenge label="bottom"/>
    </spr-badge>    
    <spr-badge text="9" variant="information" size="tiny" position="bottom">
      <spr-lozenge label="bottom"/>
    </spr-badge>
  </div>

  <div class="spr-flex spr-gap-4">
    <spr-badge text="9" variant="danger" size="big" >
      <spr-lozenge label="default"/>
    </spr-badge>
    <spr-badge text="9" variant="danger" size="small">
      <spr-lozenge label="default"/>
    </spr-badge>    
    <spr-badge text="9" variant="danger" size="tiny">
      <spr-lozenge label="default"/>
    </spr-badge>
  </div>
</div>

```vue
<template>
  <div>
    <spr-badge text="9" variant="brand" size="big" position="top">
      <spr-lozenge label="top" />
    </spr-badge>
    <spr-badge text="9" variant="brand" size="small" position="top">
      <spr-lozenge label="top" />
    </spr-badge>
    <spr-badge text="9" variant="brand" size="tiny" position="top">
      <spr-lozenge label="top" />
    </spr-badge>
  </div>

  <div>
    <spr-badge text="9" variant="information" size="big" position="bottom">
      <spr-lozenge label="bottom" />
    </spr-badge>
    <spr-badge text="9" variant="information" size="small" position="bottom">
      <spr-lozenge label="bottom" />
    </spr-badge>
    <spr-badge text="9" variant="information" size="tiny" position="bottom">
      <spr-lozenge label="bottom" />
    </spr-badge>
  </div>

  <div>
    <spr-badge text="9" variant="danger" size="big">
      <spr-lozenge label="default" />
    </spr-badge>
    <spr-badge text="9" variant="danger" size="small">
      <spr-lozenge label="default" />
    </spr-badge>
    <spr-badge text="9" variant="danger" size="tiny">
      <spr-lozenge label="default" />
    </spr-badge>
  </div>
</template>
```

### Default position using slot

When using the default position, use can use the slot to wrap the element to which you want to attach the badge.

<div class="spr-flex spr-gap-4">
  <spr-badge text="9" variant="brand" size="big" position="top">
    <spr-lozenge label="top"/>
  </spr-badge>
  <spr-badge text="9" variant="brand" size="small" position="top">
    <spr-lozenge label="top"/>
  </spr-badge>
  <spr-badge text="9" variant="brand" size="tiny" position="top">
    <spr-lozenge label="top"/>
  </spr-badge>
</div>

```vue
<template>
  <div>
    <spr-badge text="9" variant="brand" size="big" position="top">
      <spr-lozenge label="top" />
    </spr-badge>
    <spr-badge text="9" variant="brand" size="small" position="top">
      <spr-lozenge label="top" />
    </spr-badge>
    <spr-badge text="9" variant="brand" size="tiny" position="top">
      <spr-lozenge label="top" />
    </spr-badge>
  </div>
</template>
```

### Default position without using slot

When using the default position, use can use the slot to wrap the element to which you want to attach the badge.

<div class="spr-flex spr-gap-4">
  <spr-lozenge label="notification"/>
  <spr-badge text="9" variant="brand" size="big"/>
  <spr-badge text="9" variant="disabled" size="big"/>
  <spr-badge text="9" variant="information" size="big"/>
  <spr-badge text="9" variant="danger" size="big"/>
</div>

```vue
<template>
  <div>
    <spr-lozenge label="notification" />
    <spr-badge text="9" variant="brand" size="big" />
    <spr-badge text="9" variant="disabled" size="big" />
    <spr-badge text="9" variant="information" size="big" />
    <spr-badge text="9" variant="danger" size="big" />
  </div>
</template>
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
      <td>Text</td>
      <td>short piece of text or a number</td>
      <td>string</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Variant</td>
      <td>color schemes to indicate various statuses</td>
      <td>string</td>
      <td>brand</td>
    </tr>
    <tr>
      <td>Size</td>
      <td>big, small, tiny</td>
      <td>string</td>
      <td>small</td>
    </tr>
    <tr>
      <td>Position</td>
      <td>positioned relative to the element they are attached to</td>
      <td>string</td>
      <td>default</td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logos name="hr" theme="dark" title="Sprout HR" width="50px" />
  <spr-logos name="sidekick" theme="dark" title="Sprout Sidekick" width="50px" />
</div>

<script lang="ts" setup>
import { ref } from 'vue';

import SprBadge from "@/components/badge/badge.vue"
import SprLozenge from '@/components/lozenge/lozenge.vue';
import SprLogos from "@/components/logos/logos.vue";
</script>
