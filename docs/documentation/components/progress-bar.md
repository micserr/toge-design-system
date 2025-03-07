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

## Progress Bar API

### Progress Bar Attributes

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
      <td>value</td>
      <td>Value of the progress bar</td>
      <td>number</td>
      <td>0</td>
    </tr>
    <tr>
      <td>size</td>
      <td>Defines the size of the progress bar. The accepted values are 'xs', 'sm' and 'lg'.</td>
      <td>string</td>
      <td>lg</td>
    </tr>
    <tr>
      <td>max</td>
      <td>Defines the max value of the progress bar</td>
      <td>number</td>
      <td>100</td>
    </tr>
    <tr>
      <td>label</td>
      <td>Shows the label for the progress bar</td>
      <td>boolean</td>
      <td>true</td>
    </tr>       
  </tbody>
</table>

<script lang="ts" setup>
import {ref} from 'vue'
import SprProgressBar from "@/components/progress-bar/progress-bar.vue";

const progressValue = ref(25)

</script>
