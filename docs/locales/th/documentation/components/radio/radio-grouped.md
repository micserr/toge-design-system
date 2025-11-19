---
title: Radio Grouped
descripttion: คอมโพเนนต์ Radio Grouped แสดงกลุ่มปุ่มวิทยุจากอาร์เรย์ของตัวเลือก ซึ่งทำให้การสร้างกลุ่มปุ่มวิทยุง่ายขึ้น
outline: deep
---

# Radio Grouped

คอมโพเนนต์ `Radio Grouped` แสดงกลุ่มปุ่มวิทยุจากอาร์เรย์ของตัวเลือก ซึ่งทำให้การสร้างกลุ่มปุ่มวิทยุง่ายขึ้น โดยมีการสนับสนุนสำหรับการผูกข้อมูลด้วย v-model สถานะที่ปิดการใช้งาน และตัวช่วยแสดงข้อมูล

## การใช้งานพื้นฐาน

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

## ค่าที่เลือกไว้ล่วงหน้า

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

## สถานะที่ปิดการใช้งาน

เพิ่มแอตทริบิวต์ `disabled` เพื่อปิดการใช้งานตัวเลือกทั้งหมด หรือตั้งค่า `disabled: true` ในตัวเลือกแต่ละรายการ

<div class="spr-flex spr-flex-col spr-items-start spr-gap-4">
  <div>
    <p class="spr-text-sm spr-font-semibold spr-mb-2">ปิดการใช้งานทั้งหมด</p>
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
    <p class="spr-text-sm spr-font-semibold spr-mb-2">ปิดการใช้งานบางส่วน</p>
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

## ตัวช่วยแสดงข้อมูล

แสดงข้อความช่วยเหลือหรือข้อความข้อผิดพลาดด้านล่างกลุ่มตัวเลือกวิทยุโดยใช้ props `display-helper`, `helper-text`, และ `error`

<div class="spr-flex spr-flex-col spr-items-start spr-gap-4">
  <div>
    <p class="spr-text-sm spr-font-semibold spr-mb-2">ข้อความตัวช่วย</p>
    <spr-radio-grouped
      id="grouped-radio5"
      v-model="radioModel.grouped5"
      name="grouped_name5"
      :options="[
        { text: 'Option 1', value: 'value1' },
        { text: 'Option 2', value: 'value2' },
      ]"
      display-helper
      helper-text="เลือกหนึ่งในตัวเลือกที่มีอยู่"
    />
  </div>
  <div>
    <p class="spr-text-sm spr-font-semibold spr-mb-2">สถานะข้อผิดพลาด</p>
    <spr-radio-grouped
      id="grouped-radio5b"
      v-model="radioModel.grouped5b"
      name="grouped_name5b"
      :options="[
        { text: 'Option 1', value: 'value1' },
        { text: 'Option 2', value: 'value2' },
      ]"
      :error="true"
      helper-text="จำเป็นต้องกรอกข้อมูลในช่องนี้"
    />
  </div>
  <div>
    <p class="spr-text-sm spr-font-semibold spr-mb-2">สถานะข้อผิดพลาดพร้อมไอคอน</p>
    <spr-radio-grouped
      id="grouped-radio5c"
      v-model="radioModel.grouped5c"
      name="grouped_name5c"
      :options="[
        { text: 'Option 1', value: 'value1' },
        { text: 'Option 2', value: 'value2' },
      ]"
      :error="true"
      helper-icon="ph:info-fill"
      helper-text="จำเป็นต้องกรอกข้อมูลในช่องนี้"
    />
  </div>
</div>

```vue
<template>
  <div class="spr-flex spr-flex-col spr-gap-6">
    <!-- ข้อความตัวช่วย -->
    <spr-radio-grouped
      id="grouped-radio"
      v-model="selectedOption"
      name="grouped_options"
      :options="[
        { text: 'Option 1', value: 'value1' },
        { text: 'Option 2', value: 'value2' },
      ]"
      display-helper
      helper-text="เลือกหนึ่งในตัวเลือกที่มีอยู่"
    />

    <!-- สถานะข้อผิดพลาด -->
    <spr-radio-grouped
      id="grouped-radio-error"
      v-model="selectedOption"
      name="grouped_options_error"
      :options="[
        { text: 'Option 1', value: 'value1' },
        { text: 'Option 2', value: 'value2' },
      ]"
      :error="true"
      helper-text="จำเป็นต้องกรอกข้อมูลในช่องนี้"
    />

    <!-- สถานะข้อผิดพลาดพร้อมไอคอน -->
    <spr-radio-grouped
      id="grouped-radio-error-icon"
      v-model="selectedOption"
      name="grouped_options_error_icon"
      :options="[
        { text: 'Option 1', value: 'value1' },
        { text: 'Option 2', value: 'value2' },
      ]"
      :error="true"
      helper-icon="ph:info-fill"
      helper-text="จำเป็นต้องกรอกข้อมูลในช่องนี้"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedOption = ref('');
</script>
```

## การจัดแนวแนวนอน

ควบคุมการจัดแนวแนวนอนของกลุ่มวิทยุโดยใช้ prop `horizontal-align` ที่มีค่า: `left`, `center`, หรือ `right`

<div class="spr-flex spr-flex-col spr-items-start spr-gap-2">
  <p class="spr-text-sm spr-font-semibold">จัดแนวซ้าย</p>
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
  <p class="spr-text-sm spr-font-semibold">จัดแนวกึ่งกลาง</p>
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
  <p class="spr-text-sm spr-font-semibold">จัดแนวขวา</p>
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

## ข้อมูลอ้างอิง API

### Props

<table>
  <thead>
    <tr>
      <th>ชื่อ</th>
      <th>คำอธิบาย</th>
      <th>ประเภท</th>
      <th>ค่าเริ่มต้น</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>id</code>
      </td>
      <td>ตัวระบุเฉพาะสำหรับกลุ่มวิทยุ ใช้เป็นฐานสำหรับรหัสปุ่มวิทยุแต่ละปุ่ม (เช่น <code>id-0</code>, <code>id-1</code>) จำเป็นต้องมีเพื่อการเข้าถึง</td>
      <td>string</td>
      <td><code>Required</code></td>
    </tr>
    <tr>
      <td>
        <code>model-value</code>
      </td>
      <td>ค่าที่เลือกไว้ในปัจจุบันที่ใช้กับ v-model สำหรับการผูกข้อมูลแบบสองทาง เมื่อค่านี้ตรงกับ <code>value</code> ของตัวเลือก ตัวเลือกนั้นจะถูกเลือก</td>
      <td>string | number | boolean</td>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <td>
        <code>name</code>
      </td>
      <td>แอตทริบิวต์ชื่อสำหรับองค์ประกอบการป้อนข้อมูลวิทยุทั้งหมดในกลุ่ม วิทยุทั้งหมดในกลุ่มจะใช้ชื่อนี้เพื่อให้แน่ใจว่าจะเลือกได้เพียงแต่ชื่อเดียวเท่านั้น</td>
      <td>string</td>
      <td><code>Required</code></td>
    </tr>
    <tr>
      <td>
        <code>options</code>
      </td>
      <td>อาร์เรย์ของตัวเลือกวิทยุ ตัวเลือกแต่ละรายการควรมีคุณสมบัติ <code>text</code> (ป้ายกำกับการแสดงผล) และ <code>value</code> (ค่าตัวเลือก) ตัวเลือกอาจมีคุณสมบัติ <code>disabled</code> ได้</td>
      <td>RadioOption[]</td>
      <td><code>[]</code></td>
    </tr>
    <tr>
      <td>
        <code>disabled</code>
      </td>
      <td>เมื่อตั้งค่าเป็น <code>true</code> ปุ่มวิทยุทั้งหมดในกลุ่มจะกลายเป็นแบบไม่โต้ตอบและปรากฏเป็นสีเทา ตัวเลือกแต่ละรายการสามารถยังคงปิดการใช้งานโดยใช้คุณสมบัติ <code>disabled</code> ในวัตถุตัวเลือก</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>horizontal-align</code>
      </td>
      <td>ควบคุมการจัดแนวแนวนอนของตัวเลือกวิทยุ ยอมรับค่า: `left`, `center`, หรือ `right`</td>
      <td>'left' | 'center' | 'right'</td>
      <td><code>'left'</code></td>
    </tr>
    <tr>
      <td>
        <code>display-helper</code>
      </td>
      <td>เมื่อตั้งค่าเป็น <code>true</code> จะแสดงข้อความตัวช่วยด้านล่างตัวเลือกกลุ่มวิทยุ</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>helper-text</code>
      </td>
      <td>ข้อความตัวช่วยที่จะแสดงด้านล่างกลุ่มวิทยุเมื่อ <code>display-helper</code> เป็น <code>true</code> ให้บริบทเพิ่มเติมหรือคำแนะนำแก่ผู้ใช้</td>
      <td>string</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>
        <code>helper-icon</code>
      </td>
      <td>ชื่อไอคอนที่จะแสดงข้างๆ ข้อความตัวช่วย ยอมรับชื่อไอคอนใดๆ จากไลบรารีไอคอน</td>
      <td>string</td>
      <td><code>null</code></td>
    </tr>
    <tr>
      <td>
        <code>error</code>
      </td>
      <td>เมื่อตั้งค่าเป็น <code>true</code> จะแสดงกลุ่มวิทยุในสถานะข้อผิดพลาดโดยใช้ข้อความสีแดงสำหรับข้อความตัวช่วย</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th class="spr-min-w-[180px]">ชื่อ</th>
      <th>คำอธิบาย</th>
      <th>พารามิเตอร์</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>update:modelValue</code>
      </td>
      <td>ปล่อยออกมาเมื่อเลือกตัวเลือกวิทยุ เหตุการณ์นี้ใช้เพื่อให้การผูกข้อมูล v-model ทำงานได้อย่างถูกต้อง</td>
      <td>
        <code>(value: string | number | boolean)</code> - ค่าของตัวเลือกที่เลือก
      </td>
    </tr>
  </tbody>
</table>

### RadioOption Interface

props `options` ต้องการอาร์เรย์ของอ็อบเจ็กต์ที่มีโครงสร้างต่อไปนี้:

```typescript
interface RadioOption {
  text: string; // ข้อความแสดงตัวเลือก
  value: string | number | boolean; // ค่าของตัวเลือก
  disabled?: boolean; // ตัวเลือก: ปิดการใช้งานตัวเลือกแต่ละรายการ
}
```

## การใช้งานผลิตภัณฑ์

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
</div>

<script lang="ts" setup>
import { ref } from "vue";

import SprRadioGrouped from "@/components/radio-grouped/radio-grouped.vue";
import SprLogo from "@/components/logo/logo.vue";

const radioModel = ref({
  grouped1: '',
  grouped2: 'value2',
  grouped3: '',
  grouped4: '',
  grouped5: '',
  grouped5b: '',
  grouped5c: '',
  grouped6: '',
  grouped7: '',
  grouped8: '',
});
</script>
