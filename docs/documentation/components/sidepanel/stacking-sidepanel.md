---
outline: 'deep'
description: 'A component for displaying multiple side panels in a stacked layout.'
---

# Stacking Sidepanel

The `StackingSidepanel` component provides a powerful way to display multiple sidepanels that stack horizontally next to each other. This creates a visual hierarchy and navigation flow that's perfect for multi-step processes, drill-down interfaces, or master-detail views.

## Overview

The Stacking Sidepanel is ideal for:

- **Multi-step workflows**: Guide users through sequential steps without losing context
- **Master-detail views**: Show a list in one panel and details in another
- **Nested navigation**: Allow users to drill down into deeper levels of content
- **Related information**: Display supplementary content while keeping the primary content visible

## Key Features

- **Progressive Disclosure**: Display information in a logical progression
- **Maintains Context**: Users can see previous panels while working in current ones
- **Flexible Configuration**: Customize width, animations, and transitions
- **Responsive Design**: Works well on various screen sizes
- **Accessible**: Designed with keyboard navigation and screen readers in mind

::: warning IMPORTANT
The `StackingSidepanel` component is designed to work with right-positioned side panels only. Ensure that all side panels within the stacking side panel are positioned to the right and have the `is-stacking` prop set to `true`.
:::

## Basic Usage

<spr-button @click="stackingSidepanel?.showPanel('sidepanel-1')">Show Panel 1</spr-button>
<span class="spr-body-md">Active Panels: {{ activePanelText }}</span>

<spr-stacking-sidepanel ref="stacking-sidepanel" v-model:stack="activePanel" @update:stack="activePanelsHandler">
<template #sidepanel-1>
<spr-sidepanel
size="sm"
:position="'right'"
:is-stacking="true"
header-title="Sidepanel 1"
@close="stackingSidepanel?.hidePanel('sidepanel-1')" >

<div class="spr-p-size-spacing-2xs">
<spr-button @click="stackingSidepanel?.showPanel('sidepanel-2')">Show Panel 2</spr-button>
</div>
</spr-sidepanel>
</template>
<template #sidepanel-2>
<spr-sidepanel
size="md"
:position="'right'"
:is-stacking="true"
header-title="Sidepanel 2"
@close="stackingSidepanel?.hidePanel('sidepanel-2')" >
<div class="spr-p-size-spacing-2xs">
<spr-button @click="stackingSidepanel?.showPanel('sidepanel-3')">Show Panel 3</spr-button>
</div>
</spr-sidepanel>
</template>
<template #sidepanel-3>
<spr-sidepanel
size="lg"
:position="'right'"
:is-stacking="true"
header-title="Sidepanel 2"
@close="stackingSidepanel?.hidePanel('sidepanel-3')" >
<div class="spr-p-size-spacing-2xs">
<spr-button @click="stackingSidepanel?.hidePanel('sidepanel-3')">Close Panel 3</spr-button>
</div>
</spr-sidepanel>
</template>
</spr-stacking-sidepanel>

```vue{6,7,53}
<template>
  <spr-button @click="stackingSidepanel?.showPanel('sidepanel-1')">Show Panel 1</spr-button>
  <span class="spr-body-md">Active Panels: {{ activePanelText }}</span>

  <spr-stacking-sidepanel ref="stacking-sidepanel" v-model:stack="activePanel" @update:stack="activePanelsHandler">
    <template #sidepanel-1> <!-- Stacking sidepanel utilizes custom named slots. Make sure the slot names are unique. -->
      <!-- Stacking sidepanel is only supported for right positioned sidepanel. Also, set `is-stacking` to true. -->
      <spr-sidepanel
        size="sm"
        position="right"
        :is-stacking="true"
        header-title="Sidepanel 1"
        @close="stackingSidepanel?.hidePanel('sidepanel-1')"
      >
        <div class="spr-p-size-spacing-2xs">
          <spr-button @click="stackingSidepanel?.showPanel('sidepanel-2')">Show Panel 2</spr-button>
        </div>
      </spr-sidepanel>
    </template>
    <template #sidepanel-2>
      <spr-sidepanel
        size="md"
        position="right"
        :is-stacking="true"
        header-title="Sidepanel 2"
        @close="stackingSidepanel?.hidePanel('sidepanel-2')"
      >
        <div class="spr-p-size-spacing-2xs">
          <spr-button @click="stackingSidepanel?.showPanel('sidepanel-3')">Show Panel 3</spr-button>
        </div>
      </spr-sidepanel>
    </template>
    <template #sidepanel-3>
      <spr-sidepanel
        size="lg"
        position="right"
        :is-stacking="true"
        header-title="Sidepanel 2"
        @close="stackingSidepanel?.hidePanel('sidepanel-3')"
      >
        <div class="spr-p-size-spacing-2xs">
          <spr-button @click="stackingSidepanel?.hidePanel('sidepanel-3')">Close Panel 3</spr-button>
        </div>
      </spr-sidepanel>
    </template>
  </spr-stacking-sidepanel>
</template>

<script lang="ts" setup>
import { ref, useTemplateRef } from 'vue';

const activePanel = ref<string[]>([]);
const stackingSidepanel = useTemplateRef("stacking-sidepanel"); // Use component reference to access exposed methods

const activePanelText = ref("none");
const activePanelsHandler = (panel: string[]) => {
  activePanelText.value = panel.length > 0 ? panel.join(', ') : 'none';
}
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
      <td><code>stack</code></td>
      <td>Array of active panel names. Used with v-model:stack for two-way binding.</td>
      <td>string[]</td>
      <td>[]</td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Parameters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>update:stack</code></td>
      <td>Emitted when the stack of panels changes</td>
      <td><code>(panels: string[])</code></td>
    </tr>
  </tbody>
</table>

### Exposed Methods

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Parameters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>showPanel</code></td>
      <td>Shows a panel by its slot name</td>
      <td><code>(name: string)</code></td>
    </tr>
    <tr>
      <td><code>hidePanel</code></td>
      <td>Hides a panel by its slot name</td>
      <td><code>(name: string)</code></td>
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
      <td><em>named slots</em></td>
      <td>Each panel is rendered in a named slot. Use the <code>&lt;template #panelName&gt;</code> syntax to define content for each panel. Make sure that slot names are unique to avoid conflicts.</td>
    </tr>
  </tbody>
</table>

## Best Practices

<table>
  <thead>
    <tr>
      <th>Guideline</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Maintain Context Hierarchy</td>
      <td>Design panels to show a clear hierarchy of information, with each new panel revealing more detailed or specific content.</td>
    </tr>
    <tr>
      <td>Consistent Panel Sizing</td>
      <td>Consider using consistent panel sizes or a logical progression of sizes (e.g., narrow to wide) to maintain visual harmony.</td>
    </tr>
    <tr>
      <td>Clear Navigation Paths</td>
      <td>Provide obvious ways to navigate between panels, such as "Back" buttons or breadcrumbs.</td>
    </tr>
    <tr>
      <td>Limit Stack Depth</td>
      <td>To prevent excessive horizontal scrolling, limit the number of simultaneously open panels to 3-4 maximum.</td>
    </tr>
    <tr>
      <td>Panel Dependencies</td>
      <td>When a parent panel is closed, consider whether child panels should automatically close as well to maintain logical relationships.</td>
    </tr>
    <tr>
      <td>Performance Considerations</td>
      <td>For complex panel content, use lazy loading or conditional rendering to improve performance.</td>
    </tr>
    <tr>
      <td>Responsive Design</td>
      <td>Ensure the stacking behavior works well on different screen sizes, potentially collapsing to a single panel view on mobile devices.</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import { ref, useTemplateRef } from 'vue';
import SprButton from "@/components/button/button.vue"
import SprSidepanel from "@/components/sidepanel/sidepanel.vue";
import SprStackingSidepanel from "@/components/sidepanel/stacking-sidepanel/stacking-sidepanel.vue"

const activePanel = ref<string[]>([]);
const stackingSidepanel = useTemplateRef("stacking-sidepanel");
const activePanelText = ref("none");
const activePanelsHandler = (panel: string[]) => { 
  activePanelText.value = panel.length > 0 ? panel.join(', ') : 'none';
}
</script>
