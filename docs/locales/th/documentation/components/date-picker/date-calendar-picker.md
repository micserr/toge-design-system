---
title: Date Calendar Picker
descripttion: คอมโพเนนต์ Date Calendar Picker ช่วยให้ผู้ใช้เลือกวันที่จากปฏิทินแบบสแตนด์อโลน พร้อมตัวเลือกในการปรับแต่งโหมดการแสดงผล ปิดใช้งานวันที่ และรูปแบบการแสดงผลที่หลากหลาย
outline: deep
---

# Date Calendar Picker

Date calendar picker ช่วยให้ผู้ใช้เลือกวันที่จากปฏิทินแบบสแตนด์อโลน

## การใช้งานพื้นฐาน

<spr-date-calendar-picker id="date-calendar-basic" v-model="calendarModel.basic" display-helper />

`ค่าคุณสมบัติ:` <span class="spr-text-xs">{{calendarModel.basic}}</span>

```vue
<template>
  <spr-date-calendar-picker id="date-calendar-basic" v-model="calendarModel" display-helper />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const calendarModel = ref('');
</script>
```

## โหมดปฏิทิน

คอมโพเนนต์นี้มีโหมดปฏิทินที่แตกต่างกันสามแบบ:

- **full**: แสดงปฏิทินแบบเต็มพร้อมวัน เดือน และปี
- **month-year**: แสดงเฉพาะเดือนและปี
- **year-only**: แสดงเฉพาะปี

### โหมดเต็ม

<spr-date-calendar-picker id="date-calendar-full" v-model="calendarModel.full" mode="full" display-helper />

```vue
<template>
  <spr-date-calendar-picker id="date-calendar-full" v-model="calendarModel" mode="full" display-helper />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const calendarModel = ref('');
</script>
```

### โหมดเดือน-ปี

<spr-date-calendar-picker id="date-calendar-month-year" v-model="calendarModel.monthYear" mode="month-year" display-helper />

```vue
<template>
  <spr-date-calendar-picker id="date-calendar-month-year" v-model="calendarModel" mode="month-year" display-helper />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const calendarModel = ref('');
</script>
```

### โหมดปีเท่านั้น

<spr-date-calendar-picker id="date-calendar-year-only" v-model="calendarModel.yearOnly" mode="year-only" display-helper />

```vue
<template>
  <spr-date-calendar-picker id="date-calendar-year-only" v-model="calendarModel" mode="year-only" display-helper />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const calendarModel = ref('');
</script>
```

## เพิ่มป้ายกำกับ

<spr-date-calendar-picker id="date-calendar-label" v-model="calendarModel.label" label="ปฏิทินวันที่" display-helper format="YYYY-MM-DD" />

ค่า: {{ calendarModel.label }}

```vue
<template>
  <spr-date-calendar-picker
    id="date-calendar-label"
    v-model="calendarModel"
    label="ปฏิทินวันที่"
    display-helper
    format="YYYY-MM-DD"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const calendarModel = ref('');
</script>
```

## ความกว้างที่กำหนดเอง

คุณสามารถกำหนดความกว้างของปฏิทินวันที่ด้วยตนเองได้โดยส่ง prop `width`

<spr-date-calendar-picker id="date-calendar-width" v-model="calendarModel.width" label="ปฏิทินวันที่" width="400px" display-helper />

`ค่าคุณสมบัติ:` <span class="spr-text-xs">{{calendarModel.width}}</span>

```vue
<template>
  <spr-date-calendar-picker
    id="date-calendar-width"
    v-model="calendarModel"
    label="ปฏิทินวันที่"
    width="400px"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const calendarModel = ref('');
</script>
```

## รูปแบบวันที่

คุณสามารถกำหนดรูปแบบของวันที่ได้โดยส่ง prop `format` รูปแบบเริ่มต้นคือ `MM-DD-YYYY` คอมโพเนนต์จะส่งคืนวันที่ในรูปแบบที่กำหนด

<spr-date-calendar-picker id="date-calendar-format" v-model="calendarModel.format" label="ปฏิทินวันที่" display-helper format="YYYY-MM-DD" />
ค่า: <code>{{ calendarModel.format }}</code>

```vue
<template>
  <spr-date-calendar-picker
    id="date-calendar-format"
    v-model="calendarModel"
    label="ปฏิทินวันที่"
    format="YYYY-MM-DD"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const calendarModel = ref('');
</script>
```

## ปิดใช้งาน

เพิ่ม prop `disabled` เพื่อปิดใช้งานปฏิทินวันที่

<spr-date-calendar-picker id="date-calendar-disabled" v-model="calendarModel.disabled" label="ปฏิทินวันที่" display-helper disabled />

```vue
<template>
  <spr-date-calendar-picker
    id="date-calendar-disabled"
    v-model="calendarModel"
    label="ปฏิทินวันที่"
    display-helper
    disabled
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const calendarModel = ref('');
</script>
```

## อ่านได้อย่างเดียว

เพิ่ม prop `readonly` เพื่อทำให้ปฏิทินวันที่อ่านได้อย่างเดียว

<spr-date-calendar-picker id="date-calendar-readonly" v-model="calendarModel.readonly" label="ปฏิทินวันที่" display-helper readonly />

```vue
<template>
  <spr-date-calendar-picker
    id="date-calendar-readonly"
    v-model="calendarModel"
    label="ปฏิทินวันที่"
    display-helper
    readonly
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const calendarModel = ref('');
</script>
```

## ข้อความช่วยเหลือ

ข้อความช่วยเหลือคือป้ายข้อความที่แสดงอยู่ด้านล่างช่องอินพุต ให้ข้อมูลเพิ่มเติม เช่น คำแนะนำ เคล็ดลับการจัดรูปแบบ หรือข้อเสนอแนะการตรวจสอบ

ในการแสดงข้อความช่วยเหลือ ให้ตั้งค่า prop `display-helper` เป็น true และเพิ่ม prop `helper-text` พร้อมเนื้อหาข้อความ คุณยังสามารถรวมไอคอนได้โดยใช้ prop `helper-icon`

<spr-date-calendar-picker id="date-calendar-helper-text" v-model="calendarModel.helper" label="ปฏิทินวันที่" helper-text="เลือกวันที่" display-helper />

```vue
<template>
  <spr-date-calendar-picker
    id="date-calendar-helper-text"
    v-model="calendarModel"
    label="ปฏิทินวันที่"
    helper-text="เลือกวันที่"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const calendarModel = ref('');
</script>
```

## สถานะข้อผิดพลาด

ในการจัดการสถานะข้อผิดพลาด ให้เพิ่ม prop `error` ในปฏิทินวันที่ คุณยังสามารถรวมไอคอนได้โดยใช้ prop `helper-icon`

<spr-date-calendar-picker id="date-calendar-error-state" v-model="calendarModel.error" label="ปฏิทินวันที่" helper-icon="ph:warning-circle-fill" helper-text="นี่คือข้อความช่วยเหลือ" display-helper error />

```vue
<template>
  <spr-date-calendar-picker
    id="date-calendar-error-state"
    v-model="calendarModel"
    label="ปฏิทินวันที่"
    helper-icon="ph:warning-circle-fill"
    helper-text="นี่คือข้อความช่วยเหลือ"
    display-helper
    error
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const calendarModel = ref('');
</script>
```

## ปีต่ำสุด/สูงสุด

คุณสามารถกำหนดปีต่ำสุดและสูงสุดที่จะแสดงในปฏิทินด้วยตนเองได้ ปีต่ำสุดเริ่มต้นคือ `1900` และสูงสุดคือปีปัจจุบัน

<spr-date-calendar-picker id="date-calendar-min-max-year" v-model="calendarModel.minmax" label="ปฏิทินวันที่" :min-max-year="{ min: 2000, max: 2025 }" display-helper />

```vue
<template>
  <spr-date-calendar-picker
    id="date-calendar-min-max-year"
    v-model="calendarModel"
    label="ปฏิทินวันที่"
    :min-max-year="{ min: 2000, max: 2025 }"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const calendarModel = ref('');
</script>
```

## วันหยุด

คุณสามารถตั้งค่าวันหยุดในสัปดาห์ได้โดยส่ง prop `rest-days`

```js
const restDays = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
```

<spr-date-calendar-picker id="date-calendar-rest-days" v-model="calendarModel.rest" label="ปฏิทินวันที่" :rest-days="['mo', 'we', 'fr', 'sa']" display-helper />

```vue
<template>
  <spr-date-calendar-picker
    id="date-calendar-rest-days"
    v-model="calendarModel"
    label="ปฏิทินวันที่"
    :rest-days="['mo', 'we', 'fr', 'sa']"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const calendarModel = ref('');
</script>
```

## วันที่ที่ปิดใช้งาน

คุณสามารถปิดใช้งานวันที่เฉพาะได้โดยส่ง prop `disabled-dates` มีหลายวิธีในการปิดใช้งานวันที่:

- ปิดใช้งานวันที่โดยใช้ From และ To
- ปิดใช้งานวันที่ในอดีตหรืออนาคต
- ปิดใช้งานวันที่ในอดีตหรืออนาคตพร้อมวันที่ที่เลือก
- ปิดใช้งานวันที่ที่เลือก
- ปิดใช้งานวันหยุดสุดสัปดาห์
- ปิดใช้งานวันธรรมดา
- ปิดใช้งานวันที่ที่เลือก

```js
const disabledDates = { from: '02-12-2025', to: '05-15-2025' };
```

<spr-date-calendar-picker id="date-calendar-disabled-dates" v-model="calendarModel.disabledDates" label="ปฏิทินวันที่" :disabled-dates="{ from: '02-12-2025', to: '05-15-2025' }" display-helper />

```vue
<template>
  <spr-date-calendar-picker
    id="date-calendar-disabled-dates"
    v-model="calendarModel"
    label="ปฏิทินวันที่"
    :disabled-dates="{ from: '02-12-2025', to: '05-15-2025' }"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const calendarModel = ref('');
</script>
```

## วันที่ที่เลือกไว้ล่วงหน้า

คุณสามารถเลือกวันที่ล่วงหน้าได้โดยเพียงแค่เพิ่มค่าใน `v-model` ของคุณ ค่าควรอยู่ในรูปแบบ `MM-DD-YYYY`

<spr-date-calendar-picker id="date-calendar-pre-selected-date" v-model="calendarModel.preselected" label="ปฏิทินวันที่" display-helper />

```vue
<template>
  <spr-date-calendar-picker
    id="date-calendar-pre-selected-date"
    v-model="calendarModel"
    label="ปฏิทินวันที่"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const calendarModel = ref('09-11-2022');
</script>
```

## Emits

- `@get-input-value` - ส่งออกวันที่จริงที่กำลังพิมพ์หรือเลือก
- `@get-date-formats` - ส่งออกรูปแบบวันที่ที่มีอยู่สำหรับวันที่ที่เลือก
- `@get-month-list` - ส่งออกรายชื่อเดือน
- `@get-year-list` - ส่งออกรายชื่อปี
- `@get-date-errors` - ส่งออกข้อผิดพลาดวันที่ที่มีอยู่
- `@date-change` - ส่งออกเมื่อวันที่เปลี่ยน

## API Reference

<table>
  <thead>
    <tr>
      <th>คุณสมบัติ</th>
      <th>คำอธิบาย</th>
      <th>ประเภท</th>
      <th>ค่าเริ่มต้น</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>จำเป็นสำหรับการผูก popper ภายในปฏิทิน</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>v-model</td>
      <td>ผูกค่าที่เลือกของวันที่</td>
      <td>String</td>
      <td>''</td>
    </tr>
    <tr>
      <td>label</td>
      <td>ข้อความป้ายกำกับสำหรับช่องอินพุต</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>width</td>
      <td>กำหนดความกว้างของอินพุต</td>
      <td>String</td>
      <td>400px</td>
    </tr>
    <tr>
      <td>format</td>
      <td>รูปแบบสำหรับวันที่ที่เลือก (เช่น 'MM-DD-YYYY')</td>
      <td>String</td>
      <td>MM-DD-YYYY</td>
    </tr>
    <tr>
      <td>mode</td>
      <td>โหมดการแสดงผลของปฏิทิน</td>
      <td>String</td>
      <td>'full'</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>ปิดใช้งานปฏิทินวันที่</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>readonly</td>
      <td>ทำให้ปฏิทินวันที่อ่านได้อย่างเดียว</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>helper-text</td>
      <td>แสดงข้อความช่วยเหลือด้านล่างอินพุต</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>helper-icon</td>
      <td>ไอคอนที่จะแสดงควบคู่กับข้อความช่วยเหลือ</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>display-helper</td>
      <td>แสดงข้อความช่วยเหลือ</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>error</td>
      <td>ระบุว่ามีข้อผิดพลาดกับอินพุต</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>current-year</td>
      <td>กำหนดปีปัจจุบันในมุมมองปฏิทิน</td>
      <td>String</td>
      <td>{ new Date().getFullYear() }</td>
    </tr>
    <tr>
      <td>min-max-year</td>
      <td>กำหนดปีต่ำสุดและสูงสุดในปฏิทิน</td>
      <td>Object</td>
      <td>{ min: 1900, max: { new Date().getFullYear() } }</td>
    </tr>
    <tr>
      <td>rest-days</td>
      <td>อาร์เรย์ของวันที่จะถูกถือว่าเป็นวันหยุด</td>
      <td>Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>disabled-dates</td>
      <td>ปิดใช้งานวันที่หรือช่วงวันที่เฉพาะ</td>
      <td>Object</td>
      <td>{}</td>
    </tr>
  </tbody>
</table>

## การใช้งานในผลิตภัณฑ์

<spr-logo name="sidekick" theme="dark" width="50px" />

<script lang="ts" setup>
import { ref } from 'vue';
import SprDateCalendarPicker from '@/components/date-picker/date-calendar-picker/date-calendar-picker.vue';
import SprLogo from '@/components/logo/logo.vue';

const calendarModel = ref({
  basic: '',
  full: '',
  monthYear: '',
  yearOnly: '',
  label: '',
  width: '',
  format: '',
  disabled: '',
  readonly: '',
  helper: '',
  error: '',
  minmax: '',
  rest: '',
  disabledDates: '',
  preselected: '09-11-2022',
});
</script>
