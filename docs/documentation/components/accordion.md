---
outline: 'deep'
title: Accordion
description: The accordion component allows users to expand and collapse sections of content. It is commonly used to organize large amounts of information in a compact and user-friendly manner. The accordion can contain various types of content, such as text, images, or other components, and can be customized in terms of behavior.
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
</template>
<script lang="ts" setup>  
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
</template>
<script lang="ts" setup>  
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
</template>
<script lang="ts" setup>  
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
</template>
<script lang="ts" setup>  
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
```

## Slots
<table>
  <thead>
    <tr>
      <td>Name</td>
      <td>Description</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${collapseId}</td>
      <td>Slots are dynamically generated based on the given collapseId of the accordion item.</td>
    </tr>
  </tbody>
</table>

## API Reference
<table>
  <thead>
    <tr>
      <td>Name</td>
      <td>Description</td>
      <td>Type</td>
      <td>Default</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>accordionItems</td>
      <td>
        Array of objects containing the title, subtitle, and collapseId for each accordion item.
      </td>
      <td>Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>alwaysOpen</td>
      <td>
        Defines if the accordion items should be always open. When set to true, all items will remain open when one is opened.
      </td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>isDefaultOpen</td>
      <td>
        Defines if the accordion items are visible on load. This prop will only work when the alwaysOpen prop is set to true.
      </td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>accordionTrigger</td>
      <td>
        Defines the trigger element for the accordion. This prop is used to customize the trigger element.
      </td>
      <td>'header' | 'button'</td>
      <td>'button'</td>
    </tr>
  </tbody>
</table>

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
