# Lozenge

Lozenge represents entities using icons, labels, and images.

## Key Features

<ul>
  <li><strong>Label:</strong> The main text displayed on the lozenge.
  </li>
  <li><strong>Tone:</strong> A property that likely changes the visual style of the lozenge to indicate different statuses or types (e.g., "caution", "information").
  </li>
  <li><strong>URL:</strong> A property to specify an image URL, which is used to display an avatar within the lozenge.
  </li>
  <li><strong>Icon Slot:</strong> A named slot (#icon) that allows you to pass a custom icon component to be displayed within the lozenge.
  </li>
</ul>

## Basic Usage

A basic lozenge with a text is created with the label property.

<div class="flex items-center gap-2">
    <spr-lozenge
      label="Lozenge"
    />
</div>

```vue
<spr-lozenge label="Lozenge" />
```

## Tone

<div class="flex items-center gap-2">
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

<div class="flex items-center gap-2">
  <spr-lozenge label="Hollow" tone="information" />
  <spr-lozenge label="Fill" tone="information" fill/>
</div>

```vue
<spr-lozenge label="Hollow" tone="information" />
<spr-lozenge label="Fill" tone="information" fill />
```

## Avatar

<div class="flex flex-col  gap-2 bg-white-50 p-4">
  <div class="flex items-center gap-2">
    <spr-lozenge label="pending" tone="pending" url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="information" tone="information" url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="success" tone="success" url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="neutral" tone="neutral" url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="danger" tone="danger" url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="caution" tone="caution" url="https://tinyurl.com/2vzn782p" />
    <spr-lozenge label="plain"  url="https://tinyurl.com/2vzn782p" />
  </div>

  <div class="flex items-center gap-2">
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

<div class="flex flex-col  gap-2">
  <spr-lozenge
    label="Users"
    tone="information"
    >
    <template #avatar>
      <img
        class=" h-4 w-4 rounded-full object-cover"
        src="https://tinyurl.com/2vzn782p"
        alt="avatar"
      />
    </template>
    <template #icon>
      <IconUsersThree />
    </template>
  </spr-lozenge>
</div>

```vue
<template>
  <spr-lozenge label="Users" tone="information">
    <template #icon>
      <IconUsersThree />
    </template>

    <template #avatar>
      <img class="h-full w-full rounded-full object-cover" src="https://tinyurl.com/2vzn782p" alt="avatar" />
    </template>
  </spr-lozenge>
</template>

<script setup>
import IconUsersThree from '~icons/ph/users-three';
</script>
```

## Icon

<div class="flex flex-col  gap-2">
  <spr-lozenge
    label="Users"
    tone="information"
    >
    <template #icon>
      <IconUsersThree />
    </template>
  </spr-lozenge>
</div>

```vue
<template>
  <spr-lozenge label="Users" tone="information">
    <template #icon>
      <IconUsersThree />
    </template>
  </spr-lozenge>
</template>

<script setup>
import IconUsersThree from '~icons/ph/users-three';
</script>
```

## Slot

| Name   | Description                |
| ------ | -------------------------- |
| icon   | customize icon component   |
| avatar | customize avatar component |

## Lozenge API

### Lozenge Attributes

| Name  | Description                                | Type                                                                           | Default |
| ----- | ------------------------------------------ | ------------------------------------------------------------------------------ | ------- |
| tone  | lozenge tone                               | `'pending' \| 'information' \|  'success' \| 'neutral' \|'caution' \|'danger'` | neutral |
| fill  | lozenge type (fill = true, hollow = false) | `boolean`                                                                      | false   |
| label | Label                                      | `string`                                                                       | label   |
| url   | avatar image url                           | `string`                                                                       | none    |

<script setup lang="ts">  
  import SprLozenge from "@/components/lozenge/lozenge.vue"
  import IconUsersThree from '~icons/ph/users-three';
</script>
