---
outline: 'deep'
---

# ป็อปเปอร์

ป็อปเปอร์เป็นยูทิลิตี้สำหรับการจัดตำแหน่งองค์ประกอบลอยตัวสัมพันธ์กับองค์ประกอบอ้างอิง โดยทั่วไปใช้สำหรับทูลทิป ดร็อปดาวน์ และเนื้อหาซ้อนทับอื่นๆ

## คุณสมบัติหลัก

<ul>
  <li>
    <strong>การจัดตำแหน่งแบบไดนามิก:</strong>
    <span>จัดตำแหน่งเนื้อหาอัตโนมัติสัมพันธ์กับองค์ประกอบอ้างอิง</span>
  </li>
  <li>
    <strong>การจัดตำแหน่งที่ยืดหยุ่น:</strong>
    <span>รองรับตัวเลือกการจัดตำแหน่งหลายแบบ รวมถึงด้านบน ล่าง ซ้าย ขวา และรูปแบบต่างๆ ของพวกมัน</span>
  </li>
  <li>
    <strong>การคลิกภายนอก:</strong>
    <span>การตรวจจับการคลิกภายนอกในตัวเพื่อปิดป็อปเปอร์อัตโนมัติ</span>
  </li>
  <li>
    <strong>เนื้อหาแบบสล็อต:</strong>
    <span>การจัดการเนื้อหาที่ยืดหยุ่นผ่านสล็อต Vue สำหรับทั้งทริกเกอร์และเนื้อหา</span>
  </li>
  <li>
    <strong>การเข้าถึง:</strong>
    <span>สอดคล้องกับ ARIA เพื่อการสนับสนุนการเข้าถึงที่ดีขึ้น</span>
  </li>
</ul>

## การใช้งานพื้นฐาน

ป็อปเปอร์พื้นฐานต้องมีองค์ประกอบทริกเกอร์และเนื้อหาที่จะแสดง

<div class="spr-w-fit">
  <spr-popper
    id="basic-example"
    distance="4"
    placement="bottom"
    :triggers="[]"
    :popper-hide-triggers="[]"
    :auto-hide="false"
    :delay="0"
  >
    <spr-button>คลิกสำหรับเมนู</spr-button>
    <template #content>
      <div class="spr-p-4 spr-bg-white spr-shadow-lg spr-rounded-lg">
        <h3 class="spr-text-lg spr-font-medium spr-mb-2">ตัวเลือกเมนู</h3>
        <ul class="spr-space-y-2">
          <li class="spr-flex spr-items-center spr-gap-2 spr-p-2 spr-hover:bg-gray-50 spr-rounded">
            <Icon icon="ph:user" class="spr-w-5 spr-h-5" />
            <span>โปรไฟล์</span>
          </li>
          <li class="spr-flex spr-items-center spr-gap-2 spr-p-2 spr-hover:bg-gray-50 spr-rounded">
            <Icon icon="ph:gear" class="spr-w-5 spr-h-5" />
            <span>การตั้งค่า</span>
          </li>
          <li class="spr-flex spr-items-center spr-gap-2 spr-p-2 spr-hover:bg-gray-50 spr-rounded">
            <Icon icon="ph:sign-out" class="spr-w-5 spr-h-5" />
            <span>ออกจากระบบ</span>
          </li>
        </ul>
      </div>
    </template>
  </spr-popper>
</div>

```vue
<template>
  <spr-popper
    id="basic-example"
    distance="4"
    placement="bottom"
    :triggers="[]"
    :popper-hide-triggers="[]"
    :auto-hide="false"
    :delay="0"
  >
    <spr-button>คลิกสำหรับเมนู</spr-button>
    <template #content>
      <div class="spr-bg-white spr-rounded-lg spr-p-4 spr-shadow-lg">
        <h3 class="spr-mb-2 spr-text-lg spr-font-medium">ตัวเลือกเมนู</h3>
        <ul class="spr-space-y-2">
          <li class="spr-hover:bg-gray-50 spr-flex spr-items-center spr-gap-2 spr-rounded spr-p-2">
            <Icon icon="ph:user" class="spr-h-5 spr-w-5" />
            <span>โปรไฟล์</span>
          </li>
          <li class="spr-hover:bg-gray-50 spr-flex spr-items-center spr-gap-2 spr-rounded spr-p-2">
            <Icon icon="ph:gear" class="spr-h-5 spr-w-5" />
            <span>การตั้งค่า</span>
          </li>
          <li class="spr-hover:bg-gray-50 spr-flex spr-items-center spr-gap-2 spr-rounded spr-p-2">
            <Icon icon="ph:sign-out" class="spr-h-5 spr-w-5" />
            <span>ออกจากระบบ</span>
          </li>
        </ul>
      </div>
    </template>
  </spr-popper>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>
```

## การจัดตำแหน่ง

ป็อปเปอร์สามารถจัดตำแหน่งได้ในตำแหน่งต่างๆ สัมพันธ์กับองค์ประกอบทริกเกอร์

<div class="spr-w-fit spr-grid spr-grid-cols-4 spr-gap-4 spr-p-8">

  <spr-popper id="top-popper" placement="top" distance="4">
    <spr-button tone="information">
      <template #prefix-icon>
        <Icon icon="ph:arrow-up" />
      </template>
      ป็อปเปอร์ด้านบน
    </spr-button>
    <template #content>
      <div class="spr-p-3 spr-bg-white spr-shadow-lg spr-rounded-lg spr-flex spr-items-center spr-gap-2">
        <Icon icon="ph:info" class="spr-text-blue-500 spr-w-5 spr-h-5" />
        <span>เนื้อหาที่จัดตำแหน่งด้านบน</span>
      </div>
    </template>
  </spr-popper>

  <spr-popper id="right-popper" placement="right" distance="4">
    <spr-button tone="success">
      <template #prefix-icon>
        <Icon icon="ph:arrow-right" />
      </template>
      ป็อปเปอร์ด้านขวา
    </spr-button>
    <template #content>
      <div class="spr-p-3 spr-bg-white spr-shadow-lg spr-rounded-lg spr-flex spr-items-center spr-gap-2">
        <Icon icon="ph:check-circle" class="spr-text-green-500 spr-w-5 spr-h-5" />
        <span>เนื้อหาที่จัดตำแหน่งด้านขวา</span>
      </div>
    </template>
  </spr-popper>

  <spr-popper id="bottom-popper" placement="bottom" distance="4">
    <spr-button tone="danger">
      <template #prefix-icon>
        <Icon icon="ph:arrow-down" />
      </template>
      ป็อปเปอร์ด้านล่าง
    </spr-button>
    <template #content>
      <div class="spr-p-3 spr-bg-white spr-shadow-lg spr-rounded-lg spr-flex spr-items-center spr-gap-2">
        <Icon icon="ph:warning" class="spr-text-red-500 spr-w-5 spr-h-5" />
        <span>เนื้อหาที่จัดตำแหน่งด้านล่าง</span>
      </div>
    </template>
  </spr-popper>

  <spr-popper id="left-popper" placement="left" distance="4">
    <spr-button tone="neutral">
      <template #prefix-icon>
        <Icon icon="ph:arrow-left" />
      </template>
      ป็อปเปอร์ด้านซ้าย
    </spr-button>
    <template #content>
      <div class="spr-p-3 spr-bg-white spr-shadow-lg spr-rounded-lg spr-flex spr-items-center spr-gap-2">
        <Icon icon="ph:bell" class="spr-text-gray-500 spr-w-5 spr-h-5" />
        <span>เนื้อหาที่จัดตำแหน่งด้านซ้าย</span>
      </div>
    </template>
  </spr-popper>
</div>

```vue
<template>
  <spr-popper id="top-popper" placement="top">
    <spr-button tone="information">
      <template #prefix-icon>
        <Icon icon="ph:arrow-up" />
      </template>
      ป็อปเปอร์ด้านบน
    </spr-button>
    <template #content>
      <div class="spr-bg-white spr-flex spr-items-center spr-gap-2 spr-rounded-lg spr-p-3 spr-shadow-lg">
        <Icon icon="ph:info" class="spr-h-5 spr-w-5 spr-text-blue-500" />
        <span>เนื้อหาที่จัดตำแหน่งด้านบน</span>
      </div>
    </template>
  </spr-popper>

  <!-- คล้ายกันสำหรับด้านขวา ล่าง และซ้าย -->
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>
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
      <td>ตัวระบุที่ไม่ซ้ำสำหรับคอนเทนเนอร์ป็อปเปอร์ จำเป็นสำหรับการทำงานที่ถูกต้อง</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>กำหนดตำแหน่งของป็อปเปอร์สัมพันธ์กับองค์ประกอบอ้างอิง รองรับ: 'auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'</td>
      <td>string</td>
      <td>'bottom'</td>
    </tr>
    <tr>
      <td>triggers</td>
      <td>อาร์เรย์ของอีเวนต์ที่จะทริกเกอร์ให้ป็อปเปอร์แสดง ค่าทั่วไปรวมถึง:
        <ul>
          <li><code>click</code>: แสดงเมื่อคลิก</li>
          <li><code>hover</code>: แสดงเมื่อเลื่อนเมาส์เข้า</li>
          <li><code>focus</code>: แสดงเมื่อโฟกัส</li>
          <li><code>touch</code>: แสดงเมื่อสัมผัส</li>
        </ul>
        อาร์เรย์ว่างหมายถึงการควบคุมด้วยตนเองผ่าน v-model
      </td>
      <td>string[]</td>
      <td>['click']</td>
    </tr>
    <tr>
      <td>popper-hide-triggers</td>
      <td>อาร์เรย์ของอีเวนต์ที่จะทริกเกอร์ให้ป็อปเปอร์ซ่อน ใช้ค่าเดียวกันกับทริกเกอร์ อาร์เรย์ว่างหมายถึงการควบคุมด้วยตนเอง</td>
      <td>string[]</td>
      <td>['click']</td>
    </tr>
    <tr>
      <td>auto-hide</td>
      <td>เมื่อเป็นจริง ป็อปเปอร์จะซ่อนอัตโนมัติเมื่อคลิกภายนอก</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>delay</td>
      <td>การหน่วงเวลาเป็นมิลลิวินาทีก่อนแสดง/ซ่อนป็อปเปอร์ มีประโยชน์สำหรับการโต้ตอบแบบโฮเวอร์</td>
      <td>number</td>
      <td>0</td>
    </tr>
    <tr>
      <td>distance</td>
      <td>ระยะห่างเป็นพิกเซลระหว่างป็อปเปอร์กับองค์ประกอบอ้างอิง</td>
      <td>number | string</td>
      <td>"4"</td>
    </tr>
  </tbody>
</table>

### สล็อต

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
      <td>องค์ประกอบทริกเกอร์ที่จะแสดง/ซ่อนเนื้อหาป็อปเปอร์เมื่อคลิก</td>
    </tr>
    <tr>
      <td>content</td>
      <td>เนื้อหาที่จะแสดงในป็อปเปอร์เมื่อถูกทริกเกอร์</td>
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
import SprPopper from "@/components/popper/popper.vue";
import SprButton from "@/components/button/button.vue";
import SprLogo from "@/components/logo/logo.vue";
</script>
