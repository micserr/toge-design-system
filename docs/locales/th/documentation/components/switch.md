---
title: สวิตช์
descripttion: คอมโพเนนต์สวิตช์เพื่อแสดงสถานะบูลีน (คล้ายกับช่องทำเครื่องหมาย)
outline: deep
---

# สวิตช์

คอมโพเนนต์สวิตช์เพื่อแสดงสถานะบูลีน (คล้ายกับช่องทำเครื่องหมาย)

## การใช้งานพื้นฐาน

<div>
  <spr-switch v-model="switchValue1" id="switch">Switch</spr-switch>
  <p>switchValue1 : {{ switchValue1 }}</p>
</div>

```vue
<template>
  <div>
    <spr-switch v-model="switchValue1">Switch</spr-switch>
    <p>switchValue1: {{ switchValue1 }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import SprSwitch from '@/components/switch/switch.vue';

const switchValue1 = ref(false);
</script>
```

## ป้ายข้อความ

<spr-switch v-model="switchValue2" class="spr-mb-2">
  Left
</spr-switch>

<spr-switch v-model="switchValue3" class="spr-mb-2">
  <template #rightText>Right</template>
</spr-switch>

<spr-switch v-model="switchValue4" class="spr-mb-2">
  <template #leftText>Left</template>
  <template #rightText>Right</template>
</spr-switch>

```vue
<!-- Default text position -->
<spr-switch v-model="switchValue2">Left</spr-switch>

<!-- Text position using the rightText slot -->
<spr-switch v-model="switchValue3">
  <template #rightText>Right</template>
</spr-switch>

<!-- Text position using both the leftText and rightText slots -->
<spr-switch v-model="switchValue4">
  <template #leftText>Left</template>
  <template #rightText>Right</template>
</spr-switch>
```

## ปิดใช้งาน

<spr-switch v-model="switchValue5" class="spr-mb-2" disabled>
  Disabled false switch
</spr-switch>

<spr-switch v-model="switchValue6" class="spr-mb-2" :disabled="true">
  Disabled true switch
</spr-switch>

```vue
<!-- Declare the disabled property -->
<spr-switch v-model="switchValue5" disabled>
  Disabled false switch
</spr-switch>

<!-- or set a value to the disabled property -->
<spr-switch v-model="switchValue6" :disabled="true">
  Disabled true switch
</spr-switch>
```

## การปล่อยออกมา

คอมโพเนนต์สวิตช์ใช้ `useVModel` ของ `@vueuse/core` สำหรับคุณสมบัติและการผูก v-model โดยค่าเริ่มต้น emit `update:modelValue` จะถูกกำหนดและสามารถใช้เพื่อฟังการเปลี่ยนแปลงค่าใดๆ กับคุณสมบัติ `modelValue`

<div class="spr-mt-10">
  <spr-switch v-model="switchValue7" @update:modelValue = "switch7UpdateHandler">Switch</spr-switch>
  <p>{{ switch7Label }}</p>
</div>

```vue
<template>
  <div>
    <spr-switch v-model="switchValue7" @update:modelValue="switch7UpdateHandler">Switch</spr-switch>
    <p>{{ switch7Label }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import SprSwitch from '@/components/switch/switch.vue';

const switchValue7 = ref(true);
const switch7Label = ref('No event yet.');
const switch7UpdateHandler = (value) => {
  switch7Label.value = 'Value changed to ' + value;
};
</script>
```

## API Reference

### Props

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
        <code>modelValue</code>
      </td>
      <td>ค่าปัจจุบันของสวิตช์ (สถานะเปิด/ปิด) คุณสมบัตินี้จำเป็นสำหรับการผูก v-model ให้ทำงานอย่างถูกต้อง ตั้งค่าเป็น <code>true</code> สำหรับสถานะเปิด และ <code>false</code> สำหรับสถานะปิด</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>disabled</code>
      </td>
      <td>เมื่อตั้งค่าเป็น <code>true</code> สวิตช์จะไม่สามารถโต้ตอบได้และปรากฏเป็นสีจางเพื่อแสดงว่าปิดใช้งาน สวิตช์จะไม่ปล่อยออกมาเหตุการณ์เมื่อถูกปิดใช้งาน</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>state</code>
      </td>
      <td>
        ควบคุมสถานะภาพของสวิตช์ สิ่งนี้ใช้ภายในเป็นหลักแต่สามารถตั้งค่าได้อย่างชัดเจน:
        <ul>
          <li><code>default</code>: สถานะปกติ</li>
          <li><code>hover</code>: สถานะเมื่อเลื่อนเมาส์ (ยังตั้งค่า autofocus)</li>
          <li><code>pressed</code>: เมื่อสวิตช์กำลังถูกคลิก/กด</li>
          <li><code>disabled</code>: เมื่อสวิตช์ถูกปิดใช้งาน</li>
        </ul>
      </td>
      <td>'default' | 'hover' | 'pressed' | 'disabled'</td>
      <td><code>'default'</code></td>
    </tr>
    <tr>
      <td>
        <code>id</code>
      </td>
      <td>แอตทริบิวต์ HTML id สำหรับองค์ประกอบอินพุตของสวิตช์ ใช้สำหรับเชื่อมโยงสวิตช์กับป้ายกำกับเพื่อการเข้าถึง เมื่อไม่ระบุ จะสร้าง ID แบบสุ่มด้วยรูปแบบ <code>switch_input_[random]</code> หรือ <code>[provided_id]_[random]</code> หากระบุ id</td>
      <td>string</td>
      <td><code>''</code></td>
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
      <td>ถูกปล่อยออกมาเมื่อสถานะสวิตช์เปลี่ยนแปลง เหตุการณ์นี้ใช้สำหรับการผูก v-model และจะไม่ถูกปล่อยออกมาเมื่อสวิตช์ถูกปิดใช้งาน คอมโพเนนต์ใช้ <code>useVModel</code> ของ <code>@vueuse/core</code> สำหรับการผูกสองทาง</td>
      <td>
        <code>(value: boolean)</code> - ค่าใหม่ของสวิตช์หลังการเปลี่ยนสถานะ
      </td>
    </tr>
  </tbody>
</table>

### Slots

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
      <td>ช่องเริ่มต้นที่แสดงข้อความทางด้านซ้ายของสวิตช์ ใช้สิ่งนี้สำหรับการจัดเตรียมป้ายกำกับเมื่อคุณต้องการให้มันอยู่ทางด้านซ้าย หากทั้งช่อง <code>default</code> และ <code>leftText</code> ถูกจัดเตรียม <code>leftText</code> จะมีความสำคัญ</td>
    </tr>
    <tr>
      <td>
        <code>leftText</code>
      </td>
      <td>วางข้อความทางด้านซ้ายของสวิตช์อย่างชัดเจน ช่องนี้มีความสำคัญเหนือช่องเริ่มต้นหากทั้งสองถูกจัดเตรียม หากช่องนี้และช่องเริ่มต้นว่างเปล่า จะไม่แสดงป้ายกำกับด้านซ้าย</td>
    </tr>
    <tr>
      <td>
        <code>rightText</code>
      </td>
      <td>แสดงข้อความทางด้านขวาของสวิตช์ ใช้ช่องนี้เมื่อคุณต้องการให้ป้ายกำกับปรากฏหลังสวิตช์ หากช่องนี้ว่างเปล่า จะไม่แสดงป้ายกำกับด้านขวา</td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
  <spr-logo name="ecosystem" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import { ref } from 'vue';

import SprSwitch from "@/components/switch/switch.vue";
import SprLogo from "@/components/logo/logo.vue";

// Basic usage
const switchValue1 = ref(false);

// Text label
const switchValue2 = ref(false);
const switchValue3 = ref(false);
const switchValue4 = ref(false);

// Disabled
const switchValue5 = ref(false);
const switchValue6 = ref(true);

// Emit
const switchValue7 = ref(true);
const switch7Label = ref("No event yet.");
const switch7UpdateHandler = (value) => {
  switch7Label.value = "Value changed to " + value;
};
</script>
