---
outline: 'deep'
---

# Lozenge

Lozenge represents entities using icons, labels, and images.

## Key Features

<ul>
  <li>
    <strong>Label:</strong>
    <span>The main text displayed on the lozenge.</span>
  </li>
  <li>
    <strong>Tone:</strong>
    <span>
      A property that likely changes the visual style of the lozenge to indicate different 
      statuses or types (e.g., "caution", "information").
    </span>
  </li>
  <li>
    <strong>URL:</strong>
    <span>A property to specify an image URL, which is used to display an avatar within the lozenge.</span>
  </li>
  <li>
    <strong>Icon Slot:</strong>
    <span>A named slot (#icon) that allows you to pass a custom icon component to be displayed within the lozenge.</span>
  </li>
</ul>

## Basic Usage

A basic lozenge with a text is created with the label property.

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-lozenge label="Lozenge" />
</div>

```vue
<spr-lozenge label="Lozenge" />
```

## Tone

<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="Plain"/>
  <spr-lozenge label="pending" tone="pending" />
  <spr-lozenge label="information" tone="information" />
  <spr-lozenge label="success" tone="success" />
  <spr-lozenge label="neutral" tone="neutral" />
  <spr-lozenge label="danger" tone="danger" />
  <spr-lozenge label="caution" tone="caution" />
</div>

```vue
<spr-lozenge label="Plain" />
<spr-lozenge label="pending" tone="pending" />
<spr-lozenge label="information" tone="information" />
<spr-lozenge label="success" tone="success" />
<spr-lozenge label="neutral" tone="neutral" />
<spr-lozenge label="danger" tone="danger" />
<spr-lozenge label="caution" tone="caution" />
```

## Type

<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="Hollow" tone="information" />
  <spr-lozenge label="Fill" tone="information" fill/>
</div>

```vue
<spr-lozenge label="Hollow" tone="information" />
<spr-lozenge label="Fill" tone="information" fill />
```

## Avatar

<div class="spr-flex spr-flex-col spr-gap-2 spr-bg-white-50 spr-p-4 spr-overflow-auto spr-py-3">
  <div class="spr-flex spr-items-center spr-gap-2">
    <spr-lozenge label="pending" tone="pending" url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="information" tone="information" url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="success" tone="success" url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="neutral" tone="neutral" url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="danger" tone="danger" url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="caution" tone="caution" url="https://tinyurl.com/2vzn782p" />
    <spr-lozenge label="plain"  url="https://tinyurl.com/2vzn782p" />
  </div>

  <div class="spr-flex spr-items-center spr-gap-2">
    <spr-lozenge label="pending" tone="pending" fill url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="information" tone="information" fill url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="success" tone="success" fill url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="neutral" tone="neutral" fill url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="danger" tone="danger" fill url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="caution" tone="caution" fill url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="plain"  fill url="https://tinyurl.com/2vzn782p"/>
  </div>
</div>

```vue
<spr-lozenge label="pending" tone="pending" url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="information" tone="information" url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="success" tone="success" url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="neutral" tone="neutral" url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="danger" tone="danger" url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="caution" tone="caution" url="https://tinyurl.com/2vzn782p" />

<spr-lozenge label="pending" tone="pending" fill url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="information" tone="information" fill url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="success" tone="success" fill url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="neutral" tone="neutral" fill url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="danger" tone="danger" fill url="https://tinyurl.com/2vzn782p" />
<spr-lozenge label="caution" tone="caution" fill url="https://tinyurl.com/2vzn782p" />
```

## Slot Avatar

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-lozenge label="Users" tone="information">
    <template #avatar>
      <img
        class="spr-h-4 spr-w-4 spr-rounded-full spr-object-cover"
        src="https://tinyurl.com/2vzn782p"
        alt="avatar"
      />
    </template>
    <template #icon>
      <Icon icon="ph:users-three" />
    </template>
  </spr-lozenge>
</div>

```vue
<template>
  <spr-lozenge label="Users" tone="information">
    <template #icon>
      <Icon icon="ph:users-three" />
    </template>

    <template #avatar>
      <img class="h-full w-full rounded-full object-cover" src="https://tinyurl.com/2vzn782p" alt="avatar" />
    </template>
  </spr-lozenge>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>
```

## Icon

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-lozenge label="Users" tone="information">
    <template #icon>
      <Icon icon="ph:users-three" />
    </template>
  </spr-lozenge>
</div>

```vue
<template>
  <spr-lozenge label="Users" tone="information">
    <template #icon>
      <Icon icon="ph:users-three" />
    </template>
  </spr-lozenge>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>
```

## Loading

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-lozenge loading />
</div>

```vue
<template>
  <spr-lozenge loading />
</template>
```

## Slot

<table>
  <thead>
    <tr>
      <td>Name</td>
      <td>Description</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>icon</td>
      <td>customize icon component</td>
    </tr>
    <tr>
      <td>avatar</td>
      <td>customize avatar component</td>
    </tr>
  </tbody>
</table>

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
      <td>lozenge tone</td>
      <td>'pending' | 'information' | 'success' | 'neutral' | 'caution' | 'danger'</td>
      <td>neutral</td>
    </tr>
    <tr>
      <td>fill</td>
      <td>lozenge type (fill = true, hollow = false)</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>label</td>
      <td>Label</td>
      <td>string</td>
      <td>label</td>
    </tr>
    <tr>
      <td>url</td>
      <td>avatar image url</td>
      <td>string</td>
      <td></td>
    </tr>
    <tr>
      <td>loading</td>
      <td>Shows a loading  within the lozenge, indicating that content is being loaded.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
  <spr-logo name="payroll" theme="dark" width="50px" />
  <spr-logo name="ecosystem" theme="dark" width="50px" />
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>

<script lang="ts" setup>  
import { Icon } from '@iconify/vue';

import SprLozenge from "@/components/lozenge/lozenge.vue"
import SprLogo from "@/components/logo/logo.vue";
</script>
