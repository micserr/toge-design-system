---
outline: 'deep'
---

# Stepper

The Status component provides a standard way of listing down steps in a process. It is used to indicate the current step in a multi-step process, such as a form or a checkout flow. The component can be used to show the status of each step, such as whether it is complete, in progress, or not started.

::: warning
There is no state management involved in this component. The status of each step is determined by the data passed to the component. You can use the `status` prop to set the status of each step. The accepted values for the `status` prop are `completed`, `active`, and `pending`. The component will automatically update the appearance of each step based on the status passed to it.
:::

## Basic Usage

<spr-stepper
  :steps="steps"
/>

```vue
<template>
  <spr-stepper
    :steps="steps"
  />
</template>
<script setup lang="ts">
import { ref } from 'vue';

const steps = ref([
  {
    number: 1,
    label: 'Step 1',
    status: 'completed',
    description: 'Description'
  },
  {
    number: 2,
    label: 'Step 2',
    status: 'active',
  },
  {
    number: 3,
    label: 'Step 3',
    status: 'pending',
  },
  {
    number: 4,
    label: 'Step 4',
    status: 'pending'
  },
]);
</script>

```

## Type
Stepper type is classified as `compact` (default) and `solid`. The stepper below is an example of a `solid` type.

<div style="width:200px;">
  <spr-stepper
    :steps="steps"
    type="solid"
  />
</div>

```vue
<template>
  <div style="width:200px;">
    <spr-stepper
      :steps="steps"
      type="solid"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const steps = ref([
  {
    number: 1,
    label: 'Step 1',
    status: 'completed',
    description: 'Description'
  },
  {
    number: 2,
    label: 'Step 2',
    status: 'active',
  },
  {
    number: 3,
    label: 'Step 3',
    status: 'pending',
  },
  {
    number: 4,
    label: 'Step 4',
    status: 'pending'
  },
]);
</script>

```


## Horizontal Stepper

<spr-stepper
  :steps="steps"
  variant="horizontal"
/>

```vue

<template>
  <spr-stepper
    :steps="steps"
    variant="horizontal"
  />
</template>
<script setup lang="ts">
import { ref } from 'vue';
const steps = ref([
  {
    number: 1,
    label: 'Step 1',
    status: 'completed',
    description: 'Description'
  },
  {
    number: 2,
    label: 'Step 2',
    status: 'active',
  },
  {
    number: 3,
    label: 'Step 3',
    status: 'pending',
  },
  {
    number: 4,
    label: 'Step 4',
    status: 'pending'
  },
]);
</script>

```

## Steps with Description

<spr-stepper
  :steps="stepsWithDescription"
/>

```vue
<template>
  <spr-stepper
    :steps="stepsWithDescription"
  />
</template>
<script setup lang="ts">
import { ref } from 'vue';
const stepsWithDescription = ref([
  {
    number: 1,
    label: 'Step 1',
    status: 'completed',
    description: 'Description 1'
  },
  {
    number: 2,
    label: 'Step 2',
    status: 'active',
    description: 'Description 2'
  },
  {
    number: 3,
    label: 'Step 3',
    status: 'pending',
    description: 'Description 3'
  },
  {
    number: 4,
    label: 'Step 4',
    status: 'pending',
    description: 'Description 4'
  },
]);
</script>

```

## Has Lines

<spr-stepper
  :steps="steps"
  has-lines
/>

<spr-stepper
  :steps="steps"
  has-lines
  variant="horizontal"
/>

::: tip
The lines extend as long as there is an available space, you can manipulate the width of this stepper through "class" attribute to shorten or lengthen the lines.
:::

```vue
<template>
  <spr-stepper
    :steps="steps"
    has-lines
  />

  <spr-stepper
    :steps="steps"
    has-lines
    variant="horizontal"
  />
</template>
```


## State Playground

<spr-stepper
  :steps="playgroundSteps"
  has-lines
  variant="vertical"
/>

<spr-stepper
  :steps="playgroundSteps"
  has-lines
  variant="horizontal"
  class="w-1/2"
/>

<spr-button tone="success" @click="updateSteps" class="spr-mt-size-spacing-md">Next State</spr-button>

```vue
<template>
  <spr-stepper
    :steps="playgroundSteps"
    has-lines
    variant="vertical"
  />

  <spr-stepper
    :steps="playgroundSteps"
    has-lines
    variant="horizontal"
    class="w-1/2"
  />

  <spr-button tone="success" @click="updateSteps">Next State</spr-button>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const playgroundSteps = ref([
  {
    number: 1,
    label: 'Playground Step 1',
    status: 'active',
  },
  {
    number: 2,
    label: 'Playground Step 2',
    status: 'pending',
  },
  {
    number: 3,
    label: 'Playground Step 3',
    status: 'pending',
  },
  {
    number: 4,
    label: 'Playground Step 4',
    status: 'pending'
  },
]);
const updateSteps = () => {
  // find the current active then set the next step to active
  const currentStep = playgroundSteps.value.find((step) => step.status === 'active');
  const currentIndex = playgroundSteps.value.indexOf(currentStep);
  if (currentIndex !== -1 && currentIndex < playgroundSteps.value.length - 1) {
    playgroundSteps.value[currentIndex].status = 'completed';
    playgroundSteps.value[currentIndex + 1].status = 'active';
  }
}
</script>

```

## API Reference

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Accepted Values</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>variant</td>
      <td>Determines if the layout of the stepper is horizontal or vertical</td>
      <td>'horizontal', 'vertical' </td>
      <td>string</td>
      <td>vertical</td>
    </tr>
    <tr>
      <td>hasLines</td>
      <td>Toggles the existence of lines</td>
      <td> true / false </td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>steps</td>
      <td>For table values</td>
      <td>Object</td>
      <td>
        Steps {
          number: number;
          label: string;
          status: 'completed' | 'active' | 'pending';
          description?: string;
        }
      </td>
      <td></td>
    </tr>
    <tr>
      <td>type</td>
      <td>Stepper type if display as compact or in solid active background.</td>
      <td>'compact', 'solid'</td>
      <td>string</td>
      <td>'compact'</td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="sidekick" theme="dark" width="50px" />
  <spr-logo name="payroll" theme="dark" width="50px" />
</div>

<script setup lang="ts">
import SprStepper from "@/components/stepper/stepper.vue";
import { ref } from 'vue';
import SprLogo from "@/components/logo/logo.vue";
import SprButton from "@/components/button/button.vue";

const steps = ref([
  {
    number: 1,
    label: 'Step 1',
    status: 'completed',
    description: 'Description'
  },
  {
    number: 2,
    label: 'Step 2',
    status: 'active',
  },
  {
    number: 3,
    label: 'Step 3',
    status: 'pending',
  },
  {
    number: 4,
    label: 'Step 4',
    status: 'pending'
  },
]);

const playgroundSteps = ref([
  {
    number: 1,
    label: 'Playground Step 1',
    status: 'active',
  },
  {
    number: 2,
    label: 'Playground Step 2',
    status: 'pending',
  },
  {
    number: 3,
    label: 'Playground Step 3',
    status: 'pending',
  },
  {
    number: 4,
    label: 'Playground Step 4',
    status: 'pending'
  },
]);

const updateSteps = () => {
  // find the current active then set the next step to active
  const currentStep = playgroundSteps.value.find((step) => step.status === 'active');
  const currentIndex = playgroundSteps.value.indexOf(currentStep);
  if (currentIndex !== -1 && currentIndex < playgroundSteps.value.length - 1) {
    playgroundSteps.value[currentIndex].status = 'completed';
    playgroundSteps.value[currentIndex + 1].status = 'active';
  }
}

const stepsWithDescription = ref([
  {
    number: 1,
    label: 'Step 1',
    status: 'completed',
    description: 'Description 1'
  },
  {
    number: 2,
    label: 'Step 2',
    status: 'active',
    description: 'Description 2'
  },
  {
    number: 3,
    label: 'Step 3',
    status: 'pending',
    description: 'Description 3'
  },
  {
    number: 4,
    label: 'Step 4',
    status: 'pending',
    description: 'Description 4'
  },
]);

</script>
