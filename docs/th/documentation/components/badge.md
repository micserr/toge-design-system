---
title: ป้าย
descripttion: คอมโพเนนต์ Badge เป็นตัวบ่งชี้ภาพเล็กๆ ที่สามารถใช้เพื่อสื่อสารข้อมูล สถานะ หรือการแจ้งเตือน มักใช้ร่วมกับองค์ประกอบ UI อื่นๆ เพื่อให้บริบทหรือเน้นข้อมูลสำคัญ ป้ายสามารถปรับแต่งได้ในแง่ของข้อความ สี ขนาด และตำแหน่ง
outline: deep
---

# ป้าย

คอมโพเนนต์ Badge เป็นตัวบ่งชี้ภาพเล็กๆ ที่สามารถใช้เพื่อสื่อสารข้อมูล สถานะ หรือการแจ้งเตือน มักใช้ร่วมกับองค์ประกอบ UI อื่นๆ เพื่อให้บริบทหรือเน้นข้อมูลสำคัญ ป้ายสามารถปรับแต่งได้ในแง่ของข้อความ สี ขนาด และตำแหน่ง

## คุณสมบัติหลัก

<ul>
  <li><strong>ข้อความ:</strong> ป้ายมักมีข้อความสั้นหรือตัวเลขเพื่อสื่อสารข้อมูล
  </li>
  <li><strong>ตัวแปร:</strong> ป้ายสามารถมีโครงร่างสีที่แตกต่างกันเพื่อระบุสถานะต่างๆ เช่น ปิดใช้งาน แบรนด์ เสี่ยง หรือข้อมูล
  </li>
  <li><strong>ขนาด:</strong> ป้ายสามารถมีขนาดที่แตกต่างกันเพื่อให้เหมาะกับความต้องการในการออกแบบต่างๆ (เช่น "big", "small", tiny)
  </li>
    <li><strong>การจัดตำแหน่ง:</strong> ป้ายสามารถจัดตำแหน่งสัมพันธ์กับองค์ประกอบที่แนบอยู่ เช่น ที่มุมขวาบนหรือมุมขวาล่าง
  </li>
</ul>

## การใช้งานพื้นฐาน

<div class="spr-flex spr-items-center spr-gap-2 spr-p-1">
  <spr-badge variant="neutral" size="big" />
  <spr-badge variant="disabled" size="big" />
  <spr-badge variant="danger" size="big" />
  <spr-badge variant="information" size="big" />
  <spr-badge variant="brand" size="big" />
</div>

<div class="spr-flex spr-items-center spr-gap-2 spr-p-1">
  <spr-badge variant="neutral" size="small" />
  <spr-badge variant="disabled" size="small" />
  <spr-badge variant="danger" size="small" />
  <spr-badge variant="information" size="small" />
  <spr-badge variant="brand" size="small" />
</div>

<div class="spr-flex spr-items-center spr-gap-2 spr-p-1">
  <spr-badge variant="neutral" size="tiny" />
  <spr-badge variant="disabled" size="tiny" />
  <spr-badge variant="danger" size="tiny" />
  <spr-badge variant="information" size="tiny" />
  <spr-badge variant="brand" size="tiny" />
</div>

```vue
<template>
  <div>
    <spr-badge text="9" variant="neutral" size="big" />
    <spr-badge text="9" variant="disabled" size="big" />
    <spr-badge text="9" variant="danger" size="big" />
    <spr-badge text="9" variant="information" size="big" />
    <spr-badge text="9" variant="brand" size="big" />
  </div>

  <div>
    <spr-badge text="9" variant="neutral" size="small" />
    <spr-badge text="9" variant="disabled" size="small" />
    <spr-badge text="9" variant="danger" size="small" />
    <spr-badge text="9" variant="information" size="small" />
    <spr-badge text="9" variant="brand" size="small" />
  </div>

  <div>
    <spr-badge variant="neutral" size="tiny" />
    <spr-badge variant="disabled" size="tiny" />
    <spr-badge variant="danger" size="tiny" />
    <spr-badge variant="information" size="tiny" />
    <spr-badge variant="brand" size="tiny" />
  </div>
</template>
```

## ตัวแปร

ใช้เพื่อปรับแต่งพื้นหลังของป้าย

<div class="spr-p-1 spr-flex spr-gap-4">
  <spr-badge text="9" variant="neutral" size="big" />
  <spr-badge text="9" variant="disabled" size="big" />
  <spr-badge text="9" variant="danger" size="big" />
  <spr-badge text="9" variant="information" size="big" />
  <spr-badge text="9" variant="brand" size="big" />
</div>

```vue
<template>
  <div>
    <spr-badge text="9" variant="neutral" size="big" />
    <spr-badge text="9" variant="disabled" size="big" />
    <spr-badge text="9" variant="danger" size="big" />
    <spr-badge text="9" variant="information" size="big" />
    <spr-badge text="9" variant="brand" size="big" />
  </div>
</template>
```

## ขนาด

<div class="spr-flex spr-gap-4">
  <spr-badge text="4" variant="information" size="tiny" />
  <spr-badge text="0" variant="information" size="small" />
  <spr-badge text="30" variant="information" size="big" />
</div>

```vue
<template>
  <div>
    <spr-badge text="4" variant="information" size="tiny" />
    <spr-badge text="0" variant="information" size="small" />
    <spr-badge text="30" variant="information" size="big" />
  </div>
</template>
```

## ตำแหน่ง

ใช้เพื่อแสดงป้ายในตำแหน่งที่แตกต่างกัน (บน ล่าง)

<div class="spr-grid spr-gap-4">
  <div class="spr-flex spr-gap-4">
    <spr-badge text="9" variant="neutral" size="big" position="top">
      <spr-lozenge label="top" />
    </spr-badge>
    <spr-badge text="9" variant="neutral" size="small" position="top">
      <spr-lozenge label="top"/>
    </spr-badge>
    <spr-badge text="9" variant="neutral" size="tiny" position="top">
      <spr-lozenge label="top"/>
    </spr-badge>
  </div>

  <div class="spr-flex spr-gap-4">
    <spr-badge text="9" variant="brand" size="big" position="top">
      <spr-lozenge label="top" />
    </spr-badge>
    <spr-badge text="9" variant="brand" size="small" position="top">
      <spr-lozenge label="top"/>
    </spr-badge>
    <spr-badge text="9" variant="brand" size="tiny" position="top">
      <spr-lozenge label="top"/>
    </spr-badge>
  </div>

  <div class="spr-flex spr-gap-4">
    <spr-badge text="9" variant="information" size="big" position="bottom">
      <spr-lozenge label="bottom"/>
    </spr-badge>
    <spr-badge text="9" variant="information" size="small" position="bottom">
      <spr-lozenge label="bottom"/>
    </spr-badge>
    <spr-badge text="9" variant="information" size="tiny" position="bottom">
      <spr-lozenge label="bottom"/>
    </spr-badge>
  </div>

  <div class="spr-flex spr-gap-4">
    <spr-badge text="9" variant="danger" size="big" >
      <spr-lozenge label="default"/>
    </spr-badge>
    <spr-badge text="9" variant="danger" size="small">
      <spr-lozenge label="default"/>
    </spr-badge>
    <spr-badge text="9" variant="danger" size="tiny">
      <spr-lozenge label="default"/>
    </spr-badge>
  </div>
</div>

```vue
<template>
  <div>
    <spr-badge text="9" variant="neutral" size="big" position="top">
      <spr-lozenge label="top" />
    </spr-badge>
    <spr-badge text="9" variant="neutral" size="small" position="top">
      <spr-lozenge label="top" />
    </spr-badge>
    <spr-badge text="9" variant="neutral" size="tiny" position="top">
      <spr-lozenge label="top" />
    </spr-badge>
  </div>

  <div>
    <spr-badge text="9" variant="brand" size="big" position="top">
      <spr-lozenge label="top" />
    </spr-badge>
    <spr-badge text="9" variant="brand" size="small" position="top">
      <spr-lozenge label="top" />
    </spr-badge>
    <spr-badge text="9" variant="brand" size="tiny" position="top">
      <spr-lozenge label="top" />
    </spr-badge>
  </div>

  <div>
    <spr-badge text="9" variant="information" size="big" position="bottom">
      <spr-lozenge label="bottom" />
    </spr-badge>
    <spr-badge text="9" variant="information" size="small" position="bottom">
      <spr-lozenge label="bottom" />
    </spr-badge>
    <spr-badge text="9" variant="information" size="tiny" position="bottom">
      <spr-lozenge label="bottom" />
    </spr-badge>
  </div>

  <div>
    <spr-badge text="9" variant="danger" size="big">
      <spr-lozenge label="default" />
    </spr-badge>
    <spr-badge text="9" variant="danger" size="small">
      <spr-lozenge label="default" />
    </spr-badge>
    <spr-badge text="9" variant="danger" size="tiny">
      <spr-lozenge label="default" />
    </spr-badge>
  </div>
</template>
```

### ตำแหน่งเริ่มต้นโดยใช้สล็อต

เมื่อใช้ตำแหน่งเริ่มต้น คุณสามารถใช้สล็อตเพื่อห่อหุ้มองค์ประกอบที่คุณต้องการแนบป้าย

<div class="spr-flex spr-gap-4">
  <spr-badge text="9" variant="brand" size="big" position="top">
    <spr-lozenge label="top"/>
  </spr-badge>
  <spr-badge text="9" variant="brand" size="small" position="top">
    <spr-lozenge label="top"/>
  </spr-badge>
  <spr-badge text="9" variant="brand" size="tiny" position="top">
    <spr-lozenge label="top"/>
  </spr-badge>
</div>

```vue
<template>
  <div>
    <spr-badge text="9" variant="brand" size="big" position="top">
      <spr-lozenge label="top" />
    </spr-badge>
    <spr-badge text="9" variant="brand" size="small" position="top">
      <spr-lozenge label="top" />
    </spr-badge>
    <spr-badge text="9" variant="brand" size="tiny" position="top">
      <spr-lozenge label="top" />
    </spr-badge>
  </div>
</template>
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
      <td>text</td>
      <td>
        เนื้อหาที่แสดงภายในป้าย โดยปกติจะเป็นข้อความสั้นหรือตัวเลขที่แสดงถึงจำนวน การแจ้งเตือน หรือตัวบ่งชี้สถานะ โปรดทราบว่าหากขนาดถูกตั้งเป็น <code>tiny</code> ข้อความจะไม่ถูกแสดง
      </td>
      <td>string</td>
      <td>'0'</td>
    </tr>
    <tr>
      <td>variant</td>
      <td>
        กำหนดโครงร่างสีและสไตล์ภาพของป้ายเพื่อระบุสถานะต่างๆ:
        <ul>
          <li><code>brand</code>: สีแบรนด์หลัก ใช้สำหรับการแจ้งเตือนมาตรฐาน</li>
          <li><code>information</code>: สีน้ำเงิน ใช้สำหรับการแจ้งเตือนข้อมูล</li>
          <li><code>danger</code>: สีแดง ใช้สำหรับการแจ้งเตือนที่สำคัญหรือข้อผิดพลาด</li>
          <li><code>disabled</code>: สีเทา ใช้สำหรับสถานะที่ไม่ได้ใช้งานหรือปิดใช้งาน</li>
        </ul>
      </td>
      <td>'brand' | 'information' | 'danger' | 'disabled'</td>
      <td>'brand'</td>
    </tr>
    <tr>
      <td>size</td>
      <td>
        ควบคุมขนาดของป้าย:
        <ul>
          <li><code>big</code>: ขนาดใหญ่ที่สุด (ความสูง 20px ความกว้างขั้นต่ำ 20px) เหมาะสำหรับการแจ้งเตือนสำคัญหรือเมื่อใช้ข้อความที่ยาวขึ้น</li>
          <li><code>small</code>: ขนาดปานกลาง (ความสูง 16px ความกว้างขั้นต่ำ 16px) เหมาะสำหรับกรณีส่วนใหญ่</li>
          <li><code>tiny</code>: ขนาดเล็กที่สุด (ความสูง 10px ความกว้างขั้นต่ำ 10px) ใช้เป็นจุดบ่งชี้แบบง่ายโดยไม่มีข้อความ</li>
        </ul>
      </td>
      <td>'big' | 'small' | 'tiny'</td>
      <td>'small'</td>
    </tr>
    <tr>
      <td>position</td>
      <td>
        กำหนดตำแหน่งของป้ายสัมพันธ์กับคอนเทนเนอร์หรือเนื้อหาที่สล็อต:
        <ul>
          <li><code>top</code>: จัดตำแหน่งป้ายที่มุมขวาบนขององค์ประกอบหลัก</li>
          <li><code>bottom</code>: จัดตำแหน่งป้ายที่มุมขวาล่างขององค์ประกอบหลัก</li>
          <li><code>default</code>: แสดงป้ายเป็นองค์ประกอบแบบสแตนด์อโลน</li>
        </ul>
        เมื่อใช้ตำแหน่ง <code>top</code> หรือ <code>bottom</code> คุณควรใช้สล็อตเริ่มต้นเพื่อห่อหุ้มองค์ประกอบที่ป้ายจะถูกแนบ
      </td>
      <td>'top' | 'bottom' | 'default'</td>
      <td>'default'</td>
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
      <td>
        เนื้อหาที่ป้ายจะถูกแนบ สิ่งนี้จำเป็นเมื่อใช้ตำแหน่ง <code>top</code> หรือ <code>bottom</code> ป้ายจะถูกจัดตำแหน่งสัมพันธ์กับเนื้อหานี้ หากไม่มีการระบุเนื้อหาสล็อต ป้ายจะถูกแสดงเป็นองค์ประกอบแบบสแตนด์อโลน
      </td>
    </tr>
  </tbody>
</table>

## การใช้ผลิตภัณฑ์

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark" width="50px" />
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import { ref } from 'vue';

import SprBadge from "@/components/badge/badge.vue"
import SprLozenge from '@/components/lozenge/lozenge.vue';
import SprLogo from "@/components/logo/logo.vue";
</script>
