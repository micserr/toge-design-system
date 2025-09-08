---
outline: 'deep'
description: 'The Checkbox component allows users to select one or more items from a set of options. Checkboxes are commonly used in forms and settings interfaces to enable multiple selections.'
---

# Checkbox Component

The `spr-checkbox` component allows users to select one or more items from a set of options. Checkboxes are commonly used in forms and settings interfaces to enable multiple selections.

## Overview

Checkboxes in the Sprout Design System provide:

- Clear visual feedback with customizable states (checked, unchecked, indeterminate)
- Support for labels and descriptions to provide context
- Accessibility features for keyboard navigation and screen readers
- Various styling options including bordered variants

## Basic Usage

The most common way to use the checkbox component is with the `v-model` directive for two-way data binding.

Value: <code>{{ checkboxModels.checkbox1 }}</code>

<SprCheckbox v-model="checkboxModels.checkbox1" label="Checkbox Label" />

```vue
<template>
  <SprCheckbox v-model="checked" label="Checkbox Label" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SprCheckbox from '@/components/checkbox/checkbox.vue';

const checked = ref(false);
</script>
```

::: tip
Use the `v-model` directive to create a two-way binding with the checkbox state. The value will automatically update when the user interacts with the checkbox.
:::

## Adding Description

You can add explanatory text below the label using the `description` prop. This is useful for providing additional context about what selecting the checkbox means.

<SprCheckbox 
  v-model="checkboxModels.checkbox2" 
  label="Accept Terms and Conditions" 
  description="By checking this box, you agree to our terms of service and privacy policy." 
/>

```vue
<template>
  <SprCheckbox
    v-model="agreedToTerms"
    label="Accept Terms and Conditions"
    description="By checking this box, you agree to our terms of service and privacy policy."
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SprCheckbox from '@/components/checkbox/checkbox.vue';

const agreedToTerms = ref(false);
</script>
```

::: info
Descriptions should be concise but informative. Use them to clarify the consequences of selecting or not selecting the checkbox.
:::

## Checked State

There are two ways to control the checked state of a checkbox:

### Using `v-model` (Recommended)

Using `v-model` creates a two-way binding that automatically updates when the user interacts with the checkbox.

<SprCheckbox v-model="checkboxModels.checkbox3" label="Pre-selected Option" />

```vue
<template>
  <SprCheckbox v-model="selectedOption" label="Pre-selected Option" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SprCheckbox from '@/components/checkbox/checkbox.vue';

// Initialize as checked
const selectedOption = ref(true);
</script>
```

### Using `checked` prop (One-way binding)

The `checked` prop provides one-way binding for cases where you want to explicitly control the checked state.

<SprCheckbox label="Always Checked Option" checked />

```vue
<template>
  <SprCheckbox label="Always Checked Option" checked />
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
  <SprCheckbox label="Disabled Unchecked" disabled />
  <SprCheckbox v-model="checkboxModels.checkbox4" label="Disabled Checked" disabled />
</div>

```vue
<template>
  <SprCheckbox label="Disabled Unchecked" disabled />
  <SprCheckbox v-model="disabledChecked" label="Disabled Checked" disabled />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SprCheckbox from '@/components/checkbox/checkbox.vue';

const disabledChecked = ref(true);
</script>
```

::: info
Disabled checkboxes are often used for options that are not currently available but might become available based on other selections or conditions.
:::

## Indeterminate State

The indeterminate state is represented by a minus sign (−) instead of a checkmark. This state is useful for representing a "partially checked" state, typically used in hierarchical checkbox structures where child items have mixed selection states.

<div class="spr-flex spr-flex-col spr-gap-2">
  <SprCheckbox v-model="checkboxModels.checkbox6" label="Parent Option (Some children selected)" indeterminate />
  <SprCheckbox v-model="checkboxModels.checkbox7" label="Indeterminate Disabled" indeterminate disabled />
</div>

```vue
<template>
  <SprCheckbox v-model="parentSelected" label="Parent Option (Some children selected)" indeterminate />
  <SprCheckbox v-model="indeterminateDisabled" label="Indeterminate Disabled" indeterminate disabled />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SprCheckbox from '@/components/checkbox/checkbox.vue';

const parentSelected = ref(true);
const indeterminateDisabled = ref(true);
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
  <SprCheckbox 
    v-model="checkboxModels.checkbox5" 
    label="Bordered Checkbox" 
    description="This checkbox has a border around it" 
    bordered 
  />
  <SprCheckbox 
    label="Bordered Unchecked" 
    description="This checkbox is unchecked with a border" 
    bordered 
  />
</div>

```vue
<template>
  <SprCheckbox
    v-model="borderedOption"
    label="Bordered Checkbox"
    description="This checkbox has a border around it"
    bordered
  />
  <SprCheckbox label="Bordered Unchecked" description="This checkbox is unchecked with a border" bordered />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SprCheckbox from '@/components/checkbox/checkbox.vue';

const borderedOption = ref(true);
</script>
```

## Full Width Checkboxes

By default, checkboxes only take up as much width as needed for their content. Use the `fullWidth` prop to make the checkbox stretch to fill the entire width of its container.

<div class="spr-flex spr-flex-col spr-gap-2 spr-border spr-border-dashed spr-border-gray-300 spr-p-4">
  <SprCheckbox 
    v-model="checkboxModels.checkbox5" 
    label="Full Width Checkbox" 
    description="This checkbox takes up the full width of its container"
    bordered
    fullWidth
  />
</div>

```vue
<template>
  <SprCheckbox
    v-model="fullWidthOption"
    label="Full Width Checkbox"
    description="This checkbox takes up the full width of its container"
    bordered
    fullWidth
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SprCheckbox from '@/components/checkbox/checkbox.vue';

const fullWidthOption = ref(true);
</script>
```

::: tip
The `fullWidth` prop is especially useful when:

- Placing checkboxes in a grid or flex layout
- Creating consistent widths for multiple form controls
- Building responsive forms that adapt to different screen sizes
  :::

## Checkbox Groups

While the Sprout Design System doesn't include a dedicated checkbox group component, you can easily create your own checkbox groups by managing a collection of related checkboxes:

<div class="spr-p-4 spr-border spr-border-solid spr-border-gray-200 spr-rounded">
  <div class="spr-mb-2 spr-font-medium">Select your favorite fruits:</div>
  <div class="spr-flex spr-flex-col spr-gap-2">
    <SprCheckbox 
      v-model="fruits.apple" 
      label="Apple" 
    />
    <SprCheckbox 
      v-model="fruits.banana" 
      label="Banana" 
    />
    <SprCheckbox 
      v-model="fruits.orange" 
      label="Orange" 
    />
    <SprCheckbox 
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
    <SprCheckbox v-model="fruits.apple" label="Apple" />
    <SprCheckbox v-model="fruits.banana" label="Banana" />
    <SprCheckbox v-model="fruits.orange" label="Orange" />
    <SprCheckbox v-model="fruits.strawberry" label="Strawberry" />

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
      <td>fullWidth</td>
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
  checkbox1: false,
  checkbox2: false,
  checkbox3: true,
  checkbox4: false,
  checkbox5: true,
  checkbox6: true,
  checkbox7: true
});

const fruits = reactive({
  apple: false,
  banana: false,
  orange: false,
  strawberry: false
});
</script>
