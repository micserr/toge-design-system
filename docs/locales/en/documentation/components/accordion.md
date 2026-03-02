---
title: Accordion
descripttion: The Accordion component allows users to expand and collapse sections of content, helping to organize information in a compact and user-friendly manner.
outline: deep
---

# Accordion

The accordion component allows users to expand and collapse sections of content. It is commonly used to organize large amounts of information in a compact and user-friendly manner. The accordion can contain various types of content, such as text, images, or other components, and can be customized in terms of appearance and behavior.

## Basic Usage

<spr-accordion :accordion-items="accordionItems">
  <template #item1>
    Item1 content
  </template>
  <template #item2>
    Item2 content
  </template>
  <template #item3>
    Item3 content
  </template>
</spr-accordion>

```vue
<template>
  <spr-accordion :accordion-items="accordionItems">
    <template #item1> Item1 content </template>
    <template #item2> Item2 content </template>
    <template #item3> Item3 content </template>
  </spr-accordion>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const accordionItems = ref([
  {
    title: 'Accordion Item 1',
    subtitle:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    collapseId: 'item1',
  },
  {
    title: 'Accordion Item 2',
    subtitle: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    collapseId: 'item2',
  },
  {
    title: 'Accordion Item 3',
    subtitle: 'lorem ipsum dolor sit amet.',
    collapseId: 'item3',
  },
]);
</script>
```

## Accordion Trigger

By default, the accordion trigger is a button. You can change the trigger element to the header by setting the `accordionTrigger` prop to `header`.

<spr-accordion :accordion-items="accordionItems" accordion-trigger="header">
  <template #item1>
    Item1 content
  </template>
  <template #item2>
    Item2 content
  </template>
  <template #item3>
    Item3 content
  </template>
</spr-accordion>

```vue
<template>
  <spr-accordion :accordion-items="accordionItems" accordion-trigger="header">
    <template #item1> Item1 content </template>
    <template #item2> Item2 content </template>
    <template #item3> Item3 content </template>
  </spr-accordion>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const accordionItems = ref([
  {
    title: 'Accordion Item 1',
    subtitle:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    collapseId: 'item1',
  },
  {
    title: 'Accordion Item 2',
    subtitle: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    collapseId: 'item2',
  },
  {
    title: 'Accordion Item 3',
    subtitle: 'lorem ipsum dolor sit amet.',
    collapseId: 'item3',
  },
]);
</script>
```

## Always Open

The `alwaysOpen` prop allows you to set the accordion items to be always open. This means that when one item is opened, the others will remain open as well.

<spr-accordion :accordion-items="accordionItems" :always-open="true">
  <template #item1>
    Item1 content
  </template>
  <template #item2>
    Item2 content
  </template>
  <template #item3>
    Item3 content
  </template>
</spr-accordion>

```vue
<template>
  <spr-accordion :accordion-items="accordionItems" :always-open="true">
    <template #item1> Item1 content </template>
    <template #item2> Item2 content </template>
    <template #item3> Item3 content </template>
  </spr-accordion>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const accordionItems = ref([
  {
    title: 'Accordion Item 1',
    subtitle:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    collapseId: 'item1',
  },
  {
    title: 'Accordion Item 2',
    subtitle: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    collapseId: 'item2',
  },
  {
    title: 'Accordion Item 3',
    subtitle: 'lorem ipsum dolor sit amet.',
    collapseId: 'item3',
  },
]);
</script>
```

## Default State

By default, the accordion items are hidden. You can change the default state of the accordion items on load by setting the `isDefaultOpen` to `true`.

::: warning
The `isDefaultOpen` prop will only work when the `alwaysOpen` prop is set to `true`.
:::

<spr-accordion :accordion-items="accordionItems" :is-default-open="true" :always-open="true">
  <template #item1>
    Item1 content
  </template>
  <template #item2>
    Item2 content
  </template>
  <template #item3>
    Item3 content
  </template>
</spr-accordion>

```vue
<template>
  <spr-accordion :accordion-items="accordionItems" :is-default-open="true" :always-open="true">
    <template #item1> Item1 content </template>
    <template #item2> Item2 content </template>
    <template #item3> Item3 content </template>
  </spr-accordion>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const accordionItems = ref([
  {
    title: 'Accordion Item 1',
    subtitle:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    collapseId: 'item1',
  },
  {
    title: 'Accordion Item 2',
    subtitle: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    collapseId: 'item2',
  },
  {
    title: 'Accordion Item 3',
    subtitle: 'lorem ipsum dolor sit amet.',
    collapseId: 'item3',
  },
]);
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
      <td>accordionItems</td>
      <td>
        <p>Array of objects defining the accordion items. Each item should have the following properties:</p>
        <ul>
          <li><code>title</code> (string): Main heading for the accordion item</li>
          <li><code>subtitle</code> (string, optional): Additional descriptive text displayed below the title</li>
          <li><code>collapseId</code> (string): Unique identifier for the accordion item, used to match with slot names</li>
        </ul>
      </td>
      <td>Array&lt;{<br>
        title: string,<br>
        subtitle?: string,<br>
        collapseId: string<br>
      }&gt;</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>alwaysOpen</td>
      <td>
        When <code>true</code>, multiple accordion items can be expanded simultaneously. When <code>false</code>, opening one item will close any previously opened items.
      </td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>isDefaultOpen</td>
      <td>
        When <code>true</code>, all accordion items will be expanded by default when the component mounts. <strong>Note:</strong> This property only works when <code>alwaysOpen</code> is set to <code>true</code>.
      </td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>accordionTrigger</td>
      <td>
        Determines which element acts as the trigger to expand/collapse accordion items:
        <ul>
          <li><code>header</code>: The entire header area (including title and subtitle) acts as the trigger</li>
          <li><code>button</code>: Only the toggle button on the right side acts as the trigger</li>
        </ul>
      </td>
      <td>'header' | 'button'</td>
      <td>'button'</td>
    </tr>
    <tr>
      <td>bordered</td>
      <td>
        When <code>true</code>, the accordion has a border and rounded corners around the entire component. When <code>false</code>, borders are removed for a more minimal appearance.
      </td>
      <td>boolean</td>
      <td>true</td>
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
      <td>${collapseId}</td>
      <td>Dynamic slots that correspond to each accordion item's <code>collapseId</code>. Use these slots to add content inside each accordion panel.</td>
    </tr>
  </tbody>
</table>

### AccordionItem Interface

```typescript
interface AccordionItem {
  title: string; // Main heading text
  subtitle?: string; // Optional subheading text
  collapseId: string; // Unique identifier (used for slot naming)
}
```

<script lang="ts" setup>
  import SprAccordion from '@/components/accordion/accordion.vue'
  import { ref } from 'vue'

  const accordionItems = ref([
    {
      title: 'Accordion Item 1',
      subtitle: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      collapseId: 'item1'
    },
    {
      title: 'Accordion Item 2',
      subtitle: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      collapseId: 'item2'
    },
    {
      title: 'Accordion Item 3',
      subtitle: 'lorem ipsum dolor sit amet.',
      collapseId: 'item3'
    }
  ])
</script>
