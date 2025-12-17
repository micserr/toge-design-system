---
title: Radio Grouped
descripttion: A Radio Grouped component renders a group of radio buttons from an array of options, simplifying the creation of radio button groups.
outline: deep
---

# Radio Grouped

The `Radio Grouped` component renders a group of radio buttons from an array of options, simplifying the creation of radio button groups. It provides a convenient way to manage multiple radio options with built-in support for v-model binding, disabled states, and display helpers.

## Basic Usage

<div class="spr-flex spr-flex-col spr-items-start spr-gap-2">
  <spr-radio-grouped
    id="grouped-radio1"
    v-model="radioModel.grouped1"
    name="grouped_name1"
    :options="[
      { text: 'Option 1', value: 'value1' },
      { text: 'Option 2', value: 'value2' },
      { text: 'Option 3', value: 'value3' },
    ]"
  />
</div>

```vue
<template>
  <spr-radio-grouped
    id="grouped-radio"
    v-model="selectedOption"
    name="grouped_options"
    :options="[
      { text: 'Option 1', value: 'value1' },
      { text: 'Option 2', value: 'value2' },
      { text: 'Option 3', value: 'value3' },
    ]"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedOption = ref('');
</script>
```

## With Pre-selected Value

<div class="spr-flex spr-flex-col spr-items-start spr-gap-2">
  <spr-radio-grouped
    id="grouped-radio2"
    v-model="radioModel.grouped2"
    name="grouped_name2"
    :options="[
      { text: 'Option 1', value: 'value1' },
      { text: 'Option 2', value: 'value2' },
      { text: 'Option 3', value: 'value3' },
    ]"
  />
</div>

```vue
<template>
  <spr-radio-grouped
    id="grouped-radio"
    v-model="selectedOption"
    name="grouped_options"
    :options="[
      { text: 'Option 1', value: 'value1' },
      { text: 'Option 2', value: 'value2' },
      { text: 'Option 3', value: 'value3' },
    ]"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedOption = ref('value2');
</script>
```

## Disabled State

Add the `disabled` attribute to disable all options, or set `disabled: true` on individual options.

<div class="spr-flex spr-flex-col spr-items-start spr-gap-4">
  <div>
    <p class="spr-text-sm spr-font-semibold spr-mb-2">All Disabled</p>
    <spr-radio-grouped
      id="grouped-radio3"
      v-model="radioModel.grouped3"
      name="grouped_name3"
      :options="[
        { text: 'Option 1', value: 'value1' },
        { text: 'Option 2', value: 'value2' },
      ]"
      disabled
    />
  </div>
  <div>
    <p class="spr-text-sm spr-font-semibold spr-mb-2">Partial Disabled</p>
    <spr-radio-grouped
      id="grouped-radio4"
      v-model="radioModel.grouped4"
      name="grouped_name4"
      :options="[
        { text: 'Option 1', value: 'value1' },
        { text: 'Option 2', value: 'value2', disabled: true },
        { text: 'Option 3', value: 'value3' },
      ]"
    />
  </div>
</div>

```vue
<template>
  <div class="spr-flex spr-flex-col spr-gap-4">
    <!-- All disabled -->
    <spr-radio-grouped
      id="grouped-radio"
      v-model="selectedOption"
      name="grouped_options"
      :options="[
        { text: 'Option 1', value: 'value1' },
        { text: 'Option 2', value: 'value2' },
      ]"
      disabled
    />

    <!-- Partial disabled -->
    <spr-radio-grouped
      id="grouped-radio-partial"
      v-model="selectedOption"
      name="grouped_options_partial"
      :options="[
        { text: 'Option 1', value: 'value1' },
        { text: 'Option 2', value: 'value2', disabled: true },
        { text: 'Option 3', value: 'value3' },
      ]"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedOption = ref('');
</script>
```

## Display Helper

Display helpful text or error messages below the radio group using the `display-helper`, `helper-text`, and `error` props.

<div class="spr-flex spr-flex-col spr-items-start spr-gap-4">
  <div>
    <p class="spr-text-sm spr-font-semibold spr-mb-2">Helper Text</p>
    <spr-radio-grouped
      id="grouped-radio5"
      v-model="radioModel.grouped5"
      name="grouped_name5"
      :options="[
        { text: 'Option 1', value: 'value1' },
        { text: 'Option 2', value: 'value2' },
      ]"
      display-helper
      helper-text="Select one of the available options"
    />
  </div>
  <div>
    <p class="spr-text-sm spr-font-semibold spr-mb-2">Error State</p>
    <spr-radio-grouped
      id="grouped-radio5b"
      v-model="radioModel.grouped5b"
      name="grouped_name5b"
      :options="[
        { text: 'Option 1', value: 'value1' },
        { text: 'Option 2', value: 'value2' },
      ]"
      display-helper
      helper-icon="ph:info-fill"
      helper-text="This field is required"
      error
    />
  </div>
</div>

```vue
<template>
  <div class="spr-flex spr-flex-col spr-gap-6">
    <!-- Helper Text -->
    <spr-radio-grouped
      id="grouped-radio"
      v-model="selectedOption"
      name="grouped_options"
      :options="[
        { text: 'Option 1', value: 'value1' },
        { text: 'Option 2', value: 'value2' },
      ]"
      display-helper
      helper-text="Select one of the available options"
    />

    <!-- Error State -->
    <spr-radio-grouped
      id="grouped-radio-error"
      v-model="selectedOption"
      name="grouped_options_error"
      :options="[
        { text: 'Option 1', value: 'value1' },
        { text: 'Option 2', value: 'value2' },
      ]"
      display-helper
      helper-icon="ph:info-fill"
      helper-text="This field is required"
      error
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedOption = ref('');
</script>
```

## Horizontal Alignment

Control the horizontal alignment of the radio group using the `horizontal-align` prop with values: `left`, `center`, or `right`.

<div class="spr-flex spr-flex-col spr-items-start spr-gap-2">
  <p class="spr-text-sm spr-font-semibold">Left Aligned</p>
  <spr-radio-grouped
    id="grouped-radio6"
    v-model="radioModel.grouped6"
    name="grouped_name6"
    :options="[
      { text: 'Option 1', value: 'value1' },
      { text: 'Option 2', value: 'value2' },
      { text: 'Option 3', value: 'value3' },
    ]"
    horizontal-align="left"
  />
</div>

<div class="spr-flex spr-flex-col spr-items-start spr-gap-2">
  <p class="spr-text-sm spr-font-semibold">Center Aligned</p>
  <spr-radio-grouped
    id="grouped-radio7"
    v-model="radioModel.grouped7"
    name="grouped_name7"
    :options="[
      { text: 'Option 1', value: 'value1' },
      { text: 'Option 2', value: 'value2' },
      { text: 'Option 3', value: 'value3' },
    ]"
    horizontal-align="center"
  />
</div>

<div class="spr-flex spr-flex-col spr-items-start spr-gap-2">
  <p class="spr-text-sm spr-font-semibold">Right Aligned</p>
  <spr-radio-grouped
    id="grouped-radio8"
    v-model="radioModel.grouped8"
    name="grouped_name8"
    :options="[
      { text: 'Option 1', value: 'value1' },
      { text: 'Option 2', value: 'value2' },
      { text: 'Option 3', value: 'value3' },
    ]"
    horizontal-align="right"
  />
</div>

```vue
<template>
  <div class="spr-flex spr-flex-col spr-gap-6">
    <spr-radio-grouped
      id="grouped-radio"
      v-model="selectedOption"
      name="grouped_options"
      :options="[
        { text: 'Option 1', value: 'value1' },
        { text: 'Option 2', value: 'value2' },
        { text: 'Option 3', value: 'value3' },
      ]"
      horizontal-align="left"
    />

    <spr-radio-grouped
      id="grouped-radio-center"
      v-model="selectedOption"
      name="grouped_options_center"
      :options="[
        { text: 'Option 1', value: 'value1' },
        { text: 'Option 2', value: 'value2' },
        { text: 'Option 3', value: 'value3' },
      ]"
      horizontal-align="center"
    />

    <spr-radio-grouped
      id="grouped-radio-right"
      v-model="selectedOption"
      name="grouped_options_right"
      :options="[
        { text: 'Option 1', value: 'value1' },
        { text: 'Option 2', value: 'value2' },
        { text: 'Option 3', value: 'value3' },
      ]"
      horizontal-align="right"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedOption = ref('');
</script>
```

## Description

Add helpful descriptions to each radio option using the `description` property in the options array. This provides additional context or details about each choice.

<div class="spr-flex spr-flex-col spr-items-start spr-gap-2">
  <spr-radio-grouped
    id="grouped-radio-desc"
    v-model="radioModel.grouped10"
    name="grouped_name_desc"
    :options="[
      { text: 'Option 1', value: 'value1', description: 'This is the first option with a helpful description' },
      { text: 'Option 2', value: 'value2', description: 'This is the second option with more details' },
      { text: 'Option 3', value: 'value3', description: 'This is the third option with additional information' },
    ]"
  />
</div>

```vue
<template>
  <spr-radio-grouped
    id="grouped-radio"
    v-model="selectedOption"
    name="grouped_options"
    :options="[
      { text: 'Option 1', value: 'value1', description: 'This is the first option with a helpful description' },
      { text: 'Option 2', value: 'value2', description: 'This is the second option with more details' },
      { text: 'Option 3', value: 'value3', description: 'This is the third option with additional information' },
    ]"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedOption = ref('value1');
</script>
```

## Choice Box

Use the `choice-box` prop to display radio options as full-width choice boxes with expanded clickable areas. This improves usability by making the entire component interactive.

<div class="spr-flex spr-flex-col spr-items-start spr-gap-2">
  <spr-radio-grouped
    id="grouped-radio-choicebox"
    v-model="radioModel.grouped9"
    name="grouped_name_choicebox"
    :options="[
      { text: 'Option 1', value: 'value1' },
      { text: 'Option 2', value: 'value2' },
      { text: 'Option 3', value: 'value3' },
    ]"
    choice-box
  />
</div>

```vue
<template>
  <spr-radio-grouped
    id="grouped-radio"
    v-model="selectedOption"
    name="grouped_options"
    :options="[
      { text: 'Option 1', value: 'value1' },
      { text: 'Option 2', value: 'value2' },
      { text: 'Option 3', value: 'value3' },
    ]"
    choice-box
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedOption = ref('value1');
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
        <code>id</code>
      </td>
      <td>Unique identifier for the radio group. Used as the base for individual radio button IDs (e.g., <code>id-0</code>, <code>id-1</code>). Required for accessibility.</td>
      <td>string</td>
      <td><code>Required</code></td>
    </tr>
    <tr>
      <td>
        <code>model-value</code>
      </td>
      <td>Current selected value used with v-model for two-way binding. When this matches an option's <code>value</code>, that option is selected.</td>
      <td>string | number | boolean</td>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <td>
        <code>name</code>
      </td>
      <td>Name attribute for all radio input elements in the group. All radios in the group share this name to ensure only one can be selected at a time.</td>
      <td>string</td>
      <td><code>Required</code></td>
    </tr>
    <tr>
      <td>
        <code>options</code>
      </td>
      <td>Array of radio options. Each option should have <code>text</code> (display label) and <code>value</code> (option value) properties. Options can optionally have a <code>disabled</code> property.</td>
      <td>RadioOption[]</td>
      <td><code>[]</code></td>
    </tr>
    <tr>
      <td>
        <code>disabled</code>
      </td>
      <td>When set to <code>true</code>, all radio buttons in the group become non-interactive and appear visually disabled. Individual options can still be disabled using the <code>disabled</code> property in the option object.</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>horizontal-align</code>
      </td>
      <td>Controls the horizontal alignment of the radio options. Accepts values: `left`, `center`, or `right`.</td>
      <td>'left' | 'center' | 'right'</td>
      <td><code>'left'</code></td>
    </tr>
    <tr>
      <td>
        <code>display-helper</code>
      </td>
      <td>When set to <code>true</code>, displays the helper text below the radio group options.</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>helper-text</code>
      </td>
      <td>Helper text to display below the radio group when <code>display-helper</code> is <code>true</code>. Provides additional context or instructions for the user.</td>
      <td>string</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>
        <code>helper-icon</code>
      </td>
      <td>Icon name to display alongside the helper text. Accepts any icon name from the icon library.</td>
      <td>string</td>
      <td><code>null</code></td>
    </tr>
    <tr>
      <td>
        <code>error</code>
      </td>
      <td>When set to <code>true</code>, displays the radio group in an error state with red text for the helper message.</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>choice-box</code>
      </td>
      <td>When set to <code>true</code>, transforms each radio option into a full-width choice box with an expanded clickable area, improving usability and user experience.</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th class="spr-min-w-[180px]">Name</th>
      <th>Description</th>
      <th>Parameters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>update:modelValue</code>
      </td>
      <td>Emitted when a radio option is selected. This event is used for v-model binding to work correctly.</td>
      <td>
        <code>(value: string | number | boolean)</code> - The value of the selected option
      </td>
    </tr>
  </tbody>
</table>

### RadioOption Interface

The `options` prop expects an array of objects with the following structure:

```typescript
interface RadioOption {
  text: string; // Display text for the option
  value: string | number | boolean; // Value for the option
  disabled?: boolean; // Optional: disable individual option
}
```

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
</div>

<script lang="ts" setup>
import { ref } from "vue";

import SprRadioGrouped from "@/components/radio/radio-grouped/radio-grouped.vue";
import SprLogo from "@/components/logo/logo.vue";

const radioModel = ref({
  grouped1: '',
  grouped2: 'value2',
  grouped3: '',
  grouped4: '',
  grouped5: '',
  grouped5b: '',
  grouped6: '',
  grouped7: '',
  grouped8: '',
  grouped9: '',
  grouped10: '',
});
</script>
