---
title: คอมโพเนนต์เซลล์ปฏิทิน
descripttion: คอมโพเนนต์เซลล์ปฏิทินได้รับการออกแบบเพื่อแสดงข้อมูลกะในมุมมองปฏิทินสำหรับการจัดตารางเวลาพนักงานและการจัดการเวลา แต่ละเซลล์สามารถแสดงประเภทกะ สถานะ และเนื้อหาที่ปรับแต่งได้ต่างๆ
outline: deep
---

# คอมโพเนนต์เซลล์ปฏิทิน

คอมโพเนนต์ `spr-calendar-cell` ได้รับการออกแบบเพื่อแสดงข้อมูลกะในมุมมองปฏิทินสำหรับการจัดตารางเวลาพนักงานและการจัดการเวลา แต่ละเซลล์สามารถแสดงประเภทกะ สถานะ และเนื้อหาที่ปรับแต่งได้ต่างๆ

## ภาพรวม

เซลล์ปฏิทินให้วิธีการมาตรฐานในการแสดง:

- ประเภทกะพร้อมการเข้ารหัสสีที่สม่ำเสมอ
- ตัวบ่งชี้สถานะ (อนุมัติ, รอดำเนินการ, ข้อผิดพลาด)
- ข้อมูลเวลาและสถานที่
- เนื้อหาที่กำหนดเองผ่านสล็อต

คอมโพเนนต์ปรับให้เข้ากับบริบทต่างๆ เช่น กะมาตรฐาน วันหยุด (ป่วย, ลา, ฯลฯ) และสามารถปรับแต่งด้วยสถานะภาพที่แตกต่างกัน

## การใช้งานพื้นฐาน

### ประเภทกะ

คอมโพเนนต์เซลล์ปฏิทินรองรับประเภทกะต่างๆ แต่ละประเภทมีสไตล์ภาพของตัวเอง ซึ่งทำให้ง่ายต่อการแยกแยะกะต่างๆ ในแวบแรก

<div class="spr-grid spr-grid-cols-3 spr-gap-4">
  <spr-calendar-cell
    v-for="(shift, index) in shifts"
    :key="index"
    :type="shift.type"
    :title="shift.timeRange"
    :description="shift.branchName"
    @click="handleClick"
  />
</div>

```vue
<template>
  <spr-calendar-cell
    v-for="(shift, index) in shifts"
    :key="index"
    :type="shift.type"
    :title="shift.timeRange"
    :description="shift.branchName"
    @click="handleClick"
  />
</template>

<script lang="ts" setup>
// อาร์เรย์ของประเภทกะต่างๆ พร้อมรายละเอียด
const shifts = [
  { type: 'standard', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
  { type: 'early-morning', branchName: 'Main Branch', timeRange: '5:00 AM - 1:00 PM', hours: 8 },
  { type: 'late-morning', branchName: 'Main Branch', timeRange: '10:00 AM - 6:00 PM', hours: 8 },
  { type: 'afternoon', branchName: 'Main Branch', timeRange: '1:00 PM - 9:00 PM', hours: 8 },
  { type: 'graveyard', branchName: 'Main Branch', timeRange: '11:00 PM - 7:00 AM', hours: 8 },
  { type: 'broken', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
  { type: 'multi-break', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
  { type: 'flexible-break', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
  { type: 'flexible-weekly', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
  { type: 'flexible-daily', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
  { type: 'fixed-flexible', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
];

// ไม่บังคับ: จัดการเหตุการณ์คลิกเมื่อ viewOnly เป็น false
function handleClick(event) {
  console.log('Cell clicked:', event);
}
</script>
```

### ตัวบ่งชี้สถานะ

เซลล์ปฏิทินสามารถแสดงสถานะต่างๆ เพื่อระบุสถานะการอนุมัติ สถานะส่งผลต่อสไตล์เส้นขอบและสามารถแสดงตัวบ่งชี้ข้อผิดพลาดได้

<div class="spr-grid spr-grid-cols-3 spr-gap-4">
  <spr-calendar-cell
    v-for="(shift, index) in status"
    :key="index"
    :type="shift.type"
    :title="shift.timeRange"
    :description="shift.branchName"
    :status="shift.status"
  />
</div>

```vue
<template>
  <spr-calendar-cell
    v-for="(shift, index) in status"
    :key="index"
    :type="shift.type"
    :title="shift.timeRange"
    :description="shift.branchName"
    :status="shift.status"
  />
</template>

<script lang="ts" setup>
const status = [
  // สถานะเริ่มต้น/อนุมัติ - เส้นขอบทึบ
  { type: 'standard', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8, status: 'approved' },
  // สถานะรอดำเนินการ - เส้นขอบประ
  { type: 'standard', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8, status: 'pending' },
  // สถานะข้อผิดพลาด - เส้นขอบทึบพร้อมตัวบ่งชี้ข้อผิดพลาด
  { type: 'standard', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8, status: 'error' },
];
</script>
```

### ประเภทสถานะออฟไลน์

คอมโพเนนต์รวมประเภทพิเศษสำหรับวันหยุด การลา และวันหยุดเหล่านี้แสดงไอคอนและป้ายชื่อที่เหมาะสมโดยอัตโนมัติ

<div class="spr-grid spr-grid-cols-3 spr-gap-4">
  <spr-calendar-cell
    v-for="(shift, index) in offline"
    :key="index"
    :type="shift.type"
    :status="shift.status"
  />
</div>

```vue
<template>
  <spr-calendar-cell v-for="(shift, index) in offline" :key="index" :type="shift.type" :status="shift.status" />
</template>

<script lang="ts" setup>
import SprCalendarCell from '@/components/calendar-cell/calendar-cell.vue';

const offline = [
  // ประเภทออฟไลน์พื้นฐาน
  { type: 'sick' },
  { type: 'vacation' },
  { type: 'emergency' },
  { type: 'restday' },
  { type: 'exempt' },
  { type: 'holiday' },

  // ประเภทออฟไลน์ที่มีสถานะรอดำเนินการ
  { status: 'pending', type: 'sick' },
  { status: 'pending', type: 'vacation' },
  { status: 'pending', type: 'emergency' },
  { status: 'pending', type: 'restday' },
  { status: 'pending', type: 'exempt' },
  { status: 'pending', type: 'holiday' },

  // ประเภทออฟไลน์ที่มีสถานะข้อผิดพลาด
  { status: 'error', type: 'sick' },
  { status: 'error', type: 'vacation' },
  { status: 'error', type: 'emergency' },
  { status: 'error', type: 'restday' },
  { status: 'error', type: 'exempt' },
  { status: 'error', type: 'holiday' },
];
</script>
```

### เนื้อหาที่กำหนดเองโดยใช้สล็อต

คอมโพเนนต์ให้สล็อตสำหรับเนื้อหาที่กำหนดเองอย่างสมบูรณ์ในขณะที่รักษาสไตล์และตัวบ่งชี้สถานะของเซลล์

<div class="spr-grid spr-grid-cols-3 spr-gap-4">
  <spr-calendar-cell>
    <div class="spr-p-2">
      <div class="spr-font-medium">เนื้อหาที่กำหนดเอง</div>
      <div>คุณสามารถเพิ่ม HTML ใดๆ ที่นี่</div>
    </div>
  </spr-calendar-cell>
  <spr-calendar-cell
    status="pending"
  >
    <div class="spr-p-2">
      <div class="spr-font-medium">เซลล์รอดำเนินการ</div>
      <div>พร้อมเนื้อหาที่กำหนดเอง</div>
    </div>
  </spr-calendar-cell>
  <spr-calendar-cell
    status="error"
  >
    <div class="spr-p-2">
      <div class="spr-font-medium">เซลล์ข้อผิดพลาด</div>
      <div>พร้อมเนื้อหาที่กำหนดเอง</div>
    </div>
  </spr-calendar-cell>
</div>

```vue
<template>
  <!-- เซลล์ปฏิทินเริ่มต้นพร้อมเนื้อหาที่กำหนดเอง -->
  <spr-calendar-cell>
    <div class="spr-p-2">
      <div class="spr-font-medium">เนื้อหาที่กำหนดเอง</div>
      <div>คุณสามารถเพิ่ม HTML ใดๆ ที่นี่</div>
    </div>
  </spr-calendar-cell>

  <!-- สถานะรอดำเนินการพร้อมเนื้อหาที่กำหนดเอง -->
  <spr-calendar-cell status="pending">
    <div class="spr-p-2">
      <div class="spr-font-medium">เซลล์รอดำเนินการ</div>
      <div>พร้อมเนื้อหาที่กำหนดเอง</div>
    </div>
  </spr-calendar-cell>

  <!-- สถานะข้อผิดพลาดพร้อมเนื้อหาที่กำหนดเอง -->
  <spr-calendar-cell status="error">
    <div class="spr-p-2">
      <div class="spr-font-medium">เซลล์ข้อผิดพลาด</div>
      <div>พร้อมเนื้อหาที่กำหนดเอง</div>
    </div>
  </spr-calendar-cell>
</template>
```

### การแสดงเต็มความกว้าง

โดยค่าเริ่มต้น เซลล์ปฏิทินมีความกว้างสูงสุด ใช้ prop `fullwidth` เพื่อทำให้เซลล์ขยายไปยังความกว้างเต็มของคอนเทนเนอร์

<div class="spr-grid spr-grid-cols-1 spr-gap-4">
  <spr-calendar-cell 
    fullwidth 
    type="standard" 
    title="เซลล์ปฏิทินเต็มความกว้าง" 
    description="เซลล์นี้ใช้ความกว้างที่มีอยู่ทั้งหมด"
  />
  <spr-calendar-cell 
    type="standard" 
    title="เซลล์ปฏิทินความกว้างเริ่มต้น" 
    description="เซลล์นี้มีข้อจำกัดความกว้างสูงสุดเริ่มต้น"
  />
</div>

```vue
<template>
  <!-- เซลล์ปฏิทินเต็มความกว้าง -->
  <spr-calendar-cell
    fullwidth
    type="standard"
    title="เซลล์ปฏิทินเต็มความกว้าง"
    description="เซลล์นี้ใช้ความกว้างที่มีอยู่ทั้งหมด"
  />

  <!-- เซลล์ปฏิทินความกว้างเริ่มต้น -->
  <spr-calendar-cell
    type="standard"
    title="เซลล์ปฏิทินความกว้างเริ่มต้น"
    description="เซลล์นี้มีข้อจำกัดความกว้างสูงสุดเริ่มต้น"
  />
</template>
```

### สถานะการโหลด

ใช้ prop `loading` เพื่อแสดงภาพเคลื่อนไหวโครงกระดูกขณะดึงข้อมูล

<div class="spr-grid spr-grid-cols-1 spr-gap-4">
  <spr-calendar-cell fullwidth loading />
</div>

```vue
<template>
  <spr-calendar-cell fullwidth loading />
</template>
```

### สีที่กำหนดเอง

คุณสามารถแทนที่ชุดสีเริ่มต้นโดยใช้ prop `custom-color` สำหรับความทึบของพื้นหลังที่เหมาะสม รหัสสีเลขฐานสิบหกแนะนำ

<div class="spr-grid spr-grid-cols-2 spr-gap-4">
  <spr-calendar-cell 
    custom-color="#b134eb" 
    type="late-morning"
    title="สีเลขฐานสิบหกที่กำหนดเอง" 
    description="ใช้รหัสเลขฐานสิบหกพร้อมความทึบ"
  />
  <spr-calendar-cell 
    custom-color="blue" 
    type="late-morning"
    title="สีที่มีชื่อ" 
    description="ใช้สีที่มีชื่อโดยไม่มีความทึบ"
  />
</div>

```vue
<template>
  <!-- ใช้รหัสสีเลขฐานสิบหก (แนะนำสำหรับความทึบที่เหมาะสม) -->
  <spr-calendar-cell
    custom-color="#b134eb"
    type="late-morning"
    title="สีเลขฐานสิบหกที่กำหนดเอง"
    description="ใช้รหัสเลขฐานสิบหกพร้อมความทึบ"
  />

  <!-- ใช้สีที่มีชื่อ (ไม่มีเอฟเฟกต์ความทึบ) -->
  <spr-calendar-cell
    custom-color="blue"
    type="late-morning"
    title="สีที่มีชื่อ"
    description="ใช้สีที่มีชื่อโดยไม่มีความทึบ"
  />
</template>
```

::: tip
เมื่อใช้สีที่กำหนดเอง รูปแบบเลขฐานสิบหก (เช่น `#b134eb`) แนะนำสำหรับเอฟเฟกต์ความทึบของพื้นหลังที่เหมาะสม สไตล์สีของ prop `type` จะถูกเพิกเฉยเมื่อมีการระบุ `custom-color`
:::

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
      <td>type</td>
      <td>กำหนดประเภทของเซลล์ปฏิทินพร้อมสไตล์สีและป้ายชื่อเฉพาะ</td>
      <td><code>standard</code> | <code>early-morning</code> | <code>late-morning</code> | <code>afternoon</code> | <code>graveyard</code> | <code>broken</code> | <code>multi-break</code> | <code>flexible-break</code> | <code>flexible-weekly</code> | <code>flexible-daily</code> | <code>fixed-flexible</code> | <code>restday</code> | <code>vacation</code> | <code>holiday</code> | <code>exempt</code> | <code>sick</code> | <code>emergency</code></td>
      <td><code>standard</code></td>
    </tr>
    <tr>
      <td>status</td>
      <td>ควบคุมสถานะภาพของเซลล์ ส่งผลต่อสไตล์เส้นขอบ</td>
      <td><code>default</code> | <code>approved</code> | <code>pending</code> | <code>error</code></td>
      <td><code>default</code></td>
    </tr>
    <tr>
      <td>title</td>
      <td>ข้อความหลักที่แสดงในเซลล์ โดยปกติเป็นข้อมูลเวลา</td>
      <td>string</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>description</td>
      <td>ข้อความรองที่แสดงในเซลล์ โดยปกติเป็นข้อมูลสถานที่</td>
      <td>string</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>state</td>
      <td>สถานะที่ใช้สำหรับคอมโพเนนต์สถานะเมื่ออยู่ในสถานะข้อผิดพลาด</td>
      <td><code>success</code> | <code>information</code> | <code>pending</code> | <code>caution</code> | <code>danger</code></td>
      <td><code>danger</code></td>
    </tr>
    <tr>
      <td>fullwidth</td>
      <td>ทำให้เซลล์ใช้ความกว้างเต็มของคอนเทนเนอร์</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>viewOnly</td>
      <td>เมื่อเป็น true จะปิดใช้งานการโต้ตอบคลิก (ลบเอฟเฟกต์โฮเวอร์และเหตุการณ์คลิก)</td>
      <td>boolean</td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td>subDescription</td>
      <td>ข้อความไม่บังคับที่แทนที่ป้ายชื่อกะเริ่มต้น</td>
      <td>string</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>icon</td>
      <td>ไอคอนที่กำหนดเองเพื่อแทนที่ไอคอนเริ่มต้นสำหรับประเภทสถานะออฟไลน์</td>
      <td>string</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>loading</td>
      <td>แสดงภาพเคลื่อนไหวโครงกระดูกแทนเนื้อหา</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>customColor</td>
      <td>ใช้สีเส้นขอบและพื้นหลังที่กำหนดเองกับเซลล์ (รูปแบบเลขฐานสิบหกแนะนำสำหรับความทึบที่เหมาะสม)</td>
      <td>string</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>className</td>
      <td>ชื่อคลาส CSS เพิ่มเติมที่จะใช้กับคอมโพเนนต์</td>
      <td>string</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>customBorderSize</td>
      <td>ใช้ขนาดเส้นขอบที่กำหนดเองกับเซลล์</td>
      <td>string</td>
      <td><code>''</code></td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th>ชื่อเหตุการณ์</th>
      <th>คำอธิบาย</th>
      <th>พารามิเตอร์</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>@onClick</td>
      <td>ถูกปล่อยออกมาหากเซลล์ปฏิทินถูกคลิก (เฉพาะเมื่อ <code>viewOnly</code> เป็น <code>false</code>)</td>
      <td><code>(event: MouseEvent)</code></td>
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
      <td>default</td>
      <td>สล็อตเริ่มต้นสำหรับเนื้อหาที่กำหนดเอง แทนที่หัวเรื่อง คำอธิบาย และป้ายชื่อกะมาตรฐาน</td>
    </tr>
    <tr>
      <td>prefix</td>
      <td>สล็อตสำหรับเนื้อหาที่กำหนดเองก่อนเนื้อหาหลัก แทนที่ไอคอนสถานะสำหรับประเภทออฟไลน์</td>
    </tr>
  </tbody>
</table>

## การใช้ผลิตภัณฑ์

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
</div>

<script lang="ts" setup>
import SprCalendarCell from '@/components/calendar-cell/calendar-cell.vue'
import SprLogo from "@/components/logo/logo.vue";

const shifts = [
  { type: 'standard', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
  { type: 'early-morning', branchName: 'Main Branch', timeRange: '5:00 AM - 1:00 PM', hours: 8 },
  { type: 'late-morning', branchName: 'Main Branch', timeRange: '10:00 AM - 6:00 PM', hours: 8 },
  { type: 'afternoon', branchName: 'Main Branch', timeRange: '1:00 PM - 9:00 PM', hours: 8 },
  { type: 'graveyard', branchName: 'Main Branch', timeRange: '11:00 PM - 7:00 AM', hours: 8 },
  { type: 'broken', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
  { type: 'multi-break', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
  { type: 'flexible-break', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
  { type: 'flexible-weekly', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
  { type: 'flexible-daily', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
  { type: 'fixed-flexible', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
];

const status = [
  { type: 'standard', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8, status: 'approved' },
  { type: 'standard', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8, status: 'pending' },
  { type: 'standard', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8, status: 'error' },
];

const offline = [
  { type: 'sick'},
  { type: 'vacation'},
  { type: 'emergency'},
  { type: 'restday'},
  { type: 'exempt'},
  { type: 'holiday'},
  { status: 'pending' ,type: 'sick'},
  { status: 'pending' ,type: 'vacation'},
  { status: 'pending' ,type: 'emergency'},
  { status: 'pending' ,type: 'restday'},
  { status: 'pending' ,type: 'exempt'},
  { status: 'pending' ,type: 'holiday'},
  { status: 'error' ,type: 'sick'},
  { status: 'error' ,type: 'vacation'},
  { status: 'error' ,type: 'emergency'},
  { status: 'error' ,type: 'restday'},
  { status: 'error' ,type: 'exempt'},
  { status: 'error' ,type: 'holiday'},
];

function handleClick(event) {
  console.log('Cell clicked:', event);
}
</script>
