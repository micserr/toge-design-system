---
title: Checkbox Component
descripttion: The Checkbox component allows users to select one or more items from a set of options. It supports various states including checked, unchecked, indeterminate, and disabled, and can be customized with labels, descriptions, borders, and full-width layouts.
outline: deep
---

# Checkbox Component

The checkbox component allows users to select one or more items from a set of options. Checkboxes are commonly used in forms and settings interfaces to enable multiple selections.

## Basic Usage

The most common way to use the checkbox component is with the `v-model` directive for two-way data binding.

<spr-checkbox v-model="checkboxModels.checkboxBasic" label="Checkbox Label" />

Value: <code>{{ checkboxModels.checkboxBasic }}</code>

```vue
<template>
  <spr-checkbox v-model="checkboxBasic" label="Checkbox Label" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import SprCheckbox from '@/components/checkbox/checkbox.vue';

const checkboxBasic = ref(false);
</script>
```

## Adding Description

You can add explanatory text below the label using the `description` prop. This is useful for providing additional context about what selecting the checkbox means.

<spr-checkbox 
  v-model="checkboxModels.checkboxDescription" 
  label="Accept Terms and Conditions" 
  description="By checking this box, you agree to our terms of service and privacy policy." 
/>

```vue
<template>
  <spr-checkbox
    v-model="checkboxDescription"
    label="Accept Terms and Conditions"
    description="By checking this box, you agree to our terms of service and privacy policy."
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import SprCheckbox from '@/components/checkbox/checkbox.vue';

const checkboxDescription = ref(false);
</script>
```

## Checked State

There are two ways to control the checked state of a checkbox:

Using `v-model` creates a two-way binding that automatically updates when the user interacts with the checkbox.

<spr-checkbox v-model="checkboxModels.checkboxChecked" label="Pre-selected Option" />

```vue
<template>
  <spr-checkbox v-model="checkboxChecked" label="Pre-selected Option" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import SprCheckbox from '@/components/checkbox/checkbox.vue';

// Initialize as checked
const checkboxChecked = ref(true);
</script>
```

### Using `checked` prop (One-way binding)

The `checked` prop provides one-way binding for cases where you want to explicitly control the checked state.

<spr-checkbox label="Always Checked Option" checked />

```vue
<template>
  <spr-checkbox label="Always Checked Option" checked />
</template>

<script lang="ts" setup>
import SprCheckbox from '@/components/checkbox/checkbox.vue';
</script>
```

::: warning
When using the `checked` prop without `v-model`, the checkbox state won't automatically update when clicked. This is useful for controlled components, but in most cases, `v-model` is preferred.
:::

## Disabled State

Use the `disabled` prop to render a checkbox that cannot be interacted with. Disabled checkboxes are visually distinct and have the `cursor-not-allowed` style applied.

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-checkbox v-model="checkboxModels.checkboxDisabled" label="Disabled Checked" disabled />
</div>

```vue
<template>
  <spr-checkbox v-model="checkboxDisabled" label="Disabled Checked" disabled />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import SprCheckbox from '@/components/checkbox/checkbox.vue';

const checkboxDisabled = ref(true);
</script>
```

## Indeterminate State

The indeterminate state is represented by a minus sign (−) instead of a checkmark. This state is useful for representing a "partially checked" state, typically used in hierarchical checkbox structures where child items have mixed selection states.

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-checkbox 
    v-model="checkboxModels.checkboxIndeterminate" 
    label="Parent Option (Some children selected)" 
    indeterminate 
  />
</div>

```vue
<template>
  <spr-checkbox v-model="checkboxIndeterminate" label="Parent Option (Some children selected)" indeterminate />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import SprCheckbox from '@/components/checkbox/checkbox.vue';

const checkboxIndeterminate = ref(true);
</script>
```

::: tip
In a parent-child checkbox structure, you can programmatically set the indeterminate state on the parent when some (but not all) children are checked:

```js
// Example logic for managing indeterminate state
const childOptions = ref([
  { id: 1, checked: true },
  { id: 2, checked: false },
  { id: 3, checked: true },
]);

const parentOption = computed(() => {
  const checkedCount = childOptions.value.filter((opt) => opt.checked).length;

  return {
    checked: checkedCount > 0,
    indeterminate: checkedCount > 0 && checkedCount < childOptions.value.length,
  };
});
```

:::

## Bordered Checkboxes

Use the `bordered` prop to add a border around the entire checkbox component, including the label and description. This helps create visual separation between checkbox options.

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-checkbox 
    v-model="checkboxModels.checkboxBordered" 
    label="Bordered Checkbox" 
    description="This checkbox has a border around it" 
    bordered 
  />
</div>

```vue
<template>
  <spr-checkbox
    v-model="checkboxBordered"
    label="Bordered Checkbox"
    description="This checkbox has a border around it"
    bordered
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import SprCheckbox from '@/components/checkbox/checkbox.vue';

const checkboxBordered = ref(true);
</script>
```

## Full Width Checkboxes

By default, checkboxes only take up as much width as needed for their content. Use the `fullWidth` prop to make the checkbox stretch to fill the entire width of its container.

<div class="spr-flex spr-flex-col spr-gap-2 spr-border spr-border-dashed spr-border-gray-300 spr-p-4">
  <spr-checkbox 
    v-model="checkboxModels.checkboxFullWidth" 
    label="Full Width Checkbox" 
    description="This checkbox takes up the full width of its container"
    bordered
    full-width
  />
</div>

```vue
<template>
  <spr-checkbox
    v-model="checkboxFullWidth"
    label="Full Width Checkbox"
    description="This checkbox takes up the full width of its container"
    bordered
    full-width
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import SprCheckbox from '@/components/checkbox/checkbox.vue';

const checkboxFullWidth = ref(true);
</script>
```

::: tip
The `full-width` prop is especially useful when:

- Placing checkboxes in a grid or flex layout
- Creating consistent widths for multiple form controls
- Building responsive forms that adapt to different screen sizes

:::

## Checkbox Groups

While the Sprout Design System doesn't include a dedicated checkbox group component, you can easily create your own checkbox groups by managing a collection of related checkboxes:

<div class="spr-p-4 spr-border spr-border-solid spr-border-gray-200 spr-rounded">
  <div class="spr-mb-2 spr-font-medium">Select your favorite fruits:</div>
  <div class="spr-flex spr-flex-col spr-gap-2">
    <spr-checkbox 
      v-model="fruits.apple" 
      label="Apple" 
    />
    <spr-checkbox 
      v-model="fruits.banana" 
      label="Banana" 
    />
    <spr-checkbox 
      v-model="fruits.orange" 
      label="Orange" 
    />
    <spr-checkbox 
      v-model="fruits.strawberry" 
      label="Strawberry" 
    />
  </div>
  <div class="spr-mt-3 spr-text-sm">
    Selected: {{ Object.keys(fruits).filter(key => fruits[key]).join(', ') || 'None' }}
  </div>
</div>

```vue
<template>
  <div class="checkbox-group">
    <div class="group-label">Select your favorite fruits:</div>
    <spr-checkbox v-model="fruits.apple" label="Apple" />
    <spr-checkbox v-model="fruits.banana" label="Banana" />
    <spr-checkbox v-model="fruits.orange" label="Orange" />
    <spr-checkbox v-model="fruits.strawberry" label="Strawberry" />

    <div class="selected-summary">
      Selected:
      {{
        Object.keys(fruits)
          .filter((key) => fruits[key])
          .join(', ') || 'None'
      }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';

import SprCheckbox from '@/components/checkbox/checkbox.vue';

const fruits = reactive({
  apple: false,
  banana: false,
  orange: false,
  strawberry: false,
});
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
      <td>modelValue</td>
      <td>The current state of the checkbox (checked or unchecked). Used with v-model for two-way binding.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>label</td>
      <td>The text label displayed next to the checkbox. Provides context about what the checkbox represents.</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>description</td>
      <td>Additional explanatory text displayed below the label to provide more context or details about the checkbox option.</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>When set to <code>true</code>, the checkbox becomes non-interactive and appears visually disabled. Users cannot click or interact with a disabled checkbox.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>checked</td>
      <td>Controls the checked state of the checkbox directly. This can be used as an alternative to v-model when one-way binding is preferred.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>indeterminate</td>
      <td>When set to <code>true</code>, the checkbox displays in an indeterminate state (represented by a minus sign). This is useful for parent checkboxes that represent a group with mixed selection states.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>bordered</td>
      <td>When set to <code>true</code>, adds a border around the entire checkbox component (including the label), providing visual separation from surrounding elements.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>full-width</td>
      <td>When set to <code>true</code>, the checkbox component will stretch to fill the full width of its container. When <code>false</code>, it will only be as wide as its content.</td>
      <td>boolean</td>
      <td>false</td>
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
      <td>update:modelValue</td>
      <td>Emitted when the checkbox state changes (checked or unchecked). This event is used for v-model binding to work correctly.</td>
      <td>(value: boolean): The new state of the checkbox after the change.</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import { ref, reactive } from "vue";

import SprCheckbox from "@/components/checkbox/checkbox.vue";

const checkboxModels = ref({
  checkboxBasic: false,
  checkboxDescription: false,
  checkboxChecked: true,
  checkboxDisabled: false,
  checkboxBordered: true,
  checkboxIndeterminate: true,
  checkboxFullWidth: true,
});

const fruits = reactive({
  apple: false,
  banana: false,
  orange: false,
  strawberry: false
});
</script>
