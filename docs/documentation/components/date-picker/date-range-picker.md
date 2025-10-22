---
title: Date Range Picker
descripttion: The Date Range Picker component enables users to select a start and end date from a calendar interface, with options for customization, disabled dates, and various display formats.
outline: deep
---

# Date Range Picker

The date range calendar allows users to select a start and end date from a calendar.

## Basic Usage

<spr-date-range-picker id="date-range-basic" v-model="dateRangeModel.range1" display-helper />

`Property Value:` <span class="spr-text-xs">{{dateRangeModel.range1}}</span>

```vue
<template>
  <spr-date-range-picker id="date-range-basic" v-model="dateRangeModel" display-helper />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const dateRangeModel = ref({ startDate: '', endDate: '' });
</script>
```

## Custom Input Area (Using Slot)

You can fully customize the date input area using the default slot. This allows you to use any component (like `<spr-input>` or `<spr-chips>`) and react to the selected range from `v-model`.

### Using with Input

<spr-date-range-picker id="date-range-input" v-model="liveInputRange" label="Pay Period">
  <template #default="{ handleClick }">
    <spr-input
      v-model="inputDisplayString"
      readonly
      class="spr-w-full spr-cursor-pointer"
      @click="handleClick"
    >
      <template #icon>
        <Icon icon="ph:calendar-blank" />
      </template>
    </spr-input>
  </template>
</spr-date-range-picker>

```vue
<template>
  <spr-date-range-picker
    id="date-range-input"
    v-model="liveInputRange"
    label="Custom Input (spr-input)"
    placement="top"
  >
    <template #default="{ handleClick }">
      <spr-input v-model="inputDisplayString" readonly class="spr-w-full spr-cursor-pointer" @click="handleClick">
        <template #icon>
          <Icon icon="ph:calendar-blank" />
        </template>
      </spr-input>
    </template>
  </spr-date-range-picker>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const dateRangeModel = ref({ startDate: '01-01-2024', endDate: '01-15-2024' });
const liveInputRange = ref({ startDate: '01-01-2024', endDate: '01-15-2024' });

const formatRange = (range) => {
  const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  if (range.startDate && !range.endDate) {
    const [startMonth, startDay] = range.startDate.split('-');

    return `${monthNames[parseInt(startMonth, 10) - 1]} / ${startDay} – `;
  }

  if (range.startDate && range.endDate) {
    const [startMonth, startDay] = range.startDate.split('-');
    const [endMonth, endDay] = range.endDate.split('-');

    return `${monthNames[parseInt(startMonth, 10) - 1]} / ${startDay} – ${monthNames[parseInt(endMonth, 10) - 1]} / ${endDay}`;
  }

  return '';
};

const inputDisplayString = ref('');

watch(
  liveInputRange,
  (range) => {
    inputDisplayString.value = formatRange(range);
  },
  { immediate: true },
);
</script>
```

### Using with Chips

<spr-date-range-picker id="date-range-chip" v-model="liveChipsRange" label="Pay Period">
  <template #default="{ handleClick }">
    <div class="spr-flex spr-gap-2 spr-items-center spr-p-2 spr-border">
      <spr-chips tone="default" :label="liveChipsRange.startDate || 'Start'" @click="handleClick"/>
      <span class="spr-text-mushroom-500">to</span>
      <spr-chips tone="default" :label="liveChipsRange.endDate || 'End'" @click="handleClick"/>
    </div>
  </template>
</spr-date-range-picker>

```vue
<template>
  <spr-date-range-picker id="date-range-chip" v-model="dateRangeModel" label="Pay Period">
    <template #default>
      <div class="spr-flex spr-items-center spr-gap-2 spr-p-2">
        <spr-chips tone="default" :label="dateRangeModel.startDate || 'Start'" />
        <span class="spr-text-mushroom-500">to</span>
        <spr-chips tone="default" :label="dateRangeModel.endDate || 'End'" />
      </div>
    </template>
  </spr-date-range-picker>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dateRangeModel = ref({ startDate: '01-01-2024', endDate: '01-15-2024' });
</script>
```

You can use any component or markup in the slot, and the slot will always receive the latest value from `v-model` for full control over the display.

## Adding Label

<spr-date-range-picker id="date-range-label" v-model="dateRangeModel.range2" label="Date Range" display-helper format="YYYY-MM-DD" />

Value: {{ dateRangeModel.range2 }}

```vue
<template>
  <spr-date-range-picker
    id="date-range-label"
    v-model="dateRangeModel"
    label="Date Range"
    display-helper
    format="YYYY-MM-DD"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dateRangeModel = ref({ startDate: '', endDate: '' });
</script>
```

## Custom Width

You can manually set the width of the date range calendar by passing the `width` prop.

<spr-date-range-picker id="date-range-width" v-model="dateRangeModel.range3" label="Date Range" width="400px" display-helper />

`Property Value:` <span class="spr-text-xs">{{dateRangeModel.range3}}</span>

```vue
<template>
  <spr-date-range-picker
    id="date-range-width"
    v-model="dateRangeModel"
    label="Date Range"
    width="400px"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dateRangeModel = ref({ startDate: '', endDate: '' });
</script>
```

## Date Format

You can specify the format of the date by passing the `format` prop. The default format is `MM-DD-YYYY`. The component will return dates in the specified format.

<spr-date-range-picker id="date-range-format" v-model="dateRangeModel.range4" label="Date Range" display-helper format="YYYY-MM-DD" />
Value: <code>{{ dateRangeModel.range4 }}</code>

```vue
<template>
  <spr-date-range-picker
    id="date-range-format"
    v-model="dateRangeModel"
    label="Date Range"
    format="YYYY-MM-DD"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dateRangeModel = ref({ startDate: '', endDate: '' });
</script>
```

## Disabled

Add the `disabled` prop to disable the date range calendar.

<spr-date-range-picker id="date-range-disabled" v-model="dateRangeModel.range5" label="Date Range" display-helper disabled />

```vue
<template>
  <spr-date-range-picker id="date-range-disabled" v-model="dateRangeModel" label="Date Range" display-helper disabled />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dateRangeModel = ref({ startDate: '', endDate: '' });
</script>
```

## Read Only

Add the `readonly` prop to make the date range calendar read only.

<spr-date-range-picker id="date-range-readonly" v-model="dateRangeModel.range6" label="Date Range" display-helper readonly />

```vue
<template>
  <spr-date-range-picker id="date-range-readonly" v-model="dateRangeModel" label="Date Range" display-helper readonly />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dateRangeModel = ref({ startDate: '', endDate: '' });
</script>
```

## Helper Text

A helper message is a text label displayed below the input field, offering additional information such as instructions, formatting tips, or validation feedback.

To display the helper message, set the `display-helper` prop to true and add the `helper-text` prop with the message content. You can also include an icon by using the `helper-icon` prop.

<spr-date-range-picker id="date-range-helper-text" v-model="dateRangeModel.range7" label="Date Range" helper-text="Select a date range" display-helper />

```vue
<template>
  <spr-date-range-picker
    id="date-range-helper-text"
    v-model="dateRangeModel"
    label="Date Range"
    helper-text="Select a date range"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const dateRangeModel = ref({ startDate: '', endDate: '' });
</script>
```

## Error State

To handle error states, add the `error` prop to the date range calendar. You can also include an icon by using the `helper-icon` prop.

<spr-date-range-picker id="date-range-error-state" v-model="dateRangeModel.range8" label="Date Range" helper-icon="ph:warning-circle-fill" helper-text="This is a helper message" display-helper error />

```vue
<template>
  <spr-date-range-picker
    id="date-range-error-state"
    v-model="dateRangeModel"
    label="Date Range"
    helper-icon="ph:warning-circle-fill"
    helper-text="This is a helper message"
    display-helper
    error
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dateRangeModel = ref({ startDate: '', endDate: '' });
</script>
```

## Min/Max Year

You can manually set the minimum and maximum year to be shown in the calendar. The default minimum year is `1900` and the maximum year is the current year.

<spr-date-range-picker id="date-range-min-max-year" v-model="dateRangeModel.range9" label="Date Range" :min-max-year="{ min: 2000, max: 2025 }" display-helper />

```vue
<template>
  <spr-date-range-picker
    id="date-range-min-max-year"
    v-model="dateRangeModel"
    label="Date Range"
    :min-max-year="{ min: 2000, max: 2025 }"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dateRangeModel = ref({ startDate: '', endDate: '' });
</script>
```

## Rest Days

You can set the rest days in the week by passing the `rest-days` prop.

```js
const restDays = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
```

<spr-date-range-picker id="date-range-rest-days" v-model="dateRangeModel.range10" label="Date Range" :rest-days="['mo', 'we', 'fr', 'sa']" display-helper />

```vue
<template>
  <spr-date-range-picker
    id="date-range-rest-days"
    v-model="dateRangeModel"
    label="Date Range"
    :rest-days="['mo', 'we', 'fr', 'sa']"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dateRangeModel = ref({ startDate: '', endDate: '' });
</script>
```

## Placement

The date range picker uses intelligent placement logic for the calendar popover:

### Default Input Fields

When using the default input fields (no custom slot), the component uses the `placement` prop to determine the base direction (`top` or `bottom`) and automatically concatenates it with the appropriate alignment based on which input field is clicked:

- **Start Date Input**: Uses `{placement}-start` (e.g., `top-start` or `bottom-start`)
- **End Date Input**: Uses `{placement}-end` (e.g., `top-end` or `bottom-end`)

For example, if you set `placement="top"`:

- Clicking the start date input will use `top-start` placement
- Clicking the end date input will use `top-end` placement

This dynamic placement ensures the calendar always appears in the most appropriate position relative to the clicked input field while respecting your preferred vertical direction.

### Default Inputs with Custom Placement

<spr-date-range-picker id="date-range-placement" v-model="dateRangeModel.defaultTop" label="Top Placement" placement="top" display-helper />

```vue
<template>
  <spr-date-range-picker
    id="date-range-placement"
    v-model="dateRangeModel"
    label="Top Placement"
    placement="top"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const dateRangeModel = ref({ startDate: '', endDate: '' });
</script>
```

### Custom Slot Components

When using a custom slot for the input area, the component respects the `placement` prop you specify:

<spr-date-range-picker id="date-range-slot" v-model="liveInputRange" label="Custom Input (spr-input)">
  <template #default="{ handleClick }">
    <spr-input
      v-model="inputDisplayString"
      readonly
      class="spr-w-full spr-cursor-pointer"
      @click="handleClick"
    >
      <template #icon>
        <Icon icon="ph:calendar-blank" />
      </template>
    </spr-input>
  </template>
</spr-date-range-picker>

```vue
<template>
  <spr-date-range-picker id="date-range-slot" v-model="liveInputRange" label="Custom Input (spr-input)">
    <template #default="{ handleClick }">
      <spr-input v-model="inputDisplayString" readonly class="spr-w-full spr-cursor-pointer" @click="handleClick">
        <template #icon>
          <Icon icon="ph:calendar-blank" />
        </template>
      </spr-input>
    </template>
  </spr-date-range-picker>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

import { Icon } from '@iconify/vue';

const liveInputRange = ref({ startDate: '01-01-2024', endDate: '01-15-2024' });

const inputDisplayString = ref('');

const formatRange = (range) => {
  const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  if (range.startDate && !range.endDate) {
    const [startMonth, startDay] = range.startDate.split('-');

    return `${monthNames[parseInt(startMonth, 10) - 1]} / ${startDay} – `;
  }

  if (range.startDate && range.endDate) {
    const [startMonth, startDay] = range.startDate.split('-');
    const [endMonth, endDay] = range.endDate.split('-');

    return `${monthNames[parseInt(startMonth, 10) - 1]} / ${startDay} – ${monthNames[parseInt(endMonth, 10) - 1]} / ${endDay}`;
  }

  return '';
};

watch(
  liveInputRange,
  (range) => {
    inputDisplayString.value = formatRange(range);
  },
  { immediate: true },
);
</script>
```

### Available Placement Options

- `top-start`, `top`, `top-end`
- `bottom-start`, `bottom`, `bottom-end`
- `left-start`, `left`, `left-end`
- `right-start`, `right`, `right-end`

## Disabled Dates

You can disable specific dates by passing the `disabled-dates` prop. There are ways to disable dates:

- Disable dates using From and To
- Disable Past or Future Dates
- Disable Past or Future with Selected Date
- Disable Selected Dates
- Disable Weekends
- Disable Weekdays
- Disable Selected Days

```js
const disabledDates = { from: '02-12-2025', to: '05-15-2025' };
```

<spr-date-range-picker id="date-range-disabled-dates" v-model="dateRangeModel.range11" label="Date Range" :disabled-dates="{ from: '02-12-2025', to: '05-15-2025' }" display-helper />

```vue
<template>
  <spr-date-range-picker
    id="date-range-disabled-dates"
    v-model="dateRangeModel"
    label="Date Range"
    :disabled-dates="{ from: '02-12-2025', to: '05-15-2025' }"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dateRangeModel = ref({ startDate: '', endDate: '' });
</script>
```

## Pre-selected Range

You can pre-select a date range by just adding values in your `v-model`. The value should be in the format `{ startDate: 'MM-DD-YYYY', endDate: 'MM-DD-YYYY' }`.

<spr-date-range-picker id="date-range-pre-selected-range" v-model="dateRangeModel.range12" label="Date Range" display-helper />

```vue
<template>
  <spr-date-range-picker
    id="date-range-pre-selected-range"
    v-model="dateRangeModel"
    label="Date Range"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dateRangeModel = ref({ startDate: '09-11-2022', endDate: '09-15-2022' });
</script>
```

## Popper Strategy

The Popper strategy is primarily used when working with elements like modal. It helps control the positioning behavior of popper. The strategy ensures that the popper element is dynamically positioned based on the viewport, the reference element, or other factors such as scrolling or resizing.

By default, the Popper strategy is set to `absolute`, which positions the popper element relative to the nearest positioned ancestor (usually the body element). However, you can change the `strategy` to `fixed`, which positions the popper element relative to the viewport, ensuring that it remains in place even when the page is scrolled.

Pass the prop `popper-strategy` to change the behavior position of the popper.

::: info Important to note:
Do not forget to pass prop `wrapperPosition` to overwrite `relative` position into `initial`.
:::

<spr-button tone="success" @click="modalModel = true">Open Modal</spr-button>

<spr-modal v-model="modalModel" title="Date Picker with Modal">
  <spr-date-range-picker 
    id="date-range-popper-strategy"
    class="[&>p]:spr-m-0" 
    v-model="dateRangeModel.range12"
    label="Date Picker" 
    popper-strategy="fixed"
    display-helper
  />
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</spr-modal>

```vue
<template>
  <spr-button tone="success" @click="modalModel = true">Open Modal</spr-button>

  <spr-modal v-model="modalModel" title="Date Picker with Modal">
    <spr-date-range-picker
      id="date-range-popper-strategy"
      v-model="datePickerModel"
      label="Date Picker"
      popper-strategy="fixed"
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

const datePickerModel = ref('');
</script>
```

You can also use the `popper-container` prop to specify a custom container for the popper element. This is useful when you want to restrict the popper's positioning context to a specific element within your application.

Since the popper is being teleported to a different container, the `popper-width` prop will not work as expected. To set a custom width for the popper in this case, you can use custom styles or CSS classes to define the desired width.

<div>
  <spr-dropdown
    id="sample-dropdownCustomPopper"
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
      <spr-date-range-picker 
        id="date-range-popper-strategy"
        class="[&>p]:spr-m-0" 
        v-model="dateRangeModel.range12"
        label="Date Picker" 
        popper-strategy="fixed"
        popper-container="#sample-dropdownCustomPopper"
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
      id="sample-dropdownCustomPopper"
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
        <spr-date-range-picker
          id="date-range-popper-strategy"
          v-model="datePickerModel"
          label="Date Picker"
          popper-strategy="fixed"
          popper-container="#sample-dropdownCustomPopper"
          wrapper-position="initial"
          display-helper
        />
      </template>
    </spr-dropdown>
  </div>
</template>
```

## Emits

- `@get-input-value` - Emits the actual date range that is being typed or selected
- `@get-date-formats` - Emits the available date formats for the selected range
- `@get-month-list` - Emits the list of months
- `@get-year-list` - Emits the list of years
- `@get-date-errors` - Emits the available date errors
- `@range-change` - Emits when the range changes

## API Reference

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
      <td>Required to bind popper within the calendar</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>v-model</td>
      <td>Binds the selected date range value</td>
      <td>Object</td>
      <td>{ startDate: '', endDate: '' }</td>
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
      <td>400px</td>
    </tr>
    <tr>
      <td>format</td>
      <td>Format for the selected date (e.g., 'MM-DD-YYYY')</td>
      <td>String</td>
      <td>MM-DD-YYYY</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Disables the date range calendar</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>readonly</td>
      <td>Makes the date range calendar read-only</td>
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
      <td>Sets the current year in the calendar view</td>
      <td>String</td>
      <td>{ new Date().getFullYear() }</td>
    </tr>
    <tr>
      <td>min-max-year</td>
      <td>Sets the minimum and maximum years in the calendar</td>
      <td>Object</td>
      <td>{ min: 1900, max: { new Date().getFullYear() } }</td>
    </tr>
    <tr>
      <td>rest-days</td>
      <td>Array of days to be treated as rest days</td>
      <td>Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>disabled-dates</td>
      <td>Disables specific dates or date ranges</td>
      <td>Object</td>
      <td>{}</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>Changes the placement of the dropdown popper. For default inputs, uses the specified placement (e.g., 'top' or 'bottom') and concatenates with 'start' or 'end' based on clicked field. For custom slots, uses the exact placement value specified.</td>
      <td>String</td>
      <td>'bottom'</td>
    </tr>
    <tr>
      <td>wrapper-position</td>
      <td>CSS position of the date range picker wrapper</td>
      <td>String</td>
      <td>relative</td>
    </tr>
    <tr>
      <td>popper-strategy</td>
      <td>Popper positioning strategy</td>
      <td>String</td>
      <td>absolute</td>
    </tr>
    <tr>
      <td>popper-container</td>
      <td>CSS selector or HTMLElement to specify a custom container for the popper element</td>
      <td>String | HTMLElement</td>
      <td>''</td>
    </tr>
  </tbody>
</table>

## Product Uses

<spr-logo name="sidekick" theme="dark" width="50px" />

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { Icon } from '@iconify/vue';
import SprInput from '@/components/input/input.vue';
import SprChips from '@/components/chips/chips.vue';
import SprDropdown from '@/components/dropdown/dropdown.vue';
import SprButton from '@/components/button/button.vue';
import SprDateRangePicker from '@/components/date-picker/date-range-picker/date-range-picker.vue';
import SprModal from '@/components/modal/modal.vue';
import SprLogo from '@/components/logo/logo.vue';

const dateRangeModel = ref({
  range1: { startDate: '', endDate: '' },
  range2: { startDate: '', endDate: '' },
  range3: { startDate: '', endDate: '' },
  range4: { startDate: '', endDate: '' },
  range5: { startDate: '', endDate: '' },
  range6: { startDate: '', endDate: '' },
  range7: { startDate: '', endDate: '' },
  range8: { startDate: '', endDate: '' },
  range9: { startDate: '', endDate: '' },
  range10: { startDate: '', endDate: '' },
  range11: { startDate: '', endDate: '' },
  range12: { startDate: '09-11-2022', endDate: '09-15-2022' },
  placement: { startDate: '', endDate: '' },
  defaultTop: { startDate: '', endDate: '' },
});

const liveInputRange = ref({ startDate: '01-01-2024', endDate: '01-15-2024' });
const liveChipsRange = ref({ startDate: '01-01-2024', endDate: '01-15-2024' });
const inputDisplayString = ref('');
const customInputValue = ref('Select dates');

const formatRange = (range) => {
  const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  if (range.startDate && !range.endDate) {
    const [startMonth, startDay] = range.startDate.split('-');
    return `${monthNames[parseInt(startMonth, 10) - 1]} / ${startDay} – `;
  }

  if (range.startDate && range.endDate) {
    const [startMonth, startDay] = range.startDate.split('-');
    const [endMonth, endDay] = range.endDate.split('-');

    return `${monthNames[parseInt(startMonth, 10) - 1]} / ${startDay} – ${monthNames[parseInt(endMonth, 10) - 1]} / ${endDay}`;
  }

  return '';
};

watch(liveInputRange, (range) => {
  inputDisplayString.value = formatRange(range);
}, { immediate: true });

const modalModel = ref(false);
</script>
