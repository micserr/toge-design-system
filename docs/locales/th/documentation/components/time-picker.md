---
title: Time Picker
descripttion: คอมโพเนนต์ Time Picker ให้อินเทอร์เฟซที่ใช้งานง่ายสำหรับผู้ใช้ในการเลือกเวลาที่กำหนดจากรายการตัวเลือกแบบดรอปดาวน์ ออกแบบมาให้มีความยืดหยุ่นและเป็นมิตรกับผู้ใช้ รองรับทั้งรูปแบบ 12 ชั่วโมงและ 24 ชั่วโมงพร้อมช่วงเวลาที่ปรับแต่งได้
outline: deep
---

# Time Picker

คอมโพเนนต์ Time Picker ให้อินเทอร์เฟซที่ใช้งานง่ายสำหรับผู้ใช้ในการเลือกเวลาที่กำหนดจากรายการตัวเลือกแบบดรอปดาวน์ ออกแบบมาให้มีความยืดหยุ่นและเป็นมิตรกับผู้ใช้ รองรับทั้งรูปแบบ 12 ชั่วโมงและ 24 ชั่วโมงพร้อมช่วงเวลาที่ปรับแต่งได้

## ภาพรวม

คอมโพเนนต์ Time Picker ให้บริการ:

- เลือกได้ระหว่างรูปแบบ 12 ชั่วโมง (AM/PM) และ 24 ชั่วโมง
- ช่วงเวลาที่ปรับแต่งได้ (เช่น ทุก 15, 30, หรือ 60 นาที)
- ฟิลด์อินพุตเสริมสำหรับการป้อนเวลาทางตรงหรือการเลือกแบบดรอปดาวน์เท่านั้น
- บูรณาการเต็มรูปแบบกับระบบตรวจสอบความถูกต้องของฟอร์ม
- เลย์เอาต์ที่ตอบสนองพร้อมรองรับความกว้างเต็ม
- คุณสมบัติการเข้าถึงสำหรับการนำทางด้วยแป้นพิมพ์

## คุณสมบัติหลัก

<ul class="spr-ml-4">
  <li class="spr-mb-2">
    <strong>ตัวเลือกรูปแบบเวลา:</strong>
    <span>
      เลือกได้ระหว่างรูปแบบ 12 ชั่วโมงพร้อมตัวบ่งชี้ AM/PM หรือรูปแบบ 24 ชั่วโมงโดยใช้ prop <code>format</code>
    </span>
  </li>
  <li class="spr-mb-2">
    <strong>ช่วงเวลาที่ปรับแต่งได้:</strong>
    <span>
      กำหนดค่าการเพิ่มขึ้นของเวลา (เป็นนาที) ระหว่างตัวเลือกโดยใช้ prop <code>interval</code>
    </span>
  </li>
  <li class="spr-mb-2">
    <strong>การควบคุมอินพุต:</strong>
    <span>
      เปิดใช้งานหรือปิดใช้งานการป้อนเวลาด้วยตนเองด้วย prop <code>disableTyping</code> เพื่อจำกัดการเลือกให้เฉพาะตัวเลือกแบบดรอปดาวน์เท่านั้น
    </span>
  </li>
  <li class="spr-mb-2">
    <strong>การบูรณาการฟอร์ม:</strong>
    <span>
      รองรับสถานะข้อผิดพลาด ข้อความช่วยเหลือ และสถานะปิดใช้งานสำหรับการบูรณาการฟอร์มที่ราบรื่น
    </span>
  </li>
  <li class="spr-mb-2">
    <strong>การออกแบบที่ตอบสนอง:</strong>
    <span>
      ปรับให้เข้ากับความกว้างของคอนเทนเนอร์ที่แตกต่างกันด้วย prop <code>fullWidth</code> สำหรับเลย์เอาต์ที่ยืดหยุ่น
    </span>
  </li>
</ul>

## การใช้งานพื้นฐาน

การใช้งาน Time Picker ที่ง่ายที่สุดต้องใช้ directive `v-model` เท่านั้นเพื่อผูกค่าของเวลาที่เลือก

<spr-time-picker
    v-model="selectedValue"
    label="เลือกเวลา"
    id='time-basic'
  />

```vue
<template>
  <spr-time-picker v-model="selectedValue" label="เลือกเวลา" id="time-basic" />
</template>

<script setup>
import { ref } from 'vue';

const selectedValue = ref('');
</script>
```

:::tip
โดยค่าเริ่มต้น Time Picker จะใช้รูปแบบ 24 ชั่วโมงพร้อมช่วง 30 นาที ดรอปดาวน์จะแสดงเวลาจาก 00:00 ถึง 23:30
:::

## รูปแบบเวลา

Time Picker รองรับทั้งรูปแบบ 12 ชั่วโมง (AM/PM) และ 24 ชั่วโมง ใช้ prop `format` เพื่อระบุรูปแบบที่ต้องการ

<div class="spr-flex spr-flex-col spr-gap-4">
  <spr-time-picker
      v-model="selectedValue1"
      label="รูปแบบ 12 ชั่วโมง (AM/PM)"
      format="12"
      id='time-format-12'
    />
  <spr-time-picker
      v-model="selectedValue2"
      label="รูปแบบ 24 ชั่วโมง"
      format="24"
      id='time-format-24'
    />
</div>

```vue
<template>
  <div class="spr-flex spr-flex-col spr-gap-4">
    <!-- รูปแบบ 12 ชั่วโมงพร้อม AM/PM -->
    <spr-time-picker v-model="selectedValue1" label="รูปแบบ 12 ชั่วโมง (AM/PM)" format="12" id="time-format-12" />

    <!-- รูปแบบ 24 ชั่วโมง -->
    <spr-time-picker v-model="selectedValue2" label="รูปแบบ 24 ชั่วโมง" format="24" id="time-format-24" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedValue1 = ref('');
const selectedValue2 = ref('');
</script>
```

:::tip ตัวอย่างรูปแบบ

- รูปแบบ 12 ชั่วโมง: "09:30 AM", "12:00 PM", "06:45 PM"
- รูปแบบ 24 ชั่วโมง: "09:30", "12:00", "18:45"
  :::

## ช่วงเวลาที่กำหนดเอง

คุณสามารถปรับช่วงระหว่างตัวเลือกเวลาโดยใช้ prop `interval` ค่าจะระบุเป็นนาที

<div class="spr-flex spr-flex-col spr-gap-4">
  <spr-time-picker
      v-model="selectedValue3"
      label="ช่วง 15 นาที"
      interval="15"
      id="time-interval-15"
    />
  <spr-time-picker
      v-model="selectedValue4"
      label="ช่วง 30 นาที (ค่าเริ่มต้น)"
      interval="30"
      id="time-interval-30"
    />
  <spr-time-picker
      v-model="selectedValue5"
      label="ช่วง 60 นาที (รายชั่วโมง)"
      interval="60"
      id="time-interval-60"
    />
</div>

```vue
<template>
  <div class="spr-flex spr-flex-col spr-gap-4">
    <!-- ช่วง 15 นาที -->
    <spr-time-picker v-model="selectedValue3" label="ช่วง 15 นาที" interval="15" id="time-interval-15" />

    <!-- ช่วง 30 นาที (ค่าเริ่มต้น) -->
    <spr-time-picker v-model="selectedValue4" label="ช่วง 30 นาที (ค่าเริ่มต้น)" interval="30" id="time-interval-30" />

    <!-- ช่วงรายชั่วโมง -->
    <spr-time-picker v-model="selectedValue5" label="ช่วง 60 นาที (รายชั่วโมง)" interval="60" id="time-interval-60" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedValue3 = ref('');
const selectedValue4 = ref('');
const selectedValue5 = ref('');
</script>
```

:::tip
ช่วงที่เล็กกว่าจะให้การเลือกเวลาที่แม่นยำมากขึ้น แต่ส่งผลให้รายการดรอปดาวน์ยาวขึ้น พิจารณาเคสการใช้งานของคุณเมื่อเลือกช่วงที่เหมาะสม
:::

## ตัวเลือกการควบคุมอินพุต

### ปิดใช้งานการพิมพ์

ใช้ prop `disableTyping` เพื่อป้องกันไม่ให้ผู้ใช้ป้อนเวลาด้วยตนเอง ซึ่งจะจำกัดการเลือกให้เฉพาะตัวเลือกแบบดรอปดาวน์เท่านั้น

<spr-time-picker
    v-model="selectedValue6"
    label="การเลือกเท่านั้น (ไม่มีการพิมพ์)"
    disableTyping
    format="12"
    id="time-disable-typing"
  />

```vue
<template>
  <spr-time-picker
    v-model="selectedValue6"
    label="การเลือกเท่านั้น (ไม่มีการพิมพ์)"
    disableTyping
    format="12"
    id="time-disable-typing"
  />
</template>

<script setup>
import { ref } from 'vue';

const selectedValue6 = ref('');
</script>
```

### Placeholder ที่กำหนดเอง

คุณสามารถปรับแต่งข้อความ placeholder ของอินพุตโดยใช้ prop `placeholder`

<spr-time-picker
    v-model="selectedValue7"
    label="พร้อม placeholder ที่กำหนดเอง"
    placeholder="เลือกเวลานัดหมาย..."
    id="time-custom-placeholder"
  />

```vue
<template>
  <spr-time-picker
    v-model="selectedValue7"
    label="พร้อม placeholder ที่กำหนดเอง"
    placeholder="เลือกเวลานัดหมาย..."
    id="time-custom-placeholder"
  />
</template>

<script setup>
import { ref } from 'vue';

const selectedValue7 = ref('');
</script>
```

## การบูรณาการฟอร์ม

### ข้อความช่วยเหลือ

เพิ่มข้อความอธิบายใต้ฟิลด์อินพุตโดยใช้ prop `helperText`

<spr-time-picker
    v-model="selectedValue8"
    label="เวลาทำการ"
    helperText="เลือกเวลาที่ธุรกิจของคุณเปิดทำการ"
    id="time-helper-text"
  />

```vue
<template>
  <spr-time-picker
    v-model="selectedValue8"
    label="เวลาทำการ"
    helperText="เลือกเวลาที่ธุรกิจของคุณเปิดทำการ"
    id="time-helper-text"
  />
</template>

<script setup>
import { ref } from 'vue';

const selectedValue8 = ref('');
</script>
```

### สถานะข้อผิดพลาด

แสดงสถานะข้อผิดพลาดโดยใช้ prop `error` เพื่อระบุปัญหาการตรวจสอบความถูกต้อง

<spr-time-picker
    v-model="selectedValue9"
    label="เวลานัดหมาย"
    error
    helperText="กรุณาเลือกเวลานัดหมายที่ถูกต้อง"
    id="time-error"
  />

```vue
<template>
  <spr-time-picker
    v-model="selectedValue9"
    label="เวลานัดหมาย"
    error
    helperText="กรุณาเลือกเวลานัดหมายที่ถูกต้อง"
    id="time-error"
  />
</template>

<script setup>
import { ref } from 'vue';

const selectedValue9 = ref('');
</script>
```

### สถานะปิดใช้งาน

ปิดใช้งาน time picker โดยใช้ prop `disabled` เมื่อคุณต้องการป้องกันการโต้ตอบ

<spr-time-picker
    v-model="selectedValue10"
    label="เวลานัดหมาย (ปิดใช้งาน)"
    disabled
    id="time-disabled"
  />

```vue
<template>
  <spr-time-picker v-model="selectedValue10" label="เวลานัดหมาย (ปิดใช้งาน)" disabled id="time-disabled" />
</template>

<script setup>
import { ref } from 'vue';

const selectedValue10 = ref('');
</script>
```

## ตัวเลือกเลย์เอาต์

### ความกว้างเต็ม

ใช้ prop `fullWidth` เพื่อให้ time picker ขยายไปยังความกว้างเต็มของคอนเทนเนอร์

<spr-time-picker
    v-model="selectedValue11"
    label="Time picker ความกว้างเต็ม"
    fullWidth
    id="time-full-width"
  />

```vue
<template>
  <spr-time-picker v-model="selectedValue11" label="Time picker ความกว้างเต็ม" fullWidth id="time-full-width" />
</template>

<script setup>
import { ref } from 'vue';

const selectedValue11 = ref('');
</script>
```

## การอ้างอิง API

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
      <td><code>modelValue</code></td>
      <td>ค่าของเวลาที่เลือก (ใช้กับ <code>v-model</code>)</td>
      <td>string</td>
      <td>จำเป็น</td>
    </tr>
    <tr>
      <td><code>format</code></td>
      <td>รูปแบบเวลาที่จะแสดง</td>
      <td>'12' | '24'</td>
      <td>'24'</td>
    </tr>
    <tr>
      <td><code>interval</code></td>
      <td>ช่วงเวลาระหว่างตัวเลือกเป็นนาที</td>
      <td>number</td>
      <td>30</td>
    </tr>
    <tr>
      <td><code>label</code></td>
      <td>ข้อความป้ายที่แสดงเหนือฟิลด์อินพุต</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td><code>placeholder</code></td>
      <td>ข้อความ placeholder สำหรับฟิลด์อินพุต</td>
      <td>string</td>
      <td>ขึ้นกับรูปแบบ ('HH : MM' หรือ 'HH : MM AM/PM')</td>
    </tr>
    <tr>
      <td><code>disableTyping</code></td>
      <td>เมื่อเป็น true จะป้องกันการป้อนข้อความด้วยตนเองในฟิลด์อินพุต</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>error</code></td>
      <td>เมื่อเป็น true จะแสดงฟิลด์ในสถานะข้อผิดพลาด</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>helperText</code></td>
      <td>ข้อความช่วยเหลือที่แสดงใต้ฟิลด์อินพุต</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>เมื่อเป็น true จะปิดใช้งาน time picker</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>fullWidth</code></td>
      <td>เมื่อเป็น true time picker จะขยายไปยังความกว้างเต็มของคอนเทนเนอร์</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td>แอตทริบิวต์ HTML ID สำหรับองค์ประกอบอินพุต</td>
      <td>string</td>
      <td>'time-picker'</td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th>ชื่อ</th>
      <th>คำอธิบาย</th>
      <th>พารามิเตอร์</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>update:modelValue</code></td>
      <td>ปล่อยออกมาเมื่อเวลาที่เลือกเปลี่ยนแปลง</td>
      <td>string: ค่าของเวลาที่ใหม่</td>
    </tr>
  </tbody>
</table>

## การใช้งานผลิตภัณฑ์

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
</div>

<script lang="ts" setup>
import { ref } from 'vue';

import SprTimePicker from "@/components/time-picker/time-picker.vue";
import SprLogo from "@/components/logo/logo.vue";

const selectedValue = ref('');
const selectedValue1 = ref('');
const selectedValue2 = ref('');
const selectedValue3 = ref('');
const selectedValue4 = ref('');
const selectedValue5 = ref('');
const selectedValue6 = ref('');
const selectedValue7 = ref('');
const selectedValue8 = ref('');
const selectedValue9 = ref('');
const selectedValue10 = ref('');
const selectedValue11 = ref('');
</script>
