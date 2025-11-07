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

## Advanced Examples

### File Upload Progress

<div>
  <spr-progress-bar :value="uploadProgress" color="success" size="sm" :label="true"/>
</div>

```vue
<template>
  <div>
    <spr-progress-bar 
      :value="uploadProgress" 
      color="success" 
      size="sm" 
      :label="true" 
    />
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
    <spr-progress-bar 
      :value="errorProgress" 
      color="danger" 
      size="lg" 
      :label="true" 
    />
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
    <spr-progress-bar 
      :value="stepProgress" 
      color="info" 
      size="sm" 
      :label="true" 
    />
    <p class="spr-text-sm spr-text-color-base">Step {{ currentStep }} of {{ totalSteps }} completed</p>
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
  </tbody>
</table>

## Accessibility

The Progress Bar component includes proper ARIA attributes for screen readers and accessibility compliance:

- **`role="progressbar"`**: Identifies the element as a progress bar
- **`aria-valuemin`**: Set to 0 (minimum value)
- **`aria-valuemax`**: Set to the `max` prop value (default: 100)
- **`aria-valuenow`**: Set to the current `value` prop

These attributes ensure that assistive technologies can properly announce the progress state to users.

## Best Practices

### When to Use Each Color

- **`success`**: Completed tasks, successful uploads, finished processes
- **`danger`**: Failed operations, errors, critical issues
- **`warning`**: Pending operations, caution states, incomplete tasks
- **`info`**: General information, neutral progress, status updates
- **`neutral`**: Default states, unknown progress, placeholder content

### Size Guidelines

- **`xs`**: Use in compact spaces, inline progress indicators, or when space is limited
- **`sm`**: Use in forms, cards, or secondary progress indicators
- **`lg`**: Use as primary progress indicators, main content areas, or when visibility is important

### Label Usage

- **Show labels** when the exact percentage is important for user understanding
- **Hide labels** when the visual progress bar alone is sufficient
- **Always show labels** for critical processes where users need precise feedback

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
