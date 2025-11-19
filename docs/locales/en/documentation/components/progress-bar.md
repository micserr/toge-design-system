---
title: Progress Bar
descripttion: The Progress Bar component visually represents the progress of a task or process, allowing users to track completion at a glance. It supports different sizes and an optional label for enhanced clarity.
outline: deep
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

### Supporting Label

The `supporting-label` prop displays additional text alongside the percentage label. This is useful for providing context, such as the total value or unit of measurement.

<div>
  <spr-progress-bar :value="60" :max="100" :label="true" supporting-label="of 100 MB"/>
  <br/>
  <spr-progress-bar :value="75" :label="true" supporting-label="Complete"/>
  <br/>
  <spr-progress-bar :value="45" :label="true" supporting-label="Remaining"/>
</div>

```vue
<template>
  <!-- Display progress with total value -->
  <spr-progress-bar :value="60" :max="100" :label="true" supporting-label="of 100 MB" />

  <!-- Display with status text -->
  <spr-progress-bar :value="75" :label="true" supporting-label="Complete" />

  <!-- Display with contextual information -->
  <spr-progress-bar :value="45" :label="true" supporting-label="Remaining" />
</template>

<script setup>
import { ref } from 'vue';

const progressValue = ref(60);
</script>
```

### Placements

The `label-placement` prop controls where the percentage label appears relative to the progress bar. When the `label` prop is set to `true`, you can position the percentage label in various alignments.

#### Top Placements

<div class="spr-grid spr-gap-4 spr-mt-4">
  <spr-progress-bar :value="60" label-placement="top-start" :label="true"/>
  <spr-progress-bar :value="60" label-placement="top-center" :label="true"/>
  <spr-progress-bar :value="60" label-placement="top-end" :label="true"/>
</div>

```vue
<template>
  <spr-progress-bar :value="60" label-placement="top-start" :label="true" />
  <spr-progress-bar :value="60" label-placement="top-center" :label="true" />
  <spr-progress-bar :value="60" label-placement="top-end" :label="true" />
</template>

<script setup>
import { ref } from 'vue';

const progressValue = ref(60);
</script>
```

#### Bottom Placements

<div class="spr-grid spr-gap-4 spr-mt-4">
  <spr-progress-bar :value="60" label-placement="bottom-start" :label="true"/>
  <spr-progress-bar :value="60" label-placement="bottom-center" :label="true"/>
  <spr-progress-bar :value="60" label-placement="bottom-end" :label="true"/>
</div>

```vue
<template>
  <spr-progress-bar :value="60" label-placement="bottom-start" :label="true" />
  <spr-progress-bar :value="60" label-placement="bottom-center" :label="true" />
  <spr-progress-bar :value="60" label-placement="bottom-end" :label="true" />
</template>

<script setup>
import { ref } from 'vue';

const progressValue = ref(60);
</script>
```

#### Side Placements

<div class="spr-grid spr-gap-4 spr-mt-4">
  <spr-progress-bar :value="60" label-placement="left" :label="true"/>
  <spr-progress-bar :value="60" label-placement="right" :label="true"/>
</div>

```vue
<template>
  <spr-progress-bar :value="60" label-placement="left" :label="true" />
  <spr-progress-bar :value="60" label-placement="right" :label="true" />
</template>

<script setup>
import { ref } from 'vue';
const progressValue = ref(60);
</script>
```

## Color Variants

The Progress Bar component supports different color variants to indicate different states or contexts.

<div>
  <spr-progress-bar :value="75" color="success"/>
  <br />
  <spr-progress-bar :value="60" color="danger"/>
  <br />
  <spr-progress-bar :value="45" color="warning"/>
  <br />
  <spr-progress-bar :value="30" color="info"/>
  <br />
  <spr-progress-bar :value="90" color="neutral"/>
</div>

```vue
<template>
  <!-- Success (default) -->
  <spr-progress-bar :value="75" color="success" />

  <!-- Danger/Error state -->
  <spr-progress-bar :value="60" color="danger" />

  <!-- Warning state -->
  <spr-progress-bar :value="45" color="warning" />

  <!-- Info state -->
  <spr-progress-bar :value="30" color="info" />

  <!-- Neutral state -->
  <spr-progress-bar :value="90" color="neutral" />
</template>

<script setup>
import { ref } from 'vue';
const progressValue = ref(25);
</script>
```

## Custom Max Values

You can customize the maximum value to represent different scales or contexts.

<div>
  <spr-progress-bar :value="5" :max="10" label="true"/>
  <br />
  <spr-progress-bar :value="3" :max="12" label="true"/>
  <br />
  <spr-progress-bar :value="8" :max="20" label="true"/>
</div>

```vue
<template>
  <!-- 5 out of 10 = 50% -->
  <spr-progress-bar :value="5" :max="10" :label="true" />

  <!-- 3 out of 12 = 25% -->
  <spr-progress-bar :value="3" :max="12" :label="true" />

  <!-- 8 out of 20 = 40% -->
  <spr-progress-bar :value="8" :max="20" :label="true" />
</template>

<script setup>
import { ref } from 'vue';
const progressValue = ref(25);
</script>
```

## Percentage Placement

Control where the percentage label appears relative to the progress bar. You can position it at the top, bottom, left, or right.

<div>
  <spr-progress-bar :value="60" labelPlacement="top" :label="true"/>
  <br />
  <spr-progress-bar :value="60" labelPlacement="bottom" :label="true"/>
  <br />
  <spr-progress-bar :value="60" labelPlacement="left" :label="true"/>
  <br />
  <spr-progress-bar :value="60" labelPlacement="right" :label="true"/>
</div>

```vue
<template>
  <!-- Percentage above the progress bar -->
  <spr-progress-bar :value="60" labelPlacement="top" :label="true" />

  <!-- Percentage below the progress bar (default) -->
  <spr-progress-bar :value="60" labelPlacement="bottom" :label="true" />

  <!-- Percentage to the left of the progress bar -->
  <spr-progress-bar :value="60" labelPlacement="left" :label="true" />

  <!-- Percentage to the right of the progress bar -->
  <spr-progress-bar :value="60" labelPlacement="right" :label="true" />
</template>

<script setup>
import { ref } from 'vue';
const progressValue = ref(25);
</script>
```

## Advanced Examples

### File Upload Progress

<div>
  <spr-progress-bar :value="uploadProgress" color="success" size="sm" :label="true"/>
</div>

```vue
<template>
  <div>
    <spr-progress-bar :value="uploadProgress" color="success" size="sm" :label="true" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const uploadProgress = ref(65);

// Simulate upload progress
const simulateUpload = () => {
  const interval = setInterval(() => {
    uploadProgress.value += Math.random() * 10;
    if (uploadProgress.value >= 100) {
      uploadProgress.value = 100;
      clearInterval(interval);
    }
  }, 500);
};

// Start simulation
simulateUpload();
</script>
```

### Error State Progress

<div>
  <spr-progress-bar :value="errorProgress" color="danger" size="lg" :label="true"/>
</div>

```vue
<template>
  <div>
    <spr-progress-bar :value="errorProgress" color="danger" size="lg" :label="true" />
    <p class="spr-text-color-danger-base spr-text-sm">Upload failed at 60%</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const errorProgress = ref(60);
</script>
```

### Multi-Step Process

<div>
  <spr-progress-bar :value="stepProgress" color="info" size="sm" :label="true"/>
  <p class="spr-text-sm spr-text-color-base">Step 3 of 5 completed</p>
</div>

```vue
<template>
  <div>
    <spr-progress-bar :value="stepProgress" color="info" size="sm" :label="true" />
    <p class="spr-text-color-base spr-text-sm">Step {{ currentStep }} of {{ totalSteps }} completed</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const currentStep = ref(3);
const totalSteps = ref(5);
const stepProgress = ref(60); // 3/5 = 60%
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
    <tr>
      <td>
        <code>color</code>
      </td>
      <td>
        Defines the color theme of the progress bar. Options include:
        <ul>
          <li><code>success</code>: Green color for successful operations (default)</li>
          <li><code>danger</code>: Red color for errors or failed operations</li>
          <li><code>warning</code>: Orange color for warnings or pending operations</li>
          <li><code>info</code>: Blue color for informational states</li>
          <li><code>neutral</code>: Gray color for neutral states</li>
        </ul>
      </td>
      <td>'success' | 'danger' | 'warning' | 'info' | 'neutral'</td>
      <td><code>'success'</code></td>
    </tr>
    <tr>
      <td>
        <code>label-placement</code>
      </td>
      <td>
        Defines the position and alignment of the percentage label relative to the progress bar. Options include:
        <ul>
          <li><code>top</code>: Places the percentage label above the progress bar, aligned left (same as <code>top-start</code>)</li>
          <li><code>top-start</code>: Places the percentage label above the progress bar, aligned left</li>
          <li><code>top-center</code>: Places the percentage label above the progress bar, centered</li>
          <li><code>top-end</code>: Places the percentage label above the progress bar, aligned right</li>
          <li><code>bottom</code>: Places the percentage label below the progress bar, aligned left (same as <code>bottom-start</code>, default)</li>
          <li><code>bottom-start</code>: Places the percentage label below the progress bar, aligned left</li>
          <li><code>bottom-center</code>: Places the percentage label below the progress bar, centered</li>
          <li><code>bottom-end</code>: Places the percentage label below the progress bar, aligned right</li>
          <li><code>left</code>: Places the percentage label to the left of the progress bar</li>
          <li><code>right</code>: Places the percentage label to the right of the progress bar</li>
        </ul>
      </td>
      <td>'top' | 'top-start' | 'top-center' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-center' | 'bottom-end' | 'left' | 'right'</td>
      <td><code>'bottom'</code></td>
    </tr>
    <tr>
      <td>
        <code>supporting-label</code>
      </td>
      <td>Displays additional text alongside the percentage label. This is useful for providing context such as the total value, unit of measurement, or status information. The supporting label appears next to the main percentage label.</td>
      <td>string</td>
      <td><code>''</code></td>
    </tr>       
  </tbody>
</table>

<script lang="ts" setup>
import {ref} from 'vue'
import SprProgressBar from "@/components/progress-bar/progress-bar.vue";

const progressValue = ref(25)

// Color variants examples
const uploadProgress = ref(65);
const errorProgress = ref(60);
const stepProgress = ref(60);

// Simulate upload progress
const simulateUpload = () => {
  const interval = setInterval(() => {
    uploadProgress.value += Math.random() * 10;
    if (uploadProgress.value >= 100) {
      uploadProgress.value = 100;
      clearInterval(interval);
    }
  }, 500);
};

// Start simulation
simulateUpload();
</script>
