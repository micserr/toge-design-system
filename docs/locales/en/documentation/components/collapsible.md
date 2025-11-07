---
title: Collapsible
descripttion: The Collapsible component provides a way to show and hide content in a smooth, animated transition. It's commonly used to create expandable sections, accordions, and dropdown menus, helping to conserve screen space while keeping content accessible.
outline: deep
---

# Collapsible

The Collapsible component provides a way to show and hide content in a smooth, animated transition. It's commonly used to create expandable sections, accordions, and dropdown menus, helping to conserve screen space while keeping content accessible.

## Basic Usage

The Collapsible component is controlled through a `v-model` binding that determines whether it's expanded or collapsed. Typically, you'll pair it with a trigger element (like a button) that toggles this state.

<spr-button tone="success" @click="collapsible1 = !collapsible1">Toggle Me</spr-button>
<spr-collapsible v-model="collapsible1">

  <div class="spr-p-4">
    Collapsible content here
  </div>
</spr-collapsible>

```vue
<template>
  <spr-button tone="success" @click="collapsible1 = !collapsible1">Toggle Me</spr-button>
  <spr-collapsible v-model="collapsible1">
    <div class="spr-p-4">Collapsible content here</div>
  </spr-collapsible>
</template>

<script setup>
import { ref } from 'vue';

const collapsible1 = ref(false); // Starts collapsed by default
</script>
```

## With Card

The Collapsible component works well with the Card component to create expandable card sections. This pattern is useful for dashboards, settings panels, or any interface where you want to show/hide detailed information.

<spr-card title="Contact Info" subtitle="Lorem ipsum dolor sit amet consectetur. Dui nunc elit vel sit at quis." has-collapsible :is-collapsible-open="collapsible2">
  <template #header>
    <div class="spr-ml-auto">
      <spr-button variant="secondary" hasIcon size="small" @click="collapsible2 = !collapsible2">
        <Icon icon="ph:caret-down" />
      </spr-button>    
    </div>
  </template>
  <spr-collapsible v-model="collapsible2">
    <div class="spr-px-4 spr-py-3">
      Collapsible Content
    </div>
  </spr-collapsible>
</spr-card>

```vue
<template>
  <spr-card
    title="Contact Info"
    subtitle="Lorem ipsum dolor sit amet consectetur. Dui nunc elit vel sit at quis."
    has-collapsible
    :is-collapsible-open="collapsible2"
  >
    <template #header>
      <div class="spr-ml-auto">
        <spr-button variant="secondary" hasIcon size="small" @click="collapsible2 = !collapsible2">
          <Icon icon="ph:caret-down" />
        </spr-button>
      </div>
    </template>

    <spr-collapsible v-model="collapsible2">
      <div class="spr-px-4 spr-py-3">Collapsible Content</div>
    </spr-collapsible>
  </spr-card>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const collapsible2 = ref(false);
</script>
```

:::tip Card Integration
When using `spr-collapsible` with `spr-card`, you can set the card's `has-collapsible` prop to `true` and use `is-collapsible-open` to keep the card's styling in sync with the collapsible state.
:::

## Custom Trigger

The Collapsible component provides a `trigger` slot that gives you access to the `toggleCollapsible` function. This allows you to create custom trigger elements that can toggle the collapsible state without needing to manage the state externally.

<spr-collapsible v-model="collapsible3">
  <template #trigger="{ toggleCollapsible }">
    <spr-button @click="toggleCollapsible">Custom Trigger</spr-button>
  </template>
  <div>
    Collapsible Content
  </div>
</spr-collapsible>

```vue
<template>
  <spr-collapsible v-model="collapsible3">
    <template #trigger="{ toggleCollapsible }">
      <spr-button @click="toggleCollapsible">Custom Trigger</spr-button>
    </template>
    <div>Collapsible Content</div>
  </spr-collapsible>
</template>

<script setup>
import { ref } from 'vue';

const collapsible3 = ref(false);
</script>
```

:::tip Using the trigger slot
The `toggleCollapsible` function provided in the trigger slot automatically updates the `v-model` value, so you don't need to manually toggle the state yourself.
:::

## Advanced Usage

### Customizing Transition Duration

You can customize how quickly the collapsible content expands and collapses by adjusting the `transitionDuration` prop (in milliseconds).

```vue
<template>
  <!-- Slow transition (500ms) -->
  <spr-collapsible v-model="isOpen" :transition-duration="500">
    <div class="spr-p-4">Slowly expanding/collapsing content</div>
  </spr-collapsible>

  <!-- Fast transition (50ms) -->
  <spr-collapsible v-model="isOpen" :transition-duration="50">
    <div class="spr-p-4">Quickly expanding/collapsing content</div>
  </spr-collapsible>
</template>
```

### Creating an Accordion

Multiple collapsible components can be combined to create an accordion interface where opening one section closes the others.

```vue
<template>
  <div class="spr-space-y-2">
    <div v-for="(section, index) in sections" :key="index" class="spr-rounded spr-border spr-p-2">
      <div
        class="spr-flex spr-cursor-pointer spr-items-center spr-justify-between spr-font-medium"
        @click="toggleSection(index)"
      >
        {{ section.title }}
        <Icon :icon="activeSection === index ? 'ph:caret-up' : 'ph:caret-down'" />
      </div>

      <spr-collapsible :model-value="activeSection === index">
        <div class="spr-pt-2">{{ section.content }}</div>
      </spr-collapsible>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const sections = [
  { title: 'Section 1', content: 'Content for section 1' },
  { title: 'Section 2', content: 'Content for section 2' },
  { title: 'Section 3', content: 'Content for section 3' },
];

const activeSection = ref(0); // First section open by default

const toggleSection = (index) => {
  activeSection.value = activeSection.value === index ? -1 : index;
};
</script>
```

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
      <td>modelValue</td>
      <td>boolean</td>
      <td>-</td>
      <td><strong>Required.</strong> Controls whether the content is expanded (true) or collapsed (false)</td>
    </tr>
    <tr>
      <td>transitionDuration</td>
      <td>number</td>
      <td>150</td>
      <td>Duration of the expand/collapse animation in milliseconds</td>
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
      <td>update:modelValue</td>
      <td>Emitted when the expanded/collapsed state changes</td>
      <td><code>(value: boolean)</code>: The new state</td>
    </tr>
  </tbody>
</table>

### Slots

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Props</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>default</td>
      <td>The content that will be collapsed/expanded</td>
      <td>None</td>
    </tr>
    <tr>
      <td>trigger</td>
      <td>Custom trigger element that will toggle the collapsible state</td>
      <td><code>{ toggleCollapsible: () => void }</code></td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import { ref } from 'vue';
import SprCollapsible from "@/components/collapsible/collapsible.vue";
import SprButton from '@/components/button/button.vue';
import SprCard from '@/components/card/card.vue';
import { Icon } from '@iconify/vue';

const collapsible1 = ref(false)
const collapsible2 = ref(false)
const collapsible3 = ref(false)
</script>
