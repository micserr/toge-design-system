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

## แสดงข้อความช่วยเหลือ

เพิ่มข้อความช่วยเหลือหรือไอคอนเพื่อให้ข้อมูลเพิ่มเติมหรือข้อเสนอแนะแก่ผู้ใช้

<div class="spr-flex spr-flex-col spr-items-start spr-gap-6">
  <spr-radio id="radio7" v-model="radioModel.radio4" name="radio_name4" value="value1" display-helper helper-text="ตัวเลือกนี้แนะนำ">
    ตัวเลือก 1
  </spr-radio>
  <spr-radio id="radio8" v-model="radioModel.radio4" name="radio_name4" value="value2" display-helper helper-text="ติดต่อฝ่ายสนับสนุนเพื่อขอความช่วยเหลือ" error>
    ตัวเลือก 2
  </spr-radio>
</div>

```vue
<template>
  <div class="spr-flex spr-flex-col spr-items-start spr-gap-6">
    <spr-radio
      id="radio1"
      v-model="radioModel"
      name="radio_name"
      value="value1"
      display-helper
      helper-text="ตัวเลือกนี้แนะนำ"
    >
      ตัวเลือก 1
    </spr-radio>
    <spr-radio
      id="radio2"
      v-model="radioModel"
      name="radio_name"
      value="value2"
      display-helper
      helper-text="ติดต่อฝ่ายสนับสนุนเพื่อขอความช่วยเหลือ"
      error
    >
      ตัวเลือก 2
    </spr-radio>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radioModel = ref('');
</script>
```

### ใช้ไอคอน

คุณยังสามารถแสดงไอคอนพร้อมกับข้อความช่วยเหลือได้โดยใช้พร็อพส์ `helper-icon`

<div class="spr-flex spr-flex-col spr-items-start spr-gap-6">
  <spr-radio id="radio9" v-model="radioModel.radio5" name="radio_name5" value="value1" display-helper helper-icon="ph:check-circle" helper-text="ตรวจสอบและปลอดภัยแล้ว">
    แนะนำ
  </spr-radio>
  <spr-radio id="radio10" v-model="radioModel.radio5" name="radio_name5" value="value2" display-helper helper-icon="ph:warning-circle" helper-text="ต้องการการตรวจสอบ" error>
    ต้องการตรวจสอบ
  </spr-radio>
</div>

```vue
<template>
  <div class="spr-flex spr-flex-col spr-items-start spr-gap-6">
    <spr-radio
      id="radio1"
      v-model="radioModel"
      name="radio_name"
      value="value1"
      display-helper
      helper-icon="ph:check-circle"
      helper-text="ตรวจสอบและปลอดภัยแล้ว"
    >
      แนะนำ
    </spr-radio>
    <spr-radio
      id="radio2"
      v-model="radioModel"
      name="radio_name"
      value="value2"
      display-helper
      helper-icon="ph:warning-circle"
      helper-text="ต้องการการตรวจสอบ"
      error
    >
      ต้องการตรวจสอบ
    </spr-radio>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radioModel = ref('');
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
      <td>เมื่อตั้งค่าเป็น <code>true</code> คอมโพเนนต์เรดิโอจะขยายให้เต็มความกว้างของคอนเทนเนอร์ เมื่อตั้งค่าเป็น <code>false</code> จะมีความกว้างเท่ากับเนื้อหาเท่านั้น</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>display-helper</code>
      </td>
      <td>เมื่อตั้งค่าเป็น <code>true</code> จะแสดงข้อความช่วยเหลือด้านล่างปุ่มเรดิโอ ใช้เพื่อให้บริบทเพิ่มเติมหรือข้อเสนอแนะแก่ผู้ใช้</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>helper-text</code>
      </td>
      <td>เนื้อหาข้อความที่จะแสดงในข้อความช่วยเหลือ มองเห็นได้เมื่อ <code>display-helper</code> ตั้งค่าเป็น <code>true</code> เท่านั้น</td>
      <td>string</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>
        <code>helper-icon</code>
      </td>
      <td>ชื่อไอคอน Iconify ที่จะแสดงพร้อมกับข้อความช่วยเหลือ มองเห็นได้เมื่อ <code>display-helper</code> ตั้งค่าเป็น <code>true</code> เท่านั้น ตัวอย่าง: <code>ph:check-circle</code></td>
      <td>string</td>
      <td><code>null</code></td>
    </tr>
    <tr>
      <td>
        <code>error</code>
      </td>
      <td>เมื่อตั้งค่าเป็น <code>true</code> ข้อความช่วยเหลือจะปรากฏเป็นสีอันตราย/ข้อผิดพลาดเพื่อระบุสถานะข้อผิดพลาด</td>
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

### ช่องเสียบ

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
      <td>เนื้อหาที่จะแสดงเป็นป้ายกำกับของปุ่มเรดิโอ โดยปกติจะมีข้อความแต่สามารถรวมองค์ประกอบอื่นๆ ได้สำหรับป้ายกำกับที่ซับซ้อนมากขึ้น</td>
    </tr>
    <tr>
      <td>
        <code>helperMessage</code>
      </td>
      <td>ช่องเสียบแบบกำหนดเองสำหรับข้อความช่วยเหลือ ช่วยให้คุณแทนที่ข้อความช่วยเหลือเริ่มต้นด้วยเนื้อหาแบบกำหนดเอง มองเห็นได้เมื่อ <code>display-helper</code> เป็น true</td>
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
