---
title: Textarea
descripttion: คอมโพเนนต์ Textarea เป็นฟิลด์อินพุตข้อความหลายบรรทัดที่ช่วยให้ผู้ใช้ป้อนและแก้ไขข้อความจำนวนมาก โดยรองรับคุณสมบัติต่างๆ เช่น ขีดจำกัดจำนวนตัวอักษร ข้อความช่วยเหลือ สถานะข้อผิดพลาด และโหมดอ่านอย่างเดียวเพื่อเพิ่มประสบการณ์ผู้ใช้และการเข้าถึง
outline: deep
---

# Textarea

## การใช้งานพื้นฐาน

<spr-textarea v-model="textarea" label="คำอธิบาย" placeholder="พิมพ์ที่นี่...."/>

```vue
<template>
  <spr-textarea v-model="textarea" label="คำอธิบาย" placeholder="พิมพ์ที่นี่...." />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textarea = ref('');
</script>
```

## แสดงข้อความช่วยเหลือ

ข้อความช่วยเหลือคือป้ายข้อความใต้ฟิลด์อินพุตที่ให้ข้อมูลเพิ่มเติมเกี่ยวกับคำแนะนำ เคล็ดลับการจัดรูปแบบ ข้อเสนอแนะการตรวจสอบความถูกต้อง ฯลฯ

เพื่อแสดงข้อความช่วยเหลือ ให้ตั้งค่า prop `display-helper` เป็น `true` และเพิ่ม prop `helper-text` พร้อมข้อความช่วยเหลือ คุณยังสามารถแทรกไอคอนด้วย prop `helper-icon` ได้ ซึ่งใช้ไลบรารีไอคอน [Iconify](https://icon-sets.iconify.design/)

<div class="spr-grid spr-gap-6">
  <spr-textarea
    v-model="textarea1"
    label="Textarea"
    display-helper
    placeholder="พิมพ์ที่นี่...."
    helper-text="นี่คือข้อความช่วยเหลือ"
  />
  <spr-textarea
    v-model="textarea1"
    label="Textarea"
    placeholder="พิมพ์ที่นี่...."
    display-helper
    helper-text="นี่คือข้อความข้อผิดพลาด"
    helper-icon="ph:warning-circle-fill"
    error
  />
</div>

```vue
<template>
  <spr-textarea
    v-model="textarea"
    label="Textarea"
    placeholder="พิมพ์ที่นี่...."
    display-helper
    helper-text="นี่คือข้อความช่วยเหลือ"
  />
  <spr-textarea
    v-model="textarea"
    label="Textarea"
    placeholder="พิมพ์ที่นี่...."
    display-helper
    helper-text="นี่คือข้อความข้อผิดพลาด"
    helper-icon="ph:warning-circle-fill"
    error
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textarea = ref('');
</script>
```

หรือคุณสามารถใช้ slot `helperMessage` เพื่อแสดงข้อความช่วยเหลือแบบกำหนดเอง

<div class="spr-grid spr-gap-6">
  <spr-textarea
    v-model="textarea1"
    label="Textarea"
    display-helper
  >
    <template #helperMessage>
      นี่คือข้อความช่วยเหลือ
    </template>
  </spr-textarea>
  <spr-textarea
   v-model="textarea1"
    label="Textarea"
    display-helper
    error
  >
    <template #helperMessage>
      <Icon icon="ph:warning-circle-fill" width="20px" height="20px" />
      <span>นี่คือข้อความข้อผิดพลาด</span>
    </template>
  </spr-textarea>
</div>

```vue
<template>
  <spr-textarea v-model="textarea" label="Textarea" display-helper>
    <template #helperMessage> นี่คือข้อความช่วยเหลือ </template>
  </spr-textarea>
  <spr-textarea v-model="textarea" label="Textarea" display-helper error>
    <template #helperMessage>
      <Icon icon="ph:warning-circle-fill" width="20px" height="20px" />
      <span>นี่คือข้อความข้อผิดพลาด</span>
    </template>
  </spr-textarea>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textarea = ref('');
</script>
```

## สถานะข้อผิดพลาด

<spr-textarea v-model="textarea1" label="คำอธิบาย" placeholder="พิมพ์ที่นี่...." display-helper helper-text="นี่คือข้อความข้อผิดพลาด" helper-icon="ph:warning-circle-fill" error />

```vue
<template>
  <spr-textarea
    v-model="textarea"
    label="คำอธิบาย"
    placeholder="พิมพ์ที่นี่...."
    display-helper
    helper-text="นี่คือข้อความข้อผิดพลาด"
    helper-icon="ph:warning-circle-fill"
    error
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textarea = ref('');
</script>
```

## ความยาวสูงสุด

<spr-textarea
    v-model="textareaMaxLength"
    label="คำอธิบาย"
    placeholder="พิมพ์ที่นี่...."
    :maxLength="255"
    hasCounter
  />

```vue
<template>
  <spr-textarea
    v-model="textareaMaxLength"
    label="คำอธิบาย"
    placeholder="พิมพ์ที่นี่...."
    :maxLength="255"
    hasCounter
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textareaMaxLength = ref('กำหนดจำนวนตัวอักษรสูงสุด');
</script>
```

## ปิดใช้งาน

<spr-textarea v-model="textarea" label="คำอธิบาย" placeholder="พิมพ์ที่นี่...."  disabled/>

```vue
<template>
  <spr-textarea v-model="textarea" label="คำอธิบาย" placeholder="พิมพ์ที่นี่...." disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textarea = ref('');
</script>
```

## อ่านอย่างเดียว

<spr-textarea v-model="textarea2" label="คำอธิบาย" placeholder="พิมพ์ที่นี่...."  readonly/>

```vue
<template>
  <spr-textarea v-model="textarea2" label="คำอธิบาย" placeholder="พิมพ์ที่นี่...." readonly />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textarea2 = ref('สวัสดีโลก ระบบการออกแบบ Sprout!!!');
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
      <td>id</td>
      <td>ตัวระบุเฉพาะสำหรับองค์ประกอบ textarea ใช้สำหรับการเชื่อมโยงป้ายและวัตถุประสงค์การเข้าถึง</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>modelValue / v-model</td>
      <td>ค่าของ textarea ใช้กับ directive v-model สำหรับการผูกข้อมูลสองทางเพื่อจับและอัปเดตอินพุตของผู้ใช้</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>label</td>
      <td>ข้อความป้ายที่แสดงเหนือ textarea เพื่ออธิบายวัตถุประสงค์หรือข้อกำหนดเนื้อหา</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>supporting-label</td>
      <td>ข้อความข้างป้ายที่มีสไตล์รองรับ</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>ข้อความตัวยึดที่แสดงภายใน textarea เมื่อว่างเปล่า ให้คำแนะนำเกี่ยวกับสิ่งที่จะป้อน</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>active</td>
      <td>เมื่อเป็น true จะใช้สไตล์สถานะที่ใช้งานอยู่กับ textarea สามารถใช้เพื่อไฮไลต์ textarea ในสถานะแอปพลิเคชันบางอย่าง</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>เมื่อเป็น true จะปิดใช้งาน textarea ป้องกันการโต้ตอบของผู้ใช้และใช้ลักษณะที่ปรากฏปิดใช้งาน</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>readonly</td>
      <td>เมื่อเป็น true จะทำให้ textarea อ่านอย่างเดียว ช่วยให้ผู้ใช้ดูได้แต่ไม่สามารถแก้ไขเนื้อหาได้</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>error</td>
      <td>เมื่อเป็น true จะใช้สไตล์สถานะข้อผิดพลาดเพื่อระบุปัญหาการตรวจสอบความถูกต้อง มักใช้กับข้อความช่วยเหลือเพื่อให้ข้อเสนอแนะ</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>minLength</td>
      <td>กำหนดจำนวนตัวอักษรขั้นต่ำที่ต้องการใน textarea ใช้สำหรับการตรวจสอบความถูกต้อง HTML5</td>
      <td>number</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>maxLength</td>
      <td>กำหนดจำนวนตัวอักษรสูงสุดที่อนุญาตใน textarea ใช้สำหรับการตรวจสอบความถูกต้อง HTML5 และการนับตัวอักษร</td>
      <td>number</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>rows</td>
      <td>ระบุความสูงที่มองเห็นได้ของ textarea ในบรรทัดข้อความ ควบคุมขนาดเริ่มต้นของ textarea</td>
      <td>number</td>
      <td>4</td>
    </tr>
    <tr>
      <td>displayHelper</td>
      <td>เมื่อเป็น true จะแสดงพื้นที่ข้อความช่วยเหลือใต้ textarea ใช้เพื่อให้ข้อมูลเพิ่มเติมหรือข้อเสนอแนะการตรวจสอบความถูกต้อง</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>helperIcon</td>
      <td>ระบุไอคอนที่จะแสดงควบคู่กับข้อความช่วยเหลือ ใช้ Iconify สำหรับการแสดงผลไอคอน</td>
      <td>string</td>
      <td>null</td>
    </tr>
    <tr>
      <td>helperText</td>
      <td>ข้อความที่จะแสดงในพื้นที่ข้อความช่วยเหลือ ให้คำแนะนำ คำสั่ง หรือข้อเสนอแนะการตรวจสอบความถูกต้อง</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>hasCounter</td>
      <td>เมื่อเป็น true จะแสดงตัวนับตัวอักษรที่แสดงความยาวปัจจุบันเทียบกับ maxLength มีผลเฉพาะเมื่อระบุ maxLength ด้วย</td>
      <td>boolean</td>
      <td>false</td>
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
      <td>update:modelValue</td>
      <td>ปล่อยออกมาเมื่อค่าของ textarea เปลี่ยนแปลง ใช้กับ v-model สำหรับการผูกข้อมูลสองทาง</td>
      <td>(value: string)</td>
    </tr>
  </tbody>
</table>

### Slots

<table>
  <thead>
    <tr>
      <th>ชื่อ</th>
      <th>คำอธิบาย</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>helperMessage</td>
      <td>อนุญาตให้มีเนื้อหาแบบกำหนดเองในพื้นที่ข้อความช่วยเหลือ ใช้ slot นี้เพื่อให้ข้อความที่มีรูปแบบ ไอคอน หรือคอมโพเนนต์อื่นๆ ในพื้นที่ข้อความช่วยเหลือ</td>
    </tr>
    <tr>
      <td>counter</td>
      <td>อนุญาตให้มีเนื้อหาแบบกำหนดเองในพื้นที่ตัวนับตัวอักษร ใช้ slot นี้เพื่อปรับแต่งลักษณะที่ปรากฏหรือพฤติกรรมของตัวนับตัวอักษร</td>
    </tr>
  </tbody>
</table>

## การใช้งานผลิตภัณฑ์

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
</div>

<script setup lang="ts">
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

import SprTextarea from '@/components/textarea/textarea.vue';
import SprLogo from "@/components/logo/logo.vue";

const textarea = ref('');
const textarea1 = ref('');
const textarea2 = ref('สวัสดีโลก ระบบการออกแบบ Sprout!!!');
const textareaMaxLength = ref('กำหนดจำนวนตัวอักษรสูงสุด');
</script>
