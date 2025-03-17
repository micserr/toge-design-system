---
outline: 'deep'
---

# Collapsible

Allows to toggle the visibility of content

## Basic Usage

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

import { ref } from 'vue'; const collapsible1 = ref(false)
```

## With Card

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

    <!-- Insert Collapsible Card Content -->
    <spr-collapsible v-model="collapsible2">
      <div class="spr-px-4 spr-py-3">Collapsible Content</div>
    </spr-collapsible>
  </spr-card>
</template>
```

## Custom Trigger

Allows to customize the trigger inside collapsible component

<spr-collapsible v-model="collapsible3">
  <template #trigger={toggleCollapsible}>
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
      <td>trigger</td>
      <td>Custom trigger inside collapsible component</td>
    </tr>
  </tbody>
</table>

## API Reference

<table>
  <thead>
    <tr>
      <td>Name</td>
      <td>Type</td>
      <td>Default</td>
      <td>Description</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>transitionDuration</td>
      <td>number</td>
      <td>150</td>
      <td>Sets the collapsible transition duration</td>
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
