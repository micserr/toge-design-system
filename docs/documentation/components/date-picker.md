# Date Picker

The date picker allows users to select a date from a calendar.

## Basic Usage

<spr-date-picker v-model="datePickerModel.date1" />

```vue
<template>
  <spr-date-picker v-model="datePickerModel" />
</template>

<script setup>
import { ref } from 'vue';

const datePickerModel = ref('');
</script>
```

## Adding Label

<spr-date-picker v-model="datePickerModel.date2" label="Date Picker" />

```vue
<template>
  <spr-date-picker v-model="datePickerModel" label="Date Picker" />
</template>

<script setup>
import { ref } from 'vue';

const datePickerModel = ref('');
</script>
```

## Custom Width

You can manually set the width of the date picker by passing the `width` prop.

<spr-date-picker v-model="datePickerModel.date3" label="Date Picker" width="100%" />

```vue
<template>
  <spr-date-picker v-model="datePickerModel" label="Date Picker" width="100%" />
</template>

<script setup>
import { ref } from 'vue';

const datePickerModel = ref('');
</script>
```

## Disabled

Add the `disabled` prop to disable the date picker.

<spr-date-picker v-model="datePickerModel.date4" label="Date Picker" disabled />

```vue
<template>
  <spr-date-picker v-model="datePickerModel" label="Date Picker" disabled />
</template>

<script setup>
import { ref } from 'vue';

const datePickerModel = ref('');
</script>
```

## Read Only

Add the `readonly` prop to make date picker as read only.

<spr-date-picker v-model="datePickerModel.date5" label="Date Picker" readonly />

```vue
<template>
  <spr-date-picker v-model="datePickerModel" label="Date Picker" readonly />
</template>

<script setup>
import { ref } from 'vue';

const datePickerModel = ref('10-12-2025');
</script>
```

## Helper Text

A helper message is a text label displayed below the input field, offering additional information such as instructions, formatting tips, or validation feedback.

To display the helper message, set the `display-helper` prop to true and add the `helper-text prop` with the message content. You can also include an icon by using the `helper-icon` prop, which utilizes the <a href="https://icon-sets.iconify.design/" target="_blank">Iconify</a> icon library.

### Using Helper Text Directly to Props

<div class="spr-mt-3">
  <spr-date-picker 
    class="[&>p]:spr-m-0" 
    v-model="datePickerModel.date6" 
    label="Date Picker" 
    helper-icon="ph:warning-circle-fill"
    helper-text="This is a helper message" 
    display-helper 
  />
</div>

```vue
<template>
  <spr-date-picker
    v-model="datePickerModel"
    label="Date Picker"
    helper-icon="ph:warning-circle-fill"
    helper-text="This is a helper message"
    display-helper
  />
</template>

<script setup>
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

const datePickerModel = ref('');
</script>
```

### Using Helper Text Slot

<div class="spr-mt-3">
  <spr-date-picker 
    class="[&>p]:spr-m-0" 
    v-model="datePickerModel.date7" 
    label="Date Picker" 
    display-helper 
  >
    <template #helperMessage>
      <Icon icon="ph:warning-circle-fill" width="20px" height="20px" />
      <span>This is a helper message</span>
    </template>
  </spr-date-picker>
</div>

```vue
<template>
  <spr-date-picker v-model="datePickerModel" label="Date Picker" display-helper>
    <template #helperMessage>
      <Icon icon="ph:warning-circle-fill" width="20px" height="20px" />
      <span>This is a helper message</span>
    </template>
  </spr-date-picker>
</template>

<script setup>
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

const datePickerModel = ref('');
</script>
```

## Error State

To handle error states, add the `error` prop to the date picker. You can also include an icon by using the `helper-icon` prop, which utilizes the <a href="https://icon-sets.iconify.design/" target="_blank">Iconify</a> icon library.

### Using Helper Text Directly to Props

<div class="spr-mt-3">
  <spr-date-picker 
    class="[&>p]:spr-m-0" 
    v-model="datePickerModel.date8" 
    label="Date Picker" 
    helper-icon="ph:warning-circle-fill"
    helper-text="This is a helper message" 
    display-helper 
    error
  />
</div>

```vue
<template>
  <spr-date-picker
    v-model="datePickerModel"
    label="Date Picker"
    helper-icon="ph:warning-circle-fill"
    helper-text="This is a helper message"
    display-helper
    error
  />
</template>

<script setup>
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

const datePickerModel = ref('');
</script>
```

### Using Helper Text Slot

<div class="spr-mt-3">
  <spr-date-picker 
    class="[&>p]:spr-m-0" 
    v-model="datePickerModel.date9" 
    label="Date Picker" 
    display-helper 
    error
  >
    <template #helperMessage>
      <Icon icon="ph:warning-circle-fill" width="20px" height="20px" />
      <span>This is a helper message</span>
    </template>
  </spr-date-picker>
</div>

```vue
<template>
  <spr-date-picker v-model="datePickerModel" label="Date Picker" display-helper error>
    <template #helperMessage>
      <Icon icon="ph:warning-circle-fill" width="20px" height="20px" />
      <span>This is a helper message</span>
    </template>
  </spr-date-picker>
</template>

<script setup>
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

const datePickerModel = ref('');
</script>
```

## Manually Set Current Year

You can manually set the current year to be shown in the calendar. The default current year is the current year. Pass the `current-year` prop to set the current year.

<spr-date-picker v-model="datePickerModel.date10" label="Date Picker" current-year="2000" />

```vue
<template>
  <spr-date-picker v-model="datePickerModel.date11" label="Date Picker" current-year="2000" />
</template>

<script setup>
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

const datePickerModel = ref('');
</script>
```

## Manually Set Min-Max Year

It also allows you to manually set the minimum and maximum year to be shown in the calendar. The default minumum year is set `1900` and the maximum year is the current year.

<div>
  <spr-date-picker 
    v-model="datePickerModel.date11" 
    label="Date Picker" 
    :min-max-year="{
      min: 2000,
      max: 2025,
    }" 
  />
</div>

```vue
<template>
  <spr-date-picker v-model="datePickerModel" label="Date Picker" :min-max-year="minMaxYear" />
</template>

<script setup>
import { ref } from 'vue';

const datePickerModel = ref('');

const minMaxYear = ref({
  min: 2000,
  max: 2025,
});
</script>
```

## Rest Days

You can set the rest days in the week by passing the `rest-days` prop.

The value should be an array of strings that may contain the ff:

```js
const restdays = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
```

<div>
  <spr-date-picker 
    v-model="datePickerModel.date12"
    label="Date Picker" 
    :rest-days="['mo', 'we', 'fr', 'sa']" 
  />
</div>

```vue
<template>
  <spr-date-picker v-model="datePickerModel" label="Date Picker" :rest-days="restDays" />
</template>

<script setup>
import { ref } from 'vue';

const datePickerModel = ref('');

const restDays = ref(['mo', 'we', 'fr', 'sa']);
</script>
```

## Disabled Dates

You can disable specific dates by passing the `disabled-dates` prop. There are ways to disable dates:

<ul>
  <li>
    <a href="#disable-dates-using-from-and-to">Disable dates using From and To</a>
  </li>
  <li>
    <a href="#disable-past-dates">Disable Past Dates</a>
  </li>
  <li>
    <a href="#disable-future-dates">Disable Future Dates</a>
  </li>
  <li>
    <a href="#disable-selected-dates">Disable Selected Dates</a>
  </li>
  <li>
    <a href="#disable-weekends">Disable Weekends</a>
  </li>
  <li>
    <a href="#disable-weekdays">Disable Weekdays</a>
  </li>
  <li>
    <a href="#disable-selected-days">Disable Selected Days</a>
  </li>
</ul>

### Disable dates using From and To

To disable dates using `From` and `To`, pass the `disabled-dates` props that contains string of `from` and `to`.

`from` and `to` should be in the format `MM-DD-YYYY`.

<div>
  <spr-date-picker 
    v-model="datePickerModel.date13"
    label="Date Picker" 
    :disabled-dates="{ from: '02-12-2025', to: '05-15-2025' }"
  />
</div>

```vue
<template>
  <spr-date-picker v-model="datePickerModel" label="Date Picker" :disabled-dates="disabledDates" />
</template>

<script setup>
import { ref } from 'vue';

const datePickerModel = ref('');

const disabledDates = ref({ from: '02-12-2025', to: '05-15-2025' });
</script>
```

### Disable Past Dates

To disable past dates, pass the `disabled-dates` prop. that contains boolean of `pastDates` set to `true`.

<div>
  <spr-date-picker 
    v-model="datePickerModel.date14"
    label="Date Picker" 
    :disabled-dates="{ pastDates: true }"
  />
</div>

```vue
<template>
  <spr-date-picker v-model="datePickerModel" label="Date Picker" :disabled-dates="disabledDates" />
</template>

<script setup>
import { ref } from 'vue';

const datePickerModel = ref('');

const disabledDates = ref({ pastDates: true });
</script>
```

### Disable Future Dates

To disable future dates, pass the `disabled-dates` prop. that contains boolean of `futureDates` set to `true`.

<div>
  <spr-date-picker 
    v-model="datePickerModel.date15"
    label="Date Picker" 
    :disabled-dates="{ futureDates: true }"
  />
</div>

```vue
<template>
  <spr-date-picker v-model="datePickerModel" label="Date Picker" :disabled-dates="disabledDates" />
</template>

<script setup>
import { ref } from 'vue';

const datePickerModel = ref('');

const disabledDates = ref({ futureDates: true });
</script>
```

### Disable Selected Dates

To disable selected dates, pass the `disabled-dates` prop. that contains array of `selectedDates` set to `true`.

`selectedDates` should be in the format `MM-DD-YYYY`.

<div>
  <spr-date-picker 
    v-model="datePickerModel.date16"
    label="Date Picker" 
    :disabled-dates="{ selectedDates: ['3-14-2025' , '3-15-2025', '3-25-2025', '3-28-2025'] }"
  />
</div>

```vue
<template>
  <spr-date-picker v-model="datePickerModel" label="Date Picker" :disabled-dates="disabledDates" />
</template>

<script setup>
import { ref } from 'vue';

const datePickerModel = ref('');

const disabledDates = ref({ selectedDates: ['3-14-2025', '3-15-2025', '3-25-2025', '3-28-2025'] });
</script>
```

### Disable Weekends

To disable weekends, pass the `disabled-dates` prop. that contains boolean of `weekends` set to `true`.

<div>
  <spr-date-picker 
    v-model="datePickerModel.date17"
    label="Date Picker" 
    :disabled-dates="{ weekends: true }"
  />
</div>

```vue
<template>
  <spr-date-picker v-model="datePickerModel" label="Date Picker" :disabled-dates="disabledDates" />
</template>

<script setup>
import { ref } from 'vue';

const datePickerModel = ref('');

const disabledDates = ref({ weekends: true });
</script>
```

### Disable Weekdays

To disable weekdays, pass the `disabled-dates` prop. that contains boolean of `weekdays` set to `true`.

<div>
  <spr-date-picker 
    v-model="datePickerModel.date18"
    label="Date Picker" 
    :disabled-dates="{ weekdays: true }"
  />
</div>

```vue
<template>
  <spr-date-picker v-model="datePickerModel" label="Date Picker" :disabled-dates="disabledDates" />
</template>

<script setup>
import { ref } from 'vue';

const datePickerModel = ref('');

const disabledDates = ref({ weekdays: true });
</script>
```

### Disable Selected Days

To disable selected days, pass the `disabled-dates` prop. that contains array of `selectedDays`.

The array should contain the following values:

```js
const selectedDays = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
```

<div>
  <spr-date-picker 
    v-model="datePickerModel.date19"
    label="Date Picker" 
    :disabled-dates="{ selectedDays: ['su', 'we', 'th', 'sa'] }"
  />
</div>

```vue
<template>
  <spr-date-picker v-model="datePickerModel" label="Date Picker" :disabled-dates="disabledDates" />
</template>

<script setup>
import { ref } from 'vue';

const datePickerModel = ref('');

const disabledDates = ref({ selectedDays: ['su', 'we', 'th', 'sa'] });
</script>
```

## Pre-selected Date

You can pre-select a date by just adding value in your `v-model`. The value should be in the format `MM-DD-YYYY`.

<spr-date-picker v-model="datePickerModel.date20" label="Date Picker" />

```vue
<template>
  <spr-date-picker v-model="datePickerModel" label="Date Picker" />
</template>

<script setup>
import { ref } from 'vue';

const datePickerModel = ref('09-11-1997');
</script>
```

## Get Date Formats

To get the date formats, you can use the `@get-date-formats` emits. When the date is valid it will return a different formats.

<div class="spr-my-3 spr-p-4 spr-bg-blue-100">
  <h5>Output:</h5>
  <pre>{{ JSON.stringify(dateFormats, null, 2) }}</pre>
</div>

<spr-date-picker v-model="datePickerModel.date21" label="Date Picker" @get-date-formats="getDateFormats"/>

```vue
<template>
  <spr-date-picker v-model="datePickerModel" label="Date Picker" @get-date-formats="getDateFormats" />
</template>

<script setup>
import { ref } from 'vue';

const datePickerModel = ref('');

const getDateFormats = (date) => {
  console.log(date);
};
</script>
```

## Get Month Lists

To get the month lists used, you can use the `@get-month-lists` emits.

<spr-date-picker v-model="datePickerModel.date22" label="Date Picker" @get-month-list="getMonthList"/>

<div class="spr-mt-3 spr-p-4 spr-bg-blue-100">
  <h5>Output:</h5>
  <pre>{{ JSON.stringify(monthLists, null, 2) }}</pre>
</div>

```vue
<template>
  <spr-date-picker v-model="datePickerModel" label="Date Picker" @get-month-list="getMonthList" />
</template>

<script setup>
import { ref } from 'vue';

const datePickerModel = ref('');

const getMonthList = (date) => {
  console.log(date);
};
</script>
```

## Get Year Lists

To get the year lists used, you can use the `@get-year-lists` emits.

<spr-date-picker v-model="datePickerModel.date23" label="Date Picker" @get-year-list="getYearList"/>

<div class="spr-mt-3 spr-p-4 spr-bg-blue-100">
  <h5>Output:</h5>
  <p>{{ yearLists }}</p>
</div>

```vue
<template>
  <spr-date-picker v-model="datePickerModel" label="Date Picker" @get-year-list="getYearList" />
</template>

<script setup>
import { ref } from 'vue';

const datePickerModel = ref('');

const getYearList = (date) => {
  console.log(date);
};
</script>
```

## Date Picker API

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
      <td>v-model</td>
      <td>Binds the selected date value</td>
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
      <td>400px</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Disables the date picker</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>readonly</td>
      <td>Makes the date picker read-only</td>
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
      <td>{{ new Date().getFullYear() }}</td>
    </tr>
    <tr>
      <td>min-max-year</td>
      <td>Sets the minimum and maximum years in the calendar</td>
      <td>Object</td>
      <td>{ min: 1900, max: {{ new Date().getFullYear() }} }</td>
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
      <td>@get-date-formats</td>
      <td>Emits the available date formats</td>
      <td>Function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>@get-month-list</td>
      <td>Emits the list of months</td>
      <td>Function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>@get-year-list</td>
      <td>Emits the list of years</td>
      <td>Function</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import { ref } from "vue";

import { Icon } from "@iconify/vue";

import SprDatePicker from "@/components/date-picker/date-picker.vue";

const datePickerModel = ref({
  date1: "",
  date2: "",
  date3: "",
  date4: "",
  date5: "10-12-2025",
  date6: "",
  date7: "",
  date8: "",
  date9: "",
  date10: "",
  date11: "",
  date12: "",
  date13: "",
  date14: "",
  date15: "",
  date16: "",
  date17: "",
  date18: "",
  date19: "",
  date20: "09-11-1997",
  date21: "",
  date22: "",
  date23: "",
  date24: "",
  date25: "",
}); 

const dateFormats = ref({});
const monthLists = ref([]);
const yearLists = ref([]);

const getDateFormats = (date) => {
  dateFormats.value = date;
};

const getMonthList = (months) => {
  monthLists.value = months;
};

const getYearList = (years) => {
  yearLists.value = years;
};
</script>
