---
outline: 'deep'
---

# Popper

Popper provides a utility for positioning floating elements relative to reference elements, commonly used for tooltips, dropdowns, and other overlay content.

## Key Features

<ul>
  <li>
    <strong>Dynamic Positioning:</strong>
    <span>Automatically positions content relative to a reference element.</span>
  </li>
  <li>
    <strong>Flexible Placement:</strong>
    <span>Supports multiple placement options including top, bottom, left, right, and their variations.</span>
  </li>
  <li>
    <strong>Click Outside:</strong>
    <span>Built-in click-outside detection to automatically close the popper.</span>
  </li>
  <li>
    <strong>Slot-based Content:</strong>
    <span>Flexible content management through Vue slots for both trigger and content.</span>
  </li>
  <li>
    <strong>Accessibility:</strong>
    <span>ARIA-compliant for better accessibility support.</span>
  </li>
</ul>

## Basic Usage

A basic popper requires a trigger element and content to display.

<div class="spr-w-fit">
  <spr-popper
    id="basic-example"
    distance="4"
    placement="bottom"
    :triggers="[]"
    :popper-hide-triggers="[]"
    :auto-hide="false"
    :delay="0"
  >
    <spr-button>Click for Menu</spr-button>
    <template #content>
      <div class="spr-p-4 spr-bg-white spr-shadow-lg spr-rounded-lg">
        <h3 class="spr-text-lg spr-font-medium spr-mb-2">Menu Options</h3>
        <ul class="spr-space-y-2">
          <li class="spr-flex spr-items-center spr-gap-2 spr-p-2 spr-hover:bg-gray-50 spr-rounded">
            <Icon icon="ph:user" class="spr-w-5 spr-h-5" />
            <span>Profile</span>
          </li>
          <li class="spr-flex spr-items-center spr-gap-2 spr-p-2 spr-hover:bg-gray-50 spr-rounded">
            <Icon icon="ph:gear" class="spr-w-5 spr-h-5" />
            <span>Settings</span>
          </li>
          <li class="spr-flex spr-items-center spr-gap-2 spr-p-2 spr-hover:bg-gray-50 spr-rounded">
            <Icon icon="ph:sign-out" class="spr-w-5 spr-h-5" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </template>
  </spr-popper>
</div>

```vue
<template>
  <spr-popper
    id="basic-example"
    distance="4"
    placement="bottom"
    :triggers="[]"
    :popper-hide-triggers="[]"
    :auto-hide="false"
    :delay="0"
  >
    <spr-button>Click for Menu</spr-button>
    <template #content>
      <div class="spr-bg-white spr-rounded-lg spr-p-4 spr-shadow-lg">
        <h3 class="spr-mb-2 spr-text-lg spr-font-medium">Menu Options</h3>
        <ul class="spr-space-y-2">
          <li class="spr-hover:bg-gray-50 spr-flex spr-items-center spr-gap-2 spr-rounded spr-p-2">
            <Icon icon="ph:user" class="spr-h-5 spr-w-5" />
            <span>Profile</span>
          </li>
          <li class="spr-hover:bg-gray-50 spr-flex spr-items-center spr-gap-2 spr-rounded spr-p-2">
            <Icon icon="ph:gear" class="spr-h-5 spr-w-5" />
            <span>Settings</span>
          </li>
          <li class="spr-hover:bg-gray-50 spr-flex spr-items-center spr-gap-2 spr-rounded spr-p-2">
            <Icon icon="ph:sign-out" class="spr-h-5 spr-w-5" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </template>
  </spr-popper>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>
```

## Placement

The popper can be positioned in different locations relative to the trigger element.

<div class="spr-w-fit spr-grid spr-grid-cols-4 spr-gap-4 spr-p-8">

  <spr-popper id="top-popper" placement="top" distance="4">
    <spr-button tone="information">
      <template #prefix-icon>
        <Icon icon="ph:arrow-up" />
      </template>
      Top Popper
    </spr-button>
    <template #content>
      <div class="spr-p-3 spr-bg-white spr-shadow-lg spr-rounded-lg spr-flex spr-items-center spr-gap-2">
        <Icon icon="ph:info" class="spr-text-blue-500 spr-w-5 spr-h-5" />
        <span>Top positioned content</span>
      </div>
    </template>
  </spr-popper>

  <spr-popper id="right-popper" placement="right" distance="4">
    <spr-button tone="success">
      <template #prefix-icon>
        <Icon icon="ph:arrow-right" />
      </template>
      Right Popper
    </spr-button>
    <template #content>
      <div class="spr-p-3 spr-bg-white spr-shadow-lg spr-rounded-lg spr-flex spr-items-center spr-gap-2">
        <Icon icon="ph:check-circle" class="spr-text-green-500 spr-w-5 spr-h-5" />
        <span>Right positioned content</span>
      </div>
    </template>
  </spr-popper>
  
  <spr-popper id="bottom-popper" placement="bottom" distance="4">
    <spr-button tone="danger">
      <template #prefix-icon>
        <Icon icon="ph:arrow-down" />
      </template>
      Bottom Popper
    </spr-button>
    <template #content>
      <div class="spr-p-3 spr-bg-white spr-shadow-lg spr-rounded-lg spr-flex spr-items-center spr-gap-2">
        <Icon icon="ph:warning" class="spr-text-red-500 spr-w-5 spr-h-5" />
        <span>Bottom positioned content</span>
      </div>
    </template>
  </spr-popper>
  
  <spr-popper id="left-popper" placement="left" distance="4">
    <spr-button tone="neutral">
      <template #prefix-icon>
        <Icon icon="ph:arrow-left" />
      </template>
      Left Popper
    </spr-button>
    <template #content>
      <div class="spr-p-3 spr-bg-white spr-shadow-lg spr-rounded-lg spr-flex spr-items-center spr-gap-2">
        <Icon icon="ph:bell" class="spr-text-gray-500 spr-w-5 spr-h-5" />
        <span>Left positioned content</span>
      </div>
    </template>
  </spr-popper>
</div>

```vue
<template>
  <spr-popper id="top-popper" placement="top">
    <spr-button tone="information">
      <template #prefix-icon>
        <Icon icon="ph:arrow-up" />
      </template>
      Top Popper
    </spr-button>
    <template #content>
      <div class="spr-bg-white spr-flex spr-items-center spr-gap-2 spr-rounded-lg spr-p-3 spr-shadow-lg">
        <Icon icon="ph:info" class="spr-h-5 spr-w-5 spr-text-blue-500" />
        <span>Top positioned content</span>
      </div>
    </template>
  </spr-popper>

  <!-- Similar for right, bottom, and left -->
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>
```

## API Reference

### Props

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
      <td>id</td>
      <td>Unique identifier for the popper container. Required for proper functionality.</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>Determines the position of the popper relative to its reference element. Supports: 'auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'</td>
      <td>string</td>
      <td>'bottom'</td>
    </tr>
    <tr>
      <td>triggers</td>
      <td>Array of events that will trigger the popper to show. Common values include:
        <ul>
          <li><code>click</code>: Shows on click</li>
          <li><code>hover</code>: Shows on mouse enter</li>
          <li><code>focus</code>: Shows on focus</li>
          <li><code>touch</code>: Shows on touch events</li>
        </ul>
        Empty array means manual control through v-model.
      </td>
      <td>string[]</td>
      <td>['click']</td>
    </tr>
    <tr>
      <td>popper-hide-triggers</td>
      <td>Array of events that will trigger the popper to hide. Uses the same values as triggers. Empty array means manual control.</td>
      <td>string[]</td>
      <td>['click']</td>
    </tr>
    <tr>
      <td>auto-hide</td>
      <td>When true, the popper will automatically hide when clicking outside of it.</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>delay</td>
      <td>Delay in milliseconds before showing/hiding the popper. Useful for hover interactions.</td>
      <td>number</td>
      <td>0</td>
    </tr>
    <tr>
      <td>distance</td>
      <td>Distance in pixels between the popper and its reference element.</td>
      <td>number | string</td>
      <td>"4"</td>
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
      <td>default</td>
      <td>The trigger element that will show/hide the popper content when clicked.</td>
    </tr>
    <tr>
      <td>content</td>
      <td>The content to be displayed in the popper when triggered.</td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import SprPopper from "@/components/popper/popper.vue";
import SprButton from "@/components/button/button.vue";
import SprLogo from "@/components/logo/logo.vue";
</script>
