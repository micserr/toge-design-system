<script setup lang="ts">
  import { ref } from 'vue';
  import SprLozenge from "@/components/lozenge/lozenge.vue"
  import IconUsersThree from '~icons/ph/users-three';

  const visible = ref<boolean>(true);
</script>

# Lozenge

Lozenge represents entities using icons, labels, and images.

## Key Features

<ul>
  <li><strong>Label:</strong> The main text displayed on the lozenge.
  </li>
  <li><strong>Tone:</strong> A property that likely changes the visual style of the lozenge to indicate different statuses or types (e.g., "caution", "information").
  </li>
  <li><strong>Removable:</strong> An option to make the lozenge removable, typically by displaying a close icon that can be clicked to remove the lozenge.
  </li>
  <li><strong>URL:</strong> A property to specify an image URL, which is used to display an avatar within the lozenge.
  </li>
  <li><strong>Icon Slot:</strong> A named slot (#icon) that allows you to pass a custom icon component to be displayed within the lozenge.
  </li>
</ul>

## Basic Usage

A basic lozenge with a text is created with the label property.

<div class="tw-flex tw-items-center tw-gap-2">
    <spr-lozenge
      label="Lozenge"
      tone="caution"
    />
</div>

```vue
<spr-lozenge label="Lozenge" tone="caution" />
```

## Tone

<div class="tw-flex tw-items-center tw-gap-2">
  <spr-lozenge label="pending" tone="pending" />
  <spr-lozenge label="information" tone="information" />
  <spr-lozenge label="success" tone="success" />
  <spr-lozenge label="neutral" tone="neutral" />
  <spr-lozenge label="danger" tone="danger" />
  <spr-lozenge label="caution" tone="caution" />
</div>

```vue
<spr-lozenge label="pending" tone="pending" />
<spr-lozenge label="information" tone="information" />
<spr-lozenge label="success" tone="success" />
<spr-lozenge label="neutral" tone="neutral" />
<spr-lozenge label="danger" tone="danger" />
<spr-lozenge label="caution" tone="caution" />
```

## Type

<div class="tw-flex tw-items-center tw-gap-2">
  <spr-lozenge label="Hollow" tone="information" />
  <spr-lozenge label="Fill" tone="information" fill/>
</div>

```vue
<spr-lozenge label="Hollow" tone="information" />
<spr-lozenge label="Fill" tone="information" fill />
```

## Avatar

<div class="tw-flex tw-flex-col  tw-gap-2">
  <div class="tw-flex tw-items-center tw-gap-2">
    <spr-lozenge label="pending" tone="pending" url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="information" tone="information" url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="success" tone="success" url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="neutral" tone="neutral" url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="danger" tone="danger" url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="caution" tone="caution" url="https://tinyurl.com/2vzn782p" />
  </div>

  <div class="tw-flex tw-items-center tw-gap-2">
    <spr-lozenge label="pending" tone="pending" fill url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="information" tone="information" fill url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="success" tone="success" fill url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="neutral" tone="neutral" fill url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="danger" tone="danger" fill url="https://tinyurl.com/2vzn782p"/>
    <spr-lozenge label="caution" tone="caution" fill url="https://tinyurl.com/2vzn782p"/>
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

<div class="tw-flex tw-flex-col  tw-gap-2">
  <spr-lozenge
    label="Users"
    tone="information"
    >
    <template #avatar>
      <img
        class=" tw-h-4 tw-w-4 tw-rounded-full tw-object-cover"
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
      <img
        class="tw-h-full tw-w-full tw-rounded-full tw-object-cover"
        src="https://tinyurl.com/2vzn782p"
        alt="avatar"
      />
    </template>
  </spr-lozenge>
</template>

<script setup>
import IconUsersThree from '~icons/ph/users-three';
</script>
```

## Icon

<div class="tw-flex tw-flex-col  tw-gap-2">
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

## Removable

<div class="tw-flex tw-flex-col  tw-gap-2">
  <spr-lozenge
    label="Users"
    tone="success"
    removable
    url="https://tinyurl.com/2vzn782p"
    :visible="visible"
    @onRemove="visible = false"
    >
    <template #icon>
      <icon-users-three />
    </template>
  </spr-lozenge>
</div>

```vue
<template>
  <spr-lozenge
    label="Users"
    tone="information"
    removable
    url="https://tinyurl.com/2vzn782p"
    :visible="visible"
    @onRemove="visible = false"
  >
    <template #icon>
      <IconUsersThree />
    </template>
  </spr-lozenge>
</template>

<script setup>
import { ref } from 'vue';
import IconUsersThree from '~icons/ph/users-three';

const visible = ref < boolean > true;
</script>
```

## Slot

| Name   | Description                |
| ------ | -------------------------- |
| icon   | customize icon component   |
| avatar | customize avatar component |

## Event

| Name     | Description                          |
| -------- | ------------------------------------ |
| onRemove | triggers when close button was click |

## Lozenge API

### Lozenge Attributes

| Name      | Description                                | Type                                                                           | Default |
| --------- | ------------------------------------------ | ------------------------------------------------------------------------------ | ------- |
| tone      | lozenge tone                               | `'pending' \| 'information' \|  'success' \| 'neutral' \|'caution' \|'danger'` | neutral |
| fill      | lozenge type (fill = true, hollow = false) | `boolean`                                                                      | false   |
| label     | Label                                      | `string`                                                                       | label   |
| removable | to remove the lozenge                      | `boolean`                                                                      | false   |
| url       | avatar image url                           | `string`                                                                       | none    |
