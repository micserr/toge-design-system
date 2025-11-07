---
outline: 'deep'
---

# ไอคอน

คอมโพเนนต์ไอคอนให้วิธีที่สอดคล้องกันในการแสดงไอคอนด้วยขนาด โทน และตัวแปรต่างๆ ทั่วทั้งแอปพลิเคชัน

## คุณสมบัติหลัก

<ul>
  <li>
    <strong>หลายขนาด:</strong>
    <span>ตัวเลือกขนาดเจ็ดแบบจาก 2xs ถึง 2xl สำหรับการปรับขนาดที่ยืดหยุ่น</span>
  </li>
  <li>
    <strong>โทนเชิงความหมาย:</strong>
    <span>โทนห้าประเภทสำหรับการแสดงสถานะ: success, error, info, pending และ caution</span>
  </li>
  <li>
    <strong>ตัวแปรภาพ:</strong>
    <span>ตัวแปรการจัดสไตล์สามแบบ: primary (เต็ม), secondary (เค้าโครง) และ tertiary (ธรรมดา)</span>
  </li>
  <li>
    <strong>การรวม Iconify:</strong>
    <span>การรวมอย่างราบรื่นกับไลบรารีไอคอนที่ครอบคลุมของ Iconify</span>
  </li>
  <li>
    <strong>การจัดสไตล์ที่สอดคล้อง:</strong>
    <span>ลักษณะที่เป็นมาตรฐานด้วยการเว้นวรรคและการจัดตำแหน่งที่เหมาะสม</span>
  </li>
</ul>

## การใช้งานพื้นฐาน

ไอคอนพื้นฐานต้องมี ID และชื่อไอคอนจากไลบรารี Iconify

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-icon id="basic-icon" icon="ph:user" />
</div>

```vue
<spr-icon id="basic-icon" icon="ph:user" />
```

## ขนาด

ไอคอนสามารถแสดงได้ในขนาดต่างๆ เพื่อให้ตรงกับบริบท UI ที่แตกต่างกัน

<div class="spr-flex spr-items-center spr-gap-4 spr-p-4">
  <spr-icon id="icon-2xs" icon="ph:user" size="2xs" />
  <spr-icon id="icon-xs" icon="ph:user" size="xs" />
  <spr-icon id="icon-sm" icon="ph:user" size="sm" />
  <spr-icon id="icon-md" icon="ph:user" size="md" />
  <spr-icon id="icon-lg" icon="ph:user" size="lg" />
  <spr-icon id="icon-xl" icon="ph:user" size="xl" />
  <spr-icon id="icon-2xl" icon="ph:user" size="2xl" />
</div>

```vue
<template>
  <spr-icon id="icon-2xs" icon="ph:user" size="2xs" />
  <spr-icon id="icon-xs" icon="ph:user" size="xs" />
  <spr-icon id="icon-sm" icon="ph:user" size="sm" />
  <spr-icon id="icon-md" icon="ph:user" size="md" />
  <spr-icon id="icon-lg" icon="ph:user" size="lg" />
  <spr-icon id="icon-xl" icon="ph:user" size="xl" />
  <spr-icon id="icon-2xl" icon="ph:user" size="2xl" />
</template>
```

## โทนและตัวแปร

ไอคอนสามารถจัดสไตล์ด้วยโทนและตัวแปรที่แตกต่างกันเพื่อสื่อความหมายหรือสถานะ

### ตัวแปรหลัก (เต็ม)

<div class="spr-flex spr-items-center spr-gap-4 spr-p-4">
  <spr-icon id="success-primary" icon="ph:check-circle" tone="success" variant="primary" />
  <spr-icon id="error-primary" icon="ph:x-circle" tone="error" variant="primary" />
  <spr-icon id="info-primary" icon="ph:info" tone="info" variant="primary" />
  <spr-icon id="pending-primary" icon="ph:clock" tone="pending" variant="primary" />
  <spr-icon id="caution-primary" icon="ph:warning" tone="caution" variant="primary" />
</div>

### ตัวแปรรอง (เค้าโครง)

<div class="spr-flex spr-items-center spr-gap-4 spr-p-4">
  <spr-icon id="success-secondary" icon="ph:check-circle" tone="success" variant="secondary" />
  <spr-icon id="error-secondary" icon="ph:x-circle" tone="error" variant="secondary" />
  <spr-icon id="info-secondary" icon="ph:info" tone="info" variant="secondary" />
  <spr-icon id="pending-secondary" icon="ph:clock" tone="pending" variant="secondary" />
  <spr-icon id="caution-secondary" icon="ph:warning" tone="caution" variant="secondary" />
</div>

### ตัวแปรสาม (ธรรมดา)

<div class="spr-flex spr-items-center spr-gap-4 spr-p-4">
  <spr-icon id="success-tertiary" icon="ph:check-circle" tone="success" variant="tertiary" />
  <spr-icon id="error-tertiary" icon="ph:x-circle" tone="error" variant="tertiary" />
  <spr-icon id="info-tertiary" icon="ph:info" tone="info" variant="tertiary" />
  <spr-icon id="pending-tertiary" icon="ph:clock" tone="pending" variant="tertiary" />
  <spr-icon id="caution-tertiary" icon="ph:warning" tone="caution" variant="tertiary" />
</div>

```vue
<template>
  <!-- ตัวแปรหลัก -->
  <spr-icon id="success-primary" icon="ph:check-circle" tone="success" variant="primary" />

  <!-- ตัวแปรรอง -->
  <spr-icon id="info-secondary" icon="ph:info" tone="info" variant="secondary" />

  <!-- ตัวแปรสาม -->
  <spr-icon id="warning-tertiary" icon="ph:warning" tone="caution" variant="tertiary" />
</template>
```

## การอ้างอิง API

### พร็อพส์

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
      <td>ตัวระบุเฉพาะสำหรับไอคอน จำเป็นสำหรับการทำงานที่เหมาะสม</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>ชื่อไอคอน Iconify ที่จะแสดง (เช่น 'ph:user', 'ph:check-circle')</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>size</td>
      <td>ขนาดของไอคอน ตัวเลือกที่มีอยู่:
        <ul>
          <li><code>2xs</code>: เล็กพิเศษพิเศษ (16px)</li>
          <li><code>xs</code>: เล็กพิเศษ (20px)</li>
          <li><code>sm</code>: เล็ก (24px)</li>
          <li><code>md</code>: กลาง (36px)</li>
          <li><code>lg</code>: ใหญ่ (40px)</li>
          <li><code>xl</code>: ใหญ่พิเศษ (56px)</li>
          <li><code>2xl</code>: ใหญ่พิเศษพิเศษ (80px)</li>
        </ul>
      </td>
      <td>'2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'</td>
      <td>'md'</td>
    </tr>
    <tr>
      <td>tone</td>
      <td>โทนสีของไอคอน ตัวเลือกที่มีอยู่:
        <ul>
          <li><code>success</code>: เขียว สำหรับการดำเนินการ/สถานะเชิงบวก</li>
          <li><code>error</code>: แดง สำหรับข้อผิดพลาด/ความล้มเหลว</li>
          <li><code>info</code>: น้ำเงิน สำหรับข้อมูล</li>
          <li><code>pending</code>: เหลือง สำหรับสถานะที่กำลังดำเนินการ</li>
          <li><code>caution</code>: ส้ม สำหรับคำเตือน</li>
        </ul>
      </td>
      <td>'success' | 'error' | 'info' | 'pending' | 'caution'</td>
      <td>-</td>
    </tr>
    <tr>
      <td>variant</td>
      <td>สไตล์ภาพของไอคอน:
        <ul>
          <li><code>primary</code>: พื้นหลังเต็ม</li>
          <li><code>secondary</code>: เค้าโครงด้วยพื้นหลังอ่อน</li>
          <li><code>tertiary</code>: ไอคอนธรรมดาโดยไม่มีพื้นหลัง</li>
        </ul>
      </td>
      <td>'primary' | 'secondary' | 'tertiary'</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

## การใช้ผลิตภัณฑ์

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import SprIcon from "@/components/icon/icon.vue";
import SprLogo from "@/components/logo/logo.vue";
</script>
