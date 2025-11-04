---
title: Date Range Picker
descripttion: คอมโพเนนต์ Date Range Picker ช่วยให้ผู้ใช้เลือกวันที่เริ่มต้นและสิ้นสุดจากปฏิทิน พร้อมตัวเลือกในการปรับแต่ง ปิดใช้งานวันที่ และรูปแบบการแสดงผลที่หลากหลาย
outline: deep
---

# Date Range Picker

Date range calendar ช่วยให้ผู้ใช้เลือกวันที่เริ่มต้นและสิ้นสุดจากปฏิทิน

## การใช้งานพื้นฐาน

<spr-date-range-picker id="date-range-basic" v-model="dateRangeModel.range1" display-helper />

`ค่าคุณสมบัติ:` <span class="spr-text-xs">{{dateRangeModel.range1}}</span>

```vue
<template>
  <spr-date-range-picker id="date-range-basic" v-model="dateRangeModel" display-helper />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const dateRangeModel = ref({ startDate: '', endDate: '' });
</script>
```

## การปรับแต่งพื้นที่อินพุต (ใช้ Slot)

คุณสามารถปรับแต่งพื้นที่อินพุตวันที่ได้อย่างเต็มรูปแบบโดยใช้ slot เริ่มต้น ซึ่งช่วยให้คุณใช้คอมโพเนนต์ใดก็ได้ (เช่น `<spr-input>` หรือ `<spr-chips>`) และตอบสนองต่อช่วงวันที่ที่เลือกจาก `v-model`

### การใช้กับ Input

<spr-date-range-picker id="date-range-input" v-model="liveInputRange" label="ช่วงวันที่">
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
    label="วันที่ที่กำหนดเอง (spr-input)"
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
  const monthNames = [
    'ม.ค.',
    'ก.พ.',
    'มี.ค.',
    'เม.ย.',
    'พ.ค.',
    'มิ.ย.',
    'ก.ค.',
    'ส.ค.',
    'ก.ย.',
    'ต.ค.',
    'พ.ย.',
    'ธ.ค.',
  ];

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

### การใช้กับ Chips

<spr-date-range-picker id="date-range-chip" v-model="liveChipsRange" label="ช่วงวันที่">
  <template #default="{ handleClick }">
    <div class="spr-flex spr-gap-2 spr-items-center spr-p-2 spr-border">
      <spr-chips tone="default" :label="liveChipsRange.startDate || 'เริ่ม'" @click="handleClick"/>
      <span class="spr-text-mushroom-500">ถึง</span>
      <spr-chips tone="default" :label="liveChipsRange.endDate || 'สิ้นสุด'" @click="handleClick"/>
    </div>
  </template>
</spr-date-range-picker>

```vue
<template>
  <spr-date-range-picker id="date-range-chip" v-model="dateRangeModel" label="ช่วงวันที่">
    <template #default>
      <div class="spr-flex spr-items-center spr-gap-2 spr-p-2">
        <spr-chips tone="default" :label="dateRangeModel.startDate || 'เริ่ม'" />
        <span class="spr-text-mushroom-500">ถึง</span>
        <spr-chips tone="default" :label="dateRangeModel.endDate || 'สิ้นสุด'" />
      </div>
    </template>
  </spr-date-range-picker>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dateRangeModel = ref({ startDate: '01-01-2024', endDate: '01-15-2024' });
</script>
```

คุณสามารถใช้คอมโพเนนต์หรือมาร์กอัปใดก็ได้ใน slot และ slot จะได้รับค่าล่าสุดจาก `v-model` เสมอเพื่อการควบคุมการแสดงผลอย่างเต็มรูปแบบ

## เพิ่มป้ายกำกับ

<spr-date-range-picker id="date-range-label" v-model="dateRangeModel.range2" label="ช่วงวันที่" display-helper format="YYYY-MM-DD" />

ค่า: {{ dateRangeModel.range2 }}

```vue
<template>
  <spr-date-range-picker
    id="date-range-label"
    v-model="dateRangeModel"
    label="ช่วงวันที่"
    display-helper
    format="YYYY-MM-DD"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dateRangeModel = ref({ startDate: '', endDate: '' });
</script>
```

## ความกว้างที่กำหนดเอง

คุณสามารถกำหนดความกว้างของปฏิทินช่วงวันที่ด้วยตนเองได้โดยส่ง prop `width`

<spr-date-range-picker id="date-range-width" v-model="dateRangeModel.range3" label="ช่วงวันที่" width="400px" display-helper />

`ค่าคุณสมบัติ:` <span class="spr-text-xs">{{dateRangeModel.range3}}</span>

```vue
<template>
  <spr-date-range-picker
    id="date-range-width"
    v-model="dateRangeModel"
    label="ช่วงวันที่"
    width="400px"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dateRangeModel = ref({ startDate: '', endDate: '' });
</script>
```

## รูปแบบวันที่

คุณสามารถกำหนดรูปแบบของวันที่ได้โดยส่ง prop `format` รูปแบบเริ่มต้นคือ `MM-DD-YYYY` คอมโพเนนต์จะส่งคืนวันที่ในรูปแบบที่กำหนด

<spr-date-range-picker id="date-range-format" v-model="dateRangeModel.range4" label="ช่วงวันที่" display-helper format="YYYY-MM-DD" />
ค่า: <code>{{ dateRangeModel.range4 }}</code>

```vue
<template>
  <spr-date-range-picker
    id="date-range-format"
    v-model="dateRangeModel"
    label="ช่วงวันที่"
    format="YYYY-MM-DD"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dateRangeModel = ref({ startDate: '', endDate: '' });
</script>
```

## ปิดใช้งาน

เพิ่ม prop `disabled` เพื่อปิดใช้งานปฏิทินช่วงวันที่

<spr-date-range-picker id="date-range-disabled" v-model="dateRangeModel.range5" label="ช่วงวันที่" display-helper disabled />

```vue
<template>
  <spr-date-range-picker id="date-range-disabled" v-model="dateRangeModel" label="ช่วงวันที่" display-helper disabled />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dateRangeModel = ref({ startDate: '', endDate: '' });
</script>
```

## อ่านได้อย่างเดียว

เพิ่ม prop `readonly` เพื่อทำให้ปฏิทินช่วงวันที่อ่านได้อย่างเดียว

<spr-date-range-picker id="date-range-readonly" v-model="dateRangeModel.range6" label="ช่วงวันที่" display-helper readonly />

```vue
<template>
  <spr-date-range-picker id="date-range-readonly" v-model="dateRangeModel" label="ช่วงวันที่" display-helper readonly />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dateRangeModel = ref({ startDate: '', endDate: '' });
</script>
```

## ข้อความช่วยเหลือ

ข้อความช่วยเหลือคือป้ายข้อความที่แสดงอยู่ด้านล่างช่องอินพุต ให้ข้อมูลเพิ่มเติม เช่น คำแนะนำ เคล็ดลับการจัดรูปแบบ หรือข้อเสนอแนะการตรวจสอบ

ในการแสดงข้อความช่วยเหลือ ให้ตั้งค่า prop `display-helper` เป็น true และเพิ่ม prop `helper-text` พร้อมเนื้อหาข้อความ คุณยังสามารถรวมไอคอนได้โดยใช้ prop `helper-icon`

<spr-date-range-picker id="date-range-helper-text" v-model="dateRangeModel.range7" label="ช่วงวันที่" helper-text="เลือกช่วงวันที่" display-helper />

```vue
<template>
  <spr-date-range-picker
    id="date-range-helper-text"
    v-model="dateRangeModel"
    label="ช่วงวันที่"
    helper-text="เลือกช่วงวันที่"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const dateRangeModel = ref({ startDate: '', endDate: '' });
</script>
```

## สถานะข้อผิดพลาด

ในการจัดการสถานะข้อผิดพลาด ให้เพิ่ม prop `error` ในปฏิทินช่วงวันที่ คุณยังสามารถรวมไอคอนได้โดยใช้ prop `helper-icon`

<spr-date-range-picker id="date-range-error-state" v-model="dateRangeModel.range8" label="ช่วงวันที่" helper-icon="ph:warning-circle-fill" helper-text="นี่คือข้อความช่วยเหลือ" display-helper error />

```vue
<template>
  <spr-date-range-picker
    id="date-range-error-state"
    v-model="dateRangeModel"
    label="ช่วงวันที่"
    helper-icon="ph:warning-circle-fill"
    helper-text="นี่คือข้อความช่วยเหลือ"
    display-helper
    error
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dateRangeModel = ref({ startDate: '', endDate: '' });
</script>
```

## ปีต่ำสุด/สูงสุด

คุณสามารถกำหนดปีต่ำสุดและสูงสุดที่จะแสดงในปฏิทินด้วยตนเองได้ ปีต่ำสุดเริ่มต้นคือ `1900` และสูงสุดคือปีปัจจุบัน

<spr-date-range-picker id="date-range-min-max-year" v-model="dateRangeModel.range9" label="ช่วงวันที่" :min-max-year="{ min: 2000, max: 2025 }" display-helper />

```vue
<template>
  <spr-date-range-picker
    id="date-range-min-max-year"
    v-model="dateRangeModel"
    label="ช่วงวันที่"
    :min-max-year="{ min: 2000, max: 2025 }"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dateRangeModel = ref({ startDate: '', endDate: '' });
</script>
```

## วันหยุด

คุณสามารถตั้งค่าวันหยุดในสัปดาห์ได้โดยส่ง prop `rest-days`

```js
const restDays = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
```

<spr-date-range-picker id="date-range-rest-days" v-model="dateRangeModel.range10" label="ช่วงวันที่" :rest-days="['mo', 'we', 'fr', 'sa']" display-helper />

```vue
<template>
  <spr-date-range-picker
    id="date-range-rest-days"
    v-model="dateRangeModel"
    label="ช่วงวันที่"
    :rest-days="['mo', 'we', 'fr', 'sa']"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dateRangeModel = ref({ startDate: '', endDate: '' });
</script>
```

## ตำแหน่งการวาง

Date range picker ใช้ตรรกะการวางตำแหน่งอัจฉริยะสำหรับป๊อปโอเวอร์ปฏิทิน:

### ช่องอินพุตเริ่มต้น

เมื่อใช้ช่องอินพุตเริ่มต้น (ไม่มี slot ที่กำหนดเอง) คอมโพเนนต์จะใช้ prop `placement` เพื่อกำหนดทิศทางฐาน (`top` หรือ `bottom`) และต่อด้วยการจัดตำแหน่งที่เหมาะสมโดยอัตโนมัติตามช่องอินพุตที่คลิก:

- **ช่องวันที่เริ่มต้น**: ใช้ `{placement}-start` (เช่น `top-start` หรือ `bottom-start`)
- **ช่องวันที่สิ้นสุด**: ใช้ `{placement}-end` (เช่น `top-end` หรือ `bottom-end`)

ตัวอย่างเช่น หากคุณตั้งค่า `placement="top"`:

- การคลิกช่องวันที่เริ่มต้นจะใช้ `top-start` placement
- การคลิกช่องวันที่สิ้นสุดจะใช้ `top-end` placement

การวางตำแหน่งแบบไดนามิกนี้ช่วยให้แน่ใจว่าปฏิทินจะปรากฏในตำแหน่งที่เหมาะสมที่สุดเสมอตามช่องอินพุตที่คลิก ขณะเคารพทิศทางที่คุณต้องการ

### ช่องอินพุตเริ่มต้นพร้อมตำแหน่งที่กำหนดเอง

<spr-date-range-picker id="date-range-placement" v-model="dateRangeModel.defaultTop" label="ตำแหน่งด้านบน" placement="top" display-helper />

```vue
<template>
  <spr-date-range-picker
    id="date-range-placement"
    v-model="dateRangeModel"
    label="ตำแหน่งด้านบน"
    placement="top"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const dateRangeModel = ref({ startDate: '', endDate: '' });
</script>
```

### คอมโพเนนต์ Slot ที่กำหนดเอง

เมื่อใช้ slot ที่กำหนดเองสำหรับพื้นที่อินพุต คอมโพเนนต์จะเคารพ prop `placement` ที่คุณกำหนด:

<spr-date-range-picker id="date-range-slot" v-model="liveInputRange" label="วันที่ที่กำหนดเอง (spr-input)">
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
  <spr-date-range-picker id="date-range-slot" v-model="liveInputRange" label="วันที่ที่กำหนดเอง (spr-input)">
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
  const monthNames = [
    'ม.ค.',
    'ก.พ.',
    'มี.ค.',
    'เม.ย.',
    'พ.ค.',
    'มิ.ย.',
    'ก.ค.',
    'ส.ค.',
    'ก.ย.',
    'ต.ค.',
    'พ.ย.',
    'ธ.ค.',
  ];

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

### ตัวเลือกตำแหน่งที่มีอยู่

- `top-start`, `top`, `top-end`
- `bottom-start`, `bottom`, `bottom-end`
- `left-start`, `left`, `left-end`
- `right-start`, `right`, `right-end`

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

<spr-date-range-picker id="date-range-disabled-dates" v-model="dateRangeModel.range11" label="ช่วงวันที่" :disabled-dates="{ from: '02-12-2025', to: '05-15-2025' }" display-helper />

```vue
<template>
  <spr-date-range-picker
    id="date-range-disabled-dates"
    v-model="dateRangeModel"
    label="ช่วงวันที่"
    :disabled-dates="{ from: '02-12-2025', to: '05-15-2025' }"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dateRangeModel = ref({ startDate: '', endDate: '' });
</script>
```

## ช่วงวันที่ที่เลือกไว้ล่วงหน้า

คุณสามารถเลือกช่วงวันที่ล่วงหน้าได้โดยเพียงแค่เพิ่มค่าใน `v-model` ของคุณ ค่าควรอยู่ในรูปแบบ `{ startDate: 'MM-DD-YYYY', endDate: 'MM-DD-YYYY' }`

<spr-date-range-picker id="date-range-pre-selected-range" v-model="dateRangeModel.range12" label="ช่วงวันที่" display-helper />

```vue
<template>
  <spr-date-range-picker
    id="date-range-pre-selected-range"
    v-model="dateRangeModel"
    label="ช่วงวันที่"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dateRangeModel = ref({ startDate: '09-11-2022', endDate: '09-15-2022' });
</script>
```

## กลยุทธ์ Popper

กลยุทธ์ Popper ใช้เป็นหลักเมื่อทำงานกับองค์ประกอบเช่น modal ช่วยควบคุมพฤติกรรมการวางตำแหน่งของ popper กลยุทธ์นี้ช่วยให้แน่ใจว่าองค์ประกอบ popper จะถูกวางตำแหน่งแบบไดนามิกตาม viewport องค์ประกอบอ้างอิง หรือปัจจัยอื่นๆ เช่น การเลื่อนหรือการปรับขนาด

โดยค่าเริ่มต้น กลยุทธ์ Popper จะถูกตั้งค่าเป็น `absolute` ซึ่งจะวางตำแหน่งองค์ประกอบ popper เทียบกับบรรพบุรุษที่วางตำแหน่งใกล้ที่สุด (โดยปกติคือองค์ประกอบ body) อย่างไรก็ตาม คุณสามารถเปลี่ยน `strategy` เป็น `fixed` ซึ่งจะวางตำแหน่งองค์ประกอบ popper เทียบกับ viewport เพื่อให้แน่ใจว่ามันจะคงอยู่ในตำแหน่งแม้ว่าหน้าจะถูกเลื่อน

ส่ง prop `popper-strategy` เพื่อเปลี่ยนพฤติกรรมตำแหน่งของ popper

::: info สำคัญที่ต้องทราบ:
อย่าลืมส่ง prop `wrapperPosition` เพื่อเขียนทับตำแหน่ง `relative` เป็น `initial`
:::

<spr-button tone="success" @click="modalModel = true">เปิด Modal</spr-button>

<spr-modal v-model="modalModel" title="Date Picker กับ Modal">
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
  <spr-button tone="success" @click="modalModel = true">เปิด Modal</spr-button>

  <spr-modal v-model="modalModel" title="Date Picker กับ Modal">
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

คุณยังสามารถใช้ prop `popper-container` เพื่อกำหนดคอนเทนเนอร์ที่กำหนดเองสำหรับองค์ประกอบ popper ซึ่งมีประโยชน์เมื่อคุณต้องการจำกัดบริบทการวางตำแหน่งของ popper ให้อยู่ในองค์ประกอบเฉพาะภายในแอปพลิเคชันของคุณ

เนื่องจาก popper ถูกส่งไปยังคอนเทนเนอร์อื่น prop `popper-width` จะไม่ทำงานตามที่คาดไว้ เพื่อกำหนดความกว้างที่กำหนดเองสำหรับ popper ในกรณีนี้ คุณสามารถใช้สไตล์ที่กำหนดเองหรือคลาส CSS เพื่อกำหนดความกว้างที่ต้องการ

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
      <span>Popper ที่กำหนดเองกับ Dropdown</span>
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
        <span>Popper ที่กำหนดเองกับ Dropdown</span>
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

- `@get-input-value` - ส่งออกช่วงวันที่จริงที่กำลังพิมพ์หรือเลือก
- `@get-date-formats` - ส่งออกรูปแบบวันที่ที่มีอยู่สำหรับช่วงวันที่ที่เลือก
- `@get-month-list` - ส่งออกรายชื่อเดือน
- `@get-year-list` - ส่งออกรายชื่อปี
- `@get-date-errors` - ส่งออกข้อผิดพลาดวันที่ที่มีอยู่
- `@range-change` - ส่งออกเมื่อช่วงวันที่เปลี่ยน

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
      <td>ผูกค่าช่วงวันที่ที่เลือก</td>
      <td>Object</td>
      <td>{ startDate: '', endDate: '' }</td>
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
      <td>disabled</td>
      <td>ปิดใช้งานปฏิทินช่วงวันที่</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>readonly</td>
      <td>ทำให้ปฏิทินช่วงวันที่อ่านได้อย่างเดียว</td>
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
    <tr>
      <td>placement</td>
      <td>เปลี่ยนตำแหน่งของ dropdown popper สำหรับช่องอินพุตเริ่มต้น ใช้ placement ที่กำหนด (เช่น 'top' หรือ 'bottom') และต่อด้วย 'start' หรือ 'end' โดยอัตโนมัติตามช่องที่คลิก สำหรับ slot ที่กำหนดเอง ใช้ค่าการวางตำแหน่งที่กำหนด</td>
      <td>String</td>
      <td>'bottom'</td>
    </tr>
    <tr>
      <td>wrapper-position</td>
      <td>CSS position ของ wrapper ของ date range picker</td>
      <td>String</td>
      <td>relative</td>
    </tr>
    <tr>
      <td>popper-strategy</td>
      <td>กลยุทธ์การวางตำแหน่ง Popper</td>
      <td>String</td>
      <td>absolute</td>
    </tr>
    <tr>
      <td>popper-container</td>
      <td>CSS selector หรือ HTMLElement เพื่อกำหนดคอนเทนเนอร์ที่กำหนดเองสำหรับองค์ประกอบ popper</td>
      <td>String | HTMLElement</td>
      <td>''</td>
    </tr>
  </tbody>
</table>

## การใช้งานในผลิตภัณฑ์

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
const customInputValue = ref('เลือกวันที่');

const formatRange = (range) => {
  const monthNames = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];

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
