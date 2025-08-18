---
outline: 'deep'
---

# Progress Bar

The Progress Bar component visually represents the progress of a task or process, allowing users to track completion at a glance. It supports different sizes and an optional label for enhanced clarity.

## Basic Usage

<div>
  <spr-progress-bar :value="progressValue"/>
</div>

```vue
<template>
  <spr-progress-bar :value="progressValue" />
</template>

<script setup>
import { ref } from 'vue';
const progressValue = ref(25);
</script>
```

## Size

<div>
  <spr-progress-bar :value="50" size="xs"/>
  <br />
  <spr-progress-bar :value="75" size="sm"/>
   <br />
  <spr-progress-bar :value="100" size="lg"/>
</div>

```vue
<template>
  <spr-progress-bar :value="50" size="xs" />
  <spr-progress-bar :value="75" size="sm" />
  <spr-progress-bar :value="100" size="lg" />
</template>

<script setup>
import { ref } from 'vue';
const progressValue = ref(25);
</script>
```

## Label

<div>
  <spr-progress-bar :value="100" size="lg"  :label="true"/>
  <br/>
  <spr-progress-bar :value="100" size="lg"  :label="false"/>
</div>

```vue
<template>
  <spr-progress-bar :value="100" size="lg" :label="true" />
  <spr-progress-bar :value="100" size="lg" :label="false" />
</template>

<script setup>
import { ref } from 'vue';
const progressValue = ref(25);
</script>
```

## API Reference

### Props

<table>
  <thead>
    <tr>
      <th class="spr-min-w-[180px]">Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>value</code>
      </td>
      <td>The current progress value. This determines how much of the progress bar is filled. The value is calculated as a percentage of the <code>max</code> value.</td>
      <td>number</td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td>
        <code>size</code>
      </td>
      <td>
        Defines the height of the progress bar. Options include:
        <ul>
          <li><code>xs</code>: Extra small (4px height)</li>
          <li><code>sm</code>: Small (8px height)</li>
          <li><code>lg</code>: Large (12px height)</li>
        </ul>
      </td>
      <td>'xs' | 'sm' | 'lg'</td>
      <td><code>'lg'</code></td>
    </tr>
    <tr>
      <td>
        <code>max</code>
      </td>
      <td>The maximum value for the progress bar. The <code>value</code> prop is calculated as a percentage of this number. Must be between 1 and 100.</td>
      <td>number</td>
      <td><code>100</code></td>
    </tr>
    <tr>
      <td>
        <code>label</code>
      </td>
      <td>When set to <code>true</code>, displays a percentage label below the progress bar. The label shows the calculated percentage based on <code>value</code> and <code>max</code>.</td>
      <td>boolean</td>
      <td><code>true</code></td>
    </tr>       
  </tbody>
</table>

<script lang="ts" setup>
import {ref} from 'vue'
import SprProgressBar from "@/components/progress-bar/progress-bar.vue";

const progressValue = ref(25)

</script>
