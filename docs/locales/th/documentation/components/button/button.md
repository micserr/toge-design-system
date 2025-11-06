---
title: ปุ่ม
descripttion: คอมโพเนนต์ปุ่มเป็นองค์ประกอบที่หลากหลายและใช้กันทั่วไปในอินเทอร์เฟซผู้ใช้ ออกแบบมาเพื่อเรียกใช้การดำเนินการหรือเหตุการณ์เมื่อถูกคลิก สามารถปรับแต่งได้หลายวิธี รวมถึงขนาด โทน และตัวแปร เพื่อให้เหมาะกับความต้องการการออกแบบที่แตกต่างกัน ปุ่มยังสามารถรวมไอคอนเพื่อการสื่อสารภาพที่เพิ่มขึ้น และสามารถปิดใช้งานเพื่อป้องกันการโต้ตอบของผู้ใช้เมื่อจำเป็น
outline: deep
---

# ปุ่ม

คอมโพเนนต์ปุ่มเป็นองค์ประกอบที่หลากหลายและใช้กันทั่วไปในอินเทอร์เฟซผู้ใช้ ออกแบบมาเพื่อเรียกใช้การดำเนินการหรือเหตุการณ์เมื่อถูกคลิก สามารถปรับแต่งได้หลายวิธี รวมถึงขนาด โทน และตัวแปร เพื่อให้เหมาะกับความต้องการการออกแบบที่แตกต่างกัน ปุ่มยังสามารถรวมไอคอนเพื่อการสื่อสารภาพที่เพิ่มขึ้น และสามารถปิดใช้งานเพื่อป้องกันการโต้ตอบของผู้ใช้เมื่อจำเป็น

## การใช้งานพื้นฐาน

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button>ปุ่ม</spr-button>
</div>

```vue
<spr-button>ปุ่ม</spr-button>
```

## โทน

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button data-testid="button-tone-neutral">เป็นกลาง</spr-button>
  <spr-button data-testid="button-tone-success" tone="success">สำเร็จ</spr-button>
  <spr-button data-testid="button-tone-danger" tone="danger">อันตราย</spr-button>
</div>

```vue
<spr-button>เป็นกลาง/เริ่มต้น</spr-button>
<spr-button tone="success">สำเร็จ</spr-button>
<spr-button tone="danger">อันตราย</spr-button>
```

## ขนาด

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button size="small" data-testid="button-size-small">เล็ก</spr-button>
  <spr-button data-testid="button-size-medium">กลาง</spr-button>
  <spr-button size="large" data-testid="button-size-large">ใหญ่</spr-button>
</div>

```vue
<spr-button size="small">เล็ก</spr-button>
<spr-button>กลาง/เริ่มต้น</spr-button>
<spr-button size="large">ใหญ่</spr-button>
```

## ตัวแปร

<div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
  <spr-button data-testid="button-tone-neutral-variant-primary">หลัก</spr-button>
  <spr-button variant="secondary" data-testid="button-tone-neutral-variant-secondary">รอง</spr-button>
  <spr-button variant="tertiary" data-testid="button-tone-neutral-variant-tertiary">ระดับสาม</spr-button>
</div>
<div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
  <spr-button tone="success" data-testid="button-tone-success-variant-primary">หลัก</spr-button>
  <spr-button tone="success" variant="secondary" data-testid="button-tone-success-variant-secondary">รอง</spr-button>
  <spr-button tone="success" variant="tertiary" data-testid="button-tone-success-variant-tertiary">ระดับสาม</spr-button>
</div>
<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button tone="danger" data-testid="button-tone-danger-variant-primary">หลัก</spr-button>
  <spr-button tone="danger" variant="secondary" data-testid="button-tone-danger-variant-secondary">รอง</spr-button>
  <spr-button tone="danger" variant="tertiary" data-testid="button-tone-danger-variant-tertiary">ระดับสาม</spr-button>
</div>

```vue
// หลัก/เริ่มต้น
<spr-button>หลัก/เริ่มต้น</spr-button>
<spr-button variant="secondary">รอง</spr-button>
<spr-button variant="tertiary">ระดับสาม</spr-button>

// สำเร็จ
<spr-button tone="success">หลัก/เริ่มต้น</spr-button>
<spr-button tone="success" variant="secondary">รอง</spr-button>
<spr-button tone="success" variant="tertiary">ระดับสาม</spr-button>

// อันตราย
<spr-button tone="danger">หลัก/เริ่มต้น</spr-button>
<spr-button tone="danger" variant="secondary">รอง</spr-button>
<spr-button tone="danger" variant="tertiary">ระดับสาม</spr-button>
```

## ปิดใช้งาน

<div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
  <spr-button size="small" disabled>หลัก</spr-button>
  <spr-button size="small" variant="secondary" disabled>รอง</spr-button>
  <spr-button size="small" variant="tertiary" disabled>ระดับสาม</spr-button>
</div>
<div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
  <spr-button  disabled>หลัก</spr-button>
  <spr-button variant="secondary" disabled>รอง</spr-button>
  <spr-button variant="tertiary" disabled>ระดับสาม</spr-button>
</div>
<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button size="large" disabled>หลัก</spr-button>
  <spr-button size="large" variant="secondary" disabled>รอง</spr-button>
  <spr-button size="large" variant="tertiary" disabled>ระดับสาม</spr-button>
</div>

```vue
<spr-button disabled size="small">เล็ก</spr-button>
<spr-button disabled>กลาง/เริ่มต้น</spr-button>
<spr-button disabled size="large">ใหญ่</spr-button>
```

## ไอคอน

### ไอคอนพร้อมข้อความ

<div class="spr-mt-4">
  <div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
    <spr-button size="small" hasIcon >
      <Icon icon="ph:trash" />
      <span>ปุ่ม</span>
    </spr-button>
    <spr-button variant="secondary" hasIcon>
      <Icon icon="ph:trash" />
      <span>ปุ่ม</span>
    </spr-button>
    <spr-button size="large" variant="tertiary" hasIcon>
      <Icon icon="ph:trash" />
      <span>ปุ่ม</span>
    </spr-button>
  </div>

  <div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
    <spr-button size="small" tone="success" hasIcon>
      <Icon icon="ph:trash" />
      <span>ปุ่ม</span>
    </spr-button>
    <spr-button tone="success" variant="secondary" hasIcon>
      <Icon icon="ph:trash" />
      <span>ปุ่ม</span>
    </spr-button>
    <spr-button size="large" tone="success"variant="tertiary" hasIcon>
      <Icon icon="ph:trash" />
      <span>ปุ่ม</span>
    </spr-button>
  </div>

  <div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
    <spr-button size="small" tone="danger" hasIcon>
      <Icon icon="ph:trash" />
      <span>ปุ่ม</span>
    </spr-button>
    <spr-button tone="danger" variant="secondary" hasIcon>
      <Icon icon="ph:trash" />
      <span>ปุ่ม</span>
    </spr-button>
    <spr-button size="large" tone="danger" variant="tertiary" hasIcon>
      <Icon icon="ph:trash" />
      <span>ปุ่ม</span>
    </spr-button>
  </div>

  <div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
    <spr-button size="small" tone="danger" hasIcon disabled>
      <Icon icon="ph:trash" />
      <span>ปุ่ม</span>
    </spr-button>
    <spr-button tone="danger" variant="secondary" hasIcon disabled>
      <Icon icon="ph:trash" />
      <span>ปุ่ม</span>
    </spr-button>
    <spr-button size="large" tone="danger" variant="tertiary" hasIcon disabled>
      <Icon icon="ph:trash" />
      <span>ปุ่ม</span>
    </spr-button>
  </div>
</div>

### ไอคอนเท่านั้น

<div class="spr-mt-4">
  <div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
    <spr-button size="small" hasIcon>
      <Icon icon="ph:trash" />
    </spr-button>
    <spr-button variant="secondary" hasIcon>
      <Icon icon="ph:trash" />
    </spr-button>
    <spr-button size="large" variant="tertiary" hasIcon>
      <Icon icon="ph:trash" />
    </spr-button>
  </div>

  <div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
    <spr-button size="small" tone="success" hasIcon>
      <Icon icon="ph:trash" />
    </spr-button>
    <spr-button tone="success"  variant="secondary" hasIcon>
      <Icon icon="ph:trash" />
    </spr-button>
    <spr-button size="large" tone="success"variant="tertiary" hasIcon>
      <Icon icon="ph:trash" />
    </spr-button>
  </div>

  <div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
    <spr-button size="small" tone="danger" hasIcon>
      <Icon icon="ph:trash" />
    </spr-button>
    <spr-button tone="danger" variant="secondary" hasIcon>
      <Icon icon="ph:trash" />
    </spr-button>
    <spr-button size="large" tone="danger" variant="tertiary" hasIcon>
      <Icon icon="ph:trash" />
    </spr-button>
  </div>

  <div class="spr-flex spr-items-center spr-gap-2 spr-mb-2">
    <spr-button size="small" tone="danger" hasIcon disabled>
      <Icon icon="ph:trash" />
    </spr-button>
    <spr-button tone="danger" variant="secondary" hasIcon disabled>
      <Icon icon="ph:trash" />
    </spr-button>
    <spr-button size="large" tone="danger" variant="tertiary" hasIcon disabled>
      <Icon icon="ph:trash" />
    </spr-button>
  </div>
</div>

```vue
<template>
  <spr-button hasIcon>
    <Icon icon="ph:trash" />
    <span>ปุ่ม</span>
  </spr-button>

  <spr-button iconOnly>
    <Icon icon="ph:trash" />
    <span>ปุ่ม</span>
  </spr-button>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>
```

## เต็มความกว้าง

<div class="spr-space-y-2">
<spr-button fullwidth>ปุ่ม</spr-button>
<spr-button fullwidth variant="secondary">ปุ่ม</spr-button>
<spr-button fullwidth variant="tertiary">ปุ่ม</spr-button>
</div>

```vue
<spr-button fullwidth>ปุ่ม</spr-button>
```

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
      <td>tone</td>
      <td>ควบคุมธีมสีของปุ่ม ใช้ <code>neutral</code> สำหรับการดำเนินการมาตรฐาน <code>success</code> สำหรับการดำเนินการเชิงบวก และ <code>danger</code> สำหรับการดำเนินการที่มีลักษณะทำลาย</td>
      <td>'neutral' | 'success' | 'danger'</td>
      <td>'neutral'</td>
    </tr>
    <tr>
      <td>size</td>
      <td>กำหนดขนาดของปุ่ม ส่งผลต่อการเว้นระยะ ขนาดตัวอักษร และมิติโดยรวม</td>
      <td>'small' | 'medium' | 'large'</td>
      <td>'medium'</td>
    </tr>
    <tr>
      <td>variant</td>
      <td>ควบคุมสไตล์ภาพของปุ่ม <code>primary</code> ให้การเน้นที่แข็งแกร่งที่สุด <code>secondary</code> มีการเน้นปานกลางพร้อมโครงร่าง และ <code>tertiary</code> ให้สไตล์ที่ละเอียดที่สุด</td>
      <td>'primary' | 'secondary' | 'tertiary'</td>
      <td>'primary'</td>
    </tr>
    <tr>
      <td>type</td>
      <td>ระบุแอตทริบิวต์ประเภทปุ่ม HTML ดั้งเดิม</td>
      <td>'button' | 'submit' | 'reset'</td>
      <td>'button'</td>
    </tr>
    <tr>
      <td>state</td>
      <td>กำหนดสถานะภาพของปุ่ม ใช้ภายในส่วนใหญ่</td>
      <td>'base' | 'hover' | 'pressed' | 'focus'</td>
      <td>'base'</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>เมื่อตั้งค่าเป็น <code>true</code> จะป้องกันการโต้ตอบของผู้ใช้และใช้สถานะปิดใช้งานภาพ</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>hasIcon</td>
      <td>ระบุว่าปุ่มมีไอคอน ซึ่งส่งผลต่อการเว้นระยะและเลย์เอาต์</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>fullwidth</td>
      <td>เมื่อตั้งค่าเป็น <code>true</code> ปุ่มจะขยายเพื่อเติมความกว้างของคอนเทนเนอร์</td>
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
      <td>click</td>
      <td>ถูกปล่อยออกมาหากปุ่มถูกคลิกและไม่ได้ปิดใช้งาน</td>
      <td>(event: MouseEvent)</td>
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
      <td>เนื้อหาที่จะแสดงภายในปุ่ม สามารถรวมข้อความ ไอคอน หรือองค์ประกอบอื่นๆ</td>
    </tr>
  </tbody>
</table>

### การเข้าถึง

คอมโพเนนต์ปุ่มปฏิบัติตามแนวทางปฏิบัติที่ดีที่สุดด้านการเข้าถึง:

- ใช้องค์ประกอบ `<button>` ดั้งเดิมสำหรับการนำทางแป้นพิมพ์ที่เหมาะสมและการสนับสนุนโปรแกรมอ่านหน้าจอ
- ตั้งค่า `aria-disabled="true"` เมื่อปุ่มถูกปิดใช้งาน
- รักษาสถานะโฮเวอร์และโฟกัสสำหรับผู้ใช้แป้นพิมพ์
- รักษาความคมชัดของสีที่เพียงพอในทุกสถานะและตัวแปร
- สนับสนุนการโฟกัสอัตโนมัติเมื่อ prop `state` ถูกตั้งค่าเป็น 'focus'

## การใช้ผลิตภัณฑ์

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark" width="50px" />
  <spr-logo name="payroll" theme="dark" width="50px" />
  <spr-logo name="ecosystem" theme="dark" width="50px" />
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import SprButton from "@/components/button/button.vue";
import SprLogo from "@/components/logo/logo.vue";
import { Icon } from '@iconify/vue';
</script>
