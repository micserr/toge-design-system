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
import SprTabs from "@/components/tabs/tabs.vue";
import IconPlantLight from '~icons/ph/plant-light';
import IconPlantFill from '~icons/ph/plant-fill';
import IconLeafLight from '~icons/ph/leaf-light';
import IconLeafFill from '~icons/ph/leaf-fill';
import IconTreeLight from '~icons/ph/tree-light';
import IconTreeFill from '~icons/ph/tree-fill';

const tabsWithIcon = [
  { label: "tab", icon: IconPlantLight, iconFill: IconPlantFill },
  { label: "tab", icon: IconLeafLight, iconFill: IconLeafFill },
  { label: "tab", icon: icon: IconTreeLight, iconFill: IconTreeFill },
]
</script>
```

## Icon Only

<spr-tabs :list="tabsIconOnly" />

```vue
<template>
  <spr-tabs :list="tabsIconOnly" />
</template>

<script setup>
import SprTabs from "@/components/tabs/tabs.vue";
import IconPlantLight from '~icons/ph/plant-light';
import IconPlantFill from '~icons/ph/plant-fill';
import IconLeafLight from '~icons/ph/leaf-light';
import IconLeafFill from '~icons/ph/leaf-fill';
import IconTreeLight from '~icons/ph/tree-light';
import IconTreeFill from '~icons/ph/tree-fill';

const tabsIconOnly = [
  { icon: IconPlantLight, iconFill: IconPlantFill },
  { icon: IconLeafLight, iconFill: IconLeafFill },
  { icon: icon: IconTreeLight, iconFill: IconTreeFill },
]
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
import SprTabs from "@/components/tabs/tabs.vue";
import IconPlantLight from '~icons/ph/plant-light';
import IconPlantFill from '~icons/ph/plant-fill';
import IconLeafLight from '~icons/ph/leaf-light';
import IconLeafFill from '~icons/ph/leaf-fill';
import IconTreeLight from '~icons/ph/tree-light';
import IconTreeFill from '~icons/ph/tree-fill';

const tabsUnderlinedWithIcon = [
  { label: "title", disabled: false, icon: IconPlantLight, iconFill: IconPlantFill },
  { label: "title", disabled: false, icon: IconLeafLight, iconFill: IconLeafFill },
  { label: "title", disabled: false, icon: icon: IconTreeLight, iconFill: IconTreeFill },
]
</script>
```

## Attributes

| Name       | Description | Type      | Default |
| ---------- | ----------- | --------- | ------- |
| underlined | tabs type   | `boolean` | false   |
| list       | List of tab | `Array`   | []      |

## Event

| Name     | Description                  |
| -------- | ---------------------------- |
| tabIndex | emits the selected tab index |

<script setup lang="ts">
  import SprTabs from "@/components/tabs/tabs.vue";
  import IconPlantLight from '~icons/ph/plant-light';
  import IconPlantFill from '~icons/ph/plant-fill';
  import IconLeafLight from '~icons/ph/leaf-light';
  import IconLeafFill from '~icons/ph/leaf-fill';
  import IconTreeLight from '~icons/ph/tree-light';
  import IconTreeFill from '~icons/ph/tree-fill';

  const tabsBasic = [
    { label: "tab" },
    { label: "tab" },
    { label: "tab" },
  ]

  const tabsWithIcon = [
    { label: "tab", icon: IconPlantLight, iconFill: IconPlantFill },
    { label: "tab", icon: IconLeafLight, iconFill: IconLeafFill },
    { label: "tab", icon: IconTreeLight, iconFill: IconTreeFill },
  ]

  const tabsIconOnly = [
    { icon: IconPlantLight, iconFill: IconPlantFill },
    { icon: IconLeafLight, iconFill: IconLeafFill },
    { icon: IconTreeLight, iconFill: IconTreeFill },
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
    { label: "title", disabled: false, icon: IconPlantLight, iconFill: IconPlantFill },
    { label: "title", disabled: false, icon: IconLeafLight, iconFill: IconLeafFill },
    { label: "title", disabled: false, icon: IconTreeLight, iconFill: IconTreeFill },
  ]
</script>
