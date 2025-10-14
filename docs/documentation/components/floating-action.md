---
title: Floating Action
descripttion: The Floating Action component provides a fixed action bar that appears at the bottom of the screen with a smooth animation. It's an essential UI element for providing contextual actions without disrupting the user's workflow.
outline: deep
---

# Floating Action

The **Floating Action** component provides a fixed action bar that appears at the bottom of the screen with a smooth animation. It's an essential UI element for providing contextual actions without disrupting the user's workflow.

## Overview

The floating action bar is designed to:

- Display important notifications or warnings
- Provide contextual action buttons
- Appear and disappear with a smooth slide-up animation
- Remain accessible while users interact with the page content
- Adapt to different screen sizes with responsive behavior

This component is ideal for scenarios such as form submissions, confirming actions, displaying validation messages, or providing quick access to important functions at the bottom of the page.

## Basic Usage

The Floating Action component provides a structured layout with two key slots:

- **`message` slot**: Used for displaying text, warnings, or notification content on the left side
- **`actions` slot**: Used for placing action buttons (confirm, cancel, save, etc.) on the right side

This predefined structure makes it easy to implement a consistent floating action bar across your application.

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
  <!-- Trigger button -->
  <spr-button size="large" tone="success" @click="showFloatingAction = true"> Show Floating Action </spr-button>

  <!-- Floating action component -->
  <spr-floating-action :show="showFloatingAction">
    <template #message>
      <div class="spr-flex spr-items-center spr-gap-1">
        <Icon class="spr-size-5 spr-text-mango-500" icon="ph:warning-fill" />
        <span>You have unsaved changes</span>
      </div>
    </template>
    <template #actions>
      <spr-button size="large" variant="secondary" @click="showFloatingAction = false"> Discard </spr-button>
      <spr-button size="large" tone="success"> Save Changes </spr-button>
    </template>
  </spr-floating-action>
</template>

<script setup>
import { ref } from 'vue';

const showFloatingAction = ref(false);
</script>
```

:::tip
The floating action component is automatically centered and has responsive behavior, adapting to different screen sizes while maintaining proper spacing and visibility.
:::

## Custom Layout

While the default structure with `message` and `actions` slots works for most cases, you can fully customize the floating action bar using the default slot. This gives you complete control over the layout, content, and styling.

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
  <spr-button size="large" tone="success" @click="showCustomFloatingAction = true">
    Show Custom Floating Action
  </spr-button>

  <spr-floating-action :show="showCustomFloatingAction" class="spr-rounded-sm">
    <div class="spr-flex spr-w-full spr-items-center spr-justify-between spr-p-6">
      <div class="spr-body-md-regular">Custom Content</div>
      <div>
        <spr-button size="large" variant="secondary" @click="showCustomFloatingAction = false"> Cancel </spr-button>
      </div>
    </div>
  </spr-floating-action>
</template>

<script setup>
import { ref } from 'vue';

const showCustomFloatingAction = ref(false);
</script>
```

:::tip
When using the default slot, the predefined structure is ignored, and you're responsible for the entire layout within the floating action component. This gives you maximum flexibility for creating custom layouts.
:::

## Animation

The Floating Action component comes with built-in smooth animations:

- **Appearing**: Slides up from below the viewport
- **Disappearing**: Slides down out of view

These animations are controlled by the `show` prop and provide a polished user experience without requiring any additional configuration.

## Common Use Cases

The Floating Action component is particularly useful for:

1. **Form submissions**: Providing save and cancel actions at the bottom of long forms
2. **Validation messages**: Displaying warnings or errors that need immediate attention
3. **Contextual actions**: Showing actions related to the current view or selected items
4. **Persistent notifications**: Keeping important information visible while users scroll

## API Reference

### Props

<table>
  <thead>
    <tr>
      <th>Name</th>
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
      <td>Controls the visibility of the floating action component. When <code>true</code>, the component is visible; when <code>false</code>, it's hidden with a slide-down animation.</td>
    </tr>
  </tbody>
</table>

### Slots

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>message</code></td>
      <td>Content displayed on the left side of the floating action bar. Typically used for notification text, warnings, or informational messages.</td>
    </tr>
    <tr>
      <td><code>actions</code></td>
      <td>Content displayed on the right side of the floating action bar. Typically used for buttons or other interactive elements.</td>
    </tr>
    <tr>
      <td><em>default</em></td>
      <td>When used, this replaces the predefined layout structure, allowing for complete customization of the floating action bar's content and layout.</td>
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
