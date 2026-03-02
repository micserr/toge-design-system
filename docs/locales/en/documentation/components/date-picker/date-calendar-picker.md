---
outline: 'deep'
title: Date Calendar Picker
description: A standalone, Date Calendar Picker component that can be used independently with v-model functionality. This component provides a complete calendar interface with multiple modes and can be attached to any element or used anywhere in your application.
---

# Date Calendar Picker

A standalone, Date Calendar Picker component that can be used independently with v-model functionality. This component provides a complete calendar interface with multiple modes and can be attached to any element or used anywhere in your application.

## Features

- ✅ **v-model Support**: Full two-way data binding
- ✅ **Multiple Modes**: Full, month-year, and year-only modes
- ✅ **Custom Formatting**: Support for different date formats
- ✅ **Disabled Dates**: Comprehensive date restriction options
- ✅ **Rest Days**: Mark specific days as rest days
- ✅ **Responsive Design**: Works on all screen sizes
- ✅ **Accessibility**: Full keyboard navigation and screen reader support
- ✅ **TypeScript**: Complete type safety
- ✅ **Event Handling**: Rich event system for all interactions

## Basic Usage

<spr-date-calendar-picker
  v-model="dateCalendarPickerModel.basic"
  :min-max-year="{ min: 2024, max: 2025 }"
  @update:month="handleDateCalendarPickerMonth"
  @update:year="handleDateCalendarPickerYear"
  @update:day="handleDateCalendarPickerDay"
/>

**Selected Date:** <span class="spr-text-xs">{{dateCalendarPickerModel.basic}}</span>

```vue
<template>
  <spr-date-calendar-picker
    v-model="selectedDate"
    :min-max-year="{ min: 2024, max: 2025 }"
    @update:month="handleMonthUpdate"
    @update:year="handleYearUpdate"
    @update:day="handleDayUpdate"
  />
</template>

<script setup>
import { ref } from 'vue';

const selectedDate = ref('2024-01-15');

const handleMonthUpdate = (month) => {
  console.log('Month updated:', month);
};

const handleYearUpdate = (year) => {
  console.log('Year updated:', year);
};

const handleDayUpdate = (day) => {
  console.log('Day updated:', day);
};
</script>
```

## Modes

The Date Calendar Picker supports three different modes to control what date information is displayed and collected.

### Full Mode (Default)

The full mode displays a complete calendar with month, day, and year selection. This is the default mode.

<spr-date-calendar-picker
  v-model="dateCalendarPickerModel.full"
  mode="full"
  :min-max-year="{ min: 2024, max: 2025 }"
/>

**Selected Date:** <span class="spr-text-xs">{{dateCalendarPickerModel.full}}</span>

```vue
<template>
  <spr-date-calendar-picker
    v-model="selectedDate"
    mode="full"
    :min-max-year="{ min: 2024, max: 2025 }"
  />
</template>

<script setup>
import { ref } from 'vue';

const selectedDate = ref('2024-01-15');
</script>
```

### Month-Year Mode

The month-year mode displays only month and year selection, hiding the day selection.

<spr-date-calendar-picker
  v-model="dateCalendarPickerModel.monthYear"
  mode="month-year"
  :selected-month="dateCalendarPickerSelectedMonth"
  :selected-year="dateCalendarPickerSelectedYear"
  @update:month="handleDateCalendarPickerMonthYearMonth"
  @update:year="handleDateCalendarPickerMonthYearYear"
/>

**Selected Value:** <span class="spr-text-xs">{{dateCalendarPickerModel.monthYear}}</span>

```vue
<template>
  <spr-date-calendar-picker
    v-model="selectedMonthYear"
    mode="month-year"
    :selected-month="selectedMonth"
    :selected-year="selectedYear"
    @update:month="handleMonthUpdate"
    @update:year="handleYearUpdate"
  />
</template>

<script setup>
import { ref } from 'vue';

const selectedMonthYear = ref('2024-06');
const selectedMonth = ref(5); // June (0-indexed)
const selectedYear = ref(2024);

const handleMonthUpdate = (month) => {
  selectedMonth.value = month;
};

const handleYearUpdate = (year) => {
  selectedYear.value = year;
};
</script>
```

### Year-Only Mode

The year-only mode displays only year selection, hiding both month and day selection.

<spr-date-calendar-picker
  v-model="dateCalendarPickerModel.yearOnly"
  mode="year-only"
  :selected-year="dateCalendarPickerYearOnlySelectedYear"
  @update:year="handleDateCalendarPickerYearOnlyYear"
/>

**Selected Value:** <span class="spr-text-xs">{{dateCalendarPickerModel.yearOnly}}</span>

```vue
<template>
  <spr-date-calendar-picker
    v-model="selectedYear"
    mode="year-only"
    :selected-year="selectedYearValue"
    @update:year="handleYearUpdate"
  />
</template>

<script setup>
import { ref } from 'vue';

const selectedYear = ref('2024');
const selectedYearValue = ref(2024);

const handleYearUpdate = (year) => {
  selectedYearValue.value = year;
};
</script>
```

## Mode Comparison

Compare the different modes side by side:

<div class="spr-grid spr-grid-cols-1 md:spr-grid-cols-3 spr-gap-4 spr-mb-6">
  <div class="spr-p-4 spr-border spr-rounded-lg spr-bg-gray-50">
    <h4 class="spr-text-sm spr-font-semibold spr-mb-2">Full Mode</h4>
    <spr-date-calendar-picker
      v-model="dateCalendarPickerModel.modeComparisonFull"
      mode="full"
      :min-max-year="{ min: 2024, max: 2025 }"
    />
    <div class="spr-mt-2 spr-p-2 spr-bg-blue-50 spr-rounded spr-text-xs">
      <strong>Value:</strong> {{ dateCalendarPickerModel.modeComparisonFull || 'None' }}
    </div>
  </div>
  
  <div class="spr-p-4 spr-border spr-rounded-lg spr-bg-gray-50">
    <h4 class="spr-text-sm spr-font-semibold spr-mb-2">Month-Year Mode</h4>
    <spr-date-calendar-picker
      v-model="dateCalendarPickerModel.modeComparisonMonthYear"
      mode="month-year"
      :selected-month="dateCalendarPickerModeComparisonMonth"
      :selected-year="dateCalendarPickerModeComparisonYear"
    />
    <div class="spr-mt-2 spr-p-2 spr-bg-green-50 spr-rounded spr-text-xs">
      <strong>Value:</strong> {{ dateCalendarPickerModel.modeComparisonMonthYear || 'None' }}
    </div>
  </div>
  
  <div class="spr-p-4 spr-border spr-rounded-lg spr-bg-gray-50">
    <h4 class="spr-text-sm spr-font-semibold spr-mb-2">Year-Only Mode</h4>
    <spr-date-calendar-picker
      v-model="dateCalendarPickerModel.modeComparisonYearOnly"
      mode="year-only"
    />
    <div class="spr-mt-2 spr-p-2 spr-bg-purple-50 spr-rounded spr-text-xs">
      <strong>Value:</strong> {{ dateCalendarPickerModel.modeComparisonYearOnly || 'None' }}
    </div>
  </div>
</div>

## Custom Format

You can specify the format of the date by passing the `format` prop. The default format is `MM-DD-YYYY`.

<spr-date-calendar-picker
  v-model="dateCalendarPickerModel.customFormat"
  format="YYYY-MM-DD"
  :min-max-year="{ min: 2024, max: 2025 }"
/>

**Selected Date (YYYY-MM-DD):** <span class="spr-text-xs">{{dateCalendarPickerModel.customFormat}}</span>

```vue
<template>
  <spr-date-calendar-picker
    v-model="selectedDate"
    format="YYYY-MM-DD"
    :min-max-year="{ min: 2024, max: 2025 }"
  />
</template>

<script setup>
import { ref } from 'vue';

const selectedDate = ref('2024-01-15');
</script>
```

## Disabled Dates

You can disable specific dates by passing the `disabled-dates` prop.

<spr-date-calendar-picker
  v-model="dateCalendarPickerModel.disabledDates"
  :min-max-year="{ min: 2024, max: 2025 }"
  :disabled-dates="dateCalendarPickerDisabledDates"
  :rest-days="['su', 'sa']"
/>

**Selected Date:** <span class="spr-text-xs">{{dateCalendarPickerModel.disabledDates}}</span>

```vue
<template>
  <spr-date-calendar-picker
    v-model="selectedDate"
    :min-max-year="{ min: 2024, max: 2025 }"
    :disabled-dates="disabledDates"
    :rest-days="['su', 'sa']"
  />
</template>

<script setup>
import { ref } from 'vue';

const selectedDate = ref('2024-01-15');

const disabledDates = ref({
  from: '2024-01-20',
  to: '2024-01-25',
  selectedDates: ['2024-01-10', '2024-01-11'],
  weekends: false,
  weekdays: false,
  selectedDays: [],
  pastDates: false,
  futureDates: false
});
</script>
```

## Disabled State

Add the `disabled` prop to disable the calendar.

<spr-date-calendar-picker
  v-model="dateCalendarPickerModel.disabled"
  :min-max-year="{ min: 2024, max: 2025 }"
  disabled
/>

```vue
<template>
  <spr-date-calendar-picker
    v-model="selectedDate"
    :min-max-year="{ min: 2024, max: 2025 }"
    disabled
  />
</template>

<script setup>
import { ref } from 'vue';

const selectedDate = ref('2024-01-15');
</script>
```

## Read Only

Add the `readonly` prop to make the calendar read-only.

<spr-date-calendar-picker
  v-model="dateCalendarPickerModel.readonly"
  :min-max-year="{ min: 2024, max: 2025 }"
  readonly
/>

```vue
<template>
  <spr-date-calendar-picker
    v-model="selectedDate"
    :min-max-year="{ min: 2024, max: 2025 }"
    readonly
  />
</template>

<script setup>
import { ref } from 'vue';

const selectedDate = ref('2024-01-15');
</script>
```

## Min-Max Year

You can manually set the minimum and maximum year to be shown in the calendar.

<spr-date-calendar-picker
  v-model="dateCalendarPickerModel.minMaxYear"
  :min-max-year="{ min: 2020, max: 2030 }"
/>

**Selected Date:** <span class="spr-text-xs">{{dateCalendarPickerModel.minMaxYear}}</span>

```vue
<template>
  <spr-date-calendar-picker
    v-model="selectedDate"
    :min-max-year="{ min: 2020, max: 2030 }"
  />
</template>

<script setup>
import { ref } from 'vue';

const selectedDate = ref('2024-01-15');
</script>
```

## Rest Days

You can set the rest days in the week by passing the `rest-days` prop.

<spr-date-calendar-picker
  v-model="dateCalendarPickerModel.restDays"
  :min-max-year="{ min: 2024, max: 2025 }"
  :rest-days="['mo', 'we', 'fr', 'sa']"
/>

**Selected Date:** <span class="spr-text-xs">{{dateCalendarPickerModel.restDays}}</span>

```vue
<template>
  <spr-date-calendar-picker
    v-model="selectedDate"
    :min-max-year="{ min: 2024, max: 2025 }"
    :rest-days="restDays"
  />
</template>

<script setup>
import { ref } from 'vue';

const selectedDate = ref('2024-01-15');
const restDays = ref(['mo', 'we', 'fr', 'sa']);
</script>
```

## Event Handling

The component emits events for all interactions:

<div class="spr-p-4 spr-border spr-rounded-lg spr-bg-gray-50 spr-mb-4">
  <spr-date-calendar-picker
    v-model="dateCalendarPickerModel.eventHandling"
    :min-max-year="{ min: 2024, max: 2025 }"
    @update:month="handleDateCalendarPickerEventMonth"
    @update:year="handleDateCalendarPickerEventYear"
    @update:day="handleDateCalendarPickerEventDay"
  />
  <div class="spr-mt-3 spr-p-2 spr-bg-blue-50 spr-rounded spr-text-sm">
    <p><strong>Selected Date:</strong> {{ dateCalendarPickerModel.eventHandling || 'None' }}</p>
    <p><strong>Last Month Update:</strong> {{ dateCalendarPickerEventMonth || 'None' }}</p>
    <p><strong>Last Year Update:</strong> {{ dateCalendarPickerEventYear || 'None' }}</p>
    <p><strong>Last Day Update:</strong> {{ dateCalendarPickerEventDay || 'None' }}</p>
  </div>
</div>

```vue
<template>
  <spr-date-calendar-picker
    v-model="selectedDate"
    :min-max-year="{ min: 2024, max: 2025 }"
    @update:month="handleMonthUpdate"
    @update:year="handleYearUpdate"
    @update:day="handleDayUpdate"
  />
  
  <div class="mt-4 p-4 bg-gray-100 rounded">
    <p><strong>Selected Date:</strong> {{ selectedDate }}</p>
    <p><strong>Last Month Update:</strong> {{ lastMonthUpdate }}</p>
    <p><strong>Last Year Update:</strong> {{ lastYearUpdate }}</p>
    <p><strong>Last Day Update:</strong> {{ lastDayUpdate }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedDate = ref('2024-01-15');
const lastMonthUpdate = ref('');
const lastYearUpdate = ref('');
const lastDayUpdate = ref('');

const handleMonthUpdate = (month) => {
  lastMonthUpdate.value = `Month ${month + 1} (${new Date(2024, month).toLocaleString('default', { month: 'long' })})`;
};

const handleYearUpdate = (year) => {
  lastYearUpdate.value = `Year ${year}`;
};

const handleDayUpdate = (day) => {
  lastDayUpdate.value = `Day ${day}`;
};
</script>
```

## Integration Examples

### In a Modal

```vue
<template>
  <div>
    <button @click="showModal = true">Open Calendar</button>
    
    <Modal v-if="showModal" @close="showModal = false">
      <spr-date-calendar-picker
        v-model="selectedDate"
        :min-max-year="{ min: 2024, max: 2025 }"
        @update:modelValue="handleDateSelect"
      />
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false);
const selectedDate = ref('');

const handleDateSelect = (date) => {
  console.log('Date selected:', date);
  showModal.value = false;
};
</script>
```

### In a Form

```vue
<template>
  <form @submit="handleSubmit">
    <div class="form-group">
      <label>Select Date:</label>
      <spr-date-calendar-picker
        v-model="formData.date"
        :min-max-year="{ min: 2024, max: 2025 }"
        :disabled-dates="disabledDates"
      />
    </div>
    
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  date: ''
});

const disabledDates = ref({
  pastDates: true,
  weekends: true
});

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted with date:', formData.value.date);
};
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
      <td>The selected date value (v-model)</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>selectedMonth</td>
      <td>Pre-selected month (0-indexed)</td>
      <td>number</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>selectedYear</td>
      <td>Pre-selected year</td>
      <td>number</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>selectedDay</td>
      <td>Pre-selected day</td>
      <td>number</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>minMaxYear</td>
      <td>Year range constraints</td>
      <td>MinMaxYearType</td>
      <td>{ min: 1900, max: currentYear }</td>
    </tr>
    <tr>
      <td>restDays</td>
      <td>Days to mark as rest days</td>
      <td>RestDayType[]</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>disabledDates</td>
      <td>Date restrictions</td>
      <td>DisabledDatesType</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Disable the calendar</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>readonly</td>
      <td>Make the calendar read-only</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>mode</td>
      <td>Calendar mode: 'full', 'month-year', 'year-only'</td>
      <td>DatePickerMode</td>
      <td>'full'</td>
    </tr>
    <tr>
      <td>format</td>
      <td>Date format for v-model</td>
      <td>string</td>
      <td>'MM-DD-YYYY'</td>
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
      <td>Emitted when the selected date changes</td>
      <td>(value: string)</td>
    </tr>
    <tr>
      <td>update:month</td>
      <td>Emitted when month changes (0-indexed)</td>
      <td>(month: number)</td>
    </tr>
    <tr>
      <td>update:year</td>
      <td>Emitted when year changes</td>
      <td>(year: number)</td>
    </tr>
    <tr>
      <td>update:day</td>
      <td>Emitted when day changes</td>
      <td>(day: number)</td>
    </tr>
  </tbody>
</table>

## TypeScript Support

The component is fully typed with TypeScript interfaces:

```typescript
interface MinMaxYearType {
  min: number;
  max: number;
}

interface DisabledDatesType {
  to: string;
  from: string;
  pastDates: boolean | string;
  futureDates: boolean | string;
  selectedDates: Array<string>;
  weekends: boolean;
  weekdays: boolean;
  selectedDays: Array<string>;
}

type RestDayType = 'su' | 'mo' | 'tu' | 'we' | 'th' | 'fr' | 'sa';
type DatePickerMode = 'full' | 'month-year' | 'year-only';
```

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 60+
- ✅ Safari 12+
- ✅ Edge 79+

## Dependencies

- Vue 3.x
- @iconify/vue
- dayjs
- Tailwind CSS

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="payroll" theme="dark" width="50px" />
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import { ref } from 'vue';
import SprDateCalendarPicker from '@/components/date-picker/date-calendar-picker/date-calendar-picker.vue';
import SprLogo from '@/components/logo/logo.vue';

// Basic usage reactive variables
const dateCalendarPickerModel = ref({
  basic: '2024-01-15',
  full: '2024-01-15',
  monthYear: '2024-06',
  yearOnly: '2024',
  modeComparisonFull: '2024-01-15',
  modeComparisonMonthYear: '2024-06',
  modeComparisonYearOnly: '2024',
  customFormat: '2024-01-15',
  disabledDates: '2024-01-15',
  disabled: '2024-01-15',
  readonly: '2024-01-15',
  minMaxYear: '2024-01-15',
  restDays: '2024-01-15',
  eventHandling: '2024-01-15'
});

// Month-year mode reactive variables
const dateCalendarPickerSelectedMonth = ref(5); // June
const dateCalendarPickerSelectedYear = ref(2024);

// Year-only mode reactive variables
const dateCalendarPickerYearOnlySelectedYear = ref(2024);

// Mode comparison reactive variables
const dateCalendarPickerModeComparisonMonth = ref(5); // June
const dateCalendarPickerModeComparisonYear = ref(2024);

// Event handling reactive variables
const dateCalendarPickerEventMonth = ref('');
const dateCalendarPickerEventYear = ref('');
const dateCalendarPickerEventDay = ref('');

// Disabled dates configuration
const dateCalendarPickerDisabledDates = ref({
  from: '2024-01-20',
  to: '2024-01-25',
  selectedDates: ['2024-01-10', '2024-01-11'],
  weekends: false,
  weekdays: false,
  selectedDays: [],
  pastDates: false,
  futureDates: false
});

// Event handlers
const handleDateCalendarPickerMonth = (month) => {
  console.log('Month updated:', month);
};

const handleDateCalendarPickerYear = (year) => {
  console.log('Year updated:', year);
};

const handleDateCalendarPickerDay = (day) => {
  console.log('Day updated:', day);
};

const handleDateCalendarPickerMonthYearMonth = (month) => {
  dateCalendarPickerSelectedMonth.value = month;
};

const handleDateCalendarPickerMonthYearYear = (year) => {
  dateCalendarPickerSelectedYear.value = year;
};

const handleDateCalendarPickerYearOnlyYear = (year) => {
  dateCalendarPickerYearOnlySelectedYear.value = year;
};

const handleDateCalendarPickerEventMonth = (month) => {
  dateCalendarPickerEventMonth.value = `Month ${month + 1} (${new Date(2024, month).toLocaleString('default', { month: 'long' })})`;
};

const handleDateCalendarPickerEventYear = (year) => {
  dateCalendarPickerEventYear.value = `Year ${year}`;
};

const handleDateCalendarPickerEventDay = (day) => {
  dateCalendarPickerEventDay.value = `Day ${day}`;
};
</script>
