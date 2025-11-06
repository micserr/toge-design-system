---
title: Tabs
descripttion: Tabs are used to organize content into different sections. They are commonly used in web applications to manage multiple views.
outline: deep
---

# Tabs

Tabs are used to organize content into different sections. They are commonly used in web applications to manage multiple views.

## Basic Usage

<h5 class="spr-mb-4">Regular Tabs:</h5>

<spr-tabs :list="tabsBasic" />

```vue
<template>
  <spr-tabs :list="tabsBasic" />
</template>

<script lang="ts" setup>
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

<script lang="ts" setup>
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

<script lang="ts" setup>
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

<script lang="ts" setup>
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

<script lang="ts" setup>
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

<script lang="ts" setup>
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

<script lang="ts" setup>
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

<script lang="ts" setup>
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

<script lang="ts" setup>
import SprTabs from '@/components/tabs/tabs.vue';

const tabsIconOnly = [
  { icon: 'ph:plant-light', iconFill: 'ph:plant-fill' },
  { icon: 'ph:leaf-light', iconFill: 'ph:leaf-fill' },
  { icon: 'ph:tree-light', iconFill: 'ph:tree-fill' },
];
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
      <td>list</td>
      <td>Array of tab items to display. Each item should contain a <code>label</code> property (for text display), and can optionally include <code>icon</code> (icon to display), <code>iconFill</code> (icon to display when active), and <code>disabled</code> (whether the tab is disabled).</td>
      <td>Array&lt;{ label: string; icon?: string; iconFill?: string | Component; disabled?: boolean }&gt;</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>underlined</td>
      <td>Determines the visual style of the tabs. When <code>true</code>, tabs will have an underline style with the active tab highlighted by an underline. When <code>false</code>, tabs will have a button-like appearance with borders.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>activeTab</td>
      <td>Sets which tab should be active by matching its label. If provided, the tab with the matching label will be activated on component mount. If not provided or no match is found, the first tab will be active by default.</td>
      <td>string</td>
      <td>''</td>
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
      <td>tabIndex</td>
      <td>Emitted when a tab is selected. Returns the index of the selected tab.</td>
      <td>(index: number)</td>
    </tr>
  </tbody>
</table>

### List Item Properties

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>label</td>
      <td>The text to display in the tab. This is also used to match against the <code>activeTab</code> prop.</td>
      <td>string</td>
      <td>Yes (unless using icon-only tabs)</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>The icon to display in the tab. Uses Iconify for icon rendering.</td>
      <td>string</td>
      <td>No</td>
    </tr>
    <tr>
      <td>iconFill</td>
      <td>The icon to display when the tab is active. This allows for a different icon style when a tab is selected.</td>
      <td>string | Component</td>
      <td>No</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Whether the tab is disabled. Disabled tabs cannot be selected and have a visual disabled state.</td>
      <td>boolean</td>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
  <spr-logo name="ecosystem" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import {ref} from 'vue';

import SprTabs from "@/components/tabs/tabs.vue";
import SprLogo from "@/components/logo/logo.vue";

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
