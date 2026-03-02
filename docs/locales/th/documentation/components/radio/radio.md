---
title: เรดิโอ
descripttion: ปุ่มเรดิโอเป็นคอมโพเนนต์ที่ช่วยให้ผู้ใช้เลือกตัวเลือกเดียวจากชุดของทางเลือก
outline: deep
---

# เรดิโอ

ปุ่มเรดิโอเป็นคอมโพเนนต์ที่ช่วยให้ผู้ใช้เลือกตัวเลือกเดียวจากชุดของทางเลือก

## การใช้งานพื้นฐาน

<div class="spr-flex spr-flex-col spr-items-start spr-gap-2">
  <spr-radio id="radio1" v-model="radioModel.radio1" name="radio_name1" value="value1">
    ป้ายกำกับเรดิโอ 1
  </spr-radio>
  <spr-radio id="radio2" v-model="radioModel.radio1" name="radio_name1" value="value2">
    ป้ายกำกับเรดิโอ 2
  </spr-radio>
</div>

```vue
<template>
  <div class="spr-flex spr-flex-col spr-items-start spr-gap-2">
    <spr-radio id="radio1" v-model="radioModel" name="radio_name" value="value1">ป้ายกำกับเรดิโอ 1</spr-radio>
    <spr-radio id="radio2" v-model="radioModel" name="radio_name" value="value2">ป้ายกำกับเรดิโอ 2</spr-radio>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radioModel = ref('');
</script>
```

## ทำงานอยู่

<div class="spr-flex spr-flex-col spr-items-start spr-gap-2">
  <spr-radio id="radio3" v-model="radioModel.radio2" name="radio_name2" value="value1">
    ป้ายกำกับเรดิโอ 1
  </spr-radio>
  <spr-radio id="radio4" v-model="radioModel.radio2" name="radio_name2" value="value2">
    ป้ายกำกับเรดิโอ 2
  </spr-radio>
</div>

```vue
<template>
  <spr-radio id="radio1" v-model="radioModel" name="radio_name" value="value1">ป้ายกำกับเรดิโอ 1</spr-radio>
  <spr-radio id="radio2" v-model="radioModel" name="radio_name" value="value2">ป้ายกำกับเรดิโอ 2</spr-radio>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radioModel = ref('value2');
</script>
```

## ปิดใช้งาน

เพิ่มแอตทริบิวต์ `disabled` ให้กับคอมโพเนนต์ `<spr-radio>` เพื่อปิดใช้งานปุ่มเรดิโอ

<div class="spr-flex spr-flex-col spr-items-start spr-gap-2">
  <spr-radio id="radio5" v-model="radioModel.radio3" name="radio_name3" value="value1">
    ป้ายกำกับเรดิโอ 1
  </spr-radio>
  <spr-radio id="radio6" v-model="radioModel.radio3" name="radio_name3" value="value2" disabled>
    ป้ายกำกับเรดิโอ 2
  </spr-radio>
</div>

```vue
<template>
  <div class="spr-flex spr-flex-col spr-items-start spr-gap-2">
    <spr-radio id="disabledradio1" v-model="radioModel" name="radio_name" value="value1">ป้ายกำกับเรดิโอ 1</spr-radio>
    <spr-radio id="disabledradio2" v-model="radioModel" name="radio_name" value="value2" disabled>
      ป้ายกำกับเรดิโอ 2
    </spr-radio>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radioModel = ref('');
</script>
```

## กล่องเลือก

ใช้พร็อพส์ `choiceBox` เพื่อแสดงปุ่มเรดิโอในสไตล์กล่องเลือกที่มีพื้นที่คลิกขยายขึ้น ทำให้องค์ประกอบทั้งหมดสามารถคลิกได้ ซึ่งช่วยปรับปรุงการใช้งานและประสบการณ์ผู้ใช้

<div class="spr-flex spr-flex-col spr-items-start spr-gap-2">
  <spr-radio id="choicebox1" v-model="radioModel.radio4" name="radio_choicebox" value="option1" choice-box full-width>
    <div class="spr-body-sm-regular spr-text-color-strong">ตัวเลือก 1</div>
    <div class="spr-body-sm-regular spr-text-color-base">เลือกตัวเลือกนี้สำหรับฟีเจอร์ A</div>
  </spr-radio>
  <spr-radio id="choicebox2" v-model="radioModel.radio4" name="radio_choicebox" value="option2" choice-box full-width>
    <div class="spr-body-sm-regular spr-text-color-strong">ตัวเลือก 2</div>
    <div class="spr-body-sm-regular spr-text-color-base">เลือกตัวเลือกนี้สำหรับฟีเจอร์ B</div>
  </spr-radio>
  <spr-radio id="choicebox3" v-model="radioModel.radio4" name="radio_choicebox" value="option3" choice-box full-width>
    <div class="spr-body-sm-regular spr-text-color-strong">ตัวเลือก 3</div>
    <div class="spr-body-sm-regular spr-text-color-base">เลือกตัวเลือกนี้สำหรับฟีเจอร์ C</div>
  </spr-radio>
</div>

```vue
<template>
  <div class="spr-flex spr-flex-col spr-items-start spr-gap-2">
    <spr-radio id="choicebox1" v-model="selectedOption" name="radio_choicebox" value="option1" choice-box full-width>
      <div class="spr-body-sm-regular spr-text-color-strong">ตัวเลือก 1</div>
      <div class="spr-body-sm-regular spr-text-color-base">เลือกตัวเลือกนี้สำหรับฟีเจอร์ A</div>
    </spr-radio>
    <spr-radio id="choicebox2" v-model="selectedOption" name="radio_choicebox" value="option2" choice-box full-width>
      <div class="spr-body-sm-regular spr-text-color-strong">ตัวเลือก 2</div>
      <div class="spr-body-sm-regular spr-text-color-base">เลือกตัวเลือกนี้สำหรับฟีเจอร์ B</div>
    </spr-radio>
    <spr-radio id="choicebox3" v-model="selectedOption" name="radio_choicebox" value="option3" choice-box full-width>
      <div class="spr-body-sm-regular spr-text-color-strong">ตัวเลือก 3</div>
      <div class="spr-body-sm-regular spr-text-color-base">เลือกตัวเลือกนี้สำหรับฟีเจอร์ C</div>
    </spr-radio>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedOption = ref('option1');
</script>
```

## การอ้างอิง API

### พร็อพส์

<table>
  <thead>
    <tr>
      <th class="spr-min-w-[180px]">ชื่อ</th>
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
      <td>ตัวระบุที่ไม่ซ้ำสำหรับองค์ประกอบอินพุตเรดิโอ จำเป็นสำหรับการเข้าถึงและการเชื่อมโยงป้ายกำกับ</td>
      <td>string</td>
      <td><code>จำเป็น</code></td>
    </tr>
    <tr>
      <td>
        <code>modelValue</code>
      </td>
      <td>ค่าที่เลือกปัจจุบันใช้กับ v-model สำหรับการผูกสองทาง เมื่อตรงกับพร็อพเพอร์ตี้ <code>value</code> ของเรดิโอ จะเลือกเรดิโอ</td>
      <td>string | number | boolean</td>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <td>
        <code>name</code>
      </td>
      <td>แอตทริบิวต์ชื่อสำหรับองค์ประกอบอินพุตเรดิโอ ปุ่มเรดิโอในกลุ่มเดียวกันควรใช้ชื่อเดียวกันเพื่อให้แน่ใจว่าเลือกได้เพียงอันเดียวในแต่ละครั้ง</td>
      <td>string</td>
      <td><code>จำเป็น</code></td>
    </tr>
    <tr>
      <td>
        <code>value</code>
      </td>
      <td>ค่าที่เกี่ยวข้องกับปุ่มเรดิโอนี้ เมื่อเลือกเรดิโอ จะกำหนดค่านี้ให้กับ <code>modelValue</code></td>
      <td>string | number | boolean</td>
      <td><code>จำเป็น</code></td>
    </tr>
    <tr>
      <td>
        <code>disabled</code>
      </td>
      <td>เมื่อตั้งค่าเป็น <code>true</code> ปุ่มเรดิโอจะไม่สามารถโต้ตอบได้และปรากฏเป็นการปิดใช้งาน ผู้ใช้ไม่สามารถเลือกปุ่มเรดิโอที่ปิดใช้งานได้</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>description</code>
      </td>
      <td>ข้อความอธิบายเพิ่มเติมที่แสดงใต้ป้ายกำกับเรดิโอเพื่อให้บริบทหรือรายละเอียดเพิ่มเติมเกี่ยวกับตัวเลือกนี้</td>
      <td>string</td>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <td>
        <code>bordered</code>
      </td>
      <td>เมื่อตั้งค่าเป็น <code>true</code> จะเพิ่มเส้นขอบรอบคอมโพเนนต์เรดิโอทั้งหมด (รวมถึงป้ายกำกับ) ให้การแยกภาพจากองค์ประกอบรอบข้าง</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>fullWidth</code>
      </td>
      <td>เมื่อตั้งค่าเป็น <code>true</code> คอมโพเนนต์เรดิโอจะยืดเพื่อเติมเต็มความกว้างเต็มของคอนเทนเนอร์ เมื่อ <code>false</code> จะกว้างเพียงเท่ากับเนื้อหา</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>choiceBox</code>
      </td>
      <td>เมื่อตั้งค่าเป็น <code>true</code> จะแปลงปุ่มเรดิโอให้เป็นสไตล์กล่องเลือกที่มีพื้นที่คลิกขยายขึ้น ซึ่งครอบคลุมคอมโพเนนต์ทั้งหมด ทำให้ง่ายต่อการเลือกโดยคลิกในที่ใดก็ได้บนกล่อง</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>

### อีเวนต์

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
      <td>ปล่อยออกมาเมื่อเลือกปุ่มเรดิโอ อีเวนต์นี้ใช้สำหรับการผูก v-model ให้ทำงานได้อย่างถูกต้อง</td>
      <td>
        <code>(value: string | number | boolean)</code> - ค่าของปุ่มเรดิโอที่เลือก
      </td>
    </tr>
  </tbody>
</table>

### สล็อต

<table>
  <thead>
    <tr>
      <th class="spr-min-w-[180px]">ชื่อ</th>
      <th>คำอธิบาย</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>default</code>
      </td>
      <td>เนื้อหาที่จะแสดงเป็นป้ายกำกับของปุ่มเรดิโอ โดยทั่วไปจะมีข้อความแต่สามารถรวมองค์ประกอบอื่นสำหรับป้ายกำกับที่ซับซ้อนมากขึ้น</td>
    </tr>
  </tbody>
</table>

### แอนิเมชัน

<table>
  <thead>
    <tr>
      <th class="spr-min-w-[180px]">แอนิเมชัน</th>
      <th>คำอธิบาย</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>animate-shadow-grow</code>
      </td>
      <td>ใช้เมื่อเลือกปุ่มเรดิโอ สร้างการเปลี่ยนผ่านที่ราบรื่นจากวงกลมว่างไปเป็นวงกลมที่เต็มพร้อมศูนย์กลางสีขาว</td>
    </tr>
  </tbody>
</table>

## การใช้ผลิตภัณฑ์

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
</div>

<script lang="ts" setup>
import { ref } from "vue";

import SprRadio from "@/components/radio/radio.vue";
import SprLogo from "@/components/logo/logo.vue";

const radioModel = ref({
  radio1: '',
  radio2: 'value2',
  radio3: '',
  radio4: '',
  radio5: '',
  radio6: '',
  radio7: '',
  radio8: '',
  radio9: '',
  radio10: '',
});
</script>
