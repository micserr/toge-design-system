---
title: Slider
descripttion: คอมโพเนนต์ Slider ช่วยให้ผู้ใช้เลือกค่าจากช่วงโดยการลากจุดจับ โดยรองรับค่าต่ำสุดและสูงสุด การเพิ่มทีละขั้น ขนาดต่างๆ และสามารถปิดใช้งานได้เมื่อจำเป็น นอกจากนี้ยังมีสถานะโฮเวอร์และกดสำหรับการโต้ตอบที่ดียิ่งขึ้น และปล่อยอีเวนต์ slideend เมื่อผู้ใช้เสร็จสิ้นการโต้ตอบกับสไลเดอร์
outline: deep
---

# สไลเดอร์

คอมโพเนนต์ Slider ช่วยให้ผู้ใช้เลือกค่าจากช่วงโดยการลากจุดจับ โดยรองรับค่าต่ำสุดและสูงสุด การเพิ่มทีละขั้น ขนาดต่างๆ และสามารถปิดใช้งานได้เมื่อจำเป็น นอกจากนี้ยังมีสถานะโฮเวอร์และกดสำหรับการโต้ตอบที่ดียิ่งขึ้น และปล่อยอีเวนต์ slideend เมื่อผู้ใช้เสร็จสิ้นการโต้ตอบกับสไลเดอร์

## การใช้งานพื้นฐาน

<div>
  <spr-slider :min="0" :max="100" :step="1" v-model="sliderValue"/>
  <p class="spr-m-0">ค่าของสไลเดอร์: {{ sliderValue }}</p>
</div>

```vue
<template>
  <spr-slider :min="0" :max="100" :step="1" v-model="sliderValue" />
  <p class="spr-m-0">ค่าของสไลเดอร์: {{ sliderValue }}</p>
</template>

<script setup>
import { ref } from 'vue';
const sliderValue = ref(0);
</script>
```

## ขั้นตอน

สไลเดอร์สามารถกำหนดค่า step เพื่อควบคุมการเพิ่มขึ้นของค่าได้ ในตัวอย่างด้านล่าง step ถูกตั้งค่าเป็น 20 ซึ่งหมายความว่าสไลเดอร์จะเลื่อนไปทีละ 20 หน่วย (0, 20, 40, 60, 80, 100)

<div>
  <spr-slider :min="0" :max="100" :step="20" v-model="sliderValueStep"/>
  <p class="spr-m-0">ค่าของสไลเดอร์: {{ sliderValueStep }}</p>
</div>

```vue
<template>
  <spr-slider :min="0" :max="100" :step="20" v-model="sliderValueStep" />
  <p class="spr-m-0">ค่าของสไลเดอร์: {{ sliderValueStep }}</p>
</template>

<script setup>
import { ref } from 'vue';
const sliderValueStep = ref(0);
</script>
```

## ขนาด

คอมโพเนนต์ Slider มี 2 ขนาด คุณสามารถใช้ prop size เพื่อกำหนดขนาดของสไลเดอร์ ขนาดเริ่มต้นคือ 'lg' ขนาดที่มีให้เลือกคือ 'lg' และ 'sm'

<div class="spr-flex spr-flex-col spr-gap-5 spr-items-center">
  <spr-slider :min="0" :max="100" :step="1" v-model="sliderValueForLG" size="lg"/>
  <spr-slider :min="0" :max="100" :step="1" v-model="sliderValueForSM" size="sm"/>
</div>

```vue
<template>
  <spr-slider :min="0" :max="100" :step="1" v-model="sliderValueForLG" size="lg" />
  <spr-slider :min="0" :max="100" :step="1" v-model="sliderValueForSM" size="sm" />
</template>

<script setup>
import { ref } from 'vue';
const sliderValue = ref(0);
const sliderValueForLG = ref(0);
const sliderValueForSM = ref(0);
</script>
```

## ปิดใช้งาน

<div class="spr-flex spr-flex-col spr-gap-5 spr-items-center">
  <spr-slider :min="0" :max="100" :step="1" v-model="sliderValueDisabled"  :disabled="true"/>
</div>

```vue
<template>
  <spr-slider :min="0" :max="100" :step="1" v-model="sliderValueDisabled" :disabled="true" />
</template>

<script setup>
import { ref } from 'vue';
const sliderValueDisabled = ref(50);
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
      <td>modelValue / v-model</td>
      <td>ค่าปัจจุบันของสไลเดอร์ Prop นี้ใช้กับ v-model สำหรับการผูกข้อมูลสองทาง ช่วยให้ค่าของสไลเดอร์สามารถอ่านและอัปเดตได้โดยคอมโพเนนต์ parent</td>
      <td>number</td>
      <td>0</td>
    </tr>
    <tr>
      <td>size</td>
      <td>ควบคุมขนาดของคอมโพเนนต์สไลเดอร์ ตัวเลือก 'lg' ให้สไลเดอร์ขนาดใหญ่ที่เหมาะสมสำหรับการควบคุมหลัก ในขณะที่ 'sm' ให้เวอร์ชันที่กะทัดรัดสำหรับอินเทอร์เฟซที่มีพื้นที่จำกัด</td>
      <td>'lg' | 'sm'</td>
      <td>'lg'</td>
    </tr>
    <tr>
      <td>min</td>
      <td>ค่าต่ำสุดที่สไลเดอร์สามารถตั้งค่าได้ ซึ่งกำหนดขอบเขตล่างของช่วงสไลเดอร์และสอดคล้องกับตำแหน่งซ้ายสุดของสไลเดอร์</td>
      <td>number</td>
      <td>0</td>
    </tr>
    <tr>
      <td>max</td>
      <td>ค่าสูงสุดที่สไลเดอร์สามารถตั้งค่าได้ ซึ่งกำหนดขอบเขตบนของช่วงสไลเดอร์และสอดคล้องกับตำแหน่งขวาสุดของสไลเดอร์</td>
      <td>number</td>
      <td>100</td>
    </tr>
    <tr>
      <td>step</td>
      <td>การเพิ่มขึ้นระหว่างค่าบนสไลเดอร์ ซึ่งกำหนดความละเอียดของการเคลื่อนไหวของสไลเดอร์ ตัวอย่างเช่น step เท่ากับ 5 จะอนุญาตเฉพาะค่าเช่น 0, 5, 10 เป็นต้น</td>
      <td>number</td>
      <td>1</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>เมื่อตั้งค่าเป็น true สไลเดอร์จะไม่สามารถโต้ตอบได้ โดยแสดงภาพด้วยความโปร่งใสที่ลดลงและเคอร์เซอร์ "not-allowed"</td>
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
      <td>ปล่อยออกมาเมื่อค่าของสไลเดอร์เปลี่ยนแปลงขณะที่ผู้ใช้ลากจุดจับ อีเวนต์นี้ใช้โดย v-model สำหรับการผูกข้อมูลสองทาง และจะทำงานอย่างต่อเนื่องระหว่างกระบวนการลาก</td>
      <td>(value: number): ค่าปัจจุบันของสไลเดอร์</td>
    </tr>
    <tr>
      <td>slideend</td>
      <td>ปล่อยออกมาเมื่อผู้ใช้เสร็จสิ้นการโต้ตอบการเลื่อน (ปล่อยตัวชี้) ซึ่งมีประโยชน์สำหรับการเรียกใช้การดำเนินการที่ควรเกิดขึ้นเพียงครั้งเดียวเมื่อผู้ใช้เสร็จสิ้นการปรับค่า แทนที่จะเป็นระหว่างกระบวนการลาก</td>
      <td>(value: number): ค่าสุดท้ายของสไลเดอร์หลังจากการโต้ตอบเสร็จสิ้น</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import {ref} from 'vue'
import SprSlider from "@/components/slider/slider.vue";

const sliderValue = ref(0)
const sliderValueStep = ref(0)
const sliderValueForLG = ref(0);
const sliderValueForSM = ref(0);
const sliderValueDisabled =ref(50);
</script>
