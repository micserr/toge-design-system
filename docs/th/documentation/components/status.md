---
title: สถานะ
descripttion: คอมโพเนนต์ Status จัดเตรียมวิธีการมาตรฐานในการแสดงตัวบ่งชี้สถานะทั่วทั้งแอปพลิเคชัน มันช่วยให้มั่นใจถึงความสม่ำเสมอของสี ไอคอน และการเข้าถึงสำหรับสถานะต่างๆ เช่น สำเร็จ ข้อมูล รอดำเนินการ เตือน และอันตราย
outline: deep
---

# สถานะ

คอมโพเนนต์ Status จัดเตรียมวิธีการมาตรฐานในการแสดงตัวบ่งชี้สถานะทั่วทั้งแอปพลิเคชัน มันช่วยให้มั่นใจถึงความสม่ำเสมอของสี ไอคอน และการเข้าถึงสำหรับสถานะต่างๆ เช่น สำเร็จ ข้อมูล รอดำเนินการ เตือน และอันตราย

## การใช้งานพื้นฐาน

<div class="spr-flex spr-flex-row spr-gap-2">
  <spr-status state="success" />
  <spr-status state="information" />
  <spr-status state="pending" />
  <spr-status state="caution" />
  <spr-status state="danger" />
</div>

```vue
<template>
  <spr-status state="success" />
  <spr-status state="information" />
  <spr-status state="pending" />
  <spr-status state="caution" />
  <spr-status state="danger" />
</template>
```

## ขนาด

คอมโพเนนต์ status มีขนาด 7 ขนาด คุณสามารถใช้ prop `size` เพื่อกำหนดขนาดของสถานะ ขนาดเริ่มต้นคือ `base` ขนาดที่มีให้เลือกได้คือ `2xl`, `xl`, `lg`, `base`, `sm`, `xs`, `2xs`

<div class="spr-flex spr-flex-row spr-gap-2 spr-items-center">
  <spr-status state="success" size="2xl" />
  <spr-status state="success" size="xl" />
  <spr-status state="success" size="lg" />
  <spr-status state="success" size="base" />
  <spr-status state="success" size="sm" />
  <spr-status state="success" size="xs" />
  <spr-status state="success" size="2xs" />
</div>

<div class="spr-flex spr-flex-row spr-gap-2 spr-items-center">
  <spr-status state="information" size="2xl" />
  <spr-status state="information" size="xl" />
  <spr-status state="information" size="lg"/>
  <spr-status state="information" size="base" />
  <spr-status state="information" size="sm" />
  <spr-status state="information" size="xs" />
  <spr-status state="information" size="2xs" />
</div>

<div class="spr-flex spr-flex-row spr-gap-2 spr-items-center">
  <spr-status state="pending" size="2xl" />
  <spr-status state="pending" size="xl" />
  <spr-status state="pending" size="lg"/>
  <spr-status state="pending" size="base" />
  <spr-status state="pending" size="sm" />
  <spr-status state="pending" size="xs" />
  <spr-status state="pending" size="2xs" />
</div>

<div class="spr-flex spr-flex-row spr-gap-2 spr-items-center">
  <spr-status state="caution" size="2xl" />
  <spr-status state="caution" size="xl" />
  <spr-status state="caution" size="lg"/>
  <spr-status state="caution" size="base" />
  <spr-status state="caution" size="sm" />
  <spr-status state="caution" size="xs" />
  <spr-status state="caution" size="2xs" />
</div>

<div class="spr-flex spr-flex-row spr-gap-2 spr-items-center">
  <spr-status state="danger" size="2xl" />
  <spr-status state="danger" size="xl" />
  <spr-status state="danger" size="lg"/>
  <spr-status state="danger" size="base" />
  <spr-status state="danger" size="sm" />
  <spr-status state="danger" size="xs" />
  <spr-status state="danger" size="2xs" />
</div>

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
        <code>state</code>
      </td>
      <td>
        กำหนดสถานะของสถานะที่จะแสดง แต่ละสถานะมีสีและไอคอนเฉพาะ:
        <ul>
          <li><code>success</code>: วงกลมเช็คสีเขียวสำหรับการดำเนินการที่สำเร็จ</li>
          <li><code>information</code>: ไอคอนข้อมูลสีน้ำเงินสำหรับข้อความข้อมูล</li>
          <li><code>pending</code>: ไอคอนคำเตือนสีเหลืองสำหรับสถานะรอดำเนินการ</li>
          <li><code>caution</code>: ไอคอนคำเตือนสีส้มสำหรับสถานะเตือน</li>
          <li><code>danger</code>: วงกลมคำเตือนสีแดงสำหรับข้อผิดพลาดหรือสถานะอันตราย</li>
        </ul>
      </td>
      <td>'success' | 'information' | 'pending' | 'caution' | 'danger'</td>
      <td><code>'success'</code></td>
    </tr>
    <tr>
      <td>
        <code>size</code>
      </td>
      <td>
        กำหนดขนาดของตัวบ่งชี้สถานะ จัดเตรียมความยืดหยุ่นสำหรับเลย์เอาต์ UI และระดับความสำคัญที่แตกต่างกัน:
        <ul>
          <li><code>2xs</code>: 14px × 14px</li>
          <li><code>xs</code>: 16px × 16px</li>
          <li><code>sm</code>: 20px × 20px</li>
          <li><code>base</code>: 24px × 24px</li>
          <li><code>lg</code>: 32px × 32px</li>
          <li><code>xl</code>: 40px × 40px</li>
          <li><code>2xl</code>: 48px × 48px</li>
        </ul>
      </td>
      <td>'2xs' | 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'</td>
      <td><code>'base'</code></td>
    </tr>
  </tbody>
</table>

### ไอคอน

<table>
  <thead>
    <tr>
      <th class="spr-min-w-[180px]">สถานะ</th>
      <th>ไอคอน</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>สำเร็จ</td>
      <td><code>ph:check-circle-fill</code></td>
    </tr>
    <tr>
      <td>ข้อมูล</td>
      <td><code>ph:info-fill</code></td>
    </tr>
    <tr>
      <td>รอดำเนินการ</td>
      <td><code>ph:warning-fill</code></td>
    </tr>
    <tr>
      <td>เตือน</td>
      <td><code>ph:warning-fill</code></td>
    </tr>
    <tr>
      <td>อันตราย</td>
      <td><code>ph:warning-circle-fill</code></td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import SprStatus from "@/components/status/status.vue";
</script>
