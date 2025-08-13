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
      Seven different visual styles to indicate status or type: plain, pending, information, success, neutral, danger, and caution.
    </span>
  </li>
  <li>
    <strong>Fill Type:</strong>
    <span>Switch between hollow (outline) and filled styles for different visual emphasis.</span>
  </li>
  <li>
    <strong>Avatar Support:</strong>
    <span>Display user avatars using URL property or custom avatar slot.</span>
  </li>
  <li>
    <strong>Icon Slots:</strong>
    <span>Named slots for prefix icons, postfix icons, and custom avatar components.</span>
  </li>
  <li>
    <strong>Interactive States:</strong>
    <span>Support for interactive and dropdown modes with hover and active states.</span>
  </li>
  <li>
    <strong>Loading State:</strong>
    <span>Built-in skeletal loading state for async content.</span>
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

## Tone and Fill
Customize the lozenge's color style (tone) and choose between filled or outlined appearance (fill) to indicate status or emphasis.

<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain"/>
  <spr-lozenge label="pending" tone="pending" />
  <spr-lozenge label="information" tone="information" />
  <spr-lozenge label="success" tone="success" />
  <spr-lozenge label="neutral" tone="neutral" />
  <spr-lozenge label="danger" tone="danger" />
  <spr-lozenge label="caution" tone="caution" />
</div>
<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain" fill />
  <spr-lozenge label="pending" tone="pending" fill />
  <spr-lozenge label="information" tone="information" fill />
  <spr-lozenge label="success" tone="success" fill />
  <spr-lozenge label="neutral" tone="neutral" fill />
  <spr-lozenge label="danger" tone="danger" fill />
  <spr-lozenge label="caution" tone="caution" fill />
</div>

```vue
<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain"/>
  <spr-lozenge label="pending" tone="pending" />
  <spr-lozenge label="information" tone="information" />
  <spr-lozenge label="success" tone="success" />
  <spr-lozenge label="neutral" tone="neutral" />
  <spr-lozenge label="danger" tone="danger" />
  <spr-lozenge label="caution" tone="caution" />
</div>
<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain" fill />
  <spr-lozenge label="pending" tone="pending" fill />
  <spr-lozenge label="information" tone="information" fill />
  <spr-lozenge label="success" tone="success" fill />
  <spr-lozenge label="neutral" tone="neutral" fill />
  <spr-lozenge label="danger" tone="danger" fill />
  <spr-lozenge label="caution" tone="caution" fill />
</div>
```

## Avatar
You can use the `url` property to display an avatar image, or use the `avatar` slot for custom avatar components.
<div class="spr-flex spr-flex-col spr-gap-2 spr-bg-white-50 spr-overflow-auto spr-py-3">
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

### Slotted Avatar
You can also use the `avatar` slot to customize the avatar component.

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

## Prefix and Postfix Icon
You can use the `icon` property or the `icon` slot to add a prefix icon to the lozenge. By default, the `icon` property or slot renders as a prefix icon before the label.  
To add a postfix icon, use the `postfixIcon` property or the `postfixIcon` slot. This allows you to display an icon after the label.

<div class="spr-flex spr-flex-col spr-gap-2 spr-bg-white-50 spr-overflow-auto spr-py-3">
  <div class="spr-flex spr-items-center spr-gap-2">
    <spr-lozenge label="pending" tone="pending" icon="ph:acorn">
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="information" tone="information">
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="success" tone="success">
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="neutral" tone="neutral">
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="danger" tone="danger">
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="caution" tone="caution">
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="plain">
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
  </div>
  <div class="spr-flex spr-items-center spr-gap-2">
    <spr-lozenge label="pending" tone="pending" fill>
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="information" tone="information" fill>
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="success" tone="success" fill>
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="neutral" tone="neutral" fill>
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="danger" tone="danger" fill>
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="caution" tone="caution" fill>
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="plain" fill>
      <template #icon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
  </div>
</div>
<div class="spr-flex spr-flex-col spr-gap-2 spr-bg-white-50 spr-overflow-auto spr-py-3">
  <div class="spr-flex spr-items-center spr-gap-2">
    <spr-lozenge label="pending" tone="pending">
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="information" tone="information">
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="success" tone="success">
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="neutral" tone="neutral">
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="danger" tone="danger">
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="caution" tone="caution">
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="plain">
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
  </div>
  <div class="spr-flex spr-items-center spr-gap-2">
    <spr-lozenge label="pending" tone="pending" fill>
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="information" tone="information" fill>
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="success" tone="success" fill>
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="neutral" tone="neutral" fill>
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="danger" tone="danger" fill>
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="caution" tone="caution" fill>
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
    <spr-lozenge label="plain" fill>
      <template #postfixIcon>
        <Icon icon="ph:users-three" />
      </template>
    </spr-lozenge>
  </div>
</div>

```vue
<template>
  <!-- Prefix Icon -->
  <spr-lozenge label="pending" tone="pending" icon="ph:users-three" />
  <spr-lozenge label="pending" tone="pending">
    <template #icon>
      <Icon icon="ph:users-three" />
    </template>
  </spr-lozenge>

  <!-- Postfix Icon -->
   <spr-lozenge label="pending" tone="pending" postfix-icon="ph:users-three" />
  <spr-lozenge label="pending" tone="pending">
    <template #postfixIcon>
      <Icon icon="ph:users-three" />
    </template>
  </spr-lozenge>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>
```

## Interactive
The `interactive` prop enables interactive states for the lozenge, allowing it to respond to user actions such as hover and pressed. This is useful for making the lozenge behave like a button or menu trigger.
<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain" interactive />
  <spr-lozenge label="pending" tone="pending" interactive />
  <spr-lozenge label="information" tone="information" interactive />
  <spr-lozenge label="success" tone="success" interactive />
  <spr-lozenge label="neutral" tone="neutral" interactive />
  <spr-lozenge label="danger" tone="danger" interactive />
  <spr-lozenge label="caution" tone="caution" interactive />
</div>
<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain" fill interactive />
  <spr-lozenge label="pending" tone="pending" fill interactive />
  <spr-lozenge label="information" tone="information" fill interactive />
  <spr-lozenge label="success" tone="success" fill interactive />
  <spr-lozenge label="neutral" tone="neutral" fill interactive />
  <spr-lozenge label="danger" tone="danger" fill interactive />
  <spr-lozenge label="caution" tone="caution" fill interactive />
</div>

```vue
<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain" interactive />
  <spr-lozenge label="pending" tone="pending" interactive />
  <spr-lozenge label="information" tone="information" interactive />
  <spr-lozenge label="success" tone="success" interactive />
  <spr-lozenge label="neutral" tone="neutral" interactive />
  <spr-lozenge label="danger" tone="danger" interactive />
  <spr-lozenge label="caution" tone="caution" interactive />
</div>
<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain" fill interactive />
  <spr-lozenge label="pending" tone="pending" fill interactive />
  <spr-lozenge label="information" tone="information" fill interactive />
  <spr-lozenge label="success" tone="success" fill interactive />
  <spr-lozenge label="neutral" tone="neutral" fill interactive />
  <spr-lozenge label="danger" tone="danger" fill interactive />
  <spr-lozenge label="caution" tone="caution" fill interactive />
</div>
```

### Dropdown
The `dropdown` prop makes the lozenge behave as a predefined interactive element with a default postfix dropdown icon (`ph:caret-down-fill`).  

<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain" dropdown />
  <spr-lozenge label="pending" tone="pending" dropdown />
  <spr-lozenge label="information" tone="information" dropdown />
  <spr-lozenge label="success" tone="success" dropdown />
  <spr-lozenge label="neutral" tone="neutral" dropdown />
  <spr-lozenge label="danger" tone="danger" dropdown />
  <spr-lozenge label="caution" tone="caution" dropdown />
</div>
<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain" fill dropdown />
  <spr-lozenge label="pending" tone="pending" fill dropdown />
  <spr-lozenge label="information" tone="information" fill dropdown />
  <spr-lozenge label="success" tone="success" fill dropdown />
  <spr-lozenge label="neutral" tone="neutral" fill dropdown />
  <spr-lozenge label="danger" tone="danger" fill dropdown />
  <spr-lozenge label="caution" tone="caution" fill dropdown />
</div>

```vue
<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain" dropdown />
  <spr-lozenge label="pending" tone="pending" dropdown />
  <spr-lozenge label="information" tone="information" dropdown />
  <spr-lozenge label="success" tone="success" dropdown />
  <spr-lozenge label="neutral" tone="neutral" dropdown />
  <spr-lozenge label="danger" tone="danger" dropdown />
  <spr-lozenge label="caution" tone="caution" dropdown />
</div>
<div class="spr-flex spr-items-center spr-gap-2 spr-overflow-auto spr-py-3">
  <spr-lozenge label="plain" fill dropdown />
  <spr-lozenge label="pending" tone="pending" fill dropdown />
  <spr-lozenge label="information" tone="information" fill dropdown />
  <spr-lozenge label="success" tone="success" fill dropdown />
  <spr-lozenge label="neutral" tone="neutral" fill dropdown />
  <spr-lozenge label="danger" tone="danger" fill dropdown />
  <spr-lozenge label="caution" tone="caution" fill dropdown />
</div>
```
::: tip NOTE
If you provide a `postfixIcon` prop or slot, it will override the default dropdown icon.
:::

<spr-lozenge label="plain" dropdown>
  <template #postfixIcon>
    <Icon icon="ph:dots-three-vertical-bold" />
  </template>
</spr-lozenge>

```vue
<spr-lozenge label="plain" dropdown>
  <template #postfixIcon>
    <Icon icon="ph:dots-three-vertical-bold" />
  </template>
</spr-lozenge>
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
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>icon</td>
      <td>customize prefix icon component</td>
    </tr>
    <tr>
      <td>avatar</td>
      <td>customize avatar component</td>
    </tr>
    <tr>
      <td>postfixIcon</td>
      <td>customize postfix icon component (displayed after the label)</td>
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
      <td>icon</td>
      <td>Iconify prefix icon component</td>
      <td>string</td>
      <td></td>
    </tr>
    <tr>
      <td>postfixIcon</td>
      <td>Iconify postfix icon component</td>
      <td>string</td>
      <td></td>
    </tr>
    <tr>
      <td>loading</td>
      <td>Shows a loading  within the lozenge, indicating that content is being loaded.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>interactive</td>
      <td>Enables interactive states for the lozenge, allowing it to respond to user actions such as hover and pressed.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>dropdown</td>
      <td>Enables dropdown behavior with a default postfix icon.</td>
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
