# Tabs

Tabs are used to organize content into different sections. They are commonly used in web applications to manage multiple views.

## Basic Usage

<spr-tabs :list="tabsBasic" />

```vue
<template>
  <spr-tabs :list="tabsBasic" />
</template>

<script setup>
import SprTabs from '@/components/tabs/tabs.vue';

const tabsBasic = [{ label: 'tab' }, { label: 'tab' }, { label: 'tab' }];
</script>
```

## With Icon

<spr-tabs :list="tabsWithIcon" />

```vue
<template>
  <spr-tabs :list="tabsWithIcon" />
</template>

<script setup>
import SprTabs from '@/components/tabs/tabs.vue';

const tabsWithIcon = [
  { label: 'tab', icon: 'ph:plant-light', iconFill: 'ph:plant-fill' },
  { label: 'tab', icon: 'ph:leaf-light', iconFill: 'ph:leaf-fill' },
  { label: 'tab', icon: 'ph:tree-light', iconFill: 'ph:tree-fill' },
];
</script>
```

## Icon Only

<spr-tabs :list="tabsIconOnly" />

```vue
<template>
  <spr-tabs :list="tabsIconOnly" />
</template>

<script setup>
import SprTabs from '@/components/tabs/tabs.vue';

const tabsIconOnly = [
  { icon: 'ph:plant-light', iconFill: 'ph:plant-fill' },
  { icon: 'ph:leaf-light', iconFill: 'ph:leaf-fill' },
  { icon: 'ph:tree-light', iconFill: 'ph:tree-fill' },
];
</script>
```

## Underlined

<spr-tabs :list="tabsUnderlined" :underlined=true />

```vue
<template>
  <spr-tabs :list="tabsUnderlined" :underlined="true" />
</template>

<script setup>
import SprTabs from '@/components/tabs/tabs.vue';

const tabsUnderlined = [
  { label: 'title', disabled: false },
  { label: 'title', disabled: false },
  { label: 'title', disabled: false },
];
</script>
```

## Underlined Disabled

<spr-tabs :list="tabsUnderlinedDisabled" :underlined=true />

```vue
<template>
  <spr-tabs :list="tabsUnderlinedDisabled" :underlined="true" />
</template>

<script setup>
import SprTabs from '@/components/tabs/tabs.vue';

const tabsUnderlinedDisabled = [
  { label: 'title', disabled: false },
  { label: 'title', disabled: false },
  { label: 'title', disabled: true },
];
</script>
```

## Underlined With Icon

<spr-tabs :list="tabsUnderlinedWithIcon" :underlined=true />

```vue
<template>
  <spr-tabs :list="tabsUnderlinedWithIcon" :underlined="true" />
</template>

<script setup>
import SprTabs from '@/components/tabs/tabs.vue';

const tabsUnderlinedWithIcon = [
  { label: 'title', disabled: false, icon: 'ph:plant-light', iconFill: 'ph:plant-fill' },
  { label: 'title', disabled: false, icon: 'ph:leaf-light', iconFill: 'ph:leaf-fill' },
  { label: 'title', disabled: false, icon: 'ph:tree-light', iconFill: 'ph:tree-fill' },
];
</script>
```

## Attributes

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
      <td>underlined</td>
      <td>tabs type</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>list</td>
      <td>List of tab</td>
      <td>Array</td>
      <td>[]</td>
    </tr>
  </tbody>
</table>

## Event

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>tabIndex</td>
      <td>emits the selected tab index</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import SprTabs from "@/components/tabs/tabs.vue";

const tabsBasic = [
  { label: "tab" },
  { label: "tab" },
  { label: "tab" },
]

const tabsWithIcon = [
  { label: "tab", icon: 'ph:plant-light', iconFill: 'ph:plant-fill' },
  { label: "tab", icon: 'ph:leaf-light', iconFill: 'ph:leaf-fill' },
  { label: "tab", icon: 'ph:tree-light', iconFill: 'ph:tree-fill' },
]

const tabsIconOnly = [
  { icon: 'ph:plant-light', iconFill: 'ph:plant-fill' },
  { icon: 'ph:leaf-light', iconFill: 'ph:leaf-fill' },
  { icon: 'ph:tree-light', iconFill: 'ph:tree-fill' },
]

const tabsUnderlined = [
  { label: "title", disabled: false },
  { label: "title", disabled: false },
  { label: "title", disabled: false },
]

const tabsUnderlinedDisabled = [
  { label: "title", disabled: false },
  { label: "title", disabled: false },
  { label: "title", disabled: true },
]

const tabsUnderlinedWithIcon = [
  { label: "title", disabled: false, icon: 'ph:plant-light', iconFill: 'ph:plant-fill' },
  { label: "title", disabled: false, icon: 'ph:leaf-light', iconFill: 'ph:leaf-fill' },
  { label: "title", disabled: false, icon: 'ph:tree-light', iconFill: 'ph:tree-fill' },
]
</script>
