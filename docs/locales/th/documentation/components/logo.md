---
title: โลโก้ผลิตภัณฑ์
descripttion: คอมโพเนนต์โลโก้ผลิตภัณฑ์ช่วยให้แสดงโลโก้ผลิตภัณฑ์ Sprout ต่างๆ อย่างง่ายและสม่ำเสมอในแอปพลิเคชันของคุณ รองรับผลิตภัณฑ์ต่างๆ ชุดสี และตัวเลือกขนาด
outline: deep
---

# โลโก้ผลิตภัณฑ์

คอมโพเนนต์โลโก้ผลิตภัณฑ์ช่วยให้แสดงโลโก้ผลิตภัณฑ์ Sprout ต่างๆ อย่างง่ายและสม่ำเสมอในแอปพลิเคชันของคุณ รองรับผลิตภัณฑ์ต่างๆ ชุดสี และตัวเลือกขนาด

## ภาพรวม

คอมโพเนนต์โลโก้ผลิตภัณฑ์มีคุณสมบัติ:

- คอลเลกชันครบถ้วนของโลโก้ผลิตภัณฑ์ Sprout
- ชุดสีหลายแบบสำหรับพื้นหลังและบริบทที่แตกต่างกัน
- ปรับแต่งขนาดได้ตามความต้องการของเลย์เอาต์
- แอตทริบิวต์การเข้าถึงที่เหมาะสมสำหรับโปรแกรมอ่านหน้าจอ

## การใช้งานพื้นฐาน

วิธีที่ง่ายที่สุดในการใช้คอมโพเนนต์โลโก้คือไม่ต้องใช้ props ใดๆ ซึ่งจะแสดงโลโก้ Sprout HR เริ่มต้นด้วยธีมสีเข้ม

<div class="spr-flex spr-items-center spr-gap-4 spr-py-4 spr-rounded">
  <spr-logo />
</div>

```vue
<template>
  <spr-logo />
</template>

<script setup lang="ts">
import SprLogo from '@/components/logo/logo.vue';
</script>
```

:::tip
คอมโพเนนต์จะใช้แอตทริบิวต์ alt text และ title ที่เหมาะสมสำหรับการเข้าถึงโดยอัตโนมัติ โดยอิงตามชื่อผลิตภัณฑ์
:::

## ชุดสี

คอมโพเนนต์โลโก้รองรับชุดสีสี่แบบเพื่อให้เข้ากับสีพื้นหลังและบริบทการออกแบบต่างๆ ใช้ prop `theme` เพื่อระบุธีมที่ต้องการ

<div class="spr-flex spr-flex-wrap spr-items-center spr-gap-4 spr-py-4 spr-rounded">
  <div class="spr-p-4 spr-bg-black">
    <spr-logo theme="white" name="hr" />
  </div>
  <div class="spr-p-4 spr-bg-white">
    <spr-logo theme="dark" name="hr" />
  </div>
  <div class="spr-p-4 spr-bg-white">
    <spr-logo theme="gray" name="hr" />
  </div>
  <div class="spr-p-4 spr-bg-white">
    <spr-logo theme="green" name="hr" />
  </div>
</div>

```vue
<template>
  <!-- ธีมสีขาว (เหมาะสำหรับพื้นหลังสีเข้ม) -->
  <spr-logo theme="white" name="hr" />

  <!-- ธีมสีเข้ม (ค่าเริ่มต้น) -->
  <spr-logo theme="dark" name="hr" />

  <!-- ธีมสีเทา (ตัวเลือกที่ละเอียดอ่อนสำหรับพื้นหลังสีอ่อน) -->
  <spr-logo theme="gray" name="hr" />

  <!-- ธีมสีเขียว (เน้นสีแบรนด์) -->
  <spr-logo theme="green" name="hr" />
</template>
```

:::tip การเลือกธีม

- ใช้ธีม `white` บนพื้นหลังสีเข้มเพื่อความคมชัดที่ดีที่สุด
- ใช้ธีม `dark` (ค่าเริ่มต้น) บนพื้นหลังสีอ่อนสำหรับการสร้างแบรนด์มาตรฐาน
- ใช้ธีม `gray` สำหรับรูปลักษณ์ที่ละเอียดอ่อนกว่าบนพื้นหลังสีอ่อน
- ใช้ธีม `green` เมื่อคุณต้องการเน้นสีแบรนด์
  :::

## โลโก้ผลิตภัณฑ์

คอมโพเนนต์โลโก้รองรับผลิตภัณฑ์ Sprout หลากหลาย ใช้ prop `name` เพื่อระบุโลโก้ผลิตภัณฑ์ที่ต้องการ

<div class="spr-grid spr-grid-cols-3 spr-gap-4 spr-py-4 spr-rounded">
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="benchmark" />
    <span class="spr-text-xs">benchmark</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="ecosystem" />
    <span class="spr-text-xs">ecosystem</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="engage" />
    <span class="spr-text-xs">engage</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="finances" />
    <span class="spr-text-xs">finances</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="hr-mobile" />
    <span class="spr-text-xs">hr-mobile</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="hr" />
    <span class="spr-text-xs">hr</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="inbound" />
    <span class="spr-text-xs">inbound</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="insight" />
    <span class="spr-text-xs">insight</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="readycash" />
    <span class="spr-text-xs">readycash</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="readywage" />
    <span class="spr-text-xs">readywage</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="payroll" />
    <span class="spr-text-xs">payroll</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="performance-plus" />
    <span class="spr-text-xs">performance-plus</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="procurement" />
    <span class="spr-text-xs">procurement</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="professional-services" />
    <span class="spr-text-xs">professional-services</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="recruit" />
    <span class="spr-text-xs">recruit</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="recruit-plus" />
    <span class="spr-text-xs">recruit-plus</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="sail" />
    <span class="spr-text-xs">sail</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="sidekick" />
    <span class="spr-text-xs">sidekick</span>
  </div>
  <div class="spr-flex spr-flex-col spr-items-center spr-gap-2">
    <spr-logo name="wellness" />
    <span class="spr-text-xs">wellness</span>
  </div>
</div>

```vue
<template>
  <spr-logo name="benchmark" />
  <spr-logo name="ecosystem" />
  <spr-logo name="engage" />
  <spr-logo name="finances" />
  <spr-logo name="hr-mobile" />
  <spr-logo name="hr" />
  <!-- ค่าเริ่มต้น -->
  <spr-logo name="inbound" />
  <spr-logo name="insight" />
  <spr-logo name="readycash" />
  <spr-logo name="readywage" />
  <spr-logo name="payroll" />
  <spr-logo name="performance-plus" />
  <spr-logo name="procurement" />
  <spr-logo name="professional-services" />
  <spr-logo name="recruit" />
  <spr-logo name="recruit-plus" />
  <spr-logo name="sail" />
  <spr-logo name="sidekick" />
  <spr-logo name="wellness" />
</template>
```

## การปรับแต่งขนาด

คอมโพเนนต์โลโก้ช่วยให้คุณปรับแต่งขนาดได้โดยใช้ prop `width` คุณสามารถระบุตัวเลข (ตีความเป็นพิกเซล) หรือสตริงที่มีหน่วย CSS

<div class="spr-flex spr-flex-wrap spr-items-end spr-gap-4 spr-py-4 spr-rounded">
  <spr-logo width="30" />
  <spr-logo width="50" /> <!-- ขนาดเริ่มต้น -->
  <spr-logo width="80" />
  <spr-logo width="120" />
  <spr-logo width="5em" />
</div>

```vue
<template>
  <spr-logo width="30" />
  <!-- 30px -->
  <spr-logo width="50" />
  <!-- ขนาดเริ่มต้น 50px -->
  <spr-logo width="80" />
  <!-- 80px -->
  <spr-logo width="120" />
  <!-- 120px -->
  <spr-logo width="5em" />
  <!-- ใช้หน่วย em -->
</template>
```

:::tip
เมื่อระบุตัวเลขโดยไม่มีหน่วย (เช่น `50`) จะถูกตีความเป็นพิกเซล สำหรับหน่วยอื่นๆ ให้ระบุอย่างชัดเจน (เช่น `5em` หรือ `10rem`)
:::

## กรณีการใช้งานทั่วไป

คอมโพเนนต์โลโก้มักใช้ใน:

1. **ส่วนหัวของแอปพลิเคชัน**: แสดงโลโก้ผลิตภัณฑ์ในแถบนำทางด้านบน
2. **หน้าเข้าสู่ระบบ**: แสดงโลโก้ผลิตภัณฑ์อย่างเด่นชัดระหว่างการตรวจสอบสิทธิ์
3. **เทมเพลตอีเมล**: รวมการสร้างแบรนด์ผลิตภัณฑ์ในการแจ้งเตือน
4. **หน้าเกี่ยวกับเรา**: แสดงโลโก้ผลิตภัณฑ์หลายรายการในส่วนผลงาน
5. **วัสดุทางการตลาด**: นำเสนอโลโก้ผลิตภัณฑ์ด้วยขนาดและธีมที่สม่ำเสมอ

## API Reference

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
      <td><code>name</code></td>
      <td>ระบุโลโก้ผลิตภัณฑ์ที่จะแสดง</td>
      <td>string</td>
      <td><code>'hr'</code></td>
    </tr>
    <tr>
      <td><code>theme</code></td>
      <td>ระบุธีมสีของโลโก้</td>
      <td>string</td>
      <td><code>'dark'</code></td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td>กำหนดความกว้างของโลโก้ สามารถเป็นตัวเลข (ตีความเป็นพิกเซล) หรือสตริงที่มีหน่วย CSS</td>
      <td>string | number</td>
      <td><code>50</code> (50px)</td>
    </tr>
  </tbody>
</table>

### ผลิตภัณฑ์ที่มีให้

ชื่อผลิตภัณฑ์ต่อไปนี้ได้รับการรองรับผ่าน prop `name`:

- `benchmark`
- `ecosystem`
- `engage`
- `finances`
- `hr-mobile`
- `hr` (ค่าเริ่มต้น)
- `inbound`
- `insight`
- `readycash`
- `readywage`
- `payroll`
- `performance-plus`
- `procurement`
- `professional-services`
- `recruit`
- `recruit-plus`
- `sail`
- `sidekick`
- `wellness`

### ธีมที่มีให้

ธีมต่อไปนี้ได้รับการรองรับผ่าน prop `theme`:

- `white` - เหมาะสำหรับพื้นหลังสีเข้ม
- `dark` (ค่าเริ่มต้น) - การสร้างแบรนด์มาตรฐานสำหรับพื้นหลังสีอ่อน
- `gray` - ตัวเลือกที่ละเอียดอ่อนสำหรับพื้นหลังสีอ่อน
- `green` - เน้นสีแบรนด์

### การเข้าถึง

คอมโพเนนต์โลโก้จะจัดเตรียมแอตทริบิวต์ `alt` และ `title` ที่เหมาะสมสำหรับโลโก้ผลิตภัณฑ์แต่ละรายการโดยอัตโนมัติเพื่อให้มั่นใจถึงการเข้าถึงสำหรับโปรแกรมอ่านหน้าจอ แอตทริบิวต์เหล่านี้ถูกสร้างขึ้นตามชื่อผลิตภัณฑ์ (เช่น "Sprout HR" สำหรับ `name="hr"`)

<script setup lang="ts">
import SprLogo from "@/components/logo/logo.vue";
</script>
