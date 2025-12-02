---
title: Month Year Picker
description: คอมโพเนนต์ Month Year Picker ช่วยให้ผู้ใช้เลือกเดือนและปีจากอินเทอร์เฟซแบบป๊อปอัป พร้อมการรองรับรูปแบบต่างๆ และตัวเลือกในการปรับแต่ง
outline: deep
---

# Month Year Picker

Month year picker ช่วยให้ผู้ใช้เลือกเดือนและปีจากอินเทอร์เฟซแบบปฏิทิน

## การใช้งานพื้นฐาน

<spr-month-year-picker :id="monthYearPickerId.monthYear1" class="[&>p]:spr-m-0" v-model="monthYearPickerModel.monthYear1" display-helper />

`ค่าคุณสมบัติ:` <span class="spr-text-xs">{{monthYearPickerModel.monthYear1}}</span>

```vue
<template>
  <spr-month-year-picker id="monthyearpicker" v-model="monthYearPickerModel" display-helper />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const monthYearPickerModel = ref('');
</script>
```

## เพิ่มป้ายกำกับ

<spr-month-year-picker :id="monthYearPickerId.monthYear2" class="[&>p]:spr-m-0" v-model="monthYearPickerModel.monthYear2" label="เลือกเดือนและปี" display-helper format="YYYY-MM" />

ค่า: {{ monthYearPickerModel.monthYear2 }}

`ค่าคุณสมบัติ:` <span class="spr-text-xs">{{monthYearPickerModel.monthYear2}}</span>

```vue
<template>
  <spr-month-year-picker id="monthyearpicker" v-model="monthYearPickerModel" label="เลือกเดือนและปี" display-helper format="MM-YYYY" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const monthYearPickerModel = ref('');
</script>
```

## คอมโพเนนต์ที่กำหนดเอง

คุณสามารถใช้ slot เริ่มต้นเพื่อใช้คอมโพเนนต์ใดก็ได้เป็นอินพุตของตัวเลือกเดือน-ปี หรือเพื่อเปลี่ยนรูปแบบการแสดงผลโดยไม่เปลี่ยนรูปแบบของโมเดลข้อมูล

<div>
  <spr-month-year-picker
    id="monthyearpicker"
    v-model="monthYearPickerModel.monthYear30"
    label="อินพุตตัวเลือกเดือน-ปีที่กำหนดเอง"
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
    label="อินพุตตัวเลือกเดือน-ปีที่กำหนดเอง"
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

## ความกว้างที่กำหนดเอง

คุณสามารถกำหนดความกว้างของตัวเลือกเดือน-ปีด้วยตนเองได้โดยส่ง prop `width`

<div>
  <spr-month-year-picker 
    :id="monthYearPickerId.monthYear3" 
    class="[&>p]:spr-m-0" 
    v-model="monthYearPickerModel.monthYear3" 
    label="ตัวเลือกเดือน-ปี" 
    width="400px" 
    display-helper
  />
</div>

`ค่าคุณสมบัติ:` <span class="spr-text-xs">{{monthYearPickerModel.monthYear3}}</span>

```vue
<template>
  <spr-month-year-picker id="monthyearpicker" v-model="monthYearPickerModel" label="ตัวเลือกเดือน-ปี" width="400px" display-helper />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const monthYearPickerModel = ref('');
</script>
```

## รูปแบบวันที่

คุณสามารถระบุรูปแบบของเดือน-ปีได้โดยส่ง prop `format` รูปแบบเริ่มต้นคือ `MM-YYYY` คอมโพเนนต์จะคืนค่าวันที่ในรูปแบบที่ระบุ

<spr-month-year-picker :id="monthYearPickerId.monthYear28" class="[&>p]:spr-m-0" v-model="monthYearPickerModel.monthYear28" label="ตัวเลือกเดือน-ปี" display-helper format="YYYY-MM" />

ค่า: <code>{{ monthYearPickerModel.monthYear28 }}</code>

```vue
<template>
  <spr-month-year-picker 
    id="monthyearpicker" 
    v-model="monthYearPickerModel" 
    label="เดือน-ปีในรูปแบบ YYYY-MM" 
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
    label="เดือน-ปีในรูปแบบ MMMM YYYY"
    format="MMMM YYYY"
    display-helper
  />
</div>

ค่า: <code>{{ monthYearPickerModel.monthYear29 }}</code>

```vue
<template>
  <spr-month-year-picker
    id="monthyearpicker"
    v-model="monthYearPickerModel"
    label="เดือน-ปีในรูปแบบ MMMM YYYY"
    format="MMMM YYYY"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const monthYearPickerModel = ref('');
</script>
```

## ปิดการใช้งาน

เพิ่ม prop `disabled` เพื่อปิดการใช้งานตัวเลือกเดือน-ปี

<spr-month-year-picker :id="monthYearPickerId.monthYear4" class="[&>p]:spr-m-0" v-model="monthYearPickerModel.monthYear4" label="ตัวเลือกเดือน-ปี" display-helper disabled />

```vue
<template>
  <spr-month-year-picker id="monthyearpicker" v-model="monthYearPickerModel" label="ตัวเลือกเดือน-ปี" display-helper disabled />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const monthYearPickerModel = ref('');
</script>
```

## อ่านอย่างเดียว

เพิ่ม prop `readonly` เพื่อทำให้ตัวเลือกเดือน-ปีอ่านได้อย่างเดียว

<spr-month-year-picker :id="monthYearPickerId.monthYear5" class="[&>p]:spr-m-0" v-model="monthYearPickerModel.monthYear5" label="ตัวเลือกเดือน-ปี" display-helper readonly />

```vue
<template>
  <spr-month-year-picker id="monthyearpicker" v-model="monthYearPickerModel" label="ตัวเลือกเดือน-ปี" display-helper readonly />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const monthYearPickerModel = ref('10-2025');
</script>
```

## ข้อความช่วยเหลือ

ข้อความช่วยเหลือคือป้ายข้อความที่แสดงด้านล่างฟิลด์อินพุต เพื่อให้ข้อมูลเพิ่มเติม เช่น คำแนะนำ เคล็ดลับการจัดรูปแบบ หรือคำติชมการตรวจสอบความถูกต้อง

ในการแสดงข้อความช่วยเหลือ ให้ตั้งค่า prop `display-helper` เป็น true และเพิ่ม prop `helper-text` พร้อมเนื้อหาข้อความ คุณยังสามารถใส่ไอคอนได้โดยใช้ prop `helper-icon` ซึ่งใช้ไลบรารีไอคอน <a href="https://icon-sets.iconify.design/" target="_blank">Iconify</a>

### การใช้ข้อความช่วยเหลือโดยตรงผ่าน Props

<div class="spr-mt-3">
  <spr-month-year-picker 
    :id="monthYearPickerId.monthYear6"
    class="[&>p]:spr-m-0" 
    v-model="monthYearPickerModel.monthYear6" 
    label="ตัวเลือกเดือน-ปี" 
    helper-text="นี่คือข้อความช่วยเหลือ" 
    display-helper 
  />

`ค่าคุณสมบัติ:` <span class="spr-text-xs">{{monthYearPickerModel.monthYear6}}</span>

</div>

```vue
<template>
  <spr-month-year-picker
    id="monthyearpicker"
    class="[&>p]:spr-m-0"
    v-model="monthYearPickerModel"
    label="ตัวเลือกเดือน-ปี"
    helper-icon="ph:warning-circle-fill"
    helper-text="นี่คือข้อความช่วยเหลือ"
    display-helper
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

const monthYearPickerModel = ref('');
</script>
```

### การใช้ Slot ข้อความช่วยเหลือ

<div class="spr-mt-3">
  <spr-month-year-picker 
    :id="monthYearPickerId.monthYear7"
    class="[&>p]:spr-m-0" 
    v-model="monthYearPickerModel.monthYear7" 
    label="ตัวเลือกเดือน-ปี" 
    display-helper 
  >
    <template #helperMessage>
      <span>นี่คือข้อความช่วยเหลือ</span>
    </template>
  </spr-month-year-picker>
</div>

```vue
<template>
  <spr-month-year-picker id="monthyearpicker" class="[&>p]:spr-m-0" v-model="monthYearPickerModel" label="ตัวเลือกเดือน-ปี" display-helper>
    <template #helperMessage>
      <span>นี่คือข้อความช่วยเหลือ</span>
    </template>
  </spr-month-year-picker>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

const monthYearPickerModel = ref('');
</script>
```

## สถานะข้อผิดพลาด

เพื่อจัดการสถานะข้อผิดพลาด ให้เพิ่ม prop `error` ลงในตัวเลือกเดือน-ปี คุณยังสามารถใส่ไอคอนได้โดยใช้ prop `helper-icon` ซึ่งใช้ไลบรารีไอคอน <a href="https://icon-sets.iconify.design/" target="_blank">Iconify</a>

### การใช้ข้อความช่วยเหลือโดยตรงผ่าน Props

<div class="spr-mt-3">
  <spr-month-year-picker 
    :id="monthYearPickerId.monthYear8"
    class="[&>p]:spr-m-0" 
    v-model="monthYearPickerModel.monthYear8" 
    label="ตัวเลือกเดือน-ปี" 
    helper-icon="ph:warning-circle-fill"
    helper-text="นี่คือข้อความช่วยเหลือ" 
    display-helper 
    error
  />
</div>

```vue
<template>
  <spr-month-year-picker
    id="monthyearpicker"
    v-model="monthYearPickerModel"
    label="ตัวเลือกเดือน-ปี"
    helper-icon="ph:warning-circle-fill"
    helper-text="นี่คือข้อความช่วยเหลือ"
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

### การใช้ Slot ข้อความช่วยเหลือ

<div class="spr-mt-3">
  <spr-month-year-picker 
    :id="monthYearPickerId.monthYear9"
    class="[&>p]:spr-m-0" 
    v-model="monthYearPickerModel.monthYear9" 
    label="ตัวเลือกเดือน-ปี" 
    display-helper 
    error
  >
    <template #helperMessage>
      <Icon icon="ph:warning-circle-fill" width="20px" height="20px" />
      <span>นี่คือข้อความช่วยเหลือ</span>
    </template>
  </spr-month-year-picker>
</div>

```vue
<template>
  <spr-month-year-picker id="monthyearpicker" v-model="monthYearPickerModel" label="ตัวเลือกเดือน-ปี" display-helper error>
    <template #helperMessage>
      <Icon icon="ph:warning-circle-fill" width="20px" height="20px" />
      <span>นี่คือข้อความช่วยเหลือ</span>
    </template>
  </spr-month-year-picker>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

const monthYearPickerModel = ref('');
</script>
```

## กำหนดปีปัจจุบันด้วยตนเอง

คุณสามารถกำหนดปีปัจจุบันที่จะแสดงในตัวเลือกได้ด้วยตนเอง ปีปัจจุบันเริ่มต้นคือปีปัจจุบัน ส่ง prop `current-year` เพื่อกำหนดปีปัจจุบัน

<div>
  <spr-month-year-picker 
    :id="monthYearPickerId.monthYear10" 
    class="[&>p]:spr-m-0" 
    v-model="monthYearPickerModel.monthYear10" 
    label="ตัวเลือกเดือน-ปี" 
    current-year="2000" 
    display-helper
  />
</div>

```vue
<template>
  <spr-month-year-picker id="monthyearpicker" v-model="monthYearPickerModel" label="ตัวเลือกเดือน-ปี" current-year="2000" display-helper />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

const monthYearPickerModel = ref('');
</script>
```

## กำหนดปีขั้นต่ำ-สูงสุดด้วยตนเอง

คุณยังสามารถกำหนดปีขั้นต่ำและสูงสุดที่จะแสดงในตัวเลือกได้ด้วยตนเอง ปีขั้นต่ำเริ่มต้นตั้งไว้ที่ `1900` และปีสูงสุดคือปีปัจจุบัน

<div>
  <spr-month-year-picker 
    :id="monthYearPickerId.monthYear11"
    class="[&>p]:spr-m-0"
    v-model="monthYearPickerModel.monthYear11" 
    label="ตัวเลือกเดือน-ปี" 
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
    label="ตัวเลือกเดือน-ปี"
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

## เดือน-ปีที่เลือกไว้ล่วงหน้า

คุณสามารถเลือกเดือน-ปีล่วงหน้าได้โดยเพียงแค่เพิ่มค่าใน `v-model` ของคุณ ค่าควรอยู่ในรูปแบบ `MM-YYYY` หรือรูปแบบที่คุณระบุ

<spr-month-year-picker :id="monthYearPickerId.monthYear22" class="[&>p]:spr-m-0" v-model="monthYearPickerModel.monthYear22" label="ตัวเลือกเดือน-ปี" display-helper />

```vue
<template>
  <spr-month-year-picker id="monthyearpicker" v-model="monthYearPickerModel" label="ตัวเลือกเดือน-ปี" display-helper />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const monthYearPickerModel = ref('09-1997');
</script>
```

## รับรูปแบบวันที่

เพื่อรับรูปแบบวันที่ คุณสามารถใช้ emits `@get-date-formats` เมื่อเดือน-ปีถูกต้อง มันจะคืนค่ารูปแบบที่แตกต่างกัน

<div class="spr-my-3 spr-p-4 spr-bg-blue-100">
  <h5>ผลลัพธ์:</h5>
  <pre>{{ JSON.stringify(monthYearDateFormats, null, 2) }}</pre>
</div>

<div>
  <spr-month-year-picker 
    :id="monthYearPickerId.monthYear23" 
    class="[&>p]:spr-m-0" 
    v-model="monthYearPickerModel.monthYear23" 
    label="ตัวเลือกเดือน-ปี" 
    @get-date-formats="getMonthYearDateFormats" 
    display-helper
  />
</div>

```vue
<template>
  <spr-month-year-picker
    id="monthyearpicker"
    v-model="monthYearPickerModel"
    label="ตัวเลือกเดือน-ปี"
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

## รับรายการเดือน

เพื่อรับรายการเดือนที่ใช้ คุณสามารถใช้ emits `@get-month-list`

<div>
  <spr-month-year-picker 
    :id="monthYearPickerId.monthYear24" 
    class="[&>p]:spr-m-0" 
    v-model="monthYearPickerModel.monthYear24" 
    label="ตัวเลือกเดือน-ปี" 
    @get-month-list="getMonthYearMonthList" 
    display-helper
  />
</div>

<div class="spr-mt-3 spr-p-4 spr-bg-blue-100">
  <h5>ผลลัพธ์:</h5>
  <pre>{{ JSON.stringify(monthYearMonthLists, null, 2) }}</pre>
</div>

```vue
<template>
  <spr-month-year-picker
    id="monthyearpicker"
    v-model="monthYearPickerModel"
    label="ตัวเลือกเดือน-ปี"
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

## รับรายการปี

เพื่อรับรายการปีที่ใช้ คุณสามารถใช้ emits `@get-year-list`

<div>
  <spr-month-year-picker 
    :id="monthYearPickerId.monthYear25" 
    class="[&>p]:spr-m-0" 
    v-model="monthYearPickerModel.monthYear25" 
    label="ตัวเลือกเดือน-ปี" 
    @get-year-list="getMonthYearYearList" 
    display-helper
  />
</div>

<div class="spr-mt-3 spr-p-4 spr-bg-blue-100">
  <h5>ผลลัพธ์:</h5>
  <p>{{ monthYearYearLists }}</p>
</div>

```vue
<template>
  <spr-month-year-picker
    id="monthyearpicker"
    v-model="monthYearPickerModel"
    label="ตัวเลือกเดือน-ปี"
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

## การจัดการข้อผิดพลาด

เนื่องจากมีการจัดการข้อผิดพลาดที่มีอยู่สำหรับตัวเลือกเดือน-ปี คุณสามารถใช้ emit `@get-date-errors` เพื่อรับรายการการตรวจสอบข้อผิดพลาดระดับคอมโพเนนต์

รายการการตรวจสอบข้อผิดพลาดระดับคอมโพเนนต์:

<ul>
  <li>ตรวจสอบเดือน-ปีว่าถูกต้อง MM/YYYY</li>
  <li>ตรวจสอบปีว่าอยู่ระหว่างปีขั้นต่ำและสูงสุด</li>
</ul>

<div class="spr-my-3 spr-p-4 spr-bg-blue-100">
  <h5>ผลลัพธ์:</h5>
  <pre>{{ monthYearDateErrors }}</pre>
</div>

<div>
  <spr-month-year-picker 
    :id="monthYearPickerId.monthYear26" 
    class="[&>p]:spr-m-0" 
    v-model="monthYearPickerModel.monthYear26" 
    label="ตัวเลือกเดือน-ปี" 
    @get-date-errors="getMonthYearDateErrors" 
    display-helper
  />
</div>

```vue
<template>
  <spr-month-year-picker
    id="monthyearpicker"
    v-model="monthYearPickerModel"
    label="ตัวเลือกเดือน-ปี"
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

## กลยุทธ์ Popper

กลยุทธ์ Popper ใช้หลักๆ เมื่อทำงานกับองค์ประกอบเช่น modal ช่วยควบคุมพฤติกรรมการวางตำแหน่งของ popper กลยุทธ์จะทำให้แน่ใจว่าองค์ประกอบ popper ถูกวางตำแหน่งแบบไดนามิกตามวิวพอร์ต องค์ประกอบอ้างอิง หรือปัจจัยอื่นๆ เช่น การเลื่อนหรือการปรับขนาด

โดยค่าเริ่มต้น กลยุทธ์ Popper ถูกตั้งเป็น `absolute` ซึ่งวางตำแหน่งองค์ประกอบ popper สัมพันธ์กับบรรพบุรุษที่วางตำแหน่งที่ใกล้ที่สุด (มักเป็นองค์ประกอบ body) อย่างไรก็ตาม คุณสามารถเปลี่ยน `strategy` เป็น `fixed` ซึ่งวางตำแหน่งองค์ประกอบ popper สัมพันธ์กับวิวพอร์ต ทำให้มั่นใจได้ว่ามันจะอยู่ในตำแหน่งเดิมแม้เมื่อเลื่อนหน้า

ส่ง prop `popper-strategy` เพื่อเปลี่ยนพฤติกรรมตำแหน่งของ popper

::: info สิ่งสำคัญที่ต้องทราบ:
อย่าลืมส่ง prop `wrapperPosition` เพื่อเขียนทับตำแหน่ง `relative` เป็น `initial`
:::

<spr-button tone="success" @click="modalModelMonthYear = true">เปิด Modal</spr-button>

<spr-modal v-model="modalModelMonthYear" title="ตัวเลือกเดือน-ปีกับ Modal">
  <spr-month-year-picker 
    :id="monthYearPickerId.monthYear27"
    class="[&>p]:spr-m-0" 
    v-model="monthYearPickerModel.monthYear27" 
    label="ตัวเลือกเดือน-ปี" 
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
  <spr-button tone="success" @click="modalModel = true">เปิด Modal</spr-button>

  <spr-modal v-model="modalModel" title="ตัวเลือกเดือน-ปีกับ Modal">
    <spr-month-year-picker
      id="monthyearpicker"
      v-model="monthYearPickerModel"
      label="ตัวเลือกเดือน-ปี"
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

คุณยังสามารถใช้ prop `popper-container` เพื่อระบุคอนเทนเนอร์ที่กำหนดเองสำหรับองค์ประกอบ popper ซึ่งมีประโยชน์เมื่อคุณต้องการจำกัดบริบทการวางตำแหน่งของ popper ให้เฉพาะองค์ประกอบที่เฉพาะเจาะจงภายในแอปพลิเคชันของคุณ

เนื่องจาก popper กำลังถูก teleport ไปยังคอนเทนเนอร์อื่น prop `popper-width` จะไม่ทำงานตามที่คาดหวัง เพื่อกำหนดความกว้างที่กำหนดเองสำหรับ popper ในกรณีนี้ คุณสามารถใช้สไตล์ที่กำหนดเองหรือคลาส CSS เพื่อกำหนดความกว้างที่ต้องการ

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
      <span>Popper ที่กำหนดเองกับ Dropdown</span>
      <Icon icon="ph:caret-down" />
    </spr-button>
    <template #popper>
      <spr-month-year-picker
        :id="monthYearPickerId.monthYear27"
        class="[&>p]:spr-m-0" 
        v-model="monthYearPickerModel.monthYear27" 
        label="ตัวเลือกเดือน-ปี" 
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
        <span>Popper ที่กำหนดเองกับ Dropdown</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
      <template #popper>
        <spr-month-year-picker
          id="monthyearpicker"
          v-model="monthYearPickerModel"
          label="ตัวเลือกเดือน-ปี"
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

## การดำเนินการ

<div class="spr-space-y-2">
  <spr-button tone="success" @click="clearMonthYear()">ล้างเดือน-ปี</spr-button>
  <spr-month-year-picker 
    ref="monthYearPickerRef"
    :id="monthYearPickerId.monthYear31" 
    v-model="monthYearPickerModel.monthYear31" 
    label="ตัวเลือกเดือน-ปี"
  />
</div>

```vue
<template>
  <div class="spr-space-y-2">
    <spr-button tone="success" @click="clearMonthYear()">ล้างเดือน-ปี</spr-button>
    <spr-month-year-picker ref="monthYearPickerRef" id="monthyearpicker" v-model="monthYearPickerModel" label="ตัวเลือกเดือน-ปี" />
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

## การอ้างอิง API

### Props

<table>
  <thead>
    <tr>
      <th>คุณสมบัติ</th>
      <th>คำอธิบาย</th>
      <th>ชนิด</th>
      <th>ค่าเริ่มต้น</th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>id</td>
      <td>จำเป็นต้องใช้เพื่อผูก popper ภายในตัวเลือกเดือน-ปี</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>v-model</td>
      <td>ผูกค่าเดือน-ปีที่เลือก</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>label</td>
      <td>ข้อความป้ายกำกับสำหรับฟิลด์อินพุต</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>width</td>
      <td>กำหนดความกว้างของอินพุต</td>
      <td>String</td>
      <td>100%</td>
    </tr>
    <tr>
      <td>format</td>
      <td>รูปแบบสำหรับเดือน-ปีที่เลือก (เช่น 'MM-YYYY', 'YYYY-MM', 'MMMM YYYY')</td>
      <td>String</td>
      <td>MM-YYYY</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>ปิดการใช้งานตัวเลือกเดือน-ปี</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>readonly</td>
      <td>ทำให้ตัวเลือกเดือน-ปีอ่านได้อย่างเดียว</td>
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
      <td>กำหนดปีปัจจุบันในมุมมองตัวเลือก</td>
      <td>String</td>
      <td>{{ new Date().getFullYear() }}</td>
    </tr>
    <tr>
      <td>min-max-year</td>
      <td>กำหนดปีขั้นต่ำและสูงสุดในตัวเลือก</td>
      <td>Object</td>
      <td>{ min: 1900, max: {{ new Date().getFullYear() }} }</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>เปลี่ยนตำแหน่งของ dropdown popper (เช่น `bottom`, `top`, `left`, `right`)</td>
      <td>string</td>
      <td>`bottom`</td>
    </tr>
    <tr>
      <td>wrapper-position</td>
      <td>ตำแหน่ง CSS ของ wrapper ตัวเลือกเดือน-ปี</td>
      <td>String</td>
      <td>relative</td>
    </tr>
    <tr>
      <td>popper-strategy</td>
      <td>กลยุทธ์การวางตำแหน่ง Popper ('absolute' หรือ 'fixed')</td>
      <td>String</td>
      <td><code>absolute</code></td>
    </tr>
    <tr>
      <td>popper-container</td>
      <td>ตัวเลือก CSS หรือ HTMLElement เพื่อระบุคอนเทนเนอร์ที่กำหนดเองสำหรับองค์ประกอบ popper</td>
      <td>String | HTMLElement</td>
      <td>''</td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th>เหตุการณ์</th>
      <th>คำอธิบาย</th>
      <th>พารามิเตอร์</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>@update:model-value</td>
      <td>ส่งออกเมื่อค่าเดือน-ปีที่เลือกเปลี่ยนแปลง</td>
      <td>String (เดือน-ปีที่จัดรูปแบบ)</td>
    </tr>
    <tr>
      <td>@get-input-value</td>
      <td>ส่งออกเดือน-ปีจริงที่กำลังพิมพ์หรือเลือกในตัวเลือก</td>
      <td>String | null</td>
    </tr>
    <tr>
      <td>@get-date-formats</td>
      <td>ส่งออกรูปแบบวันที่ที่มีให้เมื่อเลือกเดือน-ปีที่ถูกต้อง</td>
      <td>Object (สตริงรูปแบบเดือน-ปีต่างๆ)</td>
    </tr>
    <tr>
      <td>@get-month-list</td>
      <td>ส่งออกรายการเดือนที่มีในคอมโพเนนต์</td>
      <td>Array (ออบเจ็กต์เดือน)</td>
    </tr>
    <tr>
      <td>@get-year-list</td>
      <td>ส่งออกรายการปีที่มีในคอมโพเนนต์</td>
      <td>Array (ตัวเลขปี)</td>
    </tr>
    <tr>
      <td>@get-date-errors</td>
      <td>ส่งออกข้อผิดพลาดการตรวจสอบจากตัวเลือกเดือน-ปี</td>
      <td>Array (ออบเจ็กต์ข้อผิดพลาดที่มี title และ message)</td>
    </tr>
  </tbody>
</table>

## การใช้งานผลิตภัณฑ์

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

