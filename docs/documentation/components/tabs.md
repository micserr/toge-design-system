# Tabs

Tabs are used to organize content into different sections. They are commonly used in web applications to manage multiple views.

## Basic Usage

<h5 class="spr-mb-4">Regular Tabs:</h5>

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

<h5 class="spr-mb-4">Underlined Tabs:</h5>

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

## Disabled State

<h5 class="spr-mb-4">Regular Tabs:</h5>

<spr-tabs :list="tabsBasicWithDisabled" />

```vue
<template>
  <spr-tabs :list="tabsBasicWithDisabled" />
</template>

<script setup>
import SprTabs from '@/components/tabs/tabs.vue';

const tabsBasicWithDisabled = ref([
  { label: 'tab', disabled: false },
  { label: 'tab', disabled: false },
  { label: 'tab', disabled: true },
]);
</script>
```

<h5 class="spr-mb-4">Underlined Tabs:</h5>

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

## Active State

By adding the `active-tab` attribute to the component, you can specify which tab should be set as active. This will highlight the tab and visually indicate that it is selected.

<spr-tabs :list="tabsRandomLabel" active-tab="tab 2" />

```vue
<template>
  <spr-tabs :list="tabsRandomLabel" active-tab="tab 2" />
</template>

<script setup>
import SprTabs from '@/components/tabs/tabs.vue';

const tabsRandomLabel = ref([{ label: 'tab 1' }, { label: 'tab 2' }, { label: 'tab 3' }]);
</script>
```

## With Icon

<h5 class="spr-mb-4">Regular Tabs:</h5>

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

<h5 class="spr-mb-4">Underlined Tabs:</h5>

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

## Icon Only

<h5 class="spr-mb-4">Regular Tabs:</h5>

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

<h5 class="spr-mb-4">Underlined Tabs:</h5>

<spr-tabs :list="tabsIconOnly" :underlined="true" />

```vue
<template>
  <spr-tabs :list="tabsIconOnly" :underlined="true" />
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
import {ref} from 'vue';

import SprTabs from "@/components/tabs/tabs.vue";

const tabsBasic = ref([
  { label: "tab" },
  { label: "tab" },
  { label: "tab" },
]);

const tabsBasicWithDisabled = ref([
  { label: "tab", disabled: false },
  { label: "tab", disabled: false },
  { label: "tab", disabled: true },
]);


const tabsRandomLabel = ref([
  { label: "tab 1" },
  { label: "tab 2" },
  { label: "tab 3" },
]);

const tabsWithIcon = ref([
  { label: "tab", icon: 'ph:plant-light', iconFill: 'ph:plant-fill' },
  { label: "tab", icon: 'ph:leaf-light', iconFill: 'ph:leaf-fill' },
  { label: "tab", icon: 'ph:tree-light', iconFill: 'ph:tree-fill' },
]);

const tabsIconOnly = ref([
  { icon: 'ph:plant-light', iconFill: 'ph:plant-fill' },
  { icon: 'ph:leaf-light', iconFill: 'ph:leaf-fill' },
  { icon: 'ph:tree-light', iconFill: 'ph:tree-fill' },
]);

const tabsUnderlined = ref([
  { label: "title", disabled: false },
  { label: "title", disabled: false },
  { label: "title", disabled: false },
]);

const tabsUnderlinedDisabled = ref([
  { label: "title", disabled: false },
  { label: "title", disabled: false },
  { label: "title", disabled: true },
]);

const tabsUnderlinedWithIcon = ref([
  { label: "title", disabled: false, icon: 'ph:plant-light', iconFill: 'ph:plant-fill' },
  { label: "title", disabled: false, icon: 'ph:leaf-light', iconFill: 'ph:leaf-fill' },
  { label: "title", disabled: false, icon: 'ph:tree-light', iconFill: 'ph:tree-fill' },
]);
</script>
