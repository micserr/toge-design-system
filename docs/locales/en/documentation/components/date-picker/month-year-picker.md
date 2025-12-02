---
title: Month Year Picker
description: The Month Year Picker component allows users to select a month and year from a popup interface, supporting various formats and customization options.
outline: deep
---

# Month Year Picker

The month year picker allows users to select a month and year from a calendar-style interface.

## Basic Usage

<spr-month-year-picker :id="monthYearPickerId.monthYear1" class="[&>p]:spr-m-0" v-model="monthYearPickerModel.monthYear1" display-helper />

`Property Value:` <span class="spr-text-xs">{{monthYearPickerModel.monthYear1}}</span>

```vue
<template>
  <spr-month-year-picker id="monthyearpicker" v-model="monthYearPickerModel" display-helper />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const monthYearPickerModel = ref('');
</script>
```

## Adding Label

<spr-month-year-picker :id="monthYearPickerId.monthYear2" class="[&>p]:spr-m-0" v-model="monthYearPickerModel.monthYear2" label="Select Month and Year" display-helper format="YYYY-MM" />

Value: {{ monthYearPickerModel.monthYear2 }}

`Property Value:` <span class="spr-text-xs">{{monthYearPickerModel.monthYear2}}</span>

```vue
<template>
  <spr-month-year-picker id="monthyearpicker" v-model="monthYearPickerModel" label="Select Month and Year" display-helper format="MM-YYYY" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const monthYearPickerModel = ref('');
</script>
```

## Custom Component

You can use the default slot to use any component as the month year picker input or to change the format of the rendered date without changing the format of the date model.

<div>
  <spr-month-year-picker
    id="monthyearpicker"
    v-model="monthYearPickerModel.monthYear30"
    label="Custom Month Year Picker Input"
    display-helper
    format="MMM-YYYY"    
    @update:model-value="handleMonthYearPickerModelChange"
  >
    <template #default="{ handleClick }">
      <spr-input
        v-model="monthYearPickerInputModel"
        readonly
        class="spr-w-full spr-cursor-pointer"
        placeholder="MMM / YYYY"      
        @click="handleClick"
      >
        <template #icon>
          <Icon icon="ph:calendar-blank" />
        </template>
      </spr-input>
    </template>
  </spr-month-year-picker>
</div>

`monthYearPickerModel:` <span class="spr-text-xs">{{monthYearPickerModel.monthYear30}}</span>
<br/>
`monthYearPickerInputModel:` <span class="spr-text-xs">{{monthYearPickerInputModel}}</span>

```vue
<template>
  <spr-month-year-picker
    id="monthyearpicker"
    v-model="monthYearPickerModel"
    label="Custom Month Year Picker Input"
    display-helper
    format="MMM-YYYY"
    @update:model-value="handleMonthYearPickerModelChange"
  >
    <template #default="{ handleClick }">
      <spr-input
        v-model="monthYearPickerInputModel"
        readonly
        class="spr-w-full spr-cursor-pointer"
        placeholder="MMM / YYYY"
        @click="handleClick"
      >
        <template #icon>
          <Icon icon="ph:calendar-blank" />
        </template>
      </spr-input>
    </template>
  </spr-month-year-picker>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import dayjs from 'dayjs';

const monthYearPickerModel = ref('');
const monthYearPickerInputModel = ref('');

const handleMonthYearPickerModelChange = (newValue: string) => {
  monthYearPickerInputModel.value = dayjs(newValue).format('MMM / YYYY').toUpperCase();
};
</script>
```

## Custom Width

You can manually set the width of the month year picker by passing the `width` prop.

<div>
  <spr-month-year-picker 
    :id="monthYearPickerId.monthYear3" 
    class="[&>p]:spr-m-0" 
    v-model="monthYearPickerModel.monthYear3" 
    label="Month Year Picker" 
    width="400px" 
    display-helper
  />
</div>

`Property Value:` <span class="spr-text-xs">{{monthYearPickerModel.monthYear3}}</span>

```vue
<template>
  <spr-month-year-picker id="monthyearpicker" v-model="monthYearPickerModel" label="Month Year Picker" width="400px" display-helper />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const monthYearPickerModel = ref('');
</script>
```

## Date Format

You can specify the format of the month-year by passing the `format` prop. The default format is `MM-YYYY`. The component will return dates in the specified format.

<spr-month-year-picker :id="monthYearPickerId.monthYear28" class="[&>p]:spr-m-0" v-model="monthYearPickerModel.monthYear28" label="Month Year Picker" display-helper format="YYYY-MM" />

Value: <code>{{ monthYearPickerModel.monthYear28 }}</code>

```vue
<template>
  <spr-month-year-picker 
    id="monthyearpicker" 
    v-model="monthYearPickerModel" 
    label="Month Year with YYYY-MM format" 
    format="YYYY-MM" 
    display-helper 
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const monthYearPickerModel = ref('');
</script>
```

<div class="spr-mt-3">
  <spr-month-year-picker
    :id="monthYearPickerId.monthYear29"
    class="[&>p]:spr-m-0"
    v-model="monthYearPickerModel.monthYear29"
    label="Month Year with MMMM YYYY format"
    format="MMMM YYYY"
    display-helper
  />
</div>

Value: <code>{{ monthYearPickerModel.monthYear29 }}</code>

```vue
<template>
  <spr-month-year-picker
    id="monthyearpicker"
    v-model="monthYearPickerModel"
    label="Month Year with MMMM YYYY format"
    format="MMMM YYYY"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const monthYearPickerModel = ref('');
</script>
```

## Disabled

Add the `disabled` prop to disable the month year picker.

<spr-month-year-picker :id="monthYearPickerId.monthYear4" class="[&>p]:spr-m-0" v-model="monthYearPickerModel.monthYear4" label="Month Year Picker" display-helper disabled />

```vue
<template>
  <spr-month-year-picker id="monthyearpicker" v-model="monthYearPickerModel" label="Month Year Picker" display-helper disabled />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const monthYearPickerModel = ref('');
</script>
```

## Read Only

Add the `readonly` prop to make month year picker as read only.

<spr-month-year-picker :id="monthYearPickerId.monthYear5" class="[&>p]:spr-m-0" v-model="monthYearPickerModel.monthYear5" label="Month Year Picker" display-helper readonly />

```vue
<template>
  <spr-month-year-picker id="monthyearpicker" v-model="monthYearPickerModel" label="Month Year Picker" display-helper readonly />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const monthYearPickerModel = ref('10-2025');
</script>
```

## Helper Text

A helper message is a text label displayed below the input field, offering additional information such as instructions, formatting tips, or validation feedback.

To display the helper message, set the `display-helper` prop to true and add the `helper-text prop` with the message content. You can also include an icon by using the `helper-icon` prop, which utilizes the <a href="https://icon-sets.iconify.design/" target="_blank">Iconify</a> icon library.

### Using Helper Text Directly to Props

<div class="spr-mt-3">
  <spr-month-year-picker 
    :id="monthYearPickerId.monthYear6"
    class="[&>p]:spr-m-0" 
    v-model="monthYearPickerModel.monthYear6" 
    label="Month Year Picker" 
    helper-text="This is a helper message" 
    display-helper 
  />

`Property Value:` <span class="spr-text-xs">{{monthYearPickerModel.monthYear6}}</span>

</div>

```vue
<template>
  <spr-month-year-picker
    id="monthyearpicker"
    class="[&>p]:spr-m-0"
    v-model="monthYearPickerModel"
    label="Month Year Picker"
    helper-icon="ph:warning-circle-fill"
    helper-text="This is a helper message"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

const monthYearPickerModel = ref('');
</script>
```

### Using Helper Text Slot

<div class="spr-mt-3">
  <spr-month-year-picker 
    :id="monthYearPickerId.monthYear7"
    class="[&>p]:spr-m-0" 
    v-model="monthYearPickerModel.monthYear7" 
    label="Month Year Picker" 
    display-helper 
  >
    <template #helperMessage>
      <span>This is a helper message</span>
    </template>
  </spr-month-year-picker>
</div>

```vue
<template>
  <spr-month-year-picker id="monthyearpicker" class="[&>p]:spr-m-0" v-model="monthYearPickerModel" label="Month Year Picker" display-helper>
    <template #helperMessage>
      <span>This is a helper message</span>
    </template>
  </spr-month-year-picker>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

const monthYearPickerModel = ref('');
</script>
```

## Error State

To handle error states, add the `error` prop to the month year picker. You can also include an icon by using the `helper-icon` prop, which utilizes the <a href="https://icon-sets.iconify.design/" target="_blank">Iconify</a> icon library.

### Using Helper Text Directly to Props

<div class="spr-mt-3">
  <spr-month-year-picker 
    :id="monthYearPickerId.monthYear8"
    class="[&>p]:spr-m-0" 
    v-model="monthYearPickerModel.monthYear8" 
    label="Month Year Picker" 
    helper-icon="ph:warning-circle-fill"
    helper-text="This is a helper message" 
    display-helper 
    error
  />
</div>

```vue
<template>
  <spr-month-year-picker
    id="monthyearpicker"
    v-model="monthYearPickerModel"
    label="Month Year Picker"
    helper-icon="ph:warning-circle-fill"
    helper-text="This is a helper message"
    display-helper
    error
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

const monthYearPickerModel = ref('');
</script>
```

### Using Helper Text Slot

<div class="spr-mt-3">
  <spr-month-year-picker 
    :id="monthYearPickerId.monthYear9"
    class="[&>p]:spr-m-0" 
    v-model="monthYearPickerModel.monthYear9" 
    label="Month Year Picker" 
    display-helper 
    error
  >
    <template #helperMessage>
      <Icon icon="ph:warning-circle-fill" width="20px" height="20px" />
      <span>This is a helper message</span>
    </template>
  </spr-month-year-picker>
</div>

```vue
<template>
  <spr-month-year-picker id="monthyearpicker" v-model="monthYearPickerModel" label="Month Year Picker" display-helper error>
    <template #helperMessage>
      <Icon icon="ph:warning-circle-fill" width="20px" height="20px" />
      <span>This is a helper message</span>
    </template>
  </spr-month-year-picker>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

const monthYearPickerModel = ref('');
</script>
```

## Manually Set Current Year

You can manually set the current year to be shown in the picker. The default current year is the current year. Pass the `current-year` prop to set the current year.

<div>
  <spr-month-year-picker 
    :id="monthYearPickerId.monthYear10" 
    class="[&>p]:spr-m-0" 
    v-model="monthYearPickerModel.monthYear10" 
    label="Month Year Picker" 
    current-year="2000" 
    display-helper
  />
</div>

```vue
<template>
  <spr-month-year-picker id="monthyearpicker" v-model="monthYearPickerModel" label="Month Year Picker" current-year="2000" display-helper />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

const monthYearPickerModel = ref('');
</script>
```

## Manually Set Min-Max Year

It also allows you to manually set the minimum and maximum year to be shown in the picker. The default minimum year is set `1900` and the maximum year is the current year.

<div>
  <spr-month-year-picker 
    :id="monthYearPickerId.monthYear11"
    class="[&>p]:spr-m-0"
    v-model="monthYearPickerModel.monthYear11" 
    label="Month Year Picker" 
    :min-max-year="{
      min: 2000,
      max: 2025,
    }" 
    display-helper
  />
</div>

```vue
<template>
  <spr-month-year-picker
    id="monthyearpicker"
    v-model="monthYearPickerModel"
    label="Month Year Picker"
    :min-max-year="minMaxYear"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const monthYearPickerModel = ref('');

const minMaxYear = ref({
  min: 2000,
  max: 2025,
});
</script>
```

## Pre-selected Month-Year

You can pre-select a month-year by just adding value in your `v-model`. The value should be in the format `MM-YYYY` or your specified format.

<spr-month-year-picker :id="monthYearPickerId.monthYear22" class="[&>p]:spr-m-0" v-model="monthYearPickerModel.monthYear22" label="Month Year Picker" display-helper />

```vue
<template>
  <spr-month-year-picker id="monthyearpicker" v-model="monthYearPickerModel" label="Month Year Picker" display-helper />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const monthYearPickerModel = ref('09-1997');
</script>
```

## Get Date Formats

To get the date formats, you can use the `@get-date-formats` emits. When the month-year is valid it will return different formats.

<div class="spr-my-3 spr-p-4 spr-bg-blue-100">
  <h5>Output:</h5>
  <pre>{{ JSON.stringify(monthYearDateFormats, null, 2) }}</pre>
</div>

<div>
  <spr-month-year-picker 
    :id="monthYearPickerId.monthYear23" 
    class="[&>p]:spr-m-0" 
    v-model="monthYearPickerModel.monthYear23" 
    label="Month Year Picker" 
    @get-date-formats="getMonthYearDateFormats" 
    display-helper
  />
</div>

```vue
<template>
  <spr-month-year-picker
    id="monthyearpicker"
    v-model="monthYearPickerModel"
    label="Month Year Picker"
    @get-date-formats="getMonthYearDateFormats"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const monthYearPickerModel = ref('');

const getMonthYearDateFormats = (date) => {
  console.log(date);
};
</script>
```

## Get Month Lists

To get the month lists used, you can use the `@get-month-list` emits.

<div>
  <spr-month-year-picker 
    :id="monthYearPickerId.monthYear24" 
    class="[&>p]:spr-m-0" 
    v-model="monthYearPickerModel.monthYear24" 
    label="Month Year Picker" 
    @get-month-list="getMonthYearMonthList" 
    display-helper
  />
</div>

<div class="spr-mt-3 spr-p-4 spr-bg-blue-100">
  <h5>Output:</h5>
  <pre>{{ JSON.stringify(monthYearMonthLists, null, 2) }}</pre>
</div>

```vue
<template>
  <spr-month-year-picker
    id="monthyearpicker"
    v-model="monthYearPickerModel"
    label="Month Year Picker"
    @get-month-list="getMonthYearMonthList"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const monthYearPickerModel = ref('');

const getMonthYearMonthList = (date) => {
  console.log(date);
};
</script>
```

## Get Year Lists

To get the year lists used, you can use the `@get-year-list` emits.

<div>
  <spr-month-year-picker 
    :id="monthYearPickerId.monthYear25" 
    class="[&>p]:spr-m-0" 
    v-model="monthYearPickerModel.monthYear25" 
    label="Month Year Picker" 
    @get-year-list="getMonthYearYearList" 
    display-helper
  />
</div>

<div class="spr-mt-3 spr-p-4 spr-bg-blue-100">
  <h5>Output:</h5>
  <p>{{ monthYearYearLists }}</p>
</div>

```vue
<template>
  <spr-month-year-picker
    id="monthyearpicker"
    v-model="monthYearPickerModel"
    label="Month Year Picker"
    @get-year-list="getMonthYearYearList"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const monthYearPickerModel = ref('');

const getMonthYearYearList = (date) => {
  console.log(date);
};
</script>
```

## Error Handling

Since there is existing error handling for the month year picker, you can use the `@get-date-errors` emit to get the list of component-level error validations.

List of component-level error validations:

<ul>
  <li>Validate month-year if it is valid MM/YYYY</li>
  <li>Validate year if it is under min and max year</li>
</ul>

<div class="spr-my-3 spr-p-4 spr-bg-blue-100">
  <h5>Output:</h5>
  <pre>{{ monthYearDateErrors }}</pre>
</div>

<div>
  <spr-month-year-picker 
    :id="monthYearPickerId.monthYear26" 
    class="[&>p]:spr-m-0" 
    v-model="monthYearPickerModel.monthYear26" 
    label="Month Year Picker" 
    @get-date-errors="getMonthYearDateErrors" 
    display-helper
  />
</div>

```vue
<template>
  <spr-month-year-picker
    id="monthyearpicker"
    v-model="monthYearPickerModel"
    label="Month Year Picker"
    @get-date-errors="getMonthYearDateErrors"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const monthYearPickerModel = ref('');

const getMonthYearDateErrors = (errors) => {
  console.log(errors);
};
</script>
```

## Popper Strategy

The Popper strategy is primarily used when working with elements like modal. It helps control the positioning behavior of popper. The strategy ensures that the popper element is dynamically positioned based on the viewport, the reference element, or other factors such as scrolling or resizing.

By default, the Popper strategy is set to `absolute`, which positions the popper element relative to the nearest positioned ancestor (usually the body element). However, you can change the `strategy` to `fixed`, which positions the popper element relative to the viewport, ensuring that it remains in place even when the page is scrolled.

Pass the prop `popper-strategy` to change the behavior position of the popper.

::: info Important to note:
Do not forget to pass prop `wrapperPosition` to overwrite `relative` position into `initial`.
:::

<spr-button tone="success" @click="modalModelMonthYear = true">Open Modal</spr-button>

<spr-modal v-model="modalModelMonthYear" title="Month Year Picker with Modal">
  <spr-month-year-picker 
    :id="monthYearPickerId.monthYear27"
    class="[&>p]:spr-m-0" 
    v-model="monthYearPickerModel.monthYear27" 
    label="Month Year Picker" 
    popper-strategy="fixed"
    wrapper-position="initial"
    display-helper
  />
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</spr-modal>

```vue
<template>
  <spr-button tone="success" @click="modalModel = true">Open Modal</spr-button>

  <spr-modal v-model="modalModel" title="Month Year Picker with Modal">
    <spr-month-year-picker
      id="monthyearpicker"
      v-model="monthYearPickerModel"
      label="Month Year Picker"
      popper-strategy="fixed"
      wrapper-position="initial"
      display-helper
    />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </spr-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const modalModel = ref(false);

const monthYearPickerModel = ref('');
</script>
```

You can also use the `popper-container` prop to specify a custom container for the popper element. This is useful when you want to restrict the popper's positioning context to a specific element within your application.

Since the popper is being teleported to a different container, the `popper-width` prop will not work as expected. To set a custom width for the popper in this case, you can use custom styles or CSS classes to define the desired width.

<div>
  <spr-dropdown
    id="sample-dropdownCustomPopperMonthYear"
    width="300px"
    :triggers="['hover', 'click']"
    :popper-triggers="['hover', 'click']"
    popper-width="500px"
    :auto-hide="false"
  >
    <spr-button class="spr-w-full" tone="success" has-icon>
      <span>Custom Popper With Dropdown</span>
      <Icon icon="ph:caret-down" />
    </spr-button>
    <template #popper>
      <spr-month-year-picker
        :id="monthYearPickerId.monthYear27"
        class="[&>p]:spr-m-0" 
        v-model="monthYearPickerModel.monthYear27" 
        label="Month Year Picker" 
        popper-strategy="fixed"
        popper-container="#sample-dropdownCustomPopperMonthYear"
        wrapper-position="initial"
        display-helper
      />
    </template>
  </spr-dropdown>
</div>

```vue
<template>
  <div>
    <spr-dropdown
      id="sample-dropdownCustomPopperMonthYear"
      width="300px"
      :triggers="['hover', 'click']"
      :popper-triggers="['hover', 'click']"
      popper-width="500px"
      :auto-hide="false"
    >
      <spr-button class="spr-w-full" tone="success" has-icon>
        <span>Custom Popper With Dropdown</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
      <template #popper>
        <spr-month-year-picker
          id="monthyearpicker"
          v-model="monthYearPickerModel"
          label="Month Year Picker"
          popper-strategy="fixed"
          popper-container="#sample-dropdownCustomPopperMonthYear"
          wrapper-position="initial"
          display-helper
        />
      </template>
    </spr-dropdown>
  </div>
</template>
```

## Action

<div class="spr-space-y-2">
  <spr-button tone="success" @click="clearMonthYear()">Clear Month Year</spr-button>
  <spr-month-year-picker 
    ref="monthYearPickerRef"
    :id="monthYearPickerId.monthYear31" 
    v-model="monthYearPickerModel.monthYear31" 
    label="Month Year Picker"
  />
</div>

```vue
<template>
  <div class="spr-space-y-2">
    <spr-button tone="success" @click="clearMonthYear()">Clear Month Year</spr-button>
    <spr-month-year-picker ref="monthYearPickerRef" id="monthyearpicker" v-model="monthYearPickerModel" label="Month Year Picker" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const monthYearPickerModel = ref('');
const monthYearPickerRef = ref(null);

const clearMonthYear = () => {
  monthYearPickerRef.value.clear();
};
</script>
```

## API Reference

### Props

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>id</td>
      <td>Required to bind popper within the month year picker</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>v-model</td>
      <td>Binds the selected month-year value</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>label</td>
      <td>Label text for the input field</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>width</td>
      <td>Sets the width of the input</td>
      <td>String</td>
      <td>100%</td>
    </tr>
    <tr>
      <td>format</td>
      <td>Format for the selected month-year (e.g., 'MM-YYYY', 'YYYY-MM', 'MMMM YYYY')</td>
      <td>String</td>
      <td>MM-YYYY</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Disables the month year picker</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>readonly</td>
      <td>Makes the month year picker read-only</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>helper-text</td>
      <td>Displays a helper message below the input</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>helper-icon</td>
      <td>Icon to display alongside the helper message</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>display-helper</td>
      <td>Shows the helper message</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>error</td>
      <td>Indicates that there is an error with the input</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>current-year</td>
      <td>Sets the current year in the picker view</td>
      <td>String</td>
      <td>{{ new Date().getFullYear() }}</td>
    </tr>
    <tr>
      <td>min-max-year</td>
      <td>Sets the minimum and maximum years in the picker</td>
      <td>Object</td>
      <td>{ min: 1900, max: {{ new Date().getFullYear() }} }</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>Changes the placement of the dropdown popper (e.g., `bottom`, `top`, `left`, `right`)</td>
      <td>string</td>
      <td>`bottom`</td>
    </tr>
    <tr>
      <td>wrapper-position</td>
      <td>CSS position of the month year picker wrapper</td>
      <td>String</td>
      <td>relative</td>
    </tr>
    <tr>
      <td>popper-strategy</td>
      <td>Popper positioning strategy ('absolute' or 'fixed')</td>
      <td>String</td>
      <td><code>absolute</code></td>
    </tr>
    <tr>
      <td>popper-container</td>
      <td>CSS selector or HTMLElement to specify a custom container for the popper element</td>
      <td>String | HTMLElement</td>
      <td>''</td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th>Event</th>
      <th>Description</th>
      <th>Parameters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>@update:model-value</td>
      <td>Emits when the selected month-year value changes</td>
      <td>String (formatted month-year)</td>
    </tr>
    <tr>
      <td>@get-input-value</td>
      <td>Emits the actual month-year that is being typed or selected on the picker</td>
      <td>String | null</td>
    </tr>
    <tr>
      <td>@get-date-formats</td>
      <td>Emits the available date formats when a valid month-year is selected</td>
      <td>Object (various month-year format strings)</td>
    </tr>
    <tr>
      <td>@get-month-list</td>
      <td>Emits the list of months available in the component</td>
      <td>Array (month objects)</td>
    </tr>
    <tr>
      <td>@get-year-list</td>
      <td>Emits the list of years available in the component</td>
      <td>Array (year numbers)</td>
    </tr>
    <tr>
      <td>@get-date-errors</td>
      <td>Emits validation errors from the month year picker</td>
      <td>Array (error objects with title and message)</td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import { ref } from "vue";

import { Icon } from "@iconify/vue";

import SprMonthYearPicker from "@/components/date-picker/month-year-picker/month-year-picker.vue";
import SprButton from "@/components/button/button.vue";
import SprModal from "@/components/modal/modal.vue";
import SprLogo from "@/components/logo/logo.vue";
import SprInput from "@/components/input/input.vue";
import SprDropdown from "@/components/dropdown/dropdown.vue";

import dayjs from "dayjs";

const monthYearPickerId = ref({
  monthYear1: "monthYear1",
  monthYear2: "monthYear2",
  monthYear3: "monthYear3",
  monthYear4: "monthYear4",
  monthYear5: "monthYear5",
  monthYear6: "monthYear6",
  monthYear7: "monthYear7",
  monthYear8: "monthYear8",
  monthYear9: "monthYear9",
  monthYear10: "monthYear10",
  monthYear11: "monthYear11",
  monthYear22: "monthYear22",
  monthYear23: "monthYear23",
  monthYear24: "monthYear24",
  monthYear25: "monthYear25",
  monthYear26: "monthYear26",
  monthYear27: "monthYear27",
  monthYear28: "monthYear28",
  monthYear29: "monthYear29",
  monthYear30: "monthYear30",
  monthYear31: "monthYear31"
}); 

const monthYearPickerModel = ref({
  monthYear1: "",
  monthYear2: "09-1997",
  monthYear3: "",
  monthYear4: "09-1997",
  monthYear5: "10-2025",
  monthYear6: "",
  monthYear7: "",
  monthYear8: "",
  monthYear9: "",
  monthYear10: "",
  monthYear11: "",
  monthYear22: "09-1997",
  monthYear23: "",
  monthYear24: "",
  monthYear25: "",
  monthYear26: "",
  monthYear27: "",
  monthYear28: "",
  monthYear29: "",
  monthYear30: "",
  monthYear31: ""
}); 

const monthYearPickerInputModel = ref("");

const monthYearDateErrors = ref([]);
const monthYearDateFormats = ref({});
const monthYearMonthLists = ref([]);
const monthYearYearLists = ref([]);
const monthYearPickerRef = ref(null);

const clearMonthYear = () => {
  monthYearPickerRef.value.clear();
}

const getMonthYearDateErrors = (errors) => {
  monthYearDateErrors.value = errors;
};

const getMonthYearDateFormats = (date) => {
  monthYearDateFormats.value = date;
};

const getMonthYearMonthList = (months) => {
  monthYearMonthLists.value = months;
};

const getMonthYearYearList = (years) => {
  monthYearYearLists.value = years;
};

const handleMonthYearPickerModelChange = (newValue: string) => {
  monthYearPickerInputModel.value = dayjs(newValue).format('MMM / YYYY').toUpperCase();
};

const modalModelMonthYear = ref(false);
</script>

