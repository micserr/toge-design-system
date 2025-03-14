---
outline: 'deep'
---

# Floating Action

The **Floating Action** component provides a fixed action bar at the bottom of the screen. It supports:

- **Customizable message & actions**
- **Smooth slide-up animation**
- **Fully flexible slot-based content**

This component is useful for **notifications, confirmations, or quick actions** at the bottom of the page.

## Basic Usage

The **Floating Action** component provides a **predefined structure** with two main slots:

- **`message` slot** – Used to display a message, warning, or notification on the left side.
- **`actions` slot** – Used to place action buttons (e.g., confirm, cancel) on the right side.

This makes it easy to **quickly implement a floating action bar** with minimal customization.

<spr-button size="large" tone="success" @click="showFloatingAction = true">Show Floating Action</spr-button>

<spr-floating-action :show="showFloatingAction">
  <template #message>
    <div class="spr-flex spr-items-center spr-gap-1">
      <Icon class="spr-text-mango-500 spr-size-5" icon="ph:warning-fill" />
      <span>You have unsaved changes</span>
    </div>
  </template>
  <template #actions>
    <spr-button size="large" variant="secondary" @click="showFloatingAction = false">Discard</spr-button>
    <spr-button size="large" tone="success">Save Changes</spr-button>
  </template>
</spr-floating-action>

```vue
<template>
  <spr-button size="large" tone="success" @click="showFloatingAction = true">Show Floating Action</spr-button>

  <spr-floating-action :show="showFloatingAction">
    <template #message>
      <div class="spr-flex spr-items-center spr-gap-1">
        <Icon class="spr-size-5 spr-text-mango-500" icon="ph:warning-fill" />
        <span>You have unsaved changes</span>
      </div>
    </template>
    <template #actions>
      <spr-button size="large" variant="secondary" @click="showFloatingAction = false">Discard</spr-button>
      <spr-button size="large" tone="success">Save Changes</spr-button>
    </template>
  </spr-floating-action>
</template>
```

## Customizing

The Floating Action component supports full customization using the **default slot**. Instead of using predefined **message** and **actions slots**, you can place any custom content inside the component. This allows you to modify the layout, structure, spacing, and styling as needed.

<spr-button size="large" tone="success" @click="showCustomFloatingAction = true">Show Custom Floating Action</spr-button>

<spr-floating-action :show="showCustomFloatingAction" class="spr-rounded-sm">
  <div class="spr-p-6 spr-w-full spr-flex spr-items-center spr-justify-between">
    <div class="spr-body-md-regular">Custom Content</div>
    <div>
      <spr-button size="large" variant="secondary" @click="showCustomFloatingAction = false">Cancel</spr-button>
    </div>
  </div>
</spr-floating-action>

```vue
<template>
  <spr-button size="large" tone="success" @click="showCustomFloatingAction = true"
    >Show Custom Floating Action</spr-button
  >

  <spr-floating-action :show="showCustomFloatingAction" class="spr-rounded-sm">
    <div class="spr-flex spr-w-full spr-items-center spr-justify-between spr-p-6">
      <div class="spr-body-md-regular">Custom Content</div>
      <div>
        <spr-button size="large" variant="secondary" @click="showCustomFloatingAction = false">Cancel</spr-button>
      </div>
    </div>
  </spr-floating-action>
</template>
```

## Props

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>show</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td>Controls visibility of the floating action component.</td>
    </tr>
  </tbody>
</table>

## Slots

<table>
  <thead>
    <tr>
      <th>Slot</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>message</code></td>
      <td>Content on the left side of the floating action.</td>
    </tr>
    <tr>
      <td><code>actions</code></td>
      <td>Buttons or actions on the right side.</td>
    </tr>
    <tr>
      <td><em>_default_</em></td>
      <td>Allows full customization of the floating action content, replacing the default layout.</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import { ref } from 'vue';
import SprFloatingAction from "@/components/floating-action/floating-action.vue";
import SprButton from '@/components/button/button.vue';
import { Icon } from '@iconify/vue';

const showFloatingAction = ref(false)
const showCustomFloatingAction = ref(false)

</script>
